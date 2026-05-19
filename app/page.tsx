import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import DeferredCityCarousel from "@/components/layout/DeferredCityCarousel";
import DeferredStickyServicesShowcase from "@/components/layout/DeferredStickyServicesShowcase";
import StructuredData from "@/components/seo/StructuredData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { buildBreadcrumbSchema, homeMetadata } from "@/app/metadata";

export const metadata: Metadata = homeMetadata;

/* ── Data ──────────────────────────────────────────── */
const WHY_CHOOSE_ATVAGA = [
  {
    title: "Permit Coordination",
    body: "We handle the bureaucracy. From zoning analysis to final permit issuance, we navigate the city requirements so you don't have to.",
  },
  {
    title: "Design Aesthetics",
    body: "Minimalist principles meet functional living. We create spaces that feel expansive, intentional, and timelessly modern.",
  },
  {
    title: "Technical Precision",
    body: "Our plans are engineered for clarity, reducing contractor friction and ensuring the build stays true to the design vision.",
  },
  {
    title: "WA State Expertise",
    body: "Deep knowledge of local Washington State codes and environmental regulations for urban and suburban projects.",
  },
];

const CITIES: { name: string; badge: string; description: string; src?: string }[] = [
  {
    name: "Seattle",
    badge: "King County",
    src: "/images/serving-state/seattle.webp",
    description: "Urban ADU solutions, additions, and permit-ready residential designs across Seattle's dynamic neighborhoods.",
  },
  {
    name: "Bellevue",
    badge: "Eastside",
    src: "/images/serving-state/bellevue.webp",
    description: "Luxury residential design and full permit services for Bellevue's premier waterfront and hilltop homes.",
  },
  {
    name: "Kirkland",
    badge: "Lake Washington",
    src: "/images/serving-state/kirkland.webp",
    description: "Waterfront ADU projects and residential remodels along the shores of Lake Washington.",
  },
  {
    name: "Redmond",
    badge: "Eastside",
    src: "/images/serving-state/redmond.webp",
    description: "Modern residential design for Redmond's tech-forward community and growing suburban neighborhoods.",
  },
  {
    name: "Bothell",
    badge: "North King / Snohomish",
    src: "/images/projects/residential/Summit_at_Canyon_Park,_Bothell,_WA_view_1.webp",
    description: "Residential design support for Bothell neighborhoods, townhome communities, and growing suburban developments.",
  },
  {
    name: "Edmonds",
    badge: "Snohomish County",
    src: "/images/projects/residential/Town_Squire_Condominiums,__Edmonds,_WA_(1).webp",
    description: "Coastal residential design drawings and permit planning for Edmonds homes and condominium properties.",
  },
  {
    name: "Mukilteo",
    badge: "Puget Sound",
    src: "/images/projects/residential/Losvar_Condos_Mukilteo,_WA.webp",
    description: "Permit-ready residential design support for Mukilteo waterfront homes, condos, and renovation projects.",
  },
  {
    name: "Sammamish",
    badge: "Eastside",
    src: "/images/projects/residential/Sammamish_WA.webp",
    description: "Custom residential design drawings for Sammamish homes, additions, and carefully detailed remodels.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    body: "We learn about your project goals, site constraints, budget, and timeline during a complimentary 30-minute consultation.",
  },
  {
    number: "02",
    title: "Concept & Design",
    body: "Schematic drawings and design development that translate your vision into precise, beautiful design drawings.",
  },
  {
    number: "03",
    title: "Permit Documentation",
    body: "Full permit-ready drawing sets engineered for clarity and built to meet Washington State municipal requirements.",
  },
  {
    number: "04",
    title: "City Submittal",
    body: "We coordinate the submission, track city review progress, and respond to all corrections until approval is issued.",
  },
];

const PORTFOLIO_PROJECTS = [
  {
    title: "Maple Valley ADU",
    type: "Detached ADU",
    city: "Maple Valley, WA",
    src: "/images/projects/detachedadu.webp",
  },
  {
    title: "Bellevue Modern Addition",
    type: "Home Addition",
    city: "Bellevue, WA",
    src: "/images/projects/homeedition.webp",
  },
  {
    title: "Capitol Hill Remodel",
    type: "Full Remodel",
    city: "Seattle, WA",
    src: "/images/projects/fullremodel.webp",
  },
];

