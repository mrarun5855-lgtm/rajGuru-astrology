"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import { FaStar, FaCommentDots } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import ConsultationModal from "@/components/ui/ConsultationModal";
import AstrologerAvatar from "@/components/ui/AstrologerAvatar";
import { astrologers, getLocalizedAstrologer } from "@/data/astrologers";

export default function TalkToAstrologerPageContent() {
  const locale = useLocale();
  const [consultAstrologer, setConsultAstrologer] = useState(null);

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
            ✦ Connect Instantly
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Talk to <span style={{ color: "#c9a84c" }}>Astrologer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="max-w-2xl mx-auto text-sm sm:text-base mb-4"
            style={{ color: "#9a9ab0" }}
          >
            Choose from our expert Vedic astrologers, numerologists, Vastu
            consultants and more — view a profile and request a consultation
            in a few taps.
          </motion.p>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "#9a9ab0" }}
            aria-label="Breadcrumb"
          >
            <Link href={`/${locale}`} style={{ color: "#c9a84c" }}>
              Home
            </Link>
            <span>/</span>
            <span>Talk to Astrologer</span>
          </motion.nav>
        </div>
      </section>

      {/* Astrologer Grid */}
      <section
        className="py-20 lg:py-28"
        style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Our Experts"
            title="Choose Your"
            highlight="Astrologer"
            description="Every astrologer on our platform is verified and experienced. Tap a profile to see their full background and start a consultation."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {astrologers.map((astro, i) => {
              const a = getLocalizedAstrologer(astro, locale);
              return (
              <motion.div
                key={astro.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="group h-full rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <Link
                  href={`/${locale}/talk-to-astrologer/${astro.slug}`}
                  className="relative block p-6 pb-4 text-center no-underline"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139,26,26,0.15), rgba(201,168,76,0.05))",
                    }}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <AstrologerAvatar astrologer={a} size={80} className="mx-auto mb-4" />
                    <h3
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {a.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: "#c9a84c" }}>
                      {a.specialty}
                    </p>

                    <div
                      className="flex items-center justify-center gap-1 text-xs mb-3"
                      style={{ color: "#9a9ab0" }}
                    >
                      <FaStar size={11} style={{ color: "#c9a84c" }} aria-hidden="true" />
                      <span>{a.rating}</span>
                      <span>({a.reviews})</span>
                      <span className="mx-1">•</span>
                      <span>{a.experience}</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-1.5">
                      {a.languages.slice(0, 3).map((lang) => (
                        <span
                          key={lang}
                          className="text-[10px] px-2 py-1 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            color: "#9a9ab0",
                          }}
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>

                <div className="relative px-6 pb-6 pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => setConsultAstrologer(a)}
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full transition-transform hover:scale-[1.03]"
                    style={{
                      background: "linear-gradient(135deg, #8b1a1a, #6b1414)",
                      color: "#fff",
                    }}
                  >
                    <FaCommentDots size={13} aria-hidden="true" />
                    Consult
                  </button>
                  <Link
                    href={`/${locale}/talk-to-astrologer/${astro.slug}`}
                    className="inline-flex items-center justify-center text-sm font-medium px-5 py-2.5 rounded-full no-underline transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      color: "#c9a84c",
                      border: "1px solid rgba(201,168,76,0.25)",
                    }}
                  >
                    View Profile
                  </Link>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ConsultationModal
        astrologer={consultAstrologer}
        open={!!consultAstrologer}
        onClose={() => setConsultAstrologer(null)}
      />
    </div>
  );
}
