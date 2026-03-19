import {
  LocationCard,
  type LocationCardProps,
} from "@/components/LocationCard";

type LocationsListProps = {
  className?: string;
};

const locations: Array<Omit<LocationCardProps, "mapOrder">> = [
  {
    country: "canada",
    branchName: "designo central office",
    streetAddress: "3886 Wellington Street",
    regionLine: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    coordinates: [43.6441, -79.3942],
  },
  {
    country: "australia",
    branchName: "designo AU office",
    streetAddress: "19 Balonne Street",
    regionLine: "New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@design.au",
    coordinates: [-31.4308, 152.9089],
  },
  {
    country: "united kingdom",
    branchName: "designo UK office",
    streetAddress: "13 Colorado Way",
    regionLine: "Rhyd-y-fro SA8 9GA",
    phone: "078 3115 1400",
    email: "contact@design.uk",
    coordinates: [51.6694, -3.8872],
  },
];

export function LocationsList({ className = "" }: LocationsListProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-10 md:gap-y-24 xl:gap-8 ${className}`.trim()}
    >
      {locations.map((location, index) => (
        <LocationCard
          key={location.country}
          {...location}
          mapOrder={index % 2 === 0 ? 2 : undefined}
        />
      ))}
    </div>
  );
}
