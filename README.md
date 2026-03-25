# CITIUSCOMM Website

Professional digital solutions and services across multiple industries.

---

## 🚀 About CITIUSCOMM

CITIUSCOMM is a forward-thinking organization providing innovative solutions tailored to meet the unique needs of businesses across various industries. Our expertise spans digital transformation, strategic consulting, and comprehensive service offerings.

**Website:** [Coming Soon]

---

## 📋 Project Overview

This is the official CITIUSCOMM website built with modern web technologies for optimal performance, SEO, and user experience.

### Key Features:

- ✨ **Modern Design** - Built with Tailwind CSS v4 for responsive, beautiful UI
- ⚡ **High Performance** - Next.js with server-side rendering for fast page loads
- 🎯 **SEO Optimized** - Metadata and structured data for search engine visibility
- 📱 **Mobile Responsive** - Perfect on all devices (desktop, tablet, mobile)
- 🔄 **Easy Maintenance** - Component-based architecture for scalability
- 🎨 **Brand Consistent** - Full CITIUSCOMM branding implementation

---

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) - React framework for production
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Package Manager:** [npm](https://www.npmjs.com/)
- **Deployment:** Ready for Vercel, Netlify, or traditional hosting

---

## 📁 Project Structure

```
citiuscomm-website/
├── src/
│   ├── app/                    # Next.js app directory (pages & routing)
│   │   ├── page.tsx            # Homepage
│   │   ├── about/page.tsx       # About page
│   │   ├── solutions/page.tsx   # Solutions page
│   │   ├── opportunities/page.tsx # Careers & opportunities
│   │   ├── contact/page.tsx     # Contact page
│   │   └── layout.tsx           # Main layout wrapper
│   ├── components/             # Reusable React components
│   │   ├── Header/             # Navigation & header
│   │   ├── Footer/             # Footer
│   │   ├── Hero/               # Hero section
│   │   ├── Features/           # Features/services components
│   │   └── ...                 # Other components
│   ├── styles/                 # Global styles & CSS
│   │   └── index.css           # Main stylesheet with Tailwind config
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets (images, favicon, etc.)
├── package.json               # Project dependencies
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

---

## 🎨 Branding Guidelines

### Color Palette

- **Primary Blue:** `#156EB0` - Main brand color for buttons, links, highlights
- **Secondary Dark:** `#0A2540` - Dark backgrounds, hero sections
- **Accent Orange:** `#FF7A00` - Call-to-action buttons, attention-grabbing elements
- **Light Background:** `#F8FAFC` - Default page background
- **Text Dark:** `#111827` - Primary text color

### Typography

- **Display Font:** Montserrat (Bold/Semibold) - Headings, titles, subtitles
- **Body Font:** Inter (Regular) - Paragraphs, body text, content

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm or yarn
- Git
- VS Code (recommended)

### Installation

1. **Clone the Repository**
   ```bash
   git clone git@github.com:akshaye1cc/citiuscomm-website.git
   cd citiuscomm-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - You should see the CITIUSCOMM website!

---

## 📖 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot-reload. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
```
Creates an optimized production build. Output goes to the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Starts a local server with the production build.

### Lint Code
```bash
npm run lint
```
Checks code for errors and style issues.

---

## 📝 Git Workflow & Best Practices

### For Team Members:

#### Before Starting Work
```bash
git pull origin main
npm run dev
```

#### After Completing A Task
```bash
git status                    # See what you changed
git add .                     # Stage all changes
git commit -m "Description"   # Save with clear message
git push origin main          # Send to GitHub
```

#### Good Commit Messages
```bash
git commit -m "Add hero section to homepage"
git commit -m "Create contact form component"
git commit -m "Update brand colors in layout"
git commit -m "Fix responsive styling on mobile"
```

### Important Rules:
- ✅ Always `git pull` before starting work
- ✅ Commit frequently with descriptive messages
- ✅ Test in browser before committing
- ✅ Never commit `node_modules/` folder
- ✅ Don't edit `package.json` unless necessary
- ✅ Keep `npm run dev` running while developing

---

## 🌍 Pages Overview

### Home Page (`/`)
Main landing page with:
- Hero section with headline and CTA
- Company overview snapshot
- Services overview with cards
- Industries served section
- Featured clients/partners
- Call-to-action section

### About Us (`/about`)
Company information including:
- Company story and mission
- Vision statement
- Leadership team profiles
- Company values
- Certifications and achievements

### Solutions (`/solutions`)
Detailed service offerings:
- Service cards with descriptions
- Industry expertise breakdown
- Client portfolio
- Testimonials

### Opportunities (`/opportunities`)
Career and collaboration section:
- Open job positions
- Internship opportunities
- Company culture highlights
- Events and partnerships

### Contact (`/contact`)
Lead generation and support:
- Contact form
- Office locations and phone
- Email contact
- Map integration
- Social media links

---

## 🔧 Customization

### Changing Colors

Edit `/src/styles/index.css` in the `@theme` block:

```css
@theme {
  --color-primary: #156EB0;
  --color-secondary: #0A2540;
  --color-accent: #FF7A00;
  /* ... other colors */
}
```

### Updating Branding

- **Logo:** Replace files in `/public/images/logo/`
- **Favicon:** Replace `/public/favicon.ico`
- **Metadata:** Edit `layout.tsx` metadata export
- **Fonts:** Update imports in `/src/styles/index.css`

### Adding New Pages

1. Create folder: `/src/app/newpage/`
2. Create file: `/src/app/newpage/page.tsx`
3. Add content (follows Next.js routing)
4. Update navigation in Header component

---

## 📚 Component Library

Common components available:

- **Hero** - Large header section with CTA
- **Card** - Service/feature cards with hover effects
- **Button** - Primary, secondary, and accent variants
- **Section** - Container with consistent padding
- **Grid** - Responsive grid layouts
- **Form** - Contact and inquiry forms

See `/src/components/` for complete list.

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Traditional Hosting
```bash
npm run build
# Upload contents of dist/ folder via FTP
```

---

## 🐛 Troubleshooting

### Port Already In Use
```bash
npm run dev -- --port 3001
```

### Dependencies Not Working
```bash
npm install
npm run dev
```

### Changes Not Showing
- Save file (Ctrl+S)
- Hard refresh browser (Ctrl+Shift+R)
- Check dev server is running

---

## 📄 License

This project is proprietary and confidential. All code and assets are owned by CITIUSCOMM.

---

**Built with ❤️ by the CITIUSCOMM Team**
