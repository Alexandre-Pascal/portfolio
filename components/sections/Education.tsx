"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { getPortfolioData } from "@/lib/data";
import { getUi } from "@/lib/i18n";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Education() {
  const { locale } = useLocale();
  const data = getPortfolioData(locale);
  const t = getUi(locale);
  const { education } = data;

  return (
    <section
      id="education"
      className="relative scroll-mt-20 overflow-hidden border-t border-border px-4 py-14 md:px-6 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.025)_1px,transparent_1px)] bg-[size:64px_64px]"
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
          {t.sections.education}
          <span className="mt-2 block h-0.5 w-16 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 space-y-0"
        >
          <div className="relative pl-6 md:pl-8">
            <div
              className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.3)]"
              aria-hidden
            />
            {education.map((edu) => (
              <motion.article
                key={`${edu.institution}-${edu.startYear}`}
                variants={item}
                className="relative pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <div className="rounded-xl border border-border bg-background-card/50 p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_28px_rgba(34,211,238,0.08)] md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {edu.degree}
                      {edu.mention && (
                        <span className="ml-2 text-accent">— {edu.mention}</span>
                      )}
                    </h3>
                    <span className="text-sm text-foreground-muted">
                      {edu.startYear} – {edu.endYear}
                    </span>
                  </div>
                  <p className="mt-1 text-foreground-muted">
                    {edu.institution}
                    {edu.city && `, ${edu.city}`}
                  </p>
                  {edu.description && (
                    <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                      {edu.description}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
