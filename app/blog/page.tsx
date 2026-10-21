import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: { absolute: "Blog — PULS Kitchen & Bar" },
  description:
    "Guides og nyheder fra PULS Kitchen & Bar. Læs om brunch, sæsonens råvarer og inspiration fra vores køkken.",
  alternates: { canonical: "https://www.pulskitchen.dk/blog" },
  openGraph: {
    title: "Blog — PULS Kitchen & Bar",
    description:
      "Guides og nyheder fra PULS Kitchen & Bar. Læs om brunch, sæsonens råvarer og inspiration fra vores køkken.",
    url: "https://www.pulskitchen.dk/blog",
  },
};

export default function BlogIndexPage() {
  const sorted = posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Blog"
        description="Læs guides, nyheder og tanker fra PULS Kitchen & Bar."
      />

      <section className="bg-cream text-ink2 section-pad">
        <div className="container-max">
          <ul className="space-y-6">
            {sorted.map((post) => {
              const formatted = new Date(post.date).toLocaleDateString("da-DK", {
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              });
              return (
                <li key={post.slug}>
                  <FadeIn>
                    <article className="p-6 md:p-8 border border-ink2/15 bg-cream-soft">
                      <h2 className="text-2xl font-display">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-ink2 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/60 rounded-sm"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="mt-2 text-xs tracking-[0.22em] uppercase text-ink2/60">
                        {formatted}
                      </p>
                      <p className="mt-4 text-ink2/75 leading-relaxed">{post.excerpt}</p>
                    </article>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
