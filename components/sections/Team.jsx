"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar, FaCommentDots, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import ConsultationModal from "@/components/ui/ConsultationModal";
import AstrologerAvatar from "@/components/ui/AstrologerAvatar";
import { astrologers, getLocalizedAstrologer } from "@/data/astrologers";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Team() {
  const locale = useLocale();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [consultAstrologer, setConsultAstrologer] = useState(null);

  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Team"
          title="Meet Our Expert"
          highlight="Astrologers"
          description="Our certified team of Vedic astrologers, numerologists, and spiritual guides are here to illuminate your path. Consult instantly or view a full profile first."
        />

        <div className="relative">
          {/* Custom nav buttons */}
          <button
            ref={prevRef}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center"
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
            ref={nextRef}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center"
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
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            className="pb-12"
          >
            {astrologers.map((astro, i) => {
              const a = getLocalizedAstrologer(astro, locale);
              return (
              <SwiperSlide key={astro.slug} className="h-auto">
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                  className="group relative rounded-2xl overflow-hidden text-center h-full flex flex-col m-0.5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,168,76,0.15)",
                  }}
                  whileHover={{ borderColor: "rgba(201,168,76,0.4)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139,26,26,0.15), rgba(201,168,76,0.05))",
                    }}
                    aria-hidden="true"
                  />

                  <div className="relative pt-8 pb-6 px-6 flex flex-col flex-1">
                    <AstrologerAvatar astrologer={a} size={96} className="mx-auto mb-4" />
                    <h3
                      className="text-lg font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      {a.name}
                    </h3>
                    <p className="text-sm mb-1" style={{ color: "#c9a84c" }}>
                      {a.specialty}
                    </p>
                    <p
                      className="flex items-center justify-center gap-1 text-xs mb-5"
                      style={{ color: "#9a9ab0" }}
                    >
                      <FaStar size={11} style={{ color: "#c9a84c" }} aria-hidden="true" />
                      {a.rating} • {a.experience}
                    </p>

                    <div className="mt-auto space-y-2">
                      <button
                        onClick={() => setConsultAstrologer(a)}
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
                        className="block w-full text-sm font-medium px-4 py-2.5 rounded-full no-underline transition-colors"
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

        <div className="text-center mt-2">
          <Link
            href={`/${locale}/talk-to-astrologer`}
            className="inline-flex items-center gap-2 text-sm font-semibold no-underline"
            style={{ color: "#c9a84c" }}
          >
            View All Astrologers →
          </Link>
        </div>
      </div>

      <ConsultationModal
        astrologer={consultAstrologer}
        open={!!consultAstrologer}
        onClose={() => setConsultAstrologer(null)}
      />
    </section>
  );
}
