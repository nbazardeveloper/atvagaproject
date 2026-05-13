import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { homeMetadata } from "@/app/metadata";

// Ленивая загрузка тяжёлого клиентского компонента — не блокирует первый рендер
const StickyServicesShowcase = dynamic(
  () => import("@/components/services/StickyServicesShowcase"),
  { ssr: false }
);

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
    body: "Our plans are engineered for clarity, reducing contractor friction and ensuring the build stays true to the architectural intent.",
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
    name: "Tacoma",
    badge: "Pierce County",
    description: "South Sound residential architecture and permit coordination for Tacoma's revitalized urban core.",
  },
  {
    name: "Renton",
    badge: "South King Co.",
    description: "ADU/DADU design and residential additions for Renton's rapidly expanding neighborhoods.",
  },
  {
    name: "Everett",
    badge: "Snohomish County",
    description: "North Sound residential services with deep knowledge of Snohomish County code requirements.",
  },
  {
    name: "Surrounding Areas",
    badge: "Greater WA",
    description: "Permit-ready architectural services throughout greater Washington State by arrangement.",
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
    body: "Schematic drawings and design development that translate your vision into precise, beautiful architectural plans.",
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

/* ── Page ──────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────── */}
      <section className="relative flex min-h-screen w-full items-end overflow-hidden bg-brand-black">
        <Image
          src="/images/hero.webp"
          alt="ATVAGA luxury residential project exterior at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.22)_0%,rgba(7,7,7,0.08)_28%,rgba(7,7,7,0.24)_60%,rgba(7,7,7,0.68)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_28%,rgba(255,177,114,0.42),transparent_34%),radial-gradient(circle_at_78%_78%,rgba(10,10,10,0.2),transparent_32%)]" />

        <SectionWrapper className="relative z-10 flex min-h-screen flex-col justify-end pb-0 pt-28">
          <p className="max-w-3xl font-manrope text-xl font-light leading-tight text-brand-white md:text-[1.9rem] lg:text-[2.2rem]">
            Modern Residential Solutions.
            <br />
            Permit-Ready.
          </p>
          <h1 className="mt-8 -mb-[0.08em] w-full whitespace-nowrap font-italiana text-[12.35vw] font-light leading-none tracking-normal text-brand-white md:text-[13.4vw] lg:text-[12.5vw] xl:text-[11.9vw]">
            ATVAGA DESIGNS
          </h1>
        </SectionWrapper>
      </section>

      <StickyServicesShowcase />

      {/* ── VISIONARY SPACES MONOLITH ─────────────────── */}
      <section className="relative w-full overflow-hidden bg-brand-black md:h-[calc(100svh-72px)] md:min-h-[42rem]">
        <div className="relative h-[38vh] min-h-[16rem] w-full md:hidden">
          <Image
            src="/images/visionary/hero-visionary.webp"
            alt="Visionary residential exterior project"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <Image
          src="/images/visionary/hero-visionary.webp"
          alt="Visionary residential exterior project"
          fill
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(10,10,10,0.1)_0%,rgba(10,10,10,0.04)_45%,rgba(10,10,10,0.18)_100%)] md:block" />

        <div className="relative z-10 flex w-full flex-col md:h-full md:w-[45%]">
          <div className="bg-brand-black px-5 py-10 md:h-[63%] md:px-0 md:py-0">
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
              <div className="hidden md:block" />
              <div className="flex h-full items-center md:pr-10">
                <div className="flex max-w-xl flex-col text-left">
                  <span className="font-manrope text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-brand-gray">
                    Residential Architecture &amp; Permit Services
                  </span>
                  <h2 className="mt-5 text-[clamp(3.25rem,3.6vw,3.625rem)] leading-[1.02] text-brand-white">
                    Visionary Spaces
                    <br />
                    Permit Ready
                  </h2>
                  <p className="mt-6 font-manrope text-[0.875rem] leading-relaxed tracking-normal text-brand-white/68">
                    ATVAGA Designs provides expert architectural drafting
                    and permit plans for homeowners and developers across
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
                      className="border-brand-pink bg-brand-pink text-brand-white hover:border-brand-black hover:bg-brand-black"
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
                sizes="(max-width: 1024px) 100vw, 50vw"
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
              Modern ADU/DADU Design &amp;
              <br />
              Permit Solutions
            </h2>
            <p className="mt-6 font-manrope text-sm leading-relaxed text-brand-gray">
              ATVAGA Designs specializes in detached and attached ADU
              solutions throughout Washington State. We handle the entire
              lifecycle of your project—from site analysis and architectural
              drafting to engineering coordination and city submittals.
            </p>
            <div className="mt-10">
              <Link
                href="/portfolio"
                className="font-manrope text-[0.65rem] font-bold uppercase tracking-[0.22em] text-brand-pink transition-colors duration-300 hover:text-brand-black"
              >
                View ADU Projects
              </Link>
            </div>
          </div>

        </SectionWrapper>
      </section>

      {/* ── PORTFOLIO PREVIEW ───────────────────────────── */}
      <section className="w-full bg-brand-black py-24 lg:py-32">
        <SectionWrapper>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <h2 className="mt-4 text-brand-white">Featured Projects</h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden font-manrope text-[0.65rem] font-bold uppercase tracking-[0.22em] text-brand-white/40 transition-colors duration-300 hover:text-brand-white md:block"
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
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-black/25 transition-opacity duration-300 group-hover:bg-brand-black/10" />
                  <div className="absolute left-4 top-4 border border-brand-pink/50 bg-brand-black/60 px-3 py-1">
                    <span className="font-manrope text-[0.58rem] font-semibold uppercase tracking-widest text-brand-pink">
                      {type}
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="font-italiana text-[1.45rem] leading-snug text-brand-white transition-colors duration-300 group-hover:text-brand-pink">
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

      {/* ── CITY CAROUSEL ───────────────────────────────── */}
      <section className="w-full overflow-hidden bg-brand-white py-24 lg:py-32">
        {/* Heading — aligned with page margins */}
        <SectionWrapper className="mb-14">
          <h2 className="text-center text-brand-black">
            Serving Washington State
          </h2>
        </SectionWrapper>

        {/* Scrollable carousel — starts at page margin, bleeds right */}
        <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [touch-action:pan-x] snap-x snap-mandatory scroll-smooth [overscroll-behavior-x:contain]">
          <div className="flex gap-5 px-5 pb-2 md:gap-6 md:px-10 lg:px-20 xl:px-28">
            {CITIES.map(({ name, badge, description, src }) => (
              <article key={name} className="w-[72vw] shrink-0 snap-start sm:w-[44vw] lg:w-[calc(25%-18px)]">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-gray-light">
                  <Image
                    src={src ?? "/images/hero.webp"}
                    alt={`${name} architectural projects by ATVAGA`}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 1024px) 44vw, 340px"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  {/* Badge top-right */}
                  <div className="absolute right-3 top-3 z-10 bg-brand-black/75 px-2.5 py-1">
                    <span className="font-manrope text-[0.58rem] font-semibold uppercase tracking-widest text-brand-white">
                      {badge}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="mt-4 font-italiana text-[1.55rem] leading-snug text-brand-black">
                  {name}
                </h3>
                <p className="mt-2 font-manrope text-[0.8rem] leading-relaxed text-brand-gray">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

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
