"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { MenuBand, Dish, kr, type PriceLine } from "@/components/MenuBand";

const drinks = [
  { name: "Gin & Tonic Hendricks", price: "125,-" },
  { name: "Limoncello",            price: "95,-"  },
  { name: "Gin & Tonic",          price: "115,-" },
  { name: "Aperol Spritz",        price: "95,-"  },
  { name: "Dark N' Stormy",       price: "115,-" },
  { name: "Doriac Rosé",          price: "95,-"  },
  { name: "French 75",            price: "115,-" },
  { name: "Prosecco",             price: "75,-"  },
];

const mainDishes = [
  { da: "Ribeye Steak",       price: "345,-", desc: "Kornfodret kødkvæg fra Uruguay, sprøde fritter & bearnaise", descEn: "Corn-fed beef from Uruguay, crispy fries & béarnaise" },
  { da: "Pasta Trøffel",      price: "195,-", desc: "Linguine, grillet kylling, svampe, trøffel, cremet sauce", descEn: "Linguine, grilled chicken, mushrooms, truffle, creamy sauce" },
  { da: "Puls Burger",        price: "180,-", desc: "Flammegrillet oksekød, bacon, brioche bolle, spæd salat, cheddar, løg, tomat, agurk, fritter, dijonnaise", descEn: "Flame-grilled beef, bacon, brioche bun, mixed leaves, cheddar, onion, tomato, cucumber, fries, Dijon mayo" },
  { da: "Fish N' Chips",      price: "175,-", desc: "Torsk, grove fritter, sauce tartar", descEn: "Cod, chunky fries, tartare sauce" },
  { da: "Chèvre Chaud Salat", price: "165,-", desc: "Gedeost, grillet brød, syltede græskar, spæd salat, balsamico glace, honning ristede valnødder, friske bær", descEn: "Goat's cheese, grilled bread, pickled squash, mixed leaves, balsamic glaze, honey roasted walnuts, fresh berries" },
];

const desserts = [
  { da: "Crème Brûlée", price: "85,-", desc: "Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær", descEn: "Silky vanilla custard, crisp caramelised sugar crust, fresh berries" },
];

export default function KoncertMenuContent() {
  const { lang } = useLanguage();
  const en = lang === "en";
  const t = translations[lang].menuNotes;

  return (
    <div className="max-w-2xl mx-auto">
      <MenuBand
        index={0}
        title={en ? "Start the Evening with a Glass of" : "Start Aftenen med et Glas"}
        sub={en ? undefined : "Start the Evening with a Glass of"}
        note={en ? "Price per glass" : "Pris pr. glas"}
      >
        {drinks.map((d) => (
          <Dish key={d.name} name={d.name} prices={[{ value: kr(d.price) }]} />
        ))}
      </MenuBand>

      <MenuBand index={1} title={en ? "Dishes" : "Retter"}>
        {mainDishes.map((item) => (
          <Dish key={item.da} name={item.da} desc={en ? item.descEn : item.desc} prices={[{ value: kr(item.price) }]} />
        ))}
      </MenuBand>

      <MenuBand index={2} title={en ? "Chef's Choice" : "Kokken Anbefaler"} sub={en ? undefined : "Chef's Choice"}>
        <Dish
          name="Ribeye Steak"
          desc={en ? "Corn-fed beef from Uruguay, crispy fries & béarnaise" : "Kornfodret kødkvæg fra Uruguay, sprøde fritter & bearnaise"}
          addon={en ? "+ Side salad 35 kr." : "+ Side salat 35 kr."}
        />
        <Dish
          name="Crème Brûlée"
          desc={en ? "Silky vanilla custard, crisp caramelised sugar crust, fresh berries" : "Fløjlsblød vaniljecreme, sprød sukkerskorpe, friske bær"}
        />
        <Dish prices={[{ label: t.totalPrice, value: "395 kr." }]} />
      </MenuBand>

      <MenuBand index={3} title={en ? "Desserts" : "Desserter"}>
        {desserts.map((item) => (
          <Dish key={item.da} name={item.da} desc={en ? item.descEn : item.desc} prices={[{ value: kr(item.price) }]} />
        ))}
      </MenuBand>

      <MenuBand index={4} title={en ? "Extra" : "Ekstra"} sub={en ? undefined : "Extra"}>
        <Dish name={en ? "Fries with Dip" : "Sprøde Fritter m. Dip"} nameSub={en ? undefined : "Fries with Dip"} prices={[{ value: "55 kr." }]} />
      </MenuBand>

      <p className="mt-6 text-center text-xs text-obsidian/55">{t.koncertAllergens}</p>
    </div>
  );
}
