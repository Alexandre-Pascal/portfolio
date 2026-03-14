"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { getPortfolioData, PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/data";
import { getUi } from "@/lib/i18n";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  const { locale } = useLocale();
  const data = getPortfolioData(locale);
  const t = getUi(locale);
  const { projects } = data;
  const [activeFilters, setActiveFilters] = useState<ProjectCategory[]>([]);

  const toggleFilter = (cat: ProjectCategory) => {
    setActiveFilters((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredProjects =
    activeFilters.length === 0
      ? projects
      : projects.filter((p) =>
          p.categories?.some((c) => activeFilters.includes(c))
        );

  const viewProjectLabel = locale === "fr" ? "Voir le projet →" : "View project →";
  const sourceLabel = locale === "fr" ? "Code source" : "Source code";

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border px-4 py-14 md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          {t.sections.projects}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mt-6 flex flex-wrap gap-2"
        >
          <button
            type="button"
            onClick={() => setActiveFilters([])}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              activeFilters.length === 0
                ? "bg-accent text-background"
                : "bg-background-secondary text-foreground-muted hover:bg-border hover:text-foreground"
            }`}
          >
            {t.projectCategories.all}
          </button>
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => toggleFilter(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                activeFilters.includes(cat)
                  ? "bg-accent text-background"
                  : "bg-background-secondary text-foreground-muted hover:bg-border hover:text-foreground"
              }`}
            >
              {t.projectCategories[cat]}
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeFilters.slice().sort().join(",")}
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.slug}
              variants={card}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background-card transition-all duration-300 hover:scale-[1.02] hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="flex flex-1 flex-col"
              >
                {project.image && (
                  <div className="relative aspect-video w-full overflow-hidden bg-background-secondary">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                {!project.image && (
                  <div className="flex aspect-video w-full items-center justify-center bg-background-secondary">
                    <span className="text-4xl text-foreground-muted/30">◆</span>
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground-muted line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-background-secondary px-2 py-0.5 text-xs text-foreground-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-medium text-accent">
                    {locale === "fr" ? "Voir le détail →" : "View details →"}
                  </p>
                </div>
              </Link>
              <div className="flex flex-wrap gap-3 border-t border-border px-6 py-4 bg-background-secondary/50">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent transition-colors hover:text-accent-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {viewProjectLabel}
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {sourceLabel}
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
