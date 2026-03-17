import Image from "next/image";
import { Button } from "@/components/Button";

export function CtaSection() {
  return (
    <section className="lg:px-0 relative top-16 z-1">
      <div className="relative mx-auto max-w-[1111px] overflow-hidden rounded-[15px] bg-designo-peach md:max-xl:h-[350px] flex justify-center items-center xl:h-73">
        <Image
          src="/shapes/shape-cta-alt.png"
          alt="cta background shape"
          aria-hidden="true"
          width={1401}
          height={467}
          className="pointer-events-none absolute top-0 right-0 h-full w-auto max-w-none md:max-xl:-right-55"
        />

        {/* min-h-94.75 px-6 py-16 sm:px-14 sm:py-14.25 lg:px-24*/}

        <div className="relative z-10 grid gap-10 text-center lg:min-w-230 xl:h-full lg:min-h-0 xl:grid-cols-[1fr_auto] md:max-xl:justify-center lg:items-center xl:gap-24 md:max-xl:gap-8 lg:py-0 lg:text-left">
          <div className="flex flex-col items-center gap-4 md:max-xl:text-center xl:items-start">
            <h2 className="max-w-67 preset-2 leading-10! tracking-normal! text-designo-white">
              Let&apos;s talk about your project
            </h2>

            <p className="md:max-w-110 xl:max-w-114.75 preset-body text-designo-white">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>

          <div className="flex items-center justify-center xl:justify-end">
            <Button variant="secondary">GET IN TOUCH</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
