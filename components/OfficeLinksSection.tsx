import {
  ImageTextLink,
  type ImageTextLinkProps,
} from "@/components/ImageTextLink";

const officeLinks: ImageTextLinkProps[] = [
  {
    title: "canada",
    imageSrc: "/images/illustration-canada.svg",
    href: "/locations",
  },
  {
    title: "australia",
    imageSrc: "/images/illustration-australia.svg",
    href: "/locations",
  },
  {
    title: "united kingdom",
    imageSrc: "/images/illustration-united-kingdom.svg",
    href: "/locations",
  },
];

export function OfficeLinksSection() {
  return (
    <section
      className="px-6 md:px-0 pt-8 pb-16 md:py-0"
      aria-labelledby="office-links-heading"
    >
      <div className="mx-auto max-w-277.75">
        <h2 id="office-links-heading" className="sr-only">
          Locations
        </h2>

        <div className="grid grid-cols-1 gap-12 md:max-xl:gap-24 xl:grid-cols-3">
          {officeLinks.map((officeLink) => (
            <ImageTextLink key={officeLink.title} {...officeLink} />
          ))}
        </div>
      </div>
    </section>
  );
}
