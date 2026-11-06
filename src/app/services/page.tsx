import type { Metadata } from "next";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import SectionHeader from "@/components/SectionHeader";
import { categories, categoryHref } from "@/data/categories";
import { pageTitle } from "@/data/site";

export const metadata: Metadata = {
  title: pageTitle("Treatments"),
  description:
    "Browse treatment categories at Willow & Stone Skin Studio: injectables, skin health, laser and light, body sculpting and wellness. Sample website.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-band to-page pb-16 pt-20 md:pb-20 md:pt-28">
        <div className="container-site">
          <SectionHeader
            level={1}
            eyebrow="Services"
            title="Treatments"
            intro={
              <p className="text-lg">
                Browse our treatment categories. Every treatment begins with a
                consultation.
              </p>
            }
          />
        </div>
      </section>

      <section aria-label="Treatment categories" className="bg-page pb-[72px] md:pb-[104px]">
        <div className="container-site">
          <ul className="border-t border-line">
            {categories.map((c) => (
              <li key={c.slug} className="border-b border-line">
                <div className="grid gap-5 py-10 md:grid-cols-[1fr_2fr_auto] md:items-center md:gap-10 md:py-12">
                  <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] text-ink">
                    {c.name}
                  </h2>
                  <div>
                    <p className="text-muted">{c.description}</p>
                    <ul aria-label={`${c.name} treatments`} className="mt-4 flex flex-wrap gap-2">
                      {c.treatments.map((t) => (
                        <li
                          key={t.slug}
                          className="rounded-full border border-line bg-card px-3.5 py-1 text-[14px] text-muted"
                        >
                          {t.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={categoryHref(c.slug)}
                    className="group inline-flex items-center gap-3 justify-self-start font-semibold text-primary transition-colors duration-200 hover:text-primary-hover md:justify-self-end"
                  >
                    <span className="md:sr-only">View {c.name}</span>
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-primary text-xl transition-colors duration-200 group-hover:bg-primary group-hover:text-white"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-16 text-center">
            <p className="text-muted">Pricing is shared during your consultation.</p>
            <div className="mt-6">
              <BookButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
