"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { MenuBand, Dish, kr, type PriceLine } from "@/components/MenuBand";

type MenuItem = {
  da: string;
  en?: string;
  desc?: string;
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
  items: MenuItem[];
  drinkGrid?: boolean;
};

const categories: Category[] = [
  {
    da: "Små Retter", en: "Small Dishes",
    items: [
      { da: "Carpaccio", price: "135,-", desc: "Tyndskåret kalveinderlår, olivenolie, rucola, pinjekerner, parmesan", descEn: "Thinly sliced veal topside, olive oil, rocket, pine nuts, parmesan" },
      { da: "Charcuterie", price: "135,-", desc: "Lufttørret skinke, chorizo, ost, kompot, brød", descEn: "Air-dried ham, chorizo, cheese, compote, bread" },
      { da: "Burrata", price: "125,-", desc: "Cherrytomater, rucola, pesto, balsamico, basilikum", descEn: "Cherry tomatoes, rocket, pesto, balsamic, basil" },
      { da: "Rejecocktail", en: "Shrimp Cocktail", price: "125,-", desc: "Sprød salat, håndpillede rejer, avocado, caviart, thousand island dressing, citron, dild", descEn: "Crisp salad, hand-peeled shrimp, avocado, caviar, thousand island dressing, lemon, dill" },
      { da: "Snack Nachos", price: "115,-", desc: "Cheddarost, jalapeños, chimichurri, guacamole, creme fraiche", descEn: "Cheddar, jalapeños, chimichurri, guacamole, sour cream", addon: "+ Crispy kylling 30,-", addonEn: "+ Crispy chicken 30,-" },
      { da: "Bruschetta Al Pomodoro", price: "85,-", desc: "Rustikt brød, tomat, hvidløg, basilikum, olivenolie", descEn: "Rustic bread, tomato, garlic, basil, olive oil", addon: "+ Håndpillede rejer 25,-", addonEn: "+ Hand-peeled shrimp 25,-" },
      { da: "Gratineret Gedeost", en: "Gratinated Goat Cheese", price: "75,-", desc: "Valnød, honning, ristet brød chips", descEn: "Walnut, honey, toasted bread chips" },
    ],
  },
  {
    da: "Kød & Fisk", en: "Meat & Fish",
    items: [
      { da: "Ribeye", price: "345,-", desc: "Kornfodret kødkvæg fra Uruguay, sprøde fritter, bearnaise sauce", descEn: "Corn-fed beef from Uruguay, crispy fries, béarnaise sauce" },
      { da: "Braiseret Okse", price: "245,-", desc: "Langtidsbraiseret oksetykkam, knuste kartofler med trøffel, sauterede svampe, perleløg, demi glace, hakkede mandler", descEn: "Slow-braised beef shoulder, crushed potatoes with truffle, sautéed mushrooms, pearl onions, demi-glace, chopped almonds" },
      { da: "Fish N' Chips", price: "175,-", desc: "Torsk, grove fritter, sauce tartar", descEn: "Cod, chunky fries, tartare sauce" },
      { da: "Moules Frites", price: "175,-", desc: "Hvidvinsdampende blåmuslinger, cremet sauce, grove fritter, aioli", descEn: "White wine steamed mussels, creamy sauce, chunky fries, aioli" },
    ],
  },
  {
    da: "Pasta",
    items: [
      { da: "Pasta Trøffel", en: "Pasta Truffle", price: "165,-", desc: "Linguine, svampe, cremet sauce med trøffel", descEn: "Linguine, mushrooms, creamy truffle sauce", addon: "+ Grillet kyllingebryst 30,-", addonEn: "+ Grilled chicken breast 30,-" },
      { da: "Ravioli", price: "165,-", desc: "Ravioli, ricotta, spinat, salvie, frisk parmesan", descEn: "Ravioli, ricotta, spinach, sage, fresh parmesan" },
    ],
  },
  {
    da: "Pizza",
    items: [
      { da: "Prosciutto", price: "155,-", desc: "Tomat, frisk mozzarella, lufttørret skinke, rucola, pesto", descEn: "Tomato, fresh mozzarella, air-dried ham, rocket, pesto" },
      { da: "Piccante", price: "145,-", desc: "Tomat, frisk mozzarella, ventricina (stærk krydret pølse)", descEn: "Tomato, fresh mozzarella, ventricina (spicy cured sausage)" },
      { da: "Vitello", price: "145,-", desc: "Tomat, frisk mozzarella, kalvekød, blue cheese, tuncreme, kapers", descEn: "Tomato, fresh mozzarella, veal, blue cheese, tuna cream, capers" },
      { da: "Pepperoni", price: "135,-", desc: "Tomat, frisk mozzarella, pepperoni", descEn: "Tomato, fresh mozzarella, pepperoni" },
      { da: "Bianca", price: "135,-", desc: "Frisk mozzarella, kartoffel, rosmarin, hvidløg, trøffelolie", descEn: "Fresh mozzarella, potato, rosemary, garlic, truffle oil" },
      { da: "Rucola", price: "135,-", desc: "Tomat, frisk mozzarella, rucola, cherrytomat, parmesan", descEn: "Tomato, fresh mozzarella, rocket, cherry tomato, parmesan" },
      { da: "Margherita", price: "125,-", desc: "Tomat, frisk mozzarella, basilikum", descEn: "Tomato, fresh mozzarella, basil" },
    ],
  },
  {
    da: "Salater", en: "Salads",
    items: [
      { da: "Chèvre Chaud", price: "165,-", desc: "Gedeost, grillet brød, syltede græskar, salat, balsamico glace, honning ristede valnødder, blåbær", descEn: "Goat's cheese, grilled bread, pickled squash, salad, balsamic glaze, honey roasted walnuts, blueberries" },
      { da: "Cæsar", en: "Caesar", price: "165,-", desc: "Klassisk cæsar, crispy kylling, papadums", descEn: "Classic Caesar, crispy chicken, papadums" },
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
    da: "Ekstra", en: "Extra",
    items: [
      { da: "Sprøde Fritter", en: "Fries", price: "55,-", desc: "Med dip", descEn: "With dip" },
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
  {
    da: "Start Aftenen med et Glas", en: "Start the Evening with a Glass of",
    drinkGrid: true,
    items: [
      { da: "Gin & Tonic Hendricks", price: "125,-" },
      { da: "Aperol Spritz", price: "95,-" },
      { da: "Gin & Tonic", price: "115,-" },
      { da: "Limoncello", price: "95,-" },
      { da: "Dark N' Stormy", price: "115,-" },
      { da: "Doriac Rosé", price: "95,-" },
      { da: "French 75", price: "115,-" },
      { da: "Prosecco", price: "75,-" },
    ],
  },
];

export default function AftenMenuContent() {
  const { lang } = useLanguage();
  const en = lang === "en";
  return (
    <div className="max-w-2xl mx-auto">
      {categories.map((cat, i) => {
        const note = cat.drinkGrid
          ? en ? "Price per glass" : "Pris pr. glas"
          : en && cat.noteEn ? cat.noteEn : cat.note;
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
                  prices={item.price ? [{ value: kr(item.price) }] : undefined}
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
