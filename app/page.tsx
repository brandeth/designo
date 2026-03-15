import { ContactUsSection } from "@/components/ContactUsSection";
import { HomeHero } from "@/components/HomeHero";
import { HomeServices } from "@/components/HomeServices";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HomeHero />
      <HomeServices />
      <ContactUsSection />
    </main>
  );
}
