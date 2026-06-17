"use client";

import { useState } from "react";

export function RsvpForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form
      name="wedding-rsvp"
      method="POST"
      action="/thank-you/"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={() => setIsSubmitting(true)}
      className="grid gap-5"
    >
      {/*
        RSVP implementation options:
        A. Default: Netlify Forms
           Keep data-netlify, form-name, and action="/thank-you/".

        B. Google Forms
           Replace action with your Google Forms endpoint and rename the fields to entry.<id>.

        C. Email via serverless function
           Replace action with /api/rsvp or /.netlify/functions/rsvp-email and handle email delivery there.
      */}
      <input type="hidden" name="form-name" value="wedding-rsvp" />
      <p className="hidden">
        <label htmlFor="bot-field">
          Do not fill this out if you are human:
          <input id="bot-field" name="bot-field" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-truffle">
          Guest name
          <input
            required
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
          />
        </label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
