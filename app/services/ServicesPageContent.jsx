"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import Newsletter from "@/components/sections/Newsletter";

const allServices = [
  {
    icon: "🏠",
    title: "Vastu Shastra",
    desc: "Harmonize your living and working spaces with ancient Vastu principles. Our expert Vastu consultants analyze your space for optimal energy flow, prosperity, health, and happiness.",
    price: "From $49",
  },
  {
    icon: "📖",
    title: "Birth Chart Analysis",
    desc: "Get a comprehensive analysis of your Vedic birth chart. Understand your planetary positions, houses, and their influence on every aspect of your life journey.",
    price: "From $59",
  },
  {
    icon: "💍",
    title: "Manglik Dosha",
    desc: "Expert analysis and effective remedies for Mangal Dosha. Ensure a blissful and harmonious married life with our specialized Manglik Dosha consultation.",
    price: "From $39",
  },
  {
    icon: "📚",
    title: "Lal Kitab",
    desc: "Ancient Lal Kitab astrology offers unique predictions and powerful, simple remedies. Get personalized Lal Kitab readings and affordable remedies for your life challenges.",
    price: "From $45",
  },
  {
    icon: "🔮",
    title: "Crystal Ball Reading",
    desc: "Peer into the future with our expert crystal ball scrying sessions. Our skilled readers use this ancient divination tool to provide insights into your past, present, and future.",
    price: "From $55",
  },
  {
    icon: "⭐",
    title: "Kundli Dosh Nivaran",
    desc: "Identify and remedy all types of Doshas in your Kundli. From Kaal Sarp Dosha to Pitra Dosha, we provide effective and proven remedies for all planetary afflictions.",
    price: "From $65",
  },
  {
    icon: "🃏",
    title: "Tarot Reading",
    desc: "Our experienced tarot readers use the ancient wisdom of tarot cards to provide clear insights into your love life, career, finances, and personal growth journey.",
    price: "From $35",
  },
  {
    icon: "✋",
    title: "Palm Reading",
    desc: "The lines on your hands reveal the story of your life. Our palmistry experts analyze your hand features to uncover your personality traits, talents, and potential future.",
    price: "From $29",
  },
  {
    icon: "🔢",
    title: "Numerology",
    desc: "Discover the hidden meaning of numbers in your life. Our numerology experts analyze your birth date and name to reveal your life path, destiny, and soul purpose.",
    price: "From $39",
  },
  {
    icon: "💎",
    title: "Gemstone Consultation",
    desc: "The right gemstone can transform your life by channeling specific planetary energies. Get expert advice on which gemstones will benefit you most based on your Kundli.",
    price: "From $49",
  },
  {
    icon: "💑",
    title: "Kundli Matching",
    desc: "Ensure a happy and compatible marriage with our detailed Kundli matching service. We analyze 36 Gunas and various compatibility factors for the most accurate matchmaking.",
    price: "From $75",
  },
  {
    icon: "📅",
    title: "Muhurta (Auspicious Time)",
    desc: "Choose the most auspicious timing for important life events. Whether it is marriage, business launch, or property purchase, we find the perfect Muhurta for success.",
    price: "From $45",
  },
];

export default function ServicesPageContent() {
  return (
    <div>
      {/* Page Hero */}
      <section
        className="relative py-24 flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #1a0a0a 50%, #0d0d1a 100%)",
          minHeight: 340,
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: (i % 3) + 1,
                height: (i % 3) + 1,
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
                background: "rgba(201,168,76,0.5)",
              }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#c9a84c",
            }}
          >
            ✦ What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Our Astrology <span style={{ color: "#c9a84c" }}>Services</span>
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#9a9ab0" }}
            aria-label="Breadcrumb"
          >
            <Link href="/" style={{ color: "#c9a84c" }}>
              Home
            </Link>
            <span>/</span>
            <span>Services</span>
          </motion.nav>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: "linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="All Services"
            title="Complete Astrology"
            highlight="Solutions"
            description="From ancient Vedic practices to modern spiritual guidance, we offer a comprehensive suite of services tailored to your unique journey."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative p-7 rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139,26,26,0.12), rgba(201,168,76,0.08))",
                  }}
                />
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#9a9ab0" }}
                >
                  {service.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "#c9a84c" }}
                  >
                    {service.price}
                  </span>
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                    style={{ color: "#c9a84c" }}
                    aria-label={`Book ${service.title}`}
                  >
                    Book Now <FaArrowRight size={12} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16 p-10 rounded-3xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(139,26,26,0.3), rgba(201,168,76,0.1))",
              border: "1px solid rgba(201,168,76,0.2)",
            }}
          >
            <h3
              className="text-2xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Not Sure Which Service Is Right For You?
            </h3>
            <p className="mb-6" style={{ color: "#9a9ab0" }}>
              Our expert astrologers will guide you to the perfect service based
              on your specific needs and questions.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Free Guidance
            </Link>
          </motion.div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
