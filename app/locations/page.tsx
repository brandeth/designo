import type { Metadata } from "next";
import {
  LocationCard,
  type LocationCardProps,
} from "@/components/LocationCard";

type Country = "canada" | "australia" | "united kingdom";

const locationCoordinates: Record<Country, LocationCardProps["coordinates"]> = {
  canada: [43.6441, -79.3942],
  australia: [-31.4308, 152.9089],
  "united kingdom": [51.6694, -3.8872],
};

const locations: Array<
  Omit<LocationCardProps, "coordinates"> & { country: Country }
> = [
  {
    country: "canada",
    branchName: "designo central office",
    streetAddress: "3886 Wellington Street",
    regionLine: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
  },
  {
    country: "australia",
    branchName: "designo AU office",
    streetAddress: "19 Balonne Street",
    regionLine: "New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@design.au",
  },
  {
    country: "united kingdom",
    branchName: "designo UK office",
    streetAddress: "13 Colorado Way",
    regionLine: "Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@design.uk",
  },
];

export const metadata: Metadata = {
  title: "Locations | Designo",
  description: "Find Designo office locations and contact details.",
};

export default function LocationsPage() {
  return (
    <main className="mx-auto grid w-full max-w-277.75 grid-cols-1 gap-10 bg-background px-0 py-0 text-foreground md:px-0 md:pb-16 md:pt-0 xl:gap-8">
      <h1 className="sr-only">Locations</h1>

      {locations.map((location) => (
        <LocationCard
          key={location.country}
          {...location}
          coordinates={locationCoordinates[location.country]}
        />
      ))}
    </main>
  );
}
