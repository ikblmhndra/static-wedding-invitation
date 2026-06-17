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
        className={`fixed inset-0 z-50 overflow-hidden bg-[#221816] text-white transition-all duration-700 ${
          opened ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <ArtDirectedImage image={image} priority sizes="100vw" className="scale-[1.02]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,16,14,0.22),rgba(24,16,14,0.82))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,246,239,0.12),transparent_34%),linear-gradient(90deg,rgba(28,18,16,0.52),rgba(28,18,16,0.08),rgba(28,18,16,0.62))]" />
        <div className="relative flex min-h-screen items-center px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="script-accent text-white/[0.86]">For the love we have found</p>
              <div className="editorial-shell mt-5 border-white/20 bg-white/10 px-8 py-10 text-white backdrop-blur-2xl sm:px-10 sm:py-12">
                <div className="eyebrow-note text-white/[0.65]">{label}</div>
                <GuestNameCard
                  label="Dear"
                  className="mt-5 inline-flex max-w-full flex-col rounded-[1.5rem] border border-white/15 bg-black/10 px-5 py-4 backdrop-blur-sm"
                  labelClassName="eyebrow-note text-white/[0.62]"
                  nameClassName="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl"
                />
                <h1 className="mt-5 text-5xl leading-[0.92] sm:text-7xl">{names}</h1>
                <div className="editorial-divider mt-6 bg-gradient-to-r from-white/10 via-white/[0.65] to-white/10" />
                <p className="mt-6 max-w-xl text-base leading-8 text-white/[0.78] sm:text-lg">{quote}</p>
                <div className="mt-8 grid gap-4 border-t border-white/[0.15] pt-6 text-sm uppercase tracking-[0.26em] text-white/[0.72] sm:grid-cols-2">
                  <p>{dateLabel}</p>
                  <p>{venue}</p>
                </div>
                <button onClick={openInvitation} className="button-primary mt-9">
                  Open Invitation
                </button>
              </div>
            </div>

            <div className="hidden justify-self-end lg:block">
              <div className="photo-frame aspect-[4/5] w-[21rem] border-white/[0.25] bg-white/[0.08] shadow-soft">
                <ArtDirectedImage image={detailImage} sizes="21rem" className="scale-[1.01]" />
                <div className="photo-tint absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow-note text-white/[0.65]">An Evening of Grace</p>
                  <p className="mt-3 font-display text-3xl leading-tight text-white">
                    An editorial keepsake of a day held in warmth and devotion.
                  </p>
                </div>
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
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/90 bg-white/[0.82] px-4 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-truffle shadow-card backdrop-blur-md transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 sm:text-sm"
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
