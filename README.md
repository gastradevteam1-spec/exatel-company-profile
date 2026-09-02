# Exatel Company Profile — Next.js site

Rebuild of the Exatel (PT. Elemen Jaringan Nusantara) company profile PDF as
a proper Next.js app, using the stack you asked for:

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling, with a small brand token system in
  `tailwind.config.ts`
- **Framer Motion** for the hero's animated fiber lines and the
  scroll-triggered network diagram draw-on
- **React Leaflet** for the interactive coverage map (implemented with
  Leaflet directly via a ref-managed effect — see the Coverage map note
  below for why)
- Content and coverage data are pulled out into `/data`, separate from the
  components, so they're easy to hand off to non-developers or a CMS later

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edit any file under `app/` or `components/` and
the page hot-reloads.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## Project structure

```
app/
  layout.tsx        root layout — fonts (next/font/google) + metadata
  page.tsx           assembles all sections in order
  globals.css        Tailwind directives + base styles
components/
  Hero.tsx            animated hero (Framer Motion)
  NetworkDiagram.tsx   SVG topology diagram, draws on scroll into view
  CoverageMap.tsx      React Leaflet map (client-only, dynamically imported)
  Coverage.tsx         coverage section wrapper (map + region list)
  ...                  one component per PDF section
  ui/                  small shared pieces (SectionHeading, FeatureList)
data/
  content.ts          all page copy — the editable source of truth
  coverage.ts          coverage regions, cities, and map coordinates
```

## Editing content without touching components

Every section reads its copy from `data/content.ts` and `data/coverage.ts`.
To change a paragraph, a feature list, a partner name, or a coverage city,
edit those two files — no component code needs to change. That's the seam
to swap for a real CMS later (see below).

## Wiring up a CMS

If Exatel staff need to update services or coverage themselves without a
developer, the cleanest path is to replace the static imports in
`data/content.ts` / `data/coverage.ts` with fetches from a headless CMS
(Sanity, Contentful, Payload, or a simple Next.js API route backed by a
database), typed against the same interfaces already used here
(`CoverageRegion`, etc.). Because every component already consumes these
data shapes rather than hardcoded strings, that swap is isolated to the
`data/` layer — components don't need to change.

For a lighter-weight option, a small `app/api/*` route reading from a
database (Postgres via Prisma, or even a JSON file in blob storage) works
fine for a profile site this size and avoids a third-party CMS bill.

## Coverage map

`CoverageMap.tsx` manages a Leaflet map imperatively with a plain `useRef` +
`useEffect` (rather than `react-leaflet`'s `<MapContainer>`), because
`MapContainer` doesn't reliably survive React's dev-mode Strict Mode double
effect invocation — it can throw `Map container is already initialized` on
newer React/Next versions. Managing the map ourselves gives us a direct
guard against that and guarantees `map.remove()` runs on unmount.

It uses OpenStreetMap tiles (no API key required) and plots one marker per
region group from `data/coverage.ts`, colored by status (`available` vs
`coming-soon`). The coordinates in that file are approximate — swap in
exact PoP/city coordinates from network ops when available. If you'd
rather use Mapbox for nicer tiles/styling, swap the `L.tileLayer(...)` URL
in `CoverageMap.tsx` for a Mapbox raster/vector tile endpoint (requires a
Mapbox token in `.env.local`).

## Optional: a 3D hero with Three.js

The brief mentioned Three.js as an optional upgrade for a premium hero. It
isn't wired in by default (it's a meaningfully heavier dependency and
render cost for what's currently a lightweight animated-SVG hero), but if
you want it: install `three` and `@react-three/fiber`, create a client
component (e.g. `components/HeroScene.tsx`) rendering a `<Canvas>` with a
particle/line-based fiber network, and swap it in for the `<svg>` block in
`Hero.tsx`. Keep it lazy-loaded via `next/dynamic` with `ssr: false`, same
pattern as `CoverageMap.tsx`.

## Deployment

Built for **Vercel** (zero-config for Next.js):

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it at https://vercel.com/new.
3. Vercel detects Next.js automatically — no build settings needed.
4. Attach a custom domain (e.g. exatel.co.id) from the Vercel dashboard.

Any other Node-capable host (Netlify, Cloudflare Pages, a self-managed
Node server) works too, since this is a standard Next.js app — Vercel is
just the path of least resistance since Next.js is a Vercel project.

Static assets (partner/group-company logos, real photography) belong in
`public/images/` for now; `next.config.mjs` already has an empty
`images.remotePatterns` array ready for a CDN host once one exists.

## What's simplified vs. the original PDF

- Partner and group-company logos are rendered as wordmarks rather than
  image files, since no logo assets were provided — drop real logo files
  into `public/images/` and swap the text blocks in `Partners.tsx` /
  `VisionMission.tsx` for `next/image` when you have them.
- Coverage coordinates are approximate city-level points, not exact PoP
  locations.
