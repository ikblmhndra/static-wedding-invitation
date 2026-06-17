import type { StoryBeat } from "@/data/invitation";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type StorySectionProps = {
  items: StoryBeat[];
};

export function StorySection({ items }: StorySectionProps) {
  return (
    <section id="story" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            kicker="Love Story"
            title="A timeline of tenderness."
            description="Every chapter has unfolded with patience, tenderness, and a growing certainty that love was gently leading us here."
          />
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-gold/20 via-gold/60 to-transparent md:block" />
          <div className="space-y-6">
            {items.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div className="grid gap-4 md:grid-cols-[80px_1fr] md:gap-8">
                  <div className="hidden md:flex md:justify-center">
                    <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 bg-white text-sm font-semibold text-gold shadow-card">
                      {index + 1}
                    </div>
                  </div>
                  <div className="editorial-shell px-6 py-6 sm:px-8">
                    <p className="eyebrow-note">{item.year}</p>
                    <h3 className="mt-3 text-3xl text-truffle">{item.title}</h3>
                    <p className="mt-4 text-base leading-8 text-[#70615b]">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
