import { Blocks, Cloud, Container, GitBranch, GitMerge, Package, Server, Sparkles, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { education, profile } from "@/data/profile";
import type { EducationItem } from "@/lib/types";
import { toolbelt } from "@/data/skills";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const toolIcons: Record<string, LucideIcon> = {
  Composer: Package,
  "WP-CLI": Terminal,
  CLI: Terminal,
  "GitLab CI/CD": GitMerge,
  Azure: Cloud,
  Docker: Container,
  Git: GitBranch,
  "Custom Plugins": Blocks,
  "Reusable Services": Server,
  "SEO Tooling": Sparkles
};

export function About() {
  return (
    <AnimatedSection id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="I care about architecture and delivering real results."
          description="I work across front-end, back-end, CMS, and API layers, with a focus on building reliable systems that are easy to extend after launch."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-border-primary bg-surface-card p-6 md:p-8">
            <p className="text-lg leading-8 text-text-secondary">{profile.aboutSummary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {toolbelt.map((tool) => {
                const Icon = toolIcons[tool.label] ?? Terminal;
                return (
                  <div
                    key={tool.label}
                    className="flex items-center gap-3 rounded-md border border-border-primary bg-ink/[0.45] p-4 text-sm font-semibold text-text-secondary"
                  >
                    <Icon className="size-5 text-aqua" aria-hidden="true" />
                    {tool.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-border-primary bg-panel/[0.82] p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold text-text-primary">Education</h3>
            <div className="mt-6 space-y-5">
              {education.map((item: EducationItem) => (
                <div key={item.degree} className="border-l border-mint/[0.45] pl-5">
                  <p className="font-semibold text-text-primary">{item.degree}</p>
                  <p className="mt-1 text-sm text-text-secondary">{item.school}</p>
                  <p className="mt-2 text-sm font-medium text-mint">{item.date}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-md border border-amber/20 bg-amber/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">
                Current direction
              </p>
              <p className="mt-3 leading-7 text-text-secondary">
                Seeking a back-end-focused role where strong problem solving, database
                thinking, and clean service architecture can solve complex technical
                challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
