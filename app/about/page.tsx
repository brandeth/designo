import { AboutHero } from "@/components/AboutHero";
import { Description, ImageTextSection } from "@/components/ImageTextSection";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground mx-auto grid w-full grid-cols-1 gap-y-20 md:max-xl:max-w-172.25 md:max-xl:gap-y-26 xl:max-w-277.75">
      <div>
        <AboutHero />
        <ImageTextSection
          title="World-class talent"
          image="/images/image-world-class-talent-mobile.jpg"
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
    </main>
  );
}
