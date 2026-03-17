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
    <article className="w-full flex flex-col items-center gap-12 xl:text-center xl:h-103 xl:w-87.5 xl:justify-between xl:gap-0 md:max-xl:grid md:max-xl:grid-cols-[auto_1fr]">
      <div>
        <Image
          src={imageSrc}
          alt=""
          aria-hidden="true"
          width={202}
          height={202}
        />
      </div>

      <div className="flex xl:max-w-87.5 flex-col gap-4 xl:gap-8">
        <h3 className="preset-3 text-designo-grey-dark uppercase">{title}</h3>
        <p className="preset-body text-designo-grey-dark">{description}</p>
      </div>
    </article>
  );
}

export function HomeCoreValues() {
  return (
    <div className="relative px-6 md:px-0">
      <Image
        src="/shapes/bg-pattern-leaf.svg"
        alt=""
        aria-hidden="true"
        width={1609}
        height={950}
        className="pointer-events-none absolute top-31 right-0 hidden h-148.5 w-250 max-w-none rotate-180 xl:block "
      />

      <section
        className="relative max-w-277.75 mx-auto isolate overflow-hidden pb-16 lg:px-0 md:max-xl:pb-16 xl:pb-30 lg:pt-0 text-center md:text-left"
        aria-labelledby="home-core-values-heading"
      >
        <h2 id="home-core-values-heading" className="sr-only">
          Core values
        </h2>

        <div className="relative grid justify-items-center gap-16 xl:grid-cols-3 lg:gap-7.5">
          {coreValues.map((value) => (
            <HomeCoreValueCard key={value.title} {...value} />
          ))}
        </div>
      </section>
    </div>
  );
}
