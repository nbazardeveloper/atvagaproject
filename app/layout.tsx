import type { Metadata } from "next";
import { Italiana, Manrope } from "next/font/google";
import "./globals.css";
import ClientHeader from "@/components/layout/ClientHeader";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import {
  BASE_URL,
  DEFAULT_OG_IMAGE,
  DEFAULT_TITLE,
  DEFAULT_TWITTER_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  organizationSchema,
  websiteSchema,
} from "@/app/metadata";

/* ── Google Fonts via next/font ──────────────────────── */
const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--italiana-font",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--manrope-font",
  display: "swap",
  weight: ["300", "400", "600", "700"],
});

/* ── Root metadata ───────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: SITE_URL,
  applicationName: SITE_NAME,
  alternates: {
    canonical: BASE_URL,
  },
  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  referrer: "origin-when-cross-origin",
  category: "Residential design and permit drawings",
  openGraph: {
    title: `${DEFAULT_TITLE} | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} residential design drawings and permit services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${DEFAULT_TITLE} | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${italiana.variable} ${manrope.variable}`}
    >
      <head>
        <StructuredData data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="font-manrope text-brand-black antialiased">
        <ClientHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
