interface ImagePlaceholderProps {
  width?: number;
  height?: number;
  label?: string;
  className?: string;
  aspectRatio?: string;
}

/**
 * ImagePlaceholder
 * Visual stand-in for real project images. Renders a styled div with
 * an aspect-ratio container and a label. Replace with next/image in
 * production by swapping this component where it's used.
 *
 * Uses only brand tokens — no inline colors.
 */
export default function ImagePlaceholder({
  label = "Project Image",
  className = "",
  aspectRatio = "aspect-[4/3]",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-brand-gray-light ${aspectRatio} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        {/* Decorative crosshair icon */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-brand-gray opacity-40"
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
          <line x1="16" y1="0" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" />
          <line x1="16" y1="24" x2="16" y2="32" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="16" x2="8" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="24" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="font-manrope text-xs uppercase tracking-widest text-brand-gray opacity-60">
          {label}
        </span>
      </div>
    </div>
  );
}
