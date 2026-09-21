import { getLocale } from "next-intl/server";
const playfairTemp = { variable: "--font-playfair" };
const interTemp = { variable: "--font-inter" };
import "./globals.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in",
  ),
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  title: "Guru Astrology | Vedic Astrology Consultation, Horoscope & Kundli",
  description:
    "Get trusted Vedic astrology consultation, daily horoscope, Kundli analysis, Kundli matching, Vastu guidance, Tarot and Numerology services at Guru Astrology.",
};

// This is the single, true root layout for the whole app. It is the only
// place that may render <html> and <body> — every other layout (e.g.
// app/[locale]/layout.jsx) nests *inside* this one and must not render its
// own <html>/<body> tags, or the document becomes invalid and things like
// <script> placement become unpredictable for the browser/React.
export default async function RootLayout({ children }) {
  // Resolves the active locale from the next-intl request config, which is
  // wired in via the next-intl plugin in next.config.mjs. Works even here,
  // outside the [locale] segment, because middleware always routes through
  // a locale first.
  const locale = await getLocale();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: "Guru Astrology",
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
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
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "Guru Astrology",
    description:
      "Trusted Vedic astrology services including horoscope readings, Kundli analysis, Kundli matching, Vastu guidance, Tarot reading and Numerology.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={locale} className={`${playfairTemp.variable} ${interTemp.variable}`}>
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
        {children}
      </body>
    </html>
  );
}
