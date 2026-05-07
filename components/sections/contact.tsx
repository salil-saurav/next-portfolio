import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { contactMethods } from "@/data/contact";
import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/ui/contact-form";

const contactIcons: Record<string, LucideIcon> = {
  Email: Mail,
  Phone: Phone,
  Location: MapPin
};

export function Contact() {
  return (
    <AnimatedSection id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together."
          description="Reach out if you're building, scaling, or optimizing a web application."
        />
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-lg border border-border-primary bg-panel/[0.82] p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold text-text-primary">Contact info</h3>
            <p className="mt-4 leading-7 text-text-secondary">
              I&apos;m best suited for WordPress, APIs, Laravel, database-driven applications, and performance-focused web development.
            </p>
            <div className="mt-8 space-y-3">
              {contactMethods.map((method) => {
                const Icon = contactIcons[method.label] ?? Mail;
                return (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === "Location" ? "_blank" : undefined}
                    rel={method.label === "Location" ? "noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-md border border-border-primary bg-surface-card p-4 transition hover:border-mint/[0.35] hover:bg-mint/[0.08]"
                  >
                    <span className="grid size-10 place-items-center rounded-md bg-mint/[0.12] text-mint">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-text-muted">
                        {method.label}
                      </span>
                      <span className="mt-1 block text-sm font-semibold text-text-secondary">
                        {method.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-border-primary bg-panel/[0.82] p-6 md:p-8">
            <h3 className="font-display text-2xl font-semibold text-text-primary">Send a message</h3>
            <p className="mt-4 leading-7 text-text-secondary">
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
