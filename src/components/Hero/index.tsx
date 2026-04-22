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

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) translateX(10px);
            opacity: 0.6;
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

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
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

        .particle {
          animation: particle-float 4s ease-in-out infinite;
        }

        .gradient-text {
          background: linear-gradient(135deg, #156EB0 0%, #FF7A00 50%, #156EB0 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-shift 4s ease infinite;
        }

        .gradient-text-static {
          background: linear-gradient(135deg, #156EB0 0%, #0A2540 100%);
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

        .badge-glow {
          box-shadow: 0 0 20px rgba(21, 110, 176, 0.3);
        }

        .stat-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(21, 110, 176, 0.2);
        }

        .tech-particle-1 {
          animation: particle-float 3s ease-in-out infinite;
          animation-delay: 0s;
        }

        .tech-particle-2 {
          animation: particle-float 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .tech-particle-3 {
          animation: particle-float 5s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-gray-50 pb-16 pt-[120px] dark:from-secondary dark:via-gray-900 dark:to-gray-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Enhanced Background Elements */}
        <div className="absolute right-0 top-0 z-0 opacity-40 lg:opacity-60">
          <div className="hero-blob-1">
            <svg
              width="500"
              height="500"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="250" cy="250" r="220" fill="url(#gradient1)" opacity="0.6" />
              <circle cx="250" cy="250" r="170" fill="url(#gradient2)" opacity="0.4" />
              <circle cx="250" cy="250" r="120" fill="url(#gradient4)" opacity="0.3" />
              <defs>
                <radialGradient id="gradient1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#156EB0" />
                  <stop offset="100%" stopColor="#0A2540" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="gradient2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF7A00" />
                  <stop offset="100%" stopColor="#156EB0" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="gradient4" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#156EB0" />
                  <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="absolute -left-20 bottom-0 z-0 opacity-30 lg:opacity-50">
          <div className="hero-blob-2">
            <svg
              width="450"
              height="450"
              viewBox="0 0 450 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="225" cy="225" r="200" fill="url(#gradient3)" opacity="0.5" />
              <defs>
                <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0A2540" />
                  <stop offset="100%" stopColor="#156EB0" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Floating tech particles */}
        <div className="absolute left-1/4 top-1/4 z-0 opacity-20">
          <div className="tech-particle-1">
            <div className="h-3 w-3 rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="absolute right-1/3 top-1/2 z-0 opacity-20">
          <div className="tech-particle-2">
            <div className="h-2 w-2 rounded-full bg-accent"></div>
          </div>
        </div>
        <div className="absolute left-1/2 bottom-1/3 z-0 opacity-20">
          <div className="tech-particle-3">
            <div className="h-4 w-4 rounded-full bg-primary"></div>
          </div>
        </div>

        <div className="absolute right-1/4 top-1/3 z-0 h-96 w-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/10 blur-3xl opacity-50 dark:opacity-30"></div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[950px] text-center">

                {/* Main Headline */}
                <h1
                  className={`mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl md:leading-tight lg:text-7xl ${
                    isLoaded ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isLoaded ? "0.2s" : "0s",
                  }}
                >
                  <span className="gradient-text">
                    Connecting You, Every Step of the Way.
                  </span>
                </h1>

                {/* Subheading */}
                <p
                  className={`mb-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl md:text-2xl ${
                    isLoaded ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isLoaded ? "0.4s" : "0s",
                  }}
                >
                  Delivering cutting-edge, carrier-grade solutions that fuel the rapid evolution
                  of Communications and Networking Industry
                </p>

                {/* Key Value Proposition */}
                <p
                  className={`mb-10 text-base font-medium text-primary dark:text-primary sm:text-lg ${
                    isLoaded ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isLoaded ? "0.5s" : "0s",
                  }}
                >
                  Data Center • ICT Infrastructure • Cybersecurity • 5G Networks • Cloud Engineering
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

                  {/*CTA Button */}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-transparent px-8 py-4 text-base font-bold text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white md:px-10 md:py-5 md:text-lg"
                  >
                    <span>Explore Solutions</span>
                    <svg
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Enhanced Stats Row with Hover Effects */}
                <div
                  className={`mx-auto mt-16 flex max-w-3xl justify-center md:mt-20 ${
                    isLoaded ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isLoaded ? "0.8s" : "0s",
                  }}
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Stat 1 */}
                    <div className="stat-card group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 sm:p-8">
                      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-accent"></div>
                      <div className="flex flex-col items-center">
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/30 bg-transparent text-accent">
                          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                          100K+
                        </h3>
                        <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 sm:text-base">
                          Network Sites Deployed
                        </p>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                          Supporting 100M+ subscribers
                        </p>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="stat-card group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800 sm:p-8">
                      <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-primary"></div>
                      <div className="flex flex-col items-center">
                        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/30 bg-transparent text-accent">
                          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
                          13K+
                        </h3>
                        <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 sm:text-base">
                          Nodes Managed
                        </p>
                        <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                          Multi-generation networks (2G-5G)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Badges / Partner Logos Preview */}
                <div
                  className={`mt-12 flex flex-col items-center ${
                    isLoaded ? "animate-fade-in-scale" : "opacity-0"
                  }`}
                  style={{
                    animationDelay: isLoaded ? "1s" : "0s",
                  }}
                >
                  <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Trusted by Industry Leaders
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    <div className="cursor-pointer text-xl font-bold text-gray-700 opacity-60 grayscale transition-all duration-300 hover:text-accent hover:opacity-100 hover:grayscale-0 dark:text-gray-300 dark:hover:text-accent">HPE</div>
                    <div className="cursor-pointer text-xl font-bold text-gray-700 opacity-60 grayscale transition-all duration-300 hover:text-accent hover:opacity-100 hover:grayscale-0 dark:text-gray-300 dark:hover:text-accent">Cisco</div>
                    <div className="cursor-pointer text-xl font-bold text-gray-700 opacity-60 grayscale transition-all duration-300 hover:text-accent hover:opacity-100 hover:grayscale-0 dark:text-gray-300 dark:hover:text-accent">Palo Alto</div>
                    <div className="cursor-pointer text-xl font-bold text-gray-700 opacity-60 grayscale transition-all duration-300 hover:text-accent hover:opacity-100 hover:grayscale-0 dark:text-gray-300 dark:hover:text-accent">Oracle</div>
                    <div className="cursor-pointer text-xl font-bold text-gray-700 opacity-60 grayscale transition-all duration-300 hover:text-accent hover:opacity-100 hover:grayscale-0 dark:text-gray-300 dark:hover:text-accent">Juniper</div>
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