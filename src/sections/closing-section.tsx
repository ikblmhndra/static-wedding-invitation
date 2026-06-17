import { Heart } from "lucide-react";

import { Reveal } from "@/components/reveal";

type ClosingSectionProps = {
  names: string;
  message: string;
};

export function ClosingSection({ names, message }: ClosingSectionProps) {
  return (
    <section className="section-shell pb-24">
      <div className="section-inner">
        <Reveal>
          <div className="editorial-shell px-6 py-12 text-center sm:px-12 sm:py-14">
            <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-gold/15 bg-[linear-gradient(180deg,rgba(221,186,124,0.16),rgba(221,186,124,0.04))] text-gold">
              <Heart className="h-6 w-6" />
            </div>
            <p className="script-accent mt-6">With Love</p>
            <h2 className="mt-4 text-5xl text-truffle sm:text-6xl">{names}</h2>
            <div className="editorial-divider mx-auto mt-6" />
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[#71615b]">{message}</p>
            <p className="mx-auto mt-6 max-w-2xl text-sm uppercase tracking-[0.28em] text-[#8c766c]">
              Thank you for holding this day in your prayers and presence
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
