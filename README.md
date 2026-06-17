# Romantic Wedding Invitation

Static-first wedding invitation website built with Next.js App Router and Tailwind CSS. This project is designed to deploy cleanly to Vercel or Netlify without a database, while still supporting a premium photo-led design, personalized guest links, optional music, and RSVP collection.

## Features

- Static Site Generation with `output: "export"`
- Elegant editorial-style wedding layout with soft motion
- Opening cover with optional music after user interaction
- Personalized guest name via `?to=Guest%20Name`
- Bride and groom profiles, timeline, event details, countdown, and gallery
- Local image assets in `public/` with lightbox gallery
- RSVP form using Netlify Forms by default
- Optional gift section with copy-to-clipboard support

## Tech Stack

- Next.js App Router
- React 19
- Tailwind CSS
- Static export compatible with Vercel and Netlify

## Project Structure

```text
.
├── netlify.toml
├── next.config.ts
├── public
│   ├── couple/
│   ├── gallery/
│   ├── gift/
│   └── music/
├── src
│   ├── app/
│   ├── components/
│   ├── data/invitation.ts
│   ├── lib/
│   └── sections/
└── README.md
```

Key files:

- `src/data/invitation.ts` central content and asset paths
- `src/components/rsvp-form.tsx` visible RSVP form
- `src/components/netlify-form-registration.tsx` hidden static form required by Netlify Forms
- `src/lib/guest-name.ts` guest name parsing for `?to=`
- `next.config.ts` static export config

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

Production checks:

```bash
npm run lint
npm run build
```

The static export is generated into `out/`.

## Customize Content

Edit wedding copy, names, event details, gallery captions, gift info, and music path in `src/data/invitation.ts`.

Replace placeholder assets with your own files in:

- `public/couple`
- `public/gallery`
- `public/gift`
- `public/music`

If you change filenames, update the paths in `src/data/invitation.ts`.

## Personalized Guest Links

This project supports guest personalization using a query parameter:

```text
https://your-domain.com/?to=Ikbal%20Mahendra
```

The guest name is shown on the opening screen, the hero section, and prefilled into the RSVP name field when available.

## Music Setup

Music only starts after user interaction to respect browser autoplay rules.

1. Put your audio file in `public/music/`
2. Set `music.src` in `src/data/invitation.ts`
3. Example: `"/music/instrumental.mp3"`

## RSVP Configuration

### Option A: Netlify Forms (default)

The default RSVP flow is database-free and works with Netlify Forms.

Important:

- Keep `data-netlify="true"` on the RSVP form
- Keep `name="wedding-rsvp"` and the hidden `form-name` input
- Do not remove `src/components/netlify-form-registration.tsx`

That hidden static form exists so Netlify can detect the form during build. Without it, submissions may not appear in the Netlify dashboard.

After deploying to Netlify:

1. Open the live site
2. Submit the RSVP form once
3. Check `Forms` in the Netlify dashboard

### Option B: Google Forms

Replace the form `action` and field `name` values in `src/components/rsvp-form.tsx` with your Google Form endpoint and `entry.<id>` field names.

### Option C: Serverless Email

Replace the form `action` with a serverless endpoint such as:

- `/.netlify/functions/rsvp-email`
- `/api/rsvp`

Then handle the payload with a provider like Resend.

## Deploy

### Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket
2. Import the project into Vercel
3. Use build command: `npm run build`
4. Deploy

### Netlify

1. Push the repository to GitHub, GitLab, or Bitbucket
2. Create a new Netlify site from the repo
3. Use build command: `npm run build`
4. Use publish directory: `out`
5. Deploy and test the RSVP form once

## Notes

- This repo is intentionally static-first and database-free by default
- `next.config.ts` uses `images.unoptimized = true` for static export compatibility
- Generated folders such as `.next/` and `out/` should not be edited manually
