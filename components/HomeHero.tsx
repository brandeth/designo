import Image from "next/image";
import { Button } from "@/components/Button";

export function HomeHero() {
  return (
    <section className="relative isolate px-6 pt-6 sm:px-10 sm:pt-[3px] lg:px-0 max-w-277.75 mx-auto">
      <Image
        src="/shapes/bg-pattern-leaf.svg"
        alt=""
        aria-hidden="true"
        width={1006}
        height={594}
        className="pointer-events-none absolute top-[320px] -left-[165px] z-0 h-[594px] w-[1006px] max-w-none md:max-xl:hidden"
      />

      <div className="relative z-10 overflow-hidden rounded-[15px] bg-designo-peach md:max-xl:h-[843px] xl:h-[640px] md:max-xl:py-[60px]">
        <Image
          src="/shapes/shape-home-section.png"
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute top-0 md:max-xl:hidden right-0 h-auto w-160 max-w-none"
        />

        {/* md:max-xl:[top-1/2] */}
        <Image
          src="/shapes/shape-home-section.png"
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 md:max-xl:block hidden -right-12 h-auto w-160 max-w-none max-xl:hidden"
        />

        <div className="relative grid md:max-xl:min-h-[843px] items-start gap-20 px-6 pt-20 text-center sm:px-14 sm:pt-16 md:max-xl:h-full md:max-xl:min-h-0 md:max-xl:grid-rows-[auto_1fr] md:max-xl:justify-items-center md:max-xl:gap-0 lg:h-full xl:grid-cols-[540px_1fr] lg:items-center xl:px-24 lg:pt-0 lg:text-left">
          <div className="z-10 flex flex-col md:max-xl:justify-center items-center gap-10 lg:items-start">
            <div className="space-y-8.75 md:max-xl:text-center md:max-xl:flex md:max-xl:flex-col">
              <h1 className="mx-auto max-w-[540px] text-preset-1 text-designo-white md:max-lg:tracking-normal! lg:mx-0">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p className="mx-auto md:max-xl:max-w-[445px] xl:max-w-[400px] self-center text-preset-body text-designo-white lg:mx-0">
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, apps, and engaging brand
                experiences. Find out more about our services.
              </p>
            </div>

            <Button variant="secondary" className="md:max-xl:self-center">
              LEARN MORE
            </Button>
          </div>

          <Image
            src="/shapes/image-hero-phone.png"
            alt="phone with designo app on the screen"
            aria-hidden="true"
            width={351}
            height={496}
            sizes="(min-width: 1024px) 351px, (min-width: 640px) 320px, 284px"
            className="relative z-10 h-auto xl:w-[39rem] xl:-right-[5rem] md:max-xl:w-160 md:max-lg:row-start-2 md:max-lg:self-end lg:absolute md:max-xl:-bottom-75 xl:-bottom-[15rem]"
          />
        </div>
      </div>
    </section>
  );
}
