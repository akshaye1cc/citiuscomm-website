# Citiuscomm Website

The official Citiuscomm marketing website — a Next.js application covering the company's solutions, industries served, partner ecosystem, leadership, and contact channels.

## About Citiuscomm

Citiuscomm is a technology solutions aggregator and systems integrator delivering carrier-grade telecom and ICT infrastructure — data center, networking, cybersecurity, 5G, and cloud engineering — for telecom operators, ISPs, enterprises, banks, and government organizations across India, SAARC, and Southeast Asia.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/), driven by CSS custom properties for theming
- **Theming:** [next-themes](https://github.com/pacocoursey/next-themes) — light/dark, system-aware
- **3D:** [three.js](https://threejs.org/), [three-globe](https://github.com/vasturiano/three-globe), and [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) for the contact page's interactive globe
- **Email delivery:** [Resend](https://resend.com/) for contact form submissions
- **Deployment:** [Vercel](https://vercel.com/)

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, capability highlights, company overview |
| `/about` | Company story, vision, and mission |
| `/leadership` | Leadership team profiles |
| `/solutions` | Solution practices overview |
| `/solutions/services` | Detailed breakdown of each practice |
| `/solutions/industries` | Industries and sectors served |
| `/partners` | Why partner with Citiuscomm, client logos, and the OEM/partner ecosystem |
| `/contact` | Office locations, contact form, and direct contact channels |

`robots.txt` and `sitemap.xml` are generated at build time from `src/app/robots.ts` and `src/app/sitemap.ts`.

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
git clone https://github.com/akshaye1cc/citiuscomm-website.git
cd citiuscomm-website
npm install
```

### Environment Variables

The contact form (`/contact`) sends submissions through Resend. Create a `.env.local` file with:

```bash
RESEND_API_KEY=your_resend_api_key

# Optional — defaults shown
CONTACT_TO_EMAIL=sales@citiuscomm.com
CONTACT_FROM_EMAIL=website@citiuscomm.com
```

Without `RESEND_API_KEY`, the form returns a clear error asking the visitor to email the sales address directly, rather than falsely reporting success.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
citiuscomm-website/
├── src/
│   ├── app/                   Next.js App Router — pages, layout, API routes
│   │   ├── page.tsx            Home
│   │   ├── about/
│   │   ├── leadership/
│   │   ├── solutions/
│   │   │   ├── services/
│   │   │   └── industries/
│   │   ├── partners/
│   │   ├── contact/
│   │   ├── api/contact/        Contact form submission endpoint
│   │   ├── not-found.tsx       404 page
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── layout.tsx          Root layout, metadata, theme provider
│   ├── components/             Reusable React components
│   │   ├── Header/, Footer/    Site chrome
│   │   ├── Hero/, Features/    Home page sections
│   │   ├── About/               About and leadership page sections
│   │   ├── Contact/             Contact form and globe visualization
│   │   ├── CtaBand/, PageHero/  Shared section components
│   │   └── ui/                  Design-system primitives (Button, Badge, Reveal, etc.)
│   ├── data/                   Static content (industries, solutions, partners, clients)
│   └── styles/
│       ├── index.css            Tailwind entry point and global styles
│       └── tokens.css           Design tokens (color, in light and dark mode)
├── public/                     Static assets (images, logos, favicon)
└── package.json
```

## Design System

Colors, spacing, and typography are driven by CSS custom properties defined in `src/styles/tokens.css`, with light and dark values scoped under `:root` and `.dark`. Tailwind utility classes (`bg-canvas`, `text-fg`, `text-muted`, `text-brand`, and so on) map to these tokens, so components should reference the semantic utilities rather than hard-coded colors.

## Deployment

The site is deployed on Vercel and builds automatically from the `main` branch. Set the environment variables listed above in the Vercel project settings for the contact form to function in production.

## License

Proprietary and confidential. All code and assets are owned by Citiuscomm.
