"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { GlobeConfig } from "@/components/ui/globe";

// three.js / WebGL is client-only and heavy — load it lazily, never on the server.
const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-primary" />
      </div>
    ),
  },
);

/* ── Citiuscomm brand palette (from src/styles/index.css) ── */
const PRIMARY = "#156EB0"; // brand blue
const ACCENT = "#FF7A00"; // signal orange
const GLOBE = "#1C6BA8"; // brightened brand blue — reads well on light + dark backdrops
const GLOBE_GLOW = "#0F4D7A"; // blue self-illumination so the unlit side isn't a black shadow
const HALO = "#8CC5EB"; // soft light-blue atmosphere halo

const globeConfig: GlobeConfig = {
  pointSize: 4,
  globeColor: GLOBE,
  showAtmosphere: true,
  atmosphereColor: HALO,
  atmosphereAltitude: 0.13,
  emissive: GLOBE_GLOW,
  emissiveIntensity: 0.3, // lifts the dark hemisphere so the globe doesn't read as a hard shadow
  shininess: 0.9,
  polygonColor: "rgba(255, 255, 255, 0.72)", // bright continents pop on the blue ocean in both themes
  ambientLight: HALO,
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: ACCENT,
  arcTime: 1400,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 19.076, lng: 72.877 }, // Mumbai HQ
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

/* Office + hub coordinates */
const MUMBAI = { lat: 19.076, lng: 72.877 };
const KOLKATA = { lat: 22.5726, lng: 88.3639 };
const DELHI = { lat: 28.6139, lng: 77.209 };
const SINGAPORE = { lat: 1.3521, lng: 103.8198 };
const DUBAI = { lat: 25.2048, lng: 55.2708 };
const LONDON = { lat: 51.5074, lng: -0.1278 };
const NEW_YORK = { lat: 40.7128, lng: -74.006 };
const TOKYO = { lat: 35.6762, lng: 139.6503 };
const SYDNEY = { lat: -33.8688, lng: 151.2093 };
const SAN_FRANCISCO = { lat: 37.7749, lng: -122.4194 };

type Hub = { lat: number; lng: number };
const arc = (
  order: number,
  from: Hub,
  to: Hub,
  arcAlt: number,
  color: string,
) => ({
  order,
  startLat: from.lat,
  startLng: from.lng,
  endLat: to.lat,
  endLng: to.lng,
  arcAlt,
  color,
});

// Arcs radiate from the Indian offices out to branches and international hubs.
const arcData = [
  // Domestic + regional links from Mumbai HQ
  arc(1, MUMBAI, DELHI, 0.1, PRIMARY),
  arc(1, MUMBAI, KOLKATA, 0.15, ACCENT),
  arc(2, MUMBAI, DUBAI, 0.2, PRIMARY),
  arc(2, MUMBAI, SINGAPORE, 0.3, ACCENT),
  // International reach
  arc(3, DUBAI, LONDON, 0.3, PRIMARY),
  arc(3, DELHI, LONDON, 0.35, ACCENT),
  arc(4, SINGAPORE, TOKYO, 0.2, PRIMARY),
  arc(4, SINGAPORE, SYDNEY, 0.25, ACCENT),
  arc(5, LONDON, NEW_YORK, 0.3, PRIMARY),
  arc(5, MUMBAI, TOKYO, 0.4, ACCENT),
  arc(6, NEW_YORK, SAN_FRANCISCO, 0.2, PRIMARY),
  arc(6, DUBAI, SINGAPORE, 0.25, ACCENT),
  arc(7, KOLKATA, SINGAPORE, 0.2, PRIMARY),
  arc(7, DELHI, DUBAI, 0.15, ACCENT),
];

export default function ContactGlobe() {
  // Memoize so the arc array identity is stable across re-renders.
  const data = useMemo(() => arcData, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[600px]">
      {/* subtle brand halo — kept small/faint so it doesn't tint the globe itself */}
      <div className="pointer-events-none absolute inset-[18%] -z-10 rounded-full bg-primary/10 blur-2xl" />
      <World globeConfig={globeConfig} data={data} />
    </div>
  );
}
