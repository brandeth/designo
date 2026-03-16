import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

type FooterProps = {
  className?: string;
};

function PinterestIcon() {
  return (
    <span
      aria-hidden="true"
      className="block size-6 bg-current"
      style={{
        maskImage: "url('/icons/pinterest.svg')",
        WebkitMaskImage: "url('/icons/pinterest.svg')",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}

const navigationLinks = [
  { href: "/company", label: "Our Company" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    renderIcon: () => <Facebook size={24} strokeWidth={1.75} />,
  },
  {
    href: "https://www.youtube.com",
    label: "YouTube",
    renderIcon: () => <Youtube size={24} strokeWidth={1.75} />,
  },
  {
    href: "https://www.twitter.com",
    label: "Twitter",
    renderIcon: () => <Twitter size={24} strokeWidth={1.75} />,
  },
  {
    href: "https://www.pinterest.com",
    label: "Pinterest",
    renderIcon: () => <PinterestIcon />,
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    renderIcon: () => <Instagram size={24} strokeWidth={1.75} />,
  },
];

export function Footer({ className }: FooterProps) {
  const classes = [
    "w-full bg-designo-black px-6 py-16 sm:px-10 sm:py-20 lg:px-0 lg:py-18",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <footer className={classes}>
      <div className="mx-auto flex max-w-[1111px] flex-col gap-10 lg:gap-8">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:text-left">
          <Link href="/" aria-label="Designo home">
            <Image
              src="/designo-logo-with-text-alt.svg"
              alt="Designo"
              width={196}
              height={24}
            />
          </Link>

          <nav
            className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-[42px]"
            aria-label="Footer"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[14px] leading-[14px] font-normal tracking-[2px] uppercase text-designo-white transition-colors duration-200 hover:text-designo-peach-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="h-px w-full bg-designo-white/10" />

        <div className="grid gap-10 text-center text-designo-white sm:gap-7.5 lg:grid-cols-[350px_350px_1fr] lg:items-end lg:text-left">
          <div className="text-preset-body opacity-50">
            <p className="font-bold">Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>

          <div className="text-preset-body opacity-50">
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>

          <div className="flex items-center justify-center gap-4 lg:justify-end">
            {socialLinks.map(({ href, label, renderIcon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="text-designo-peach transition-colors duration-200 hover:text-designo-peach-light"
              >
                {renderIcon()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
