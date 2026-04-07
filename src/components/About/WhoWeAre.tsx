import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">

          {/* Only Title Center */}
          <h2 className="text-black dark:text-white mb-4 text-center text-3xl font-bold sm:text-4xl md:text-[40px]">
            Who We Are
          </h2>

          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              {/* Paragraph Left */}
              <p className="text-body-color mb-11 text-base leading-relaxed">
                CITIUSCOMM, a Multi-National Company, offers carrier-grade solutions for the dynamically developing Communications and Networking Industry. We provide E2E bespoke turnkey solutions including Product, Service Delivery, NOC Operations, and Project Management — delivering cost-effective and high-quality solutions efficiently and consistently.
              </p>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/company-profile.webp"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/company-profile.webp"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>

          {/* Vision & Mission - Naya Section */}
          <div className="-mx-4 flex flex-wrap mt-16">

            {/* Vision */}
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-10 rounded-lg bg-primary/5 p-8 dark:bg-white/5">
                <h3 className="text-black dark:text-white mb-4 text-2xl font-bold">
                  Vision
                </h3>
                <ul className="text-body-color space-y-3 text-base leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✦</span>
                    We realize the dreams of our clients through long-term relationships.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✦</span>
                    We enhance our creativity by balancing Innovation and Reliability.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✦</span>
                    We want to be the most preferred and admired brand in Technology Aggregation.
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission */}
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-10 rounded-lg bg-primary/5 p-8 dark:bg-white/5">
                <h3 className="text-black dark:text-white mb-4 text-2xl font-bold">
                  Mission
                </h3>
                <p className="text-body-color text-base leading-relaxed">
                  Increase our Coverage and Competency to be the main Solution Provider 
                  that meets all Technological Requirements and contributes to a more 
                  harmonious society.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;