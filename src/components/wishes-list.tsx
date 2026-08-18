"use client";

import { useEffect, useState } from "react";

import { formatShortDate } from "@/lib/format";
import { getSupabase, type RsvpWish } from "@/lib/supabase";

export function WishesList() {
  const [wishes, setWishes] = useState<RsvpWish[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadWishes() {
      try {
        const { data, error } = await getSupabase()
          .from("rsvps")
          .select("guest_name, message, created_at")
          .not("message", "is", null)
          .neq("message", "")
          .order("created_at", { ascending: false });

        if (cancelled) {
          return;
        }

        if (!error && data) {
          setWishes(data);
        }
      } catch {
        // Supabase is not configured yet.
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    void loadWishes();

    return () => {
      cancelled = true;
    };
  }, []);

  if (isLoading) {
    return (
      <div className="border-t border-[#ead8cd] pt-6">
        <p className="text-sm leading-7 text-[#776862]">Loading messages...</p>
      </div>
    );
  }

  if (wishes.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-[#ead8cd] pt-6">
      <p className="font-medium text-truffle">Messages from our guests</p>
      <ul className="mt-4 grid gap-4">
        {wishes.map((wish) => (
          <li
            key={`${wish.created_at}-${wish.guest_name}`}
            className="rounded-[1.5rem] border border-[#e5d6c8] bg-[#f8f1e9] px-5 py-4 text-sm leading-7 text-[#776862]"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-medium text-truffle">{wish.guest_name}</p>
              <p className="text-xs uppercase tracking-[0.12em] text-[#9a877f]">
                {formatShortDate(wish.created_at)}
              </p>
            </div>
            <p className="mt-2 whitespace-pre-wrap">{wish.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
