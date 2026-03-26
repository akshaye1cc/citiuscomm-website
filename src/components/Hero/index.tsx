'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            filter: blur(0px);
          }
          50% {
            opacity: 0.8;
            filter: blur(2px);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.6s ease-out forwards;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .hero-blob-1 {
          animation: float 4s ease-in-out infinite;
          animation-delay: 0s;
        }

        .hero-blob-2 {
          animation: float 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .hero-blob-3 {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .gradient-text {
          background: linear-gradient(135deg, #156EB0 0%, #0A2540 50%, #156EB0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }

        .button-glow {
          position: relative;
          overflow: hidden;
        }

        .button-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .button-glow:hover::before {
          opacity: 1;
        }
      `}</style>

      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-b from-white to-gray-50 pb-16 pt-[120px] dark:from-secondary dark:to-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Background animated blobs */}
        <div className="absolute right-0 top-0 z-0 opacity-40 lg:opacity-60">
          <div className="hero-blob-1">
            <svg
              width="450"
              height="450"
              viewBox="0 0 450 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="225"
                cy="225"
                r="200"
                fill="url(#gradient1)"
                opacity="0.6"
              />
              <circle
                cx="225"
                cy="225"
                r="150"
                fill="url(#gradient2)"
                opacity="0.4"
              />
              <defs>
                <radialGradient
                  id="gradient1"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop offset="0%" stopColor="#156EB0" />
                  <stop offset="100%" stopColor="#0A2540" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="gradient2"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop offset="0%" stopColor="#FF7A00" />
                  <stop offset="100%" stopColor="#156EB0" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="absolute -left-20 bottom-0 z-0 opacity-30 lg:opacity-50">
          <div className="hero-blob-2">
            <svg
              width="400"
              height="400"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="url(#gradient3)"
                opacity="0.5"
              />
              <defs>
                <radialGradient
                  id="gradient3"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop offset="0%" stopColor="#0A2540" />
                  <stop offset="100%" stopColor="#156EB0" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="absolute right-1/4 top-1/3 z-0 h-96 w-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/10 blur-3xl opacity-50 dark:opacity-30"></div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[900px] text-center">


                {/* Main Headline */}
                <h1
                  className={`mb-6 text-4xl font-bold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl md:leading-tight lg:text-7xl ${
                    isLoaded ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isLoaded ? "0.2s" : "0s",
                  }}
                >
                  Digital{" "}
                  <span className="gradient-text">Solutions</span>
                  <br />
                  for Modern Business
                </h1>

                {/* Subheading */}
                <p
                  className={`mb-8 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl ${
                    isLoaded ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isLoaded ? "0.4s" : "0s",
                  }}
                >
                  Innovative solutions across multiple industries. Transform your business
                  with CITIUSCOMM's expertise and cutting-edge technology.
                </p>

                {/* CTA Buttons */}
                <div
                  className={`flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 ${
                    isLoaded ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isLoaded ? "0.6s" : "0s",
                  }}
                >
                  {/* Primary CTA Button */}
                  <Link
                    href="/contact"
                    className="button-glow group relative inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-bold text-white transition-all duration-300 ease-in-out hover:bg-secondary hover:shadow-xl hover:shadow-primary/30 md:px-10 md:py-5 md:text-lg"
                  >
                    <span>Get Started</span>
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>

                  {/* Secondary CTA Button */}
                  <Link
                    href="/solutions"
                    className="button-glow group relative inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-white px-8 py-4 text-base font-bold text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/20 dark:bg-gray-800 dark:text-primary dark:hover:bg-primary md:px-10 md:py-5 md:text-lg"
                  >
                    <span>Learn More</span>
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Stats Row */}
                <div
                  className={`mt-16 grid grid-cols-3 gap-4 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 sm:gap-8 sm:p-8 md:mt-20 ${
                    isLoaded ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isLoaded ? "0.8s" : "0s",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                      500+
                    </h3>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                      Happy Clients
                    </p>
                  </div>
                  <div className="flex flex-col items-center border-l border-r border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                      15+
                    </h3>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                      Industries
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold text-primary sm:text-3xl md:text-4xl">
                      10y+
                    </h3>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                      Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
          <div className="flex animate-bounce flex-col items-center gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Scroll to explore
            </span>
            <svg
              className="h-5 w-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;