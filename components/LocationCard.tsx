"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";

export type LocationCardProps = {
  country: string;
  branchName: string;
  streetAddress: string;
  regionLine: string;
  phone: string;
  email: string;
  coordinates: [number, number];
};

const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const tileLayerAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export function LocationCard({
  country,
  branchName,
  streetAddress,
  regionLine,
  phone,
  email,
  coordinates,
}: LocationCardProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let isUnmounted = false;

    async function initializeMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) {
        return;
      }

      const L = await import("leaflet");

      if (isUnmounted || !mapContainerRef.current) {
        return;
      }

      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        scrollWheelZoom: false,
      }).setView(coordinates, 12);

      L.tileLayer(tileLayerUrl, {
        attribution: tileLayerAttribution,
      }).addTo(map);

      const markerIcon = L.divIcon({
        className: "location-card__marker",
        html: '<span aria-hidden="true"></span>',
        iconSize: [24, 34],
        iconAnchor: [12, 34],
      });

      L.marker(coordinates, { icon: markerIcon }).addTo(map);

      requestAnimationFrame(() => {
        map.invalidateSize();
      });

      mapInstanceRef.current = map;
    }

    void initializeMap();

    return () => {
      isUnmounted = true;
      mapInstanceRef.current?.remove();
      mapInstanceRef.current = null;
    };
  }, [coordinates]);

  return (
    <section className="grid grid-cols-1 overflow-hidden md:grid-cols-2 md:rounded-[15px]">
      <div className="location-card__map h-80 w-full bg-designo-grey-light md:h-81.5">
        <div
          ref={mapContainerRef}
          className="h-full w-full"
          aria-label={`${country} office map`}
        />
      </div>

      <div className="relative flex h-98.5 items-center justify-center bg-designo-peach-extra-light px-6 text-center md:h-81.5 md:px-14 md:text-left xl:px-24">
        <Image
          src="/shapes/bg-pattern-location-card-mobile-alt.svg"
          alt=""
          aria-hidden="true"
          width={375}
          height={394}
          className="pointer-events-none absolute left-0 top-0 max-w-none [-webkit-mask-image:linear-gradient(to_bottom,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_100%)] [mask-image:linear-gradient(to_bottom,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0)_100%)]"
        />

        <div className="relative z-10 grid w-full max-w-82 gap-6 md:max-w-none md:grid-cols-2 md:items-start md:gap-12">
          <div className="space-y-6">
            <h2 className="preset-mobile-heading text-designo-peach capitalize">
              {country}
            </h2>

            <address className="preset-mobile-body not-italic text-designo-grey-dark">
              <p className="font-bold capitalize">{branchName}</p>
              <p>{streetAddress}</p>
              <p>{regionLine}</p>
            </address>
          </div>

          <div className="preset-mobile-body text-designo-grey-dark md:self-center">
            <p className="font-bold">Contact</p>
            <p>P: {phone}</p>
            <p>M: {email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
