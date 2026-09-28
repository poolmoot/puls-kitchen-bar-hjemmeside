import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: { absolute: "Gavekort til Restaurant — PULS Kitchen & Bar" },
  description:
    "Giv en god oplevelse som gave. Køb gavekort til PULS Kitchen & Bar i Ørestad — gyldig til brunch, frokost, aftensmad og drinks. Ingen udløbsdato.",
  alternates: { canonical: "https://www.pulskitchen.dk/gavekort" },
  openGraph: {
    title: "Gavekort til Restaurant — PULS Kitchen & Bar",
    description:
      "Giv oplevelsen som gave. Køb gavekort til PULS Kitchen & Bar — gyldig til brunch, frokost, aftensmad og drinks.",
    url: "https://www.pulskitchen.dk/gavekort",
    images: [
      {
        url: "https://www.pulskitchen.dk/images/interior.jpeg",
        width: 1200,
        height: 630,
        alt: "PULS Kitchen & Bar — interiør",
      },
    ],
  },
};

const features = [
  { title: "Mad & drikke", desc: "Gavekortet dækker alt på menuen — brunch, frokost, aftensmad, cocktails og vin." },
  { title: "Valgfrit beløb", desc: "Du vælger selv beløbet. Ingen minimums- eller maksimumgrænse." },
  { title: "Digital levering", desc: "Modtages straks på mail. Kan printes eller vises direkte fra telefonen." },
  { title: "Ingen udløbsdato", desc: "Gavekortet udløber ikke — brug det når det passer." },
];

export default function GavekortPage() {
  return (
    <div className="pt-24 md:pt-28">

      {/* Hero */}
      <section className="bg-ivory">
        <div className="container-max py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn>
              <p className="text-xs tracking-[0.28em] uppercase text-stone font-semibold mb-5">Gavekort</p>
              <h1 className="display-section text-5xl md:text-6xl lg:text-7xl text-obsidian leading-[0.92] mb-6">
                Giv en oplevelse
              </h1>
              <p className="text-obsidian/65 leading-relaxed text-base md:text-lg max-w-md mb-8">
                Et gavekort til PULS Kitchen & Bar er en gave der huskes. Perfekt til fødselsdage, jubilæer — eller bare fordi.
              </p>
              <a
                href="https://live.tebi.co/ecom/giftcards/682104_25db7b16c3fd8c64ef98da76236d2bda2da9ffc9d6bbb771830f80fbd270f9d4"
                target="_blank"
                rel="noopener"
                className="btn-sage-solid inline-flex"
              >
                Køb gavekort online →
              </a>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/interior.jpeg"
                  alt="PULS Kitchen & Bar — gavekort til en god oplevelse"
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features + køb */}
      <section className="bg-sand">
        <div className="container-max py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Features liste */}
            <FadeIn>
              <p className="text-xs tracking-[0.28em] uppercase text-stone font-semibold mb-6">Hvad er inkluderet</p>
              <div className="space-y-0">
                {features.map((item, i) => (
                  <div key={item.title} className="flex gap-5 py-6 border-b border-obsidian/10 first:border-t first:border-obsidian/10">
                    <span className="font-display font-bold text-2xl text-sage/40 w-8 shrink-0 mt-0.5 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold text-obsidian mb-1">{item.title}</p>
                      <p className="text-obsidian/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Køb-panel */}
            <FadeIn delay={0.1}>
              <div className="bg-forest text-ivory p-8 md:p-10">
                <p className="text-xs tracking-[0.28em] uppercase text-ivory/50 mb-4">Køb online</p>
                <h2 className="display-section text-3xl md:text-4xl text-ivory mb-4">
                  Vælg selv beløbet
                </h2>
                <p className="text-ivory/70 leading-relaxed mb-8 text-sm">
                  Gavekortet købes online og sendes direkte til modtageren — eller til dig selv, så du kan give det personligt. Gyldig til mad, drinks og oplevelser hos PULS.
                </p>
                <a
                  href="https://live.tebi.co/ecom/giftcards/682104_25db7b16c3fd8c64ef98da76236d2bda2da9ffc9d6bbb771830f80fbd270f9d4"
                  target="_blank"
                  rel="noopener"
                  className="btn-sage-solid w-full justify-center"
                >
                  Køb gavekort →
                </a>
                <p className="mt-4 text-ivory/40 text-xs text-center">
                  Via vores partner Lifepeaks — sikker betaling
                </p>

                <div className="mt-10 pt-8 border-t border-ivory/15 space-y-3">
                  <p className="text-xs tracking-[0.22em] uppercase text-ivory/40 mb-4">Spørgsmål?</p>
                  <a href="mailto:info@pulskitchen.dk" className="flex items-center gap-3 text-ivory/70 hover:text-ivory transition-colors text-sm">
                    <span className="text-xs uppercase tracking-[0.15em] text-ivory/30 w-10 shrink-0">Mail</span>
                    info@pulskitchen.dk
                  </a>
                  <a href="tel:+4532626030" className="flex items-center gap-3 text-ivory/70 hover:text-ivory transition-colors text-sm">
                    <span className="text-xs uppercase tracking-[0.15em] text-ivory/30 w-10 shrink-0">Tlf.</span>
                    +45 3262 6030
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-forest">
        <div className="container-max py-14 md:py-20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <FadeIn>
            <p className="text-xs tracking-[0.28em] uppercase text-ivory/40 mb-3">Eller kom forbi</p>
            <h2 className="display-section text-3xl md:text-4xl text-ivory">
              Book et bord direkte
            </h2>
            <p className="mt-2 text-ivory/60 text-sm">Åbent alle ugens dage fra kl. 10–11.</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="btn-sage-solid shrink-0"
            >
              Book bord →
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
