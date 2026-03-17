import { HomeCoreValues } from "@/components/HomeCoreValues";
import { HomeHero } from "@/components/HomeHero";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className="bg-background text-foreground grid gap-y-20 w-full grid-cols-1 md:max-xl:gap-y-26 md:max-xl:max-w-172.25 mx-auto">
      <HomeHero />
      <Services />
      <HomeCoreValues />
    </main>
  );
}
