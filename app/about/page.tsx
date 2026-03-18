import { AboutHero } from "@/components/AboutHero";

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground mx-auto grid w-full grid-cols-1 gap-y-20 md:max-xl:max-w-172.25 md:max-xl:gap-y-26 xl:max-w-277.75">
      <AboutHero />
    </main>
  );
}
