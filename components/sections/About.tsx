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
      className="scroll-mt-20 border-t border-border bg-background-secondary/50 px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          {t.sections.about}
        </motion.h2>
        <div className="mt-12 grid gap-12 md:grid-cols-[auto_1fr] md:items-start">
          {personal.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto h-48 w-48 shrink-0 overflow-hidden rounded-2xl border border-border bg-background-card md:mx-0 md:h-56 md:w-56"
            >
              <Image
                src={personal.image}
                alt={personal.name}
                fill
                className="object-cover"
                sizes="224px"
                priority={false}
              />
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
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base text-accent"
              >
                {professional.goal}
              </motion.p>
            )}
            {personal.location && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-sm text-foreground-muted"
              >
                {personal.location}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
