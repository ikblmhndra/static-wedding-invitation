import { CalendarDays, Clock3, MapPin } from "lucide-react";

import type { EventDetail } from "@/data/invitation";
import { formatLongDate, formatTime } from "@/lib/format";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type EventsSectionProps = {
  events: EventDetail[];
};

function EventCard({ event }: { event: EventDetail }) {
  const badgeLabel = event.title === "Akad Nikah" ? "Sacred Vows" : "Reception";

  return (
    <div className="editorial-shell h-full px-7 py-8 sm:px-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow-note">{event.title}</p>
          <h3 className="mt-3 text-3xl text-truffle">{event.location}</h3>
        </div>
        <div className="hidden rounded-full border border-gold/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(246,233,220,0.82))] px-4 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-gold sm:inline-flex">
          {badgeLabel}
        </div>
      </div>

      <div className="mt-7 space-y-4">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-gold/15 bg-[linear-gradient(180deg,rgba(221,186,124,0.16),rgba(221,186,124,0.04))] text-gold">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div>
            <p className="eyebrow-note">Date</p>
            <p className="mt-2 text-base text-truffle">{formatLongDate(event.dateTime)}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-gold/15 bg-[linear-gradient(180deg,rgba(221,186,124,0.16),rgba(221,186,124,0.04))] text-gold">
            <Clock3 className="h-5 w-5" />
          </div>
          <div>
            <p className="eyebrow-note">Time</p>
            <p className="mt-2 text-base text-truffle">
              {event.endDateTime
                ? `${formatTime(event.dateTime)} — ${formatTime(event.endDateTime)} WIB`
                : `${formatTime(event.dateTime)} WIB`}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border border-gold/15 bg-[linear-gradient(180deg,rgba(221,186,124,0.16),rgba(221,186,124,0.04))] text-gold">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="eyebrow-note">Address</p>
            <p className="mt-2 text-base leading-7 text-truffle">{event.address}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a href={event.mapUrl} target="_blank" rel="noreferrer" className="button-primary">
          Open Google Maps
        </a>
        <p className="max-w-xs text-sm leading-7 text-[#796962]">
          Kindly arrive a little earlier so every moment can begin in ease and grace.
        </p>
      </div>
    </div>
  );
}

export function EventsSection({ events }: EventsSectionProps) {
  return (
    <section id="events" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            kicker="Wedding Event"
            title="Join us for the sacred vows and joyful celebration."
            description="We would be honored by your presence as we gather for a solemn ceremony and an evening reception shaped by warmth and joy."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {events.map((event, index) => (
            <Reveal key={event.title} delay={index * 90}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
