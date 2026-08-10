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
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <SectionHeading
              kicker="Photo Gallery"
              title="Moments held in soft light."
              description="A curated sequence of portraits and details, arranged like pages from an editorial keepsake."
            />
            {/* <div className="rounded-[1.8rem] border border-white/80 bg-white/[0.74] px-6 py-5 shadow-card backdrop-blur-md">
              <p className="eyebrow-note">A keepsake in six frames</p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-[#70615b]">
                Each image is placed like a printed spread: intimate, spacious, and quietly romantic.
                Tap any frame to open the full lightbox gallery.
              </p>
            </div> */}
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <LightboxGallery items={items} />
        </Reveal>
      </div>
    </section>
  );
}
