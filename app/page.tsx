import { ContactUsSection } from "@/components/ContactUsSection";
import { HomeCoreValues } from "@/components/HomeCoreValues";
import { HomeHero } from "@/components/HomeHero";
import { HomeServices } from "@/components/HomeServices";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HomeHero />
      <HomeServices />
      <HomeCoreValues />
      <ContactUsSection />
    </main>
  );
}
