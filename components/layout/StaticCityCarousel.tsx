"use client";

import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";

type City = {
  name: string;
  badge: string;
  description: string;
  src?: string;
};

type StaticCityCarouselProps = {
  cities: City[];
};

export default function StaticCityCarousel({ cities }: StaticCityCarouselProps) {
  return (
    <section className="w-full overflow-hidden bg-brand-white py-24 lg:py-32">
      <SectionWrapper className="mb-14">
        <h2 className="text-center text-brand-black">
          Serving Washington State
        </h2>
      </SectionWrapper>

      <div className="flex gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-6 md:px-10 lg:px-20 xl:px-28">
        {cities.map(({ name, badge, description, src }) => (
          <article
            key={name}
            className="w-[72vw] shrink-0 select-none sm:w-[44vw] lg:w-[calc(25%-18px)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray-light">
              <Image
                src={src ?? "/images/serving-state/generic-city-card.jpg"}
                alt={`${name} residential design projects by ATVAGA`}
                fill
                sizes="(max-width: 640px) 72vw, (max-width: 1024px) 44vw, 340px"
                className="pointer-events-none object-cover object-center"
                draggable={false}
              />
              <div className="absolute right-3 top-3 z-10 bg-brand-black/75 px-2.5 py-1">
                <span className="font-manrope text-[0.58rem] font-semibold uppercase tracking-widest text-brand-white">
                  {badge}
                </span>
              </div>
            </div>

            <h3 className="mt-4 font-italiana text-[1.55rem] leading-snug text-brand-black">
              {name}
            </h3>
            <p className="mt-2 font-manrope text-[0.8rem] leading-relaxed text-brand-gray">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}