"use client";

import { useState } from "react";
import PlaceholderImage from "@/components/PlaceholderImage";
import { categories } from "@/data/categories";

// Nine neutral placeholder tiles, spread across the five categories.
const tiles = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  category: categories[i % categories.length],
}));

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");
  const visible =
    filter === "all" ? tiles : tiles.filter((t) => t.category.slug === filter);
  const activeName =
    filter === "all" ? "all categories" : categories.find((c) => c.slug === filter)?.name;

  const filters = [{ slug: "all", name: "All" }, ...categories];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter by category"
        className="flex flex-wrap justify-center gap-2"
      >
        {filters.map((f) => {
          const active = filter === f.slug;
          return (
            <button
              key={f.slug}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.slug)}
              className={`rounded-full border px-5 py-2 text-[15px] font-semibold transition-colors duration-200 ${
                active
                  ? "border-primary bg-primary text-white"
                  : "border-line bg-card text-ink hover:border-champagne"
              }`}
            >
              {f.name}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-6 text-center text-[15px] text-muted">
        Showing {visible.length} placeholder {visible.length === 1 ? "tile" : "tiles"} for{" "}
        {activeName}.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((t) => (
          <li key={t.id}>
            <PlaceholderImage
              caption="Placeholder: client photo goes here"
              badge={
                <span className="rounded-full border border-line bg-card px-3 py-1 text-[13px] font-semibold text-muted">
                  {t.category.name}
                </span>
              }
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
