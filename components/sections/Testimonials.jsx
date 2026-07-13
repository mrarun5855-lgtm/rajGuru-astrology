"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    profession: "Software Engineer",
    rating: 5,
    review:
      "Guru Astrology completely transformed my understanding of my life path. The birth chart analysis was incredibly accurate and the predictions have been spot on. Highly recommend!",
    avatar: "👩",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    profession: "Business Owner",
    rating: 5,
    review:
      "I was skeptical at first, but the Kundli analysis and Vastu consultation from Guru Astrology helped me make the right decisions for my business. Revenue has increased significantly!",
    avatar: "👨",
  },
  {
    id: 3,
    name: "Ananya Patel",
    profession: "Teacher",
    rating: 5,
    review:
      "The gemstone recommendations were perfect for my situation. I feel more balanced and positive since I started wearing the suggested stones. Thank you Guru Astrology!",
    avatar: "👩‍🏫",
  },
  {
    id: 4,
    name: "David Miller",
    profession: "Entrepreneur",
    rating: 5,
    review:
      "Outstanding service! The tarot readings are incredibly insightful. The astrologers here are true professionals who genuinely care about your wellbeing.",
    avatar: "👨‍💼",
  },
  {
    id: 5,
    name: "Sunita Verma",
    profession: "Doctor",
    rating: 5,
    review:
      "I consulted Guru Astrology for marriage compatibility and it was the best decision. The detailed Kundli matching report gave us complete clarity and confidence.",
    avatar: "👩‍⚕️",
  },
  {
    id: 6,
    name: "Michael Chen",
    profession: "Architect",
    rating: 4,
    review:
      "The Vastu Shastra consultation helped me design my home office for maximum productivity and positive energy. The results have been remarkable!",
    avatar: "👨‍🎨",
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)",
      }}
    >
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-5"
        style={{
          background: "radial-gradient(circle, #8b1a1a, transparent)",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none opacity-5"
        style={{
          background: "radial-gradient(circle, #c9a84c, transparent)",
          transform: "translate(50%, 50%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients"
          highlight="Say"
          description="Real stories from real people who have experienced the transformative power of authentic Vedic astrology."
        />

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <motion.figure
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl h-full m-0"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  <FaQuoteLeft
                    size={24}
                    style={{ color: "rgba(201,168,76,0.4)" }}
                    className="mb-4"
                    aria-hidden="true"
                  />
                  <div
                    className="flex gap-1 mb-4"
                    role="img"
                    aria-label={`${t.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={14}
                        style={{
                          color:
                            i < t.rating ? "#c9a84c" : "rgba(201,168,76,0.2)",
                        }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#9a9ab0" }}
                  >
                    <p>{t.review}</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-2xl"
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        border: "1px solid rgba(201,168,76,0.2)",
                      }}
                      aria-hidden="true"
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold text-white"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {t.name}
                      </p>
                      <p className="text-xs" style={{ color: "#9a9ab0" }}>
                        {t.profession}
                      </p>
                    </div>
                  </figcaption>
                </motion.figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
