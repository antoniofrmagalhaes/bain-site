"use client";

import * as React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useApplication } from "@/contexts/application-context";
import LiveGameButton from "./live-game-button";
import BuyVipButton from "./buy-vip-button";
import SelectLanguage from "./select-language-button";

const ACCENT = "#FFB430";

export default function SiteMobileMenu(): React.JSX.Element {
  const { pageContent } = useApplication();
  const ariaTitle = pageContent?.layout?.["mobileMenuTitle"] ?? "Menu";
  const ariaDesc =
    pageContent?.layout?.["mobileMenuDescription"] ??
    "Navegação principal do site";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label={typeof ariaTitle === "string" ? ariaTitle : "Menu"}
          className="
            lg:hidden inline-flex items-center justify-center
            h-9 w-9 rounded-[2px] border border-[#2a2a2a]
            bg-[#1a1a1a]/80 text-white
            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB430]/60
            hover:bg-[#191b1f]
          "
        >
          <span className="relative block h-3.5 w-5">
            <span
              className="absolute inset-x-0 top-0 h-0.5 rounded"
              style={{ backgroundColor: ACCENT }}
            />
            <span
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 rounded"
              style={{ backgroundColor: ACCENT }}
            />
            <span
              className="absolute inset-x-0 bottom-0 h-0.5 rounded"
              style={{ backgroundColor: ACCENT }}
            />
          </span>
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="
          w-full max-w-[420px]
          bg-[#1a1a1a]/95 text-white shadow-2xl
          border border-[#2a2a2a]
          p-0 flex flex-col
        "
      >
        <SheetTitle className="sr-only">
          {typeof ariaTitle === "string" ? ariaTitle : "Menu"}
        </SheetTitle>
        <SheetDescription className="sr-only">
          {typeof ariaDesc === "string" ? ariaDesc : "Navegação"}
        </SheetDescription>

        <div className="flex-1 flex flex-col min-h-[100svh]">
          <div
            className="flex-1 overflow-y-auto overscroll-contain"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <nav className="mx-auto flex w-full max-w-[260px] flex-col items-center gap-10 text-center py-12">
              <div className="text-[15px]">
                <LiveGameButton />
              </div>
              <div className="w-full">
                <BuyVipButton />
              </div>
            </nav>
          </div>

          <div className="px-8 pb-8 pt-0 flex justify-center">
            <SelectLanguage mobile />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
