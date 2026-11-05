"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { MenuBand, Dish, GroupLabel, kr, type PriceLine } from "@/components/MenuBand";

const cocktails = [
  {
    sub: "Spritz",
    items: [
      { name: "Aperol Spritz",      desc: "Aperol – prosecco – danskvand – appelsin",    descEn: "Aperol – prosecco – sparkling water – orange",   price: "95,-" },
      { name: "Limoncello Spritz",  desc: "Limoncello – prosecco – danskvand – citron",  descEn: "Limoncello – prosecco – sparkling water – lemon", price: "95,-" },
    ],
  },
  {
    sub: "Vodka",
    items: [
      { name: "Espresso Martini",      desc: "Vodka – espresso – kaffelikør – sukker",       descEn: "Vodka – espresso – coffee liqueur – sugar",      price: "115,-" },
      { name: "Passion for Liquorice", desc: "Vodka – lakrids – passionsfrugt – juice",      descEn: "Vodka – liquorice – passion fruit – juice",      price: "115,-" },
      { name: "White Russian",         desc: "Vodka – kaffelikør – fløde",                   descEn: "Vodka – coffee liqueur – cream",                 price: "115,-" },
      { name: "Basil Smash",           desc: "Vodka – citron – sukkersirup – basilikum",     descEn: "Vodka – lemon – simple syrup – basil",           price: "115,-" },
    ],
  },
  {
    sub: "Gin",
    items: [
      { name: "French 75",        desc: "Gin – citron – sukker – prosecco",                       descEn: "Gin – lemon – sugar – prosecco",                          price: "115,-" },
      { name: "Bramble",          desc: "Gin – lime – sukker – brombærlikør",                     descEn: "Gin – lime – sugar – blackberry liqueur",                 price: "115,-" },
      { name: "Rosemary Collins", desc: "Gin – rosmarinsirup – grapefrugtjuice – soda",           descEn: "Gin – rosemary syrup – pink grapefruit juice – soda",     price: "115,-" },
      { name: "Gin & Tonic",      desc: "Gin – fevertree tonic – agurk",                          descEn: "Gin – fevertree tonic – cucumber",                        price: "115,-" },
    ],
  },
  {
    sub: "Rom",
    items: [
      { name: "Mojito",              desc: "Lys rom – rørsukker – mynte – lime", descEn: "White rum – cane sugar – mint – lime",   price: "115,-" },
      { name: "Dark 'N Stormy",      desc: "Mørk rom – lime – ginger beer",      descEn: "Dark rum – lime – ginger beer",          price: "115,-" },
      { name: "Strawberry Daiquiri", desc: "Lys rom – lime – sirup – jordbær",   descEn: "White rum – lime – syrup – strawberry",  price: "115,-" },
    ],
  },
  {
    sub: "Whiskey",
    items: [
      { name: "Whiskey Sour", desc: "Whiskey – citron – sukker – æggehvide – appelsin", descEn: "Whiskey – lemon – sugar – egg white – orange", price: "115,-" },
    ],
  },
];

const ginSelection = [
  { name: "Hendricks", price: "125 kr." },
  { name: "Monkey 47", price: "135 kr." },
];

// Beer: price for 33 cl, 50 cl and 1,5 L
const beer = [
  { name: "Royal Classic 4,6%",          p: [45, 65, 175] },
  { name: "Royal Pilsner 4,8%",          p: [45, 65, 175] },
  { name: "Royal Blanche 4,6%",          p: [45, 65, 175] },
  { name: "Royal IPA 4,8%",              p: [45, 65, 175] },
  { name: "Birra Moretti 4,6%",          p: [45, 65, 175] },
  { name: "Anarkist Bloody Weizen 5,2%", p: [49, 69, 185] },
  { name: "Schiøtz Mørk Mumme 6,5%",     p: [49, 69, 185] },
];

