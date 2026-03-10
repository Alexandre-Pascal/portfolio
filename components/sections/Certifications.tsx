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
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0 },
};

export function Certifications() {
  const { locale } = useLocale();
  const data = getPortfolioData(locale);
  const t = getUi(locale);
  const { certifications } = data;

  if (certifications.length === 0) return null;

  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-t border-border px-4 py-20 md:px-6 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          {t.sections.certifications}
        </motion.h2>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-12 flex flex-wrap gap-4"
        >
          {certifications.map((cert) => (
            <motion.li key={`${cert.name}-${cert.year}`} variants={item}>
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-border bg-background-card/50 px-6 py-4 transition-all hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5"
                >
                  <span className="font-medium text-foreground">{cert.name}</span>
                  <span className="mt-1 block text-sm text-foreground-muted">
                    {cert.issuer} · {cert.year}
                  </span>
                </a>
              ) : (
                <div className="block rounded-xl border border-border bg-background-card/50 px-6 py-4 transition-all hover:border-accent/30">
                  <span className="font-medium text-foreground">{cert.name}</span>
                  <span className="mt-1 block text-sm text-foreground-muted">
                    {cert.issuer} · {cert.year}
                  </span>
                </div>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
