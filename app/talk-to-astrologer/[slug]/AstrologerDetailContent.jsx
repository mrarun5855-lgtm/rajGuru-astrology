"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import {
  FaStar,
  FaUsers,
  FaGraduationCap,
  FaCommentDots,
  FaLanguage,
  FaCheckCircle,
} from "react-icons/fa";
import ConsultationModal from "@/components/ui/ConsultationModal";
import AstrologerAvatar from "@/components/ui/AstrologerAvatar";
import { astrologers, getLocalizedAstrologer } from "@/data/astrologers";

export default function AstrologerDetailContent({ astrologer }) {
  const locale = useLocale();
  const [modalOpen, setModalOpen] = useState(false);
  const a = getLocalizedAstrologer(astrologer, locale);

  const otherAstrologers = astrologers
    .filter((other) => other.slug !== astrologer.slug)
    .slice(0, 3);

  return (
    <div>
      {/* Page Hero */}
      <section
        className="relative py-20 flex items-center"
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #1a0a0a 50%, #0d0d1a 100%)",
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-sm mb-6"
            style={{ color: "#9a9ab0" }}
            aria-label="Breadcrumb"
          >
            <Link href={`/${locale}`} style={{ color: "#c9a84c" }}>
              Home
            </Link>
            <span>/</span>
            <Link href={`/${locale}/talk-to-astrologer`} style={{ color: "#c9a84c" }}>
              Talk to Astrologer
            </Link>
            <span>/</span>
            <span>{a.name}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-5"
            style={{ width: "fit-content" }}
          >
            <AstrologerAvatar astrologer={a} size={112} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {a.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-base font-semibold mb-4"
            style={{ color: "#c9a84c" }}
          >
            {a.specialty}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 text-sm mb-8"
            style={{ color: "#9a9ab0" }}
          >
            <span className="flex items-center gap-1.5">
              <FaStar size={13} style={{ color: "#c9a84c" }} aria-hidden="true" />
              {a.rating} ({a.reviews} reviews)
            </span>
            <span className="flex items-center gap-1.5">
              <FaUsers size={13} style={{ color: "#c9a84c" }} aria-hidden="true" />
              {a.consultations} consultations
            </span>
            <span>{a.experience} experience</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            onClick={() => setModalOpen(true)}
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaCommentDots size={14} aria-hidden="true" />
            Talk to Astrologer
          </motion.button>
        </div>
      </section>

      {/* Details */}
      <section
        className="py-16 lg:py-24"
        style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Bio */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  About <span style={{ color: "#c9a84c" }}>{a.name.split(" ")[0]}</span>
                </h2>
                <p className="leading-relaxed text-sm sm:text-base" style={{ color: "#9a9ab0" }}>
                  {a.bio}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Areas of Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.25)",
                        color: "#c9a84c",
                      }}
                    >
                      <FaCheckCircle size={10} aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white mb-4">Education & Training</h3>
                <p
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "#9a9ab0" }}
                >
                  <FaGraduationCap
                    size={16}
                    style={{ color: "#c9a84c", marginTop: 2 }}
                    aria-hidden="true"
                  />
                  {a.education}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.15)",
                }}
              >
                <h3 className="text-sm font-semibold tracking-wider uppercase mb-4" style={{ color: "#c9a84c" }}>
                  Quick Info
                </h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt style={{ color: "#9a9ab0" }}>Experience</dt>
                    <dd className="text-white font-medium">{a.experience}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: "#9a9ab0" }}>Consultations</dt>
                    <dd className="text-white font-medium">{a.consultations}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt style={{ color: "#9a9ab0" }}>Rate</dt>
                    <dd className="text-white font-medium">{a.price}</dd>
                  </div>
                  <div className="flex justify-between items-start gap-3">
                    <dt className="flex items-center gap-1.5" style={{ color: "#9a9ab0" }}>
                      <FaLanguage size={13} aria-hidden="true" />
                      Languages
                    </dt>
                    <dd className="text-white font-medium text-right">
                      {a.languages.join(", ")}
                    </dd>
                  </div>
                </dl>

                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary w-full mt-6 inline-flex items-center justify-center gap-2"
                >
                  <FaCommentDots size={13} aria-hidden="true" />
                  Talk to Astrologer
                </button>
              </div>
            </aside>
          </div>

          {/* Other astrologers */}
          {otherAstrologers.length > 0 && (
            <div className="mt-20">
              <h3
                className="text-xl font-bold text-white mb-6"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Other <span style={{ color: "#c9a84c" }}>Astrologers</span>
              </h3>
              <div className="grid sm:grid-cols-3 gap-5">
                {otherAstrologers.map((astro) => {
                  const other = getLocalizedAstrologer(astro, locale);
                  return (
                  <Link
                    key={astro.slug}
                    href={`/${locale}/talk-to-astrologer/${astro.slug}`}
                    className="block p-5 rounded-2xl text-center no-underline transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(201,168,76,0.12)",
                    }}
                  >
                    <AstrologerAvatar astrologer={other} size={56} className="mx-auto mb-2" />
                    <p className="text-sm font-semibold text-white">{other.name}</p>
                    <p className="text-xs" style={{ color: "#c9a84c" }}>
                      {other.specialty}
                    </p>
                  </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <ConsultationModal
        astrologer={a}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
