import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`ds-card ds-sheen group relative overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const Point = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-base leading-relaxed text-muted">
    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-muted text-brand">
      <CheckIcon size={12} strokeWidth={2.6} />
    </span>
    {text}
  </li>
);

const WhoWeAre = () => (
  <section id="about" className="relative bg-canvas-subtle py-20 md:py-28 lg:py-32">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="ds-dots absolute inset-0 text-edge-2/90"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      />
    </div>
    <div className="container relative z-10">
      {/* Level-2 anchor for the page outline — the cards below are all h3. */}
      <h2 className="sr-only">Vision and mission</h2>

      {/* Vision + Mission */}
      <div className="mb-10 grid gap-8 md:grid-cols-2">
        <Reveal variant="left">
          <Card className="group/card h-full overflow-hidden">
            <div className="relative h-72 overflow-hidden">
              <Image
                src="/images/about/visimage.jpg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative p-8">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand">
                <CheckIcon size={20} className="text-brand" />
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
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative p-8">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand">
                <ArrowRightIcon size={20} className="text-brand" />
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
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative p-7">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand">
                <span className="text-brand font-bold">⚙️</span>
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
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative p-7">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-muted text-brand">
                <span className="text-brand font-bold">💡</span>
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
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />
            </div>
            <div className="relative flex flex-col justify-center p-8 md:p-10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 w-fit">
                <span className="text-brand font-bold">🤝</span>
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
