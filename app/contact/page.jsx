import ContactPageContent from "./ContactPageContent";

export const metadata = {
  title: "Contact Guru Astrology | Book Your Consultation",
  description:
    "Get in touch with Guru Astrology to book your personalized astrology consultation by phone, WhatsApp or email.",
  keywords: [
    "contact astrologer",
    "book astrology consultation",
    "astrology appointment",
    "contact guru astrology",
    "vedic astrologer contact",
  ],
  alternates: { canonical: "https://www.guruastrology.in/contact" },
  openGraph: {
    title: "Contact Guru Astrology | Book Your Consultation",
    description:
      "Reach out to Guru Astrology for trusted astrology guidance and consultation booking.",
    url: "https://www.guruastrology.in/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Guru Astrology",
  description:
    "Contact page for booking astrology consultations with Guru Astrology.",
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
        name: "Contact",
        item: "https://www.guruastrology.in/contact",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPageContent />
    </>
  );
}
