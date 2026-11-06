import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookButton from "@/components/BookButton";
import CategoryNav from "@/components/CategoryNav";
import CtaBand from "@/components/CtaBand";
import SectionHeader from "@/components/SectionHeader";
import TreatmentSection from "@/components/TreatmentSection";
import { categories, categoryHref, getCategory } from "@/data/categories";
import { pageTitle } from "@/data/site";

// The five category pages are prerendered; any other slug hits notFound() (404).
export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const category = getCategory(slug);
  if (!category) return {};
  const names = category.treatments.map((t) => t.name.toLowerCase()).join(", ");
  return {
    title: pageTitle(category.name),
    description: `${category.intro} ${category.name} at Willow & Stone Skin Studio: ${names}. Sample website.`,
  };
}

export default async function CategoryPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const category = getCategory(slug);
  if (!category) notFound();

  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <section className="bg-gradient-to-b from-band to-page pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="mb-10 flex justify-center">
            <ol className="flex flex-wrap items-center gap-2 text-[15px] text-muted">
              <li>
                <Link
                  href="/services"
                  className="text-primary underline-offset-4 hover:text-primary-hover hover:underline"
                >
                  Treatments
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{category.name}</li>
            </ol>
          </nav>
          <SectionHeader
            level={1}
            title={category.name}
            intro={<p className="text-lg">{category.intro}</p>}
          />
          <div className="mt-8 flex justify-center">
            <BookButton />
          </div>
        </div>
      </section>

      <CategoryNav categoryName={category.name} treatments={category.treatments} />

      <section aria-label={`${category.name} treatments`} className="section-y bg-page">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {category.treatments.map((t) => (
            <TreatmentSection key={t.slug} treatment={t} />
          ))}
        </div>
      </section>

      <CtaBand />

      <section aria-labelledby="other-heading" className="section-y bg-band">
        <div className="container-site">
          <SectionHeader id="other-heading" eyebrow="Keep exploring" title="Other treatments" />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  href={categoryHref(c.slug)}
                  className="flex h-full items-center justify-between gap-4 rounded-[20px] border border-line bg-card p-6 font-heading text-xl text-ink transition-colors duration-200 hover:border-champagne hover:text-primary"
                >
                  {c.name}
                  <span aria-hidden="true" className="font-sans text-primary">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
