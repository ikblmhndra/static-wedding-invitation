"use client";

import { Music2, Pause, Volume2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

import type { ArtDirectedImageAsset } from "@/data/invitation";

import { ArtDirectedImage } from "@/components/art-directed-image";
import { GuestNameCard } from "@/components/guest-name-card";

type OpeningScreenProps = {
  label: string;
  names: string;
  dateLabel: string;
  venue: string;
  quote: string;
  image: ArtDirectedImageAsset;
  detailImage: ArtDirectedImageAsset;
  music: {
    src: string;
    autoplayOnOpen: boolean;
  };
};

export function OpeningScreen({
  label,
  names,
  dateLabel,
  venue,
  quote,
  image,
  detailImage,
  music
}: OpeningScreenProps) {
  const [opened, setOpened] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const canShowMusic = useMemo(() => Boolean(music.src?.trim()), [music.src]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mounted, opened]);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        setPlaying(true);
        return;
      }

      audio.pause();
      setPlaying(false);
    } catch {
      setPlaying(false);
    }
  };

  const openInvitation = async () => {
    setOpened(true);
    if (canShowMusic && music.autoplayOnOpen) {
      try {
        await audioRef.current?.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };

  return (
    <>
      {canShowMusic ? (
        <audio
          ref={audioRef}
          loop
          preload="metadata"
          onCanPlay={() => setAudioAvailable(true)}
          onError={() => setAudioAvailable(false)}
        >
          <source src={music.src} />
        </audio>
      ) : null}

      <div
        aria-hidden={opened}
        className={`fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-[#221816] text-white transition-all duration-700 ${
          opened ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <ArtDirectedImage image={image} priority sizes="100vw" className="scale-[1.02]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,18,17,0.14),rgba(32,18,17,0.88))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,241,235,0.18),transparent_34%),linear-gradient(90deg,rgba(34,19,18,0.62),rgba(34,19,18,0.12),rgba(34,19,18,0.72))]" />
        <div className="absolute inset-x-[8%] top-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />
        <div className="relative flex min-h-[100svh] items-start px-6 py-8 sm:min-h-screen sm:items-center sm:px-10 sm:py-10 lg:px-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="script-accent text-white/[0.9]">For the love we have found</p>
              <div className="editorial-shell mt-5 border-white/15 bg-white/[0.12] px-8 py-10 text-white backdrop-blur-2xl sm:px-10 sm:py-12">
                <div className="flex items-center gap-4">
                  <span className="h-px w-12 bg-gradient-to-r from-white/0 via-white/70 to-white/0" />
                  <div className="eyebrow-note text-white/[0.68]">{label}</div>
                </div>
                <GuestNameCard
                  label="Dear"
                  className="mt-6 inline-flex max-w-full flex-col rounded-[1.5rem] border border-white/20 bg-black/10 px-5 py-4 backdrop-blur-sm"
                  labelClassName="eyebrow-note text-white/[0.62]"
                  nameClassName="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl"
                />
                <h1 className="mt-6 text-5xl leading-[0.88] sm:text-7xl lg:text-[5.4rem]">{names}</h1>
                <div className="editorial-divider mt-7 bg-gradient-to-r from-white/0 via-white/[0.75] to-white/0" />
                <p className="mt-7 max-w-xl text-base leading-8 text-white/[0.8] sm:text-lg">{quote}</p>
                <div className="mt-8 grid gap-4 border-t border-white/[0.14] pt-6 text-sm uppercase tracking-[0.26em] text-white/[0.72] sm:grid-cols-2">
                  <p className="leading-6">{dateLabel}</p>
                  <p className="leading-6">{venue}</p>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <button onClick={openInvitation} className="button-primary min-w-[210px]">
                    Open Invitation
                  </button>
                  <p className="max-w-xs text-sm leading-7 text-white/[0.66]">
                    A formal invitation to witness a day composed in tenderness, family, and grace.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden justify-self-end lg:block">
              <div className="space-y-5">
                <div className="rounded-[2rem] border border-white/20 bg-white/[0.08] p-4 backdrop-blur-md">
                  <div className="photo-frame aspect-[4/5] w-[21rem] border-white/[0.2] bg-white/[0.08] shadow-soft">
                    <ArtDirectedImage image={detailImage} sizes="21rem" className="scale-[1.01]" />
                    <div className="photo-tint absolute inset-0" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="eyebrow-note text-white/[0.68]">An Evening of Grace</p>
                      <p className="mt-3 font-display text-3xl leading-tight text-white">
                        An editorial keepsake of a day held in warmth and devotion.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="ml-auto max-w-[17rem] rounded-[1.8rem] border border-white/15 bg-black/10 px-6 py-5 backdrop-blur-md">
                  <p className="eyebrow-note text-white/[0.62]">A timeless celebration</p>
                  <p className="mt-3 font-display text-[1.9rem] leading-tight text-white">
                    Soft florals, warm vows, and a night shaped by quiet romance.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {opened && canShowMusic ? (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
          {!audioAvailable ? (
            <div className="hidden rounded-full border border-white/80 bg-white/75 px-4 py-3 text-sm text-[#6f615b] shadow-card backdrop-blur-md md:inline-flex">
              Music file could not be loaded from {music.src}
            </div>
          ) : null}
          <button
            type="button"
            onClick={toggleAudio}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/90 bg-white/[0.86] px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-truffle shadow-card backdrop-blur-md transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 sm:text-sm"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            {playing ? "Pause Music" : "Play Music"}
          </button>
        </div>
      ) : opened ? (
        <div className="fixed bottom-5 right-5 z-40 hidden rounded-full border border-white/80 bg-white/75 px-4 py-3 text-xs uppercase tracking-[0.22em] text-[#6f615b] shadow-card backdrop-blur-md md:inline-flex">
          <Music2 className="mr-2 h-4 w-4" />
          Set `music.src` in invitation data to enable music
        </div>
      ) : null}
    </>
  );
}
