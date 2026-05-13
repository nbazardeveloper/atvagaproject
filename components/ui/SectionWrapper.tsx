import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * SectionWrapper — single vertical axis for all content.
 *
 * Pattern: backgrounds bleed edge-to-edge on the outer <section>.
 * This div fills 100% of that section and uses padding alone
 * to create luxury magazine margins — NO max-width cap.
 *
 * Padding scale:
 *   mobile  → px-5   (20px)
 *   tablet  → px-10  (40px)
 *   desktop → px-20  (80px)
 *   wide    → px-28  (112px)  ← only constraint on large screens
 */
export default function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <div
      className={`w-full px-5 md:px-10 lg:px-20 xl:px-28 ${className}`}
    >
      {children}
    </div>
  );
}
