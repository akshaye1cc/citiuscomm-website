import Reveal from "@/components/ui/Reveal";
import SectionAccent from "@/components/ui/SectionAccent";
import SectionShell from "@/components/ui/SectionShell";
import { testimonials } from "@/data/testimonials";

/**
 * Brand-filled cards on the white page. The quotes are the one piece of copy
 * that benefits from being lifted off the canvas, and the fill does that on its
 * own now that the section behind it is transparent like every other.
 *
 * Brand rather than navy so this section does not repeat the case-study cards
 * directly above it — the two filled variants alternate down the page.
 */
export default function Testimonials() {
  return (
    <SectionShell aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="mx-auto mb-14 flex max-w-[640px] flex-col items-center text-center">
          <SectionAccent className="mb-6" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-faint">
            In Their Words
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl font-bold leading-tight text-heading sm:text-4xl"
          >
            What our customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.company} delay={Math.min(i, 3) * 0.08} className="h-full">
              <figure className="ds-tile-brand flex h-full flex-col p-7">
                <blockquote className="flex-1 text-base leading-relaxed text-white">
                  {testimonial.review}
                </blockquote>

                <figcaption className="mt-7 border-t border-white/20 pt-6">
                  {/* brightness-0 then invert knocks any mark, colour or line
                      art, to flat white — the only treatment that holds on a
                      saturated fill. */}
                  <img
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    className="mb-5 h-7 w-auto max-w-[140px] object-contain opacity-80 brightness-0 invert"
                    draggable={false}
                  />
                  <p className="text-sm font-semibold text-white/70">{testimonial.personName}</p>
                  <p className="mt-1 text-sm text-white/70">{testimonial.personTitle}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
