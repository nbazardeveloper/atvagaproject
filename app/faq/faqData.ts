export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    category: "Working With Us",
    items: [
      {
        question: "How do I get started with ATVAGA Designs?",
        answer:
          "The first step is a complimentary 30-minute discovery call. We'll discuss your project goals, scope, timeline, and budget to determine whether we're the right fit for each other. You can book through our Contact page.",
      },
      {
        question: "What does a typical interior design project look like?",
        answer:
          "Our process moves through four phases: Discovery (understanding your needs), Concept (mood boards and spatial plans), Development (technical drawings, specification, and procurement), and Installation (delivery, styling, and reveal). Each phase has defined deliverables and milestones.",
      },
      {
        question: "Do you work with clients outside of your listed cities?",
        answer:
          "Yes. While our primary markets are listed on our site, we regularly take on projects in other US cities and internationally. Travel and accommodation fees apply for on-site visits beyond our home market.",
      },
      {
        question: "Can I hire you for just one room?",
        answer:
          "Absolutely. We offer single-room design packages in addition to full-home commissions. Our Styling & Decor service is also ideal for spaces that need a refresh rather than a full redesign.",
      },
    ],
  },
  {
    category: "Pricing & Budgets",
    items: [
      {
        question: "How do you structure your fees?",
        answer:
          "We typically work on a flat-fee basis for well-scoped projects, or a percentage-of-project-cost model for larger, more complex commissions. Some services, like 3D rendering, are offered at fixed rates. We'll present a clear fee proposal after your discovery call.",
      },
      {
        question: "What budget should I set aside for furniture and materials?",
        answer:
          "A useful rule of thumb is to budget 10-20% of your home's value for a full interior design project. For targeted room refreshes, budgets vary widely. During Discovery, we'll create a realistic budget framework for your specific scope.",
      },
      {
        question: "Do you charge for the initial consultation?",
        answer:
          "The initial 30-minute discovery call is complimentary. If your project proceeds to a detailed brief and site visit, a paid consultation fee will apply, which is credited against your project fee if you proceed.",
      },
      {
        question: "Can you work within a tight budget?",
        answer:
          "Yes, within reason. Our most impactful tool is knowing where to invest and where to save. We'll advise you honestly on where quality matters most and where smart alternatives exist.",
      },
    ],
  },
  {
    category: "The Design Process",
    items: [
      {
        question: "How long does a full interior design project take?",
        answer:
          "A single room typically takes 8-14 weeks from kickoff to installation. A whole home can range from 6 months to over a year, depending on scope, custom fabrication timelines, and construction complexity.",
      },
      {
        question: "Will I have input into the design decisions?",
        answer:
          "Your input is central to every decision. We present concepts, gather your feedback, and refine until the design is something you genuinely love, not just something we love. It's a collaboration, not a dictation.",
      },
      {
        question: "Do you manage the contractors and tradespeople?",
        answer:
          "Yes. Our Project Management service covers contractor sourcing, coordination, on-site oversight, and quality control. You benefit from our established relationships with trusted trades and our experience navigating common construction challenges.",
      },
      {
        question: "What if I want to make changes mid-project?",
        answer:
          "We accommodate changes where possible and will assess any impact on timeline and budget transparently. We'll always be honest if a proposed change risks compromising the quality or coherence of the overall design.",
      },
    ],
  },
  {
    category: "3D Rendering",
    items: [
      {
        question: "What is included in a 3D rendering package?",
        answer:
          "Our standard package includes three photorealistic still renders of your space (from client-approved viewpoints), one revision round, and high-resolution files delivered in JPEG and PDF formats. Additional renders and 360 panoramas are available as add-ons.",
      },
      {
        question: "How accurate are the renders compared to the finished space?",
        answer:
          "Our renders are produced to match specified materials, furniture, and light conditions as closely as possible. Real-world variation in natural light and material batches may produce subtle differences, but our renders are accurate enough to make confident procurement decisions.",
      },
      {
        question: "Can I get renders without signing up for full design services?",
        answer:
          "Yes. 3D rendering is available as a standalone service. You'll need to supply a measured floor plan, elevations, and your material and furniture specifications. We can also build on concepts you've developed with another designer.",
      },
    ],
  },
];