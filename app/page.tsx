import { HomeCoreValues } from "@/components/HomeCoreValues";
import { HomeHero } from "@/components/HomeHero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <HomeHero />
      <Services />
      <HomeCoreValues />
    </main>
  );
}
