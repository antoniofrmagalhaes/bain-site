"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useConsent } from "@/hooks/use-consent";

const ACCENT = "#FFB430";

export default function VipNoticeDialog() {
  const { state, promoDismissed, setPromoNeverAgain } = useConsent();

  const [open, setOpen] = React.useState(false);
  const [dontShowAgain, setDontShowAgain] = React.useState(false);

  React.useEffect(() => {
    setOpen(state === "accepted" && !promoDismissed);
  }, [state, promoDismissed]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      if (k === "y" || k === "escape") {
        if (dontShowAgain && state === "accepted") setPromoNeverAgain(true);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dontShowAgain, state, setPromoNeverAgain]);

  React.useEffect(() => {
    if (!open && dontShowAgain && state === "accepted") {
      setPromoNeverAgain(true);
    }
  }, [open, dontShowAgain, state, setPromoNeverAgain]);

  const baseWidth = 120;
  const hoverWidth = Math.round(baseWidth * 1.15);

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        if (!v && dontShowAgain && state === "accepted")
          setPromoNeverAgain(true);
        setOpen(v);
      }}
    >
      <DialogContent
        aria-describedby="vip-notice-desc"
        className="
          bg-[#1a1a1a]/95 sm:max-w-[560px] text-white border border-[#2a2a2a]
          rounded-[2px] p-0 [&_[data-slot='dialog-close']]:hidden
          top-4 right-4 left-auto translate-x-0 translate-y-0
        "
      >
        <div className="px-6 pt-4 pb-3 select-none">
          <DialogTitle asChild>
            <div className="flex items-center gap-3">
              <span
                className="tracking-[0.35em] text-[13px] font-semibold"
                style={{ color: ACCENT }}
              >
                AVISO
              </span>
              <span
                className="h-[2px] w-full"
                style={{ backgroundColor: ACCENT, opacity: 0.85 }}
              />
            </div>
          </DialogTitle>
        </div>

        <div className="px-6 pb-2">
          <DialogDescription id="vip-notice-desc" asChild>
            <div className="space-y-4">
              <p className="uppercase text-[13px] text-white/85">
                ACESSO SEM FILA
              </p>
              <p className="uppercase text-[18px] leading-6 font-semibold text-white">
                COMPRE O VIP PELO SITE E ENTRE NA HORA.
              </p>
            </div>
          </DialogDescription>
        </div>

        <div className="px-6 pb-5 pt-4 flex items-center justify-between gap-3">
          <label className="inline-flex items-center gap-2 select-none text-[13px] text-white/85 cursor-pointer">
            <input
              type="checkbox"
              className="
                h-4 w-4 appearance-none rounded-[2px]
                border border-white/35 bg-transparent cursor-pointer
                transition-colors
                checked:bg-[#FFB430] checked:border-[#FFB430]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
              "
              checked={dontShowAgain}
              onChange={(e) => {
                setDontShowAgain(e.target.checked);
                if (e.target.checked && state === "accepted") {
                  setPromoNeverAgain(true);
                }
                if (!e.target.checked && state === "accepted") {
                  setPromoNeverAgain(false);
                }
              }}
              disabled={state !== "accepted"}
              title={
                state !== "accepted"
                  ? "Aceite cookies para salvar esta preferência."
                  : undefined
              }
              aria-label="Não mostrar novamente"
            />
            <span>Não mostrar novamente</span>
          </label>

          <div className="flex items-center justify-end gap-3">
            <div className="flex items-center justify-end min-w-[120px]">
              <motion.button
                type="button"
                onClick={() => {
                  if (dontShowAgain && state === "accepted") {
                    setPromoNeverAgain(true);
                  }
                  setOpen(false);
                }}
                className="
                  relative inline-flex items-center justify-end
                  h-9 px-5 text-[13px] font-semibold cursor-pointer
                  bg-[#2f2f2f] text-white rounded-[2px]
                  hover:bg-[#3a3a3a]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                  overflow-hidden
                "
                style={{ width: baseWidth }}
                whileHover={{ width: hoverWidth }}
                transition={{ type: "tween", duration: 0.18, ease: "easeOut" }}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-2 rounded-l-[2px]"
                  style={{ backgroundColor: ACCENT }}
                />
                <span className="relative z-10 select-none">FECHAR</span>
              </motion.button>
            </div>

            <span
              className="text-[13px] font-semibold"
              style={{ color: ACCENT }}
            >
              [Y]
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
