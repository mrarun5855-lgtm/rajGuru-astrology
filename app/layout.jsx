import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in",
  ),
  title: {
    default: "Guru Astrology | Vedic Astrology Consultation, Horoscope & Kundli",
    template: "%s | Guru Astrology",
  },
  description:
    "Get trusted Vedic astrology consultation, daily horoscope, Kundli analysis, Kundli matching, Vastu guidance, Tarot and Numerology services at Guru Astrology.",
  keywords: [
    "guru astrology",
    "vedic astrology consultation",
    "astrology consultation",
    "horoscope",
    "kundli analysis",
    "kundli matching",
    "vastu shastra",
    "tarot reading",
    "numerology",
    "online astrologer",
    "best astrologer",
    "astrology services",
    "zodiac signs",
  ],
  alternates: {
    canonical: "https://www.guruastrology.in/",
  },
  authors: [{ name: "Guru Astrology" }],
  creator: "Guru Astrology",
  publisher: "Guru Astrology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.guruastrology.in/",
    siteName: "Guru Astrology",
    title: "Guru Astrology | Vedic Astrology Consultation, Horoscope & Kundli",
    description:
      "Book trusted astrology consultation and explore daily horoscope, Kundli analysis, Vastu guidance and more.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Guru Astrology" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guru Astrology | Vedic Astrology Consultation, Horoscope & Kundli",
    description:
      "Book trusted astrology consultation and explore daily horoscope, Kundli analysis, Vastu guidance and more.",
    images: ["/og-image.svg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Guru Astrology",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in"}/favicon.svg`,
  description:
    "Trusted Vedic astrology services including horoscope readings, Kundli analysis, Kundli matching, Vastu guidance, Tarot reading and Numerology.",
  telephone: "+919599327922",
  email: "dobrabhatt@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Birkuchi Road, Narangi",
    addressLocality: "Guwahati",
    addressRegion: "Assam",
    postalCode: "781026",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Guru Astrology",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in"}/services?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen" style={{ background: "#0d0d1a" }}>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
