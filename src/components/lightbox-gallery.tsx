"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import type { GalleryItem } from "@/data/invitation";

type LightboxGalleryProps = {
  items: GalleryItem[];
};

const spanClasses: Record<GalleryItem["span"], string> = {
  portrait: "md:row-span-2",
  landscape: "md:col-span-2",
  square: ""
};

export function LightboxGallery({ items }: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeItem = useMemo(
    () => (activeIndex === null ? null : items[activeIndex]),
    [activeIndex, items]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % items.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? 0 : (current - 1 + items.length) % items.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, items.length]);

  const goNext = () => {
    setActiveIndex((current) => (current === null ? 0 : (current + 1) % items.length));
  };

  const goPrevious = () => {
    setActiveIndex((current) => (current === null ? 0 : (current - 1 + items.length) % items.length));
  };

  return (
    <>
      <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-[1.75rem] ${spanClasses[item.span]} cursor-pointer text-left shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(44,33,30,0.78)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-display text-2xl text-white">{item.caption}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.28em] text-white/75">Tap to open</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-50 bg-[#1d1513]/85 p-4 backdrop-blur-sm">
          <div className="mx-auto flex h-full max-w-6xl items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrevious}
              className="hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:inline-flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/10">
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[4/5] w-full md:aspect-[16/10]">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-6 py-5 text-white">
                <div>
                  <p className="font-display text-2xl">{activeItem.caption}</p>
                  <p className="mt-1 text-sm text-white/75">{activeItem.alt}</p>
                </div>
                <div className="flex gap-2 md:hidden">
                  <button
                    type="button"
                    onClick={goPrevious}
                    className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              className="hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:inline-flex"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
