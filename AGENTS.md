# Repository Guidelines

## Project Structure & Module Organization
This repository is a static-first wedding invitation site built with Next.js App Router and Tailwind CSS. Application routes live in `src/app`, shared UI lives in `src/components`, page-sized sections live in `src/sections`, editable content lives in `src/data/invitation.ts`, and small helpers live in `src/lib`. Static assets such as couple photos, gallery images, gift QRIS, and music belong in `public/`. Generated output in `.next/` and `out/` should not be edited manually.

## Build, Test, and Development Commands
- `npm install` — install project dependencies.
- `npm run dev` — start the local Next.js dev server.
- `npm run build` — create the production build and static export.
- `npm run lint` — run the configured Next.js ESLint checks.

Use `npm run build` before shipping changes to catch type, route, and export issues.

## Coding Style & Naming Conventions
Use TypeScript with strict typing and functional React components. Follow the existing style: 2-space indentation, double quotes, semicolons, and small focused components. Component names use `PascalCase`; filenames use kebab-case, for example `opening-screen.tsx` and `gift-section.tsx`. Keep wedding content centralized in `src/data/invitation.ts` instead of hardcoding copy inside components.

Tailwind utilities are the default styling approach. Reuse shared classes from `src/app/globals.css` before adding new one-off patterns.

## Testing Guidelines
There is no dedicated automated test suite yet. Minimum validation for every change:
- `npm run lint`
- `npm run build`
- manual smoke test in the browser for the affected flow

For UI updates, verify responsive layout, section anchors, gallery behavior, RSVP submission flow, and optional audio playback if touched.

## Commit & Pull Request Guidelines
Current history shows a simple pattern: short initial commit plus longer descriptive commit messages. Prefer clear, imperative subjects such as `Refactor opening screen audio handling` or `Add RSVP success page`. Keep one logical change per commit when possible.

PRs should include:
- a short summary of what changed
- notes on any content/config updates
- screenshots or a short video for visual changes
- confirmation that `npm run lint` and `npm run build` passed

## Deployment & Configuration Notes
This project is designed for Vercel or Netlify and must remain database-free by default. Keep asset paths rooted at `public/`, preserve static export compatibility in `next.config.ts`, and document any RSVP or music configuration changes in `README.md`.
