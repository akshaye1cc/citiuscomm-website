import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Partners",   href: "/partners" },
  { label: "Contact Us", href: "/contact" },
];

const solutionLinks = [
  { label: "Services",      href: "/solutions/services" },
  { label: "Industries",    href: "/solutions/industries" },
  { label: "5G & vRAN",     href: "/solutions/services" },
  { label: "Cybersecurity", href: "/solutions/services" },
  { label: "Data Centers",  href: "/solutions/services" },
];

const LinkedInIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.659 1.191-1.595 2.897-1.595 2.117 0 3.704 1.385 3.704 4.362v5.584zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.914.758 1.939 1.715 0 .953-.752 1.715-1.982 1.715zm1.946 11.597H3.392v-9.726h3.891v9.726zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const Footer = () => (
  <footer className="relative z-10 border-t border-edge bg-canvas">
    <div className="container py-14 md:py-16">
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">

        {/* Col 1: Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="mb-5 inline-block">
            <Image
              src="/images/logo/Logo-wbg.svg"
              alt="Citiuscomm"
              width={140}
              height={35}
              className="w-auto dark:hidden"
            />
            <Image
              src="/images/logo/Logo-dbg.svg"
              alt="Citiuscomm"
              width={140}
              height={35}
              className="hidden w-auto dark:block"
            />
          </Link>
          <a
            href="https://www.linkedin.com/company/citiuscommunications/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Citiuscomm on LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-edge text-muted transition-colors hover:border-primary hover:text-primary"
          >
            <LinkedInIcon />
          </a>
        </div>

        {/* Col 2: Company */}
        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-fg">
            Company
          </h4>
          <ul className="space-y-3">
            {companyLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Solutions */}
        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-fg">
            Solutions
          </h4>
          <ul className="space-y-3">
            {solutionLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-fg">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted">
            <li>
              <a href="mailto:sales@citiuscomm.com" className="transition-colors hover:text-primary">
                sales@citiuscomm.com
              </a>
            </li>
            <li>
              <a href="tel:+912262362154" className="transition-colors hover:text-primary">
                022 62362154
              </a>
            </li>
            <li className="leading-relaxed">
              503, Filix Tower, LBS Marg,<br />
              Bhandup (West), Mumbai – 400078.
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-edge pt-8 text-center">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} CITIUSCOMM. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
