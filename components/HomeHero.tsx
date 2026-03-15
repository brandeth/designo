import Image from "next/image";
import { Button } from "@/components/Button";

export function HomeHero() {
  return (
    <section className="px-6 pt-6 sm:px-10 sm:pt-[3px] lg:px-0">
      <div className="relative overflow-hidden rounded-[15px] bg-designo-peach lg:h-[640px]">
        <Image
          src="/shapes/shape-home-section.png"
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          className="pointer-events-none absolute top-0 right-0 h-auto w-160 max-w-none"
        />

        <div className="relative grid min-h-[843px] items-start gap-20 px-6 pt-20 text-center sm:px-14 sm:pt-16 lg:h-full lg:min-h-0 lg:grid-cols-[540px_1fr] lg:items-center lg:px-24 lg:pt-0 lg:text-left">
          <div className="z-10 flex flex-col items-center gap-10 lg:items-start">
            <div className="space-y-8.75">
              <h1 className="mx-auto max-w-[540px] text-preset-1 text-designo-white lg:mx-0">
                Award-winning custom designs and digital branding solutions
              </h1>
              <p className="mx-auto max-w-[445px] text-preset-body text-designo-white lg:mx-0">
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </p>
            </div>

            <Button variant="secondary">LEARN MORE</Button>
          </div>

          <Image
            src="/shapes/phone-home-section.png"
            alt="phone with designo app on the screen"
            aria-hidden="true"
            width={351}
            height={496}
            sizes="(min-width: 1024px) 351px, (min-width: 640px) 320px, 284px"
            className="relative z-10 h-auto lg:absolute lg:-right-0.5 lg:bottom-0 w-110"
          />
        </div>
      </div>
    </section>
  );
}
