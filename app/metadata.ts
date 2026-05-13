import type { Metadata } from "next";

const BASE_URL = "https://atvagadesigns.com";

export const SITE_NAME = "ATVAGA Designs";
export const SITE_DESCRIPTION =
  "ATVAGA Designs — Bespoke interior design studio crafting refined, functional, and beautifully curated spaces for residential and commercial clients.";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
}

export function buildMetadata({
  title,
  description,
  path,
  imageAlt,
}: PageMeta): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = `${BASE_URL}/og-default.jpg`;

  return {
    title: {
      default: `${title} | ${SITE_NAME}`,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: imageAlt ?? title }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

/* ── Per-page metadata ──────────────────────────────── */

export const homeMetadata = buildMetadata({
  title: "Bespoke Interior Design Studio",
  description: SITE_DESCRIPTION,
  path: "/",
});

export const portfolioMetadata = buildMetadata({
  title: "Portfolio",
  description:
    "Explore our curated portfolio of residential and commercial interior design projects — each space a testament to craft, detail, and intention.",
  path: "/portfolio",
});

export const servicesMetadata = buildMetadata({
  title: "Services",
  description:
    "From full-service interior design to 3D rendering and furniture curation — discover how ATVAGA Designs transforms spaces end-to-end.",
  path: "/services",
});

export const contactMetadata = buildMetadata({
  title: "Contact",
  description:
    "Ready to transform your space? Get in touch with ATVAGA Designs to discuss your project, request a quote, or schedule a consultation.",
  path: "/contact",
});

export const faqMetadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to the most common questions about our interior design process, pricing, timelines, and what to expect when working with ATVAGA Designs.",
  path: "/faq",
});
