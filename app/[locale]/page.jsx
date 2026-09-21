import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Horoscope from "@/components/sections/Horoscope";
import WhyChoose from "@/components/sections/WhyChoose";
import Counter from "@/components/sections/Counter";
import Testimonials from "@/components/sections/Testimonials";
import FeaturedAstrologers from "@/components/sections/FeaturedAstrologers";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Newsletter from "@/components/sections/Newsletter";

export const metadata = {
  title: "Astrology Consultation | Vedic Horoscope, Kundli & Vastu",
  description:
    "Book trusted astrology consultation with expert Vedic astrologers for horoscope, Kundli analysis, Vastu, Tarot, Numerology and life guidance.",
  keywords: [
    "astrology consultation",
    "vedic astrology",
    "horoscope reading",
    "kundli analysis",
    "kundli matching",
    "online astrologer",
    "astrology services",
  ],
  alternates: { canonical: "https://www.guruastrology.in/" },
  openGraph: {
    title: "Guru Astrology | Vedic Astrology Consultation, Horoscope & Kundli",
    description:
      "Book trusted astrology consultation and explore daily horoscope, Kundli analysis, Vastu guidance and more.",
    url: "https://www.guruastrology.in/",
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
        text: "Our horoscope readings are based on accurate planetary positions and time-tested astrological principles. Accuracy depends on the precision of birth data provided.",
      },
    },
    {
      "@type": "Question",
      name: "What is Kundli?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kundli (Janam Patri) is a detailed birth chart that shows the positions of celestial bodies at the time of your birth, used for astrological analysis.",
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
      <Testimonials />
      <FeaturedAstrologers />
      <Blog />
      <Contact />
      <Newsletter />
    </>
  );
}
