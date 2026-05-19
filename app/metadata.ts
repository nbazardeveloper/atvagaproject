import type { Metadata } from "next";

export const BASE_URL = "https://atvagadesigns.com";
export const SITE_URL = new URL(BASE_URL);
export const SITE_NAME = "ATVAGA Designs";
export const SITE_EMAIL = "hello@atvagadesigns.com";
export const DEFAULT_OG_IMAGE = "/opengraph-image";
export const DEFAULT_TWITTER_IMAGE = "/twitter-image";
export const DEFAULT_TITLE =
  "Residential Design Drawings & Permit Services in Washington State";
export const SERVICE_AREAS = [
  "Seattle",
  "Bellevue",
  "Kirkland",
  "Redmond",
  "Tacoma",
  "Renton",
  "Everett",
  "Washington State",
] as const;
export const SITE_DESCRIPTION =
  "ATVAGA Designs creates permit-ready residential design drawings, ADU and DADU plans, additions, remodels, and 3D visual support for homeowners across Washington State.";

const DEFAULT_KEYWORDS = [
  "Washington State residential design",
  "permit-ready design drawings",
  "ADU design Seattle",
  "DADU plans Washington",
  "home addition drawings",
  "residential remodel plans",
  "permit coordination",
  "3D renderings",
  "ATVAGA Designs",
] as const;

interface PageMeta {
  title: string;
  description: string;
  path: string;
  imageAlt?: string;
  keywords?: string[];
}

export function absoluteUrl(path: string) {
  const normalizedPath = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;

  return new URL(normalizedPath, BASE_URL).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  imageAlt,
  keywords,
}: PageMeta): Metadata {
  const canonical = absoluteUrl(path);
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    metadataBase: SITE_URL,
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: BASE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    referrer: "origin-when-cross-origin",
    category: "Residential design and permit drawings",
    keywords: [...DEFAULT_KEYWORDS, ...(keywords ?? [])],
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: imageAlt ?? fullTitle,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_TWITTER_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  };
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}#website`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: BASE_URL,
  inLanguage: "en-US",
  publisher: {
    "@id": `${BASE_URL}#organization`,
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}#organization`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: BASE_URL,
  email: SITE_EMAIL,
  image: absoluteUrl(DEFAULT_OG_IMAGE),
  areaServed: SERVICE_AREAS.map((area) => ({
    "@type": area === "Washington State" ? "AdministrativeArea" : "City",
    name: area,
  })),
  serviceType: [
    "Permit-ready residential design drawings",
    "ADU and DADU design",
    "Home additions and remodels",
    "3D renderings",
    "Permit coordination",
  ],
};

export const homeMetadata = buildMetadata({
  title: DEFAULT_TITLE,
  description:
    "Permit-ready residential design drawings, ADU and DADU plans, additions, remodels, and 3D visual support for projects across Washington State.",
  path: "/",
  keywords: ["Seattle permit drawings", "Bellevue ADU design", "Washington State home remodel plans"],
});

export const portfolioMetadata = buildMetadata({
  title: "Portfolio",
  description:
    "Review selected ATVAGA projects, including residential design concepts, remodels, additions, and presentation-ready visual work.",
  path: "/portfolio",
  keywords: ["residential design portfolio", "Washington remodel portfolio"],
});

export const servicesMetadata = buildMetadata({
  title: "Services",
  description:
    "Explore ATVAGA services for residential design drawings, additions, remodel planning, ADU and DADU design, permit coordination, and 3D visualization.",
  path: "/services",
  keywords: ["residential design services", "permit coordination Washington", "ADU DADU plans"],
});

export const contactMetadata = buildMetadata({
  title: "Contact",
  description:
    "Contact ATVAGA Designs to discuss residential design drawings, permit-ready sets, ADU plans, additions, remodels, or project consultations in Washington State.",
  path: "/contact",
  keywords: ["contact ATVAGA Designs", "Washington design consultation"],
});

export const faqMetadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about ATVAGA project scope, process, pricing, timelines, 3D rendering, and working together.",
  path: "/faq",
  keywords: ["ATVAGA FAQ", "design process questions", "3D rendering FAQ"],
});

export const threeDRenderingMetadata = buildMetadata({
  title: "3D Rendering",
  description:
    "High-quality 3D rendering, animation, modeling, and visualization services that turn design drawings into compelling client-ready presentations.",
  path: "/3d-rendering",
  keywords: ["3D rendering", "3D modeling", "architectural visualization", "360 environments", "animation services"],
});

export const privacyMetadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Read how ATVAGA Designs collects, uses, and protects information submitted through this website and project inquiry forms.",
  path: "/privacy",
  keywords: ["privacy policy", "ATVAGA privacy"],
});

export const termsMetadata = buildMetadata({
  title: "Terms & Procedure",
  description:
    "Review ATVAGA Designs project procedures, revision terms, permit drawing scope, payment milestones, and service conditions.",
  path: "/terms",
  keywords: ["terms and conditions", "permit drawing procedure", "ATVAGA terms"],
});
