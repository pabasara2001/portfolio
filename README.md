# R.K. Pabasara Wanamalee — Portfolio

A premium, fully data-driven personal portfolio built with Next.js 15 (App Router), React 19,
TypeScript, and Tailwind CSS v4. No database, no backend — every section renders from typed
local data files, so the whole site works offline once dependencies are installed.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first theme, see `app/globals.css`)
- Framer Motion for animation
- lucide-react for icons
- next-themes for dark / light / system theme switching
- next/font (Space Grotesk, Inter, JetBrains Mono) + next/image

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm run start   # serve the production build locally
```

## Editing content

Every section reads from a plain TypeScript file in `/data`. Change the content there — no
component code needs to change:

| File | Powers |
| --- | --- |
| `data/profile.ts` | Name, bio, objective, highlights, hero tagline words |
| `data/socials.ts` | Social icons in the navbar, hero, footer, and contact page |
| `data/skills.ts` | Skills page + homepage skills preview |
| `data/projects.ts` | Projects page + homepage featured projects |
| `data/education.ts` | Education timeline |
| `data/experience.ts` | Experience timeline |
| `data/certificates.ts` | Certificates grid |
| `data/contact.ts` | Contact page details |
| `data/statistics.ts` | Homepage stats counter strip |

To add a project, copy an existing object in `data/projects.ts` and give it a unique `id` and
`slug`. To add a skill category, follow the shape in `data/skills.ts`. TypeScript will flag
anything that doesn't match the interfaces in `types/index.ts`.

### Real photo / resume

- Swap `public/images/avatar-placeholder.svg` for a real photo (update the `src` in
  `components/avatar-placeholder.tsx`) whenever one is available.
- Drop your CV at `public/resume/pabasara-wanamalee-cv.pdf` — the "Download CV" button already
  points at that path via `data/profile.ts` → `resumeUrl`.

## Design system

Colors, fonts, and radii are defined as CSS variables in `app/globals.css` under `@theme`. The
palette is a deep navy/teal pairing (`--color-accent: #00c2a8`, amber `#ffb020` as a secondary
accent) chosen to nod at both clinical/health-monitor UI and developer tooling — the recurring
"pulse line" motif (`components/motion/pulse-line.tsx`) is an ECG trace that resolves into a
code bracket, tying the Health ICT background to the software engineering focus.

## Deployment

The project is zero-config for both:

- **Vercel** — import the repo, framework preset "Next.js", no environment variables required.
- **Netlify** — use the official Next.js Runtime (`@netlify/plugin-nextjs`), build command
  `npm run build`, publish directory left as default.

## Accessibility & performance notes

- Semantic landmarks, a "Skip to content" link, and visible focus rings throughout.
- `prefers-reduced-motion` is respected globally in `app/globals.css`.
- Server Components are used by default for every page; only interactive pieces (nav, theme
  toggle, animations, the contact form) are marked `"use client"`.
