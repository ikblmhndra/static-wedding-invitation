import type { GalleryItem } from "@/data/invitation";

import { LightboxGallery } from "@/components/lightbox-gallery";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

type GallerySectionProps = {
  items: GalleryItem[];
};

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <section id="gallery" className="section-shell">
      <div className="section-inner">
        <Reveal>
          <SectionHeading
            kicker="Photo Gallery"
            title="Moments held in soft light."
            description="A curated sequence of portraits and details, arranged like pages from an editorial keepsake."
          />
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <LightboxGallery items={items} />
        </Reveal>
      </div>
    </section>
  );
}
