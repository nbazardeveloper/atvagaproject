"use client";

import dynamic from "next/dynamic";

const StickyServicesShowcase = dynamic(
  () => import("@/components/services/StickyServicesShowcase")
);

export default StickyServicesShowcase;