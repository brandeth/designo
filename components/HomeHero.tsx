"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { LoadAwareImage } from "@/components/LoadAwareImage";
import imageHeroPhone from "@/public/shapes/image-hero-phone.png";

export function HomeHero() {
  return (
    <section className="relative isolate sm:pt-0.75 md:px-0 max-w-277.75 xl:mx-auto xl:w-full">
      <Image
        src="/shapes/bg-pattern-leaf.svg"
        alt=""
        aria-hidden="true"
        width={1006}
        height={594}
        className="pointer-events-none absolute hidden top-80 -left-41.25 z-0 h-148.5 w-251.5 max-w-none xl:block"
      />

      <div className="relative z-10 overflow-hidden md:rounded-[15px] bg-designo-peach md:max-xl:h-210.75 xl:h-160 lg:max-xl:py-15">
        <Image
          src="/shapes/shape-home-section.png"
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute top-1/2 -translate-y-1/2 md:top-1/2 md:max-xl:hidden max-md:left-0 md:right-0 h-auto w-160 max-w-none"
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

        <div className="relative grid md:max-xl:min-h-210.75 items-start pt-20 text-center sm:pt-16 md:max-xl:h-full md:max-xl:grid-rows-[auto_1fr] md:max-xl:justify-items-center md:max-xl:gap-0 lg:h-full xl:grid-cols-[540px_1fr] lg:items-center xl:px-24 lg:pt-0 lg:text-left">
          <div className="z-15 flex flex-col md:max-xl:justify-center items-center gap-10 lg:items-start md:max-xl:gap-4.75 px-6 sm:px-14 xl:px-0">
            <div className="space-y-8.75 md:max-xl:text-center md:max-xl:flex md:max-xl:flex-col">
              <h1 className="mx-auto max-w-135 preset-mobile-heading md:preset-1 text-designo-white md:max-lg:tracking-normal! lg:mx-0">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p className="mx-auto md:max-xl:max-w-111.25 xl:max-w-114.75 self-center md:preset-body preset-mobile-body text-designo-white lg:mx-0">
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
            </div>

            <Button
              variant="secondary"
              href="/about"
              className="md:max-xl:self-center"
            >
              LEARN MORE
            </Button>
          </div>

          <LoadAwareImage
            src={imageHeroPhone}
            alt="phone with designo app on the screen"
            aria-hidden="true"
            width={351}
            height={496}
            sizes="(min-width: 1024px) 351px, (min-width: 640px) 320px, 284px"
            className="relative z-10 hidden md:block h-auto xl:w-156 xl:-right-20 md:max-xl:w-160 md:max-lg:row-start-2 md:max-lg:self-end lg:absolute md:bottom-25 lg:max-xl:-bottom-75 xl:-bottom-60 bottom-0"
          />

          <Image
            src="/shapes/image-phone-mobile.svg"
            alt="phone with designo app on the screen"
            aria-hidden="true"
            width={351}
            height={496}
            sizes="(min-width: 1024px) 351px, (min-width: 640px) 320px, 284px"
            className="relative -z-1 md:hidden block h-auto bottom-0 -mt-8 w-full"
          />
        </div>
      </div>
    </section>
  );
}
