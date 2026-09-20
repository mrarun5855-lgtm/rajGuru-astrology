import TalkToAstrologerPageContent from "@/app/talk-to-astrologer/TalkToAstrologerPageContent";
import { astrologers } from "@/data/astrologers";

export const metadata = {
  title: "Talk to Astrologer | Book a Live Astrology Consultation",
  description:
    "Browse verified Vedic astrologers, numerologists, Vastu experts and tarot readers. Pick a profile and request a consultation in minutes.",
  keywords: [
    "talk to astrologer",
    "online astrologer",
    "astrology consultation",
    "chat with astrologer",
    "best astrologer india",
  ],
  alternates: { canonical: "https://www.guruastrology.in/talk-to-astrologer" },
  openGraph: {
    title: "Talk to Astrologer | Guru Astrology",
    description:
      "Browse verified astrologers and request a live consultation with the expert of your choice.",
    url: "https://www.guruastrology.in/talk-to-astrologer",
  },
};

const listingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Guru Astrology — Astrologers",
  itemListElement: astrologers.map((astro, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: astro.name,
    url: `https://www.guruastrology.in/talk-to-astrologer/${astro.slug}`,
  })),
};

export default function TalkToAstrologerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingSchema) }}
      />
      <TalkToAstrologerPageContent />
    </>
  );
}
