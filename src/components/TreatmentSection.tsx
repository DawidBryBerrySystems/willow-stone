import Button from "@/components/Button";
import Card from "@/components/Card";
import { goodToKnow, type Treatment } from "@/data/categories";

type TreatmentSectionProps = {
  treatment: Treatment;
};

/** One treatment card on a category page. Its id is the anchor target. */
export default function TreatmentSection({ treatment }: TreatmentSectionProps) {
  const headingId = `${treatment.slug}-heading`;

  return (
    <Card
      as="article"
      id={treatment.slug}
      aria-labelledby={headingId}
      className="flex scroll-mt-[calc(var(--subnav-h)+8px)] flex-col"
    >
      <h2 id={headingId} className="text-[1.75rem] text-ink">
        {treatment.name}
      </h2>
      <span aria-hidden="true" className="mt-4 block h-0.5 w-12 bg-champagne" />
      <p className="mt-4 text-ink">{treatment.description}</p>

      <h3 className="mt-6 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        Good to know
      </h3>
      <ul className="mt-3 space-y-1.5 text-muted">
        {goodToKnow.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
            />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Button href="/contact" variant="secondary">
          Ask about this treatment
          <span className="sr-only">: {treatment.name}</span>
        </Button>
      </div>
    </Card>
  );
}
