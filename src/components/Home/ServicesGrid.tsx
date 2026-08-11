import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import SectionShell from "@/components/ui/SectionShell";
import { homeServices } from "@/data/homeServices";

/**
 * The six services as one full-width row of icons — icon and name, nothing
 * else. Reads off homeServices, which is deliberately separate from the
 * `pillars` list behind /solutions/services; see that file for why.
 *
 * Breaks out of `.container` on purpose. Six columns inside a 1200px max-width
 * leaves ~168px each, which is too tight for "IoT & Industrial Automation" on
 * two lines. Running to the viewport with a narrow inset gives the row the full
 * width to distribute across, so the six sit evenly instead of cramped in the
 * middle of the page. The section heading is still centred and still capped —
 * only the row goes wide.
 *
 * Tone is tint, not light: with PartnerMarquee gone the case-study section
 * below is the light band, and two transparent sections in a row merge into the
 * flat white run this whole pass exists to break up.
 */
export default function ServicesGrid() {
  return (
    <SectionShell id="services" tone="tint">
      <div className="px-4 sm:px-6 lg:px-10">
        <SectionTitle
          eyebrow="What We Do"
          title="Six practices, one accountable partner"
          paragraph="Design, sourcing, deployment, integration, and operations — delivered turnkey across the infrastructure our customers run their business on."
          center
          width="640px"
        />

        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
          {homeServices.map((service, i) => (
            <Reveal as="li" key={service.slug} delay={Math.min(i, 5) * 0.06}>
              <Link
                href={`/solutions/services#${service.slug}`}
                className="group flex h-full flex-col items-center rounded-lg px-1 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {/* Sized in CSS rather than by the icon's own `size` prop: the
                    layout box then matches what is drawn, and the 1.8 stroke
                    scales with the viewBox so the weight stays proportional. */}
                <span className="text-brand transition-transform duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 [&_svg]:h-14 [&_svg]:w-14">
                  {service.icon}
                </span>

                <span
                  aria-hidden
                  className="mt-7 block h-px w-6 bg-edge-2 transition-colors duration-300 group-hover:bg-brand"
                />

                <h3 className="mt-5 text-sm font-bold leading-snug text-heading transition-colors duration-200 group-hover:text-brand">
                  {service.name}
                </h3>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </SectionShell>
  );
}
