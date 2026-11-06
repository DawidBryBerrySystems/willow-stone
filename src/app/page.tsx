import type { Metadata } from "next";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import SectionHeader from "@/components/SectionHeader";
import { categories, categoryHref } from "@/data/categories";
import { pageTitle } from "@/data/site";

export const metadata: Metadata = {
  title: pageTitle("Home"),
  description:
    "Willow & Stone Skin Studio is a fictional independent med spa in Portland, Oregon offering injectables, skin health, laser and body treatments. Sample website.",
};

const firstVisit = [
  {
    title: "We talk",
    text: "Tell us what you'd like to change and what you'd like to keep.",
  },
  { title: "We plan", text: "You get a clear plan that fits your goals." },
  {
    title: "We treat",
    text: "We carry out your plan and check in afterwards.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-band to-page">
        <div className="container-site flex min-h-[min(78vh,720px)] flex-col items-center justify-center py-24 text-center md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Independent med spa · Portland, OR
          </p>
          <h1 className="mt-6 max-w-3xl text-[clamp(2.5rem,6vw,4.25rem)] text-ink">
            Skin and body care that starts with a conversation.
          </h1>
          <span aria-hidden="true" className="mt-8 block h-0.5 w-12 bg-champagne" />
          <p className="mt-8 max-w-xl text-lg text-muted">
            Injectables, skin health, laser and body treatments, planned around
            your goals.
          </p>
          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
            <BookButton className="w-full sm:w-auto" />
            <Button href="/services" variant="secondary" className="w-full sm:w-auto">
              View treatments
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="treatments-heading" className="section-y bg-page">
        <div className="container-site">
          <SectionHeader
            id="treatments-heading"
            eyebrow="What we offer"
            title="Our treatments"
          />
          <ul className="mt-14 flex flex-wrap justify-center gap-6">
            {categories.map((c) => (
              <Card
                key={c.slug}
                as="li"
                className="flex w-full flex-col sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                <h3 className="text-2xl text-ink">{c.name}</h3>
                <span aria-hidden="true" className="mt-4 block h-0.5 w-12 bg-champagne" />
                <p className="mt-4 text-muted">{c.description}</p>
                <Link
                  href={categoryHref(c.slug)}
                  className="mt-auto inline-flex items-center gap-2 pt-6 font-semibold text-primary underline-offset-4 transition-colors duration-200 hover:text-primary-hover hover:underline"
                >
                  Learn more<span className="sr-only"> about {c.name}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </Card>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="visit-heading" className="section-y bg-band">
        <div className="container-site">
          <SectionHeader
            id="visit-heading"
            eyebrow="How it works"
            title="Your first visit"
          />
          <ol className="mt-14 grid gap-6 md:grid-cols-3">
            {firstVisit.map((step, i) => (
              <Card key={step.title} as="li">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne font-heading text-xl text-primary"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 text-2xl text-ink">
                  <span className="sr-only">Step {i + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-3 text-muted">{step.text}</p>
              </Card>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
