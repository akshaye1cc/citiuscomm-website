import type { MetadataRoute } from "next";

/** Keep in step with `metadataBase` in src/app/layout.tsx. */
const BASE_URL = "https://www.citiuscomm.com";

const routes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/solutions/services", priority: 0.8 },
  { path: "/solutions/industries", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/partners", priority: 0.7 },
  { path: "/leadership", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
