import type { Metadata } from "next";
import { LocationsList } from "@/components/LocationsList";

export const metadata: Metadata = {
  title: "Locations | Designo",
  description: "Find Designo office locations and contact details.",
};

export default function LocationsPage() {
  return (
    <main className="mx-auto grid w-full max-w-277.75 grid-cols-1 gap-10 bg-background px-0 py-0 text-foreground md:px-0 md:pb-16 md:pt-0 xl:gap-8 md:gap-y-24 md:max-xl:max-w-172.25">
      <h1 className="sr-only">Locations</h1>

      <LocationsList />
    </main>
  );
}