const juice = [
  { name: "Orange Juice",       desc: "Friskpresset",                       descEn: "Freshly squeezed",                          price: "55 kr." },
  { name: "Pineapple Express",  desc: "Ananas, mynte, lime, æble",          descEn: "Pineapple, mint, lime, apple",              price: "55 kr." },
  { name: "Mango Mama",         desc: "Mango, hindbær, appelsin, æble",     descEn: "Mango, raspberry, orange, apple",           price: "55 kr." },
  { name: "Ginger/Orange",      desc: "Appelsin, ingefær, citron, æble",    descEn: "Orange, ginger, lemon, apple",              price: "55 kr." },
];

const shakes = [
  { name: "Choko",           desc: "m. chokolade & vanilje",                      descEn: "with chocolate & vanilla",                  price: "55 kr." },
  { name: "Espresso",        desc: "m. kaffebønner & vanilje",                    descEn: "with coffee beans & vanilla",               price: "55 kr." },
  { name: "Strawbana",       desc: "m. jordbær, banan & vanilje",                 descEn: "with strawberry, banana & vanilla",         price: "55 kr." },
  { name: "Passion Fashion", desc: "m. passion, mango, hyldeblomst & vanilje",    descEn: "with passion fruit, mango, elderflower & vanilla", price: "55 kr." },
];

const hotdrinks = [
  { name: "Americano",       nameEn: "Americano",        price: "40 kr." },
  { name: "Caffé Latte",     nameEn: "Caffé Latte",      price: "45 / 50 kr." },
  { name: "Cappuccino",      nameEn: "Cappuccino",       price: "42 / 48 kr." },
  { name: "Espresso",        nameEn: "Espresso",         price: "30 / 35 kr." },
  { name: "Macchiato",       nameEn: "Macchiato",        price: "30 / 35 kr." },
  { name: "Cortado",         nameEn: "Cortado",          price: "35 / 40 kr." },
  { name: "Chai Latte",      nameEn: "Chai Latte",       price: "45 kr." },
  { name: "Varm Chokolade",  nameEn: "Hot Chocolate",    price: "45 kr." },
  { name: "Te",              nameEn: "Tea",              price: "35 kr." },
  { name: "Iskaffe",         nameEn: "Iced Coffee",      price: "55 kr." },
  { name: "Irish Coffee",    nameEn: "Irish Coffee",     price: "95 kr." },
];

const bubbles = [
  { name: "Prosecco Brut, Sacchetto",         country: "Italien",  countryEn: "Italy",  desc: "Tør og frisk med fine frugtige noter",      descEn: "Dry and fresh with fine fruity notes",       price: "gl. 75,- / 325,-" },
  { name: "Champagne Brut, L'Eloquente",      country: "Frankrig", countryEn: "France", desc: "Tør, sprød og festlig Champagne",           descEn: "Dry, crisp and celebratory Champagne",       price: "525,-" },
  { name: "Bollinger Special Cuvée",          country: "Frankrig", countryEn: "France", desc: "Fyldig og cremet Champagne-klassiker",      descEn: "Full-bodied and creamy Champagne classic",   price: "895,-" },
];

const rose = [
  { name: "Cinsault, Louis Eschenauer, D'OC",   country: "Frankrig",          countryEn: "France",          desc: "Halvtør rosé med fine bløde frugtige noter", descEn: "Off-dry rosé with fine soft fruity notes", price: "gl. 85,- / 325,-" },
  { name: "Negroamaro, I Muri",                 country: "Italien",           countryEn: "Italy",           desc: "Mild, frugtig, let sødmefuld rosé",          descEn: "Mild, fruity, slightly sweet rosé",        price: "375,-" },
  { name: "Palm, Provence Medi",                country: "Frankrig (Øko)",    countryEn: "France (Organic)", desc: "Tør, frisk og mineralsk rosé",               descEn: "Dry, fresh and mineral rosé",              price: "gl. 95,- / 425,-" },
  { name: "Le Pacha, Provence",                 country: "Frankrig (Øko)",    countryEn: "France (Organic)", desc: "Tør, mineralsk og gastronomisk rosé",        descEn: "Dry, mineral and gastronomic rosé",        price: "595,-" },
];

