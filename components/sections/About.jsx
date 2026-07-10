"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaPhoneAlt, FaStar } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  "Expert Vedic Astrologers with 20+ Years Experience",
  "Personalized Birth Chart Analysis",
  "Accurate Predictions & Life Guidance",
  "Confidential & Trusted Consultations",
];

export default function About() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Collage */}
          <motion.div
            className="relative"
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
                    background: "linear-gradient(135deg, #1a1a0a, #2d2d15)",
                  }}
                >
                  ⭐
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #8b1a1a, #c9a84c)",
                boxShadow: "0 10px 40px rgba(139,26,26,0.5)",
              }}
              aria-hidden="true"
            >
              <div className="flex items-center gap-3">
                <FaStar
                  style={{ color: "white" }}
                  size={20}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-bold text-white">
                    Trusted Since 1999
                  </p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={10}
                        style={{ color: "#fff8dc" }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full opacity-20"
              style={{ border: "2px dashed #c9a84c" }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              subtitle="Know About Us"
              title="Ancient Wisdom For"
              highlight="Modern Life"
            />
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "#9a9ab0" }}
            >
              Welcome to AstroVedic, your trusted destination for authentic
              Vedic astrology services. With over 25 years of experience, our
              certified astrologers have guided thousands of individuals through
              life&apos;s most important decisions.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#9a9ab0" }}
            >
              We combine ancient Vedic wisdom with modern understanding to
              provide you with accurate, meaningful, and actionable astrological
              insights that truly help you navigate your life journey.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <FaCheckCircle
                    style={{ color: "#c9a84c", flexShrink: 0 }}
                    size={18}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: "#e8e8e8" }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* Phone CTA */}
            <div
              className="flex items-center gap-4 p-4 rounded-2xl mb-8"
              style={{
                background: "rgba(139,26,26,0.15)",
                border: "1px solid rgba(139,26,26,0.3)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, #8b1a1a, #c9a84c)",
                }}
              >
                <FaPhoneAlt size={18} color="white" aria-hidden="true" />
              </div>
              <div>
                <p
                  className="text-xs tracking-wider uppercase mb-1"
                  style={{ color: "#9a9ab0" }}
                >
                  Call Our Expert
                </p>
                <a
                  href="tel:+911800124105"
                  className="text-lg font-bold no-underline"
                  style={{
                    color: "#c9a84c",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  +(91) 1800-124-105
                </a>
              </div>
            </div>

            <Link
              href="/about"
              className="btn-primary no-underline"
              style={{ color: "white" }}
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
