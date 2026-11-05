"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const ease = [0.2, 0.65, 0.2, 1] as const;
const navTransition = { duration: 0.4, ease };

function MobileLangToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-0.5">
      <button
        onClick={() => setLang("da")}
        className={`text-[12px] font-semibold tracking-[0.16em] uppercase px-1.5 py-1 transition-colors ${lang === "da" ? "text-obsidian" : "text-obsidian/35 hover:text-obsidian/60"
          }`}
      >
        DA
      </button>
      <span className="text-obsidian/20 text-[10px]">/</span>
      <button
        onClick={() => setLang("en")}
        className={`text-[12px] font-semibold tracking-[0.16em] uppercase px-1.5 py-1 transition-colors ${lang === "en" ? "text-obsidian" : "text-obsidian/35 hover:text-obsidian/60"
          }`}
      >
        EN
      </button>
    </div>
  );
}

function LanguageToggle({ mobile = false }: { mobile?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-1 ${mobile ? "mt-10 border-t border-border-col pt-6" : ""}`}>
      <button
        onClick={() => setLang("da")}
        className={`text-[13px] font-semibold tracking-[0.18em] uppercase px-2 py-1 transition-colors ${lang === "da" ? "text-obsidian" : "text-obsidian/40 hover:text-obsidian/70"
          }`}
      >
        DA
      </button>
      <span className="text-obsidian/20 text-sm">|</span>
      <button
        onClick={() => setLang("en")}
        className={`text-[13px] font-semibold tracking-[0.18em] uppercase px-2 py-1 transition-colors ${lang === "en" ? "text-obsidian" : "text-obsidian/40 hover:text-obsidian/70"
          }`}
      >
        EN
      </button>
    </div>
  );
}

export default function Navigation() {
  const { lang } = useLanguage();
  const t = translations[lang].nav;
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [atTop, setAtTop] = React.useState(true);

  const navLinks = [
    { label: t.menu, href: "/menu" },
    { label: t.concertMenu, href: "/koncertmenu" },
    { label: t.privateEvents, href: "/selskaber" },
    { label: t.giftCards, href: "/gavekort" },
    { label: t.contact, href: "/kontakt" },
  ];

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setAtTop(window.scrollY < 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Desktop ──────────────────────────────────────────────── */}
      <motion.header
        className="fixed inset-x-0 z-50 hidden lg:block"
        animate={scrolled
          ? { paddingTop: 12, paddingLeft: lang === "en" ? 60 : 120, paddingRight: lang === "en" ? 60 : 120, top: 0 }
          : { paddingTop: 0, paddingLeft: 0, paddingRight: 0, top: atTop ? 40 : 0 }}
        transition={navTransition}
      >
        <motion.div
          className="border border-border-col backdrop-blur-md overflow-hidden"
          animate={scrolled ? {
            borderRadius: 14,
            backgroundColor: "rgba(245,247,242,0.97)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.08)",
          } : {
            borderRadius: 0,
            backgroundColor: "rgba(245,247,242,0.80)",
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
          }}
          transition={navTransition}
        >
          <nav className="container-max !pl-4 xl:!pl-6 relative flex items-center h-[72px]">

            {/* Left — nav links */}
            <div className="flex items-center gap-4 xl:gap-6">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[11px] xl:text-[12px] font-semibold tracking-[0.1em] xl:tracking-[0.14em] uppercase text-obsidian hover:text-gold transition-colors whitespace-nowrap"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Center — Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex-shrink-0">
              <Image
                src="/images/PULS_logo_nav.svg"
                alt="PULS Kitchen & Bar"
                width={140}
                height={60}
                className="h-[44px] xl:h-[64px] w-auto object-contain brightness-0"
                unoptimized
                priority
              />
            </Link>

            {/* Right — language toggle + book */}
            <div className="ml-auto self-stretch flex items-center gap-2 xl:gap-4 flex-shrink-0">
              <LanguageToggle />
              <Link
                href="https://book.easytable.com/book/?id=1214a&lang=auto"
                target="_blank"
                rel="noopener"
                className="btn-sage-solid self-stretch flex items-center !py-0 !px-4 xl:!px-7 !text-[13px] xl:!text-[15px] rounded-none"
              >
                {t.bookTable}
              </Link>
            </div>

          </nav>
        </motion.div>
      </motion.header>

      {/* ── Mobile header ────────────────────────────────────────── */}
      <motion.header
        className="fixed top-0 inset-x-0 z-50 lg:hidden"
        animate={scrolled
          ? { paddingTop: 10, paddingLeft: 10, paddingRight: 10 }
          : { paddingTop: 0, paddingLeft: 0, paddingRight: 0 }}
        transition={navTransition}
      >
        <motion.div
          className="border border-border-col backdrop-blur-md overflow-hidden"
          animate={scrolled ? {
            borderRadius: 12,
            backgroundColor: "rgba(245,247,242,0.97)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          } : {
            borderRadius: 0,
            backgroundColor: "rgba(245,247,242,0.80)",
            boxShadow: "0 0px 0px rgba(0,0,0,0)",
          }}
          transition={navTransition}
        >
          <div className="px-4 flex items-center justify-between h-[64px]">
            <Link href="/">
              <Image
                src="/images/PULS_logo_nav.svg"
                alt="PULS Kitchen & Bar"
                width={64}
                height={39}
                className="h-8 w-auto object-contain"
                unoptimized
                priority
              />
            </Link>
            <div className="flex items-center gap-2">
              <MobileLangToggle />
              <Link
                href="https://book.easytable.com/book/?id=1214a&lang=auto"
                target="_blank"
                rel="noopener"
                className="flex-none self-center text-[12px] font-semibold tracking-[0.18em] uppercase px-5 py-2.5 bg-sage text-white rounded-sm transition-colors hover:bg-forest"
              >
                {t.bookTable}
              </Link>
              <button
                aria-label={open ? t.closeMenu : t.openMenu}
                onClick={() => setOpen((v) => !v)}
                className="h-12 w-12 grid place-items-center border border-border-col text-forest hover:text-gold hover:border-gold transition-colors rounded-sm"
              >
                {open ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="19" y1="5" x2="5" y2="19" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <line x1="3" y1="7" x2="21" y2="7" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="17" x2="21" y2="17" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* ── Mobile overlay ───────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
            style={{ top: scrolled ? 84 : 64 }}
          >
            <div className="px-6 py-12 flex flex-col">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.07 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-5 border-b border-border-col font-sans text-4xl text-forest hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.38 }}
                className="flex flex-col gap-3"
              >
                <Link href="https://book.easytable.com/book/?id=1214a&lang=auto" target="_blank" onClick={() => setOpen(false)} className="btn-sage-solid w-full text-center mt-10">
                  {t.reserve}
                </Link>
                <LanguageToggle mobile />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
