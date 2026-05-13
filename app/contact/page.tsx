import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { contactMetadata } from "@/app/metadata";
import ContactForm from "./ContactForm";

export const metadata: Metadata = contactMetadata;

const CONTACT_INFO = [
  {
    label: "Studio",
    value: "123 Design Avenue, New York, NY 10001",
    href: null,
  },
  {
    label: "Phone",
    value: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
  {
    label: "Email",
    value: "hello@atvagadesigns.com",
    href: "mailto:hello@atvagadesigns.com",
  },
  {
    label: "Hours",
    value: "Mon – Fri, 9:00 AM – 6:00 PM EST",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ───────────────────────────────────── */}
      <section className="w-full bg-brand-charcoal pt-[72px]">
        <SectionWrapper className="py-24 lg:py-36">
          <span className="eyebrow">Let&apos;s Connect</span>
          <h1 className="mt-5 max-w-2xl text-brand-white">
            Start Your Project
          </h1>
          <p className="mt-6 max-w-xl font-manrope text-sm leading-relaxed text-brand-white/60">
            Fill in the form and a member of our design team will follow up
            within 1–2 business days to discuss your project in detail.
          </p>
        </SectionWrapper>
      </section>

      {/* ── TWO-COLUMN LAYOUT ───────────────────────────── */}
      <section className="w-full bg-brand-white py-24 lg:py-40">
        <SectionWrapper className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_380px]">
          {/* ── Form ── */}
          <div>
            <h2 className="mb-10 font-italiana text-brand-black">
              Tell Us About Your Vision
            </h2>
            <ContactForm />
          </div>

          {/* ── Info panel ── */}
          <aside className="flex flex-col gap-12 lg:border-l lg:border-brand-gray-light lg:pl-16">
            <div>
              <h2 className="font-italiana text-brand-black">
                Studio Information
              </h2>
              <ul className="mt-8 space-y-7">
                {CONTACT_INFO.map(({ label, value, href }) => (
                  <li key={label}>
                    <dt className="font-manrope text-[0.65rem] font-semibold uppercase tracking-widest text-brand-pink">
                      {label}
                    </dt>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block font-manrope text-sm text-brand-black hover:text-brand-pink"
                      >
                        {value}
                      </a>
                    ) : (
                      <dd className="mt-1 font-manrope text-sm text-brand-gray">
                        {value}
                      </dd>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="font-manrope text-[0.65rem] font-semibold uppercase tracking-widest text-brand-pink">
                Follow Our Work
              </p>
              <div className="mt-4 flex gap-5">
                {[
                  { label: "Instagram", href: "https://instagram.com" },
                  { label: "Pinterest", href: "https://pinterest.com" },
                  { label: "Houzz", href: "https://houzz.com" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-manrope text-xs font-semibold uppercase tracking-widest text-brand-gray hover:text-brand-black"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quote callout */}
            <blockquote className="border-l-2 border-brand-pink pl-6">
              <p className="font-italiana text-xl leading-snug text-brand-black">
                &ldquo;Great design begins with a great conversation.&rdquo;
              </p>
              <footer className="mt-3 font-manrope text-xs uppercase tracking-widest text-brand-gray">
                — The ATVAGA Team
              </footer>
            </blockquote>
          </aside>
        </SectionWrapper>
      </section>
    </>
  );
}
