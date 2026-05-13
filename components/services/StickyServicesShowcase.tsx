"use client";

import Image from "next/image";

type ShowcaseItem = {
  title: string;
  scene: "plans" | "permit" | "adu" | "addition" | "layout" | "facade" | "render" | "submittal" | "engineering" | "residential";
  imageSrc?: string;
};

const SHOWCASE_ITEMS: readonly ShowcaseItem[] = [
  {
    title: "Architectural Plans",
    scene: "plans",
    imageSrc: "/images/services/architectural-plans.webp",
  },
  {
    title: "Permit Plans",
    scene: "permit",
    imageSrc: "/images/services/permit-plans.webp",
  },
  {
    title: "ADU/DADU Design",
    scene: "adu",
    imageSrc: "/images/services/daduesign.webp",
  },
  {
    title: "Additions & Remodels",
    scene: "addition",
    imageSrc: "/images/services/additions-remodels.webp",
  },
  {
    title: "Interior Layout Planning",
    scene: "layout",
    imageSrc: "/images/services/interior-layout-planning.webp",
  },
  {
    title: "Exterior & Facade Improvements",
    scene: "facade",
    imageSrc: "/images/services/exterior-facade-Improvements.webp",
  },
  {
    title: "3D Renderings",
    scene: "render",
    imageSrc: "/images/services/3D-renderings.webp",
  },
  {
    title: "City Permit Submittals",
    scene: "submittal",
    imageSrc: "/images/services/city-permit-submittals.webp",
  },
  {
    title: "Coordination with Engineers",
    scene: "engineering",
    imageSrc: "/images/services/coordination-engineers.webp",
  },
  {
    title: "Residential Design Services",
    scene: "residential",
    imageSrc: "/images/services/desidential-design-services.webp",
  },
] as const;

type Scene = ShowcaseItem["scene"];

