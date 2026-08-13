import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { homeServices } from "@/data/homeServices";

const FIRST_ROW = homeServices.slice(0, 3);
const SECOND_ROW = homeServices.slice(3, 6);

/**
 * The six services as icon + name + a couple of lines of copy — no fill, no
 * box. Two rows of three: the first left-aligned, the second mirrored to the
 * right. That mirroring is the only layout device carrying the rhythm now that
 * there is no tile to do it — a plain repeated left-aligned grid of six reads
 * as a wall of identical rows, and flipping the second one breaks that without
 * adding a second colour or a container.
 *
 * Reads off homeServices, which is deliberately separate from the `pillars`
 * list behind /solutions/services; see that file for why.
 */
export default function ServicesGrid() {
  return (
    <SectionShell id="services">
      <div className="container">
        <SectionTitle
          eyebrow="What We Do"
          title="Six practices, one accountable partner"
          paragraph="Design, sourcing, deployment, integration, and operations — delivered turnkey across the infrastructure our customers run their business on."
          center
          accent
          width="640px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3 lg:gap-x-12">
          {FIRST_ROW.map((service, i) => (
            <ServiceItem key={service.slug} service={service} delay={i * 0.08} />
          ))}
          {SECOND_ROW.map((service, i) => (
            <ServiceItem
              key={service.slug}
              service={service}
              delay={(i + 3) * 0.08}
              align="right"
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function ServiceItem({
  service,
  delay,
  align = "left",
}: {
  service: (typeof homeServices)[number];
  delay: number;
  align?: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <Reveal delay={delay}>
      <Link
        href={`/solutions/services#${service.slug}`}
        // items-end mirrors the whole column for the second row: icon, heading,
        // and paragraph all move to the right edge together rather than just
        // the text alignment flipping under a still-left icon.
        className={`group flex h-full flex-col rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
          isRight ? "items-end text-right" : "items-start text-left"
        }`}
      >
        <span className="text-brand transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 [&_svg]:h-11 [&_svg]:w-11">
          {service.icon}
        </span>

        <h3 className="mt-5 text-lg font-bold leading-snug text-heading transition-colors duration-200 group-hover:text-brand">
          {service.name}
        </h3>
        <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-muted">
          {service.description}
        </p>
      </Link>
    </Reveal>
  );
}
