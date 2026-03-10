"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { getPortfolioData } from "@/lib/data";
import { getUi } from "@/lib/i18n";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  const { locale } = useLocale();
  const data = getPortfolioData(locale);
  const t = getUi(locale);
  const { skills } = data;

  return (
    <section
      id="skills"
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
          {t.sections.skills}
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              className="rounded-xl border border-border bg-background-card/50 p-6 transition-colors hover:border-accent/30"
            >
              <h3 className="font-heading text-lg font-semibold text-accent">
                {category.name}
              </h3>
              <ul className="mt-4 space-y-2">
                {category.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-sm text-foreground-muted"
                  >
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="rounded bg-background-secondary px-2 py-0.5 text-xs text-foreground-muted">
                        {skill.level}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
