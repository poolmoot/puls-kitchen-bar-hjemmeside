import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import React from "react";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {
      title: { absolute: "Blog — PULS Kitchen & Bar" },
      description: "Guides og nyheder fra PULS Kitchen & Bar.",
      alternates: { canonical: `https://www.pulskitchen.dk/blog/${params.slug}` },
    };
  }
  return {
    title: { absolute: post.seoTitle },
    description: post.seoDescription,
    alternates: { canonical: `https://www.pulskitchen.dk/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      url: `https://www.pulskitchen.dk/blog/${post.slug}`,
      images: post.coverImage
        ? [
            {
              url: `https://www.pulskitchen.dk${post.coverImage}`,
              alt: post.coverImageAlt,
            },
          ]
        : undefined,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("da-DK", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <>
      <PageHero eyebrow="Blog" title={post.title} description={post.excerpt} />

      <section className="bg-cream text-ink2 section-pad">
        <div className="container-max max-w-3xl">
          {post.coverImage ? (
            <FadeIn>
              <div className="relative aspect-[16/9] overflow-hidden border border-ink2/15 bg-cream-soft">
                <Image
                  src={post.coverImage}
                  alt={post.coverImageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
          ) : null}

          <FadeIn>
            <p className="mt-6 text-xs tracking-[0.22em] uppercase text-ink2/60">{formattedDate}</p>
          </FadeIn>

          <FadeIn>
            <div className="mt-6">
              <MarkdownRenderer content={post.body} />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function MarkdownRenderer({ content }: { content: string }) {
  type Block =
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "p"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] };

  const blocks: Block[] = [];
  const lines = content.replace(/\r\n/g, "\n").split("\n");

  let i = 0;
  // Skip a leading H1 if present
  while (i < lines.length) {
    if (lines[i].trim() === "") {
      i++;
      continue;
    }
    if (lines[i].startsWith("# ")) {
      i++;
    }
    break;
  }

  const pushParagraph = (paraLines: string[]) => {
    const text = paraLines.join(" ").trim();
    if (text) blocks.push({ type: "p", text });
  };

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.startsWith("## ") && !line.startsWith("### ")) {
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      i++;
      continue;
    }

    if (/^-\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^-\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^-\s+/, "").trim());
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, "").trim());
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Paragraph
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !/^-\s+/.test(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i])
    ) {
      para.push(lines[i].trim());
      i++;
    }
    pushParagraph(para);
  }

  const renderInline = (text: string) => {
    const nodes: React.ReactNode[] = [];
    const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = linkRe.exec(text)) !== null) {
      if (m.index > lastIndex) {
        nodes.push(text.slice(lastIndex, m.index));
      }
      nodes.push(
        <a
          key={`${m.index}-${m[1]}`}
          href={m[2]}
          className="text-accent underline underline-offset-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-accent/60 rounded-sm"
        >
          {m[1]}
        </a>
      );
      lastIndex = m.index + m[0].length;
    }
    if (lastIndex < text.length) {
      nodes.push(text.slice(lastIndex));
    }
    return nodes;
  };

  return (
    <div>
      {blocks.map((b, idx) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={idx} className="text-2xl font-bold mt-10 mb-4 text-ink2">
                {renderInline(b.text)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={idx} className="text-xl font-semibold mt-8 mb-3 text-ink2">
                {renderInline(b.text)}
              </h3>
            );
          case "ul":
            return (
              <ul key={idx} className="list-disc pl-6 mb-4 space-y-2 text-ink2/85">
                {b.items.map((it, i2) => (
                  <li key={i2}>{renderInline(it)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={idx} className="list-decimal pl-6 mb-4 space-y-2 text-ink2/85">
                {b.items.map((it, i2) => (
                  <li key={i2}>{renderInline(it)}</li>
                ))}
              </ol>
            );
          case "p":
          default:
            return (
              <p key={idx} className="mb-4 leading-relaxed text-ink2/80">
                {renderInline((b as Extract<Block, { type: "p" }>).text)}
              </p>
            );
        }
      })}
    </div>
  );
}
