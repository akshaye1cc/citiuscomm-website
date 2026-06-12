"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const ChevronDown = () => (
  <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        sticky
          ? "border-b border-edge bg-white/95 backdrop-blur-md dark:bg-[#071b2f]/95"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">

          {/* Logo */}
          <div className="w-52 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`block w-full ${sticky ? "py-4 lg:py-2" : "py-7"}`}
            >
              <Image
                src="/images/logo/Logo-wbg.svg"
                alt="Citiuscomm"
                width={130}
                height={30}
                className="w-auto dark:hidden"
                priority
              />
              <Image
                src="/images/logo/Logo-dbg.svg"
                alt="Citiuscomm"
                width={130}
                height={30}
                className="hidden w-auto dark:block"
                priority
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">

            {/* Mobile hamburger */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              aria-label="Toggle menu"
              aria-expanded={navbarOpen}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-md p-2 text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
            >
              <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${navbarOpen ? "translate-y-[7px] rotate-45" : "mb-1.5"}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${navbarOpen ? "opacity-0" : "mb-1.5"}`} />
              <span className={`block h-0.5 w-6 bg-current transition-all duration-200 ${navbarOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>

            {/* Nav */}
            <nav
              className={`absolute right-0 top-full z-30 w-[260px] rounded-xl border border-edge bg-canvas px-5 py-4 shadow-xl transition-all duration-200 lg:visible lg:static lg:w-auto lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:opacity-100 ${
                navbarOpen ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:items-center lg:space-x-10">
                {menuData.map((item, index) => (
                  <li key={index} className="group relative">

                    {/* Simple link (no submenu) */}
                    {item.path && !item.submenu ? (
                      <Link
                        href={item.path}
                        onClick={() => setNavbarOpen(false)}
                        className={`flex items-center py-2.5 text-sm font-medium transition-colors duration-150 lg:py-7 ${
                          pathname === item.path
                            ? "text-primary"
                            : "text-muted hover:text-fg dark:hover:text-fg"
                        }`}
                      >
                        {item.title}
                      </Link>

                    ) : item.path && item.submenu ? (
                      <>
                        {/* Desktop: link + hover dropdown */}
                        <Link
                          href={item.path}
                          className={`hidden items-center gap-1 py-2.5 text-sm font-medium transition-colors duration-150 lg:inline-flex lg:py-7 ${
                            pathname.startsWith(item.path)
                              ? "text-primary"
                              : "text-muted hover:text-fg dark:hover:text-fg"
                          }`}
                        >
                          {item.title}
                          <ChevronDown />
                        </Link>
                        {/* Mobile: toggle only */}
                        <button
                          onClick={() => handleSubmenu(index)}
                          className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-muted hover:text-fg lg:hidden dark:hover:text-fg"
                        >
                          {item.title}
                          <ChevronDown />
                        </button>
                      </>

                    ) : (
                      <button
                        onClick={() => handleSubmenu(index)}
                        className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-muted hover:text-fg transition-colors duration-150 lg:inline-flex lg:w-auto lg:gap-1 lg:py-7 dark:hover:text-fg"
                      >
                        {item.title}
                        <ChevronDown />
                      </button>
                    )}

                    {/* Dropdown */}
                    {item.submenu && (
                      <div
                        className={`rounded-xl border border-edge bg-canvas shadow-lg transition-all duration-200 lg:invisible lg:absolute lg:left-0 lg:top-full lg:w-[220px] lg:p-2 lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100 ${
                          openIndex === index ? "block" : "hidden lg:block"
                        }`}
                      >
                        {item.submenu.map((sub, i) => (
                          <Link
                            href={sub.path}
                            key={i}
                            onClick={() => { setNavbarOpen(false); setOpenIndex(-1); }}
                            className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-canvas-subtle hover:text-fg"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}

                  </li>
                ))}
              </ul>
            </nav>

            {/* Theme toggle */}
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <ThemeToggler />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
