"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { MenuBand, Dish, kr, type PriceLine } from "@/components/MenuBand";

type MenuItem = {
  da: string;
  en?: string;
  desc: string;
  descEn?: string;
  price?: string;
  addon?: string;
  addonEn?: string;
};

type Category = {
  da: string;
  en?: string;
  note?: string;
  noteEn?: string;
  eachPrices?: PriceLine[];
  eachPricesEn?: PriceLine[];
  items: MenuItem[];
};

const categories: Category[] = [
  {
    da: "Smørrebrød", en: "Open Sandwiches",
    note: "Frem til kl. 15.00", noteEn: "Until 15:00",
    eachPrices: [{ label: "1 stk.", value: "85 kr." }, { label: "2 stk.", value: "160 kr." }],
    eachPricesEn: [{ label: "1 pc.", value: "85 kr." }, { label: "2 pcs.", value: "160 kr." }],
    items: [
      { da: "Rødspætte", en: "Plaice Fillet", desc: "Grov remoulade, fennikel, friterede kapers, caviart, radiser, grønt, grillet citron", descEn: "Coarse remoulade, fennel, fried capers, caviar, radishes, greens, grilled lemon", addon: "+ Håndpillede fjordrejer 25,-", addonEn: "+ Hand-peeled fjord shrimp 25,-" },
      { da: "Avocado", desc: "Hytteost, radiser, soltørret tomat, sesamfrø, grønt", descEn: "Cottage cheese, radishes, sun-dried tomato, sesame seeds, greens", addon: "+ Håndpillede fjordrejer 25,-", addonEn: "+ Hand-peeled fjord shrimp 25,-" },
      { da: "Lakse Rilette", en: "Salmon", desc: "Varmrøget laks, creme fraiche, citron, dild", descEn: "Hot smoked salmon, crème fraîche, lemon, dill" },
      { da: "Hønsesalat", en: "Chicken Salad", desc: "Svampe, asparges, friterede kapers, bacon, grønt", descEn: "Mushrooms, asparagus, fried capers, bacon, greens" },
      { da: "Roast Beef", desc: "Salat, peberrod, syltede agurk, remoulade, friterede løg, svampe, grønt", descEn: "Lettuce, horseradish, pickled cucumber, remoulade, crispy onions, mushrooms, greens" },
      { da: "Kartoffelmad", en: "Potato", desc: "Nye kartofler, bacon, mayo, friterede løg, syltede løg, grønt", descEn: "New potatoes, bacon, mayo, crispy onions, pickled onions, greens" },
      { da: "Æg & Rejer", en: "Egg & Shrimp", desc: "Æg, håndpillede rejer, hjertesalat, caviart, mayo, grønt", descEn: "Egg, hand-peeled shrimp, romaine lettuce, caviar, mayo, greens" },
    ],
  },
  {
    da: "Klassikere", en: "Classics",
    items: [
      { da: "Ribeye", price: "325,-", desc: "Kornfodret kødkvæg fra Uruguay, sprøde fritter, bearnaise sauce", descEn: "Corn-fed beef from Uruguay, crispy fries, béarnaise sauce" },
      { da: "Ravioli", price: "155,-", desc: "Ravioli, ricotta, spinat, salvie, frisk parmesan", descEn: "Ravioli, ricotta, spinach, sage, fresh parmesan" },
      { da: "Club Sandwich", price: "155,-", desc: "Grillet kyllingebryst, spæd salat, tomat, rødløg, bacon, karry, ovnbagte timiankartofler, dijonnaise", descEn: "Grilled chicken breast, mixed leaves, tomato, red onion, bacon, curry, oven-baked thyme potatoes, Dijon mayo" },
      { da: "Pasta Trøffel", en: "Pasta Truffle", price: "155,-", desc: "Linguine, svampe, trøffel, cremet sauce", descEn: "Linguine, mushrooms, truffle, creamy sauce", addon: "+ Grillet kyllingebryst 30,-", addonEn: "+ Grilled chicken breast 30,-" },
      { da: "Snack Nachos", price: "115,-", desc: "Cheddarost, jalapeños, chimichurri, guacamole, creme fraiche", descEn: "Cheddar, jalapeños, chimichurri, guacamole, sour cream", addon: "+ Crispy kylling 30,-", addonEn: "+ Crispy chicken 30,-" },
    ],
  },
  {
    da: "Salater", en: "Salads",
    items: [
      { da: "Chèvre Chaud", price: "155,-", desc: "Gedeost, grillet brød, syltede græskar, salat, balsamico glace, honning ristede valnødder, blåbær", descEn: "Goat's cheese, grilled bread, pickled squash, salad, balsamic glaze, honey roasted walnuts, blueberries" },
      { da: "Cæsar", en: "Caesar", price: "155,-", desc: "Klassisk cæsar, crispy kylling, papadums", descEn: "Classic Caesar, crispy chicken, papadums" },
    ],
  },
  {
    da: "Burger",
    note: "Serveres med ovnbagte timiankartofler — grove fritter +10,-", noteEn: "Served with oven-baked thyme potatoes — chunky fries +10,-",
    items: [
      { da: "Puls Burger", price: "155,-", desc: "Flammegrillet oksekød, brioche bolle, spæd salat, cheddar, løg, tomat, agurk, dijonnaise", descEn: "Flame-grilled beef, brioche bun, mixed leaves, cheddar, onion, tomato, cucumber, Dijon mayo", addon: "+ Bacon 15,-", addonEn: "+ Bacon 15,-" },
      { da: "Spicy Burger", price: "155,-", desc: "Flammegrillet oksekød, brioche bolle, spæd salat, cheddar, syltede jalapeños, spicy salsa, chilimayo", descEn: "Flame-grilled beef, brioche bun, mixed leaves, cheddar, pickled jalapeños, spicy salsa, chilli mayo", addon: "+ Bacon 15,-", addonEn: "+ Bacon 15,-" },
      { da: "Crispy Chicken", price: "155,-", desc: "Crispy kylling, brioche bolle, spæd salat, cheddar, løg, tomat, agurk, dijonnaise", descEn: "Crispy chicken, brioche bun, mixed leaves, cheddar, onion, tomato, cucumber, Dijon mayo", addon: "+ Bacon 15,-", addonEn: "+ Bacon 15,-" },
      { da: "Veggie Burger", price: "155,-", desc: "Kikærtebøf, brioche bolle, spæd salat, tomat, agurk, dijonnaise", descEn: "Chickpea patty, brioche bun, mixed leaves, tomato, cucumber, Dijon mayo" },
    ],
  },
  {
    da: "Fra Havet", en: "From the Sea",
    items: [
      { da: "Moules Frites", price: "165,-", desc: "Hvidvinsdampede blåmuslinger, cremet sauce, grove fritter, aioli", descEn: "White wine steamed mussels, creamy sauce, chunky fries, aioli" },
      { da: "Fish N' Chips", price: "165,-", desc: "Torsk, grove fritter, sauce tartar", descEn: "Cod, chunky fries, tartare sauce" },
    ],
  },
  {
    da: "Ekstra", en: "Extra",
    items: [
      { da: "Sprød Fritter", en: "Fries", price: "55,-", desc: "Med dip", descEn: "With dip" },
      { da: "Chicken Hotwings", price: "55,-", desc: "Med dip", descEn: "With dip" },
      { da: "Ovnbagte Timiankartofler", en: "Oven Baked Thyme Potatoes", price: "45,-", desc: "Med dip", descEn: "With dip" },
      { da: "Sides & Snacks", price: "35,-", desc: "Grøn salat, peber, saltede mandler, middelhavsolver", descEn: "Green salad, pepper, salted almonds, Mediterranean olives" },
      { da: "Dip & Sauce", price: "10,-", desc: "Ketchup, mayo, chili mayo, estragon mayo, dijonnaise, aioli, trøffelmayo, bearnaise, svampesauce", descEn: "Ketchup, mayo, chilli mayo, tarragon mayo, Dijon mayo, aioli, truffle mayo, béarnaise, mushroom sauce" },
    ],
  },
  {
    da: "Dessert",
    items: [
      { da: "Crème Brûlée", price: "85,-", desc: "Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær", descEn: "Silky vanilla custard, crisp caramelised sugar crust, fresh berries" },
      { da: "Vanilje Panna Cotta", en: "Vanilla Panna Cotta", price: "85,-", desc: "Silkeblød panna cotta, karamelliseret pære, syltede bær", descEn: "Silky panna cotta, caramelised pear, berry compote" },
      { da: "Chokolade Fondant", en: "Chocolate Fondant", price: "95,-", desc: "Lun chokoladefondant med blød chokoladekerne, vaniljeis, syltede bær, crumble", descEn: "Warm chocolate fondant with a molten centre, vanilla ice cream, berry compote, crumble" },
    ],
  },
];

export default function FrokostMenuContent() {
  const { lang } = useLanguage();
  const en = lang === "en";
  return (
    <div className="max-w-2xl mx-auto">
      {categories.map((cat, i) => {
        const note = en && cat.noteEn ? cat.noteEn : cat.note;
        return (
          <MenuBand
            key={cat.da}
            index={i}
            title={en && cat.en ? cat.en : cat.da}
            sub={!en ? cat.en : undefined}
            note={note ? kr(note) : undefined}
          >
            {cat.items.map((item) => {
              const addon = en && item.addonEn ? item.addonEn : item.addon;
              return (
                <Dish
                  key={item.da}
                  name={en && item.en ? item.en : item.da}
                  nameSub={!en ? item.en : undefined}
                  desc={en && item.descEn ? item.descEn : item.desc}
                  prices={item.price ? [{ value: kr(item.price) }] : en ? cat.eachPricesEn : cat.eachPrices}
                  addon={addon ? kr(addon) : undefined}
                />
              );
            })}
          </MenuBand>
        );
      })}
    </div>
  );
}
