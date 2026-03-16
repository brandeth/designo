"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationLinks = [
  { href: "/company", label: "Our Company" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-designo-white px-6 sm:px-10 md:max-xl:px-6 xl:px-0 py-16">
      <nav
        className="flex items-center justify-between bg-transparent max-w-[1111px] mx-auto"
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

        <div className="flex items-center gap-[42px]">
          {navigationLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[14px] leading-[14px] font-normal tracking-[2px] uppercase transition-colors duration-200 ${
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
