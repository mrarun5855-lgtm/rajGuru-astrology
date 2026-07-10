import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Horoscope from "@/components/sections/Horoscope";
import WhyChoose from "@/components/sections/WhyChoose";
import Counter from "@/components/sections/Counter";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Newsletter from "@/components/sections/Newsletter";

export const metadata = {
  title: "Professional Astrology Consultation",
  description:
    "Book online astrology consultation with experienced Vedic astrologers. Get personalized horoscope readings, Kundli analysis, Tarot reading & more.",
  keywords: [
    "astrology consultation",
    "vedic astrology",
    "horoscope reading",
    "kundli analysis",
    "online astrologer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "AstroVedic | Professional Astrology Consultation",
    description:
      "Book online astrology consultation with experienced Vedic astrologers.",
    url: "/",
  },
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Vedic astrology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vedic astrology, also known as Jyotish, is an ancient Indian system of astrology that uses the sidereal zodiac and emphasizes planetary periods (dashas) for predictions.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate are your horoscope readings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our certified Vedic astrologers with 20+ years of experience provide highly accurate readings based on your precise birth details and planetary positions.",
      },
    },
    {
      "@type": "Question",
      name: "How can I book a consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book a consultation through our Contact page, by calling us at +(91) 1800-124-105, or via WhatsApp.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <Hero />
      <About />
      <Services />
      <Horoscope />
      <WhyChoose />
      <Counter />
      <Pricing />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
      <Newsletter />
    </>
  );
}
