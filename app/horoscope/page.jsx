import HoroscopePageContent from "./HoroscopePageContent";

export const metadata = {
  title: "Daily Horoscope — All 12 Zodiac Signs",
  description:
    "Get your free daily horoscope for all 12 zodiac signs. Personalized love, career, and health predictions based on Vedic astrology.",
  keywords: [
    "daily horoscope",
    "zodiac signs",
    "free horoscope",
    "aries horoscope",
    "taurus horoscope",
    "gemini horoscope",
    "cancer horoscope",
    "vedic horoscope",
  ],
  alternates: { canonical: "/horoscope" },
  openGraph: {
    title: "Daily Horoscope for All 12 Zodiac Signs | AstroVedic",
    description:
      "Get your free daily horoscope with love, career, and health predictions based on Vedic astrology.",
    url: "/horoscope",
  },
};

const horoscopeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Daily Horoscope — All 12 Zodiac Signs",
  description:
    "Free daily horoscope readings for all 12 zodiac signs based on Vedic astrology.",
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
        name: "Horoscope",
        item: "https://astrovedic.com/horoscope",
      },
    ],
  },
};

export default function HoroscopePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(horoscopeSchema) }}
      />
      <HoroscopePageContent />
    </>
  );
}
