import Image from "next/image";
import { CalendarDays, Heart, MapPin } from "lucide-react";

import type { PersonProfile } from "@/data/invitation";
import { formatLongDate } from "@/lib/format";

import { ArtDirectedImage } from "@/components/art-directed-image";
import { GuestNameCard } from "@/components/guest-name-card";

type HeroSectionProps = {
  label: string;
  names: string;
  hero: {
    eyebrow: string;
    dateTime: string;
    venue: string;
    quote: string;
    intro: string;
    image: PersonProfile["portrait"];
    detailImage: PersonProfile["portrait"];
  };
  bride: PersonProfile;
  groom: PersonProfile;
};

export function HeroSection({ label, names, hero, bride, groom }: HeroSectionProps) {
  const dateLabel = formatLongDate(hero.dateTime);

  return (
    <section id="hero" className="relative overflow-hidden pt-28">
      {/* <Image
        src="/hero-bg.svg"
        alt=""
        aria-hidden
        width={896}
        height={1232}
        className="pointer-events-none absolute left-1/2 top-[-9rem] h-auto w-[min(92vw,56rem)] -translate-x-1/2 opacity-60 mix-blend-multiply"
      /> */}

      <div className="section-inner relative py-12 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="script-accent">{hero.eyebrow}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="section-kicker">{label}</span>
              <span className="eyebrow-note">{dateLabel}</span>
            </div>

            <h1 className="mt-6 text-5xl leading-[0.86] text-truffle sm:text-7xl lg:text-[6rem]">
              {names}
            </h1>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-[#6f5555] sm:text-[1.35rem]">
              {hero.quote}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#7b6a63] sm:text-lg">
              {hero.intro}
            </p>

            <GuestNameCard
              label="Reserved with love for"
              className="mt-9 inline-flex max-w-full flex-col rounded-[1.75rem] border border-white/80 bg-white/80 px-6 py-5 shadow-card backdrop-blur-md"
              labelClassName="eyebrow-note"
              nameClassName="mt-2 font-display text-3xl leading-tight text-truffle sm:text-4xl"
            />

            <div className="mt-10 flex items-center gap-4">
              <div className="editorial-divider" />
              <p className="eyebrow-note">Curated details for a timeless celebration</p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="secondary-card flex items-center gap-4 px-5 py-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-[linear-gradient(180deg,rgba(221,186,124,0.16),rgba(221,186,124,0.04))] text-gold">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="eyebrow-note">Date</p>
                  <p className="mt-2 font-display text-2xl text-truffle">{dateLabel}</p>
                </div>
              </div>

              <div className="secondary-card flex items-center gap-4 px-5 py-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-[linear-gradient(180deg,rgba(221,186,124,0.16),rgba(221,186,124,0.04))] text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="eyebrow-note">Venue</p>
                  <p className="mt-2 font-display text-2xl text-truffle">{hero.venue}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#events" className="button-primary">
                View Events
              </a>
              <a href="#rsvp" className="button-secondary">
                Confirm Attendance
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.72fr_0.28fr] lg:justify-self-end lg:max-w-[35rem]">
            <div className="editorial-shell p-4 sm:p-5">
              <div className="photo-frame aspect-[4/5] rounded-[2rem]">
                <ArtDirectedImage image={hero.image} priority sizes="(max-width: 1024px) 90vw, 34rem" />
                <div className="photo-tint absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="eyebrow-note text-white/[0.7]">Save The Date</p>
                  <p className="mt-3 max-w-sm font-display text-3xl leading-tight sm:text-4xl">
                    A day composed with grace, devotion, and quiet elegance.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="editorial-shell p-4">
                <div className="photo-frame aspect-[3/4] rounded-[1.6rem]">
                  <ArtDirectedImage
                    image={bride.portrait}
                    sizes="(max-width: 640px) 100vw, 12rem"
                    className="scale-[1.01]"
                  />
                </div>
                <p className="mt-4 text-center font-display text-2xl text-truffle">{bride.shortName}</p>
              </div>

              <div className="editorial-shell p-4">
                <div className="photo-frame aspect-[3/4] rounded-[1.6rem]">
                  <ArtDirectedImage
                    image={groom.portrait}
                    sizes="(max-width: 640px) 100vw, 12rem"
                    className="scale-[1.01]"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="font-display text-2xl text-truffle">{groom.shortName}</p>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-[linear-gradient(180deg,rgba(221,186,124,0.16),rgba(221,186,124,0.04))] text-gold">
                    <Heart className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="secondary-card px-5 py-5 sm:col-span-2">
                <p className="eyebrow-note">Editorial note</p>
                <p className="mt-3 font-display text-[1.9rem] leading-tight text-truffle">
                  A gathering shaped by tenderness, family blessings, and the quiet beauty of a vow
                  made for life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
