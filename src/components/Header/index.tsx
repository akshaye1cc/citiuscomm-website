"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Mobile submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const pathname = usePathname();

  return (
    <header
      className={`header fixed top-0 left-0 z-50 flex w-full items-center transition-all duration-300 ${
        sticky
          ? "bg-white/90 dark:bg-gray-dark backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${
                sticky ? "py-5 lg:py-2" : "py-8"
              }`}
            >
              <Image
                src="/images/logo/Logo-wbg.svg"
                alt="logo"
                width={140}
                height={30}
                className="w-full dark:hidden"
              />
              <Image
                src="/images/logo/Logo-dbg.svg"
                alt="logo"
                width={140}
                height={30}
                className="hidden w-full dark:block"
              />
            </Link>
          </div>

          <div className="flex w-full items-center justify-between px-4">
            
            {/* Mobile Toggle */}
            <button
              onClick={navbarToggleHandler}
              aria-label="Mobile Menu"
              className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                  navbarOpen ? "top-[-8px] -rotate-45" : ""
                }`}
              />
            </button>

            {/* Navbar */}
            <nav
              className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
              }`}
            >
              <ul className="block lg:flex lg:space-x-12">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">

                    {/* Top menu item */}
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`flex items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 ${
                          pathname === menuItem.path
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        {menuItem.title}

                        {menuItem.submenu && (
                          <span className="pl-2">
                            <svg width="20" height="20" viewBox="0 0 25 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.29289 8.8427L12 13.1356L16.2929 8.8427"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        )}
                      </Link>
                    ) : (
                      <p
                        onClick={() => handleSubmenu(index)}
                        className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                      >
                        {menuItem.title}
                      </p>
                    )}

                    {/* Dropdown */}
                    {menuItem.submenu && (
                      <div
                        className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-all duration-300 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 ${
                          openIndex === index ? "block" : "hidden lg:block"
                        }`}
                      >
                        {menuItem.submenu.map((submenuItem, i) => (
                          <Link
                            href={submenuItem.path}
                            key={i}
                            className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                          >
                            {submenuItem.title}
                          </Link>
                        ))}
                      </div>
                    )}

                  </li>
                ))}
              </ul>
            </nav>

            {/* Theme Toggle */}
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