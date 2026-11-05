import { Children, Fragment, type ReactNode } from "react";

/** One price on a dish. `label` says what the price is for (e.g. "Glas", "33 cl", "Pr. stk."). */
export type PriceLine = { label?: string; value: string };

/** "165,-" becomes "165 kr." so a price is never just a bare number. */
export function kr(raw: string) {
  return raw.replace(/,-/g, " kr.");
}

function Divider() {
  return <div className="w-10 h-px bg-forest/20 mx-auto my-7" aria-hidden="true" />;
}

/** A full-width band for one menu category: big heading, short rule, then the dishes. */
export function MenuBand({
  index,
  title,
  sub,
  note,
  children,
}: {
  index: number;
  title: string;
  sub?: string;
  note?: string;
  children: ReactNode;
}) {
  const dishes = Children.toArray(children);
  return (
    <section className={`px-6 py-12 md:py-16 text-center ${index % 2 === 0 ? "bg-ivory" : "bg-bone"}`}>
      <h3 className="font-bold uppercase text-3xl md:text-4xl tracking-[0.04em] text-forest leading-tight">{title}</h3>
      {sub && <p className="text-[11px] tracking-[0.22em] uppercase text-stone mt-2">{sub}</p>}
      <div className="w-12 h-px bg-gold mx-auto mt-6" aria-hidden="true" />
      {note && <p className="text-sm text-forest/70 mt-5 max-w-md mx-auto leading-relaxed">{note}</p>}
      <div className="mt-9 max-w-md mx-auto">
        {dishes.map((dish, i) => (
          <Fragment key={i}>
            {i > 0 && <Divider />}
            {dish}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

/** Small label inside a band, e.g. "Spritz" or "Gin" in the cocktail list. */
export function GroupLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs tracking-[0.24em] uppercase text-stone font-semibold">{children}</p>;
}

/** One dish: name, optional small tag, description, labelled prices and an optional add-on. */
export function Dish({
  name,
  nameSub,
  tag,
  desc,
  prices,
  addon,
}: {
  name?: string;
  nameSub?: string;
  tag?: string;
  desc?: string;
  prices?: PriceLine[];
  addon?: string;
}) {
  return (
    <div>
      {name && (
        <p className="font-semibold text-forest text-lg leading-snug">
          {name}
          {nameSub && <span className="font-normal text-stone text-sm"> · {nameSub}</span>}
        </p>
      )}
      {tag && <p className="text-[11px] tracking-[0.16em] uppercase text-stone mt-1">{tag}</p>}
      {desc && <p className="text-sm text-obsidian/65 mt-1.5 leading-relaxed">{desc}</p>}
      {prices && prices.length > 0 && (
        <p className="mt-2.5 flex flex-wrap justify-center gap-x-5 gap-y-1 text-forest">
          {prices.map((p, i) => (
            <span key={i} className="font-semibold tabular-nums">
              {p.label && (
                <span className="mr-1.5 text-[11px] tracking-[0.14em] uppercase font-medium text-stone">{p.label}</span>
              )}
              {p.value}
            </span>
          ))}
        </p>
      )}
      {addon && <p className="text-sm text-forest/70 mt-2">{addon}</p>}
    </div>
  );
}
