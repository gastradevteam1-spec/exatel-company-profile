import type { MetadataRoute } from "next";

// ponytail: SITE_URL falls back to a placeholder until a production domain
// exists — swap in the real host via env var, no code change needed then.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://exatel.co.id";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
