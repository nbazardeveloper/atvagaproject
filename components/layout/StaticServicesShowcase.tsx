"use client";

import Image from "next/image";
import { SHOWCASE_ITEMS } from "@/components/layout/showcaseItems";

export default function StaticServicesShowcase() {
  return (
    <section className="relative w-full border-y border-brand-gray-light/70 bg-brand-white py-10 lg:py-12">
      <div aria-label="Services showcase">
        <div className="flex gap-5 overflow-x-auto px-5 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-10 lg:gap-6 lg:px-20 lg:py-8 xl:px-28">
          {SHOWCASE_ITEMS.map(({ title, imageSrc }) => (
            <article
              key={title}
              className="flex w-[78vw] max-w-[18rem] shrink-0 flex-col sm:w-[42vw] lg:w-[13.5rem] lg:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-black [clip-path:inset(0_round_999px_999px_0_0)]">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  loading="lazy"
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