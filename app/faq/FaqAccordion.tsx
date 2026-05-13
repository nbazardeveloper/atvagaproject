"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

const FAQ_DATA: FaqCategory[] = [
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
          "We typically work on a flat-fee basis for well-scoped projects, or a percentage-of-project-cost model for larger, more complex commissions. Some services — like 3D rendering — are offered at fixed rates. We'll present a clear fee proposal after your discovery call.",
      },
      {
        question: "What budget should I set aside for furniture and materials?",
        answer:
          "A useful rule of thumb is to budget 10–20% of your home's value for a full interior design project. For targeted room refreshes, budgets vary widely. During Discovery, we'll create a realistic budget framework for your specific scope.",
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
          "A single room typically takes 8–14 weeks from kickoff to installation. A whole home can range from 6 months to over a year, depending on scope, custom fabrication timelines, and construction complexity.",
      },
      {
        question: "Will I have input into the design decisions?",
        answer:
          "Your input is central to every decision. We present concepts, gather your feedback, and refine until the design is something you genuinely love — not just something we love. It's a collaboration, not a dictation.",
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
          "Our standard package includes three photorealistic still renders of your space (from client-approved viewpoints), one revision round, and high-resolution files delivered in JPEG and PDF formats. Additional renders, animations, and 360° panoramas are available as add-ons.",
      },
      {
        question: "How accurate are the renders compared to the finished space?",
        answer:
          "Our renders are produced to match specified materials, furniture, and light conditions as closely as possible. Real-world variation in natural light and material batches may produce subtle differences, but our renders are accurate enough to make confident procurement decisions.",
      },
      {
        question: "Can I get renders without signing up for full design services?",
        answer:
          "Yes. 3D rendering is available as a standalone service. You'll need to supply a measured floor plan, elevations, and your material/furniture specifications. We can also build on concepts you've developed with another designer.",
      },
    ],
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-brand-gray-light">
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-manrope text-sm font-semibold text-brand-black md:text-base">
          {question}
        </span>
        <span
          className={[
            "mt-1 shrink-0 text-brand-pink transition-transform duration-300",
            isOpen ? "rotate-45" : "",
          ].join(" ")}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2V14M2 8H14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>
      <div
        className={[
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0",
        ].join(" ")}
      >
        <p className="font-manrope text-sm leading-relaxed text-brand-gray">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const [activeCategory, setActiveCategory] = useState<string>(
    FAQ_DATA[0].category
  );

  const currentCategory = FAQ_DATA.find((c) => c.category === activeCategory);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
      {/* Category nav */}
      <nav aria-label="FAQ categories" className="flex flex-col">
        <p className="font-manrope mb-4 text-[0.65rem] font-semibold uppercase tracking-widest text-brand-pink">
          Categories
        </p>
        <ul className="flex flex-col gap-1">
          {FAQ_DATA.map(({ category }) => (
            <li key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={[
                  "w-full rounded-none border-b border-brand-gray-light py-3 text-left font-manrope text-sm transition-colors duration-200",
                  activeCategory === category
                    ? "font-semibold text-brand-black border-b-brand-black border-b-2"
                    : "text-brand-gray hover:text-brand-black",
                ].join(" ")}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Accordion */}
      <div>
        <h2 className="font-italiana mb-6 text-brand-black">
          {activeCategory}
        </h2>
        <div>
          {currentCategory?.items.map(({ question, answer }) => {
            const key = `${activeCategory}::${question}`;
            return (
              <AccordionItem
                key={key}
                question={question}
                answer={answer}
                isOpen={!!openItems[key]}
                onToggle={() => toggle(key)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
