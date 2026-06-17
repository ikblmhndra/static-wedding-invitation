import { CountdownTimer } from "@/components/countdown-timer";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type CountdownSectionProps = {
  targetDate: string;
};

export function CountdownSection({ targetDate }: CountdownSectionProps) {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <Reveal>
          <div className="editorial-shell overflow-hidden px-6 py-10 sm:px-10 sm:py-12">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <SectionHeading
                  kicker="Countdown"
                  title="The days grow fewer, the excitement grows deeper."
                  description="A quiet reminder that forever is drawing near. We cannot wait to welcome you into this beautiful milestone."
                />
                <div className="mt-8 rounded-[1.8rem] border border-white/80 bg-white/[0.72] px-5 py-5 shadow-card backdrop-blur-md">
                  <p className="eyebrow-note">Until our vows are spoken</p>
                  <p className="mt-3 font-display text-[2rem] leading-tight text-truffle">
                    Each passing day brings us closer to a celebration shaped by tenderness, family,
                    and promise.
                  </p>
                </div>
              </div>
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
