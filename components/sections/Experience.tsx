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

export function Experience() {
  const { locale } = useLocale();
  const data = getPortfolioData(locale);
  const t = getUi(locale);
  const { experience } = data;

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border bg-background-secondary/50 px-4 py-14 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          {t.sections.experience}
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
              className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent-secondary via-border to-transparent"
              aria-hidden
            />
            {experience.map((exp) => (
              <motion.article
                key={`${exp.company}-${exp.startDate}`}
                variants={item}
                className="relative pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent-secondary bg-background" />
                <div className="rounded-xl border border-border bg-background-card/50 p-6 transition-colors hover:border-accent-secondary/30 md:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="rounded-full bg-background-secondary px-2.5 py-0.5 text-xs font-medium text-foreground-muted">
                      {exp.type}
                    </span>
                  </div>
                  <p className="mt-1 text-foreground-muted">
                    {exp.company}
                    {exp.city && ` · ${exp.city}`}
                  </p>
                  <p className="mt-1 text-sm text-accent">
                    {exp.startDate} – {exp.endDate}
                  </p>
                  <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-foreground-muted">
                    {exp.points.map((point, i) => (
                      <li key={i} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
