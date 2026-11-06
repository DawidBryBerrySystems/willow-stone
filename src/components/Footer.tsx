import Link from "next/link";
import { categories, categoryHref } from "@/data/categories";
import { fullAddress, site } from "@/data/site";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  ...categories.map((c) => ({ href: categoryHref(c.slug), label: c.name })),
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const linkClass =
  "text-on-dark underline-offset-4 transition-colors duration-200 hover:text-white hover:underline";

export default function Footer() {
  return (
    <footer className="on-dark border-t border-muted bg-dark text-on-dark">
      <div className="container-site py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          <div>
            <p className="font-heading text-2xl leading-[1.15]">{site.name}</p>
            <span aria-hidden="true" className="mt-4 block h-0.5 w-12 bg-champagne" />
            <p className="mt-4 text-on-dark">{site.summary}</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-on-dark">
              Pages
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {pageLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-on-dark">
              Visit
            </p>
            <address className="mt-4 space-y-2 not-italic text-on-dark">
              <p>{fullAddress}</p>
              <p>
                <a href={site.phoneHref} className={linkClass}>
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className={`${linkClass} break-all`}>
                  {site.email}
                </a>
              </p>
              <p>{site.hours}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-muted pt-8 text-center text-[15px] text-on-dark">
          <p>
            {site.credit.text}{" "}
            <a
              href={site.credit.url}
              className="text-on-dark underline underline-offset-4 hover:text-white"
            >
              {site.credit.name}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
