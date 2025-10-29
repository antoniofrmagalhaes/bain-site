"use client";

import React, { useMemo, useState, useCallback } from "react";
import { useApplication } from "@/contexts/application-context";
import BuyVipPlayerIdInput from "./buy-vip-player-id-input";

export default function BuyVipForm() {
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [playerId, setPlayerId] = useState("");
  const [email, setEmail] = useState("");
  const { pageContent } = useApplication();
  const t = pageContent.ui.buyVipForm;

  const isSteamId = useCallback((v: string) => /^\d{17}$/.test(v.trim()), []);
  const isEpicId = useCallback(
    (v: string) => /^[a-fA-F0-9]{32}$/.test(v.trim()),
    []
  );
  const isEmailValid = useCallback(
    (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    []
  );

  const idIsValid = isSteamId(playerId) || isEpicId(playerId);
  const emailIsValid = isEmailValid(email);
  const formIsValid = idIsValid && emailIsValid;

  const { subtotal, discount, total } = useMemo(() => {
    const monthly = 15;

    if (isQuarterly) {
      const base = monthly * 3;
      const disc = base - 40;
      return { subtotal: base, discount: disc, total: base - disc };
    }

    return { subtotal: monthly, discount: 0, total: monthly };
  }, [isQuarterly]);

  return (
    <form
      className="flex h-full flex-col justify-between"
      onSubmit={(e) => {
        e.preventDefault();
        if (!formIsValid) return;
        // aqui seguiria a chamada para gerar o PIX / link de pagamento
      }}
    >
      <div className="space-y-6">
        <div className="relative space-y-2 pr-8">
          <div className="flex gap-3">
            <h2 className="text-[20px] font-semibold">{t.title}</h2>
            <span className="inline-flex items-center rounded-sm bg-[#FFB430] px-1 py-0 text-[12px] font-semibold text-black">
              {t.badgeText}
            </span>
          </div>
          <p className="text-[13px] leading-relaxed text-white/60">
            {t.heroText}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-[13px] leading-relaxed text-white">
            {t.instructions}
          </p>

          <BuyVipPlayerIdInput
            label={t.idLabel}
            placeholder={t.idPlaceholder}
            value={playerId}
            onChange={setPlayerId}
            userNotFoundText="Acesso Negado"
          />

          <div className="rounded-md border border-[#2A2A2A] bg-[#141416] p-4">
            <p className="text-sm font-semibold text-white">
              {t.conditionsTitle}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-[13px] text-white/85 marker:text-[#FFB430]">
              {t.conditions.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t.emailLabel}</label>
            <input
              className={[
                "w-full rounded-md border px-3 py-3 text-[14px] text-white placeholder:text-white/60 outline-none",
                "bg-[#141416] border-[#2A2A2A] hover:bg-[#16181B] focus:bg-[#181A1D] focus:border-[#3A3A3A] focus:ring-2 focus:ring-[#FFB430]/25",
                email.length === 0
                  ? ""
                  : emailIsValid
                  ? ""
                  : "border-red-400/60",
              ].join(" ")}
              placeholder={t.emailPlaceholder}
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={email.length > 0 && !emailIsValid}
            />
            <p className="text-[13px] leading-relaxed text-white/80">
              {t.emailHelp}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/90">{t.planLabel}</span>
          <div className="flex items-center gap-3">
            <span className="text-sm">{t.monthlyLabel}</span>
            <button
              type="button"
              onClick={() => setIsQuarterly((v) => !v)}
              aria-pressed={isQuarterly}
              className={[
                "relative inline-flex h-5 w-10 items-center rounded-full transition-colors",
                isQuarterly ? "bg-[#FFB430]" : "bg-white/30",
              ].join(" ")}
            >
              <span
                className={[
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  isQuarterly ? "translate-x-5" : "translate-x-1",
                ].join(" ")}
              />
            </button>
            <span className="text-sm">{t.quarterlyLabel}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/80">{t.subtotalLabel}</span>
            <span className="text-white/90">
              {t.currency} {subtotal.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/80">{t.discountLabel}</span>
            <span className="text-white/90">
              {t.currency} {discount.toFixed(2).replace(".", ",")}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[15px] font-semibold">{t.totalLabel}</span>
            <span className="text-[15px] font-semibold">
              {t.currency} {total.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={!formIsValid}
          aria-disabled={!formIsValid}
          className={[
            "mt-2 inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-[15px] font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB430]/70",
            formIsValid
              ? "bg-[#FFB430] text-black hover:brightness-105"
              : "bg-[#FFB430]/50 text-black/70 cursor-not-allowed",
          ].join(" ")}
          title={
            !formIsValid
              ? "Preencha um ID válido (Steam ou Epic) e um e-mail válido."
              : undefined
          }
        >
          {t.submitLabel}
        </button>
      </div>
    </form>
  );
}
