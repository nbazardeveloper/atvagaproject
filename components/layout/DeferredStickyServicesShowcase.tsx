"use client";

import dynamic from "next/dynamic";
import StaticServicesShowcase from "@/components/layout/StaticServicesShowcase";

const StickyServicesShowcase = dynamic(
  () => import("@/components/layout/StickyServicesShowcase"),
  {
    ssr: false,
    loading: () => <StaticServicesShowcase />,
  }
);

export default function DeferredStickyServicesShowcase() {
  return <StickyServicesShowcase />;
}