"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FaChevronDown } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    badge: "Professional Astrology",
    title: "Read Your Daily",
    titleHighlight: "Horoscope Today",
    description:
      "Discover what the stars have in store for you. Get personalized horoscope readings, Kundli analysis, and expert astrological guidance from our certified astrologers.",
    bg: "linear-gradient(135deg, #0d0d1a 0%, #1a0a0a 50%, #0d1a1a 100%)",
  },
  {
    id: 2,
    badge: "Ancient Vedic Wisdom",
    title: "Unlock The Secrets",
    titleHighlight: "Of Your Destiny",
    description:
      "Explore the ancient science of astrology and numerology to understand your life path, relationships, and career prospects with precision and clarity.",
    bg: "linear-gradient(135deg, #0d0d1a 0%, #0a1a0a 50%, #1a1a0d 100%)",
  },
  {
    id: 3,
    badge: "Expert Consultation",
    title: "Connect With",
    titleHighlight: "Expert Astrologers",
    description:
      "Get one-on-one consultation with our experienced Vedic astrologers. We offer Kundli matching, Vastu guidance, gemstone recommendations, and more.",
    bg: "linear-gradient(135deg, #0d0d1a 0%, #1a0a1a 50%, #0d0d1a 100%)",
  },
];

const floatingStars = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 5.1) % 100}%`,
  top: `${(i * 4.7) % 100}%`,
  size: (i % 3) + 1,
  duration: (i % 3) + 2,
  delay: (i % 2) * 0.5,
}));

export default function Hero() {
  const swiperRef = useRef(null);

  return (
    <section
      className="relative"
      style={{ minHeight: "100vh" }}
      aria-label="Hero banner"
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-full"
        style={{ minHeight: "100vh" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative flex items-center"
              style={{ minHeight: "100vh", background: slide.bg }}
            >
              {/* Starfield */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                aria-hidden="true"
              >
                {floatingStars.map((star) => (
                  <motion.div
                    key={star.id}
                    className="absolute rounded-full"
                    style={{
                      left: star.left,
                      top: star.top,
                      width: star.size,
                      height: star.size,
                      background: "#c9a84c",
                      opacity: 0.6,
                    }}
                    animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
                    transition={{
                      duration: star.duration,
                      delay: star.delay,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>

              {/* Decorative circles */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                aria-hidden="true"
              >
                <div
                  className="absolute rounded-full opacity-5"
                  style={{
                    width: 600,
                    height: 600,
                    border: "1px solid #c9a84c",
                    top: "-150px",
                    right: "-150px",
                  }}
                />
                <div
                  className="absolute rounded-full opacity-10"
                  style={{
                    width: 400,
                    height: 400,
                    border: "1px solid #8b1a1a",
                    bottom: "-100px",
                    left: "-100px",
                  }}
                />
              </div>

              {/* Content */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                      style={{
                        background: "rgba(201,168,76,0.15)",
                        border: "1px solid rgba(201,168,76,0.3)",
                        color: "#c9a84c",
                      }}
                    >
                      <span aria-hidden="true">✦</span> {slide.badge}
                    </motion.span>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                        color: "#ffffff",
                      }}
                    >
                      {slide.title}{" "}
                      <span style={{ color: "#c9a84c" }}>
                        {slide.titleHighlight}
                      </span>
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                      style={{ color: "#9a9ab0" }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex flex-wrap gap-4"
                    >
                      <Link
                        href="/horoscope"
                        className="btn-primary no-underline"
                        style={{ color: "white" }}
                      >
                        Explore Horoscope
                      </Link>
                      <Link
                        href="/contact"
                        className="btn-outline no-underline"
                      >
                        Book Consultation
                      </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="flex gap-8 mt-12"
                    >
                      {[
                        ["5000+", "Happy Clients"],
                        ["25+", "Years Experience"],
                        ["12+", "Expert Astrologers"],
                      ].map(([num, label]) => (
                        <div key={label}>
                          <p
                            className="text-2xl font-bold"
                            style={{
                              color: "#c9a84c",
                              fontFamily: "var(--font-playfair), serif",
                            }}
                          >
                            {num}
                          </p>
                          <p
                            className="text-xs tracking-wider"
                            style={{ color: "#9a9ab0" }}
                          >
                            {label}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Right Zodiac Visual */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="hidden lg:flex items-center justify-center relative"
                    aria-hidden="true"
                  >
                    <div className="relative w-80 h-80">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full"
                        style={{ border: "2px dashed rgba(201,168,76,0.3)" }}
                      />
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-8 rounded-full"
                        style={{ border: "1px dashed rgba(139,26,26,0.4)" }}
                      />
                      <div
                        className="absolute inset-16 rounded-full flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(139,26,26,0.6), rgba(201,168,76,0.4))",
                          boxShadow: "0 0 60px rgba(139,26,26,0.4)",
                        }}
                      >
                        <span className="text-7xl">☽</span>
                      </div>
                      {[
                        "♈",
                        "♉",
                        "♊",
                        "♋",
                        "♌",
                        "♍",
                        "♎",
                        "♏",
                        "♐",
                        "♑",
                        "♒",
                        "♓",
                      ].map((symbol, i) => {
                        const angle = (i * 30 - 90) * (Math.PI / 180);
                        const r = 150;
                        const x = Math.round(Math.cos(angle) * r + 160);
                        const y = Math.round(Math.sin(angle) * r + 160);
                        return (
                          <div
                            key={symbol}
                            className="absolute text-sm flex items-center justify-center w-8 h-8 rounded-full"
                            style={{
                              left: x - 16,
                              top: y - 16,
                              background: "rgba(201,168,76,0.15)",
                              color: "#c9a84c",
                              border: "1px solid rgba(201,168,76,0.3)",
                            }}
                          >
                            {symbol}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll hint */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer bg-transparent border-0"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        aria-label="Scroll down"
      >
        <span
          className="text-xs tracking-widest"
          style={{ color: "rgba(201,168,76,0.6)" }}
        >
          SCROLL
        </span>
        <FaChevronDown
          style={{ color: "#c9a84c" }}
          size={16}
          aria-hidden="true"
        />
      </motion.button>
    </section>
  );
}
