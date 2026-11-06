import type { Treatment } from "@/data/categories";

type CategoryNavProps = {
  categoryName: string;
  treatments: Treatment[];
};

/** Sticky in-page anchor navigation, sitting just under the sticky header. */
export default function CategoryNav({
  categoryName,
  treatments,
}: CategoryNavProps) {
  return (
    <nav
      aria-label={`${categoryName} treatments`}
      className="sticky top-[var(--header-h)] z-30 h-[var(--subnav-h)] border-b border-line bg-page"
    >
      <div className="container-site h-full">
        <div className="h-full overflow-x-auto">
          <ul className="mx-auto flex h-full w-max items-center gap-2 px-1">
            {treatments.map((t) => (
              <li key={t.slug}>
                <a
                  href={`#${t.slug}`}
                  className="block whitespace-nowrap rounded-full px-4 py-1.5 text-[15px] font-semibold text-primary transition-colors duration-200 hover:bg-band hover:text-primary-hover"
                >
                  {t.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
