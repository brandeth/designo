import { AboutHero } from "@/components/AboutHero";
import {
  ImageTextLink,
  type ImageTextLinkProps,
} from "@/components/ImageTextLink";
import { Description, ImageTextSection } from "@/components/ImageTextSection";

const locationItems: ImageTextLinkProps[] = [
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

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground mx-auto grid w-full grid-cols-1 gap-y-20 md:max-xl:max-w-172.25 md:max-xl:gap-y-26 xl:max-w-277.75 pb-16">
      <div className="grid md:gap-y-26">
        <AboutHero />
        <ImageTextSection
          title="World-class talent"
          image="/images/image-world-class-talent-mobile.jpg"
          tabletImage="/images/image-world-class-talent-tablet.jpg"
          desktopImage="/images/image-world-class-talent-desktop.jpg"
        >
          <Description>
            <p>
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p>
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand&apos;s story and mission.
            </p>
          </Description>
        </ImageTextSection>
      </div>
      <div>
        <section
          className="px-6 md:px-0 pt-8 pb-16 md:py-0"
          aria-labelledby="image-text-link-heading"
        >
          <div className="mx-auto max-w-277.75">
            <h2 id="image-text-link-heading" className="sr-only">
              Locations
            </h2>

            <div className="grid grid-cols-1 gap-12 md:max-xl:gap-24 xl:grid-cols-3">
              {locationItems.map((location) => (
                <ImageTextLink key={location.title} {...location} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <ImageTextSection
        title="The Real Deal"
        image="/images/image-real-deal-mobile.jpg"
        tabletImage="/images/image-real-deal-tablet.jpg"
        desktopImage="/images/image-real-deal-desktop.jpg"
        reverse
      >
        <Description>
          <p>
            As strategic partners in our clients&apos; businesses, we are ready
            to take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
          </p>
          <p>
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </Description>
      </ImageTextSection>
    </main>
  );
}
