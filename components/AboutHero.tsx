import Image from "next/image";

const description = `Founded in 2010, we are a creative agency that produces lasting results for our clients. We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.`;

export function AboutHero() {
  return (
    <section className="mx-auto w-full max-w-277.75 overflow-hidden md:rounded-[15px]">
      <div className="grid md:grid-cols-1 xl:grid-cols-[1fr_480px] xl:h-120 md:items-stretch">
        <div className="relative h-80 xl:order-2 xl:h-full">
          <Image
            src="/images/image-about-hero-mobile.jpg"
            alt="Team members collaborating at a table"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover md:hidden"
            priority
          />

          <Image
            src="/images/image-about-hero-tablet.jpg"
            alt="Team members collaborating at a table"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover hidden md:block xl:hidden"
            priority
          />

          <Image
            src="/images/image-about-hero-desktop.jpg"
            alt="Team members collaborating at a table"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover hidden xl:block"
            priority
          />
        </div>

        {/* lg:px-24 */}

        <div className="relative isolate flex h-98.75 items-center justify-center overflow-hidden bg-designo-peach px-6 text-center text-designo-white sm:px-10 md:order-1 md:h-78 xl:h-full md:px-14 ">
          <Image
            src="/shapes/bg-pattern-hero-about-mobile.svg"
            alt=""
            aria-hidden="true"
            width={876}
            height={584}
            className="pointer-events-none absolute right-0 h-auto max-w-none md:w-560 md:right-32 md:-top-136 md:opacity-75 -top-36 xl:w-472 xl:-top-38 xl:right-0 xl:opacity-75"
          />

          <div className="relative z-10 flex max-w-81.75 flex-col items-center justify-center gap-6 md:max-w-143.25 xl:max-w-114.5 md:text-center md:items-start xl:text-left">
            <h1 className="preset-mobile-heading md:preset-1 w-full">
              About Us
            </h1>
            <p className="preset-mobile-body md:preset-body">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