const whitewine = [
  { name: "Pinot Grigio, Kellerei Bozen, Südtirol",          country: "Italien",        countryEn: "Italy",            desc: "Frisk, frugtig og charmerende italiensk klassiker",        descEn: "Fresh, fruity and charming Italian classic",         price: "gl. 100,- / 475,-" },
  { name: "Sauvignon Blanc, Louis Eschenauer, D'OC",         country: "Frankrig",       countryEn: "France",           desc: "Frisk og mild med lette noter af citrus og stikkelsbær",   descEn: "Fresh and mild with light notes of citrus and gooseberry", price: "gl. 85,- / 325,-" },
  { name: "Chardonnay, La Cour des Grands, D'OC",            country: "Frankrig",       countryEn: "France",           desc: "Klassisk tør og frugtig med let fadlagring",               descEn: "Classic, dry and fruity with a touch of oak",        price: "gl. 95,- / 425,-" },
  { name: "Pouilly Fumé, Domaine Tabordet, Loire",           country: "Frankrig (Øko)", countryEn: "France (Organic)", desc: "Tør, mild og mineralsk Sauvignon Blanc",                   descEn: "Dry, mild and mineral Sauvignon Blanc",              price: "550,-" },
  { name: "Sancerre, Frank Millet, Loire",                   country: "Frankrig",       countryEn: "France",           desc: "Tør, frugtig og fyldig hvidvin",                           descEn: "Dry, fruity and full-bodied white wine",             price: "595,-" },
  { name: "Chablis 1er Cru, Chartron et Trebuchet, Bourgogne", country: "Frankrig",     countryEn: "France",           desc: "Tør, sprød og fyldig Chardonnay",                          descEn: "Dry, crisp and full-bodied Chardonnay",              price: "850,-" },
  { name: "Riesling, Graf Johann IV, Rheingau",              country: "Tyskland (Sød)", countryEn: "Germany (Sweet)",  desc: "Sød, blød og frugtig",                                     descEn: "Sweet, soft and fruity",                             price: "gl. 90,- / 375,-" },
];

