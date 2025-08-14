import { enUsPageContent } from '@/config/lang/bain/enUsPageContent';
import { ptBrPageContent } from '@/config/lang/bain/ptBrPageContent';
import { esLaPageContent } from '@/config/lang/bain/esLaPageContent';
import { deDePageContent } from '@/config/lang/bain/deDePageContent';
import { arabicPageContent } from '@/config/lang/bain/arabicPageContent';
import { jaJpPageContent } from '@/config/lang/bain/jaJpPageContent';

import React, { FC, ReactNode, createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { ptBR } from 'date-fns/locale';
import { enUS } from 'date-fns/locale';
import { es } from 'date-fns/locale';
import { de } from 'date-fns/locale';
import { arSA } from 'date-fns/locale';
import { ja } from 'date-fns/locale';

interface IApplicationContextProps {
  language: string;
  pageContent: any;
  locale: any;
  changeLanguage: (prefix: string) => void;
}

interface IApplicationProvider {
  children: ReactNode;
}

export const ApplicationContext = createContext<IApplicationContextProps>({} as IApplicationContextProps);

const ApplicationProvider: FC<IApplicationProvider> = ({ children }) => {
  const ctx = useProvideApplication();
  return <ApplicationContext.Provider value={ctx}>{children}</ApplicationContext.Provider>;
};

export const useApplication = (): IApplicationContextProps => {
  return useContext(ApplicationContext);
};

const validLanguages = ['pt-br', 'en-us', 'es-la', 'de-de', 'arabic', 'ja-jp'];

function usePageContent(language: string) {
  switch (language) {
    case 'en-us':
      return { content: enUsPageContent, locale: enUS };
    case 'es-la':
      return { content: esLaPageContent, locale: es };
    case 'de-de':
      return { content: deDePageContent, locale: de };
    case 'arabic':
      return { content: arabicPageContent, locale: arSA };
    case 'ja-jp':
      return { content: jaJpPageContent, locale: ja };
    case 'pt-br':
    default:
      return { content: ptBrPageContent, locale: ptBR };
  }
}

export function useProvideApplication(): IApplicationContextProps {
  const router = useRouter();

  const [language, setLanguage] = useState('pt-br');
  const [pageContent, setPageContent] = useState(usePageContent('pt-br').content);
  const [locale, setLocale] = useState(usePageContent('pt-br').locale);
  const [languageChanged, setLanguageChanged] = useState(false); // Novo estado

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const pathPrefix = router.query.lang as string;

    if (languageChanged) {
      // Se a linguagem foi alterada manualmente, não resete
      return;
    }

    if (validLanguages.includes(pathPrefix)) {
      setLanguage(pathPrefix);
      const { content, locale } = usePageContent(pathPrefix);
      setPageContent(content);
      setLocale(locale);

      if (pathPrefix === 'arabic') {
        if (!audioRef.current) {
          audioRef.current = new Audio('marrakesh_ambient-60947.mp3');
        }
        audioRef.current.play();
      } else if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    } else {
      const { content, locale } = usePageContent('pt-br');
      setLanguage('pt-br');
      setPageContent(content);
      setLocale(locale);
    }
  }, [router.pathname, languageChanged]); // Adicione languageChanged como dependência

  const changeLanguage = useCallback((prefix: string) => {
    setLanguage(prefix);
    setLanguageChanged(true); // Atualize para true quando a linguagem for alterada
    const { content, locale } = usePageContent(prefix);
    setPageContent(content);
    setLocale(locale);

    if (prefix === 'arabic') {
      if (!audioRef.current) {
        audioRef.current = new Audio('marrakesh_ambient-60947.mp3');
      }
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  return {
    language,
    pageContent,
    locale,
    changeLanguage,
  };
}

export default ApplicationProvider;
