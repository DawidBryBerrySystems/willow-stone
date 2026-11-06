import Button from "@/components/Button";
import { site } from "@/data/site";

type BookButtonProps = {
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

/** "Book a consultation" — always the external booking link, in a new tab. */
export default function BookButton({
  variant = "primary",
  className,
}: BookButtonProps) {
  return (
    <Button href={site.bookingUrl} external variant={variant} className={className}>
      Book a consultation
    </Button>
  );
}
