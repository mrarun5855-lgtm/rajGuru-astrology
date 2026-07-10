import ContactPageContent from "./ContactPageContent";

export const metadata = {
  title: "Contact Us — Book an Astrology Consultation",
  description:
    "Get in touch with AstroVedic to book your personalized astrology consultation. Call, email, or WhatsApp us. We are available 7 days a week.",
  keywords: [
    "contact astrologer",
    "book astrology consultation",
    "astrology appointment",
    "contact astrovedic",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact AstroVedic | Book Your Consultation",
    description:
      "Reach out to AstroVedic to book your astrology consultation. Available Mon-Sat 9AM-9PM.",
    url: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AstroVedic",
  description:
    "Contact page for booking astrology consultations with AstroVedic.",
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
        name: "Contact",
        item: "https://astrovedic.com/contact",
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
