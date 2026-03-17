"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigationLinks = [
  { href: "/company", label: "Our Company" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

function MobileNavigation({ pathname }: { pathname: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center md:hidden"
        aria-controls="mobile-primary-navigation"
        aria-expanded={isMobileMenuOpen}
        aria-label={
          isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)}
      >
        <Image
          src={
            isMobileMenuOpen ? "/icons/close.svg" : "/icons/hamburger-menu.svg"
          }
          alt=""
          width={24}
          height={20}
          aria-hidden="true"
        />
      </button>

      {isMobileMenuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-23.5 z-10 bg-designo-black/45 md:hidden"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            id="mobile-primary-navigation"
            className="fixed inset-x-0 top-23.5 z-20 md:hidden"
          >
            <div className="w-full bg-designo-black px-6 py-12 sm:px-10">
              <div className="flex flex-col gap-8">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-[24px] leading-6.25 tracking-[2px] uppercase transition-colors duration-200 ${
                        isActive
                          ? "text-designo-peach hover:text-designo-peach-light"
                          : "text-designo-white hover:text-designo-peach-light"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="relative z-50 bg-designo-white px-6 py-8.75 sm:px-10 md:max-xl:px-6 md:py-16 xl:px-0">
      <nav
        className="relative z-20 mx-auto flex max-w-277.75 items-center justify-between bg-transparent"
        aria-label="Primary"
      >
        <Link href="/" aria-label="Designo home">
          <Image
            src="/designo-logo-with-text.svg"
            alt="Designo"
            width={196}
            height={24}
            priority
          />
        </Link>

        <MobileNavigation key={pathname} pathname={pathname} />

        <div className="hidden items-center gap-10.5 md:flex">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[14px] leading-3.5 font-normal tracking-[2px] uppercase transition-colors duration-200 ${
                  isActive
                    ? "text-designo-peach hover:text-designo-peach-light"
                    : "text-designo-grey-dark hover:text-designo-peach"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
