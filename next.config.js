/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Next defaults to ["image/webp"], which means it decodes the AVIF source
    // files under public/images and re-encodes them as WebP. AVIF first so the
    // format the assets were actually authored in reaches browsers that take it.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      // /solutions no longer exists as a page — the nav parent is now a
      // dropdown-only trigger, and Services is the canonical landing route.
      {
        source: "/solutions",
        destination: "/solutions/services",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
