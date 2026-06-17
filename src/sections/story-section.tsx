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
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-gold/10 via-gold/50 to-transparent lg:block" />
          <div className="space-y-6">
            {items.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <div
                  className={`grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 ${
                    index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-3 lg:[&>*:last-child]:order-1"
                  }`}
                >
                  <div className="hidden lg:block" />
                  <div className="hidden lg:flex lg:justify-center">
                    <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-gold/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,233,220,0.84))] text-sm font-semibold text-gold shadow-card">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="editorial-shell px-6 py-6 sm:px-8">
                    <div className="flex items-center gap-3">
                      <span className="section-kicker mb-0 bg-white/85">{item.year}</span>
                      <span className="eyebrow-note lg:hidden">
                        Chapter {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-3xl text-truffle sm:text-4xl">{item.title}</h3>
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
