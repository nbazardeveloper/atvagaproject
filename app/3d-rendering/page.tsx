import type { Metadata } from "next";
import Link from "next/link";
import StructuredData from "@/components/seo/StructuredData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import {
  buildBreadcrumbSchema,
  threeDRenderingMetadata,
} from "@/app/metadata";

export const metadata: Metadata = threeDRenderingMetadata;

const OFFERINGS = [
  "360 environment visuals",
  "3D animation services",
  "CAD and CAM translation support",
  "3D modeling and rendering",
  "Product development visualization",
  "3D prototyping support",
];

const HIGHLIGHTS = [
  "Realistic renderings aligned with your design intent",
  "Flexible production for consultants, developers, and homeowners",
  "Iterative reviews until the presentation feels right",
  "Budget-aware visualization without oversized production overhead",
];

const threeDRenderingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "3D Rendering",
  description: threeDRenderingMetadata.description,
  url: "https://atvagadesigns.com/3d-rendering",
  provider: {
    "@id": "https://atvagadesigns.com#organization",
  },
  serviceType: "3D rendering and visualization",
  areaServed: "Washington State",
};

export default function ThreeDRenderingPage() {
  return (
    <>
      <StructuredData
        data={[
          threeDRenderingSchema,
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "3D Rendering", path: "/3d-rendering" },
          ]),
        ]}
      />

      <section className="w-full bg-brand-charcoal pt-[72px]">
        <SectionWrapper className="py-24 lg:py-36">
          <span className="eyebrow">Visualization Services</span>
          <h1 className="mt-5 max-w-3xl text-brand-white">3D Rendering</h1>
          <p className="mt-6 max-w-3xl font-manrope text-sm leading-relaxed text-brand-white/68">
            Turn drawings and ideas into polished visual presentations. ATVAGA delivers realistic 3D rendering support for design teams, developers, real estate presentations, and homeowners who need to see the project clearly before it is built.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button variant="primary" scheme="light">Get Free Estimate</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" scheme="light">Book a Meeting</Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>

      <section className="w-full bg-brand-white py-24 lg:py-32">
        <SectionWrapper className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Why Clients Use It</span>
            <h2 className="mt-5 text-brand-black">High-impact visuals without losing budget control</h2>
            <p className="mt-6 font-manrope text-sm leading-relaxed text-brand-gray">
              The source material emphasizes realistic visuals, flexible resources, and cost control. This page keeps that same core idea: we help translate drawings into persuasive imagery that supports approvals, presentations, pre-sales, and design decisions.
            </p>
            <ul className="mt-8 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-px w-5 bg-brand-pink" aria-hidden="true" />
                  <span className="font-manrope text-sm leading-relaxed text-brand-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder label="Exterior Render" aspectRatio="aspect-[3/4]" />
            <ImagePlaceholder label="Interior Render" aspectRatio="aspect-[3/4] mt-8" />
          </div>
        </SectionWrapper>
      </section>

      <section className="w-full bg-brand-gray-light py-24 lg:py-32">
        <SectionWrapper>
          <div className="section-intro flex flex-col items-center text-center">
            <span className="eyebrow">What We Offer</span>
            <h2 className="mt-5 text-brand-black">Rendering Services</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {OFFERINGS.map((item) => (
              <div key={item} className="border border-brand-gray-light bg-brand-white px-6 py-6">
                <p className="font-manrope text-sm leading-relaxed text-brand-black">{item}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </section>

      <section className="w-full bg-brand-white py-24 lg:py-32">
        <SectionWrapper className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <article className="border border-brand-gray-light p-8">
            <span className="eyebrow">Input</span>
            <h3 className="mt-4 text-brand-black">We start from your files</h3>
            <p className="mt-4 font-manrope text-sm leading-relaxed text-brand-gray">
              Existing CAD files, permit drawings, concept sketches, and finish references become the base for the visualization package.
            </p>
          </article>
          <article className="border border-brand-gray-light p-8">
            <span className="eyebrow">Iteration</span>
            <h3 className="mt-4 text-brand-black">We refine until it lands</h3>
            <p className="mt-4 font-manrope text-sm leading-relaxed text-brand-gray">
              Camera angles, lighting, materials, and atmosphere are adjusted through review rounds so the final visual actually supports your goal.
            </p>
          </article>
          <article className="border border-brand-gray-light p-8">
            <span className="eyebrow">Delivery</span>
            <h3 className="mt-4 text-brand-black">You get presentation-ready outputs</h3>
            <p className="mt-4 font-manrope text-sm leading-relaxed text-brand-gray">
              Final deliverables can support client presentations, marketing, approvals, internal coordination, and early sales conversations.
            </p>
          </article>
        </SectionWrapper>
      </section>

      <section className="w-full bg-brand-charcoal py-24 lg:py-32">
        <SectionWrapper className="flex flex-col items-center text-center">
          <h2 className="max-w-2xl text-brand-white">Want to visualize your next project before it is built?</h2>
          <p className="mt-5 max-w-2xl font-manrope text-sm leading-relaxed text-brand-white/65">
            Share the drawings, reference images, and the kind of presentation you need. We can scope a rendering package around your timeline and review process.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="outline" scheme="light">Schedule a Call</Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}