function renderScene(scene: Scene, imageSrc?: string, title?: string) {
  if (imageSrc) {
    return (
      <>
        <Image
          src={imageSrc}
          alt={title ?? "Service preview"}
          fill
          sizes="(max-width: 1024px) 72vw, 20vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.06)_100%)]" />
      </>
    );
  }

  switch (scene) {
    case "plans":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#8f8f8f_0%,#4f4f4f_34%,#1a1a1a_100%)]">
          <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="absolute left-[12%] top-[18%] h-[42%] w-[54%] border border-white/60" />
          <div className="absolute left-[23%] top-[28%] h-[18%] w-[22%] border border-white/60" />
          <div className="absolute bottom-[20%] right-[12%] h-[28%] w-[36%] border border-white/60" />
        </div>
      );
    case "permit":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#d1d1d1_0%,#8b8b8b_30%,#171717_100%)]">
          <div className="absolute bottom-0 right-[10%] h-[78%] w-[42%] bg-[#171717]" />
          <div className="absolute bottom-0 left-[16%] h-[58%] w-[42%] bg-[#f3f3f3] shadow-[18px_0_60px_rgba(255,255,255,0.12)]" />
          <div className="absolute left-[30%] top-[34%] h-[18%] w-[2px] bg-brand-black/70" />
        </div>
      );
    case "adu":
      return (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.22),transparent_34%),linear-gradient(180deg,#575757_0%,#1c1c1c_58%,#080808_100%)]">
          <div className="absolute left-[22%] top-[24%] h-[38%] w-[56%] border border-white/60" />
          <div className="absolute left-[20%] top-[24%] h-[2px] w-[60%] rotate-[31deg] bg-white/60 origin-left" />
          <div className="absolute right-[20%] top-[24%] h-[2px] w-[60%] -rotate-[31deg] bg-white/60 origin-right" />
          <div className="absolute bottom-[18%] left-[36%] h-[2px] w-[28%] bg-white/60" />
        </div>
      );
    case "addition":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#9d9d9d_0%,#4d4d4d_38%,#111111_100%)]">
          <div className="absolute inset-x-0 bottom-0 h-[22%] bg-[#0d0d0d]" />
          <div className="absolute left-[18%] bottom-[22%] h-[22%] w-[56%] bg-[#2e2e2e]" />
          <div className="absolute left-[30%] bottom-[32%] h-[5%] w-[24%] bg-[#f5f5f5] opacity-80" />
          <div className="absolute left-[8%] bottom-[22%] h-[34%] w-[8%] rounded-full bg-[#232323] blur-[1px]" />
          <div className="absolute right-[12%] bottom-[22%] h-[38%] w-[9%] rounded-full bg-[#232323] blur-[1px]" />
        </div>
      );
    case "layout":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#c8c8c8_0%,#7c7c7c_26%,#202020_100%)]">
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute left-[14%] top-[18%] h-[56%] w-[68%] border border-white/65" />
          <div className="absolute left-[14%] top-[42%] h-[1px] w-[68%] bg-white/65" />
          <div className="absolute left-[46%] top-[18%] h-[56%] w-[1px] bg-white/65" />
          <div className="absolute left-[22%] bottom-[14%] h-[14%] w-[22%] bg-white/15" />
        </div>
      );
    case "facade":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#9c9c9c_0%,#5b5b5b_30%,#111111_100%)]">
          <div className="absolute bottom-0 right-[14%] h-[72%] w-[38%] bg-[#171717]" />
          <div className="absolute bottom-0 left-[12%] h-[54%] w-[36%] bg-[#efefef]" />
          <div className="absolute bottom-0 right-[14%] h-[72%] w-[38%] opacity-70 [background-image:linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:8px_8px]" />
          <div className="absolute left-[28%] top-[44%] h-[10%] w-[2px] bg-brand-black/60" />
        </div>
      );
    case "render":
      return (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.08),transparent_34%),linear-gradient(180deg,#171717_0%,#0b0b0b_100%)]">
          <div className="absolute left-[12%] top-[20%] h-[58%] w-[76%] bg-[linear-gradient(180deg,#0f0f0f_0%,#141414_100%)]" />
          <div className="absolute left-[24%] bottom-[20%] h-[8%] w-[44%] bg-[#232323]" />
          <div className="absolute left-[36%] bottom-[20%] h-[14%] w-[18%] rounded-full border border-white/15" />
          <div className="absolute left-[32%] top-[34%] h-[1px] w-[20%] bg-white/35" />
          <div className="absolute left-[40%] top-[28%] h-[6%] w-[1px] bg-white/35" />
          <div className="absolute right-[18%] top-[8%] h-[28%] w-[16%] bg-[linear-gradient(180deg,#4a4a4a_0%,#232323_100%)]" />
        </div>
      );
    case "submittal":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#b9b9b9_0%,#6c6c6c_30%,#151515_100%)]">
          <div className="absolute left-[18%] top-[18%] h-[54%] w-[52%] bg-[#f2f2f2]" />
          <div className="absolute left-[24%] top-[26%] h-[1px] w-[36%] bg-brand-black/60" />
          <div className="absolute left-[24%] top-[34%] h-[1px] w-[28%] bg-brand-black/60" />
          <div className="absolute left-[24%] top-[42%] h-[1px] w-[32%] bg-brand-black/60" />
          <div className="absolute bottom-[14%] right-[14%] h-[28%] w-[26%] bg-[#1c1c1c]" />
        </div>
      );
    case "engineering":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#7e7e7e_0%,#323232_36%,#0e0e0e_100%)]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute left-[18%] top-[30%] h-[2px] w-[48%] rotate-[18deg] bg-white/60 origin-left" />
          <div className="absolute left-[34%] top-[38%] h-[2px] w-[34%] -rotate-[28deg] bg-white/60 origin-left" />
          <div className="absolute left-[16%] top-[28%] h-2 w-2 rounded-full bg-white/70" />
          <div className="absolute left-[62%] top-[43%] h-2 w-2 rounded-full bg-white/70" />
          <div className="absolute left-[44%] top-[58%] h-2 w-2 rounded-full bg-white/70" />
        </div>
      );
    case "residential":
      return (
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#9c9c9c_0%,#5e5e5e_32%,#111111_100%)]">
          <div className="absolute inset-x-0 bottom-0 h-[18%] bg-[#0d0d0d]" />
          <div className="absolute left-[22%] bottom-[18%] h-[42%] w-[52%] bg-[#ededed]" />
          <div className="absolute left-[30%] bottom-[50%] h-[16%] w-[32%] bg-[#2a2a2a]" />
          <div className="absolute left-[26%] bottom-[26%] h-[6%] w-[18%] bg-brand-black/80" />
          <div className="absolute right-[24%] bottom-[26%] h-[16%] w-[2px] bg-brand-black/70" />
        </div>
      );
  }
}

export default function StickyServicesShowcase() {
  return (
    <section className="relative w-full border-y border-brand-gray-light/70 bg-brand-white py-10 lg:py-12">
      <div
        className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [touch-action:pan-x] snap-x snap-mandatory scroll-smooth [overscroll-behavior-x:contain]"
        aria-label="Services showcase"
      >
        <div className="flex items-start gap-5 px-5 py-6 md:gap-6 md:px-10 lg:px-20 lg:py-8 xl:px-28">
          {SHOWCASE_ITEMS.map(({ title, scene, imageSrc }) => (
            <article
              key={title}
              className="w-[72vw] shrink-0 snap-start sm:w-[44vw] lg:w-[calc((100vw-12rem-8rem)/5)] xl:w-[calc((100vw-14rem-8rem)/5)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-black [clip-path:inset(0_round_999px_999px_0_0)]">
                {renderScene(scene, imageSrc, title)}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_35%,rgba(0,0,0,0.08)_100%)]" />
              </div>
              <h3 className="mt-5 max-w-[14ch] font-italiana text-[1.9rem] leading-[1.06] text-brand-black lg:text-[2.2rem]">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}