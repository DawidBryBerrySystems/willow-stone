export type Treatment = {
  /** Kebab-case id, used as the anchor id on the category page. */
  slug: string;
  name: string;
  description: string;
};

export type Category = {
  slug: string;
  name: string;
  /** One-line description used on the home page and services overview. */
  description: string;
  /** Intro shown at the top of the category page. */
  intro: string;
  treatments: Treatment[];
};

export const categories: Category[] = [
  {
    slug: "injectables",
    name: "Injectables",
    description: "Wrinkle relaxers and fillers to soften lines and restore volume.",
    intro: "Injectable treatments to soften lines and restore volume.",
    treatments: [
      {
        slug: "wrinkle-relaxers",
        name: "Wrinkle relaxers",
        description:
          "Neuromodulator treatments used to soften the look of expression lines. Your provider reviews the areas and approach with you first.",
      },
      {
        slug: "dermal-fillers",
        name: "Dermal fillers",
        description:
          "Hyaluronic acid-based fillers that restore volume and shape. Placement is planned around your features.",
      },
      {
        slug: "lip-enhancement",
        name: "Lip enhancement",
        description:
          "Gentle shaping and hydration for the lips, aiming for balance and natural proportions.",
      },
      {
        slug: "jawline-contouring",
        name: "Jawline contouring",
        description:
          "Filler used to add definition to the lower face, planned after a careful assessment.",
      },
    ],
  },
  {
    slug: "skin-health",
    name: "Skin Health",
    description: "Facials, peels and microneedling for healthier-looking skin.",
    intro: "Facials, peels and microneedling for healthier-looking skin.",
    treatments: [
      {
        slug: "custom-facial",
        name: "Custom facial",
        description:
          "A facial tailored to your skin, with cleansing, exfoliation and hydration.",
      },
      {
        slug: "chemical-peels",
        name: "Chemical peels",
        description:
          "Exfoliating treatments at different strengths to refresh the look of tone and texture.",
      },
      {
        slug: "microneedling",
        name: "Microneedling",
        description:
          "Controlled micro-injuries that support the look of smoother, firmer skin.",
      },
      {
        slug: "prf-treatment",
        name: "PRF treatment",
        description:
          "A treatment using your own blood-derived concentrate, often paired with microneedling. Your provider explains the process at your consultation.",
      },
    ],
  },
  {
    slug: "laser-light",
    name: "Laser & Light",
    description: "Laser and light-based options for hair, tone and texture.",
    intro: "Laser and light-based options for hair, tone and texture.",
    treatments: [
      {
        slug: "laser-hair-removal",
        name: "Laser hair removal",
        description:
          "A series of sessions that reduces unwanted hair over time. The number depends on your hair and skin.",
      },
      {
        slug: "ipl-photofacial",
        name: "IPL photofacial",
        description:
          "Intense pulsed light used to address the look of uneven tone and sun-related changes.",
      },
      {
        slug: "laser-resurfacing",
        name: "Laser resurfacing",
        description:
          "A treatment designed to refresh the look of skin texture. Downtime depends on the settings used.",
      },
      {
        slug: "pigmentation-treatment",
        name: "Pigmentation treatment",
        description:
          "A targeted approach to the look of dark spots, planned after an assessment of your skin.",
      },
    ],
  },
  {
    slug: "body-sculpting",
    name: "Body Sculpting",
    description: "Non-surgical options to contour and tighten.",
    intro: "Non-surgical options to contour and tighten.",
    treatments: [
      {
        slug: "fat-reduction",
        name: "Fat reduction",
        description:
          "Non-surgical treatments designed to reduce the look of stubborn fat in targeted areas.",
      },
      {
        slug: "skin-tightening",
        name: "Skin tightening",
        description:
          "Energy-based treatments that support the look of firmer skin on the face and body.",
      },
      {
        slug: "cellulite-treatment",
        name: "Cellulite treatment",
        description:
          "Treatments aimed at improving the look of dimpled skin, with a plan built around your concerns.",
      },
    ],
  },
  {
    slug: "wellness",
    name: "Wellness",
    description: "Supportive treatments to help you feel your best.",
    intro: "Supportive treatments to help you feel your best.",
    treatments: [
      {
        slug: "iv-therapy",
        name: "IV therapy",
        description:
          "Hydration and nutrient infusions chosen after a short health review with a provider.",
      },
      {
        slug: "vitamin-injections",
        name: "Vitamin injections",
        description:
          "Quick vitamin and nutrient shots. A provider confirms eligibility before treatment.",
      },
    ],
  },
];

/** Shown on every treatment card. */
export const goodToKnow: string[] = [
  "Consultation required",
  "Plan tailored to you",
  "Results vary by individual",
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function categoryHref(slug: string): string {
  return `/services/${slug}`;
}
