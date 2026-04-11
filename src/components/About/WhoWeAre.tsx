import Image from "next/image";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">

          {/* Page Title */}
          <h2 className="text-black dark:text-white mb-16 text-center text-3xl font-bold sm:text-4xl md:text-[40px]">
            Who We Are
          </h2>

          {/* Row 1: Vision & Mission */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mb-10">

            {/* Vision Card */}
            <div className="rounded-2xl bg-primary/5 dark:bg-white/5 overflow-hidden flex flex-col shadow-sm">
              <div className="relative w-full h-64 sm:h-72">
                <Image
                  src="/images/about/visimage.jpg"
                  alt="Vision - Future Goals"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-black dark:text-white mb-6 text-3xl font-bold">
                  Vision
                </h3>
                <ul className="text-body-color space-y-6 text-lg leading-relaxed">
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">✦</span>
                    To be the world's most trusted technology partner — delivering bespoke, end-to-end solutions that transform businesses and build lasting client relationships across global markets.
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">✦</span>
                    To lead digital transformation by bridging the gap between cutting-edge innovation and real-world reliability — making advanced ICT, 5G, and Cybersecurity solutions accessible to every enterprise.
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">✦</span>
                    To be the most preferred and admired brand in Technology Aggregation — building a world-class ecosystem that empowers organizations to grow sustainably in a connected, intelligent future.
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission Card */}
            <div className="rounded-2xl bg-primary/5 dark:bg-white/5 overflow-hidden flex flex-col shadow-sm">
              <div className="relative w-full h-64 sm:h-72">
                <Image
                  src="/images/about/missionimg.jpg"
                  alt="Mission - Teamwork and Strategy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <h3 className="text-black dark:text-white mb-6 text-3xl font-bold">
                  Mission
                </h3>
                <ul className="text-body-color space-y-6 text-lg leading-relaxed">
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">✦</span>
                    To expand our global coverage and competency by delivering cost-effective, high-quality E2E solutions across Data Center, ICT Infrastructure, Telecom OSS/BSS, Cybersecurity, and 5G — consistently and efficiently.
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">✦</span>
                    To invest in world-class talent, strategic partnerships, and cutting-edge technology — ensuring seamless NOC Operations and expert Project Management that keeps our clients ahead of market demands.
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-primary mt-1 text-xl">✦</span>
                    To contribute to a more harmonious and connected digital society — by being the trusted Solution Provider that meets every Technological Requirement with integrity, innovation, and unparalleled expertise.
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Row 2: Expertise + Innovation */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 mb-10">

            {/* Expertise Card */}
            <div className="rounded-2xl bg-[#eef0f8] dark:bg-white/5 overflow-hidden flex flex-col shadow-sm">
              <div className="relative w-full h-52 sm:h-60">
                <Image
                  src="/images/about/expertise.jpg"
                  alt="Expertise - Data Center and ICT Infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-black dark:text-white mb-4 text-xl font-bold">
                  Expertise
                </h3>
                <p className="text-body-color text-base leading-relaxed">
                  "CITIUSCOMM" pioneers bespoke, end-to-end turnkey solutions encompassing Data Center,
                  ICT Infrastructure, Telecom OSS/BSS, Cybersecurity, 5G coupled with comprehensive
                  Service Delivery, NOC Operations and expert Project Management.
                </p>
              </div>
            </div>

            {/* Innovation Card */}
            <div className="rounded-2xl bg-[#eef0f8] dark:bg-white/5 overflow-hidden flex flex-col shadow-sm">
              <div className="relative w-full h-52 sm:h-60">
                <Image
                  src="/images/about/innovation.jpg"
                  alt="Innovation - Cutting-edge Technologies"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-black dark:text-white mb-4 text-xl font-bold">
                  Innovation
                </h3>
                <p className="text-body-color text-base leading-relaxed">
                  We embrace cutting-edge technologies and methodologies to deliver innovative
                  solutions that drive results.
                </p>
              </div>
            </div>

          </div>

          {/* Row 3: Customer Focus - Full Width */}
          <div className="rounded-2xl bg-[#eef0f8] dark:bg-white/5 overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-2/5 h-60 md:h-auto min-h-[240px]">
                <Image
                  src="/images/about/customer-focus.jpg"
                  alt="Customer Focus - Strategic Partnerships"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 md:p-12 flex flex-col justify-center md:w-3/5">
                <h3 className="text-black dark:text-white mb-4 text-xl font-bold">
                  Customer Focus
                </h3>
                <p className="text-body-color text-base leading-relaxed">
                  "CITIUSCOMM" distinguishes itself by consistently delivering cost-effective,
                  high-quality solutions with unparalleled efficiency. Our extensive network of
                  strategic partnerships, coupled with years of experience and deep industry
                  knowledge, positions us uniquely to orchestrate seamless end-to-end deployments
                  and system integrations for our valued Customers.
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