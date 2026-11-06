import type { Metadata } from "next";
import { Marcellus, Nunito_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { pageTitle } from "@/data/site";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: pageTitle("Home"),
  description:
    "Willow & Stone Skin Studio is a fictional independent med spa in Portland, Oregon. Sample website.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${marcellus.variable} ${nunitoSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-primary px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
