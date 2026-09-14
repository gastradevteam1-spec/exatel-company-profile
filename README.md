# Exatel Company Profile — Next.js site

Rebuild of the Exatel (PT. Elemen Jaringan Nusantara) company profile PDF as
a proper Next.js app, using the stack you asked for:

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** for styling, with a small brand token system in
  `tailwind.config.ts`
- **Framer Motion** for the hero's animated fiber lines and the
  scroll-triggered network diagram draw-on
- **Leaflet** for the interactive coverage map (managed directly via a
  ref-managed effect, not `react-leaflet` — see the Coverage map note below)
- Content and coverage data live in `/data`, separate from the components

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
  FiberNetworkDiagram.tsx / GlobalInternetDiagram.tsx
                       SVG topology diagrams, draw on scroll into view
  CoverageMap.tsx      Leaflet map (client-only, dynamically imported)
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
edit those two files — no component code needs to change.

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

- Coverage coordinates are approximate city-level points, not exact PoP
  locations.
