# NetworkHero

Hero section for citiuscomm-website. Replaces the existing `<Hero />`.

## Why this shape

Citiuscomm's positioning, per PRODUCT.md, is one accountable team across the full
infrastructure lifecycle instead of fragmented multi-vendor hand-offs. The hero
draws that argument: around thirty vendor routes arrive from the left, every one
resolves into a single node, and one line carries on and points at the headline.
The visual is the claim, so the copy does not have to shout it.

The layout is asymmetric on purpose. The dense half of the bundle owns the left
of the frame, the copy sits in the right column, and the small orange rule above
the eyebrow picks up exactly where the outgoing line stops.

## Files

```
NetworkHero.tsx        composition, copy, layout, pulse orchestration
NetworkPaths.tsx       routes, convergence brightening, outgoing line and pulse
ConvergenceNode.tsx    node core, breathing, idle pulse, emitted rings
Packet.tsx             one travelling packet
networkGeometry.ts     seeded route and packet generation, palette, viewBox
```

Dependency: `motion` (already in package.json). `NetworkHero` also imports
`@/components/ui/Button`, so CTAs match the rest of the site.

## Install

```tsx
// src/app/page.tsx
import NetworkHero from "@/components/hero-animation/NetworkHero";

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <NetworkHero />
      <Features />
      <AboutSectionOne />
    </main>
  );
}
```

Remove `<Hero />` and its import. The section already carries `id="home"` and the
same `pt-[120px] md:pt-[150px] xl:pt-[170px]` header offset the old hero used, so
nav anchors and the fixed header keep working.

## On-system by default

- palette comes from `tokens.css` values: `#CBD5E1` (`--ds-edge-2`) for routes,
  `#156EB0` (`--ds-brand`) for traffic, `#FF7A00` (`--ds-cta`) for the pulse
- background dots use the site's existing `.ds-dots` utility, not a second grid
- type uses the base `h1` Montserrat treatment plus `text-fg`, `text-muted`,
  `text-faint`
- buttons are the shared `Button` component, `cta` and `ghost` variants

If dark mode ever lands, swap the hex values in `COLORS` for `var(--ds-*)`.

## Copy

Every prop is overridable. Defaults are drawn from real site content:

| Prop | Default |
| --- | --- |
| `eyebrow` | Systems integration · India, SAARC, Southeast Asia |
| `headlineLead` | Many vendors. |
| `headlineMain` | One team accountable for the whole network. |
| `subhead` | designs, deploys and operates network, data centre, cloud and security infrastructure for telecom carriers, banks and government bodies |
| `credibility` | Led by engineers who built and ran networks at Ericsson and Reliance |
| `proof` | 100K+ sites deployed · 13K+ nodes managed · 30+ years operator-side |

The proof line reuses claims already on the site. PRODUCT.md flags the stats as
existing claims to preserve rather than verify, and flags the client logo list as
needing confirmation, so nothing new is asserted here.

## How the motion is split

Motion drives everything stateful or sequenced: node breathing, the halo, an idle
ring every 5 seconds, the pulse cycle as one `animate()` sequence with `at`
offsets, convergence brightness gain, and the drifting particles.

Packet travel uses native SVG animation on `stroke-dashoffset` with
`pathLength={1000}`, so dash units are normalised and no `getTotalLength()`
measurement is needed. Forty simultaneous path traversals driven from JS would be
the single largest scripting cost on the page; this way nothing runs a per-frame
callback. Glow is a wide low-opacity stroke behind a narrow bright one rather than
a blur filter, which would repaint a large region every frame.

## Tuning

| What | Where |
| --- | --- |
| Convergence position | `NODE` in `networkGeometry.ts`; every control point is a fraction of the span, so the bundle reshapes correctly |
| Where the outgoing line stops | `EXIT_X`, currently 785 so it lands about 40px left of the copy column |
| Route count | `routeCount` prop, default 30 |
| Whole bundle shape | `seed` prop, any integer |
| Route visibility | `opacity` in `buildNetwork` |
| Traffic colour mix | `pickColor`, currently 54% blue, 31% white, 15% orange |
| Pulse cadence | the `wait(2600 + Math.random() * 2600)` line in `NetworkHero.tsx` |
| Dropped packets | the `[trunks[4], trunks[19]]` line |
| Alternate routes | `SPUR_PATHS` |

## Accessibility

- `useReducedMotion` removes packets, the pulse cycle and all ambient loops
- the SVG sits in an `aria-hidden` decorative wrapper with `pointer-events: none`
- headline and CTAs are real HTML, focus states come from `Button`
- under `lg` the copy goes full width and the canvas drops to 60% opacity

## Notes

- element ids are prefixed `nh-`; if two heroes ever render on one page, prefix
  per instance, since SVG ids are document scoped
- all geometry comes from a seeded LCG, so SSR and client markup match exactly
- verified: `tsc --noEmit` clean against the repo, 30 trunk routes sampled for
  loops and frame bounds, no route backtracks or leaves the frame
