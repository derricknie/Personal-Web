"use client";

import { useMemo, useState } from "react";
import { CategoryIcon } from "@/components/CategoryIcon";
import type { Language } from "@/data/content";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";

type ProjectArchiveCopy = {
  title: string;
  intro: string;
  count: string;
  allFilter: string;
  filters: Record<ProjectCategory, string>;
  viewDetails: string;
};

type ProjectArchiveProps = {
  language: Language;
  copy: ProjectArchiveCopy;
};

type ActiveFilter = "All" | ProjectCategory;

export function ProjectArchive({ language, copy }: ProjectArchiveProps) {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("All");

  const visibleProjects = useMemo(
    () => projects.filter((project) => activeFilter === "All" || project.category === activeFilter),
    [activeFilter],
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-lg leading-8 text-muted">{copy.intro}</p>
          <p className="mt-4 inline-flex rounded-lg border border-appleBlue/20 bg-appleBlue/7 px-4 py-2 text-sm font-semibold text-appleBlue">
            {copy.count}
          </p>
        </div>
        <div className="flex flex-wrap gap-2" aria-label={language === "en" ? "Project category filters" : "项目分类筛选"}>
          <FilterButton active={activeFilter === "All"} onClick={() => setActiveFilter("All")}>
            {copy.allFilter}
          </FilterButton>
          {projectCategories.map((category) => (
            <FilterButton key={category} active={activeFilter === category} onClick={() => setActiveFilter(category)}>
              <CategoryIcon category={category} className="h-4 w-4" />
              {copy.filters[category]}
            </FilterButton>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {visibleProjects.map((project) => {
          const title = language === "en" ? project.title : project.titleZh;
          const date = language === "en" ? project.date : project.dateZh;
          const category = language === "en" ? project.category : project.categoryZh;
          const tags = language === "en" ? project.tags : project.tagsZh;
          const summary = language === "en" ? project.summary : project.summaryZh;
          const details = language === "en" ? project.details : project.detailsZh;

          return (
            <article
              key={project.id}
              className="group rounded-lg border border-line bg-white/94 p-6 shadow-card transition hover:-translate-y-1 hover:border-appleBlue/25"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-sm font-semibold text-white">
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-appleBlue/20 bg-appleBlue/8 text-appleBlue">
                    <CategoryIcon category={project.category} />
                  </span>
                </div>
                <p className="text-right text-sm font-semibold text-muted">{date}</p>
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-snug text-ink">{title}</h3>
              <p className="mt-3 text-sm font-semibold text-appleBlue">{category}</p>
              <p className="mt-4 text-base leading-7 text-muted">{summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-lg border border-line bg-[#f8fafc] px-3 py-1.5 text-xs font-semibold text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <details className="project-details group/details mt-5 border-t border-line pt-4">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg px-1 py-2 text-sm font-semibold text-ink outline-none transition hover:text-appleBlue focus-visible:ring-2 focus-visible:ring-appleBlue/35">
                  <span>{copy.viewDetails}</span>
                  <span aria-hidden="true" className="text-appleBlue transition group-open/details:rotate-45">
                    +
                  </span>
                </summary>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-appleBlue/65" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function FilterButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-semibold transition ${
        active
          ? "border-ink bg-ink text-white shadow-sm"
          : "border-line bg-white text-muted shadow-sm hover:-translate-y-0.5 hover:border-appleBlue/40 hover:text-ink"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}
