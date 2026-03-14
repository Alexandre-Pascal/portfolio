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
      className="relative scroll-mt-20 overflow-hidden border-t border-border px-4 py-14 md:px-6 md:py-20"
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
          {t.sections.certifications}
          <span className="mt-2 block h-0.5 w-16 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
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
              <div className="block rounded-xl border border-border bg-background-card/50 px-6 py-4 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_28px_rgba(34,211,238,0.1)]">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <span className="font-medium text-foreground">{cert.name}</span>
                    <span className="mt-1 block text-sm text-foreground-muted">
                      {cert.issuer} · {cert.period ?? cert.year}
                    </span>
                  </a>
                ) : (
                  <>
                    <span className="font-medium text-foreground">{cert.name}</span>
                    <span className="mt-1 block text-sm text-foreground-muted">
                      {cert.issuer} · {cert.period ?? cert.year}
                    </span>
                  </>
                )}
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    className="mt-2 inline-block text-sm font-medium text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {t.sections.certificationPdfLink} ↗
                  </a>
                )}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
