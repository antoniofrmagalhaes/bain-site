"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useApplication } from "@/contexts/application-context";

export type HelpStep = {
  title: string;
  body: string;
  examples?: string[];
};

const ACCENT = "#FFB430";

export default function BuyVipHelpDialog() {
  const { pageContent } = useApplication();
  const t = pageContent.ui.buyVipHelp;
  const steps: HelpStep[] = t.steps ?? [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={[
            "cursor-pointer opacity-70 hover:opacity-100",
            "text-xs font-semibold underline underline-offset-4",
            "text-[#FFB430] focus:outline-none",
            "focus-visible:ring-2 focus-visible:ring-[#FFB430]/70 rounded",
          ].join(" ")}
        >
          {t.triggerLabel}
        </button>
      </DialogTrigger>

      <DialogContent
        className={[
          "bg-[#1a1a1a]/95 text-white border border-[#2a2a2a] rounded-[2px] p-0",
          "sm:max-w-[720px]",
        ].join(" ")}
      >
        <div className="px-5 pt-4 pb-3 select-none">
          <DialogHeader className="p-0">
            <DialogTitle asChild>
              <div className="grid grid-cols-[auto,1fr] items-center gap-3 pr-10 sm:pr-12 min-w-0">
                <span
                  className="tracking-[0.35em] text-[14px] font-semibold uppercase whitespace-nowrap truncate"
                  style={{ color: ACCENT }}
                  title={t.title}
                >
                  {t.title}
                </span>
                <span
                  aria-hidden
                  className="h-[2px] w-full"
                  style={{ backgroundColor: ACCENT, opacity: 0.85 }}
                />
              </div>
            </DialogTitle>

            <DialogDescription className="mt-3 text-white/85">
              {t.description}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div
          className="px-5 pb-5 max-h-[70vh] overflow-y-auto"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="space-y-6">
            {steps.map((s, i) => (
              <section key={i} className="space-y-3">
                <h3 className="text-sm font-semibold uppercase">{s.title}</h3>
                <p className="text-sm text-white/85 leading-relaxed">
                  {s.body}
                </p>

                {s.examples?.length ? (
                  <ul className="mt-1 space-y-1.5">
                    {s.examples.map((ex, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-white/90"
                      >
                        <span
                          aria-hidden
                          className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
