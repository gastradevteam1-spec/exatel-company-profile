/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Point this at your CDN / asset host once real photography and
    // partner logos are available, e.g. images.exatel.co.id
    remotePatterns: [],
  },
};

export default nextConfig;
