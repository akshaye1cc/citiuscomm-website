"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/* ─── Types ───────────────────────────────────────────────── */
interface Office {
  id: string;
  city: string;
  left: string;   // % on 626×626 map
  top: string;
  isHQ: boolean;
  country: string;
  address: string;
  phone: string;
  email: string;
  mapLink: string;
  mapSrc: string;
}

interface Cluster {
  label: string;
  cities: string[];
  left: string;
  top: string;
}

/* ─────────────────────────────────────────────────────────────
   CITY POSITIONS — equirectangular on 626×626 SVG
   Formula: x=(lng+180)/360*626  y=(90-lat)/180*626
   ───────────────────────────────────────────────────────────── */
const CITIES: Record<string, Office> = {
  mumbai: {
    id: "mumbai", city: "Mumbai",
    left: "70.24%", top: "39.40%",   // 19.08°N 72.88°E — Maharashtra west coast
    isHQ: true, country: "india",
    address: "503, Filix Tower, LBS Marg,\nOpp. Asian Paints, Bhandup (West),\nMumbai – 400078.",
    phone: "022 62362154", email: "sales@citiuscomm.com",
    mapLink: "https://maps.google.com?q=503+Filix+Tower+LBS+Marg+Bhandup+West+Mumbai+400078",
    mapSrc:  "https://maps.google.com/maps?q=503+Filix+Tower+LBS+Marg+Bhandup+West+Mumbai+400078&z=15&output=embed",
  },
  delhi: {
    id: "delhi", city: "Delhi",
    left: "71.42%", top: "34.06%",   // 28.70°N 77.10°E — Delhi NCR
    isHQ: false, country: "india",
    address: "B25, Ground Floor,\nOkhla Industrial Area,\nPhase-II, New Delhi – 110020.",
    phone: "+91 11 4010 7947", email: "sales@citiuscomm.com",
    mapLink: "https://maps.google.com?q=B25+Okhla+Industrial+Area+Phase+II+New+Delhi+110020",
    mapSrc:  "https://maps.google.com/maps?q=B25+Okhla+Industrial+Area+Phase+II+New+Delhi+110020&z=15&output=embed",
  },
  kolkata: {
    id: "kolkata", city: "Kolkata",
    left: "74.54%", top: "37.46%",   // 22.57°N 88.36°E — West Bengal
    isHQ: false, country: "india",
    address: "2, Canal Street, 1st floor,\nFlat#1B, near Entally Police Station,\nKolkata – 700014.",
    phone: "+91 11 4010 7947", email: "sales@citiuscomm.com",
    mapLink: "https://maps.google.com?q=2+Canal+Street+Entally+Kolkata+700014",
    mapSrc:  "https://maps.google.com/maps?q=2+Canal+Street+Entally+Kolkata+700014&z=15&output=embed",
  },
  nepal: {
    id: "nepal", city: "Nepal",
    left: "73.33%", top: "34.61%",   // 27.70°N 84.00°E — Kathmandu
    isHQ: false, country: "nepal",
    address: "Kathmandu, Nepal.",
    phone: "+977 1 000 0000", email: "sales@citiuscomm.com",
    mapLink: "https://maps.google.com?q=Kathmandu+Nepal",
    mapSrc:  "https://maps.google.com/maps?q=Kathmandu+Nepal&z=13&output=embed",
  },
  dubai: {
    id: "dubai", city: "Dubai",
    left: "65.35%", top: "36.00%",   // 25.20°N 55.27°E — UAE
    isHQ: false, country: "uae",
    address: "Office 2109, Aspect Tower,\nBusiness Bay, Dubai – UAE.",
    phone: "+971 4 000 0000", email: "sales@citiuscomm.com",
    mapLink: "https://maps.google.com?q=Aspect+Tower+Business+Bay+Dubai",
    mapSrc:  "https://maps.google.com/maps?q=Aspect+Tower+Business+Bay+Dubai&z=15&output=embed",
  },
  singapore: {
    id: "singapore", city: "Singapore",
    left: "78.84%", top: "49.25%",   // 1.35°N 103.82°E
    isHQ: false, country: "singapore",
    address: "10 Anson Road,\n#10-11 International Plaza,\nSingapore – 079903.",
    phone: "+65 6000 0000", email: "sales@citiuscomm.com",
    mapLink: "https://maps.google.com?q=10+Anson+Road+Singapore+079903",
    mapSrc:  "https://maps.google.com/maps?q=10+Anson+Road+Singapore+079903&z=15&output=embed",
  },
  tokyo: {
    id: "tokyo", city: "Tokyo",
    left: "88.80%", top: "30.17%",   // 35.69°N 139.69°E
    isHQ: false, country: "japan",
    address: "Tokyo, Japan.",
    phone: "+81 3 0000 0000", email: "sales@citiuscomm.com",
    mapLink: "https://maps.google.com?q=Tokyo+Japan",
    mapSrc:  "https://maps.google.com/maps?q=Tokyo+Japan&z=13&output=embed",
  },
};

