import { CalendarDays, Clock3, MapPin } from "lucide-react";

import type { EventDetail } from "@/data/invitation";
import { formatLongDate, formatTime } from "@/lib/format";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type EventsSectionProps = {
  events: EventDetail[];
};

function EventCard({ event }: { event: EventDetail }) {
  return (
    <div className="surface-card h-full px-7 py-8 sm:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-gold">{event.title}</p>
      <h3 className="mt-3 text-3xl text-truffle">{event.location}</h3>

      <div className="mt-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
            <CalendarDays className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#786862]">Date</p>
            <p className="mt-1 text-base text-truffle">{formatLongDate(event.dateTime)}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
            <Clock3 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#786862]">Time</p>
            <p className="mt-1 text-base text-truffle">{formatTime(event.dateTime)} WIB</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold">
            <MapPin className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#786862]">Address</p>
            <p className="mt-1 text-base leading-7 text-truffle">{event.address}</p>
          </div>
        </div>
      </div>

      <a href={event.mapUrl} target="_blank" rel="noreferrer" className="button-primary mt-8">
        Open Google Maps
      </a>
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
            description="We would be honored by your presence as we gather for both the solemn ceremony and the evening reception."
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
