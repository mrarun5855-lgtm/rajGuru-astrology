"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
  FaComments,
} from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";
import Newsletter from "@/components/sections/Newsletter";

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
  {
    id: 4,
    category: "Vastu",
    date: "June 8, 2026",
    author: "Guru Ramesh",
    title: "Vastu Shastra Basics: Transform Your Home Into a Sacred Space",
    summary:
      "Learn the foundational principles of Vastu Shastra and simple remedies to enhance positive energy flow in your home, improving prosperity and wellbeing.",
    comments: 9,
    icon: "🏠",
    color: "#81c784",
  },
  {
    id: 5,
    category: "Relationships",
    date: "May 30, 2026",
    author: "Dr. Emma Sharma",
    title: "Kundli Matching Explained: Beyond the 36 Gunas",
    summary:
      "Kundli matching is more than just checking the 36 Gunas. Understand the deeper compatibility factors that astrologers consider for a successful marriage.",
    comments: 22,
    icon: "💑",
    color: "#f48fb1",
  },
  {
    id: 6,
    category: "Spirituality",
    date: "May 22, 2026",
    author: "Prof. John Patel",
    title: "Saturn Return: The Cosmic Checkpoint That Changes Everything",
    summary:
      "The Saturn Return is one of astrology's most significant transits, occurring around ages 29-30. Learn how to navigate this transformative period with grace.",
    comments: 18,
    icon: "🪐",
    color: "#ff8a65",
  },
];

export default function BlogPageContent() {
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
            ✦ Latest Articles
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Astrology <span style={{ color: "#c9a84c" }}>Blog</span>
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
            <span>Blog</span>
          </motion.nav>
        </div>
      </section>

      {/* Blog Grid */}
      <section
        className="py-20 lg:py-28"
        style={{
          background: "linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Vedic Insights"
            title="Our Latest"
            highlight="Articles"
            description="Explore our collection of in-depth articles on astrology, numerology, Vastu Shastra, and more."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                {/* Card header */}
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
                  <span className="text-4xl">{post.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div
                    className="flex items-center gap-4 text-xs mb-4"
                    style={{ color: "#9a9ab0" }}
                  >
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt size={10} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser size={10} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComments size={10} /> {post.comments}
                    </span>
                  </div>
                  <h2
                    className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {post.title}
                  </h2>
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
                    Read More <FaArrowRight size={12} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
