"use client";

import { useTheme } from "next-themes";

const offices = [
  {
    city: "Delhi Office",
    address: "B25, Ground Floor,\nOkhla Industrial Area,\nPhase-II, New Delhi – 110020.",
    phone: "+91 11 4010 7947",
    email: "sales@citiuscomm.com",
    mapSrc:
      "https://maps.google.com/maps?q=B25+Okhla+Industrial+Area+Phase+II+New+Delhi+110020&z=15&output=embed",
    mapLink:
      "https://maps.google.com?q=B25+Okhla+Industrial+Area+Phase+II+New+Delhi+110020",
  },
  {
    city: "Mumbai Office",
    address:
      "503, Filix Tower, LBS Marg,\nOpp. Asian Paints, Bhandup (West),\nMumbai – 400078.",
    phone: "022 62362154",
    email: "sales@citiuscomm.com",
    mapSrc:
      "https://maps.google.com/maps?q=503+Filix+Tower+LBS+Marg+Bhandup+West+Mumbai+400078&z=15&output=embed",
    mapLink:
      "https://maps.google.com?q=503+Filix+Tower+LBS+Marg+Bhandup+West+Mumbai+400078",
  },
  {
    city: "Kolkata Office",
    address:
      "2, Canal Street,\n1st floor, Flat#1B,\nnear Entally Police Station,\nKolkata -700014.",
    phone: "+91 11 4010 7947",
    email: "sales@citiuscomm.com",
    mapSrc:
      "https://maps.google.com/maps?q=2+Canal+Street+Entally+Kolkata+700014&z=15&output=embed",
    mapLink: "https://maps.google.com?q=2+Canal+Street+Entally+Kolkata+700014",
  },
];

const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div className="relative">
      {/* Office Locations Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {offices.map((office, index) => (
          <div
            key={index}
            className="shadow-three dark:bg-gray-dark relative z-10 overflow-hidden rounded-xs bg-white p-8"
          >
            {/* Location Pin Icon */}
            <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#E8EFFE]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="#4A6CF7"
                />
              </svg>
            </div>

            {/* Office Name */}
            <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
              {office.city}
            </h3>

            {/* Address */}
            <p className="border-body-color/25 text-body-color mb-4 whitespace-pre-line border-b pb-4 text-base leading-relaxed dark:border-white/25 dark:text-white/70">
              {office.address}
            </p>

            {/* Phone */}
            <p className="text-body-color mb-1 text-base dark:text-white/70">
              <span className="font-semibold text-black dark:text-white">
                Phone:{" "}
              </span>
              {office.phone}
            </p>

            {/* Email */}
            <p className="text-body-color mb-5 text-base dark:text-white/70">
              <span className="font-semibold text-black dark:text-white">
                Email:{" "}
              </span>
              <a
                href={`mailto:${office.email}`}
                className="text-primary hover:underline"
              >
                {office.email}
              </a>
            </p>

            {/* Embedded Map */}
            <div className="relative overflow-hidden rounded-xs">
              <a
                href={office.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/90 hover:bg-primary absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-xs px-3 py-1.5 text-xs font-medium text-white shadow transition"
              >
                Open in Maps
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2L2 10M10 2H5M10 2V7"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <iframe
                src={office.mapSrc}
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            {/* Decorative SVG shapes (matching existing design) */}
            <span className="absolute top-7 left-2 opacity-60">
              <svg
                width="57"
                height="65"
                viewBox="0 0 57 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
                  fill="url(#paint0_office_left)"
                />
                <defs>
                  <linearGradient
                    id="paint0_office_left"
                    x1="-18.3187"
                    y1="55.1044"
                    x2="37.161"
                    y2="15.3509"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                      stopOpacity="0.62"
                    />
                    <stop
                      offset="1"
                      stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            <span className="absolute top-0 right-0 opacity-60">
              <svg
                width="120"
                height="70"
                viewBox="0 0 162 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    opacity="0.45"
                    d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                    stroke="url(#paint0_office_wave)"
                  />
                  <path
                    opacity="0.45"
                    d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
                    stroke="url(#paint1_office_wave)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_office_wave"
                    x1="291.35"
                    y1="12.1032"
                    x2="179.211"
                    y2="237.617"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.328125"
                      stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                    />
                    <stop
                      offset="1"
                      stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                      stopOpacity="0"
                    />
                  </linearGradient>
                  <linearGradient
                    id="paint1_office_wave"
                    x1="333.35"
                    y1="-12.8968"
                    x2="221.211"
                    y2="212.617"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.328125"
                      stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                    />
                    <stop
                      offset="1"
                      stopColor={theme === "light" ? "#4A6CF7" : "#fff"}
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsLatterBox;