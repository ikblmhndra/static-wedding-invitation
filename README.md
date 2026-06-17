# Romantic Wedding Invitation

Static-first wedding invitation website built with Next.js App Router and Tailwind CSS. The project is designed for easy deployment to Vercel or Netlify without any database.

## Features

- Static Site Generation with `output: "export"`
- Elegant wedding-focused design system with soft animations
- Opening cover screen with optional music support after user interaction
- Bride and groom profile cards
- Love story timeline
- Event details with Google Maps links
- Live countdown timer
- Local gallery in `public/gallery` with lightbox
- RSVP form using Netlify Forms by default
- Optional gift section with copy-to-clipboard buttons

## Project Structure

```text
.
├── netlify.toml
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public
│   ├── couple
│   │   ├── bride-portrait.svg
│   │   └── groom-portrait.svg
│   ├── gallery
│   │   ├── gallery-1.svg
│   │   ├── gallery-2.svg
│   │   ├── gallery-3.svg
│   │   ├── gallery-4.svg
│   │   ├── gallery-5.svg
│   │   └── gallery-6.svg
│   ├── gift
│   │   └── qris-placeholder.svg
│   └── hero-bg.svg
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── thank-you
│   │       └── page.tsx
│   ├── components
│   │   ├── copy-button.tsx
│   │   ├── countdown-timer.tsx
│   │   ├── lightbox-gallery.tsx
│   │   ├── navigation.tsx
│   │   ├── opening-screen.tsx
│   │   ├── reveal.tsx
│   │   ├── rsvp-form.tsx
│   │   └── section-heading.tsx
│   ├── data
│   │   └── invitation.ts
│   ├── lib
│   │   └── format.ts
│   └── sections
│       ├── closing-section.tsx
│       ├── countdown-section.tsx
│       ├── couple-section.tsx
│       ├── events-section.tsx
│       ├── gallery-section.tsx
│       ├── gift-section.tsx
│       ├── hero-section.tsx
│       ├── rsvp-section.tsx
│       └── story-section.tsx
└── tailwind.config.ts
```

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the dev server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000`

4. Create a production build:

   ```bash
   npm run build
   ```

## Deploy To Vercel

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Import the repository into Vercel.
3. Keep the default build command: `npm run build`.
4. Vercel will detect Next.js automatically and deploy the static export.

CLI option:

```bash
npm install -g vercel
vercel
vercel --prod
```

## Deploy To Netlify

1. Push the project to a Git provider.
2. Create a new site in Netlify and connect the repository.
3. Netlify will use:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Deploy the site.

## RSVP Configuration

The default RSVP implementation is Netlify Forms and requires no database.

### Option A: Netlify Forms (default)

The form in [`src/components/rsvp-form.tsx`](/Users/IK1622/Documents/code-project/dimas-web/src/components/rsvp-form.tsx) already includes:

- `data-netlify="true"`
- `name="wedding-rsvp"`
- hidden `form-name` input
- honeypot field for spam protection

After the first production deployment:

1. Submit the form once on the live site.
2. Open the Netlify dashboard.
3. Go to `Forms` and confirm submissions are captured.

### Option B: Google Forms

1. Create a Google Form with matching fields.
2. Open the prefilled form and inspect the generated `entry.<number>` field names.
3. Replace the form `action` and input `name` attributes in [`src/components/rsvp-form.tsx`](/Users/IK1622/Documents/code-project/dimas-web/src/components/rsvp-form.tsx).
4. Keep the thank-you redirect or point the form to your own confirmation page.

### Option C: Email via serverless function

Use a serverless endpoint such as:

- `/.netlify/functions/rsvp-email`
- `/api/rsvp`

Then:

1. Create the function with Resend or another email service.
2. Add the provider API key as an environment variable in Netlify or Vercel.
3. Update the form `action` to the serverless endpoint and handle the payload there.

## Replacing Placeholder Assets

The site ships with romantic illustration-style placeholders so it runs immediately. To use real wedding media:

1. Replace `public/hero-bg.svg`
2. Replace `public/couple/bride-portrait.svg`
3. Replace `public/couple/groom-portrait.svg`
4. Replace gallery files inside `public/gallery`
5. Update paths in [`src/data/invitation.ts`](/Users/IK1622/Documents/code-project/dimas-web/src/data/invitation.ts) if filenames change

## Optional Music

If you want music to start after clicking `Open Invitation`:

1. Add a file such as `public/music/instrumental.mp3`
2. Set `music.enabled` to `true` in [`src/data/invitation.ts`](/Users/IK1622/Documents/code-project/dimas-web/src/data/invitation.ts)
3. Keep the file small for performance
