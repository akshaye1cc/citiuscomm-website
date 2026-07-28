# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The site serves three audiences without one dominant over the others:

- **Infrastructure buyers/decision-makers** — CTOs, network operations directors, procurement leads, and IT infrastructure heads at telecom carriers, ISPs, banks/financial institutions, government agencies, healthcare organizations, energy/utilities, and other enterprises. They arrive scoping or selecting a systems integrator for a network, data center, cybersecurity, cloud, or managed-services project.
- **OEM/technology partners** — vendors (Cisco, Palo Alto Networks, Dell, HPE, Juniper, Oracle, VMware, and others) evaluating or maintaining Citiuscomm as a channel/delivery partner for their products.
- **Prospective talent** — candidates evaluating Citiuscomm as an employer (the README references an Opportunities/careers section as an intended surface; it does not exist in the current site yet).

## Product Purpose

Citiuscomm is a technology solutions aggregator / systems integrator. It enables telecom operators, ISPs, enterprises, banks, and government organizations to build, modernize, and manage secure, scalable, future-ready digital infrastructure — spanning networking, cybersecurity, cloud, data centers, collaboration, and managed services. Success for the website means converting a qualified infrastructure buyer into a sales conversation (contact form), and credibly presenting the company to OEM partners and candidates.

## Positioning

One accountable team across the full infrastructure lifecycle — from design through deployment and operations — instead of the fragmented, multi-vendor hand-offs typical of the category. This is backed by aggregated OEM partnerships (so the client gets a single point of contact across many vendors' technologies) and by leadership with 30+ years of hands-on operator-side experience (e.g., Ericsson, Reliance), not just integrator/consulting experience.

## Operating Context

- Primary engagement path: browse solutions/industries/partners content → submit the contact form to start a sales conversation.
- Geographic delivery footprint referenced in on-site copy: India, SAARC, and Southeast Asia ("100K+ network sites deployed across India, SAARC, and Southeast Asia").
- Named client sectors on site: telecom carriers (Airtel, Vodafone Idea, TTSL, Nepal Telecom, Metrocast, Fastway, Subisu, Vianet, UCN), banking/financial (ICICI Bank, Kotak Mahindra, YES Bank), broadcast/media (Sony, Discovery, Hathway, Siti Digital, Rakuten), and technology (HPE, Efficient IP, TIBCO).
- Named OEM/technology ecosystem partners on site, grouped by sector: Telecom (Cisco, Juniper Networks, Cambium Networks, Ruckus), Cloud (Oracle, Red Hat, VMware, Arista, F5), Cybersecurity (Palo Alto Networks, CrowdStrike, Thales, Trellix, Rapid7), Enterprise (Dell, HP, SmartBear, EMA), Data Center (Hitachi), Systems Integration (Adopt, Xconics), Fiber/FTTH (Ciena), IoT (Nearby).
- Industries the solutions org explicitly targets (per `/solutions/industries`): Telecom Carriers & ISPs, Data Centers & Cloud, Banking & Financial Services, Government & Public Sector, Healthcare, Energy & Utilities, plus others covered by the page's icon set (education, media, retail, manufacturing).

## Capabilities and Constraints

- Contact form (`/contact`, `POST /api/contact`) currently only validates and logs submissions server-side — it does not send an email or notify anyone yet (open engineering gap, not a product decision).
- No CMS: all copy, client logos, and partner data are hard-coded in `src/data/*` and page files — content updates require a code change and deploy.
- Deployed on Vercel; no custom domain connected yet (site is live on the `*.vercel.app` subdomain only).
- Open/undecided: exact scope of "managed services" and "collaboration" offerings beyond what's listed in Solutions is not detailed anywhere on the current site.

## Brand Commitments

- Name is styled "Citiuscomm" (mixed case) in page copy/metadata; the README uses "CITIUSCOMM" (all caps) — no confirmed single canonical casing yet.
- Brand palette (from `src/styles/tokens.css`): primary blue `#156EB0`, brand navy `#0A2540`, CTA orange `#FF7A00`.

## Evidence on Hand

- Client logos (Airtel, Vodafone Idea, ICICI Bank, Kotak Mahindra, YES Bank, TTSL, HPE, Efficient IP, TIBCO, Nepal Telecom, Metrocast, Fastway, Subisu, Vianet, Sony, Discovery, Hathway, Siti Digital, UCN, Rakuten) and OEM partner logos (Cisco, Juniper, Ciena, Cambium, Ruckus, Dell, HP, Hitachi, Oracle, Red Hat, VMware, Arista, F5, Palo Alto Networks, CrowdStrike, Thales, Trellix, Rapid7, SmartBear, Adopt, Xconics, EMA, Nearby) were real relationships **but the list needs confirmation/updating** — do not assume it is current without checking with the user before publishing changes that lean on it as proof.
- Aggregate stats used as proof points on-site (home hero, Testimonials/metrics section): 100K+ network sites deployed, 13K+ nodes managed, 100M+ subscribers supported, 30+ years experience, 500+ clients served across 15+ industries. Treat these as existing claims to preserve, not to independently verify or embellish.
- No named case studies, dated press mentions, or third-party testimonial quotes exist on the site today — none should be fabricated.
- Partner/client logo links all currently point to `#` (not wired to real URLs).

## Product Principles

1. One accountable team, full lifecycle — never let messaging or design fragment the story into separate disconnected vendors/services; the OEM breadth is a means to a single point of accountability, not the headline itself.
2. Operator-grade credibility over generic agency polish — leadership's hands-on carrier/operator experience (not just integrator experience) is the trust anchor; keep proof points (scale stats, named sectors) concrete and specific rather than vague.
3. Multi-audience without dilution — buyer, OEM-partner, and talent audiences must each find their path, but the buyer's path to the contact form is the primary conversion and should not be diluted to serve the other two.
4. Regional specificity is credibility — India/SAARC/Southeast Asia delivery scope and named regional clients are differentiating evidence; don't generalize this into vague "global" claims.

## Accessibility & Inclusion

No product-specific accessibility requirement has been established beyond standard web accessibility practice.
