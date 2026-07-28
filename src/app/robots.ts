import type { MetadataRoute } from "next";

/** Keep in step with `metadataBase` in src/app/layout.tsx. */
const BASE_URL = "https://www.citiuscomm.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
