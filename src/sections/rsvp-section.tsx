import { Mail } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { RsvpForm } from "@/components/rsvp-form";
import { SectionHeading } from "@/components/section-heading";

export function RsvpSection() {
  return (
    <section id="rsvp" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <div className="editorial-shell overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/15 bg-gold/8 text-gold">
                  <Mail className="h-6 w-6" />
                </div>
                <SectionHeading
                  kicker="RSVP"
                  title="Kindly let us know if you can join us."
                  description="This note of reply is kept intentionally simple, graceful, and static-first. The current setup uses Netlify Forms by default."
                />
              </div>
              <div className="secondary-card border-white/70 bg-white/[0.88] px-6 py-6 sm:px-8">
                <RsvpForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
