"use client";

import { useTheme } from "next-themes";

/* ─── Office Data ─────────────────────────────────────────── */
const headquarters = {
  city: "Mumbai",
  label: "Headquarters",
  address: "503, Filix Tower, LBS Marg,\nOpp. Asian Paints, Bhandup (West),\nMumbai – 400078.",
  phone: "022 62362154",
  email: "sales@citiuscomm.com",
  mapSrc:
    "https://maps.google.com/maps?q=503+Filix+Tower+LBS+Marg+Bhandup+West+Mumbai+400078&z=15&output=embed",
  mapLink:
    "https://maps.google.com?q=503+Filix+Tower+LBS+Marg+Bhandup+West+Mumbai+400078",
};

const branches = [
  {
    city: "Kolkata",
    address: "2, Canal Street, 1st floor,\nFlat#1B, near Entally\nPolice Station, Kolkata – 700014.",
    phone: "+91 11 4010 7947",
    email: "sales@citiuscomm.com",
    mapSrc:
      "https://maps.google.com/maps?q=2+Canal+Street+Entally+Kolkata+700014&z=15&output=embed",
    mapLink: "https://maps.google.com?q=2+Canal+Street+Entally+Kolkata+700014",
  },
  {
    city: "Delhi",
    address: "B25, Ground Floor,\nOkhla Industrial Area,\nPhase-II, New Delhi – 110020.",
    phone: "+91 11 4010 7947",
    email: "sales@citiuscomm.com",
    mapSrc:
      "https://maps.google.com/maps?q=B25+Okhla+Industrial+Area+Phase+II+New+Delhi+110020&z=15&output=embed",
    mapLink:
      "https://maps.google.com?q=B25+Okhla+Industrial+Area+Phase+II+New+Delhi+110020",
  },
  {
    city: "Singapore",
    address: "10 Anson Road,\n#10-11 International Plaza,\nSingapore – 079903.",
    phone: "+65 6000 0000",
    email: "sales@citiuscomm.com",
    mapSrc:
      "https://maps.google.com/maps?q=10+Anson+Road+Singapore+079903&z=15&output=embed",
    mapLink: "https://maps.google.com?q=10+Anson+Road+Singapore+079903",
  },
  {
    city: "Dubai",
    address: "Office 2109, Aspect Tower,\nBusiness Bay,\nDubai – UAE.",
    phone: "+971 4 000 0000",
    email: "sales@citiuscomm.com",
    mapSrc:
      "https://maps.google.com/maps?q=Aspect+Tower+Business+Bay+Dubai&z=15&output=embed",
    mapLink: "https://maps.google.com?q=Aspect+Tower+Business+Bay+Dubai",
  },
];

/* ─── Icons ───────────────────────────────────────────────── */
const PinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
      fill="#4A6CF7"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      fill="currentColor"
      opacity="0.7"
    />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
      fill="currentColor"
      opacity="0.7"
    />
  </svg>
);

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path
      d="M10 2L2 10M10 2H5M10 2V7"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Decorative SVG shapes ───────────────────────────────── */
const DecorWave = ({ id, color }: { id: string; color: string }) => (
  <span className="absolute top-0 right-0 z-[-1] pointer-events-none">
    <svg width="140" height="80" viewBox="0 0 162 91" fill="none">
      <g opacity="0.25">
        <path
          opacity="0.5"
          d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
          stroke={`url(#${id}a)`}
        />
        <path
          opacity="0.5"
          d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001"
          stroke={`url(#${id}b)`}
        />
      </g>
      <defs>
        <linearGradient id={`${id}a`} x1="291" y1="12" x2="179" y2="237" gradientUnits="userSpaceOnUse">
          <stop offset="0.33" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="333" y1="-13" x2="221" y2="212" gradientUnits="userSpaceOnUse">
          <stop offset="0.33" stopColor={color} />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </span>
);

const DecorTriangle = ({ id, color }: { id: string; color: string }) => (
  <span className="absolute bottom-3 left-2 z-[-1] pointer-events-none">
    <svg width="38" height="44" viewBox="0 0 57 65" fill="none">
      <path
        opacity="0.4"
        d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
        fill={`url(#${id})`}
      />
      <defs>
        <linearGradient id={id} x1="-18" y1="55" x2="37" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor={color} stopOpacity="0.62" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  </span>
);

