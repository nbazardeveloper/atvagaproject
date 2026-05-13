import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const FOOTER_LINKS = {
  Services: [
    { label: "Architectural Plans", href: "/services" },
    { label: "Permit Plans", href: "/services" },
    { label: "ADU/DADU Design", href: "/services" },
  ],
  Company: [
    { label: "Residential Remodeling", href: "/portfolio" },
    { label: "Additions", href: "/services" },
    { label: "Privacy Policy", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full">
      <section className="relative w-full overflow-hidden bg-brand-black py-24 lg:py-28">
        <div className="absolute left-0 top-0 h-[20rem] w-[20rem] rounded-full bg-brand-white/[0.03] blur-0" />
        <SectionWrapper>
          <div className="relative flex flex-col items-center text-center">
            <div className="max-w-3xl">
              <h2 className="text-brand-white">READY TO START?</h2>
              <p className="mt-5 max-w-2xl font-manrope text-[1.05rem] leading-[1.65] text-brand-white/68">
                Transform your residential goals into detailed, permit-ready
                architectural plans. Let&apos;s discuss your project today.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button
                  variant="primary"
                  scheme="dark"
                  className="border-brand-pink bg-brand-pink px-10 text-brand-white hover:border-brand-pink/90 hover:bg-brand-pink/90"
                >
                  REQUEST A QUOTE
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" scheme="light" className="px-10">
                  VIEW PORTFOLIO
                </Button>
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </section>

      <div className="w-full bg-[#ebe6e0] text-brand-black">
      <div className="w-full py-20 lg:py-24">
        <SectionWrapper>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1.15fr] lg:gap-16">
            <div>
              <p className="font-italiana text-[2rem] text-brand-black">
                ATVAGA
              </p>
              <p className="mt-6 max-w-[16rem] font-manrope text-[1rem] leading-[1.75] text-brand-gray">
                Technical precision meets architectural elegance. Specializing in
                permit-ready drafting for Washington State.
              </p>
            </div>

            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <h3 className="font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-black">
                  {group}
                </h3>
                <ul className="mt-5 space-y-3">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="font-manrope text-[1rem] text-brand-gray underline-offset-4 transition-colors hover:text-brand-black hover:underline"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="font-manrope text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-black">
                Office
              </h3>
              <div className="mt-5 space-y-1 font-manrope text-[1rem] leading-[1.75] text-brand-gray">
                <p>1200 Architecture Ave</p>
                <p>Seattle, WA 98101</p>
                <p>Mon - Fri: 9am - 5pm</p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      <div className="w-full border-t border-brand-black/8 py-6">
        <SectionWrapper>
          <p className="font-manrope text-[0.72rem] uppercase tracking-[0.16em] text-brand-gray">
            © {new Date().getFullYear()} ATVAGA Designs. Architectural Drafting &amp; Permit Services in Washington State.
          </p>
        </SectionWrapper>
      </div>
      </div>
    </footer>
  );
}
