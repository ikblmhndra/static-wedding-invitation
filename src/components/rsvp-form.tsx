"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useEffect, useRef, useState } from "react";

import { useGuestName } from "@/components/guest-name-card";
import { getSupabase } from "@/lib/supabase";

export function RsvpForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [messagePreview, setMessagePreview] = useState("");
  const guestName = useGuestName();
  const guestNameInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!guestNameInputRef.current || !guestName || guestNameInputRef.current.value.trim()) {
      return;
    }

    guestNameInputRef.current.value = guestName;
  }, [guestName]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const guestNameValue = String(formData.get("guestName") ?? "").trim();
    const attendance = String(formData.get("attendance") ?? "");
    const guestCount = Number(formData.get("guestCount"));
    const message = String(formData.get("message") ?? "").trim();

    try {
      const { error } = await getSupabase().from("rsvps").insert({
        guest_name: guestNameValue,
        attendance,
        guest_count: guestCount,
        message: message || null
      });

      if (error) {
        setSubmitError("We could not send your RSVP. Please try again.");
        setIsSubmitting(false);
        return;
      }

      router.push("/thank-you/");
    } catch {
      setSubmitError("We could not send your RSVP. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      {guestName ? (
        <div className="rounded-[1.5rem] border border-gold/15 bg-[linear-gradient(180deg,rgba(221,186,124,0.12),rgba(221,186,124,0.04))] px-4 py-4">
          <p className="eyebrow-note">Invitation addressed to</p>
          <p className="mt-2 font-display text-2xl text-truffle">{guestName}</p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-truffle">
          Guest name
          <input
            required
            ref={guestNameInputRef}
            id="guest-name"
            name="guestName"
            autoComplete="name"
            className="rounded-2xl border border-[#e5d6c8] bg-white px-4 py-3 text-base text-truffle outline-none transition-colors duration-200 focus:border-gold focus:ring-2 focus:ring-gold/30"
            placeholder="Your full name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-truffle">
          Attendance confirmation
          <select
            required
            id="attendance"
            name="attendance"
            defaultValue=""
            className="rounded-2xl border border-[#e5d6c8] bg-white px-4 py-3 text-base text-truffle outline-none transition-colors duration-200 focus:border-gold focus:ring-2 focus:ring-gold/30"
          >
            <option value="" disabled>
              Please choose
            </option>
            <option value="Attending">Attending</option>
            <option value="Not attending">Not attending</option>
          </select>
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-[0.8fr_1.2fr]">
        <label className="grid gap-2 text-sm font-medium text-truffle">
          Number of guests
          <input
            required
            id="guest-count"
            name="guestCount"
            type="number"
            min={1}
            max={10}
            defaultValue={1}
            className="rounded-2xl border border-[#e5d6c8] bg-white px-4 py-3 text-base text-truffle outline-none transition-colors duration-200 focus:border-gold focus:ring-2 focus:ring-gold/30"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-truffle">
          Message or wishes
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Leave a heartfelt note for the couple"
            className="rounded-2xl border border-[#e5d6c8] bg-white px-4 py-3 text-base text-truffle outline-none transition-colors duration-200 focus:border-gold focus:ring-2 focus:ring-gold/30"
            onChange={(event) => setMessagePreview(event.target.value)}
          />
        </label>
      </div>

      {messagePreview ? (
        <div className="rounded-[1.5rem] border border-[#e5d6c8] bg-[#f8f1e9] px-5 py-4 text-sm leading-7 text-[#776862]">
          <p className="font-medium text-truffle">Preview of your note:</p>
          <p className="mt-2 whitespace-pre-wrap">{messagePreview}</p>
        </div>
      ) : null}

      {submitError ? (
        <div className="rounded-[1.5rem] border border-[#e5b8b8] bg-[#fdf3f3] px-5 py-4 text-sm leading-7 text-[#8a4a4a]">
          {submitError}
        </div>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-[#ead8cd] pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-[#776862]">
          Your response helps us prepare every detail with care. After submitting, you will be
          redirected to a thank-you page.
        </p>
        <button type="submit" className="button-primary min-w-[180px]" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send RSVP"}
        </button>
      </div>
    </form>
  );
}
