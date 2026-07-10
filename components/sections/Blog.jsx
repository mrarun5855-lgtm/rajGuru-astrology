"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaComments,
} from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

const posts = [
  {
    id: 1,
    category: "Horoscope",
    date: "July 1, 2026",
    author: "Dr. Emma Sharma",
    title: "Mercury Retrograde 2026: What It Means For Each Zodiac Sign",
    summary:
      "Mercury retrograde is one of the most talked-about astrological events. Discover how this powerful transit affects your zodiac sign and how to navigate it wisely.",
    comments: 12,
    icon: "☿",
    color: "#7986cb",
  },
  {
    id: 2,
    category: "Vedic Wisdom",
    date: "June 24, 2026",
    author: "Prof. John Patel",
    title: "The Power of Numerology: How Numbers Shape Your Destiny",
    summary:
      "Every number carries a unique vibration. Learn how your life path number, expression number, and soul urge number reveal your deepest purpose and potential.",
    comments: 8,
    icon: "🔢",
    color: "#c9a84c",
  },
  {
    id: 3,
    category: "Gemstones",
    date: "June 15, 2026",
    author: "Manisha Devi",
    title: "Healing Crystals and Gemstones: A Complete Astrological Guide",
    summary:
      "Discover which healing crystals and gemstones are aligned with your zodiac sign and planetary rulers to enhance your wellbeing and attract positive energy.",
    comments: 15,
    icon: "💎",
    color: "#4fc3f7",
  },
];

export default function Blog() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Latest Articles"
          title="From Our"
          highlight="Astrology Blog"
          description="Stay updated with our latest articles on Vedic astrology, celestial events, and spiritual guidance."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <div
                className="p-6 flex items-center justify-between"
                style={{
                  background: `${post.color}15`,
                  borderBottom: "1px solid rgba(201,168,76,0.1)",
                }}
              >
                <span
                  className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: `${post.color}20`, color: post.color }}
                >
                  {post.category}
                </span>
                <span className="text-4xl" aria-hidden="true">
                  {post.icon}
                </span>
              </div>

              <div className="p-6">
                <div
                  className="flex items-center gap-4 text-xs mb-4"
                  style={{ color: "#9a9ab0" }}
                >
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt size={10} aria-hidden="true" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser size={10} aria-hidden="true" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaComments size={10} aria-hidden="true" /> {post.comments}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors leading-snug"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#9a9ab0" }}
                >
                  {post.summary}
                </p>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: "#c9a84c" }}
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More <FaArrowRight size={12} aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog" className="btn-outline no-underline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
