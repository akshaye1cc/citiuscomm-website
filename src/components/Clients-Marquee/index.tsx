'use client';

import clients from '@/data/clients';

const track = [...clients, ...clients];

const Brands = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-light-bg to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 mb-12 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-white mb-3">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Partnering with 500+ clients across 15+ industries worldwide
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-20 md:w-36 bg-gradient-to-r from-light-bg to-transparent dark:from-gray-900 z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-36 bg-gradient-to-l from-white to-transparent dark:from-gray-800 z-10 pointer-events-none" />

        <style jsx>{`
          @keyframes marquee {
            from { transform: translate3d(0, 0, 0); }
            to   { transform: translate3d(-50%, 0, 0); }
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 28s linear infinite;
            will-change: transform;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          .logo-card {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 88px;
            width: 176px;
            margin: 0 10px;
            padding: 16px 24px;
            border-radius: 14px;
            background: white;
            border: 1px solid rgba(21, 110, 176, 0.1);
            transition: border-color 0.25s ease, box-shadow 0.25s ease;
          }

          .logo-card:hover {
            border-color: rgba(21, 110, 176, 0.45);
            box-shadow: 0 6px 20px rgba(21, 110, 176, 0.1);
          }

          :global(.dark) .logo-card {
            background: rgba(30, 41, 59, 0.55);
            border-color: rgba(21, 110, 176, 0.15);
          }

          :global(.dark) .logo-card:hover {
            background: rgba(30, 41, 59, 0.9);
            border-color: rgba(21, 110, 176, 0.4);
            box-shadow: 0 6px 20px rgba(21, 110, 176, 0.15);
          }
        `}</style>

        <div className="overflow-hidden">
          <div className="marquee-track">
            {track.map((client, i) => (
              <a
                key={i}
                href={client.url}
                target={client.url !== '#' ? '_blank' : '_self'}
                rel={client.url !== '#' ? 'noopener noreferrer' : ''}
                className="logo-card"
                aria-label={client.title}
              >
                <img
                  src={client.logo}
                  alt={client.title}
                  className="max-h-11 w-auto object-contain select-none"
                  draggable={false}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-3xl">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Industries</p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Years Trusted</p>
        </div>
      </div>
    </section>
  );
};

export default Brands;
