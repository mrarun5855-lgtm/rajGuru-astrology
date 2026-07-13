import AboutPageContent from "./AboutPageContent";

export const metadata = {
  title: "About Guru Astrology | Our Story & Expert Astrologers",
  description:
    "Learn about Guru Astrology, our expert Vedic astrologers, our journey, and our mission to deliver authentic astrology guidance for life decisions.",
  keywords: [
    "about guru astrology",
    "vedic astrologers",
    "astrology team",
    "certified astrologer",
    "best astrologer",
  ],
  alternates: { canonical: "https://www.guruastrology.in/about" },
  openGraph: {
    title: "About Guru Astrology | Expert Vedic Astrologers",
    description:
      "Meet our experienced Vedic astrologers and learn how Guru Astrology helps people with guidance and clarity.",
    url: "https://www.guruastrology.in/about",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Guru Astrology",
  description:
    "Guru Astrology was founded in 1999 with a mission to bring Vedic astrology wisdom to people seeking clarity and direction in life.",
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
        name: "About",
        item: "https://www.guruastrology.in/about",
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
