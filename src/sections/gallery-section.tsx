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
            description="A romantic collection of scenes stored locally in the project for fast loading, easy replacement, and graceful presentation on every device."
          />
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <LightboxGallery items={items} />
        </Reveal>
      </div>
    </section>
  );
}
