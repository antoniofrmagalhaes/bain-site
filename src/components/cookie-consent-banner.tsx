"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useConsent } from "@/hooks/use-consent";
import { useApplication } from "@/contexts/application-context";

const ACCENT = "#FFB430";

export default function CookieConsentBanner() {
  const { state, accept, reject } = useConsent();
  const { pageContent } = useApplication();
  const t = pageContent.ui.cookieBanner;

  const show = state === "unknown";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="cookie-banner"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-[1000] flex w-full justify-center px-3 pb-3 sm:px-6 sm:pb-6"
          role="region"
          aria-label={t.regionLabel ?? "Cookie consent"}
        >
          <div
            className="
              relative w-full max-w-[900px]
              rounded-[2px] border border-[#2a2a2a] bg-[#1a1a1a]/95
              shadow-2xl backdrop-blur
            "
          >
            <div className="px-5 pt-4 pb-3 select-none">
              <div className="flex items-center gap-3">
                <span
                  className="tracking-[0.35em] text-[12px] font-semibold"
                  style={{ color: ACCENT }}
                >
                  {t.title ?? "COOKIES"}
                </span>
                <span
                  className="h-[2px] w-full"
                  style={{ backgroundColor: ACCENT, opacity: 0.85 }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 items-center gap-4 px-5 pb-5 sm:grid-cols-[1fr,auto] sm:gap-6">
              <p className="text-[13px] leading-relaxed text-white/90 sm:text-sm">
                {t.message}{" "}
                <a
                  href={t.learnMoreHref}
                  className="rounded font-semibold text-[#FFB430] underline underline-offset-4 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB430]/60"
                >
                  {t.learnMoreLabel}
                </a>
              </p>

              <div className="flex items-center justify-end gap-2">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={reject}
                  className="
                    inline-flex items-center justify-center
                    rounded-[2px] border border-white/30 px-3 py-2
                    text-sm font-semibold text-white
                    hover:border-white/45
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/35
                  "
                >
                  {t.reject}
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={accept}
                  className="
                    inline-flex items-center justify-center
                    rounded-[2px] bg-[#FFB430] px-3 py-2
                    text-sm font-semibold text-black
                    hover:brightness-105
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB430]/60
                  "
                >
                  {t.accept}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
