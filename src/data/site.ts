export type SiteInfo = {
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
  };
  phone: string;
  phoneHref: string;
  email: string;
  hours: string;
  bookingUrl: string;
  credit: {
    text: string;
    name: string;
    url: string;
  };
};

export const site: SiteInfo = {
  name: "Willow & Stone Skin Studio",
  shortName: "Willow & Stone",
  tagline: "Skin Studio",
  summary: "Independent med spa in Portland, Oregon.",
  address: {
    street: "400 Example Lane",
    city: "Portland",
    region: "OR",
    postalCode: "97201",
  },
  phone: "(555) 010-0300",
  phoneHref: "tel:+15550100300",
  email: "hello@willowandstone.example",
  hours: "Tue–Sat 10am–6pm",
  bookingUrl: "https://example.com/book",
  credit: {
    text: "This is a sample website for a fictional clinic, created by",
    name: "BryBerry Systems",
    url: "https://bryberrysystems.com",
  },
};

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

/** Builds the page title in the form "[Page] | Willow & Stone Skin Studio (sample)". */
export function pageTitle(page: string): string {
  return `${page} | ${site.name} (sample)`;
}

export type NavLink = { href: string; label: string };

/** Primary navigation (Services is expanded with the categories in the header). */
export const mainNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];
