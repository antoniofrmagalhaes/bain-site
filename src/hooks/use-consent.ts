"use client";
import { useEffect, useState, useCallback } from "react";

type ConsentState = "accepted" | "rejected" | "unknown";
const KEY = "cookie-consent";
const TS_KEY = "cookie-consent-ts";
const PROMO_KEY = "promo-dismissed";

export function useConsent() {
  const [state, setState] = useState<ConsentState>("unknown");
  const [promoDismissed, setPromoDismissed] = useState<boolean>(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(KEY) as ConsentState | null;
      setState(v ?? "unknown");
      setPromoDismissed(localStorage.getItem(PROMO_KEY) === "1");
    } catch {}
  }, []);

  const accept = useCallback(() => {
    try {
      localStorage.setItem(KEY, "accepted");
      localStorage.setItem(TS_KEY, Date.now().toString());
    } catch {}
    setState("accepted");
  }, []);
  const reject = useCallback(() => {
    try {
      localStorage.setItem(KEY, "rejected");
      localStorage.setItem(TS_KEY, Date.now().toString());
    } catch {}
    setState("rejected");
  }, []);

  const setPromoNeverAgain = useCallback(
    (value: boolean) => {
      if (state !== "accepted") return;
      try {
        if (value) localStorage.setItem(PROMO_KEY, "1");
        else localStorage.removeItem(PROMO_KEY);
        setPromoDismissed(value);
      } catch {}
    },
    [state]
  );

  return { state, accept, reject, promoDismissed, setPromoNeverAgain };
}