const TESTIMONIALS = [
  {
    quote:
      '"The permit process seemed impossible until we met the ATVAGA team. They handled everything with the city of Seattle and our ADU is now under construction!"',
    author: "James D.",
    location: "Homeowner, Seattle",
    initials: "JD",
  },
  {
    quote:
      '"Modern aesthetics combined with deep technical knowledge. Their drawings were clean, professional, and approved with a single correction."',
    author: "Sarah L.",
    location: "Investor, Bellevue",
    initials: "SL",
  },
  {
    quote:
      '"Highly recommend for anyone doing a major remodel. They listened to our needs and created a plan that was both stunning and practical."',
    author: "Mark K.",
    location: "General Contractor",
    initials: "MK",
  },
  {
    quote:
      '"ATVAGA brought clarity to every step of the process. Their permit set was incredibly organized and made coordination with consultants much easier."',
    author: "Elena P.",
    location: "Property Owner, Kirkland",
    initials: "EP",
  },
];

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ATVAGA Designs Home",
  description: homeMetadata.description,
  url: "https://atvagadesigns.com/",
  isPartOf: {
    "@id": "https://atvagadesigns.com#website",
  },
  about: [
    {
      "@type": "Service",
      name: "Permit-ready residential design drawings",
    },
    {
      "@type": "Service",
      name: "ADU and DADU design",
    },
    {
      "@type": "Service",
      name: "Home additions and remodels",
    },
  ],
};

