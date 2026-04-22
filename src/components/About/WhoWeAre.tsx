import Image from "next/image";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="group relative rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200/60 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

    {/* Accent Line */}
    <div className="absolute inset-y-0 left-0 w-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-all duration-300" />

    {children}
  </div>
);

const AboutSectionOne = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-black/90">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Who We Are
          </h2>
          <p className="text-body-color text-lg">
            We build technology ecosystems that scale with ambition — combining innovation,
            reliability, and deep execution expertise.
          </p>
        </div>

        {/* Vision + Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">

          {/* Vision */}
          <Card>
            <div className="relative h-64">
              <Image src="/images/about/visimage.jpg" alt="Vision" fill className="object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                Our Vision
              </h3>
              <ul className="space-y-4 text-body-color">
                <li>✦ We aim to be a globally trusted technology partner delivering meaningful, long-term impact.</li>
                <li>✦ We bridge cutting-edge innovation with real-world reliability across ICT, 5G, and cybersecurity.</li>
                <li>✦ We are building an ecosystem that enables sustainable growth in a connected future.</li>
              </ul>
            </div>
          </Card>

          {/* Mission */}
          <Card>
            <div className="relative h-64">
              <Image src="/images/about/missionimg.jpg" alt="Mission" fill className="object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                Our Mission
              </h3>
              <ul className="space-y-4 text-body-color">
                <li>✦ We deliver cost-effective, high-quality end-to-end solutions across global markets.</li>
                <li>✦ We invest in talent, partnerships, and technology to stay ahead of industry demands.</li>
                <li>✦ We create impact by building reliable, scalable, and future-ready digital systems.</li>
              </ul>
            </div>
          </Card>

        </div>

        {/* Expertise + Innovation */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">

          <Card>
            <div className="relative h-56">
              <Image src="/images/about/expertise.jpg" alt="Expertise" fill className="object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Our Expertise
              </h3>
              <p className="text-body-color">
                We design and deliver end-to-end solutions across Data Centers, ICT Infrastructure,
                Telecom OSS/BSS, Cybersecurity, and 5G — backed by strong execution in NOC operations
                and project management.
              </p>
            </div>
          </Card>

          <Card>
            <div className="relative h-56">
              <Image src="/images/about/innovation.jpg" alt="Innovation" fill className="object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                Innovation
              </h3>
              <p className="text-body-color">
                We constantly adopt new technologies and smarter methodologies to create solutions
                that are not just advanced — but practical, scalable, and impactful.
              </p>
            </div>
          </Card>

        </div>

        {/* Customer Focus */}
        <Card>
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-full">
              <Image src="/images/about/customer-focus.jpg" alt="Customer Focus" fill className="object-cover group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 text-black dark:text-white">
                Customer Focus
              </h3>
              <p className="text-body-color leading-relaxed">
                We prioritize long-term partnerships over short-term wins. By combining our
                experience, strategic alliances, and execution strength, we deliver seamless
                deployments and integrations that truly move our clients forward.
              </p>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
};

export default AboutSectionOne;