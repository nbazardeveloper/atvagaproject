import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { faqMetadata } from "@/app/metadata";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = faqMetadata;

export default function FaqPage() {
  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────── */}
      <section className="w-full bg-brand-gray-light pt-[72px]">
        <SectionWrapper className="py-24 lg:py-36">
          <span className="eyebrow">Questions &amp; Answers</span>
          <h1 className="mt-5 max-w-2xl text-brand-black">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 max-w-xl font-manrope text-sm leading-relaxed text-brand-gray">
            Can&apos;t find the answer you&apos;re looking for? Reach out directly and
            we&apos;ll be happy to help.
          </p>
        </SectionWrapper>
      </section>

      {/* ── ACCORDION ───────────────────────────────────── */}
      <section className="w-full bg-brand-white py-24 lg:py-40">
        <SectionWrapper>
          <FaqAccordion />
        </SectionWrapper>
      </section>

      {/* ── STILL HAVE QUESTIONS ────────────────────────── */}
      <section className="w-full bg-brand-charcoal py-24 lg:py-40">
        <SectionWrapper className="flex flex-col items-center text-center">
          <h2 className="max-w-xl text-brand-white">
            Still Have Questions?
          </h2>
          <p className="mt-5 max-w-md font-manrope text-sm leading-relaxed text-brand-white/60">
            Our team is happy to walk you through any aspect of our process,
            pricing, or services in a quick discovery call.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact">
              <Button variant="primary" scheme="light">
                Contact Us
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" scheme="light">
                Explore Services
              </Button>
            </Link>
          </div>
        </SectionWrapper>
      </section>
    </>
  );
}
