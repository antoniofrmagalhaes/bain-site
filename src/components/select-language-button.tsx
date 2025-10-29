"use client";

import { useEffect } from "react";
import { useApplication } from "@/contexts/application-context";

type Props = { mobile?: boolean };

const LOCALES = [
  { code: "pt-br", flag: "fi fi-br", label: "Português (BR)" },
  { code: "en-us", flag: "fi fi-us", label: "English (US)" },
  { code: "es-la", flag: "fi fi-es", label: "Español (LA)" },
  { code: "de-de", flag: "fi fi-de", label: "Deutsch (DE)" },
];

export default function SelectLanguage({ mobile }: Props) {
  const { changeLanguage, language } = useApplication();

  const handleClick = (code: string) => {
    changeLanguage(code);
  };

  const handleKeyDown = (code: string, e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      changeLanguage(code);
    }
  };

  const Flag = ({ code, flag, label }: (typeof LOCALES)[number]) => (
    <button
      type="button"
      onClick={() => handleClick(code)}
      onKeyDown={(e) => handleKeyDown(code, e)}
      aria-label={label}
      aria-pressed={language === code}
      title={label}
      data-locale={code}
      className={[
        "inline-flex items-center justify-center p-0 m-0 leading-none",
        "rounded outline-none focus-visible:ring-2 focus-visible:ring-white/60",
        language === code ? "opacity-100" : "opacity-60 hover:opacity-100",
        "transition-opacity duration-200 pointer-events-auto relative z-10",
      ].join(" ")}
      style={{ fontSize: 20 }}
    >
      <span className={` cursor-pointer ${flag} block`} />
    </button>
  );

  const onContainerClickCapture = (e: React.MouseEvent) => {
    const t = e.target as HTMLElement;
  };

  if (mobile) {
    return (
      <div
        className="flex items-center gap-3 pointer-events-auto relative z-10"
        onClickCapture={onContainerClickCapture}
      >
        {LOCALES.map((l) => (
          <Flag key={l.code} {...l} />
        ))}
      </div>
    );
  }

  return (
    <div
      className="flex items-start gap-3 pointer-events-auto relative z-10"
      onClickCapture={onContainerClickCapture}
    >
      <div className="flex flex-col gap-2">
        <Flag {...LOCALES[0]} />
        <Flag {...LOCALES[1]} />
      </div>
      <div className="flex flex-col gap-2">
        <Flag {...LOCALES[2]} />
        <Flag {...LOCALES[3]} />
      </div>
    </div>
  );
}
