import type { Metadata } from "next";
import BookButton from "@/components/BookButton";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { fullAddress, pageTitle, site } from "@/data/site";
import InquiryForm from "./InquiryForm";

export const metadata: Metadata = {
  title: pageTitle("Contact"),
  description:
    "Contact Willow & Stone Skin Studio, a fictional med spa in Portland, Oregon: address, phone, email, hours and a sample inquiry form.",
};

const details = [
  { label: "Address", value: fullAddress },
  { label: "Phone", value: site.phone, href: site.phoneHref },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-band to-page pb-12 pt-20 md:pt-28">
        <div className="container-site">
          <SectionHeader
            level={1}
            eyebrow="Get in touch"
            title="Contact us"
          />
        </div>
      </section>

      <section className="bg-page pb-[72px] md:pb-[104px]">
        <div className="container-site grid gap-10 md:grid-cols-[2fr_3fr] md:gap-12">
          <div>
            <h2 className="text-[clamp(1.75rem,3vw,2.25rem)] text-ink">Visit the studio</h2>
            <span aria-hidden="true" className="mt-5 block h-0.5 w-12 bg-champagne" />
            <dl className="mt-8 space-y-6">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {d.label}
                  </dt>
                  <dd className="mt-1 text-ink">
                    {d.href ? (
                      <a
                        href={d.href}
                        className="break-words underline decoration-champagne underline-offset-4 transition-colors duration-200 hover:text-primary"
                      >
                        {d.value}
                      </a>
                    ) : (
                      d.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <Card>
            <h2 id="form-heading" className="text-[clamp(1.75rem,3vw,2.25rem)] text-ink">
              Send an inquiry
            </h2>
            <span aria-hidden="true" className="mb-8 mt-5 block h-0.5 w-12 bg-champagne" />
            <InquiryForm />
          </Card>
        </div>

        <div className="container-site mt-16 text-center">
          <p className="text-muted">Prefer to book directly?</p>
          <div className="mt-5">
            <BookButton />
          </div>
        </div>
      </section>
    </>
  );
}
