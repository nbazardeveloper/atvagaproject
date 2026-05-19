"use client";

import Image from "next/image";
import { useRef } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

type City = {
  name: string;
  badge: string;
  description: string;
  src?: string;
};

type CityCarouselProps = {
  cities: City[];
};

export default function CityCarousel({ cities }: CityCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pointerStartXRef = useRef(0);
  const scrollStartLeftRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragMovedRef = useRef(false);

  function getCards() {
    const track = trackRef.current;

    if (!track) {
      return [] as HTMLElement[];
    }

    return Array.from(track.querySelectorAll<HTMLElement>("[data-city-card]"));
  }

  function scrollToCard(index: number) {
    const track = trackRef.current;
    const cards = getCards();

    if (!track || cards.length === 0) {
      return;
    }

    const clampedIndex = Math.max(0, Math.min(index, cards.length - 1));
    const card = cards[clampedIndex];

    track.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  }

  function getNearestCardIndex() {
    const track = trackRef.current;
    const cards = getCards();

    if (!track || cards.length === 0) {
      return 0;
    }

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - track.scrollLeft);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;

    if (!track || event.pointerType === "touch") {
      return;
    }

    isDraggingRef.current = true;
    dragMovedRef.current = false;
    pointerStartXRef.current = event.clientX;
    scrollStartLeftRef.current = track.scrollLeft;
    track.style.scrollSnapType = "none";
    track.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;

    if (!track || !isDraggingRef.current) {
      return;
    }

    const deltaX = event.clientX - pointerStartXRef.current;
    dragMovedRef.current = dragMovedRef.current || Math.abs(deltaX) > 6;
    track.scrollLeft = scrollStartLeftRef.current - deltaX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>) {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    isDraggingRef.current = false;
    track.style.scrollSnapType = "x mandatory";

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    if (dragMovedRef.current) {
      scrollToCard(getNearestCardIndex());
    }
  }

  return (
    <section className="w-full overflow-hidden bg-brand-white py-24 lg:py-32">
      <SectionWrapper className="mb-14">
        <h2 className="text-center text-brand-black">
          Serving Washington State
        </h2>
      </SectionWrapper>

      <div
        ref={trackRef}
        className="flex cursor-grab gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] snap-x snap-mandatory [touch-action:pan-x] [&::-webkit-scrollbar]:hidden active:cursor-grabbing md:gap-6 md:px-10 lg:px-20 xl:px-28"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {cities.map(({ name, badge, description, src }) => (
          <article
            key={name}
            data-city-card
            className="w-[72vw] shrink-0 snap-start select-none sm:w-[44vw] lg:w-[calc(25%-18px)]"
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