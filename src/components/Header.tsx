"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BookButton from "@/components/BookButton";
import { categories, categoryHref } from "@/data/categories";
import { mainNav, site } from "@/data/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLink =
  "relative py-2 text-[16px] font-semibold text-ink transition-colors duration-200 hover:text-primary";
const activeUnderline =
  "underline decoration-primary decoration-2 underline-offset-[10px]";

function Logo({ align }: { align: "center" | "left" }) {
  return (
    <Link
      href="/"
      className={`inline-flex flex-col ${align === "center" ? "items-center" : "items-start"} leading-none`}
    >
      <span className="font-heading text-[24px] leading-[1.15] text-ink md:text-[28px]">
        {site.shortName}
      </span>
      <span className="mt-1 text-[11px] font-semibold uppercase leading-none tracking-[0.3em] text-muted">
        {site.tagline}
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const servicesLinkRef = useRef<HTMLAnchorElement>(null);

  // Close everything after navigating (React's recommended "reset on prop change" pattern).
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMenuOpen(false);
    setMobileServicesOpen(false);
    setDropdownOpen(false);
  }

  // Escape closes the mobile panel and returns focus to the menu button.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const servicesActive = isActive(pathname, "/services");

  return (
    <header className="sticky top-0 z-40 h-[var(--header-h)] border-b border-line bg-card">
      {/* Desktop / tablet: centered logo row, then centered nav row */}
      <div className="container-site hidden h-full flex-col items-center justify-center gap-3 md:flex">
        <Logo align="center" />
        <nav aria-label="Main">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              if (item.href === "/services") {
                return (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                        setDropdownOpen(false);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && dropdownOpen) {
                        setDropdownOpen(false);
                        servicesLinkRef.current?.focus();
                        // Keep it closed even though focus is back on the link.
                        requestAnimationFrame(() => setDropdownOpen(false));
                      }
                    }}
                  >
                    <Link
                      ref={servicesLinkRef}
                      href="/services"
                      aria-current={pathname === "/services" ? "page" : undefined}
                      aria-expanded={dropdownOpen}
                      aria-controls="services-dropdown"
                      className={`${navLink} inline-flex items-center gap-1.5 ${servicesActive ? activeUnderline : ""}`}
                    >
                      Services
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 12 12"
                        className={`h-3 w-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      >
                        <path
                          d="M2 4.5 6 8l4-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <div
                      id="services-dropdown"
                      className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 ${dropdownOpen ? "block" : "hidden"}`}
                    >
                      <ul className="w-64 rounded-[20px] border border-line bg-card p-2">
                        {categories.map((c) => {
                          const href = categoryHref(c.slug);
                          const current = pathname === href;
                          return (
                            <li key={c.slug}>
                              <Link
                                href={href}
                                aria-current={current ? "page" : undefined}
                                className={`block rounded-xl px-4 py-2.5 text-[16px] transition-colors duration-200 hover:bg-band ${current ? "font-semibold text-primary" : "text-ink"}`}
                              >
                                {c.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${navLink} ${active ? activeUnderline : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <BookButton className="px-6! py-2.5!" />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile: logo left, hamburger right */}
      <div className="container-site flex h-full items-center justify-between md:hidden">
        <Logo align="left" />
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors duration-200 hover:border-champagne"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-b border-line bg-card md:hidden"
      >
        <nav aria-label="Mobile" className="container-site py-4">
          <ul className="divide-y divide-line">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              if (item.href === "/services") {
                return (
                  <li key={item.href} className="py-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href="/services"
                        aria-current={pathname === "/services" ? "page" : undefined}
                        className={`${navLink} block py-3 ${servicesActive ? activeUnderline : ""}`}
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileServicesOpen}
                        aria-controls="mobile-services"
                        onClick={() => setMobileServicesOpen((o) => !o)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-band"
                      >
                        <span className="sr-only">
                          {mobileServicesOpen ? "Hide" : "Show"} treatment categories
                        </span>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 12 12"
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                        >
                          <path
                            d="M2 4.5 6 8l4-3.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <ul
                      id="mobile-services"
                      hidden={!mobileServicesOpen}
                      className="mb-2 ml-4 border-l border-champagne pl-4"
                    >
                      {categories.map((c) => {
                        const href = categoryHref(c.slug);
                        const current = pathname === href;
                        return (
                          <li key={c.slug}>
                            <Link
                              href={href}
                              aria-current={current ? "page" : undefined}
                              className={`block py-2.5 text-[16px] ${current ? `font-semibold text-primary ${activeUnderline} underline-offset-4` : "text-ink"}`}
                            >
                              {c.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
              return (
                <li key={item.href} className="py-1">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`${navLink} block py-3 ${active ? activeUnderline : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-4">
            <BookButton className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
