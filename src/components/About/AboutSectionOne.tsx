import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-base font-medium text-body-color lg:text-lg">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary/10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Left Content */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Product Engineering & Technology Innovation"
                paragraph="Citiuscomm pioneers bespoke, end-to-end turnkey solutions that fuel the rapid evolution of the Communications and Networking Industry. With 30 years of expertise, we deliver cost-effective, high-quality solutions with unparalleled efficiency."
                mb="44px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                {/* Key Differentiators */}
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                    Why Choose Citiuscomm
                  </h3>
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="30+ years of telecom expertise" />
                      <List text="100M+ subscribers supported" />
                      <List text="Multi-generation networks (2G-5G)" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="13,000+ nodes managed globally" />
                      <List text="Strategic OEM partnerships" />
                      <List text="End-to-end deployment capability" />
                    </div>
                  </div>
                </div>

                {/* Core Values Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="group rounded-lg border border-primary/20 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-black dark:text-white">
                      Expertise
                    </h4>
                    <p className="text-xs text-body-color">
                      Bespoke end-to-end solutions
                    </p>
                  </div>

                  <div className="group rounded-lg border border-primary/20 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-black dark:text-white">
                      Innovation
                    </h4>
                    <p className="text-xs text-body-color">
                      Cutting-edge methodologies
                    </p>
                  </div>

                  <div className="group rounded-lg border border-primary/20 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="mb-1 text-sm font-bold text-black dark:text-white">
                      Customer Focus
                    </h4>
                    <p className="text-xs text-body-color">
                      Unparalleled efficiency
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Illustration Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[500px] lg:mr-0">
                {/* Stats Grid Overlay on Image */}
                <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 backdrop-blur-sm">
                  {/* Main visual element */}
                  <div className="mb-6 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl"></div>
                      <div className="relative flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-gray-900">
                          <svg className="h-24 w-24 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Stat 1 */}
                    <div className="rounded-xl border border-primary/20 bg-white p-4 text-center shadow-sm dark:bg-gray-800">
                      <div className="mb-2 text-3xl font-bold text-primary">
                        100K+
                      </div>
                      <div className="text-xs font-medium text-body-color">
                        Network Sites
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="rounded-xl border border-primary/20 bg-white p-4 text-center shadow-sm dark:bg-gray-800">
                      <div className="mb-2 text-3xl font-bold text-primary">
                        100M+
                      </div>
                      <div className="text-xs font-medium text-body-color">
                        Subscribers
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="rounded-xl border border-primary/20 bg-white p-4 text-center shadow-sm dark:bg-gray-800">
                      <div className="mb-2 text-3xl font-bold text-primary">
                        13K+
                      </div>
                      <div className="text-xs font-medium text-body-color">
                        Nodes Managed
                      </div>
                    </div>

                    {/* Stat 4 */}
                    <div className="rounded-xl border border-primary/20 bg-white p-4 text-center shadow-sm dark:bg-gray-800">
                      <div className="mb-2 text-3xl font-bold text-primary">
                        30+
                      </div>
                      <div className="text-xs font-medium text-body-color">
                        Years Experience
                      </div>
                    </div>
                  </div>

                  {/* Heritage Badge */}
                  <div className="mt-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-4 text-center">
                    <p className="text-sm font-semibold text-black dark:text-white">
                      Trusted Heritage
                    </p>
                    <p className="mt-1 text-xs text-body-color">
                      Ericsson • Siemens • ZTE Background
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/10 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;