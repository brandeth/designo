import Image from "next/image";
import Link from "next/link";

type Service = {
  title: string;
  href: string;
  imageSrc: string;
  priority?: boolean;
  cardClassName?: string;
  imageSizes: string;
};

type ServicesProps = {
  excludedHref?: Service["href"];
};

const services: Service[] = [
  {
    title: "WEB DESIGN",
    href: "/web-design",
    imageSrc: "/images/web-design.png",
    priority: true,
    cardClassName: "xl:h-full",
    imageSizes: "(min-width: 1024px) 541px, 100vw",
  },
  {
    title: "APP DESIGN",
    href: "/app-design",
    imageSrc: "/images/app-design.png",
    cardClassName: "xl:h-77",
    imageSizes: "(min-width: 1024px) 541px, 100vw",
  },
  {
    title: "GRAPHIC DESIGN",
    href: "/graphic-design",
    imageSrc: "/images/graphic-design.png",
    cardClassName: "xl:h-77",
    imageSizes: "(min-width: 1024px) 541px, 100vw",
  },
];

function ServiceCard({
  title,
  href,
  imageSrc,
  priority = false,
  cardClassName,
  imageSizes,
}: Service) {
  return (
    <article
      className={`relative isolate min-h-62.5 overflow-hidden rounded-[15px] hover:[&>.home-service-overlay]:bg-designo-peach/80 has-[a:focus-visible]:[&>.home-service-overlay]:bg-designo-peach/80 ${cardClassName ?? ""}`}
    >
      <Image
        src={imageSrc}
        alt=""
        aria-hidden="true"
        fill
        priority={priority}
        sizes={imageSizes}
        className="object-cover"
      />

      <div className="home-service-overlay absolute inset-0 bg-designo-black/35 transition-colors duration-200" />

      <div className="relative flex h-full flex-col items-center justify-center gap-4 md:gap-6 px-6 text-center">
        <h2 className="preset-mobile-heading-2 md:preset-2 text-designo-white uppercase">
          {title}
        </h2>

        <Link
          href={href}
          className="inline-flex items-center gap-4 preset-mobile-link-1 text-designo-white uppercase transition-opacity hover:opacity-80 focus-visible:opacity-80"
        >
          <span>View Projects</span>
          <Image
            src="/icons/right-arrow.svg"
            alt="right arrow"
            aria-hidden="true"
            width={7}
            height={10}
          />
        </Link>
      </div>
    </article>
  );
}

export function Services({ excludedHref }: ServicesProps) {
  const visibleServices = excludedHref
    ? services.filter((service) => service.href !== excludedHref)
    : services;

  const [featuredService, ...secondaryServices] = visibleServices;

  if (!featuredService) {
    return null;
  }

  return (
    // py-30
    <section className=" px-6 md:px-0" aria-labelledby="services-heading">
      <div className="mx-auto max-w-277.75 h-full xl:h-160">
        <h2 id="services-heading" className="sr-only">
          Services
        </h2>

        <div className="grid gap-7.25 lg:h-full xl:grid-cols-2">
          <ServiceCard {...featuredService} />

          <div className="grid gap-6 xl:grid-rows-2">
            {secondaryServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
