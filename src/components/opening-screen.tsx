"use client";

import Image from "next/image";
import { Music2, Pause, Volume2 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type OpeningScreenProps = {
  names: string;
  dateLabel: string;
  venue: string;
  quote: string;
  music: {
    src: string;
    autoplayOnOpen: boolean;
  };
};

export function OpeningScreen({
  names,
  dateLabel,
  venue,
  quote,
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
        className={`fixed inset-0 z-50 overflow-hidden bg-[#302522] text-white transition-all duration-700 ${
          opened ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src="/hero-bg.svg"
          alt="Romantic floral background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,29,28,0.58),rgba(41,29,28,0.66))]" />
        <div className="relative flex min-h-screen items-center justify-center px-6 py-12">
          <div className="surface-card w-full max-w-xl border-white/30 bg-white/10 px-8 py-12 text-center text-white backdrop-blur-lg sm:px-12">
            <span className="mb-6 inline-block rounded-full border border-white/30 px-4 py-2 text-[0.72rem] uppercase tracking-[0.35em] text-white/85">
              Wedding Invitation
            </span>
            <p className="text-sm uppercase tracking-[0.4em] text-white/75">Together With Our Families</p>
            <h1 className="mt-5 text-5xl leading-none sm:text-7xl">{names}</h1>
            <p className="mt-5 text-base leading-8 text-white/80 sm:text-lg">{quote}</p>
            <div className="mt-8 space-y-2 text-sm uppercase tracking-[0.3em] text-white/85 sm:text-base">
              <p>{dateLabel}</p>
              <p>{venue}</p>
            </div>
            <button onClick={openInvitation} className="button-primary mt-10">
              Open Invitation
            </button>
          </div>
        </div>
      </div>

      {opened && canShowMusic ? (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
          {!audioAvailable ? (
            <div className="hidden rounded-full border border-white/80 bg-white/75 px-4 py-3 text-sm text-[#6f615b] shadow-card backdrop-blur-md md:inline-flex">
              Music file could not be loaded from `{music.src}`
            </div>
          ) : null}
          <button
            type="button"
            onClick={toggleAudio}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-3 text-sm font-semibold text-truffle shadow-card backdrop-blur-md transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            {playing ? "Pause Music" : "Play Music"}
          </button>
        </div>
      ) : opened ? (
        <div className="fixed bottom-5 right-5 z-40 hidden rounded-full border border-white/80 bg-white/75 px-4 py-3 text-sm text-[#6f615b] shadow-card backdrop-blur-md md:inline-flex">
          <Music2 className="mr-2 h-4 w-4" />
          Set `music.src` in invitation data to enable music
        </div>
      ) : null}
    </>
  );
}
