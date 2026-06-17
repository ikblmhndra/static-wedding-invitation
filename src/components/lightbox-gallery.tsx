"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

import type { GalleryItem } from "@/data/invitation";

import { ArtDirectedImage } from "@/components/art-directed-image";

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
  const [mounted, setMounted] = useState(false);
  const activeLabel = String((activeIndex ?? 0) + 1).padStart(2, "0");

  const activeItem = useMemo(
    () => (activeIndex === null ? null : items[activeIndex]),
    [activeIndex, items]
  );
  const activeWidth = activeItem?.lightbox?.width ?? activeItem?.width ?? 1;
  const activeHeight = activeItem?.lightbox?.height ?? activeItem?.height ?? 1;
  const activeOrientation = activeHeight > activeWidth ? "portrait" : "landscape";

  useEffect(() => {
    setMounted(true);
  }, []);

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

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex]);

  const goNext = () => {
    setActiveIndex((current) => (current === null ? 0 : (current + 1) % items.length));
  };

  const goPrevious = () => {
    setActiveIndex((current) => (current === null ? 0 : (current - 1 + items.length) % items.length));
  };

  return (
    <>
      <div className="grid auto-rows-[250px] gap-4 md:grid-cols-3 md:auto-rows-[200px]">
        {items.map((item, index) => (
          <button
            key={item.image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/70 ${spanClasses[item.span]} cursor-pointer text-left shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50`}
          >
            <ArtDirectedImage
              image={item.image}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 33vw"
              className="transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,27,24,0.02)_10%,rgba(38,27,24,0.82)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="eyebrow-note text-white/[0.65]">
                {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
              <p className="mt-3 font-display text-2xl text-white">{item.caption}</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-white/[0.76]">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem && mounted
        ? createPortal(
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1d1513]/92 p-4 backdrop-blur-md">
          <div className="mx-auto flex min-h-full max-w-6xl items-center justify-center gap-3 py-4">
            <button
              type="button"
              onClick={goPrevious}
              className="hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 md:inline-flex"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div
              className={`relative w-full overflow-hidden rounded-[2.2rem] border border-white/20 bg-white/10 shadow-soft ${
                activeOrientation === "portrait" ? "max-w-3xl" : "max-w-5xl"
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Close gallery"
              >
                <X className="h-5 w-5" />
              </button>

              <div
                className={`relative w-full bg-[#120d0c]/45 ${
                  activeOrientation === "portrait"
                    ? "h-[min(72vh,820px)] min-h-[420px]"
                    : "h-[min(64vh,720px)] min-h-[300px]"
                }`}
              >
                <ArtDirectedImage
                  image={activeItem.image}
                  sizes={activeOrientation === "portrait" ? "(max-width: 768px) 92vw, 42rem" : "90vw"}
                  priority
                  objectFit="contain"
                  objectPosition="center center"
                />
              </div>

              <div className="flex flex-col gap-5 px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="eyebrow-note text-white/[0.65]">
                    {activeLabel} / {String(items.length).padStart(2, "0")}
                  </p>
                  <p className="font-display text-2xl">{activeItem.caption}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-white/[0.75]">
                    {activeItem.description}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2 md:hidden">
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
          ,
          document.body
        )
        : null}
    </>
  );
}
