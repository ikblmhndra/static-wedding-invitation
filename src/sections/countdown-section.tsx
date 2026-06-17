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
              </div>
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
