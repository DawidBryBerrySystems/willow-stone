import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-sans text-base font-semibold leading-tight transition-colors duration-200 text-center";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary:
    "border border-primary text-primary hover:bg-primary hover:text-white",
  light: "bg-on-dark text-ink hover:bg-white",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Opens in a new tab with rel="noopener noreferrer". */
  external?: boolean;
  className?: string;
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  return `${base} ${variants[variant]} ${className}`.trim();
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = buttonClasses(variant, className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
