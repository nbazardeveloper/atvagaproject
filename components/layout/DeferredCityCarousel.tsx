"use client";

import { useEffect, useState } from "react";
import StaticCityCarousel from "@/components/layout/StaticCityCarousel";

type City = {
  name: string;
  badge: string;
  description: string;
  src?: string;
};

type DeferredCityCarouselProps = {
  cities: City[];
};

type CityCarouselComponent = typeof import("@/components/layout/CityCarousel").default;

export default function DeferredCityCarousel({ cities }: DeferredCityCarouselProps) {
  const [CityCarousel, setCityCarousel] = useState<CityCarouselComponent | null>(null);

  useEffect(() => {
    let isMounted = true;

    import("@/components/layout/CityCarousel").then((module) => {
      if (isMounted) {
        setCityCarousel(() => module.default);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!CityCarousel) {
    return <StaticCityCarousel cities={cities} />;
  }

  return <CityCarousel cities={cities} />;
}