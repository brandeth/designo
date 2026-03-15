import { ContactUsSection } from "@/components/ContactUsSection";
import { HomeHero } from "@/components/HomeHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HomeHero />
      <ContactUsSection />
    </main>
  );
}
