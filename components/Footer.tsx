"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { openCookieSettings } from "@/lib/consent";

const navLinks = [
  { da: "Menu",         en: "Menu",           href: "/menu" },
  { da: "Koncertmenu",  en: "Concert Menu",   href: "/koncertmenu" },
  { da: "Selskaber",    en: "Private Events", href: "/selskaber" },
  { da: "Gavekort",     en: "Gift Cards",     href: "/gavekort" },
  { da: "Kontakt",      en: "Contact",        href: "/kontakt" },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current shrink-0">
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current shrink-0">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="bg-forest text-ivory border-t border-white/10">
      <div className="container-max py-14 md:py-16">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">

          {/* Col 1 — Info */}
          <div>
            <p className="font-display font-bold text-2xl tracking-[0.06em] text-ivory mb-1">PULS</p>
            <p className="font-display italic text-sm text-ivory/70 font-light tracking-wide mb-6">Kitchen & Bar</p>

            <address className="not-italic space-y-1.5 text-sm text-ivory leading-relaxed">
              <p>Arne Jacobsens Allé 9</p>
              <p>2300 København S</p>
            </address>
            <div className="mt-4 space-y-1.5 text-sm">
              <a href="tel:+4532626030" className="block text-ivory hover:text-ivory/70 transition-colors">
                +45 3262 6030
              </a>
              <a href="mailto:info@pulskitchen.dk" className="block text-ivory hover:text-ivory/70 transition-colors">
                info@pulskitchen.dk
              </a>
            </div>
          </div>

          {/* Col 2 — Hours */}
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-ivory/70 font-semibold mb-6">{t.hoursLabel}</p>
            <ul className="space-y-3 text-sm">
              {t.days.map(([day, time]) => (
                <li key={day} className="flex gap-4">
                  <span className="text-ivory w-28 shrink-0">{day}</span>
                  <span className="text-ivory/80">{time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-xs text-ivory/60 leading-relaxed space-y-0.5">
              <p>{t.kitchenCloses}</p>
              <p>{t.kitchenMonSat}</p>
              <p>{t.kitchenSun}</p>
            </div>
          </div>

          {/* Col 3 — Nyttige links */}
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-ivory/70 font-semibold mb-6">Nyttige links</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://www.royalarena.dk" target="_blank" rel="noopener" className="text-ivory/80 hover:text-ivory transition-colors">
                  Royal Arena ↗
                </a>
              </li>
              <li>
                <a href="https://www.fields.dk" target="_blank" rel="noopener" className="text-ivory/80 hover:text-ivory transition-colors">
                  Fields Shopping Center ↗
                </a>
              </li>
              <li>
                <a href="https://www.cabinn.com/hotel/cabinn-metro-hotel/" target="_blank" rel="noopener" className="text-ivory/80 hover:text-ivory transition-colors">
                  Cabinn Metro Hotel ↗
                </a>
              </li>
              <li>
                <a href="https://www.bellacenter.dk" target="_blank" rel="noopener" className="text-ivory/80 hover:text-ivory transition-colors">
                  Bella Center ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Follow us */}
          <div>
            <p className="text-xs tracking-[0.24em] uppercase text-ivory/70 font-semibold mb-6">{t.followUs}</p>

            <div className="space-y-3">
              <a
                href="https://www.instagram.com/pulskitchenbar/"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 px-5 py-3.5 border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-ivory"><InstagramIcon /></span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-ivory">Instagram</span>
                  <span className="block text-xs text-ivory/70 mt-0.5">@pulskitchenbar</span>
                </span>
                <span className="text-ivory/50 group-hover:text-ivory transition-colors">↗</span>
              </a>

              <a
                href="https://www.facebook.com/pulskitchenbar"
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-4 px-5 py-3.5 border border-white/30 hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-ivory"><FacebookIcon /></span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-ivory">Facebook</span>
                  <span className="block text-xs text-ivory/70 mt-0.5">PULS Kitchen & Bar</span>
                </span>
                <span className="text-ivory/50 group-hover:text-ivory transition-colors">↗</span>
              </a>
            </div>

            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="mt-5 btn-sage-solid w-full justify-center"
            >
              {t.bookTable}
            </Link>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] tracking-[0.18em] uppercase text-ivory/75 hover:text-ivory transition-colors"
              >
                {lang === "en" ? l.en : l.da}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-ivory/65">
            <Link href="/handelsbetingelser" className="hover:text-ivory transition-colors">
              {t.terms}
            </Link>
            <span className="text-ivory/20">·</span>
            <Link href="/privatlivspolitik" className="hover:text-ivory transition-colors">
              {t.privacy}
            </Link>
            <span className="text-ivory/20">·</span>
            <button
              onClick={openCookieSettings}
              className="hover:text-ivory transition-colors cursor-pointer"
            >
              {t.cookies}
            </button>
            <span className="text-ivory/20">·</span>
            <a
              href="https://www.findsmiley.dk/1013484"
              target="_blank"
              rel="noopener"
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/images/smiley-banner.gif"
                alt="Se kontrolrapport — Fødevarestyrelsen"
                width={847}
                height={274}
                className="h-8 w-auto"
                unoptimized
              />
            </a>
            <span className="text-ivory/20">·</span>
            <span>© {new Date().getFullYear()} PULS Kitchen & Bar</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