/* ── Page ──────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <StructuredData
        data={[
          homePageSchema,
          buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative flex min-h-screen w-full items-end overflow-hidden bg-brand-charcoal">
        <Image
          src="/images/hero-mobil.webp"
          alt="ATVAGA luxury residential project exterior at dusk"
          fill
          priority
          sizes="(max-width: 767px) 100vw, 0px"
          className="object-cover object-center md:hidden"
        />
        <Image
          src="/images/hero.webp"
          alt="ATVAGA luxury residential project exterior at dusk"
          fill
          priority
          sizes="(max-width: 767px) 0px, 100vw"
          className="hidden object-cover object-center md:block"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.22)_0%,rgba(7,7,7,0.08)_28%,rgba(7,7,7,0.24)_60%,rgba(7,7,7,0.68)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_28%,rgba(255,177,114,0.42),transparent_34%),radial-gradient(circle_at_78%_78%,rgba(10,10,10,0.2),transparent_32%)]" />

        <SectionWrapper className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-12 pt-24 md:min-h-screen md:justify-end md:pb-0 md:pt-28">
          <p className="max-w-3xl font-manrope text-xl font-light leading-tight text-brand-white md:text-[1.9rem] lg:text-[2.2rem]">
            RESIDENTIAL DESIGN &amp; PERMIT PLANS
            <br />
            SEATTLE • BELLEVUE • WASHINGTON STATE
          </p>
          <h1 className="mt-8 -mb-[0.08em] w-full font-italiana text-[18vw] font-light leading-[0.92] tracking-normal text-brand-white sm:text-[15vw] md:whitespace-nowrap md:text-[13.4vw] md:leading-none lg:text-[12.5vw] xl:text-[11.9vw]">
            <span className="block md:inline">ATVAGA</span>{" "}
            <span className="block md:inline">DESIGNS</span>
          </h1>
        </SectionWrapper>
      </section>

      <DeferredStickyServicesShowcase />

      {/* ── VISIONARY SPACES MONOLITH ─────────────────── */}
      <section className="relative w-full overflow-hidden bg-brand-charcoal md:h-[calc(100svh-72px)] md:min-h-[42rem]">
        <div className="relative h-[38vh] min-h-[16rem] w-full md:hidden">
          <Image
            src="/images/visionary/hero-visionary.webp"
            alt="Visionary residential exterior project"
            fill
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-center"
          />
        </div>

        <Image
          src="/images/visionary/hero-visionary.webp"
          alt="Visionary residential exterior project"
          fill
          sizes="(max-width: 767px) 0px, 100vw"
          className="hidden object-cover object-center md:block"
        />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(10,10,10,0.1)_0%,rgba(10,10,10,0.04)_45%,rgba(10,10,10,0.18)_100%)] md:block" />

        <div className="relative z-10 flex w-full flex-col md:h-full md:w-[45%]">
          <div className="bg-brand-charcoal px-5 py-10 md:h-[63%] md:px-0 md:py-0">
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
              <div className="hidden md:block" />
              <div className="flex h-full items-center md:pr-10">
                <div className="flex max-w-xl flex-col text-left">
                  <span className="font-manrope text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-brand-gray">
                    Residential Design &amp; Permit Services
                  </span>
                  <h2 className="mt-5 text-[clamp(3.25rem,3.6vw,3.625rem)] leading-[1.02] text-brand-white">
                    Visionary Spaces
                    <br />
                    Permit Ready
                  </h2>
                  <p className="mt-6 font-manrope text-[0.875rem] leading-relaxed tracking-normal text-brand-white/68">
                    ATVAGA Designs provides expert design drawings and
                    permit plans for homeowners and developers across
                    Seattle, Bellevue, and beyond. From initial concept to
                    final city permit approval, we transform your vision into
                    aesthetic, code-compliant residential solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray-light px-5 py-6 md:h-[12%] md:px-0 md:py-0">
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
              <div className="hidden md:block" />
              <div className="flex h-full items-center md:pr-10">
                <div className="flex w-full justify-start">
                  <Link href="/portfolio">
                    <Button
                      variant="primary"
                      scheme="dark"
                      className="border-brand-pink bg-brand-pink text-brand-white hover:border-brand-charcoal hover:bg-brand-charcoal"
                    >
                      View Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────── */}
      <section className="w-full bg-brand-white py-24 lg:py-32">
        <SectionWrapper>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.03fr_1.45fr] lg:gap-8">
            <div className="flex flex-col justify-between gap-10 lg:min-h-[23.5rem]">
              <div className="max-w-[32rem]">
                <h2 className="text-brand-black">Why Choose ATVAGA</h2>
                <p className="mt-6 max-w-[31rem] font-manrope text-[1.05rem] leading-[1.65] tracking-[0.01em] text-brand-gray">
                  We specialize in the complex intersection of high-end design
                  aesthetics and municipal building codes. Our team ensures your
                  vision isn&apos;t just beautiful, it&apos;s buildable.
                </p>
              </div>

              <div className="flex min-h-[5.9rem] items-center border border-[#ebe7e3] bg-[#f8f5f2] px-8 py-6 lg:max-w-[32rem]">
                <div className="flex items-center gap-4 text-brand-pink">
                  <span className="font-manrope text-[1.9rem] leading-none tracking-[0.08em]">★★★★★</span>
                  <div className="flex flex-col">
                    <span className="font-manrope text-[1.05rem] font-semibold leading-none text-brand-black">
                      4.9 / 5.0
                    </span>
                    <span className="mt-1 font-manrope text-[0.72rem] uppercase tracking-[0.18em] text-brand-gray">
                      Google Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {WHY_CHOOSE_ATVAGA.map(({ title, body }) => (
                <article
                  key={title}
                  className="min-h-[10.6rem] border border-[#ebe7e3] bg-brand-white px-7 py-7 lg:px-8 lg:py-7"
                >
                  <h3 className="font-manrope text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-brand-black">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-[22rem] font-manrope text-[1rem] leading-[1.65] tracking-[0.01em] text-brand-gray">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* ── PROCESS ─────────────────────────────────────── */}
      <section className="w-full bg-brand-gray-light py-24 lg:py-32">
        <SectionWrapper>
          <div className="section-intro flex flex-col items-center text-center">
            <h2 className="mt-5 text-brand-black">From Vision to Permit</h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#dedad7] sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map(({ number, title, body }) => (
              <div key={number} className="flex flex-col bg-brand-gray-light px-8 py-10">
                <span className="font-italiana text-[4rem] leading-none text-brand-pink/25">
                  {number}
                </span>
                <h3 className="mt-6 font-manrope text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-brand-black">
                  {title}
                </h3>
                <p className="mt-4 font-manrope text-[0.875rem] leading-relaxed text-brand-gray">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      {/* ── ADU 50/50 FEATURE ───────────────────────────── */}
      <section className="w-full overflow-hidden bg-brand-white py-24 lg:py-40">
        <SectionWrapper className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* ── Left: image + stat badge ── */}
          <div className="relative mx-auto w-[78%] lg:w-full">
            <div className="relative aspect-[15/16]">
              <Image
                src="/images/services/daduesign.webp"
                alt="ADU interior project by ATVAGA Designs"
                fill
                sizes="(max-width: 1024px) 78vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Stat badge — overflows bottom-right corner of the image */}
            <div className="absolute bottom-0 right-0 z-10 translate-x-[22%] translate-y-[28%] bg-brand-pink px-[4.875rem] py-9">
              <p className="font-italiana text-[4.5rem] leading-none text-brand-white">
                150+
              </p>
              <p className="mt-2 font-manrope text-[0.65rem] font-bold uppercase tracking-[0.22em] text-brand-white/90">
                Projects Completed
              </p>
            </div>
          </div>

          {/* ── Right: heading + copy + text link ── */}
          <div className="flex flex-col">
            <h2 className="text-brand-black">
              <span className="block whitespace-nowrap">Modern ADU/DADU Design &amp;</span>
              <span className="block whitespace-nowrap">Permit Solutions</span>
            </h2>
            <p className="mt-6 font-manrope text-sm leading-relaxed text-brand-gray">
              ATVAGA Designs specializes in detached and attached ADU
              solutions throughout Washington State. We handle the entire
              lifecycle of your project—from site analysis and design
              drafting to engineering coordination and city submittals.
            </p>
            <div className="mt-10">
              <Link
                href="/portfolio"
                className="font-manrope text-[0.65rem] font-bold uppercase tracking-[0.22em] text-brand-pink hover:text-brand-black"
              >
                View ADU Projects
              </Link>
            </div>
          </div>

        </SectionWrapper>
      </section>

      {/* ── PORTFOLIO PREVIEW ───────────────────────────── */}
      <section className="w-full bg-brand-charcoal py-24 lg:py-32">
        <SectionWrapper>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <h2 className="mt-4 text-brand-white">Featured Projects</h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden font-manrope text-[0.65rem] font-bold uppercase tracking-[0.22em] text-brand-white/40 hover:text-brand-white md:block"
            >
              View All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PORTFOLIO_PROJECTS.map(({ title, type, city, src }) => (
              <Link key={title} href="/portfolio" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-brand-black/25 group-hover:bg-brand-black/10" />
                  <div className="absolute left-4 top-4 border border-brand-pink/50 bg-brand-black/60 px-3 py-1">
                    <span className="font-manrope text-[0.58rem] font-semibold uppercase tracking-widest text-brand-pink">
                      {type}
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-italiana text-[1.45rem] leading-snug text-brand-white group-hover:text-brand-pink">
                    {title}
                  </h3>
                  <p className="mt-1 font-manrope text-[0.72rem] uppercase tracking-widest text-brand-gray">
                    {city}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 md:hidden">
            <Link href="/portfolio">
              <Button variant="outline" scheme="light">View All Projects</Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>

      <DeferredCityCarousel cities={CITIES} />

      {/* ── TESTIMONIALS ────────────────────────────────── */}
      <section className="w-full bg-brand-gray-light py-24 lg:py-32">
        <SectionWrapper>
          <div className="section-intro flex flex-col items-center text-center">
            <h2 className="mt-5 text-brand-black">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {TESTIMONIALS.map(({ quote, author, location, initials }) => (
              <blockquote
                key={author}
                className="flex min-h-[14rem] flex-col border border-[#dedad7] bg-brand-white px-5 py-5 lg:px-6 lg:py-6"
              >
                <div className="mb-5 font-manrope text-[0.9rem] leading-none tracking-[0.18em] text-brand-pink">
                  ★★★★★
                </div>
                <p className="flex-1 font-italiana text-[1.05rem] leading-[1.65] text-brand-black/78">
                  {quote}
                </p>
                <footer className="mt-6 flex items-center gap-3 pt-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1e8eb] font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand-pink">
                    {initials}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-black">
                      {author}
                    </p>
                    <p className="mt-1 font-manrope text-[0.6rem] text-brand-gray">
                      {location}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </SectionWrapper>
      </section>

    </>
  );
}
