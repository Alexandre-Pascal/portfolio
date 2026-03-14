"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getPortfolioData } from "@/lib/data";
import { getUi } from "@/lib/i18n";

const nameVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.04,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export function Hero() {
  const { locale } = useLocale();
  const data = getPortfolioData(locale);
  const t = getUi(locale);
  const { personal, professional } = data;
  const nameChars = personal.name.split("");

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden px-4 pt-24 pb-20 md:px-6 md:pt-32"
    >
      {/* Grille de fond */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden
      />

      {/* Orbes animés */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3"
        aria-hidden
      >
        <motion.div
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-accent-secondary/25 blur-[100px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/15 blur-[80px]"
          animate={{
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Dégradé radial fixe */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-30%,rgba(34,211,238,0.12),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-5 inline-block rounded-full border border-accent/40 bg-accent/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent"
          >
            {professional.subtitle}
          </motion.p>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ whiteSpace: char === " " ? "pre" : "normal" }}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-5 bg-gradient-to-r from-foreground-muted via-foreground to-foreground-muted bg-clip-text text-xl font-medium text-transparent sm:text-2xl md:mt-6"
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <Link
              href="/#projects"
              className="group relative inline-flex h-12 min-w-[160px] items-center justify-center overflow-hidden rounded-xl bg-accent px-6 font-semibold text-background shadow-lg shadow-accent/30 transition-all duration-300 hover:shadow-accent/50 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative">{t.hero.viewPortfolio}</span>
            </Link>
            <Link
              href={`/api/cv?locale=${locale}`}
              download="CV-Alexandre-Pascal.pdf"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-xl border border-[var(--border)] bg-background-card/80 px-6 font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent/50 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.hero.downloadCv}
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-xl border border-[var(--border)] bg-background-card/80 px-6 font-semibold text-foreground backdrop-blur-sm transition-all hover:border-accent/50 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.hero.contactMe}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
