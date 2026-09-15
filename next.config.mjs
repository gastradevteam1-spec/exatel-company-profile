/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Point this at your CDN / asset host once real photography and
    // partner logos are available, e.g. images.exatel.co.id
    remotePatterns: [],
  },
  async redirects() {
    return [
      // /jaringan merged into /layanan (its content was one of the three
      // service lines /layanan already introduces, not a distinct
      // top-level section) — keep old bookmarks/links working.
      { source: "/jaringan", destination: "/layanan", permanent: true },
    ];
  },
};

export default nextConfig;
