import type { Metadata } from "next";
import { portfolioMetadata } from "@/app/metadata";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = portfolioMetadata;

export default function PortfolioPage() {
  return <PortfolioClient />;
}
