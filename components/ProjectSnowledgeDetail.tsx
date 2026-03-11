"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { getUi } from "@/lib/i18n";
import { snowledgeContent } from "@/lib/snowledge-portfolio-content";
import type { ProjectItem } from "@/lib/data";

export function ProjectSnowledgeDetail({ project }: { project: ProjectItem }) {
  const { locale } = useLocale();
  const t = getUi(locale);
  const content = snowledgeContent[locale];

  return (
    <article className="min-h-[60vh] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center text-sm font-medium text-foreground-muted transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          ← {t.projectDetail.backToProjects}
        </Link>

        {/* Hero */}
        <header className="mb-14 border-b border-border pb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">
            {content.role}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-base text-foreground-muted">
            {content.period}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-foreground">
            {content.pitch}
          </p>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 font-medium text-background transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.projectDetail.viewProject} →
            </a>
          )}
        </header>

        {/* Team & context */}
        <section className="mb-14">
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground-muted">
            {content.teamContext.title}
          </h2>
          <div className="space-y-4 rounded-xl border border-border bg-background-card/50 p-5 md:p-6">
            {content.teamContext.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-foreground md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Recognition & support */}
        <section className="mb-14">
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground-muted">
            {content.recognition.title}
          </h2>
          <div className="rounded-xl border border-border bg-background-card/50 p-5 md:p-6">
            <p className="text-sm leading-relaxed text-foreground md:text-base">
              {content.recognition.paragraph}
            </p>
          </div>
        </section>

        {/* Key figures */}
        <section className="mb-14">
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground-muted">
            {t.projectDetail.snowledge.keyFigures}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {content.keyFigures.map(({ label, value }) => (
              <div
                key={label}
                className="flex min-h-[5rem] flex-col justify-center rounded-xl border border-border bg-background-card px-4 py-4 text-center"
              >
                <p className="text-lg font-bold leading-snug text-foreground sm:text-xl md:text-2xl">
                  {value}
                </p>
                <p className="mt-2 text-xs text-foreground-muted">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-14">
          <h2 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-foreground-muted">
            {t.projectDetail.snowledge.timeline}
          </h2>
          <div className="space-y-6">
            {content.timeline.map((phase) => (
              <div
                key={phase.period}
                className="rounded-xl border border-border bg-background-card p-5 md:p-6"
              >
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-semibold text-accent">
                    {phase.period}
                  </span>
                  <span className="text-sm text-foreground-muted">—</span>
                  <span className="font-heading text-base font-semibold text-foreground">
                    {phase.title}
                  </span>
                </div>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm leading-relaxed text-foreground-muted">
                  {phase.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* My contributions */}
        <section className="mb-14">
          <h2 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground-muted">
            {t.projectDetail.snowledge.myContributions}
          </h2>
          <ul className="space-y-3">
            {content.contributions.map((text, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-lg border border-border bg-background-card/50 px-4 py-3 text-sm leading-relaxed text-foreground"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-xs font-semibold text-accent">
                  {i + 1}
                </span>
                {text}
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mb-14">
            <h2 className="mb-6 font-heading text-sm font-semibold uppercase tracking-wider text-foreground-muted">
              {t.projectDetail.gallery}
            </h2>
            <div className="grid gap-8 sm:grid-cols-1">
              {project.gallery.map((item, i) => (
                <figure key={i} className="space-y-2">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-background-card">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 672px"
                    />
                  </div>
                  <figcaption className="text-center text-sm text-foreground-muted">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Stack */}
        <section className="mb-10">
          <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-foreground-muted">
            {t.projectDetail.snowledge.stack}
          </h2>
          <p className="text-sm leading-relaxed text-foreground-muted">
            {content.stackSummary}
          </p>
          {project.technologies.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-border bg-background-card px-3 py-1.5 text-sm text-foreground-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </section>
      </div>
    </article>
  );
}
