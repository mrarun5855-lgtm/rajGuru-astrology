"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaStar,
  FaAward,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import Team from "@/components/sections/Team";
import Counter from "@/components/sections/Counter";
import Newsletter from "@/components/sections/Newsletter";

const milestones = [
  {
    year: "1999",
    title: "Founded AstroVedic",
    desc: "Started with a small team of 3 dedicated astrologers.",
  },
  {
    year: "2005",
    title: "Online Expansion",
    desc: "Launched digital consultations reaching clients worldwide.",
  },
  {
    year: "2012",
    title: "1000 Happy Clients",
    desc: "Milestone of 1,000 satisfied clients and counting.",
  },
  {
    year: "2020",
    title: "Award Recognition",
    desc: "Received Best Astrology Platform award nationally.",
  },
  {
    year: "2024",
    title: "5000+ Clients",
    desc: "Serving over 5,000 clients across 30+ countries.",
  },
];

const values = [
  {
    icon: <FaStar size={22} />,
    title: "Authenticity",
    desc: "We practice only authentic Vedic astrology methods passed down through ancient lineages.",
  },
  {
    icon: <FaAward size={22} />,
    title: "Excellence",
    desc: "Our astrologers are highly trained and continuously update their knowledge.",
  },
  {
    icon: <FaUsers size={22} />,
    title: "Client Focus",
    desc: "Every consultation is personalized to address your unique life situation and goals.",
  },
  {
    icon: <FaCertificate size={22} />,
    title: "Integrity",
    desc: "We believe in honest, transparent readings without fear-based predictions.",
  },
];

const features = [
  "Expert Vedic Astrologers with 20+ Years Experience",
  "Personalized Birth Chart Analysis",
  "Accurate Predictions & Life Guidance",
  "Confidential & Trusted Consultations",
];

export default function AboutPageContent() {
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
            ✦ Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            About <span style={{ color: "#c9a84c" }}>AstroVedic</span>
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
            <span>About</span>
          </motion.nav>
        </div>
      </section>

      {/* About Body */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Left: visuals */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div
                    className="rounded-2xl overflow-hidden h-56 flex items-center justify-center text-8xl opacity-40"
                    style={{
                      background: "linear-gradient(135deg, #1a0a0a, #2d1515)",
                    }}
                  >
                    🌙
                  </div>
                  <div
                    className="rounded-2xl overflow-hidden h-36 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #0a0a1a, #1a1a2e)",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    <div className="text-center">
                      <p
                        className="text-3xl font-bold"
                        style={{
                          color: "#c9a84c",
                          fontFamily: "var(--font-playfair), serif",
                        }}
                      >
                        25+
                      </p>
                      <p
                        className="text-xs tracking-wider"
                        style={{ color: "#9a9ab0" }}
                      >
                        Years Experience
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div
                    className="rounded-2xl overflow-hidden h-36 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #0a0a1a, #1a1a2e)",
                      border: "1px solid rgba(139,26,26,0.3)",
                    }}
                  >
                    <div className="text-center">
                      <p
                        className="text-3xl font-bold"
                        style={{
                          color: "#c9a84c",
                          fontFamily: "var(--font-playfair), serif",
                        }}
                      >
                        5K+
                      </p>
                      <p
                        className="text-xs tracking-wider"
                        style={{ color: "#9a9ab0" }}
                      >
                        Happy Clients
                      </p>
                    </div>
                  </div>
                  <div
                    className="rounded-2xl overflow-hidden h-56 flex items-center justify-center text-8xl opacity-40"
                    style={{
                      background: "linear-gradient(135deg, #0d1a0d, #1a2e1a)",
                    }}
                  >
                    ✨
                  </div>
                </div>
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-5 -left-5 p-4 rounded-xl shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #8b1a1a, #c9a84c)",
                  }}
                >
                  <p className="text-white text-sm font-bold">
                    ⭐ 4.9/5 Rating
                  </p>
                  <p className="text-white text-xs opacity-80">5000+ Reviews</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-sm font-semibold tracking-[3px] uppercase"
                style={{ color: "#c9a84c" }}
              >
                About Us
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold mt-2 mb-6 text-white"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Guiding You Through{" "}
                <span style={{ color: "#c9a84c" }}>Ancient Wisdom</span>
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "#9a9ab0" }}>
                AstroVedic was founded in 1999 with a singular mission: to bring
                the profound wisdom of Vedic astrology to people seeking
                clarity, direction, and deeper understanding of their life&apos;s
                journey.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "#9a9ab0" }}>
                Our team of certified Vedic astrologers combines traditional
                knowledge passed down through generations with modern
                interpretive techniques, ensuring accurate, relevant, and
                actionable guidance.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <FaCheckCircle
                      style={{ color: "#c9a84c", flexShrink: 0 }}
                    />
                    <span style={{ color: "#e8e8e8" }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book Consultation
                </Link>
                <a
                  href="tel:+911800124105"
                  className="btn-outline flex items-center gap-2"
                >
                  <FaPhoneAlt size={14} /> Call Us Now
                </a>
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <SectionTitle
            subtitle="Our Values"
            title="What We"
            highlight="Stand For"
            description="Our core values guide every consultation and interaction we have with our clients."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "rgba(201,168,76,0.15)",
                    color: "#c9a84c",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  className="font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#9a9ab0" }}
                >
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <SectionTitle
            subtitle="Our Journey"
            title="Our"
            highlight="Milestones"
            description="From a humble beginning to becoming a trusted name in Vedic astrology."
          />
          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
              style={{ background: "rgba(201,168,76,0.2)" }}
            />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center gap-6 mb-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`flex-1 p-5 rounded-2xl ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  <p
                    className="text-sm font-bold mb-1"
                    style={{ color: "#c9a84c" }}
                  >
                    {m.year}
                  </p>
                  <p
                    className="font-semibold text-white mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {m.title}
                  </p>
                  <p className="text-sm" style={{ color: "#9a9ab0" }}>
                    {m.desc}
                  </p>
                </div>
                <div
                  className="w-4 h-4 rounded-full flex-shrink-0 hidden md:block z-10"
                  style={{ background: "#c9a84c" }}
                />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Counter />
      <Team />
      <Newsletter />
    </div>
  );
}
