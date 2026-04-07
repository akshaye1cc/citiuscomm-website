'use client';

import clientsData from './ClientsData';

const Brands = () => {
  // Duplicate data for seamless infinite scroll
  const displayBrands = [...clientsData.brandsData, ...clientsData.brandsData];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-light-bg to-white dark:from-gray-900 dark:to-gray-800">
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-12 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-white mb-3">
          Trusted by Industry Leaders
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Partnering with 500+ clients across 15+ industries worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-light-bg via-light-bg/50 to-transparent dark:from-gray-900 dark:via-gray-900/50 dark:to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white via-white/50 to-transparent dark:from-gray-800 dark:via-gray-800/50 dark:to-transparent z-10 pointer-events-none" />

        {/* Marquee Animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            display: flex;
            animation: marquee 100s linear infinite;
            will-change: transform;
          }

          .marquee-track:hover {
            animation-play-state: paused;
          }

          .brand-card {
            flex-shrink-0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 120px;
            min-width: 220px;
            margin-right: 24px;
            padding: 20px;
            border: 1px solid rgba(21, 110, 176, 0.15);
            border-radius: 12px;
            background: white;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .brand-card:hover {
            border-color: #156EB0;
            box-shadow: 0 8px 20px rgba(21, 110, 176, 0.15);
            transform: translateY(-4px);
          }

          .dark .brand-card {
            background: rgba(30, 41, 59, 0.8);
            border-color: rgba(21, 110, 176, 0.2);
          }

          .dark .brand-card:hover {
            background: rgba(30, 41, 59, 1);
            border-color: #156EB0;
            box-shadow: 0 8px 20px rgba(21, 110, 176, 0.2);
          }

          .brand-logo {
            font-size: 3rem;
            transition: transform 0.3s ease;
          }

          .brand-card:hover .brand-logo {
            transform: scale(1.1);
          }

          .brand-name {
            font-size: 1rem;
            font-weight: 500;
            text-align: center;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        `}</style>

        {/* Marquee Content */}
        <div className="overflow-hidden">
          <div className="marquee-track">
            {displayBrands.map((brand, index) => (
              <a
                key={index}
                href={brand.url}
                target={brand.url !== '#' ? '_blank' : '_self'}
                rel={brand.url !== '#' ? 'noopener noreferrer' : ''}
                className="brand-card group dark:dark"
                title={brand.title}
              >
                <div className="flex flex-col items-center gap-2">
                  {/* Logo - supports emoji or image */}
                  {brand.logo.includes('/') || brand.logo.includes('.') ? (
                    <img
                      src={brand.logo}
                      alt={brand.title}
                      className="brand-logo w-16 h-16 object-contain"
                    />
                  ) : (
                    <span className="brand-logo">{brand.logo}</span>
                  )}
                  {/* Brand Name */}
                  <p className="brand-name text-text dark:text-gray-200">
                    {brand.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Stats */}
      <div className="container mx-auto px-4 mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            500+
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Happy Clients
          </p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            15+
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Industries
          </p>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
            10+
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Years Trusted
          </p>
        </div>
      </div>
    </section>
  );
};

export default Brands;