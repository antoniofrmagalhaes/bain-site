"use client";

import * as React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import BuyVipForm from "./buy-vip-form";
import { useApplication } from "@/contexts/application-context";

export default function BuyVipButton(): React.JSX.Element {
  const { pageContent } = useApplication();
  const label = pageContent.ui.buyVipButton.buttonText;
  const a11yDesc = pageContent.ui.buyVipButton.a11yDescription;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          data-testid="buy-vip-open"
          aria-label={label}
          title={label}
          className={[
            "cursor-pointer inline-flex items-center justify-center",
            "px-4 py-2 rounded-md text-sm md:text-base font-medium",
            "text-white border border-[#FFB430] shadow-md",
            "hover:bg-[#FFB430] hover:text-black",
            "active:shadow-none",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB430]/70",
            "transition-colors",
          ].join(" ")}
        >
          {label}
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="
    w-full max-w-[530px]
    bg-[#1a1a1a]/95 text-white shadow-2xl
    border border-[#2a2a2a]
    p-0 flex flex-col
  "
      >
        <SheetTitle className="sr-only">{label}</SheetTitle>
        <SheetDescription className="sr-only">{a11yDesc}</SheetDescription>

        <div
          className="flex-1 overflow-y-auto overscroll-contain max-h-[100svh] p-6"
          style={{
            WebkitOverflowScrolling: "touch",
            paddingBottom: "calc(1.5rem + env(safe-area-inset-bottom))",
            scrollbarGutter: "stable",
          }}
        >
          <BuyVipForm />
        </div>
      </SheetContent>
    </Sheet>
  );
}
