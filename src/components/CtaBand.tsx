import BookButton from "@/components/BookButton";

type CtaBandProps = {
  title?: string;
};

/** Dark call-to-action band with a light "Book a consultation" button. */
export default function CtaBand({
  title = "Curious what's right for you?",
}: CtaBandProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="on-dark section-y bg-dark text-on-dark"
    >
      <div className="container-site text-center">
        <h2
          id="cta-heading"
          className="text-[clamp(1.875rem,4vw,3rem)] text-on-dark"
        >
          {title}
        </h2>
        <span
          aria-hidden="true"
          className="mx-auto mt-6 block h-0.5 w-12 bg-champagne"
        />
        <div className="mt-8">
          <BookButton variant="light" />
        </div>
      </div>
    </section>
  );
}
