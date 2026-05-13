import type { Metadata } from "next";
import { Italiana, Manrope } from "next/font/google";
import "./globals.css";
import ClientHeader from "@/components/layout/ClientHeader";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_DESCRIPTION } from "@/app/metadata";

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
  weight: ["300", "400", "500", "600", "700"],
});

/* ── Root metadata ───────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://atvagadesigns.com"),
};

/* ── JSON-LD: LocalBusiness Schema ──────────────────── */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://atvagadesigns.com",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: "https://atvagadesigns.com",
  logo: "https://atvagadesigns.com/logo.png",
  image: "https://atvagadesigns.com/og-default.jpg",
  telephone: "+1-555-000-0000",
  email: "hello@atvagadesigns.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Design Avenue",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "40.7128",
    longitude: "-74.0060",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://instagram.com/atvagadesigns",
    "https://pinterest.com/atvagadesigns",
  ],
  priceRange: "$$$",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-manrope text-brand-black antialiased">
        <ClientHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
