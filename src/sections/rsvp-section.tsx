import { Mail } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { RsvpForm } from "@/components/rsvp-form";
import { SectionHeading } from "@/components/section-heading";

export function RsvpSection() {
  return (
    <section id="rsvp" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <div className="surface-card overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Mail className="h-6 w-6" />
                </div>
                <SectionHeading
                  kicker="RSVP"
                  title="Kindly let us know if you can join us."
                  description="This form is database-free by default and configured for Netlify Forms. Comments in the source explain how to switch to Google Forms or a serverless email flow."
                />
              </div>
              <div className="secondary-card px-6 py-6 sm:px-8">
                <RsvpForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
