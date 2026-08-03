/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
