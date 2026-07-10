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
    process.env.NEXT_PUBLIC_SITE_URL || "https://astrovedic.com",
  ),
  title: {
    default: "AstroVedic | Professional Astrology Services",
    template: "%s | AstroVedic",
  },
  description:
    "Book online astrology consultation with experienced Vedic astrologers. Get personalized horoscope readings, Kundli analysis, Tarot, Vastu & more.",
  keywords: [
    "astrology",
    "vedic astrology",
    "horoscope",
    "kundli",
    "tarot reading",
    "vastu shastra",
    "numerology",
    "astrologer",
    "birth chart",
    "zodiac",
  ],
  authors: [{ name: "AstroVedic" }],
  creator: "AstroVedic",
  publisher: "AstroVedic",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "AstroVedic",
    title: "AstroVedic | Professional Astrology Services",
    description:
      "Book online astrology consultation with experienced Vedic astrologers.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "AstroVedic" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AstroVedic | Professional Astrology Services",
    description:
      "Book online astrology consultation with experienced Vedic astrologers.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "AstroVedic",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://astrovedic.com",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://astrovedic.com"}/favicon.ico`,
  description:
    "Professional Vedic astrology services including horoscope, Kundli analysis, Tarot reading, Vastu Shastra, and more.",
  telephone: "+911800124105",
  email: "astrology@example.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gotham Hall, 1356 Broadway Square",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10018",
    addressCountry: "US",
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
  sameAs: [
    "https://facebook.com/astrovedic",
    "https://twitter.com/astrovedic",
    "https://instagram.com/astrovedic",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AstroVedic",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://astrovedic.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "https://astrovedic.com"}/services?q={search_term_string}`,
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
