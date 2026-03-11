"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getPortfolioData } from "@/lib/data";
import { getUi } from "@/lib/i18n";

export function Hero() {
  const { locale } = useLocale();
  const data = getPortfolioData(locale);
  const t = getUi(locale);
  const { personal, professional } = data;

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] overflow-hidden px-4 pt-24 pb-20 md:px-6 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.15),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-secondary/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
          >
            {professional.subtitle}
          </motion.p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {personal.name}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 text-xl text-foreground-muted sm:text-2xl md:mt-6"
          >
            {personal.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
          >
            <Link
              href="/#projects"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-accent px-6 font-semibold text-background shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:shadow-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.hero.viewPortfolio}
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-[var(--border)] bg-transparent px-6 font-semibold text-foreground transition-all hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.hero.contactMe}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
