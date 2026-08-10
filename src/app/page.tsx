import { Navigation } from "@/components/navigation";
import { NetlifyFormRegistration } from "@/components/netlify-form-registration";
import { OpeningScreen } from "@/components/opening-screen";
import { invitationData } from "@/data/invitation";
import { formatLongDate } from "@/lib/format";
import { ClosingSection } from "@/sections/closing-section";
import { CountdownSection } from "@/sections/countdown-section";
import { CoupleSection } from "@/sections/couple-section";
import { EventsSection } from "@/sections/events-section";
import { GallerySection } from "@/sections/gallery-section";
import { GiftSection } from "@/sections/gift-section";
import { HeroSection } from "@/sections/hero-section";
import { RsvpSection } from "@/sections/rsvp-section";
// import { StorySection } from "@/sections/story-section";

export default function HomePage() {
  const names = `${invitationData.bride.shortName} & ${invitationData.groom.shortName}`;
  const monogram = `${invitationData.bride.shortName.charAt(0)}${invitationData.groom.shortName.charAt(0)}`;
  const dateLabel = formatLongDate(invitationData.hero.dateTime);

  return (
    <>
      <NetlifyFormRegistration />
      <OpeningScreen
        label={invitationData.coupleLabel}
        names={names}
        dateLabel={dateLabel}
        venue={invitationData.hero.venue}
        quote={invitationData.hero.quote}
        image={invitationData.hero.image}
        detailImage={invitationData.hero.detailImage}
        music={invitationData.music}
      />
      <Navigation names={names} monogram={monogram} />
      <main>
        <HeroSection
          label={invitationData.coupleLabel}
          names={names}
          hero={invitationData.hero}
          bride={invitationData.bride}
          groom={invitationData.groom}
        />
        <CoupleSection bride={invitationData.bride} groom={invitationData.groom} />
        {/* <StorySection items={invitationData.story} /> */}
        <EventsSection events={invitationData.events} />
        <CountdownSection targetDate={invitationData.hero.dateTime} />
        <GallerySection items={invitationData.gallery} />
        <RsvpSection />
        {invitationData.gift.enabled ? (
          <GiftSection
            accounts={invitationData.gift.accounts}
            qrisImage={invitationData.gift.qrisImage}
          />
        ) : null}
        <ClosingSection names={names} message={invitationData.closingMessage} />
      </main>
    </>
  );
}
