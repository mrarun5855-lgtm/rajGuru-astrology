import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hi" }];
}

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in",
  ),
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
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

// NOTE: this layout intentionally does NOT render <html> or <body> — the
// root app/layout.jsx already owns those. This layout only supplies the
// locale-scoped providers and chrome (header/footer) around each page.
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Validate locale
  if (!["en", "hi"].includes(locale)) {
    notFound();
  }

  // Enables static rendering for this locale in the App Router.
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </NextIntlClientProvider>
  );
}
