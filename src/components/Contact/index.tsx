"use client";

import { useTheme } from "next-themes";
import { useState } from "react";

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
      "2, Canal Street,\n1st floor, Flat#1B,\nnear Entally Police Station,\nKolkata – 700014.",
    phone: "+91 11 4010 7947",
    email: "sales@citiuscomm.com",
    mapSrc:
      "https://maps.google.com/maps?q=2+Canal+Street+Entally+Kolkata+700014&z=15&output=embed",
    mapLink: "https://maps.google.com?q=2+Canal+Street+Entally+Kolkata+700014",
  },
];

const LocationPinIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
      fill="#4A6CF7"
    />
  </svg>
);

const ExternalLinkIcon = () => (
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
);

export default function ContactPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-28">
      <div className="container">

        {/* ── TOP ROW: Form + (optional side content) ── */}
        <div className="mb-16">
          {/* Contact Form Card */}
          <div className="shadow-three dark:bg-gray-dark relative z-10 overflow-hidden rounded-sm bg-white p-8 sm:p-11 lg:p-8 xl:p-11">

            {/* Decorative SVGs – top-right */}
            <span className="absolute top-0 right-0 z-[-1]">
              <svg
                width="162"
                height="91"
                viewBox="0 0 162 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.3">
                  <path
                    opacity="0.45"
                    d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                    stroke={`url(#form_wave_1)`}
                  />
                  <path
                    opacity="0.45"
                    d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
                    stroke={`url(#form_wave_2)`}
                  />
                </g>
                <defs>
                  <linearGradient id="form_wave_1" x1="291.35" y1="12.1032" x2="179.211" y2="237.617" gradientUnits="userSpaceOnUse">
                    <stop offset="0.328125" stopColor={theme === "light" ? "#4A6CF7" : "#fff"} />
                    <stop offset="1" stopColor={theme === "light" ? "#4A6CF7" : "#fff"} stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="form_wave_2" x1="333.35" y1="-12.8968" x2="221.211" y2="212.617" gradientUnits="userSpaceOnUse">
                    <stop offset="0.328125" stopColor={theme === "light" ? "#4A6CF7" : "#fff"} />
                    <stop offset="1" stopColor={theme === "light" ? "#4A6CF7" : "#fff"} stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            {/* Decorative SVG – bottom-left */}
            <span className="absolute bottom-0 left-0 z-[-1]">
              <svg width="57" height="65" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  opacity="0.5"
                  d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
                  fill="url(#form_triangle)"
                />
                <defs>
                  <linearGradient id="form_triangle" x1="-18.3187" y1="55.1044" x2="37.161" y2="15.3509" gradientUnits="userSpaceOnUse">
                    <stop stopColor={theme === "light" ? "#4A6CF7" : "#fff"} stopOpacity="0.62" />
                    <stop offset="1" stopColor={theme === "light" ? "#4A6CF7" : "#fff"} stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>

            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Connect With Us
            </h2>
            <p className="border-body-color/25 text-body-color mb-8 border-b pb-8 text-base leading-relaxed dark:border-white/25 dark:text-white/70">
              Fill in the form below and our team will get back to you as soon as possible.
            </p>

            {/* Row 1: Name + Email */}
            <div className="mb-6 flex flex-col gap-6 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="name"
                  className="text-body-color mb-2 block text-sm font-medium dark:text-white/70"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="email"
                  className="text-body-color mb-2 block text-sm font-medium dark:text-white/70"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                />
              </div>
            </div>

            {/* Row 2: Contact No. (full width) */}
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="text-body-color mb-2 block text-sm font-medium dark:text-white/70"
              >
                Contact No.
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your contact number"
                className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
              />
            </div>

            {/* Row 3: Message */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="text-body-color mb-2 block text-sm font-medium dark:text-white/70"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Enter your Message"
                className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base outline-none dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
              />
            </div>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark inline-flex cursor-pointer items-center justify-center rounded-sm px-9 py-4 text-base font-medium text-white duration-300"
            >
              Submit Ticket
            </button>
          </div>
        </div>

        {/* ── BOTTOM ROW: Office Location Cards ── */}
        <div>
          {/* Section heading */}
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Our Office Locations
            </h2>
            <p className="text-body-color mx-auto max-w-xl text-base leading-relaxed dark:text-white/70">
              Visit us at any of our offices across India. We'd love to meet you in person.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, index) => (
              <div
                key={index}
                className="shadow-three dark:bg-gray-dark relative z-10 overflow-hidden rounded-sm bg-white p-8"
              >
                {/* Decorative top-right wave */}
                <span className="absolute top-0 right-0 z-[-1]">
                  <svg width="100" height="56" viewBox="0 0 162 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                      <path opacity="0.45" d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014" stroke={`url(#card_wave_${index})`} />
                    </g>
                    <defs>
                      <linearGradient id={`card_wave_${index}`} x1="291.35" y1="12.1032" x2="179.211" y2="237.617" gradientUnits="userSpaceOnUse">
                        <stop offset="0.328125" stopColor={theme === "light" ? "#4A6CF7" : "#fff"} />
                        <stop offset="1" stopColor={theme === "light" ? "#4A6CF7" : "#fff"} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>

                {/* Decorative bottom-left triangle */}
                <span className="absolute bottom-4 left-2 z-[-1]">
                  <svg width="40" height="46" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z" fill={`url(#card_tri_${index})`} />
                    <defs>
                      <linearGradient id={`card_tri_${index}`} x1="-18.3187" y1="55.1044" x2="37.161" y2="15.3509" gradientUnits="userSpaceOnUse">
                        <stop stopColor={theme === "light" ? "#4A6CF7" : "#fff"} stopOpacity="0.62" />
                        <stop offset="1" stopColor={theme === "light" ? "#4A6CF7" : "#fff"} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>

                {/* Pin Icon */}
                <div className="mb-6 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#E8EFFE] dark:bg-white/10">
                  <LocationPinIcon />
                </div>

                {/* Office Title */}
                <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                  {office.city}
                </h3>

                {/* Address */}
                <p className="border-body-color/25 text-body-color mb-4 whitespace-pre-line border-b pb-4 text-sm leading-relaxed dark:border-white/25 dark:text-white/70">
                  {office.address}
                </p>

                {/* Phone */}
                <p className="text-body-color mb-1 text-sm dark:text-white/70">
                  <span className="font-semibold text-black dark:text-white">Phone: </span>
                  {office.phone}
                </p>

                {/* Email */}
                <p className="text-body-color mb-5 text-sm dark:text-white/70">
                  <span className="font-semibold text-black dark:text-white">Email: </span>
                  <a
                    href={`mailto:${office.email}`}
                    className="text-primary hover:underline"
                  >
                    {office.email}
                  </a>
                </p>

                {/* Map embed */}
                <div className="relative overflow-hidden rounded-sm">
                  <a
                    href={office.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-medium text-white shadow transition"
                  >
                    Open in Maps
                    <ExternalLinkIcon />
                  </a>
                  <iframe
                    src={office.mapSrc}
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={office.city}
                    className="w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}