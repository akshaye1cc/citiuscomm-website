import ContactForm from "@/components/Contact/ContactForm";
import ContactGlobe from "@/components/Contact/ContactGlobe";
import Reveal from "@/components/ui/Reveal";
import Badge from "@/components/ui/Badge";

export const metadata = {
  title: "Contact | Citiuscomm",
  description:
    "Reach Citiuscomm — offices in Mumbai, Kolkata, Delhi, Singapore, and Dubai. We typically reply within one business day.",
};

/* ─── Office data ─────────────────────────────────────────── */
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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 21s-7-5.5-7-11.5a7 7 0 0 1 14 0C19 15.5 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M10 2L2 10M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.584zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.914.758 1.939 1.715 0 .953-.752 1.715-1.982 1.715zm1.946 11.597H3.392v-9.726h3.891v9.726zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

/* ─── Branch card ─────────────────────────────────────────── */
const BranchCard = ({ office }: { office: (typeof branches)[0] }) => (
  <div className="flex h-full flex-col gap-3 rounded-2xl border border-edge bg-surface p-6 transition-colors duration-200 hover:border-primary/40">
    <div className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-primary">
        <PinIcon size={18} />
      </div>
      <h3 className="text-lg font-bold leading-tight text-fg">{office.city}</h3>
    </div>

    <p className="whitespace-pre-line border-b border-edge pb-3 text-xs leading-relaxed text-muted">
      {office.address}
    </p>

    <div className="flex items-center gap-2 text-xs text-muted">
      <PhoneIcon />
      <span>{office.phone}</span>
    </div>

    <div className="flex items-center gap-2 text-xs text-muted">
      <MailIcon />
      <a href={`mailto:${office.email}`} className="truncate text-primary hover:underline">
        {office.email}
      </a>
    </div>

    <div className="relative mt-1 overflow-hidden rounded-lg border border-edge">
      <a
        href={office.mapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-2 top-2 z-10 flex items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-[11px] font-medium text-white shadow transition-colors hover:bg-secondary"
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

/* ─── Page ────────────────────────────────────────────────── */
const DOT_FADE =
  "linear-gradient(to bottom, transparent 0, black 160px, black calc(100% - 160px), transparent 100%)";

export default function Contact() {
  return (
    <main className="relative bg-canvas">
      {/* Page-wide dotted texture — fades in at the top and out at the bottom */}
      <div
        aria-hidden
        className="ds-dots pointer-events-none absolute inset-0 z-0 text-edge-2/50"
        style={{ maskImage: DOT_FADE, WebkitMaskImage: DOT_FADE }}
      />

      {/* Hero — globe + intro */}
      <section className="relative z-10 overflow-hidden pb-16 pt-[100px] md:pb-24 md:pt-[120px]">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <Reveal variant="left" className="text-center lg:text-left">
              <div className="mb-6">
                <Badge variant="brand" dot>Contact</Badge>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-fg sm:text-5xl md:text-6xl">
                Let&apos;s Build <span className="text-accent">Together</span>
              </h1>
              <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
                From multiple cities across three continents, we keep you connected to the
                people and partners that move your business forward.
              </p>
              <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {["Mumbai", "Kolkata", "Delhi", "Singapore", "Dubai"].map((city) => (
                  <li
                    key={city}
                    className="rounded-full border border-primary/20 bg-brand-muted px-4 py-1.5 text-sm font-medium text-primary"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="scale">
              <ContactGlobe />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4">
              <Badge variant="brand" dot>Global Offices</Badge>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-fg sm:text-4xl">
              Always Close to Where You Need Us
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted">
              A strong presence across India with growing international operations in
              Singapore and Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
            {/* Headquarters */}
            <Reveal variant="left">
              <div className="flex h-full flex-col rounded-2xl border border-edge bg-surface p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand-muted text-primary">
                    <PinIcon size={26} />
                  </div>
                  <div>
                    <span className="mb-1 inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-bold uppercase tracking-widest text-white">
                      Headquarters
                    </span>
                    <h3 className="text-2xl font-bold text-fg">{headquarters.city}</h3>
                  </div>
                </div>

                <p className="mb-5 whitespace-pre-line border-b border-edge pb-5 text-base leading-relaxed text-muted">
                  {headquarters.address}
                </p>

                <div className="mb-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-primary">
                      <PhoneIcon />
                    </div>
                    <span>{headquarters.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-muted text-primary">
                      <MailIcon />
                    </div>
                    <a href={`mailto:${headquarters.email}`} className="text-primary hover:underline">
                      {headquarters.email}
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[220px] flex-1 overflow-hidden rounded-lg border border-edge">
                  <a
                    href={headquarters.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-white shadow transition-colors hover:bg-secondary"
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
                    className="h-full w-full"
                  />
                </div>
              </div>
            </Reveal>

            {/* Branches 2×2 */}
            <div className="grid h-full grid-cols-1 gap-6 sm:auto-rows-fr sm:grid-cols-2">
              {branches.map((office, i) => (
                <Reveal key={office.city} variant="right" delay={i * 0.08} className="h-full">
                  <BranchCard office={office} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4">
              <Badge variant="brand" dot>Get in Touch</Badge>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-fg sm:text-4xl">Send us a message</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted">
              Tell us about your project or requirement, and the right person on our team
              will get back to you.
            </p>
          </div>

          <div className="grid items-stretch gap-8 lg:grid-cols-5">
            <Reveal variant="left" className="lg:col-span-3">
              <ContactForm />
            </Reveal>

            <Reveal variant="right" className="flex h-full flex-col justify-between gap-6 lg:col-span-2">
              <div>
                <h3 className="mb-4 text-lg font-bold text-fg">Or reach us directly</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:sales@citiuscomm.com"
                    className="flex items-center gap-3 rounded-xl border border-edge bg-surface px-5 py-4 text-sm text-fg transition-colors hover:border-primary/40"
                  >
                    <span className="text-primary"><MailIcon /></span>
                    sales@citiuscomm.com
                  </a>
                  <a
                    href="tel:+912262362154"
                    className="flex items-center gap-3 rounded-xl border border-edge bg-surface px-5 py-4 text-sm text-fg transition-colors hover:border-primary/40"
                  >
                    <span className="text-primary"><PhoneIcon /></span>
                    022 62362154 (Mumbai HQ)
                  </a>
                  <a
                    href="https://www.linkedin.com/company/citiuscommunications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-edge bg-surface px-5 py-4 text-sm text-fg transition-colors hover:border-primary/40"
                  >
                    <span className="text-primary"><LinkedInIcon /></span>
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-primary/20 bg-brand-muted px-5 py-4 text-sm text-muted">
                <strong className="text-fg">Response time:</strong> We typically reply within
                one business day.
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
