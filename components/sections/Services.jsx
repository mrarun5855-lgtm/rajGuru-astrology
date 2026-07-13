"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    icon: "🏠",
    title: "Vastu Shastra",
    desc: "Harmonize your living and working spaces with ancient Vastu principles for prosperity and peace.",
  },
  {
    icon: "📖",
    title: "Birth Journal",
    desc: "Detailed analysis of your birth chart revealing your life path, personality, and future prospects.",
  },
  {
    icon: "💍",
    title: "Manglik Dosha",
    desc: "Expert analysis and remedies for Mangal Dosha for a blissful and harmonious married life.",
  },
  {
    icon: "📚",
    title: "Lal Kitab",
    desc: "Ancient Lal Kitab astrology predictions and powerful remedies for your problems.",
  },
  {
    icon: "🔮",
    title: "Crystal Ball",
    desc: "Scrying and crystal ball readings for future insights and spiritual guidance.",
  },
  {
    icon: "⭐",
    title: "Kundli Dosh",
    desc: "Identification and effective remedies for all types of Doshas in your Kundli.",
  },
  {
    icon: "🃏",
    title: "Tarot Reading",
    desc: "Accurate tarot card readings for love, career, and life decisions with deep insights.",
  },
  {
    icon: "✋",
    title: "Palm Reading",
    desc: "Palmistry analysis to understand your character, talents, and potential future events.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function Services() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="What We Offer"
          title="Our Astrology"
          highlight="Services"
          description="From daily horoscope insights to Kundli analysis, Vastu guidance, Tarot readings and Numerology, we offer trusted astrology services for every life concern."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 rounded-2xl cursor-pointer overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
                transition: "all 0.3s ease",
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,26,26,0.12), rgba(201,168,76,0.08))",
                }}
                aria-hidden="true"
              />
              <div className="text-4xl mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "#9a9ab0" }}
              >
                {service.desc}
              </p>
              <Link
                href="/services"
                className="flex items-center gap-2 text-sm font-medium"
                style={{ color: "#c9a84c" }}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More <FaArrowRight size={12} aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="btn-primary no-underline"
            style={{ color: "white" }}
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
