import Image from "next/image";
import { CalendarDays, Heart, MapPin } from "lucide-react";

type HeroSectionProps = {
  names: string;
  dateLabel: string;
  venue: string;
  quote: string;
};

export function HeroSection({ names, dateLabel, venue, quote }: HeroSectionProps) {
  return (
    <section id="hero" className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.svg"
          alt="Soft floral wedding background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,250,245,0.72),rgba(255,250,245,0.94))]" />
      </div>

      <div className="section-inner relative py-20 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="surface-card max-w-3xl px-8 py-10 sm:px-12 sm:py-12">
            <span className="section-kicker">Save The Date</span>
            <h1 className="text-5xl leading-none text-truffle sm:text-7xl">{names}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f5f59] sm:text-xl">{quote}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="secondary-card flex items-center gap-4 px-5 py-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">Date</p>
                  <p className="mt-1 text-sm font-medium text-truffle">{dateLabel}</p>
                </div>
              </div>
              <div className="secondary-card flex items-center gap-4 px-5 py-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-gold">Venue</p>
                  <p className="mt-1 text-sm font-medium text-truffle">{venue}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#events" className="button-primary">
                View Events
              </a>
              <a href="#rsvp" className="button-secondary">
                Confirm Attendance
              </a>
            </div>
          </div>

          <div className="secondary-card relative overflow-hidden px-8 py-10 sm:px-10">
            <div className="absolute -right-6 top-5 h-24 w-24 rounded-full bg-[#efd8ca] blur-3xl" />
            <div className="absolute -left-10 bottom-8 h-28 w-28 rounded-full bg-[#ecc3cf] blur-3xl" />
            <div className="relative">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/20 bg-white/70 text-gold">
                <Heart className="h-5 w-5" />
              </div>
              <p className="text-sm uppercase tracking-[0.32em] text-gold">A Celebration of Love</p>
              <p className="mt-5 font-display text-3xl leading-tight text-truffle sm:text-4xl">
                Formal details, heartfelt moments, and a gathering wrapped in warmth.
              </p>
              <p className="mt-5 text-base leading-8 text-[#70615b]">
                The invitation is crafted as a fully static website, making it fast, graceful, and easy
                to host while still feeling intimate and personal on every screen size.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
