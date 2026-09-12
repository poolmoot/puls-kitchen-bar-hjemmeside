"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { readConsent, CONSENT_EVENT } from "@/lib/consent";

/**
 * ════════════════════════════════════════════════════════════════════
 *  MIDLERTIDIG KAMPAGNE — DINING WEEK
 * ════════════════════════════════════════════════════════════════════
 *
 *  SLUK MED ÉT ORD:
 *    Sæt ENABLED = false herunder. Så er popup'en væk overalt,
 *    uanset dato. Koden bliver liggende, klar til næste år.
 *
 *  FJERN HELT (to skridt, intet efterlades):
 *    1. Slet denne fil.
 *    2. Slet de to linjer i app/layout.tsx der nævner DiningWeekPopup.
 *    Færdig. Al tekst, alle datoer og al logik bor i denne ene fil.
 *
 *  BRUG IGEN NÆSTE ÅR:
 *    Ret ENABLED, START, END, DISMISS_KEY (nyt årstal),
 *    BOOKING_URL og teksterne i COPY — alt sammen lige herunder.
 *
 *  (Teksterne ligger med vilje her og ikke i lib/translations.ts,
 *   så der ikke står død tekst tilbage den dag filen slettes.)
 * ════════════════════════════════════════════════════════════════════
 */
const ENABLED = true;

/* ⚠️ TESTPERIODE — popup'en er midlertidigt tændt NU, så den kan ses uden
   ?dw=1. Sæt tilbage til de rigtige datoer inden siden går live:
   START = 2026-10-09, END = 2026-10-19 */
const START = new Date("2026-09-01T00:00:00+02:00");
const END = new Date("2026-10-19T00:00:00+02:00"); // eksklusiv — sidste dag er den 18.

const DISMISS_KEY = "puls-diningweek-2026-dismissed-v2";
const BOOKING_URL = "https://diningweek.dk/restaurant/1126_10772-puls-kitchen-and-bar";

/** Al tekst til popup'en — dansk og engelsk. */
const COPY = {
  da: {
    eyebrow: "9.–18. oktober",
    headline: "Dining Week 2026",
    body: "Vi er med igen i år. Vælg mellem 3-retters menu, vinmenu og mere — se det hele og book på diningweek.dk.",
    cta: "Se menu & book →",
    close: "Luk",
    pill: "Dining Week · 9.–18. okt.",
  },
  en: {
    eyebrow: "9–18 October",
    headline: "Dining Week 2026",
    body: "We're taking part again this year. Choose between a 3-course menu, wine menu and more — see it all and book on diningweek.dk.",
    cta: "See menu & book →",
    close: "Close",
    pill: "Dining Week · 9–18 Oct",
  },
} as const;

const ease = [0.2, 0.65, 0.2, 1] as const;

/** Test-adgang: ?dw=1 i adressen viser popup'en uden for perioden og nulstiller "allerede set". */
function isForced() {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("dw");
}

function inCampaignWindow() {
  if (!ENABLED) return false;
  if (isForced()) return true;
  const now = new Date();
  return now >= START && now < END;
}

export default function DiningWeekPopup() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  const [stage, setStage] = useState<"hidden" | "popup" | "pill">("hidden");

  useEffect(() => {
    if (!inCampaignWindow()) return;

    // Ved test (?dw=1) ignorerer vi at gæsten har lukket den før.
    if (!isForced() && window.localStorage.getItem(DISMISS_KEY) === "1") {
      setStage("pill");
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const scheduleReveal = () => {
      timers.push(setTimeout(() => setStage("popup"), 3000));
    };

    if (readConsent()) {
      scheduleReveal();
      return () => timers.forEach(clearTimeout);
    }

    // Cookie-boksen er stadig åben. Vi venter på svaret — men svarer gæsten
    // aldrig, viser vi i det mindste pillen, så Dining Week ikke går tabt.
    const onConsent = () => scheduleReveal();
    window.addEventListener(CONSENT_EVENT, onConsent, { once: true });
    timers.push(
      setTimeout(() => setStage((s) => (s === "hidden" ? "pill" : s)), 8000)
    );

    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsent);
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (stage !== "popup") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  const close = () => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setStage("pill");
  };

  const bookAndClose = () => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setStage("hidden");
  };

  return (
    <>
      <AnimatePresence>
        {stage === "popup" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-obsidian/50 backdrop-blur-[2px]"
            role="dialog"
            aria-modal="true"
            aria-label={t.headline}
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.3, ease }}
              className="w-full max-w-[400px] bg-ivory rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-40 w-full">
                <Image
                  src="/images/aften-dish.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
                <button
                  onClick={close}
                  aria-label={t.close}
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-obsidian/40 text-ivory hover:bg-obsidian/70 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <div className="px-6 py-7 text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-9 bg-gold/60" />
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">
                    {t.eyebrow}
                  </span>
                  <span className="h-px w-9 bg-gold/60" />
                </div>

                <h2 className="mt-3 font-display font-extrabold uppercase text-[30px] leading-[1.02] tracking-[-0.01em] text-obsidian">
                  {t.headline}
                </h2>

                <p className="mt-3 mx-auto max-w-[290px] text-[13px] text-forest/70 leading-relaxed">
                  {t.body}
                </p>

                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener"
                  onClick={bookAndClose}
                  className="btn-sage-solid btn-lg btn-ring mt-6 w-full justify-center"
                >
                  {t.cta}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {stage === "pill" && (
          <motion.a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease }}
            className="fixed bottom-5 right-4 md:right-6 z-[60] flex items-center gap-2 rounded-full bg-ivory text-obsidian pl-3.5 pr-4 py-2.5 text-[12px] font-semibold tracking-wide shadow-2xl border-2 border-obsidian hover:bg-sand transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {t.pill}
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}
