"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectIcons } from "@/data/projects";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const accents: Record<string, { border: string; text: string; bg: string }> = {
  mint: {
    border: "border-mint/[0.28]",
    text: "text-mint",
    bg: "bg-mint/10"
  },
  aqua: {
    border: "border-aqua/[0.28]",
    text: "text-aqua",
    bg: "bg-aqua/10"
  },
  amber: {
    border: "border-amber/[0.28]",
    text: "text-amber",
    bg: "bg-amber/10"
  },
  coral: {
    border: "border-coral/[0.28]",
    text: "text-coral",
    bg: "bg-coral/10"
  },
  violet: {
    border: "border-violet-400/[0.28]",
    text: "text-violet-400",
    bg: "bg-violet-400/10"
  }
};

export function Projects() {
  return (
    <AnimatedSection id="projects" aria-label="Projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Real work. Real systems. Real results."
          description="Hands-on projects spanning API integrations, WordPress engineering, geolocation, and cross-framework development."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:px-[calc(100%/6)]">
          {projects.slice(3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const accent = accents[project.accent] ?? accents.mint;
  const Icon = projectIcons[project.accent] ?? projectIcons.mint;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={`group overflow-hidden rounded-lg border ${accent.border} bg-panel/[0.82]`}
    >
      <div className="relative min-h-[7.5rem] border-b border-border-primary bg-ink p-5">
        <div className="absolute inset-0 bg-site-grid bg-[length:34px_34px] opacity-35" />
        <div className="relative flex items-center justify-between">
          <span
            className={`rounded-md ${accent.bg} px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] ${accent.text}`}
          >
            {project.type}
          </span>
          <span
            className={`grid size-10 place-items-center rounded-md border ${accent.border} ${accent.bg}`}
          >
            <Icon className={`size-5 ${accent.text}`} aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold text-text-primary">
            {project.title}
          </h3>
          <ArrowUpRight
            className={`mt-1 size-5 shrink-0 ${accent.text} transition group-hover:translate-x-1 group-hover:-translate-y-1`}
            aria-hidden="true"
          />
        </div>
        <p className="mt-4 min-h-24 leading-7 text-text-secondary">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border-primary bg-surface-card px-3 py-2 text-xs font-semibold text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
