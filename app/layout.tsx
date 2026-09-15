import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = "Exatel Telecom — Company Profile";
const description =
  "PT. Elemen Jaringan Nusantara (Exatel) — infrastruktur fiber optic, internet, dan solusi IT dengan pendekatan netralitas jaringan di seluruh Indonesia.";

// ponytail: placeholder host until a production domain exists — swap via
// env var, no code change needed then. Needed so absolute URLs (OG,
// sitemap, canonical) resolve correctly instead of failing silently.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://exatel.co.id";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  // og:image intentionally omitted: needs a real 1200x630 design asset in
  // /public, not just a meta tag — add once one exists.
  openGraph: {
    title,
    description,
    locale: "id_ID",
    type: "website",
  },
};

// Organization schema — sourced from copy that already exists in
// data/content.ts (footer tagline), no new content invented.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT. Elemen Jaringan Nusantara (Exatel)",
  description,
  url: SITE_URL,
};

// Matches the two possible <body> backgrounds (light/dark); browser chrome
// picks whichever matches OS/user preference on first paint. The in-page
// toggle overrides the class but can't rewrite this tag, so it stays in
// sync with system preference rather than the manual toggle.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F5F9" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0E23" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const theme = localStorage.getItem("exatel-theme"); if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) document.documentElement.classList.add("dark"); } catch (_) {} })()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${plexSans.variable} ${plexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
