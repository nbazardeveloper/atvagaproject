"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import Link from "next/link";

const CATEGORIES = ["All", "Residential", "Commercial", "Hospitality", "3D Renders"] as const;
type Category = (typeof CATEGORIES)[number];

interface Project {
  id: number;
  title: string;
  location: string;
  category: Exclude<Category, "All">;
  sqft: string;
  year: string;
}

const PROJECTS: Project[] = [
  { id: 1, title: "The Meridian Penthouse", location: "New York, NY", category: "Residential", sqft: "4,200", year: "2024" },
  { id: 2, title: "Sonder Boutique Hotel", location: "Miami, FL", category: "Hospitality", sqft: "12,000", year: "2024" },
  { id: 3, title: "Lakeview Corporate HQ", location: "Chicago, IL", category: "Commercial", sqft: "8,500", year: "2023" },
  { id: 4, title: "Pacific Heights Residence", location: "San Francisco, CA", category: "Residential", sqft: "3,100", year: "2023" },
  { id: 5, title: "The Parlor Restaurant", location: "Los Angeles, CA", category: "Hospitality", sqft: "2,400", year: "2023" },
  { id: 6, title: "Harbor View Loft", location: "Boston, MA", category: "Residential", sqft: "1,900", year: "2023" },
  { id: 7, title: "West End Townhouse", location: "Dallas, TX", category: "Residential", sqft: "5,600", year: "2022" },
  { id: 8, title: "Cascade Creative Studio", location: "Seattle, WA", category: "Commercial", sqft: "3,800", year: "2022" },
  { id: 9, title: "Penthouse 3D Concept", location: "New York, NY", category: "3D Renders", sqft: "2,700", year: "2024" },
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
      <section className="w-full bg-brand-black pt-[72px]">
        <SectionWrapper className="py-24 lg:py-36">
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
                  "font-manrope px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-widest transition-colors duration-200 rounded-none",
                  active === cat
                    ? "bg-brand-black text-brand-white"
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
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                    <ImagePlaceholder
                      label={project.title}
                      aspectRatio="aspect-[3/2]"
                    />
                  </div>
                </div>
                <div className="mt-4 flex flex-col">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-italiana text-xl text-brand-black">
                      {project.title}
                    </h2>
                    <span className="shrink-0 font-manrope text-[0.6rem] font-semibold uppercase tracking-widest text-brand-pink">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-1 font-manrope text-xs uppercase tracking-widest text-brand-gray">
                    {project.location}
                  </p>
                  <div className="mt-3 flex items-center justify-between border-t border-brand-gray-light pt-3">
                    <span className="font-manrope text-xs text-brand-gray">
                      {project.sqft} sq ft · {project.category}
                    </span>
                    <span className="font-manrope text-[0.65rem] font-semibold uppercase tracking-widest text-brand-black opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      View →
                    </span>
                  </div>
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
