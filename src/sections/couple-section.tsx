import Image from "next/image";

import type { PersonProfile } from "@/data/invitation";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type CoupleSectionProps = {
  bride: PersonProfile;
  groom: PersonProfile;
};

function ProfileCard({ profile, role }: { profile: PersonProfile; role: string }) {
  return (
    <div className="surface-card flex h-full flex-col items-center px-6 py-8 text-center sm:px-8">
      <div className="relative h-72 w-full max-w-[18rem] overflow-hidden rounded-[2rem] border border-white/80 bg-[#f8efe6] shadow-card">
        <Image
          src={profile.photo}
          alt={`${profile.fullName} portrait`}
          fill
          sizes="(max-width: 768px) 80vw, 18rem"
          className="object-cover"
        />
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.34em] text-gold">{role}</p>
      <h3 className="mt-3 text-4xl text-truffle">{profile.fullName}</h3>
      <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#7b6b64]">{profile.parents}</p>
      <p className="mt-5 text-base leading-8 text-[#70615b]">{profile.description}</p>
    </div>
  );
}

export function CoupleSection({ bride, groom }: CoupleSectionProps) {
  return (
    <section id="couple" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            kicker="Bride & Groom"
            title="Two hearts, one sacred promise."
            description="With the blessings of our families, we are delighted to share a glimpse of the people at the center of this joyful celebration."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <Reveal delay={80}>
            <ProfileCard profile={bride} role="The Bride" />
          </Reveal>

          <Reveal delay={140} className="flex items-center justify-center">
            <div className="hidden h-full min-h-[20rem] items-center lg:flex">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-gold/20 bg-white/75 text-4xl text-gold shadow-card">
                &
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ProfileCard profile={groom} role="The Groom" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
