import ServicesPageContent from "./ServicesPageContent";

export const metadata = {
  title: "Astrology Services | Horoscope, Kundli, Vastu, Tarot & Numerology",
  description:
    "Explore trusted Vedic astrology services including horoscope readings, Kundli analysis, Kundli matching, Vastu Shastra, Tarot, Numerology and Gemstone consultation.",
  keywords: [
    "astrology services",
    "kundli analysis",
    "kundli matching",
    "vastu shastra",
    "tarot reading",
    "numerology",
    "gemstone consultation",
    "birth chart",
    "vedic astrology services",
  ],
  alternates: { canonical: "https://www.guruastrology.in/services" },
  openGraph: {
    title: "Astrology Services | Guru Astrology",
    description:
      "Explore our complete range of Vedic astrology services — Horoscope, Kundli, Tarot, Vastu, Gemstones and more.",
    url: "https://www.guruastrology.in/services",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Guru Astrology Services",
  description: "Professional Vedic astrology services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Vastu Shastra",
      description: "Harmonize living spaces with ancient Vastu principles.",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Birth Chart Analysis",
      description: "Comprehensive Vedic birth chart analysis.",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Tarot Reading",
      description:
        "Accurate tarot card readings for love, career, and life decisions.",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Kundli Matching",
      description: "Detailed Kundli matching for marriage compatibility.",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Numerology",
      description: "Life path and destiny number analysis.",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Gemstone Consultation",
      description:
        "Expert advice on beneficial gemstones based on your Kundli.",
    },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.guruastrology.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.guruastrology.in/services",
      },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesPageContent />
    </>
  );
}
