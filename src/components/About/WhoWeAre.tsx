import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`ds-sheen group relative overflow-hidden rounded-3xl border border-edge/60 bg-gradient-to-br from-surface to-surface/80 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
  <section id="about" className="relative bg-canvas py-16 md:py-20 lg:py-28">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="ds-dots absolute inset-0 text-primary/[0.08] dark:text-brand/[0.1]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      />
    </div>
    <div className="container relative z-10">

      {/* Vision + Mission */}
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        <Reveal variant="left">
          <Card className="group/card h-full overflow-hidden">
            <div className="relative h-72 overflow-hidden">
              <Image
                src="/images/about/visimage.jpg"
                alt="Vision"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative p-8">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <CheckIcon size={20} className="text-primary" />
              </div>
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
          <Card className="group/card h-full overflow-hidden">
            <div className="relative h-72 overflow-hidden">
              <Image
                src="/images/about/missionimg.jpg"
                alt="Mission"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative p-8">
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <ArrowRightIcon size={20} className="text-primary" />
              </div>
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
          <Card className="group/card h-full overflow-hidden">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/images/about/expertise.jpg"
                alt="Expertise"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative p-7">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-primary font-bold">⚙️</span>
              </div>
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
          <Card className="group/card h-full overflow-hidden">
            <div className="relative h-60 overflow-hidden">
              <Image
                src="/images/about/innovation.jpg"
                alt="Innovation"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative p-7">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-primary font-bold">💡</span>
              </div>
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
        <Card className="group/card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-72 overflow-hidden md:h-auto">
              <Image
                src="/images/about/customer-focus.jpg"
                alt="Customer Focus"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative flex flex-col justify-center p-8 md:p-10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 w-fit">
                <span className="text-primary font-bold">🤝</span>
              </div>
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
