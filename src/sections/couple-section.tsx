import type { PersonProfile } from "@/data/invitation";

import { ArtDirectedImage } from "@/components/art-directed-image";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type CoupleSectionProps = {
  bride: PersonProfile;
  groom: PersonProfile;
};

function ProfileCard({ profile, role }: { profile: PersonProfile; role: string }) {
  return (
    <div className="editorial-shell h-full p-5 sm:p-6">
      <div className="photo-frame aspect-[4/5] rounded-[2rem]">
        <ArtDirectedImage
          image={profile.portrait}
          sizes="(max-width: 1024px) 90vw, 28rem"
          className="scale-[1.015]"
        />
        <div className="photo-tint absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="eyebrow-note text-white/[0.65]">{role}</p>
          <h3 className="mt-3 font-display text-4xl leading-none sm:text-5xl">{profile.fullName}</h3>
        </div>
      </div>

      <div className="mt-6 px-1">
        <p className="eyebrow-note">{profile.roleNote}</p>
        <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#7b6b64]">{profile.parents}</p>
        <p className="mt-5 text-base leading-8 text-[#70615b]">{profile.description}</p>
      </div>
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
            description="With the blessings of our families, we share the portrait of two hearts being gently led toward one lifelong promise."
            align="center"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <Reveal delay={80}>
            <ProfileCard profile={bride} role="The Bride" />
          </Reveal>

          <Reveal delay={140} className="flex items-center justify-center">
            <div className="hidden h-full min-h-[28rem] items-center lg:flex">
              <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full border border-gold/20 bg-white/75 text-gold shadow-card">
                <span className="font-accent text-5xl leading-none">&amp;</span>
                <span className="mt-1 text-[0.62rem] uppercase tracking-[0.34em] text-[#907b70]">
                  Forever
                </span>
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
