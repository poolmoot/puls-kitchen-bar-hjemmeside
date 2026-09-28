"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function KontaktPageClient() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <div className="bg-bone pt-24 md:pt-28 space-y-4 md:space-y-5 pb-4 md:pb-5">

      {/* Page h1 — visually clean, required for SEO */}
      <div className="px-4 md:px-6">
        <div className="container-max pt-4 md:pt-6 pb-0">
          <FadeIn>
            <h1 className="display-section text-2xl md:text-3xl text-obsidian">
              {lang === "en" ? "Contact & Opening Hours" : "Kontakt & Åbningstider"}
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Contact + hours */}
      <section className="px-4 md:px-6">
        <div className="bg-ivory rounded-2xl md:rounded-3xl">
          <div className="container-max py-8 md:py-10">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">

                {/* Left: contact */}
                <div>
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-5">{t.contactLabel}</p>

                  <address className="not-italic mb-5">
                    <p className="font-display font-bold text-2xl text-obsidian leading-snug">Arne Jacobsens Allé 9</p>
                    <p className="text-obsidian/60 text-sm mt-0.5">2300 København S</p>
                  </address>

                  <div className="space-y-3">
                    <a href="tel:+4532626030" className="flex items-center gap-4 group">
                      <span className="text-xs tracking-[0.18em] uppercase text-stone w-10 shrink-0">{t.phone}</span>
                      <span className="font-display font-bold text-2xl md:text-3xl text-obsidian group-hover:text-gold transition-colors leading-none">+45 3262 6030</span>
                    </a>
                    <a href="mailto:info@pulskitchen.dk" className="flex items-center gap-4 group">
                      <span className="text-xs tracking-[0.18em] uppercase text-stone w-10 shrink-0">{t.mail}</span>
                      <span className="font-semibold text-obsidian group-hover:text-gold transition-colors">info@pulskitchen.dk</span>
                    </a>
                  </div>

                  <div className="mt-5 bg-gold/10 border border-gold/30 rounded-lg px-4 py-3">
                    <p className="text-sm text-obsidian font-semibold">{t.groupNote}</p>
                    <p className="text-sm text-obsidian/70 mt-0.5">{t.groupNoteBody}</p>
                  </div>

                  <div className="flex gap-3 mt-5">
                    <Link href="https://book.easytable.com/book/?id=1214a&lang=auto" target="_blank" rel="noopener" className="btn-gold">
                      {t.bookTable}
                    </Link>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Arne+Jacobsens+All%C3%A9+9,+2300+K%C3%B8benhavn+S"
                      target="_blank"
                      rel="noopener"
                      className="border border-obsidian/20 px-4 py-2.5 text-xs tracking-[0.18em] uppercase font-semibold text-obsidian/70 hover:text-gold hover:border-gold transition-colors rounded-lg"
                    >
                      {t.directions}
                    </a>
                  </div>
                </div>

                {/* Right: hours */}
                <div>
                  <p className="text-xs tracking-[0.22em] uppercase text-gold mb-5">{t.hoursLabel}</p>
                  <ul className="space-y-0">
                    {t.days.map((h) => (
                      <li key={h.day} className="flex items-baseline justify-between py-3 border-b border-obsidian/10 last:border-0">
                        <span className="text-obsidian/60 text-sm w-28 shrink-0">{h.day}</span>
                        <span className="font-display font-bold text-xl text-obsidian tracking-tight">{h.time}</span>
                        <span className="text-obsidian/50 text-xs text-right hidden sm:block">{h.kitchen}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="px-4 md:px-6">
        <div className="bg-sand rounded-2xl md:rounded-3xl">
          <div className="container-max py-6 md:py-7">
            <FadeIn>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs tracking-[0.22em] uppercase text-gold">{t.followUs}</p>
                <div className="flex flex-wrap gap-5">
                  {[
                    ["Instagram", "https://www.instagram.com/pulskitchenbar/"],
                    ["Facebook",  "https://www.facebook.com/pulskitchenbar"],
                    ["TripAdvisor", "https://www.tripadvisor.dk/Restaurant_Review-g189541-d23380540-Reviews-Puls_Kitchen_Bar-Copenhagen_Zealand.html"],
                    [t.giftCards, "https://live.tebi.co/ecom/giftcards/682104_25db7b16c3fd8c64ef98da76236d2bda2da9ffc9d6bbb771830f80fbd270f9d4"],
                  ].map(([label, href]) => (
                    <a key={label} href={href} target="_blank" rel="noopener" className="text-sm font-semibold text-obsidian/70 hover:text-gold transition-colors">
                      {label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-4 md:px-6">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl md:rounded-3xl">
            <iframe
              title="PULS Kitchen & Bar — Arne Jacobsens Allé 9, Ørestad"
              src="https://www.google.com/maps?q=Arne+Jacobsens+All%C3%A9+9,+2300+K%C3%B8benhavn+S&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] md:h-[400px] block"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