/* ─── Branch Card (compact 2×2) ───────────────────────────── */
const BranchCard = ({
  office,
  idx,
  decorColor,
}: {
  office: (typeof branches)[0];
  idx: number;
  decorColor: string;
}) => (
  <div className="shadow-three dark:bg-gray-dark relative z-10 overflow-hidden rounded-sm bg-white p-6 flex flex-col gap-3">
    <DecorWave id={`bw${idx}`} color={decorColor} />
    <DecorTriangle id={`bt${idx}`} color={decorColor} />

    {/* Icon + City */}
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E8EFFE] dark:bg-white/10">
        <PinIcon size={18} />
      </div>
      <h3 className="text-lg font-bold text-black dark:text-white leading-tight">
        {office.city}
      </h3>
    </div>

    {/* Address */}
    <p className="border-body-color/20 text-body-color whitespace-pre-line border-b pb-3 text-xs leading-relaxed dark:border-white/20 dark:text-white/65">
      {office.address}
    </p>

    {/* Phone */}
    <div className="flex items-center gap-2 text-xs text-body-color dark:text-white/65">
      <PhoneIcon />
      <span>{office.phone}</span>
    </div>

    {/* Email */}
    <div className="flex items-center gap-2 text-xs">
      <MailIcon />
      <a href={`mailto:${office.email}`} className="text-primary hover:underline truncate">
        {office.email}
      </a>
    </div>

    {/* Map */}
    <div className="relative mt-1 overflow-hidden rounded-sm">
      <a
        href={office.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:bg-primary/90 absolute top-2 left-2 z-10 flex items-center gap-1 rounded-sm px-2.5 py-1 text-[11px] font-medium text-white shadow transition"
      >
        Open in Maps <ExternalIcon />
      </a>
      <iframe
        src={office.mapSrc}
        width="100%"
        height="140"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={office.city}
        className="w-full"
      />
    </div>
  </div>
);

/* ─── Main Export ─────────────────────────────────────────── */
export default function Contact() {
  const { theme } = useTheme();
  const decorColor = theme === "light" ? "#4A6CF7" : "#ffffff";

  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="mb-14 text-center">
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-5 py-1.5 text-sm font-semibold tracking-wide">
            Get In Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Our Global Offices
          </h2>
          <p className="text-body-color mx-auto max-w-2xl text-base leading-relaxed dark:text-white/70">
            With a strong presence across India and growing international operations,
            Citiuscomm is always close to where you need us most.
          </p>
        </div>

        {/* ── Main Layout: HQ left | 2×2 grid right ── */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* ── LEFT: Headquarters Card ── */}
          <div className="shadow-three dark:bg-gray-dark relative z-10 overflow-hidden rounded-sm bg-white p-8 flex flex-col">
            <DecorWave id="hqwave" color={decorColor} />
            <DecorTriangle id="hqtri" color={decorColor} />

            {/* HQ Badge + Title */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E8EFFE] dark:bg-white/10">
                <PinIcon size={26} />
              </div>
              <div>
                <span className="bg-primary mb-1 inline-block rounded-full px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                  Headquarters
                </span>
                <h3 className="text-2xl font-bold text-black dark:text-white">
                  {headquarters.city}
                </h3>
              </div>
            </div>

            {/* Address */}
            <p className="border-body-color/25 text-body-color mb-5 whitespace-pre-line border-b pb-5 text-base leading-relaxed dark:border-white/25 dark:text-white/70">
              {headquarters.address}
            </p>

            {/* Contact details */}
            <div className="mb-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-body-color dark:text-white/70">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EFFE] dark:bg-white/10">
                  <PhoneIcon />
                </div>
                <span>{headquarters.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8EFFE] dark:bg-white/10">
                  <MailIcon />
                </div>
                <a href={`mailto:${headquarters.email}`} className="text-primary hover:underline">
                  {headquarters.email}
                </a>
              </div>
            </div>

            {/* Map — fills remaining height */}
            <div className="relative flex-1 min-h-[220px] overflow-hidden rounded-sm">
              <a
                href={headquarters.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-medium text-white shadow transition"
              >
                Open in Maps <ExternalIcon />
              </a>
              <iframe
                src={headquarters.mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "220px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mumbai HQ"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* ── RIGHT: 2×2 Branch Grid ── */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {branches.map((office, idx) => (
              <BranchCard
                key={office.city}
                office={office}
                idx={idx}
                decorColor={decorColor}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="shadow-three dark:bg-gray-dark relative z-10 mt-14 overflow-hidden rounded-sm bg-white px-8 py-10 text-center">
          <DecorWave id="ctawave" color={decorColor} />
          <DecorTriangle id="ctatri" color={decorColor} />
          <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
            Want to reach us directly?
          </h3>
          <p className="text-body-color mb-6 text-base dark:text-white/70">
            Drop us an email and our team will get back to you within 24 hours.
          </p>
          <a
            href="mailto:sales@citiuscomm.com"
            className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark inline-flex items-center gap-2 rounded-sm px-8 py-3.5 text-base font-medium text-white duration-300"
          >
            <MailIcon />
            sales@citiuscomm.com
          </a>
        </div>

      </div>
    </section>
  );
}