"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const VIDEO_SRC = "/Videos/pulshero.mp4";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "15%"]);
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <div ref={ref} className="relative z-10">

      {/* Video — 85vh */}
      <div className="relative h-[85vh] min-h-[580px] overflow-hidden bg-obsidian rounded-b-[2rem] md:rounded-b-[3rem]">
        <motion.div style={{ y }} className="absolute inset-0">
          <video
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            poster="/images/gallery-1.jpeg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>
      </div>

      {/* Floating card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.2, 0.65, 0.2, 1], delay: 0.2 }}
        className="absolute inset-x-0 -bottom-20 md:-bottom-24 flex justify-center px-4"
      >
        <div className="w-full max-w-[500px] bg-[#F5F7F2]/95 backdrop-blur-md rounded-2xl shadow-2xl px-6 py-5 text-center">
          <h1 className="flex justify-center">
            <Image
              src="/images/PULS_logo.svg"
              alt="PULS Kitchen & Bar"
              width={200}
              height={123}
              className="w-[120px] md:w-[150px] h-auto object-contain"
              unoptimized
              priority
            />
          </h1>

          <p
            className="mt-3 font-sans text-forest/65 max-w-xs mx-auto leading-relaxed"
            style={{ fontSize: "clamp(0.8rem,1.1vw,0.875rem)" }}
          >
            {t.tagline}
          </p>

          <div className="mt-4 flex flex-col sm:flex-row flex-wrap justify-center gap-2">
            <Link href="/menu" className="btn-sage-solid justify-center whitespace-nowrap">
              {t.viewMenu}
            </Link>
            <Link
              href="https://wolt.com/da/dnk/copenhagen/restaurant/puls-kitchen-bar"
              target="_blank"
              rel="noopener"
              className="btn-sage-solid justify-center whitespace-nowrap"
            >
              {t.takeaway}
            </Link>
            <Link
              href="https://book.easytable.com/book/?id=1214a&lang=auto"
              target="_blank"
              rel="noopener"
              className="btn-dark justify-center whitespace-nowrap"
            >
              {t.bookTable}
            </Link>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
