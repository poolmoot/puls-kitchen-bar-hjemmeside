import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: { absolute: "Brunch København — PULS Kitchen & Bar" },
  description:
    "Byg-Selv-Brunch i hverdagene og ad libitum-brunch i weekenden hos PULS i Ørestad. Kaffe, te, juice og hjemmelavet lemonade inkluderet. Book bord online.",
  alternates: { canonical: "https://www.pulskitchen.dk/brunch" },
  openGraph: {
    title: "Brunch København — PULS Kitchen & Bar",
    description:
      "Byg-selv brunch i hverdagene og ad libitum-brunch i weekenden. Book bord hos PULS Kitchen & Bar i Ørestad.",
    url: "https://www.pulskitchen.dk/brunch",
    images: [
      {
        url: "https://www.pulskitchen.dk/images/brunch-dish.jpg",
        width: 1200,
        height: 630,
        alt: "Brunch hos PULS Kitchen & Bar i Ørestad",
      },
    ],
  },
};

const items = [
  "Croissanter",
  "Røræg og bacon",
  "Laksemousse",
  "Udvalgte oste",
  "Avocado",
  "Frisk frugt",
  "Pandekager",
];

export default function BrunchPage() {
  return (
    <>
      <PageHero
        eyebrow="Brunch"
        title={
          <>
            Komponér din egen{" "}
            <span className="italic-display text-accent">brunch</span>.
          </>
        }
        description="Hos PULS bestemmer du selv. Vælg dine retter fra vores brunchbord — fra en hurtig morgen i ugen til en lang ad libitum-weekend."
      />

      <section className="bg-cream text-ink2 section-pad">
        <div className="container-max grid lg:grid-cols-12 gap-6">
          <FadeIn className="lg:col-span-6">
            <article className="h-full p-8 md:p-12 border border-ink2/15 bg-cream-soft">
              <p className="text-[10px] tracking-[0.32em] uppercase text-ink2/55">
                Hverdage
              </p>
              <h2 className="display-section text-4xl md:text-5xl mt-3">
                Byg-Selv-Brunch
              </h2>
              <p className="mt-3 text-sm tracking-[0.1em] text-ink2/70">
                Man – Fre · 11.00 – 14.00
              </p>
              <p className="text-ink2/75 leading-relaxed mt-6">
                Sammensæt din egen brunch fra et bord med klassikere og friske
                råvarer.
              </p>

              <dl className="mt-8 pt-6 border-t border-ink2/15 space-y-3">
                {[
                  ["3 retter", "95 kr"],
                  ["5 retter", "145 kr"],
                  ["Ekstra ret", "35 kr"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between">
                    <dt>{k}</dt>
                    <span className="flex-1 border-b border-dashed border-ink2/20 mx-3 translate-y-[-3px]" />
                    <dd className="font-display text-2xl text-accent">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </FadeIn>

          <FadeIn className="lg:col-span-6" delay={0.1}>
            <article className="h-full p-8 md:p-12 bg-ink2 text-cream border border-ink2 relative">
              <span className="absolute top-6 right-6 text-[10px] tracking-[0.3em] uppercase text-accent">
                Mest populær
              </span>
              <p className="text-[10px] tracking-[0.32em] uppercase text-cream/55">
                Weekend
              </p>
              <h2 className="display-section text-4xl md:text-5xl mt-3">
                Byg-Selv AD LIBITUM
              </h2>
              <p className="text-accent mt-3 text-sm tracking-[0.1em]">
                Lør – Søn · 10.00 – 14.00
              </p>
              <p className="text-cream/80 leading-relaxed mt-6">
                Spis så meget du kan — inklusive kaffe, te, juice og hjemmelavet
                lemonade.
              </p>

              <dl className="mt-8 pt-6 border-t border-cream/15 space-y-3">
                {[
                  ["Per person", "195 kr"],
                  ["Børn under 12", "½ pris"],
                  ["Børn under 3", "gratis"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between">
                    <dt>{k}</dt>
                    <span className="flex-1 border-b border-dashed border-cream/20 mx-3 translate-y-[-3px]" />
                    <dd className="font-display text-2xl text-accent">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ink text-text section-pad">
        <div className="container-max grid lg:grid-cols-12 gap-12 items-center">
          <FadeIn className="lg:col-span-6">
            <p className="eyebrow text-accent mb-6">På brunchbordet</p>
            <h2 className="display-section text-4xl md:text-5xl mb-8">
              Klassikere og{" "}
              <span className="italic-display text-accent">friske råvarer</span>.
            </h2>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
              {items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-text/85">
                  <span className="h-px w-6 bg-accent" />
                  {it}
                </li>
              ))}
            </ul>
            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="btn-accent mt-10"
            >
              Book brunch
            </Link>
          </FadeIn>

          <FadeIn className="lg:col-span-6" delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden border border-border">
              <Image
                src="/images/gallery-3.jpeg"
                alt="Brunch på PULS"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Frokost / Lunch menu ─────────────────────────────────── */}
      <section className="bg-ivory">
          <div className="container-max py-14 md:py-20 max-w-3xl">

            <FadeIn>
              <div className="border-b border-border-col pb-8 mb-12">
                <p className="text-xs tracking-[0.28em] uppercase text-stone font-semibold mb-3">Frokost / Lunch</p>
                <h2 className="display-section text-4xl md:text-5xl text-forest mb-4">Frokostkortet</h2>
                <p className="text-forest/55 text-sm">Fra kl. 11.00–16.00 · From 11 AM–4 PM</p>
                <p className="text-forest/55 text-sm">Lørdag &amp; søndag kl. 10.00–16.00 · Saturday &amp; Sunday 10 AM–4 PM</p>
              </div>
            </FadeIn>

            {/* Smørrebrød */}
            <FadeIn>
              <div className="mb-12">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-sans font-semibold text-xs tracking-[0.22em] uppercase text-forest">Smørrebrød <span className="text-stone font-normal normal-case tracking-normal">· Open Sandwiches</span></h3>
                </div>
                <p className="text-xs text-stone mb-1">Frem til kl. 15.00 · Until 3 PM</p>
                <p className="text-xs text-forest/60 mb-6">1 stk. — 85,- &nbsp; 2 stk. — 160,-</p>
                <div className="divide-y divide-border-col">
                  {[
                    { da: "Rødspætte", en: "Plaice Fillet", desc: "Grov remoulade · Fennikel · Friterede kapers · Caviart · Radiser · Grønt · Grillet citron", descEn: "Coarse remoulade · Fennel · Fried capers · Caviart · Radishes · Greens · Grilled lemon", addon: "+ Håndpillede fjordrejer 25,-" },
                    { da: "Avocado", desc: "Hytteost · Radiser · Soltørret tomat · Sésamfrø · Grønt", descEn: "Cottage cheese · Radishes · Sundried tomatoes · Sesame seeds · Greens", addon: "+ Håndpillede fjordrejer 25,-" },
                    { da: "Lakse Rilette", en: "Salmon", desc: "Varmrøget laks · Creme fraiche · Citron · Dild", descEn: "Smoked salmon · Creme fraiche · Lemon · Dill" },
                    { da: "Hønsesalat", en: "Chicken Salad", desc: "Svampe · Asparges · Friterede kapers · Bacon · Grønt", descEn: "Mushrooms · Asparagus · Fried capers · Bacon · Greens" },
                    { da: "Roast Beef", desc: "Salat · Peberrod · Syltede agurk · Remoulade · Friterede løg · Svampe · Grønt", descEn: "Salad · Horseradish · Pickled cucumber · Remoulade · Fried onions · Mushrooms · Greens" },
                    { da: "Kartoffelmad", en: "Potato", desc: "Nye kartofler · Bacon · Mayo · Friterede løg · Syltede løg · Grønt", descEn: "Potatoes · Bacon · Mayo · Fried onions · Greens · Pickled onions" },
                    { da: "Æg & Rejer", en: "Egg & Shrimp", desc: "Æg · Håndpillede rejer · Hjertesalat · Caviart · Mayo · Grønt", descEn: "Eggs · Hand-peeled shrimps · Salad · Caviart · Mayo · Greens" },
                  ].map((item) => (
                    <div key={item.da} className="py-5">
                      <div className="flex items-baseline justify-between">
                        <p className="font-semibold text-forest text-sm">{item.da}{item.en && <span className="font-normal text-stone"> · {item.en}</span>}</p>
                      </div>
                      <p className="text-xs text-forest/55 mt-1">{item.desc}</p>
                      <p className="text-xs text-stone mt-0.5">{item.descEn}</p>
                      {item.addon && <p className="text-xs text-gold mt-1">{item.addon}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Klassikere */}
            <FadeIn>
              <div className="mb-12">
                <h3 className="font-sans font-semibold text-xs tracking-[0.22em] uppercase text-forest mb-6">Klassikere <span className="text-stone font-normal normal-case tracking-normal">· Classics</span></h3>
                <div className="divide-y divide-border-col">
                  {[
                    { da: "Ribeye", price: "325,-", desc: "Kornfodret kødkvæg fra Uruguay · Sprøde fritter · Bearnaise sauce", descEn: "Grain-fed beef from Uruguay · Crispy fries · Bearnaise sauce" },
                    { da: "Ravioli", price: "155,-", desc: "Ravioli · Ricotta · Spinat · Salvie · Frisk parmesan", descEn: "Ravioli · Ricotta · Spinach · Sage · Fresh parmesan" },
                    { da: "Club Sandwich", price: "155,-", desc: "Grillet kyllingebryst · Spæd salat · Tomat · Rødløg · Bacon · Karry · Ovnbagte timiankartofler · Dijonnaise", descEn: "Grilled chicken breast · Baby salad · Tomato · Red onion · Bacon · Curry · Oven baked thyme potatoes · Dijonnaise" },
                    { da: "Pasta Trøffel", en: "Pasta Truffle", price: "155,-", desc: "Linguine · Svampe · Trøffel · Cremet sauce", descEn: "Linguine · Mushrooms · Truffle · Creamy sauce", addon: "+ Grillet kyllingebryst 30,-" },
                    { da: "Snack Nachos", price: "115,-", desc: "Cheddarost · Jalapeños · Chimichurri · Guacamole · Creme fraiche", descEn: "Cheddar cheese · Jalapeños · Chimichurri · Guacamole · Sour cream", addon: "+ Crispy kylling 30,-" },
                  ].map((item) => (
                    <div key={item.da} className="py-5 flex gap-4 justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-forest text-sm">{item.da}{item.en && <span className="font-normal text-stone"> · {item.en}</span>}</p>
                        <p className="text-xs text-forest/55 mt-1">{item.desc}</p>
                        <p className="text-xs text-stone mt-0.5">{item.descEn}</p>
                        {item.addon && <p className="text-xs text-gold mt-1">{item.addon}</p>}
                      </div>
                      <p className="font-semibold text-forest text-sm shrink-0">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Salater */}
            <FadeIn>
              <div className="mb-12">
                <h3 className="font-sans font-semibold text-xs tracking-[0.22em] uppercase text-forest mb-6">Salater <span className="text-stone font-normal normal-case tracking-normal">· Salads</span></h3>
                <div className="divide-y divide-border-col">
                  {[
                    { da: "Chèvre Chaud", price: "155,-", desc: "Gedeost · Grillet brød · Syltede græskar · Salat · Balsamico glace · Honning ristede valnødder · Blåbær", descEn: "Goat cheese · Grilled bread · Pickled pumpkin · Salad · Balsamic glace · Honey roasted walnuts · Blueberries" },
                    { da: "Cæsar", en: "Caesar", price: "155,-", desc: "Klassisk cæsar · Crispy kylling · Papadums", descEn: "Classic Caesar · Crispy chicken · Papadums" },
                  ].map((item) => (
                    <div key={item.da} className="py-5 flex gap-4 justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-forest text-sm">{item.da}{item.en && <span className="font-normal text-stone"> · {item.en}</span>}</p>
                        <p className="text-xs text-forest/55 mt-1">{item.desc}</p>
                        <p className="text-xs text-stone mt-0.5">{item.descEn}</p>
                      </div>
                      <p className="font-semibold text-forest text-sm shrink-0">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Burger */}
            <FadeIn>
              <div className="mb-12">
                <h3 className="font-sans font-semibold text-xs tracking-[0.22em] uppercase text-forest mb-2">Burger</h3>
                <p className="text-xs text-stone mb-1">Alle burgere serveres med ovnbagte timiankartofler. Ønskes grove fritter i stedet +10,-</p>
                <p className="text-xs text-stone mb-6">All burgers are served with oven baked thyme potatoes. Want coarse fries instead +10,-</p>
                <div className="divide-y divide-border-col">
                  {[
                    { da: "Puls Burger", price: "155,-", desc: "Flammegrillet oksekød · Brioche bolle · Spæd salat · Cheddar · Løg · Tomat · Agurk · Dijonnaise", descEn: "Flame grilled beef · Brioche bun · Baby salad · Cheddar · Onions · Tomato · Cucumber · Dijonnaise", addon: "+ Bacon 15,-" },
                    { da: "Spicy Burger", price: "155,-", desc: "Flammegrillet oksekød · Brioche bolle · Spæd salat · Cheddar · Syltede jalapeños · Spicy salsa · Chilimayo", descEn: "Flame grilled beef · Brioche bun · Baby salad · Cheddar · Pickled jalapeños · Spicy salsa · Chili mayo", addon: "+ Bacon 15,-" },
                    { da: "Crispy Chicken", price: "155,-", desc: "Crispy kylling · Brioche bolle · Spæd salat · Cheddar · Løg · Tomat · Agurk · Dijonnaise", descEn: "Crispy chicken · Brioche bun · Baby salad · Cheddar · Onions · Tomato · Cucumber · Dijonnaise", addon: "+ Bacon 15,-" },
                    { da: "Veggie Burger", price: "155,-", desc: "Kikærtebøf · Brioche bolle · Spæd salat · Tomat · Agurk · Dijonnaise", descEn: "Chickpea steak · Brioche bun · Baby salad · Tomato · Cucumber · Dijonnaise" },
                  ].map((item) => (
                    <div key={item.da} className="py-5 flex gap-4 justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-forest text-sm">{item.da}</p>
                        <p className="text-xs text-forest/55 mt-1">{item.desc}</p>
                        <p className="text-xs text-stone mt-0.5">{item.descEn}</p>
                        {item.addon && <p className="text-xs text-gold mt-1">{item.addon}</p>}
                      </div>
                      <p className="font-semibold text-forest text-sm shrink-0">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Fra Havet */}
            <FadeIn>
              <div className="mb-12">
                <h3 className="font-sans font-semibold text-xs tracking-[0.22em] uppercase text-forest mb-6">Fra Havet <span className="text-stone font-normal normal-case tracking-normal">· From the Sea</span></h3>
                <div className="divide-y divide-border-col">
                  {[
                    { da: "Moules Frites", price: "165,-", desc: "Hvidvinsdampede blåmuslinger · Cremet sauce · Grove fritter · Aioli", descEn: "White wine steamed mussels · Creamy sauce · Coarse fries · Aioli" },
                    { da: "Fish N' Chips", price: "165,-", desc: "Torsk · Grove fritter · Sauce tartar", descEn: "Cod · Coarse fritters · Tartar sauce" },
                  ].map((item) => (
                    <div key={item.da} className="py-5 flex gap-4 justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-forest text-sm">{item.da}</p>
                        <p className="text-xs text-forest/55 mt-1">{item.desc}</p>
                        <p className="text-xs text-stone mt-0.5">{item.descEn}</p>
                      </div>
                      <p className="font-semibold text-forest text-sm shrink-0">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Ekstra */}
            <FadeIn>
              <div className="mb-12">
                <h3 className="font-sans font-semibold text-xs tracking-[0.22em] uppercase text-forest mb-6">Ekstra <span className="text-stone font-normal normal-case tracking-normal">· Extra</span></h3>
                <div className="divide-y divide-border-col">
                  {[
                    { da: "Sprød Fritter", en: "Fries", price: "55,-", desc: "Med dip · With dip" },
                    { da: "Chicken Hotwings", price: "55,-", desc: "Med dip · With dip" },
                    { da: "Ovnbagte Timiankartofler", en: "Oven Baked Thyme Potatoes", price: "45,-", desc: "Med dip · With dip" },
                    { da: "Sides & Snacks", price: "35,-", desc: "Grøn salat · Peber · Saltede mandler · Middelhavsolver", descEn: "Green Salad · Almonds salted · Olive Mediterranean mix" },
                    { da: "Dip & Sauce", price: "10,-", desc: "Ketchup · Mayo · Chili mayo · Estragon mayo · Dijonnaise · Aioli · Trøffelmayo · Bearnaise · Svampesauce", descEn: "Ketchup · Mayo · Chilli Mayo · Tarragon mayo · Dijonnaise · Aioli · Truffle mayo · Bearnaise · Mushrooms sauce" },
                  ].map((item) => (
                    <div key={item.da} className="py-5 flex gap-4 justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-forest text-sm">{item.da}{item.en && <span className="font-normal text-stone"> · {item.en}</span>}</p>
                        <p className="text-xs text-forest/55 mt-1">{item.desc}</p>
                        {item.descEn && <p className="text-xs text-stone mt-0.5">{item.descEn}</p>}
                      </div>
                      <p className="font-semibold text-forest text-sm shrink-0">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Dessert */}
            <FadeIn>
              <div>
                <h3 className="font-sans font-semibold text-xs tracking-[0.22em] uppercase text-forest mb-6">Dessert</h3>
                <div className="divide-y divide-border-col">
                  {[
                    { da: "Crème Brûlée", price: "85,-", desc: "Fløjlsblød vaniljecreme · Sprød sukkerskorpe · Friske bær", descEn: "Soft vanilla cream · Crispy sugar crust · Fresh berries" },
                    { da: "Vanilje Panna Cotta", en: "Vanilla Panna Cotta", price: "85,-", desc: "Silkeblød panna cotta · Karamelliseret pære · Syltede bær", descEn: "Silky panna cotta · Caramelised pear · Berry compote" },
                    { da: "Chokolade Fondant", en: "Chocolate Fondant", price: "95,-", desc: "Lun chokoladefondant med blød chokoladekerne · Vaniljeis · Syltede bær · Crumble", descEn: "Warm chocolate fondant with a molten centre · Vanilla ice cream · Berry compote · Crumble" },
                  ].map((item) => (
                    <div key={item.da} className="py-5 flex gap-4 justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-forest text-sm">{item.da}{item.en && <span className="font-normal text-stone"> · {item.en}</span>}</p>
                        <p className="text-xs text-forest/55 mt-1">{item.desc}</p>
                        <p className="text-xs text-stone mt-0.5">{item.descEn}</p>
                      </div>
                      <p className="font-semibold text-forest text-sm shrink-0">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

          </div>
      </section>
    </>
  );
}
