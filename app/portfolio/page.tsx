import type { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";
import { buildBreadcrumbSchema, portfolioMetadata } from "@/app/metadata";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = portfolioMetadata;

const portfolioPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "ATVAGA Portfolio",
  description: portfolioMetadata.description,
  url: "https://atvagadesigns.com/portfolio",
  isPartOf: {
    "@id": "https://atvagadesigns.com#website",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <StructuredData
        data={[
          portfolioPageSchema,
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
        ]}
      />
      <PortfolioClient />
    </>
  );
}
