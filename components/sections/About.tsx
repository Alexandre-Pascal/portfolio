"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { getPortfolioData } from "@/lib/data";
import { getUi } from "@/lib/i18n";

export function About() {
  const { locale } = useLocale();
  const data = getPortfolioData(locale);
  const t = getUi(locale);
  const { personal, professional } = data;

  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-background-secondary/50 px-4 py-14 md:px-6 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          {t.sections.about}
          <span className="mt-2 block h-0.5 w-16 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
        </motion.h2>
        <div className="mt-12 grid gap-12 md:grid-cols-[auto_1fr] md:items-start">
          {personal.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto shrink-0 md:mx-0"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-accent/30 to-accent-secondary/20 opacity-60 blur-lg" />
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl border border-accent/20 bg-background-card ring-2 ring-accent/10 md:h-56 md:w-56">
                <Image
                  src={personal.image}
                  alt={personal.name}
                  fill
                  className="object-cover"
                  sizes="224px"
                  priority={false}
                />
              </div>
            </motion.div>
          )}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg leading-relaxed text-foreground-muted"
            >
              {professional.about}
            </motion.p>
            {professional.goal && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-accent/30 bg-accent/5 px-5 py-4"
              >
                <p className="text-base font-medium text-accent">
                  {professional.goal}
                </p>
              </motion.div>
            )}
            {personal.location && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-sm text-foreground-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
                {personal.location}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
