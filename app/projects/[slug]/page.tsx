"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { getProjectBySlug } from "@/lib/data";
import { getUi } from "@/lib/i18n";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { useEffect } from "react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const { locale } = useLocale();
  const t = getUi(locale);
  const project = getProjectBySlug(locale, slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Portfolio`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-[60vh] px-4 py-20 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">
            {locale === "fr" ? "Projet introuvable" : "Project not found"}
          </h1>
          <Link
            href="/#projects"
            className="mt-6 inline-block text-accent hover:text-accent-hover"
          >
            {t.projectDetail.backToProjects}
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = project.longDescription
    ? project.longDescription.split(/\n\n+/).filter(Boolean)
    : [project.description];

  return (
    <article className="min-h-[60vh] px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center text-sm font-medium text-foreground-muted transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          ← {t.projectDetail.backToProjects}
        </Link>

        <header className="mb-10">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.name}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
            {project.description}
          </p>
          {project.image && (
            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl border border-border bg-background-card">
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-accent px-5 font-medium text-background transition-colors hover:bg-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t.projectDetail.viewProject} →
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-transparent px-5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t.projectDetail.sourceCode}
              </a>
            )}
            {project.reportUrl && (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-transparent px-5 font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t.projectDetail.reportPdf}
              </a>
            )}
          </div>
        </header>

        {project.videoUrl && (
          <section className="mb-10">
            <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-foreground-muted">
              {t.projectDetail.demoVideo}
            </h2>
            <YouTubeEmbed
              url={project.videoUrl}
              playbackRate={project.videoPlaybackRate ?? 1}
              title={project.name}
            />
          </section>
        )}

        {project.technologies.length > 0 && (
          <div className="mb-10">
            <h2 className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-foreground-muted">
              {t.projectDetail.technologies}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-background-card border border-border px-3 py-1.5 text-sm text-foreground-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">
            {t.projectDetail.detail}
          </h2>
          <div className="space-y-4 text-foreground-muted leading-relaxed">
            {paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 font-heading text-lg font-semibold text-foreground">
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
      </div>
    </article>
  );
}
