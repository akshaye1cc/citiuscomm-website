import clients from "@/data/clients";

const track = [...clients, ...clients];

/**
 * Infinite client-logo marquee. Animation lives in global CSS
 * (`.ds-marquee-track`) — pauses on hover, disabled for reduced motion.
 */
const Brands = () => (
  <section className="relative overflow-hidden bg-canvas-subtle py-16 md:py-20">
    <div className="container mb-10 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-faint">
        Trusted by carriers, OEMs, and enterprises
      </p>
    </div>

    <div className="relative">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-canvas-subtle to-transparent md:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-canvas-subtle to-transparent md:w-36" />

      <div className="overflow-hidden">
        <div className="ds-marquee-track">
          {track.map((client, i) => (
            <a
              key={i}
              href={client.url}
              target={client.url !== "#" ? "_blank" : "_self"}
              rel={client.url !== "#" ? "noopener noreferrer" : undefined}
              aria-label={client.title}
              className="mx-2.5 flex h-[88px] w-[176px] shrink-0 items-center justify-center rounded-xl border border-edge bg-surface px-6 py-4 transition-colors duration-200 hover:border-primary/40"
            >
              <img
                src={client.logo}
                alt={client.title}
                className="max-h-11 w-auto select-none object-contain opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 dark:opacity-70 dark:brightness-110"
                draggable={false}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Brands;
