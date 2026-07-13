import BlogPageContent from "./BlogPageContent";

export const metadata = {
  title: "Astrology Blog | Vedic Tips, Horoscope Articles & Spiritual Guidance",
  description:
    "Read astrology articles on horoscopes, Mercury retrograde, numerology, gemstones, Kundli insights and Vedic wisdom for guidance and clarity.",
  keywords: [
    "astrology blog",
    "horoscope articles",
    "vedic astrology tips",
    "mercury retrograde",
    "numerology",
    "zodiac articles",
    "kundli insights",
  ],
  alternates: { canonical: "https://www.guruastrology.in/blog" },
  openGraph: {
    title: "Astrology Blog | Guru Astrology",
    description:
      "Explore our astrology articles, Vedic wisdom guides, and spiritual insights.",
    url: "https://www.guruastrology.in/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Guru Astrology Blog",
  description: "Astrology articles, Vedic wisdom and spiritual guides.",
  url: "https://www.guruastrology.in/blog",
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
        name: "Blog",
        item: "https://www.guruastrology.in/blog",
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
