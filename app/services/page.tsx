import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { buildBreadcrumbSchema, servicesMetadata } from "@/app/metadata";

export const metadata: Metadata = servicesMetadata;

const SERVICES = [
  {
    title: "Full-Service Interior Design",
    description:
      "A complete end-to-end design journey — from initial concept and space planning through material selection, procurement, and final installation.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 10H30" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 10V30" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Space Planning",
    description:
      "Optimised floor plans that respect how you live and work. We balance flow, proportion, and function to make every square foot count.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 28L4 4L28 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        <path d="M4 20L12 12L18 18L24 10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "3D Rendering & Visualisation",
    description:
      "Photorealistic renders and walkthroughs that let you see — and feel — your space before a single item is purchased or a single wall is painted.",
    href: "/3d-rendering",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 2V30M2 10L30 22M2 22L30 10" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Furniture Curation",
    description:
      "We source, specify, and procure furniture, lighting, and accessories from our network of premium trade suppliers — tailored to your budget and aesthetic.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M4 22H28V26H4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 22V16H24V22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 18H8M24 18H28" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Project Management",
    description:
      "Contractor coordination, permit navigation, timeline management — we handle the complexity so your renovation stays on schedule and on budget.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 12H28" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 4V8M22 4V8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 18L14 22L22 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Styling & Decor",
    description:
      "The finishing layer that makes a design breathe: art placement, textiles, greenery, and the editorial eye that ties everything together.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 4C16 4 20 10 20 16S16 28 16 28M16 4C16 4 12 10 12 16S16 28 16 28" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M4 16H28" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ATVAGA Services",
  description: servicesMetadata.description,
  url: "https://atvagadesigns.com/services",
  isPartOf: {
    "@id": "https://atvagadesigns.com#website",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: SERVICES.map(({ title, description }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: title,
      description,
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={[
          servicesPageSchema,
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      {/* ── PAGE HERO ───────────────────────────────────── */}
      <section className="w-full bg-brand-white pt-[72px]">
        <SectionWrapper className="py-24 lg:py-36">
          <span className="eyebrow">What We Offer</span>
          <h1 className="mt-5 max-w-2xl text-brand-black">
            Services
          </h1>
          <p className="mt-6 max-w-xl font-manrope text-sm leading-relaxed text-brand-gray">
            Whether you need full-scope design for a new build or a targeted
            refresh of a single room, ATVAGA Designs has a service to match
            your ambition.
          </p>
        </SectionWrapper>
      </section>

      {/* ── SERVICE GRID ────────────────────────────────── */}
      <section className="w-full bg-brand-gray-light py-16 lg:py-24">
        <SectionWrapper>
          <div className="grid grid-cols-1 gap-0 border border-brand-gray/20 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ title, description, icon, href }, i) => (
              <article
                key={title}
                className={[
                  "group flex flex-col border-brand-gray/20 bg-brand-gray-light p-10 hover:bg-brand-black",
                  i % 3 !== 2 ? "lg:border-r" : "",
                  i < 3 ? "border-b" : "",
                  i % 2 === 0 ? "md:border-r" : "",
                ].join(" ")}
              >
                <div className="mb-6 text-brand-pink">
                  {icon}
                </div>
                <h2 className="font-italiana mb-3 text-xl text-brand-black group-hover:text-brand-white">
                  {title}
                </h2>
                <p className="font-manrope text-sm leading-relaxed text-brand-gray group-hover:text-brand-white/60">
                  {description}
                </p>
                <div className="mt-6">
                  <Link
                    href={href ?? "/contact"}
                    className="font-manrope text-[0.65rem] font-semibold uppercase tracking-widest text-brand-pink group-hover:text-brand-pink"
                  >
                    {href ? "Explore Service →" : "Enquire →"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>
      </section>

      <section className="w-full bg-brand-white py-20 lg:py-24">
        <SectionWrapper>
          <div className="section-intro flex flex-col items-center text-center">
            <span className="eyebrow">Specialized Services</span>
            <h2 className="mt-5 text-brand-black">
              Explore Dedicated Service Page
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
            {[
              {
                title: "3D Rendering",
                body: "Presentation-ready 3D visuals, modeling, and animation support for design approvals, client reviews, and project marketing.",
                href: "/3d-rendering",
              },
            ].map(({ title, body, href }) => (
              <article key={href} className="border border-brand-gray-light bg-brand-gray-light/35 p-8 lg:p-10">
                <h3 className="text-brand-black">{title}</h3>
                <p className="mt-4 font-manrope text-sm leading-relaxed text-brand-gray">
                  {body}
                </p>
                <div className="mt-6">
                  <Link
                    href={href}
                    className="font-manrope text-[0.68rem] font-semibold uppercase tracking-widest text-brand-pink"
                  >
                    Open Page →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ── 3D RENDERING BANNER ─────────────────────────── */}
      <section className="w-full bg-brand-charcoal py-24 lg:py-40">
        <SectionWrapper className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col">
            <span className="eyebrow">See It Before It Exists</span>
            <h2 className="mt-5 text-brand-white">
              3D Rendering & Visualisation
            </h2>
            <p className="mt-6 font-manrope text-sm leading-relaxed text-brand-white/60">
              Our studio produces photorealistic 3D renders and immersive
              walkthroughs that let you experience your future space with
              confidence. Make decisions on materials, light, and layout before
              any money is spent on construction.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Photorealistic still renders",
                "360° panoramic views",
                "Animated walkthroughs",
                "Material & finish comparisons",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-px w-5 bg-brand-pink" aria-hidden="true" />
                  <span className="font-manrope text-sm text-brand-white/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/contact">
                <Button variant="outline" scheme="light">
                  Request a Render
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-brand-black/20">
              <Image
                src="/images/projects/3d-renders/Upper_Saddle_River,_NJ.webp"
                alt="3D exterior rendering presentation by ATVAGA"
                fill
                sizes="(max-width: 1024px) 50vw, 24vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden bg-brand-black/20">
              <Image
                src="/images/projects/residential/Modern_Villa_Pena,_Atlanta,_GA_(1).webp"
                alt="Residential design presentation image used across ATVAGA services"
                fill
                sizes="(max-width: 1024px) 50vw, 24vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* ── PROCESS STRIP ───────────────────────────────── */}
      <section className="w-full bg-brand-white py-24 lg:py-40">
        <SectionWrapper>
          <div className="section-intro flex flex-col items-center text-center">
            <span className="eyebrow">How We Work</span>
            <h2 className="mt-5 text-brand-black">
              Our Process
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "We learn about you, your lifestyle, your goals, and your budget." },
              { step: "02", title: "Concept", desc: "Mood boards, space plans, and a design direction that excites you." },
              { step: "03", title: "Development", desc: "Technical drawings, material specifications, and procurement." },
              { step: "04", title: "Installation", desc: "We manage delivery, installation, and the final styling reveal." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="border-t-2 border-brand-pink pt-6">
                <span className="font-manrope text-4xl font-light text-brand-gray-light">
                  {step}
                </span>
                <h3 className="mt-3 text-xl text-brand-black">{title}</h3>
                <p className="mt-2 font-manrope text-sm leading-relaxed text-brand-gray">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="w-full bg-brand-gray-light py-24 lg:py-40">
        <SectionWrapper className="flex flex-col items-center text-center">
          <h2 className="max-w-xl text-brand-black">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-5 max-w-md font-manrope text-sm leading-relaxed text-brand-gray">
            Let&apos;s have a conversation. We&apos;ll help you understand the right
            scope of work for your project and budget.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary" scheme="dark">
                Talk to a Designer
              </Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
