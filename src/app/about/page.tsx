import type { Metadata } from "next";
import Card from "@/components/Card";
import CtaBand from "@/components/CtaBand";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionHeader from "@/components/SectionHeader";
import { pageTitle } from "@/data/site";

export const metadata: Metadata = {
  title: pageTitle("About"),
  description:
    "About Willow & Stone, a fictional independent skin studio in Portland built on clear communication and personalized care. Sample website.",
};

const principles = [
  {
    title: "Listen first",
    text: "Every visit begins with time to hear what you'd like and what matters to you.",
  },
  {
    title: "Explain clearly",
    text: "We walk you through your options in plain language, including what to expect.",
  },
  {
    title: "Plan together",
    text: "You and your provider agree on a plan, and you can take time to decide.",
  },
];

const team = [
  { initials: "LH", name: "Dr. L. Hart", role: "Medical Director" },
  { initials: "RS", name: "R. Stone", role: "Lead Aesthetician" },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-y bg-gradient-to-b from-band to-page">
        <div className="container-site grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Our studio
            </p>
            <h1 className="mt-4 text-[clamp(2.25rem,5vw,3.5rem)] text-ink">
              About Willow &amp; Stone
            </h1>
            <span
              aria-hidden="true"
              className="mx-auto mt-6 block h-0.5 w-12 bg-champagne md:mx-0"
            />
            <p className="mt-6 text-lg text-ink">
              Willow &amp; Stone is an independent skin studio built on clear
              communication and personalized care.
            </p>
            <p className="mt-4 text-muted">
              We take the time to explain your options, so every decision stays
              yours.
            </p>
          </div>
          <PlaceholderImage />
        </div>
      </section>

      <section aria-labelledby="how-heading" className="section-y bg-band">
        <div className="container-site">
          <SectionHeader id="how-heading" eyebrow="Our approach" title="How we work" />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {principles.map((p) => (
              <Card key={p.title} as="li">
                <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-champagne" />
                <h3 className="mt-5 text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-muted">{p.text}</p>
              </Card>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="team-heading" className="section-y bg-page">
        <div className="container-site">
          <SectionHeader id="team-heading" eyebrow="People" title="The team" />
          <ul className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {team.map((m) => (
              <Card key={m.name} as="li" className="text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-line bg-band font-heading text-2xl text-muted"
                >
                  {m.initials}
                </span>
                <h3 className="mt-6 text-2xl text-ink">{m.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                  {m.role}
                </p>
                <p className="mt-4 text-muted">
                  Sample profile. Credentials and a short bio appear here.
                </p>
              </Card>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
