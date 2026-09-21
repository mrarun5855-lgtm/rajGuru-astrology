"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaCommentDots } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import ConsultationModal from "@/components/ui/ConsultationModal";
import AstrologerAvatar from "@/components/ui/AstrologerAvatar";
import { astrologers, getLocalizedAstrologer } from "@/data/astrologers";

export default function FeaturedAstrologers() {
  const locale = useLocale();
  const swiperRef = useRef(null);
  const [modalAstrologer, setModalAstrologer] = useState(null);

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Team"
          title="Talk to Our"
          highlight="Astrologers"
          description="Meet our certified Vedic astrologers, numerologists and spiritual guides — browse or scroll through and start a consultation with anyone in a few taps."
        />

        <div className="relative">
          {/* Prev / Next controls */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center"
            style={{
              background: "rgba(13,13,26,0.9)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#c9a84c",
            }}
            aria-label="Previous astrologer"
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center"
            style={{
              background: "rgba(13,13,26,0.9)",
              border: "1px solid rgba(201,168,76,0.3)",
              color: "#c9a84c",
            }}
            aria-label="Next astrologer"
          >
            <FaChevronRight size={14} />
          </button>

          <Swiper
            onSwiper={(s) => (swiperRef.current = s)}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-2"
          >
            {astrologers.map((astro, i) => {
              const a = getLocalizedAstrologer(astro, locale);
              return (
              <SwiperSlide key={astro.slug}>
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                  className="group relative rounded-2xl overflow-hidden text-center h-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139,26,26,0.15), rgba(201,168,76,0.05))",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative pt-8 pb-6 px-5 flex flex-col h-full">
                    <AstrologerAvatar astrologer={a} size={80} className="mx-auto mb-4" />
                    <h3
                      className="text-base font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {a.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: "#c9a84c" }}>
                      {a.specialty}
                    </p>
                    <p
                      className="flex items-center justify-center gap-1.5 text-xs mb-6"
                      style={{ color: "#9a9ab0" }}
                    >
                      <FaStar size={11} style={{ color: "#c9a84c" }} aria-hidden="true" />
                      {a.rating} • {a.experience}
                    </p>

                    <div className="mt-auto flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => setModalAstrologer(a)}
                        className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-full transition-transform hover:scale-[1.03]"
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
                        className="w-full text-sm font-medium px-4 py-2.5 rounded-full no-underline transition-colors"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "#c9a84c",
                          border: "1px solid rgba(201,168,76,0.25)",
                        }}
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/talk-to-astrologer`}
            className="btn-primary no-underline"
            style={{ color: "white" }}
          >
            View All Astrologers
          </Link>
        </div>
      </div>

      <ConsultationModal
        astrologer={modalAstrologer}
        open={!!modalAstrologer}
        onClose={() => setModalAstrologer(null)}
      />
    </section>
  );
}
