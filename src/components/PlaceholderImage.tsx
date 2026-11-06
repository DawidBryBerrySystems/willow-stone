import type { ReactNode } from "react";

type PlaceholderImageProps = {
  caption?: string;
  /** Optional content shown in the top corner, e.g. a category chip. */
  badge?: ReactNode;
  className?: string;
};

/**
 * Abstract 4:3 placeholder panel used instead of photos.
 * Purely decorative gradient; the caption makes its purpose explicit.
 */
export default function PlaceholderImage({
  caption = "Placeholder image",
  badge,
  className = "",
}: PlaceholderImageProps) {
  return (
    <figure
      className={`relative flex aspect-[4/3] w-full items-end overflow-hidden rounded-[20px] border border-line bg-gradient-to-b from-band to-page ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne"
      />
      {badge && <div className="absolute left-4 top-4">{badge}</div>}
      <figcaption className="w-full px-5 pb-4 text-center text-sm text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
