import AboutPageContent from "./AboutPageContent";

export const metadata = {
  title: "About Us - Our Story & Team",
  description:
    "Learn about AstroVedic, our certified Vedic astrologers, our 25-year journey, and our mission to bring authentic astrology guidance to the world.",
  keywords: [
    "about astrovedic",
    "vedic astrologers",
    "astrology team",
    "certified astrologer",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About AstroVedic | Our Story & Expert Team",
    description:
      "Meet our expert Vedic astrologers and learn about our 25-year journey of authentic astrological guidance.",
    url: "/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About AstroVedic",
  description:
    "AstroVedic was founded in 1999 with a mission to bring Vedic astrology wisdom to people seeking clarity and direction in life.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://astrovedic.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://astrovedic.com/about",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutPageContent />
    </>
  );
}
