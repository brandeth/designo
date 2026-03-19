import realDealDesktopImage from "@/public/images/image-real-deal-desktop.jpg";
import realDealMobileImage from "@/public/images/image-real-deal-mobile.jpg";
import realDealTabletImage from "@/public/images/image-real-deal-tablet.jpg";
import worldClassTalentDesktopImage from "@/public/images/image-world-class-talent-desktop.jpg";
import worldClassTalentMobileImage from "@/public/images/image-world-class-talent-mobile.jpg";
import worldClassTalentTabletImage from "@/public/images/image-world-class-talent-tablet.jpg";
import { AboutHero } from "@/components/AboutHero";
import { Description, ImageTextSection } from "@/components/ImageTextSection";
import { OfficeLinksSection } from "../../components/OfficeLinksSection";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground mx-auto grid w-full grid-cols-1 gap-y-20 md:max-xl:max-w-172.25 md:max-xl:gap-y-26 xl:max-w-277.75 pb-16">
      <div className="grid md:gap-y-26">
        <AboutHero />
        <ImageTextSection
          title="World-class talent"
          image={worldClassTalentMobileImage}
          tabletImage={worldClassTalentTabletImage}
          desktopImage={worldClassTalentDesktopImage}
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
        <OfficeLinksSection />
      </div>

      <ImageTextSection
        title="The Real Deal"
        image={realDealMobileImage}
        tabletImage={realDealTabletImage}
        desktopImage={realDealDesktopImage}
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
