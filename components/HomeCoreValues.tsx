import Image from "next/image";

type CoreValue = {
  title: string;
  description: string;
  imageSrc: string;
};

const coreValues: CoreValue[] = [
  {
    title: "Passionate",
    description:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    imageSrc: "/images/passionate.svg",
  },
  {
    title: "Resourceful",
    description:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    imageSrc: "/images/resourceful.svg",
  },
  {
    title: "Friendly",
    description:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    imageSrc: "/images/friendly.svg",
  },
];

function HomeCoreValueCard({ title, description, imageSrc }: CoreValue) {
  return (
    <article className="flex w-full max-w-[350px] flex-col items-center gap-12 text-center lg:h-[412px] lg:w-[350px] lg:justify-between lg:gap-0">
      <div className="flex h-[202px] w-[202px] items-center justify-center">
        <Image
          src={imageSrc}
          alt=""
          aria-hidden="true"
          width={202}
          height={202}
        />
      </div>

      <div className="flex max-w-[350px] flex-col gap-8">
        <h3 className="text-preset-3 text-designo-grey-dark uppercase">
          {title}
        </h3>
        <p className="text-preset-body text-designo-grey-dark">{description}</p>
      </div>
    </article>
  );
}

export function HomeCoreValues() {
  return (
    <div className="relative max-w-277.75 mx-auto">
      <Image
        src="/shapes/bg-pattern-leaf.svg"
        alt=""
        aria-hidden="true"
        width={1609}
        height={950}
        className="pointer-events-none absolute top-31 -right-41 hidden h-[594px] w-[1006px] max-w-none rotate-180 xl:block "
      />

      <section
        className="relative isolate overflow-hidden px-6 py-16 sm:px-10 lg:px-0 lg:pb-30 lg:pt-0"
        aria-labelledby="home-core-values-heading"
      >
        <h2 id="home-core-values-heading" className="sr-only">
          Core values
        </h2>

        <div className="relative grid justify-items-center gap-16 lg:grid-cols-3 lg:gap-[30px]">
          {coreValues.map((value) => (
            <HomeCoreValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>
    </div>
  );
}
