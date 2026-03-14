"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { getPortfolioData } from "@/lib/data";
import { getUi } from "@/lib/i18n";

export function Contact() {
  const { locale } = useLocale();
  const data = getPortfolioData(locale);
  const t = getUi(locale);
  const { contact } = data;

  return (
    <section
      id="contact"
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
          {t.sections.contact}
          <span className="mt-2 block h-0.5 w-16 rounded-full bg-gradient-to-r from-accent to-accent-secondary" />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 flex flex-col items-center rounded-2xl border border-accent/20 bg-background-card/80 p-8 text-center shadow-[0_0_0_1px_rgba(34,211,238,0.05),inset_0_1px_0_0_rgba(255,255,255,0.03)] md:p-12"
        >
          <p className="text-lg text-foreground-muted">{t.contact.intro}</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-xl bg-accent px-8 font-semibold text-background shadow-lg shadow-accent/30 transition-all duration-300 hover:bg-accent-hover hover:shadow-accent/40 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {contact.email}
          </a>
          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="mt-4 text-foreground-muted transition-colors hover:text-accent"
            >
              {contact.phone}
            </a>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground-muted transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                LinkedIn
              </a>
            )}
            {contact.github && (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground-muted transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                GitHub
              </a>
            )}
            {contact.otherLinks?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.url.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="font-medium text-foreground-muted transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
