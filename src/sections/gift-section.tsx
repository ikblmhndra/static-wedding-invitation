import Image from "next/image";
import { Gift } from "lucide-react";

import { CopyButton } from "@/components/copy-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type GiftSectionProps = {
  accounts: {
    bank: string;
    name: string;
    number: string;
  }[];
  qrisImage: string;
};

export function GiftSection({ accounts, qrisImage }: GiftSectionProps) {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            kicker="Wedding Gift"
            title="Your presence is the greatest gift."
            description="For loved ones who have asked, we have included simple digital gift options below. Please feel entirely free to celebrate with your prayers and presence alone."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal delay={80}>
            <div className="surface-card h-full px-6 py-8 sm:px-8">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Gift className="h-6 w-6" />
              </div>
              <div className="grid gap-5">
                {accounts.map((account) => (
                  <div key={account.number} className="secondary-card px-5 py-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-gold">{account.bank}</p>
                    <h3 className="mt-2 text-2xl text-truffle">{account.name}</h3>
                    <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-lg font-semibold tracking-[0.14em] text-[#6f5f59]">{account.number}</p>
                      <CopyButton value={account.number} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="surface-card flex h-full flex-col items-center justify-center px-6 py-8 text-center sm:px-8">
              <p className="text-xs uppercase tracking-[0.32em] text-gold">QRIS</p>
              <h3 className="mt-3 text-3xl text-truffle">Scan for a simple transfer</h3>
              <div className="relative mt-7 aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] border border-[#eadfce] bg-white p-4 shadow-card">
                <Image
                  src={qrisImage}
                  alt="QRIS placeholder"
                  fill
                  sizes="(max-width: 768px) 90vw, 24rem"
                  className="object-cover"
                />
              </div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[#796a63]">
                Replace this placeholder with your real QRIS image in `public/gift` when the payment
                details are ready.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
