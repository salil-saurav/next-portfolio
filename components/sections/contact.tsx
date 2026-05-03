"use client";

import { contactMethods, profile } from "@/data/profile";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s work together."
          description="Reach out if you’re building, scaling, or optimizing a web application."
        />
        <div className="max-w-lg mx-auto">
          <div className="rounded-lg border border-white/10 bg-panel/[0.82] p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold text-white">Get in touch</h3>
            <p className="mt-4 leading-7 text-white/[0.66]">
              I’m best suited for WordPress, APIs, Laravel, database-driven applications, and performance-focused web development.
            </p>
            <div className="mt-8 space-y-3">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === "Location" ? "_blank" : undefined}
                    rel={method.label === "Location" ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-md border border-white/10 bg-white/[0.045] p-4 transition hover:border-mint/[0.35] hover:bg-mint/[0.08]"
                  >
                    <span className="grid size-10 place-items-center rounded-md bg-mint/[0.12] text-mint">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-white/[0.42]">
                        {method.label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-white/[0.82]">
                        {method.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
