import { education, profile, toolbelt } from "@/data/profile";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <AnimatedSection id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A developer who cares about architecture and delivery."
          description="Salil works across front-end, back-end, CMS, and API layers, with a preference for reliable systems that are easy to extend after launch."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-6 md:p-8">
            <p className="text-lg leading-8 text-white/[0.74]">{profile.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {toolbelt.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.label}
                    className="flex items-center gap-3 rounded-md border border-white/10 bg-ink/[0.45] p-4 text-sm font-semibold text-white/80"
                  >
                    <Icon className="size-5 text-aqua" aria-hidden="true" />
                    {tool.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-panel/[0.82] p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold text-white">Education</h3>
            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <div key={item.degree} className="border-l border-mint/[0.45] pl-5">
                  <p className="font-semibold text-white">{item.degree}</p>
                  <p className="mt-1 text-sm text-white/[0.62]">{item.school}</p>
                  <p className="mt-2 text-sm font-medium text-mint">{item.date}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-md border border-amber/20 bg-amber/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">
                Current direction
              </p>
              <p className="mt-3 leading-7 text-white/70">
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
