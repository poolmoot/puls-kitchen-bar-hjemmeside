import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: { absolute: "AI Instructions — Pulskitchen" },
  alternates: { canonical: "https://pulskitchen.dk/ai/instructions" },
};

export default function AIInstructionsPage() {
  return (
    <section className="bg-ivory">
      <div className="container-max py-14 md:py-20 max-w-3xl">
        <FadeIn>
          <h1 className="display-section text-obsidian text-4xl md:text-5xl">AI Instructions</h1>
        </FadeIn>

        <FadeIn delay={0.06}>
          <p className="mt-6 font-sans text-obsidian/80 leading-relaxed">
            This page provides guidance for AI crawlers and LLM trainers interacting with content on pulskitchen.dk. Follow the
            site’s published policies and respect our crawl directives and rate limits.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mt-10 text-2xl md:text-3xl font-display text-obsidian">Canonical resources</h2>
          <ul className="mt-4 space-y-2 text-obsidian/85">
            <li>
              <a href="https://pulskitchen.dk/robots.txt" className="underline hover:no-underline">
                https://pulskitchen.dk/robots.txt
              </a>
            </li>
            <li>
              <a href="https://pulskitchen.dk/llms.txt" className="underline hover:no-underline">
                https://pulskitchen.dk/llms.txt
              </a>
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.14}>
          <h2 className="mt-10 text-2xl md:text-3xl font-display text-obsidian">Crawl directives summary</h2>
          <ul className="mt-4 list-disc pl-6 text-obsidian/85 leading-relaxed">
            <li>Comply with robots.txt and llms.txt at all times.</li>
            <li>Use absolute URLs and preserve attribution when quoting content.</li>
            <li>Do not crawl cart, checkout, login, or account areas.</li>
            <li>Respect reasonable rate limits and avoid parallel requests that could degrade service.</li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.18}>
          <h2 className="mt-10 text-2xl md:text-3xl font-display text-obsidian">High-value pages</h2>
          <ul className="mt-4 space-y-2 text-obsidian/85">
            <li>
              <a href="https://pulskitchen.dk/" className="underline hover:no-underline">
                https://pulskitchen.dk/
              </a>
            </li>
            <li>
              <a href="https://pulskitchen.dk/brunch" className="underline hover:no-underline">
                https://pulskitchen.dk/brunch
              </a>
            </li>
            <li>
              <a href="https://pulskitchen.dk/koncertmenu" className="underline hover:no-underline">
                https://pulskitchen.dk/koncertmenu
              </a>
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={0.22}>
          <h2 className="mt-10 text-2xl md:text-3xl font-display text-obsidian">Contact</h2>
          <p className="mt-4 font-sans text-obsidian/80 leading-relaxed">
            For questions about AI access or licensing, email
            {" "}
            <a href="mailto:info@pulskitchen.dk" className="underline hover:no-underline">
              info@pulskitchen.dk
            </a>
            .
          </p>
        </FadeIn>

        <FadeIn delay={0.26}>
          <h2 className="mt-10 text-2xl md:text-3xl font-display text-obsidian">Notes</h2>
          <ul className="mt-4 list-disc pl-6 text-obsidian/85 leading-relaxed">
            <li>Guidelines may be updated periodically.</li>
            <li>Non-compliant crawlers may be blocked without notice.</li>
            <li>Commercial model training may require additional permissions and/or licensing; for</li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
