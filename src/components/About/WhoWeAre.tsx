import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { CheckIcon } from "@/components/ui/icons";

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`ds-sheen group relative overflow-hidden rounded-2xl border border-edge bg-surface transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 ${className}`}
  >
    {children}
  </div>
);

const Point = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-base leading-relaxed text-muted">
    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-muted text-primary">
      <CheckIcon size={12} strokeWidth={2.6} />
    </span>
    {text}
  </li>
);

const WhoWeAre = () => (
  <section id="about" className="bg-canvas py-16 md:py-20 lg:py-28">
    <div className="container">

      {/* Vision + Mission */}
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        <Reveal variant="left">
          <Card className="h-full">
            <div className="relative h-64">
              <Image
                src="/images/about/visimage.jpg"
                alt="Vision"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-fg">Our Vision</h3>
              <ul className="space-y-3">
                <Point text="We aim to be a globally trusted technology partner delivering meaningful, long-term impact." />
                <Point text="We bridge cutting-edge innovation with real-world reliability across ICT, 5G, and cybersecurity." />
                <Point text="We are building an ecosystem that enables sustainable growth in a connected future." />
              </ul>
            </div>
          </Card>
        </Reveal>

        <Reveal variant="right">
          <Card className="h-full">
            <div className="relative h-64">
              <Image
                src="/images/about/missionimg.jpg"
                alt="Mission"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="mb-4 text-2xl font-bold text-fg">Our Mission</h3>
              <ul className="space-y-3">
                <Point text="We deliver cost-effective, high-quality end-to-end solutions across global markets." />
                <Point text="We invest in talent, partnerships, and technology to stay ahead of industry demands." />
                <Point text="We create impact by building reliable, scalable, and future-ready digital systems." />
              </ul>
            </div>
          </Card>
        </Reveal>
      </div>

      {/* Expertise + Innovation */}
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        <Reveal delay={0.1}>
          <Card className="h-full">
            <div className="relative h-56">
              <Image
                src="/images/about/expertise.jpg"
                alt="Expertise"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <h3 className="mb-3 text-xl font-bold text-fg">Our Expertise</h3>
              <p className="leading-relaxed text-muted">
                We design and deliver end-to-end solutions across Data Centers, ICT Infrastructure,
                Telecom OSS/BSS, Cybersecurity, and 5G — backed by strong execution in NOC operations
                and project management.
              </p>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.2}>
          <Card className="h-full">
            <div className="relative h-56">
              <Image
                src="/images/about/innovation.jpg"
                alt="Innovation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-7">
              <h3 className="mb-3 text-xl font-bold text-fg">Innovation</h3>
              <p className="leading-relaxed text-muted">
                We constantly adopt new technologies and smarter methodologies to create solutions
                that are not just advanced — but practical, scalable, and impactful.
              </p>
            </div>
          </Card>
        </Reveal>
      </div>

      {/* Customer Focus */}
      <Reveal>
        <Card>
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/about/customer-focus.jpg"
                alt="Customer Focus"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <h3 className="mb-4 text-2xl font-bold text-fg">Customer Focus</h3>
              <p className="leading-relaxed text-muted">
                We prioritize long-term partnerships over short-term wins. By combining our
                experience, strategic alliances, and execution strength, we deliver seamless
                deployments and integrations that truly move our clients forward.
              </p>
            </div>
          </div>
        </Card>
      </Reveal>

    </div>
  </section>
);

export default WhoWeAre;
