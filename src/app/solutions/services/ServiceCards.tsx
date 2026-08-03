"use client";
// Client component on purpose: skeletons.tsx is "use client", and a server parent
// would receive its exported array as a client-reference proxy rather than the array
// itself, making every `serviceSkeletons[i]` undefined at render.
import Reveal from "@/components/ui/Reveal";
import {
  CheckIcon,
  DataCenterIcon,
  NetworkIcon,
  ShieldIcon,
  AntennaIcon,
  CloudIcon,
  OpsIcon,
} from "@/components/ui/icons";
import { pillars } from "@/data/solutions";
import { serviceSkeletons } from "./skeletons";

const icons = [DataCenterIcon, NetworkIcon, ShieldIcon, AntennaIcon, CloudIcon, OpsIcon];

/**
 * The six practices as a single-column stack of full-width horizontal cards:
 * media panel left, copy right, identical orientation and media height on every
 * card. `id`/`scroll-mt-28` stay on each card so the /solutions/services#slug
 * deep links from the footer keep resolving.
 */
export default function ServiceCards() {
  return (
    <div className="space-y-6 md:space-y-8">
      {pillars.map((pillar, i) => {
        const Skeleton = serviceSkeletons[i];
        const Icon = icons[i];
        return (
          <Reveal key={pillar.slug} delay={i * 0.08}>
            <article
              id={pillar.slug}
              className="ds-card scroll-mt-28 p-5 md:p-6"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
                {/* Media panel — own rounding + hairline so it reads as contained */}
                <div className="w-full shrink-0 overflow-hidden rounded-xl border border-edge bg-canvas-muted md:w-[38%]">
                  <div className="aspect-[16/10] w-full">
                    <Skeleton />
                  </div>
                </div>

                {/* Copy */}
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <Icon size={22} className="shrink-0 text-brand" />
                    <h3 className="text-xl font-bold leading-tight text-fg md:text-2xl">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="mb-3 text-base font-semibold leading-relaxed text-brand">
                    {pillar.tagline}
                  </p>

                  <p className="mb-5 text-base leading-relaxed text-muted">
                    {pillar.description}
                  </p>

                  <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                    {pillar.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-brand-muted text-brand">
                          <CheckIcon size={10} strokeWidth={2.5} />
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
