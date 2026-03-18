import Image from "next/image";

type PageSectionProps = {
  title: string;
  description: string;
};

export function PageSection({ title, description }: PageSectionProps) {
  return (
    <section className="bg-designo-peach md:rounded-[15px] overflow-hidden">
      <div className="relative isolate overflow-hidden px-6  md:max-xl:py-0 md:max-xl:h-63 md:max-xl:items-center md:max-xl:grid text-center text-designo-white sm:px-10 xl:h-63 grid items-center h-80">
        <Image
          src="/shapes/page-section-alt.svg"
          alt=""
          aria-hidden="true"
          width={876}
          height={252}
          className="pointer-events-none absolute top-0 right-0 h-auto w-220 max-w-none"
        />

        <div className="relative z-10 mx-auto flex max-w-81.75 md:max-w-[24rem] flex-col gap-6">
          <h1 className="preset-mobile-heading md:preset-1">{title}</h1>
          <p className="preset-mobile-body md:preset-body">{description}</p>
        </div>
      </div>
    </section>
  );
}
