import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  /** Use 1 for the page heading (one per page), 2 for section headings. */
  level?: 1 | 2;
  id?: string;
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  level = 2,
  id,
  className = "",
}: SectionHeaderProps) {
  const Heading = level === 1 ? "h1" : "h2";
  const size =
    level === 1
      ? "text-[clamp(2.25rem,5vw,3.5rem)]"
      : "text-[clamp(1.875rem,4vw,3rem)]";

  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {eyebrow}
        </p>
      )}
      <Heading id={id} className={`${size} text-ink`}>
        {title}
      </Heading>
      <span
        aria-hidden="true"
        className="mx-auto mt-6 block h-0.5 w-12 bg-champagne"
      />
      {intro && <div className="mt-6 text-muted">{intro}</div>}
    </div>
  );
}