/* ─────────────────────────────────────────────────────────────
   CLUSTERS — one clickable pin per country
   India cluster pin = geographic center of all 3 cities
   ───────────────────────────────────────────────────────────── */
const CLUSTERS: Record<string, Cluster> = {
  india:     { label: "India",     cities: ["mumbai","delhi","kolkata"], left: "72.07%", top: "36.97%" },
  nepal:     { label: "Nepal",     cities: ["nepal"],                    left: "73.33%", top: "34.61%" },
  uae:       { label: "Dubai",     cities: ["dubai"],                    left: "65.35%", top: "36.00%" },
  singapore: { label: "Singapore", cities: ["singapore"],                left: "78.84%", top: "49.25%" },
  japan:     { label: "Tokyo",     cities: ["tokyo"],                    left: "88.80%", top: "30.17%" },
};

const PRIMARY = "#4A6CF7";

/* ─── Icons ───────────────────────────────────────────────── */
const PhoneIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor" opacity="0.7"/>
  </svg>
);
const MailIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" opacity="0.7"/>
  </svg>
);
const ExtIcon = () => (
  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
    <path d="M10 2L2 10M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

/* ─── Small individual dot shown on map for each city ────── */
const CityDot = ({ city, isHQ }: { city: Office; isHQ: boolean }) => (
  <div
    style={{
      position: "absolute",
      left: city.left,
      top: city.top,
      transform: "translate(-50%,-50%)",
      zIndex: 5,
      pointerEvents: "none",
    }}
  >
    <div style={{
      width: isHQ ? 8 : 6,
      height: isHQ ? 8 : 6,
      borderRadius: "50%",
      background: PRIMARY,
      border: "1.5px solid white",
      boxShadow: isHQ ? `0 0 0 3px ${PRIMARY}33` : "0 1px 3px rgba(0,0,0,0.3)",
    }} />
  </div>
);

/* ─── Side Panel ──────────────────────────────────────────── */
const SidePanel = ({ countryId, onClose }: { countryId: string | null; onClose: () => void }) => {
  if (!countryId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] rounded-2xl border-2 border-dashed border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.02] p-8 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#4A6CF7" strokeWidth="1.5"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="#4A6CF7" strokeWidth="1.5"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-600 dark:text-white/50 mb-1">Explore Our Offices</p>
          <p className="text-xs text-gray-400 dark:text-white/30 leading-relaxed">
            Click any pin on the map<br/>to view office details
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-1.5 mt-1">
          {Object.entries(CLUSTERS).map(([id, c]) => (
            <span key={id} className="text-[10px] text-gray-400 dark:text-white/25 bg-gray-100 dark:bg-white/5 rounded-full px-2.5 py-1">
              {c.label}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const cluster = CLUSTERS[countryId];
  const offices = cluster.cities.map(id => CITIES[id]);

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-gray-dark overflow-hidden shadow-xl">
      {/* Header */}
      <div className="relative px-5 py-4 bg-gradient-to-r from-primary to-blue-500 overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10"/>
        <div className="absolute right-6 bottom-0 w-12 h-12 rounded-full bg-white/5"/>
        <div className="relative flex items-center justify-between">
          <div>
            <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-0.5">
              {offices.length > 1 ? `${offices.length} Offices` : "Office"}
            </p>
            <h4 className="text-white text-xl font-bold">{cluster.label}</h4>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition p-1.5 rounded-lg hover:bg-white/10">
            <XIcon/>
          </button>
        </div>
      </div>

      {/* Offices */}
      <div className="divide-y divide-gray-100 dark:divide-white/6 max-h-[520px] overflow-y-auto">
        {offices.map(office => (
          <div key={office.id} className="p-5">
            {/* City header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#4A6CF7"/>
                  </svg>
                </div>
                <span className="text-sm font-bold text-black dark:text-white">{office.city}</span>
                {office.isHQ && (
                  <span className="bg-primary text-white text-[9px] font-extrabold tracking-wider px-2 py-0.5 rounded-full">HQ</span>
                )}
              </div>
              <a href={office.mapLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 text-[10px] font-semibold text-primary border border-primary/25 rounded-lg px-2.5 py-1 hover:bg-primary/5 transition">
                Map <ExtIcon/>
              </a>
            </div>

            {/* Address box */}
            <div className="bg-gray-50 dark:bg-white/[0.03] rounded-xl p-3 mb-3">
              <p className="text-[11px] text-gray-500 dark:text-white/45 leading-relaxed whitespace-pre-line">{office.address}</p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[11px] text-gray-500 dark:text-white/45">
                <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0"><PhoneIcon/></div>
                {office.phone}
              </div>
              <div className="flex items-center gap-2 text-[11px]">
                <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0"><MailIcon/></div>
                <a href={`mailto:${office.email}`} className="text-primary hover:underline truncate">{office.email}</a>
              </div>
            </div>

            {/* Embedded map for HQ */}
            {office.isHQ && (
              <div className="relative mt-3 overflow-hidden rounded-xl">
                <a href={office.mapLink} target="_blank" rel="noopener noreferrer"
                  className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-primary text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg hover:bg-primary/90 transition shadow">
                  Open Maps <ExtIcon/>
                </a>
                <iframe src={office.mapSrc} width="100%" height="140" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={office.city}/>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─── Cluster Pin ─────────────────────────────────────────── */
const ClusterPin = ({
  cluster, clusterId, isActive, isDimmed, onClick,
}: {
  cluster: Cluster; clusterId: string; isActive: boolean; isDimmed: boolean; onClick: () => void;
}) => {
  const isIndia = clusterId === "india";
  const pinW = isIndia ? 30 : 24;

  return (
    <div
      role="button"
      aria-label={`${cluster.label} offices`}
      onClick={onClick}
      style={{
        position: "absolute",
        left: cluster.left,
        top: cluster.top,
        transform: "translate(-50%, -100%)",
        zIndex: isActive ? 30 : 15,
        opacity: isDimmed ? 0.2 : 1,
        transition: "opacity 0.25s ease",
        cursor: "pointer",
      }}
    >
      <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Pulse */}
        {!isActive && (
          <span style={{
            position: "absolute",
            top: "28%", left: "50%",
            width: pinW + 16, height: pinW + 16,
            marginLeft: -(pinW + 16) / 2,
            marginTop: -(pinW + 16) / 2,
            borderRadius: "50%",
            background: PRIMARY,
            opacity: 0,
            animation: "mapPulse 2.4s ease-out infinite",
            pointerEvents: "none",
          }}/>
        )}

        {/* Teardrop */}
        <svg
          width={pinW}
          height={pinW * 1.4}
          viewBox="0 0 30 42"
          fill="none"
          style={{
            filter: isActive
              ? `drop-shadow(0 0 10px ${PRIMARY}88) drop-shadow(0 3px 6px rgba(0,0,0,0.35))`
              : "drop-shadow(0 2px 5px rgba(0,0,0,0.28))",
            transform: isActive ? "scale(1.3) translateY(-4px)" : "scale(1)",
            transition: "transform 0.22s cubic-bezier(0.34,1.56,0.64,1), filter 0.2s",
          }}
        >
          <path d="M15 1C9.20 1 4.5 5.70 4.5 11.5C4.5 20.5 15 40 15 40C15 40 25.5 20.5 25.5 11.5C25.5 5.70 20.80 1 15 1Z" fill={PRIMARY}/>
          <circle cx="15" cy="11.5" r="6" fill="white"/>
          {/* HQ inner dot */}
          {isIndia && <circle cx="15" cy="11.5" r="2.8" fill={PRIMARY}/>}
        </svg>

        {/* Label chip */}
        <div style={{
          marginTop: 3,
          whiteSpace: "nowrap",
          fontSize: 9.5,
          fontWeight: 700,
          fontFamily: "system-ui, sans-serif",
          color: PRIMARY,
          background: "rgba(255,255,255,0.97)",
          border: `1px solid ${isActive ? PRIMARY : "rgba(74,108,247,0.2)"}`,
          borderRadius: 5,
          padding: "2px 6px",
          pointerEvents: "none",
          boxShadow: "0 1px 6px rgba(0,0,0,0.12)",
          userSelect: "none",
        }}>
          {cluster.label}
          {cluster.cities.length > 1 && (
            <span style={{ marginLeft: 3, opacity: 0.55, fontSize: 8.5 }}>×{cluster.cities.length}</span>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─── World Map component ─────────────────────────────────── */
const WorldMap = ({
  activeCountry, onCountryClick,
}: {
  activeCountry: string | null;
  onCountryClick: (id: string) => void;
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted && theme === "dark";

  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>

      {/* World map image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/world-map.svg"
        alt="World Map"
        style={{
          width: "100%", height: "100%",
          objectFit: "fill", display: "block",
          userSelect: "none", pointerEvents: "none",
          borderRadius: 16,
          filter: isDark
            ? "invert(1) hue-rotate(180deg) brightness(0.42) saturate(0.55)"
            : "brightness(1.02) saturate(0.85)",
          transition: "filter 0.4s ease",
        }}
        draggable={false}
      />

      {/* Individual city dots (always visible, non-clickable) */}
      {Object.values(CITIES).map(city => (
        <CityDot key={city.id} city={city} isHQ={city.isHQ}/>
      ))}

      {/* Arc lines from Mumbai HQ to every other city */}
      <svg
        viewBox="0 0 626 626"
        style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}
      >
        <defs>
          <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <circle cx="2" cy="2" r="1.5" fill={PRIMARY} opacity="0.65"/>
          </marker>
        </defs>
        {Object.values(CITIES).filter(c => !c.isHQ).map(c => {
          const hq = CITIES.mumbai;
          const x1 = parseFloat(hq.left) / 100 * 626;
          const y1 = parseFloat(hq.top)  / 100 * 626;
          const x2 = parseFloat(c.left)  / 100 * 626;
          const y2 = parseFloat(c.top)   / 100 * 626;
          const mx = (x1 + x2) / 2;
          const my = Math.min(y1, y2) - 55;
          return (
            <path
              key={c.id}
              d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`}
              fill="none"
              stroke={PRIMARY}
              strokeWidth="1.2"
              strokeDasharray="4,6"
              opacity={isDark ? "0.4" : "0.3"}
              markerEnd="url(#dot)"
            />
          );
        })}
      </svg>

      {/* Cluster pins (clickable) — rendered on top */}
      {Object.entries(CLUSTERS).map(([id, cluster]) => (
        <ClusterPin
          key={id}
          clusterId={id}
          cluster={cluster}
          isActive={activeCountry === id}
          isDimmed={!!activeCountry && activeCountry !== id}
          onClick={() => onCountryClick(id)}
        />
      ))}

      <style>{`
        @keyframes mapPulse {
          0%   { transform:scale(0.5); opacity:0.55; }
          70%  { transform:scale(2.4); opacity:0;    }
          100% { transform:scale(0.5); opacity:0;    }
        }
      `}</style>
    </div>
  );
};

/* ─── Stats ───────────────────────────────────────────────── */
const StatsBar = () => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
    {[
      { num: "7",  label: "Global Offices"  },
      { num: "5",  label: "Countries"       },
      { num: "3",  label: "Indian Cities"   },
      { num: "24h",label: "Response Time"   },
    ].map(({ num, label }) => (
      <div key={label} className="rounded-xl bg-white dark:bg-white/[0.03] border border-gray-100 dark:border-white/8 p-4 text-center shadow-sm">
        <div className="text-2xl font-extrabold text-primary mb-0.5">{num}</div>
        <div className="text-xs text-gray-500 dark:text-white/40 font-medium">{label}</div>
      </div>
    ))}
  </div>
);

/* ─── Location chips ──────────────────────────────────────── */
const LocationChips = ({
  activeCountry, onSelect,
}: { activeCountry: string | null; onSelect: (id: string) => void }) => (
  <div className="flex flex-wrap gap-2 mt-4">
    {Object.entries(CLUSTERS).map(([id, c]) => (
      <button
        key={id}
        onClick={() => onSelect(id)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
          activeCountry === id
            ? "bg-primary text-white border-primary shadow-md scale-105"
            : "bg-white dark:bg-white/5 text-gray-600 dark:text-white/50 border-gray-200 dark:border-white/10 hover:border-primary/50 hover:text-primary"
        }`}
      >
        <svg width="7" height="10" viewBox="0 0 10 14" fill="none">
          <path d="M5 0C2.24 0 0 2.24 0 5c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z"
            fill={activeCountry === id ? "white" : PRIMARY} opacity={activeCountry === id ? 1 : 0.8}/>
        </svg>
        {c.label}
        {c.cities.length > 1 && (
          <span className={`text-[10px] ${activeCountry === id ? "opacity-70" : "opacity-45"}`}>×{c.cities.length}</span>
        )}
      </button>
    ))}
  </div>
);

/* ─── Page ────────────────────────────────────────────────── */
export default function Contact() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setActiveCountry(null);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const toggle = (id: string) => setActiveCountry(p => p === id ? null : id);

  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <div className="container">

        {/* Header */}
        <div className="mb-12 text-center">
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-5 py-1.5 text-sm font-semibold tracking-wide">
            Get In Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl">
            Our Global Offices
          </h2>
          <p className="text-body-color mx-auto max-w-2xl text-base leading-relaxed dark:text-white/70">
            With a strong presence across India and growing international operations,
            Citiuscomm is always close to where you need us most.
          </p>
        </div>

        {/* Stats */}
        <StatsBar />

        {/* Map card */}
        <div ref={wrapperRef} className="shadow-three dark:bg-gray-dark relative z-10 overflow-visible rounded-2xl bg-white p-5 md:p-7">
          <div className="mb-5 flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-base font-bold text-black dark:text-white">Global Presence</h3>
              <p className="text-xs text-gray-500 dark:text-white/40 mt-0.5">Click a pin to see office details</p>
            </div>
            <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
              7 locations worldwide
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-start">
            <div className="flex-1 min-w-0">
              <WorldMap activeCountry={activeCountry} onCountryClick={toggle}/>
              <LocationChips activeCountry={activeCountry} onSelect={toggle}/>
            </div>
            <div className="w-full lg:w-[300px] xl:w-[320px] shrink-0">
              <SidePanel countryId={activeCountry} onClose={() => setActiveCountry(null)}/>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 dark:from-primary/10 dark:via-primary/15 dark:to-primary/10 border border-primary/15 dark:border-primary/20 p-8 md:p-10 text-center">
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">Want to reach us directly?</h3>
          <p className="text-body-color dark:text-white/60 mb-6 text-sm max-w-md mx-auto">
            Drop us an email and our team will get back to you within 24 hours.
          </p>
          <a href="mailto:sales@citiuscomm.com"
            className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark inline-flex items-center gap-2.5 rounded-xl px-8 py-3.5 text-sm font-semibold text-white duration-300">
            <MailIcon/> sales@citiuscomm.com
          </a>
        </div>

      </div>
    </section>
  );
}