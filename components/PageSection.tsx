import Image from "next/image";

type PageSectionProps = {
  title: string;
  description: string;
};

export function PageSection({ title, description }: PageSectionProps) {
  return (
    <section className="bg-designo-peach">
      <div className="relative isolate overflow-hidden px-6 py-26.25 text-center text-designo-white sm:px-10">
        <Image
          src="/shapes/page-section-alt.svg"
          alt=""
          aria-hidden="true"
          width={876}
          height={252}
          className="pointer-events-none absolute top-0 right-0 h-auto w-220 max-w-none"
        />

        <div className="relative z-10 mx-auto flex max-w-81.75 flex-col gap-6">
          <h1 className="preset-mobile-heading">{title}</h1>
          <p className="preset-mobile-body">{description}</p>
        </div>
      </div>
    </section>
  );
}
