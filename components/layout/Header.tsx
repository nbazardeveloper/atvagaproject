"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome || scrolled) {
      setMenuOpen(false);
    }
  }, [isHome, scrolled]);

  // On non-home pages, always use the solid white style
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
        isTransparent
          ? "bg-transparent"
          : "bg-brand-white shadow-[0_1px_0_0_rgba(10,10,10,0.08)]",
      ].join(" ")}
    >
      <div className="flex h-[72px] w-full items-center justify-between px-5 md:px-10 lg:px-20 xl:px-28">
        {/* Logotype */}
        <Link
          href="/"
          className={[
            "font-italiana text-[0.95rem] tracking-[0.1em] uppercase md:text-xl md:tracking-[0.14em]",
            isTransparent ? "text-brand-white" : "text-brand-black",
          ].join(" ")}
          aria-label="ATVAGA Designs – home"
        >
          ATVAGA DESIGNS
        </Link>

        {isTransparent ? (
          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="/contact"
              className="btn-base border border-brand-pink bg-brand-pink px-6 py-3 text-[0.65rem] text-brand-white transition-colors duration-200 hover:border-brand-white hover:bg-brand-white hover:text-brand-black"
            >
              Start Your Project
            </Link>
            <button
              className="flex flex-col items-end justify-center gap-[5px] text-brand-white"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={[
                  "block h-px w-6 bg-current transition-transform duration-300",
                  menuOpen ? "translate-y-[7px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px bg-current transition-all duration-300",
                  menuOpen ? "w-6 opacity-0" : "w-4",
                ].join(" ")}
              />
              <span
                className={[
                  "block h-px w-6 bg-current transition-transform duration-300",
                  menuOpen ? "-translate-y-[7px] -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>
        ) : (
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "font-manrope text-[0.7rem] font-semibold uppercase tracking-widest transition-colors duration-200",
                  "text-brand-gray hover:text-brand-black",
                  pathname === href ? "text-brand-black" : "",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-base rounded-none border border-brand-black bg-brand-black px-6 py-3 text-[0.65rem] text-brand-white transition-colors duration-200 hover:border-brand-pink hover:bg-brand-pink"
            >
              Get a Quote
            </Link>
          </nav>
        )}

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="btn-base border border-brand-pink bg-brand-pink px-3 py-2 text-[0.55rem] text-brand-white transition-colors duration-200 hover:border-brand-white hover:bg-brand-white hover:text-brand-black"
          >
            Request a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className={[
              "flex flex-col items-end justify-center gap-[5px]",
              isTransparent ? "text-brand-white" : "text-brand-black",
            ].join(" ")}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={[
                "block h-px w-6 bg-current transition-transform duration-300",
                menuOpen ? "translate-y-[7px] rotate-45" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px bg-current transition-all duration-300",
                menuOpen ? "w-6 opacity-0" : "w-4",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-6 bg-current transition-transform duration-300",
                menuOpen ? "-translate-y-[7px] -rotate-45" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "overflow-hidden transition-all duration-500",
          isTransparent
            ? "bg-brand-black/75 backdrop-blur-md"
            : "bg-brand-white md:hidden",
          menuOpen ? "max-h-screen py-6" : "max-h-0",
        ].join(" ")}
      >
        <nav
          className="flex flex-col gap-1 px-5 md:px-10 lg:px-20 xl:px-28"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={[
                "border-b py-4 font-manrope text-[0.7rem] font-semibold uppercase tracking-widest transition-colors duration-200",
                isTransparent
                  ? "border-white/15 text-brand-white/80 hover:text-brand-white"
                  : "border-brand-gray-light text-brand-black hover:text-brand-pink",
                pathname === href ? (isTransparent ? "text-brand-white" : "text-brand-pink") : "",
              ].join(" ")}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={[
              "btn-base mt-4 w-full rounded-none border text-center text-[0.65rem] tracking-widest",
              isTransparent
                ? "border-brand-white bg-brand-white text-brand-black"
                : "border-brand-black bg-brand-black text-brand-white",
            ].join(" ")}
          >
            {isTransparent ? "Start Your Project" : "Get a Quote"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
