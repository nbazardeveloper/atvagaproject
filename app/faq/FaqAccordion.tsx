"use client";

import { useState } from "react";
import { FAQ_DATA } from "./faqData";

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
            "mt-1 shrink-0 text-brand-pink",
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
          "overflow-hidden",
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
                  "w-full rounded-none border-b border-brand-gray-light py-3 text-left font-manrope text-sm",
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
