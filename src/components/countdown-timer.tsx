"use client";

import { useEffect, useMemo, useState } from "react";

type CountdownTimerProps = {
  targetDate: string;
};

type CountdownPart = {
  label: string;
  value: string;
};

type RemainingState = {
  expired: boolean;
  parts: CountdownPart[];
};

function createPlaceholderRemaining(): RemainingState {
  return {
    expired: false,
    parts: [
      { label: "Days", value: "00" },
      { label: "Hours", value: "00" },
      { label: "Minutes", value: "00" },
      { label: "Seconds", value: "00" }
    ]
  };
}

function getRemaining(targetDate: string): RemainingState {
  const distance = new Date(targetDate).getTime() - Date.now();

  if (distance <= 0) {
    return {
      expired: true,
      parts: [
        { label: "Days", value: "00" },
        { label: "Hours", value: "00" },
        { label: "Minutes", value: "00" },
        { label: "Seconds", value: "00" }
      ] satisfies CountdownPart[]
    };
  }

  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    expired: false,
    parts: [
      { label: "Days", value: String(days).padStart(2, "0") },
      { label: "Hours", value: String(hours).padStart(2, "0") },
      { label: "Minutes", value: String(minutes).padStart(2, "0") },
      { label: "Seconds", value: String(seconds).padStart(2, "0") }
    ] satisfies CountdownPart[]
  };
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [remaining, setRemaining] = useState<RemainingState>(() => createPlaceholderRemaining());

  useEffect(() => {
    setRemaining(getRemaining(targetDate));

    const interval = window.setInterval(() => {
      setRemaining(getRemaining(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const status = useMemo(
    () => (remaining.expired ? "The celebration has begun." : "Counting down to our most beautiful day."),
    [remaining.expired]
  );

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {remaining.parts.map((part) => (
          <div
            key={part.label}
            className="secondary-card rounded-[1.75rem] bg-white/90 px-5 py-7 text-center"
          >
            <div className="text-4xl font-display text-truffle sm:text-5xl">{part.value}</div>
            <div className="mt-3 text-[0.68rem] uppercase tracking-[0.32em] text-gold">
              {part.label}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs uppercase tracking-[0.32em] text-[#7b6d66]">{status}</p>
    </div>
  );
}
