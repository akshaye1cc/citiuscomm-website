'use client';

import partners from '@/data/partners';

const Partners = () => (
  <section className="relative py-16 md:py-20 lg:py-28 bg-canvas">
    <div className="container">

      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
          Our Ecosystem
        </p>
        <h1 className="mb-4 text-3xl font-bold text-fg md:text-4xl lg:text-5xl">
          Built with best-in-class partners
        </h1>
        <p className="text-base text-muted md:text-lg">
          We collaborate with technology, services, and solutions partners across the globe.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 md:gap-8 lg:grid-cols-5">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target={partner.url !== '#' ? '_blank' : '_self'}
            rel={partner.url !== '#' ? 'noopener noreferrer' : ''}
            className="group flex h-36 items-center justify-center rounded-2xl border border-edge bg-surface p-8 transition-colors duration-200 hover:border-primary/40 md:h-40"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105 md:max-h-20"
            />
          </a>
        ))}
      </div>

    </div>
  </section>
);

export default Partners;
