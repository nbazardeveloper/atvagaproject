import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type ColorScheme = "dark" | "light";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  scheme?: ColorScheme;
  children: ReactNode;
  fullWidth?: boolean;
}

/**
 * Button
 * All variants use uppercase + tracking-widest per ATVAGA brand rules.
 * border-radius is always 0 (enforced globally in globals.css).
 *
 * Variants:
 *   primary  – filled (pink or charcoal depending on scheme)
 *   outline  – transparent with border
 *   ghost    – no border, text only with underline on hover
 *
 * Schemes:
 *   dark  – for use on white/light backgrounds
 *   light – for use on dark/charcoal backgrounds
 */
export default function Button({
  variant = "primary",
  scheme = "dark",
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "btn-base tracking-widest rounded-none" +
    (fullWidth ? " w-full" : "");

  const styles: Record<Variant, Record<ColorScheme, string>> = {
    primary: {
      dark: "bg-brand-charcoal text-brand-white border border-brand-charcoal hover:bg-brand-pink hover:border-brand-pink",
      light:
        "bg-brand-white text-brand-black border border-brand-white hover:bg-brand-pink hover:border-brand-pink hover:text-brand-white",
    },
    outline: {
      dark: "bg-transparent text-brand-black border border-brand-charcoal hover:bg-brand-charcoal hover:text-brand-white",
      light:
        "bg-transparent text-brand-white border border-brand-white hover:bg-brand-white hover:text-brand-black",
    },
    ghost: {
      dark: "bg-transparent text-brand-black border-none underline-offset-4 hover:underline",
      light:
        "bg-transparent text-brand-white border-none underline-offset-4 hover:underline",
    },
  };

  return (
    <button
      className={`${base} ${styles[variant][scheme]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
