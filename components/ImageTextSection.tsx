import type { ReactNode } from "react";

import Image from "next/image";

type DescriptionProps = {
  children: ReactNode;
};

type ImageTextSectionProps = {
  image: string;
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
  title,
  description,
  imageAlt,
  reverse = false,
  children,
}: ImageTextSectionProps) {
  const imageOrderClassName = reverse ? "md:order-2" : "";
  const contentOrderClassName = reverse ? "md:order-1" : "";
  const content =
    children ??
    (description ? (
      <Description>
        <p>{description}</p>
      </Description>
    ) : null);

  return (
    <section className="mx-auto w-full max-w-277.75 overflow-hidden md:rounded-[15px]">
      <div className="grid md:grid-cols-[1fr_1fr] md:items-stretch">
        <div className={`relative h-80 ${imageOrderClassName}`.trim()}>
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div
          className={`relative isolate flex items-center justify-center overflow-hidden bg-designo-peach-extra-light px-6 py-20 text-center sm:px-10 md:px-14 md:py-16 md:text-left lg:px-24 ${contentOrderClassName}`.trim()}
        >
          <Image
            src="/shapes/page-section-alt.svg"
            alt=""
            aria-hidden="true"
            width={876}
            height={252}
            className="pointer-events-none absolute top-0 -left-78 opacity-30 w-232 h-auto max-w-none"
          />

          <div className="relative z-10 flex max-w-81.75 flex-col items-center gap-6 md:max-w-md md:items-start md:gap-8">
            <h2 className="preset-mobile-heading text-designo-peach md:preset-2">
              {title}
            </h2>
            {content}
          </div>
        </div>
      </div>
    </section>
  );
}
