'use client';

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .footer-container {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>

      <footer className="footer-container relative z-10 border-t border-gray-200 bg-white py-8 dark:border-gray-700 dark:bg-gray-900 md:py-12">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              {/* Left: Logo & Description */}
              <div className="flex flex-col items-start">
                <Link href="/" className="mb-4 inline-block transition-transform hover:scale-105">
                  <Image
                    src="/images/logo/Logo-wbg.svg"
                    alt="CITIUSCOMM Logo"
                    className="w-auto dark:hidden"
                    width={140}
                    height={35}
                  />
                  <Image
                    src="/images/logo/Logo-dbg.svg"
                    alt="CITIUSCOMM Logo"
                    className="hidden w-auto dark:block"
                    width={140}
                    height={35}
                  />
                </Link>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Innovative solutions across industries.
                </p>
              </div>

              {/* Center: Contact Information */}
              <div className="flex flex-col items-start">
                <h3 className="mb-4 font-display text-lg font-bold text-text dark:text-white">
                  Get in Touch
                </h3>
                <div className="space-y-3">
                  {/* Email */}
                  <div className="flex items-center gap-3">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:sales@citiuscomm.com"
                      className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                    >
                      sales@citiuscomm.com
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.49a1 1 0 00.502.756l2.73 1.365a11.902 11.902 0 01-5.571 5.571l-1.365-2.73a1 1 0 00-.756-.502l-7.49-1.498A1 1 0 00.684 9.28V5z"
                      />
                    </svg>
                    <a
                      href="tel:+911140107947"
                      className="text-sm text-gray-600 transition-colors hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                    >
                      +91-1140107947
                    </a>
                  </div>
                </div>
              </div>

              {/* Right: Social Links */}
              <div className="flex flex-col items-start">
                <h3 className="mb-4 font-display text-lg font-bold text-text dark:text-white">
                  Connect With Us
                </h3>
                <a
                  href="https://www.linkedin.com/company/citiuscommunications/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-secondary hover:shadow-lg"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.584zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.914.758 1.939 1.715 0 .953-.752 1.715-1.982 1.715zm1.946 11.597H3.392v-9.726h3.891v9.726zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>

            {/* Bottom: Copyright */}
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} CITIUSCOMM. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute bottom-0 right-0 z-[-1] opacity-10 dark:opacity-5">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="60"
              cy="60"
              r="55"
              stroke="url(#gradient-footer)"
              strokeWidth="2"
              opacity="0.5"
            />
            <circle
              cx="60"
              cy="60"
              r="35"
              stroke="url(#gradient-footer)"
              strokeWidth="1"
              opacity="0.3"
            />
            <defs>
              <linearGradient
                id="gradient-footer"
                x1="0"
                y1="0"
                x2="120"
                y2="120"
              >
                <stop offset="0%" stopColor="#156EB0" />
                <stop offset="100%" stopColor="#FF7A00" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;