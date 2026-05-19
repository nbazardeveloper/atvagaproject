export type ShowcaseItem = {
  title: string;
  imageSrc: string;
};

export const SHOWCASE_ITEMS: readonly ShowcaseItem[] = [
  {
    title: "Design Drawings",
    imageSrc: "/images/services/design-drawings.webp",
  },
  {
    title: "Permit Plans",
    imageSrc: "/images/services/permit-plans.webp",
  },
  {
    title: "ADU/DADU Design",
    imageSrc: "/images/services/daduesign-card.jpg",
  },
  {
    title: "Additions & Remodels",
    imageSrc: "/images/services/additions-remodels.webp",
  },
  {
    title: "Interior Layout Planning",
    imageSrc: "/images/services/interior-layout-planning.webp",
  },
  {
    title: "Exterior & Facade Improvements",
    imageSrc: "/images/services/exterior-facade-Improvements.webp",
  },
  {
    title: "3D Renderings",
    imageSrc: "/images/services/3D-renderings.webp",
  },
  {
    title: "City Permit Submittals",
    imageSrc: "/images/services/city-permit-submittals.webp",
  },
  {
    title: "Coordination with Engineers",
    imageSrc: "/images/services/coordination-engineers.webp",
  },
  {
    title: "Residential Design Services",
    imageSrc: "/images/services/desidential-design-services.webp",
  },
] as const;