"use client";

import Image from "next/image";
import { useRef } from "react";

type ShowcaseItem = {
  title: string;
  imageSrc: string;
};

const SHOWCASE_ITEMS: readonly ShowcaseItem[] = [
  {
    title: "Design Drawings",
    imageSrc: "/images/services/design-drawings.webp",
  },
  {
    title: "Permit Plans",
    imageSrc: "/images/services/permit-plans.webp",
  },
  {
    title: "ADU/DADU Design",
    imageSrc: "/images/services/daduesign-card.jpg",
  },
  {
    title: "Additions & Remodels",
    imageSrc: "/images/services/additions-remodels.webp",
  },
  {
    title: "Interior Layout Planning",
    imageSrc: "/images/services/interior-layout-planning.webp",
  },
  {
    title: "Exterior & Facade Improvements",
    imageSrc: "/images/services/exterior-facade-Improvements.webp",
  },
  {
    title: "3D Renderings",
    imageSrc: "/images/services/3D-renderings.webp",
  },
  {
    title: "City Permit Submittals",
    imageSrc: "/images/services/city-permit-submittals.webp",
  },
  {
    title: "Coordination with Engineers",
    imageSrc: "/images/services/coordination-engineers.webp",
  },
  {
    title: "Residential Design Services",
    imageSrc: "/images/services/desidential-design-services.webp",
  },
] as const;

export default function StickyServicesShowcase() {
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

    return Array.from(track.querySelectorAll<HTMLElement>("[data-service-card]"));
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
    <section className="relative w-full border-y border-brand-gray-light/70 bg-brand-white py-10 lg:py-12">
      <div aria-label="Services showcase">
        <div
          ref={trackRef}
          className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto px-5 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [touch-action:pan-x] active:cursor-grabbing md:px-10 lg:gap-6 lg:px-20 lg:py-8 xl:px-28"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {SHOWCASE_ITEMS.map(({ title, imageSrc }) => (
            <article
              key={title}
              data-service-card
              className="flex w-[78vw] max-w-[18rem] shrink-0 snap-start flex-col sm:w-[42vw] lg:w-[13.5rem] lg:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-black [clip-path:inset(0_round_999px_999px_0_0)]">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 13.5rem"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0.08)_100%)]" />
              </div>
              <h3 className="mt-5 min-h-[4rem] max-w-[11ch] font-italiana text-[clamp(1.45rem,5vw,1.95rem)] leading-[1.02] text-brand-black sm:min-h-[4.3rem] sm:max-w-[12ch] lg:max-w-[14ch]">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}