import type { ReactNode } from "react";

import Image from "next/image";

type DescriptionProps = {
  children: ReactNode;
};

type ImageTextSectionProps = {
  image: string;
  tabletImage?: string;
  desktopImage?: string;
  title: string;
  description?: string;
  imageAlt?: string;
  reverse?: boolean;
  children?: ReactNode;
};

export function Description({ children }: DescriptionProps) {
  return (
    <div className="preset-mobile-body space-y-6 text-designo-grey-dark md:preset-body">
      {children}
    </div>
  );
}

export function ImageTextSection({
  image,
  tabletImage,
  desktopImage,
  title,
  description,
  imageAlt,
  reverse = false,
  children,
}: ImageTextSectionProps) {
  const imageOrderClassName = reverse ? "xl:order-2" : "";
  const contentOrderClassName = reverse ? "xl:order-1" : "";
  const mobileImageClassName = tabletImage
    ? "object-cover md:hidden"
    : desktopImage
      ? "object-cover xl:hidden"
      : "object-cover";
  const tabletImageClassName = desktopImage
    ? "object-cover hidden md:block xl:hidden"
    : "object-cover hidden md:block";
  const desktopImageClassName = "object-cover hidden xl:block ";
  const content =
    children ??
    (description ? (
      <Description>
        <p>{description}</p>
      </Description>
    ) : null);

  return (
    <section className="mx-auto w-full max-w-277.75 overflow-hidden md:rounded-[15px]">
      <div className="grid xl:grid-cols-[1fr_1fr] md:items-stretch">
        <div
          className={`relative h-80 xl:h-160 xl:w-119 ${imageOrderClassName}`.trim()}
        >
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={mobileImageClassName}
          />

          {tabletImage ? (
            <Image
              src={tabletImage}
              alt={imageAlt ?? title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={tabletImageClassName}
            />
          ) : null}

          {desktopImage ? (
            <Image
              src={desktopImage}
              alt={imageAlt ?? title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={desktopImageClassName}
            />
          ) : null}
        </div>

        <div
          className={`relative isolate flex items-center justify-center overflow-hidden bg-designo-peach-extra-light px-6 py-20 text-center sm:px-10 md:px-14 md:py-16 md:text-left lg:px-24 md:h-104 xl:w-158.75 xl:h-full ${contentOrderClassName}`.trim()}
        >
          <Image
            src="/shapes/page-section-alt.svg"
            alt=""
            aria-hidden="true"
            width={876}
            height={252}
            className="pointer-events-none absolute top-0 -left-78 h-auto w-232 max-w-none opacity-30 md:bottom-6.5 md:-left-60 md:top-auto md:w-232 md:opacity-15"
          />

          <div className="relative z-10 flex max-w-81.75 flex-col items-center gap-6 md:max-w-143 md:items-start md:gap-8 md:text-center xl:text-left">
            <h2 className="preset-mobile-heading text-designo-peach md:preset-2 w-full">
              {title}
            </h2>
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
