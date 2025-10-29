"use client";

import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { es, ptBR, enUS, de } from "date-fns/locale";
import ptBrPageContent from "@/config/pt-br";
import enUsPageContent from "@/config/en-us";
import esLaPageContent from "@/config/es-la";
import dePageContent from "@/config/de-de";
import type { SiteContent } from "@/types/site-content";
import type { Locale } from "date-fns";
import { useConsent } from "@/hooks/use-consent";

interface IApplicationContextProps {
  language: string;
  pageContent: SiteContent;
  locale: Locale;
  changeLanguage: (prefix: string) => void;
}

interface IApplicationProvider {
  children: ReactNode;
}

export const ApplicationContext = createContext<IApplicationContextProps>({
  language: "pt-br",
  pageContent: ptBrPageContent,
  locale: ptBR,
  changeLanguage: () => {},
});

const SUPPORTED = ["pt-br", "en-us", "es-la", "de-de"] as const;
type SupportedLang = (typeof SUPPORTED)[number];
const LANG_KEY = "app:lang";

function isSupportedLanguage(v: string | null | undefined): v is SupportedLang {
  return !!v && (SUPPORTED as readonly string[]).includes(v);
}

function usePageContent(language: string): {
  content: SiteContent;
  locale: Locale;
} {
  switch (language) {
    case "en-us":
      return { content: enUsPageContent, locale: enUS };
    case "es-la":
      return { content: esLaPageContent, locale: es };
    case "de-de":
      return { content: dePageContent, locale: de };
    case "pt-br":
    default:
      return { content: ptBrPageContent, locale: ptBR };
  }
}

export function useProvideApplication(): IApplicationContextProps {
  const { state: consentState } = useConsent();

  const [language, setLanguage] = useState<SupportedLang>("pt-br");
  const initial = usePageContent("pt-br");
  const [pageContent, setPageContent] = useState<SiteContent>(initial.content);
  const [locale, setLocale] = useState<Locale>(initial.locale);

  const applyLanguage = useCallback((lang: SupportedLang) => {
    setLanguage(lang);
    const { content, locale } = usePageContent(lang);
    setPageContent(content);
    setLocale(locale);
  }, []);

  const changeLanguage = useCallback(
    (prefix: string) => {
      const lang: SupportedLang = isSupportedLanguage(prefix)
        ? prefix
        : "pt-br";
      applyLanguage(lang);

      if (consentState === "accepted") {
        try {
          localStorage.setItem(LANG_KEY, lang);
        } catch {}
      }
    },
    [applyLanguage, consentState]
  );

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (isSupportedLanguage(stored)) {
        applyLanguage(stored);
      }
    } catch {}
  }, [applyLanguage]);

  useEffect(() => {
    if (consentState === "accepted") {
      try {
        localStorage.setItem(LANG_KEY, language);
      } catch {}
    }
  }, [consentState, language]);

  return { language, pageContent, locale, changeLanguage };
}

const ApplicationProvider: FC<IApplicationProvider> = ({ children }) => {
  const ctx = useProvideApplication();
  return (
    <ApplicationContext.Provider value={ctx}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = (): IApplicationContextProps =>
  useContext(ApplicationContext);

export default ApplicationProvider;
