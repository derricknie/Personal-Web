"use client";

import { useEffect, useMemo, useState } from "react";
import { EngineeringLogo } from "@/components/EngineeringLogo";
import { EngineeringPattern } from "@/components/EngineeringPattern";
import { ProjectArchive } from "@/components/ProjectArchive";
import { SectionDivider } from "@/components/SectionDivider";
import { contactLinks, content, Language, sectionIds } from "@/data/content";

const navIdMap = {
  about: "about",
  education: "education",
  projects: "projects",
  skills: "skills",
  experience: "experience",
  contact: "contact",
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [photoSrc, setPhotoSrc] = useState("/images/profile.jpg");
  const current = content[language];

  const navItems = useMemo(
    () =>
      sectionIds.map((id, index) => ({
        id: navIdMap[id],
        label: current.nav[index],
      })),
    [current.nav],
  );

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  }, [language]);

  useEffect(() => {
    setPhotoSrc("/images/profile.jpg");
  }, []);

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#" className="group inline-flex items-center gap-3" aria-label={`${current.hero.name} portfolio home`}>
            <EngineeringLogo label="EN monogram logo for Erhan Nie" className="h-9 w-9 shrink-0" />
            <span className="flex flex-col">
              <span className="text-sm font-semibold tracking-normal text-ink">{current.brand}</span>
              <span className="mt-1 h-px w-full origin-left scale-x-0 bg-appleBlue transition group-hover:scale-x-100" />
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <div
            className="flex shrink-0 items-center rounded-lg border border-line bg-white p-1 text-sm font-semibold shadow-sm"
            aria-label={current.languageLabel}
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-md px-3 py-1.5 transition ${
                language === "en" ? "bg-ink text-white shadow-sm" : "text-muted hover:text-ink"
              }`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("zh")}
              className={`rounded-md px-3 py-1.5 transition ${
                language === "zh" ? "bg-ink text-white shadow-sm" : "text-muted hover:text-ink"
              }`}
              aria-pressed={language === "zh"}
            >
              中文
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <EngineeringPattern />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
          <p className="text-base font-semibold text-appleBlue">{current.hero.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            {current.hero.name}
          </h1>
          <p className="mt-7 max-w-3xl text-2xl font-semibold leading-snug text-ink sm:text-3xl">
            {current.hero.headline}
          </p>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">{current.hero.subtitle}</p>
          <p className="mt-6 inline-flex max-w-3xl rounded-lg border border-line bg-white/80 px-4 py-3 text-sm font-semibold leading-6 text-muted shadow-sm backdrop-blur">
            {current.hero.achievementStrip}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-appleBlue px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-[#0064ca]"
            >
              {current.hero.primaryAction}
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-appleBlue/50"
            >
              {current.hero.secondaryAction}
            </a>
          </div>
          </div>

          <figure className="mx-auto w-full max-w-[440px] lg:ml-auto">
          {/* This uses the final production path and falls back only while the portrait is not yet added. */}
          <img
            src={photoSrc}
            alt={current.hero.photoAlt}
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft ring-1 ring-black/5"
            onError={() => setPhotoSrc("/images/profile-placeholder.svg")}
          />
          </figure>
        </div>
      </section>

      <div className="border-y border-line bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 text-sm font-semibold text-muted sm:px-8 md:grid-cols-3">
          {current.focusPillars.map((pillar) => (
            <span key={pillar}>{pillar}</span>
          ))}
        </div>
      </div>

      <section id="about" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading label={current.sectionLabels.about} title={current.sections.about.title} />
        <div className="max-w-4xl space-y-6 text-lg leading-8 text-muted">
          {current.sections.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section id="education" className="section-anchor bg-white/72">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeading label={current.sectionLabels.education} title={current.sections.education.title} />
          <div className="grid gap-5 md:grid-cols-2">
            {current.sections.education.items.map((item) => (
              <article key={item.school} className="rounded-lg border border-line bg-white p-7 shadow-card transition hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-ink">{item.school}</h3>
                <p className="mt-3 text-base font-semibold text-appleBlue">{item.degree}</p>
                <p className="mt-3 text-sm font-medium text-muted">{item.meta}</p>
                <p className="mt-6 text-base leading-7 text-muted">
                  <span className="font-semibold text-ink">{item.areasLabel}: </span>
                  {item.areas}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="projects" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading label={current.sectionLabels.projects} title={current.sections.projects.title} />
        <ProjectArchive language={language} copy={current.sections.projects} />
      </section>

      <SectionDivider />

      <section id="skills" className="section-anchor bg-white/72">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeading label={current.sectionLabels.skills} title={current.sections.skills.title} />
          <div className="grid gap-5 md:grid-cols-2">
            {current.sections.skills.groups.map((group) => (
              <article key={group.title} className="rounded-lg border border-line bg-white p-7 shadow-card">
                <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-lg border border-line bg-[#f8fafc] px-3 py-2 text-sm font-medium text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="experience" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading label={current.sectionLabels.experience} title={current.sections.experience.title} />
        <div className="space-y-5">
          {current.sections.experience.items.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-lg border border-line bg-white/92 p-7 shadow-card">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-ink">{item.company}</h3>
                  <p className="mt-2 text-base font-semibold text-appleBlue">{item.role}</p>
                </div>
                <p className="text-sm font-semibold text-muted md:text-right">
                  {item.location}
                  {item.period ? ` · ${item.period}` : ""}
                </p>
              </div>
              <p className="mt-5 max-w-5xl text-base leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section id="contact" className="section-anchor bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">{current.sectionLabels.contact}</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{current.sections.contact.intro}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <ContactItem label={current.sections.contact.emailLabel} value={contactLinks.email} href={`mailto:${contactLinks.email}`} />
            <ContactItem label={current.sections.contact.linkedinLabel} value="linkedin.com/in/nieerhan" href={contactLinks.linkedin} />
            <ContactItem label={current.sections.contact.phoneLabel} value={current.sections.contact.phoneValue} />
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-appleBlue">{label}</p>
      <h2 className="mt-3 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">{title}</h2>
    </div>
  );
}

function ContactItem({ label, value, href }: { label: string; value: string; href?: string }) {
  const className =
    "block rounded-lg border border-white/12 bg-white/7 p-6 shadow-card transition hover:-translate-y-1 hover:bg-white/10";

  const content = (
    <>
      <p className="text-sm font-semibold text-blue-200">{label}</p>
      <p className="mt-3 break-words text-lg font-semibold text-white">{value}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} className={className} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
