"use client";

import Image from "next/image";
import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import Link from "next/link";

const CATEGORIES = ["All", "Residential", "Commercial", "3D Renders"] as const;
type Category = (typeof CATEGORIES)[number];

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  imageSrc: string;
}

const RESIDENTIAL_IMAGE_SRCS = [
  "/images/projects/residential/All-Seasons-Park-City.webp",
  "/images/projects/residential/Almond-Street-Condos.webp",
  "/images/projects/residential/Bothell-WA.webp",
  "/images/projects/residential/Breakwater-Condos-WA.webp",
  "/images/projects/residential/Carlisle-Creek-Condominiums-WA.webp",
  "/images/projects/residential/Cedars-Condominiums-WA.webp",
  "/images/projects/residential/Cooper’s-Bay.webp",
  "/images/projects/residential/Crest View-Condominiums-Park-City-WA.webp",
  "/images/projects/residential/Crest-Road-Ridgewood-NJ.webp",
  "/images/projects/residential/Eaglecrest_Condominiums_1.webp",
  "/images/projects/residential/Eastlake_WA.webp",
  "/images/projects/residential/Fir_Ridge_II_1.webp",
  "/images/projects/residential/Forest_Isle,_Edmonds,_WA_(2).webp",
  "/images/projects/residential/Greenbrooke,_WA_(2).webp",
  "/images/projects/residential/Hidden_Creek,_Park_City,_UT_1.webp",
  "/images/projects/residential/Kirkwood_Condominiums,_Kirkland_WA_(1).webp",
  "/images/projects/residential/Madison_Arbor_2.webp",
  "/images/projects/residential/Modern_Villa_Pena,_Atlanta,_GA_(1).webp",
  "/images/projects/residential/Oakridge_Condominiums__2.webp",
  "/images/projects/residential/Privilege_Resort,_CA.webp",
  "/images/projects/residential/Redmond,_WA.webp",
  "/images/projects/residential/Seattle2_WA.webp",
  "/images/projects/residential/Seattle_WA.webp",
  "/images/projects/residential/Touraine_Condos_WA.webp",
  "/images/projects/residential/Upper_Saddle_River,_NJ.webp",
  "/images/projects/residential/Windsor_Townhomes,_WA_(1).webp",
  "/images/projects/residential/Woodglen_Condominiums_Cam_1.webp",
  "/images/projects/residential/Сanaan_Place,_Allendale,_NJ.webp",
] as const;

const COMMERCIAL_IMAGE_SRCS = [
  "/images/projects/сommercial/Port_of_Edmonds,_WA.webp",
] as const;

const RENDER_IMAGE_SRCS = [
  "/images/projects/3d-renders/Upper_Saddle_River,_NJ.webp",
] as const;

function formatProjectTitle(imageSrc: string) {
  const fileName = imageSrc.split("/").pop()?.replace(/\.webp$/i, "") ?? "Project";

  return fileName
    .replace(/_/g, " ")
    .replace(/\((\d+)\)/g, "")
    .replace(/\bview\s*\d+\b/gi, "")
    .replace(/\b(WA|NJ|UT|GA|CA)\b/g, "")
    .replace(/\s+,/g, ",")
    .replace(/,+/g, ",")
    .replace(/\s{2,}/g, " ")
    .replace(/(^[\s,-]+|[\s,-]+$)/g, "")
    .trim();
}

function buildProjects(
  imageSrcs: readonly string[],
  category: Exclude<Category, "All">,
  startId: number
) {
  return imageSrcs.map((imageSrc, index) => ({
    id: startId + index,
    title: formatProjectTitle(imageSrc),
    category,
    imageSrc,
  }));
}

const PROJECTS: Project[] = [
  ...buildProjects(RESIDENTIAL_IMAGE_SRCS, "Residential", 1),
  ...buildProjects(COMMERCIAL_IMAGE_SRCS, "Commercial", 100),
  ...buildProjects(RENDER_IMAGE_SRCS, "3D Renders", 200),
];

export default function PortfolioClient() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-brand-charcoal pt-[72px]">
        <Image
          src="/images/projects/project-hero.webp"
          alt="ATVAGA portfolio residential design project"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.8)_0%,rgba(7,7,7,0.68)_28%,rgba(7,7,7,0.38)_44%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_38%,rgba(7,7,7,0.22),transparent_34%)]" />
        <SectionWrapper className="relative z-10 py-24 lg:py-36">
          <span className="eyebrow">Our Work</span>
          <h1 className="mt-5 max-w-2xl text-brand-white">
            Portfolio
          </h1>
          <p className="mt-6 max-w-xl font-manrope text-sm leading-relaxed text-brand-white/60">
            Each project in our portfolio represents a unique collaboration —
            a conversation between our designers and the people who will
            inhabit the space.
          </p>
        </SectionWrapper>
      </section>

      {/* ── FILTER + GRID ───────────────────────────────── */}
      <section className="w-full bg-brand-white py-24 lg:py-40">
        <SectionWrapper>
          {/* Filter tabs */}
          <div
            className="mb-12 flex flex-wrap gap-2 border-b border-brand-gray-light pb-6"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={[
                  "font-manrope px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-widest rounded-none",
                  active === cat
                    ? "bg-brand-charcoal text-brand-white"
                    : "bg-transparent text-brand-gray border border-brand-gray-light hover:border-brand-black hover:text-brand-black",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col"
              >
                <div className="overflow-hidden bg-brand-gray-light">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col">
                  <h2 className="font-italiana text-xl text-brand-black">
                    {project.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center font-manrope text-sm text-brand-gray">
              No projects found in this category yet.
            </p>
          )}
        </SectionWrapper>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="w-full bg-brand-gray-light py-24 lg:py-40">
        <SectionWrapper className="flex flex-col items-center text-center">
          <h2 className="max-w-xl text-brand-black">
            Have a Project in Mind?
          </h2>
          <p className="mt-5 max-w-md font-manrope text-sm leading-relaxed text-brand-gray">
            Let&apos;s talk about what you&apos;re envisioning. Our team is ready to
            bring your space to life.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary" scheme="dark">
                Get in Touch
              </Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
