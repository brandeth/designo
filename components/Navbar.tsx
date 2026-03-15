import Image from "next/image";
import Link from "next/link";

const navigationLinks = [
  { href: "/company", label: "Our Company" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="bg-designo-white px-6 py-8 sm:px-10 lg:px-0 lg:py-16">
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
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[14px] leading-[14px] font-normal tracking-[2px] uppercase text-designo-grey-dark"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
