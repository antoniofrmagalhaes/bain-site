"use client";

import { useApplication } from "@/contexts/application-context";

export default function LiveGameButton() {
  const WAVES = 3;
  const DELAY = 0.2;
  const { pageContent } = useApplication();
  const { liveLabel, liveDotA11y } = pageContent.ui.header;

  return (
    <a
      href="https://ranking.bainclan.com.br"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-3 text-white text-sm lg:text-[14px] font-medium hover:text-[#FFB430]"
    >
      <span>{liveLabel}</span>
      <span className="relative h-[5px] w-[5px]" aria-hidden="true">
        {Array.from({ length: WAVES }).map((_, i) => (
          <span
            key={i}
            className="absolute inset-0 rounded-full bg-red-500 animate-ping"
            style={{ animationDelay: `${i * DELAY}s` }}
          />
        ))}
        <span className="absolute inset-0 rounded-full bg-red-500" />
      </span>
      <span className="sr-only">{liveDotA11y}</span>
    </a>
  );
}
