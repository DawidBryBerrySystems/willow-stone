import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import SectionHeader from "@/components/SectionHeader";
import { pageTitle } from "@/data/site";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: pageTitle("Gallery"),
  description:
    "Gallery placeholders for Willow & Stone Skin Studio, a fictional med spa in Portland. Sample website with no real photos.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-band to-page pb-12 pt-20 md:pt-28">
        <div className="container-site">
          <SectionHeader
            level={1}
            eyebrow="Gallery"
            title="Gallery"
            intro={
              <p className="text-lg">
                A selection of treatment results appears here. All photos are
                shared with patient consent.
              </p>
            }
          />
        </div>
      </section>

      <section aria-label="Gallery tiles" className="bg-page pb-[72px] md:pb-[104px]">
        <div className="container-site">
          <GalleryGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
