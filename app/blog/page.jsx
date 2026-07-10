import BlogPageContent from "./BlogPageContent";

export const metadata = {
  title: "Astrology Blog — Articles, Tips & Vedic Wisdom",
  description:
    "Read our latest astrology articles covering horoscopes, Mercury retrograde, numerology, gemstones, and Vedic wisdom to guide your spiritual journey.",
  keywords: [
    "astrology blog",
    "horoscope articles",
    "vedic astrology tips",
    "mercury retrograde",
    "numerology",
    "zodiac articles",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Astrology Blog | AstroVedic",
    description:
      "Explore our astrology articles, Vedic wisdom guides, and spiritual insights.",
    url: "/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "AstroVedic Blog",
  description: "Astrology articles, Vedic wisdom and spiritual guides.",
  url: "https://astrovedic.com/blog",
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
        name: "Blog",
        item: "https://astrovedic.com/blog",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <BlogPageContent />
    </>
  );
}