const redwine = [
  { name: "Pinot Noir, La Cour des Grands, D'OC",                 country: "Frankrig",       countryEn: "France",           desc: "Saftig og charmerende Pinot Noir med let fadlagring", descEn: "Juicy and charming Pinot Noir with a touch of oak",   price: "gl. 95,- / 425,-" },
  { name: "Côtes du Rhône, Alain Jaume",                          country: "Frankrig (Øko)", countryEn: "France (Organic)", desc: "Tør og let krydret økologisk rødvin",                 descEn: "Dry organic red with nice spicy notes",               price: "450,-" },
  { name: "Pinot Noir, Chartron et Trebuchet, Bourgogne",         country: "Frankrig",       countryEn: "France",           desc: "Tør, saftig og elegant rød Bourgogne",                descEn: "Dry, juicy and elegant red Burgundy",                 price: "525,-" },
  { name: "Saint Emilion Grand Cru, Château Le Cros, Bordeaux",   country: "Frankrig",       countryEn: "France",           desc: "Klassisk, tør og saftig rød Bordeaux",                descEn: "Classic, dry and juicy red Bordeaux",                 price: "675,-" },
  { name: "Primitivo, Luccarelli, Puglia",                        country: "Italien",        countryEn: "Italy",            desc: "Blød, frugtig og sødmefuld",                          descEn: "Soft, juicy and off-dry",                             price: "gl. 85,- / 325,-" },
  { name: "Ripasso Superiore, Semprebon, Valpolicella Classico",  country: "Italien",        countryEn: "Italy",            desc: "Charmerende blød og saftig med fin power",            descEn: "Charmingly smooth and juicy with a nice power",       price: "gl. 100,- / 475,-" },
  { name: "Chianti Classico, Cafaggio, Toscana",                  country: "Italien (Øko)",  countryEn: "Italy (Organic)",  desc: "Tør, moderne og kompleks Chianti",                    descEn: "Dry, modern and complex Chianti",                     price: "550,-" },
  { name: "Barolo Riserva, Argante, Piemonte",                    country: "Italien",        countryEn: "Italy",            desc: "Tør, fyldig og kraftig Nebbiolo",                     descEn: "Dry, full-bodied and powerful Nebbiolo",              price: "750,-" },
  { name: "Ardal, Ribera del Duero",                              country: "Spanien",        countryEn: "Spain",            desc: "Kraftig, blød og saftig rødvin med let krydrede toner", descEn: "Full-bodied, soft and juicy red wine with slight spicy notes", price: "gl. 100,- / 475,-" },
  { name: "Aalto, Ribera del Duero",                              country: "Spanien",        countryEn: "Spain",            desc: "Fyldig og let sødmefuld krydret rødvin",              descEn: "Full-bodied with light sweet and spicy notes",        price: "995,-" },
  { name: "Flor de Pingus, Ribera del Duero",                     country: "Spanien",        countryEn: "Spain",            desc: "Tør og kraftig rødvin fra danske Peter Sisseck",      descEn: "Dry and powerful red wine from Danish winemaker Peter Sisseck", price: "1995,-" },
];

const dessertwine = [
  { name: "Sauternes, Louis Eschenauer, Bordeaux", country: "Frankrig", countryEn: "France",   desc: "Klassisk frisk lys dessertvin",       descEn: "Classic fresh light dessert wine",       price: "gl. 80,- / 395,-" },
  { name: "Ruby Port, Quinta do Estanho",          country: "Portugal", countryEn: "Portugal", desc: "Klassisk blød og sødmefuld portvin",  descEn: "Classic soft and slightly sweet port",   price: "gl. 70,- / 395,-" },
];

type Wine = { name: string; country: string; countryEn: string; desc: string; descEn: string; price: string };

export default function DrinksMenuContent() {
  const { lang } = useLanguage();
  const en = lang === "en";
  const t = translations[lang].menuNotes;
  const pick = (da: string, enText: string) => (en ? enText : da);
  // English subtitle shown under a Danish heading, hidden when the page is in English
  const sub = (enText: string) => (en ? undefined : enText);

  const glass = pick("Glas", "Glass");
  const bottle = pick("Flaske", "Bottle");
  const jug = pick("Kande", "Jug");

  // "gl. 75,- / 325,-" becomes Glass 75 kr. · Bottle 325 kr.   "525,-" becomes Bottle 525 kr.
  const winePrices = (raw: string): PriceLine[] => {
    const both = raw.match(/^gl\.\s*(\d+),-\s*\/\s*(\d+),-$/);
    if (both) return [{ label: glass, value: `${both[1]} kr.` }, { label: bottle, value: `${both[2]} kr.` }];
    return [{ label: bottle, value: kr(raw) }];
  };

  const wineBand = (index: number, title: string, subTitle: string | undefined, list: Wine[]) => (
    <MenuBand index={index} title={title} sub={subTitle}>
      {list.map((w) => (
        <Dish
          key={w.name}
          name={w.name}
          tag={en ? w.countryEn : w.country}
          desc={en ? w.descEn : w.desc}
          prices={winePrices(w.price)}
        />
      ))}
    </MenuBand>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <MenuBand index={0} title="Pitcher 1,5 L">
        <Dish name="Mojito · Gin & Tonic · Passion Martini" prices={[{ label: pick("Pr. pitcher", "Per pitcher"), value: "345 kr." }]} />
      </MenuBand>

      <MenuBand index={1} title="Cocktails" note={t.happyHour}>
        {cocktails.flatMap((group) => [
          <GroupLabel key={group.sub}>{group.sub}</GroupLabel>,
          ...group.items.map((item) => (
            <Dish key={item.name} name={item.name} desc={en ? item.descEn : item.desc} prices={[{ value: kr(item.price) }]} />
          )),
          ...(group.sub === "Gin"
            ? [
                <Dish
                  key="gin-selection"
                  name="Gin Selection"
                  prices={ginSelection.map((g) => ({ label: g.name, value: g.price }))}
                />,
              ]
            : []),
        ])}
      </MenuBand>

      <MenuBand index={2} title={pick("Øl", "Beer")} sub={sub("Beer")}>
        {beer.map((b) => (
          <Dish
            key={b.name}
            name={b.name}
            prices={[
              { label: "33 cl", value: `${b.p[0]} kr.` },
              { label: "50 cl", value: `${b.p[1]} kr.` },
              { label: "1,5 L", value: `${b.p[2]} kr.` },
            ]}
          />
        ))}
        <Dish name="Heineken 0,0%" prices={[{ label: bottle, value: "45 kr." }]} />
      </MenuBand>

      <MenuBand index={3} title={pick("Sodavand & Saft", "Soft Drinks")} sub={sub("Soft Drinks")}>
        <Dish
          name={pick("Sodavand", "Soft Drinks")}
          desc={pick("Pepsi, Pepsi Max, Faxe Kondi, Mirinda, Redbull", "Pepsi, Pepsi Max, Faxe Kondi, Mirinda, Red Bull")}
          prices={[{ label: "33 cl", value: "42 kr." }, { label: "50 cl", value: "55 kr." }]}
        />
        <Dish
          name={pick("Saft Øko", "Organic Cordial")}
          desc={pick("Hyldeblomst, æblemost eller hindbær", "Elderflower, apple or raspberry")}
          prices={[{ label: bottle, value: "42 kr." }]}
        />
        <Dish
          name={pick("Danskvand", "Sparkling Water")}
          prices={[{ label: glass, value: "40 kr." }, { label: jug, value: "55 kr." }]}
        />
        <Dish
          name={pick("Isvand", "Still Water")}
          prices={[{ label: glass, value: "25 kr." }, { label: jug, value: "45 kr." }]}
        />
      </MenuBand>

      <MenuBand index={4} title={pick("Friskpresset Juice", "Fresh Juice")} sub={sub("Fresh Juice")}>
        {juice.map((item) => (
          <Dish key={item.name} name={item.name} desc={en ? item.descEn : item.desc} prices={[{ value: item.price }]} />
        ))}
      </MenuBand>

      <MenuBand index={5} title="Shakes">
        {shakes.map((item) => (
          <Dish key={item.name} name={item.name} desc={en ? item.descEn : item.desc} prices={[{ value: item.price }]} />
        ))}
      </MenuBand>

      <MenuBand index={6} title={pick("Varme Drikke", "Hot Beverages")} sub="Lavazza">
        {hotdrinks.map((item) => (
          <Dish key={item.name} name={en ? item.nameEn : item.name} prices={[{ value: item.price }]} />
        ))}
      </MenuBand>

      {wineBand(7, pick("Bobler", "Bubbles"), sub("Bubbles"), bubbles)}
      {wineBand(8, "Rosé", undefined, rose)}
      {wineBand(9, pick("Hvidvin", "White Wine"), sub("White Wine"), whitewine)}
      {wineBand(10, pick("Rødvin", "Red Wine"), sub("Red Wine"), redwine)}
      {wineBand(11, pick("Dessertvin", "Dessert Wine"), sub("Dessert Wine"), dessertwine)}

      <p className="mt-6 text-center text-sm text-obsidian/55">{t.fullWineList}</p>
    </div>
  );
}
