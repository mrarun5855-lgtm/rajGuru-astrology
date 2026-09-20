"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import Newsletter from "@/components/sections/Newsletter";

const zodiacs = [
  {
    symbol: "♈",
    name: "Aries",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    planet: "Mars",
    color: "#ff7043",
    today:
      "Today is a powerful day for Aries. Mars energizes your ambitions and drive. Focus on personal projects and take bold initiatives. A new opportunity may arise in your career.",
    love: "Venus aspects your relationship house, bringing warmth and affection. Singles may meet someone special today.",
    career:
      "Your leadership qualities shine bright. Take charge of pending projects and demonstrate your capabilities to superiors.",
    health:
      "High energy levels favor physical activity. Channel your energy through exercise. Avoid impulsive decisions.",
  },
  {
    symbol: "♉",
    name: "Taurus",
    dates: "Apr 20 - May 20",
    element: "Earth",
    planet: "Venus",
    color: "#81c784",
    today:
      "Venus blesses Taurus with beauty and harmony today. Financial matters receive positive energy. Focus on stability and long-term planning. Creative endeavors are highly favored.",
    love: "Your natural charm is at its peak. Existing relationships deepen with meaningful conversations and shared experiences.",
    career:
      "Steady progress is indicated. Your practical approach and reliability earn recognition from colleagues and management.",
    health:
      "Take time for self-care and relaxation. Your body needs rest to maintain its natural rhythm and vitality.",
  },
  {
    symbol: "♊",
    name: "Gemini",
    dates: "May 21 - Jun 20",
    element: "Air",
    planet: "Mercury",
    color: "#4fc3f7",
    today:
      "Mercury enhances your communication skills today. Multiple opportunities appear simultaneously. Social interactions bring valuable connections and insights.",
    love: "Your wit and charm attract admirers. Communication in relationships flows naturally. Express your feelings openly and honestly.",
    career:
      "Excellent day for negotiations, presentations, and collaborative projects. Your ideas are well-received by others.",
    health:
      "Mental agility is high but physical rest is needed. Practice mindfulness to calm your busy mind and restore balance.",
  },
  {
    symbol: "♋",
    name: "Cancer",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    planet: "Moon",
    color: "#7986cb",
    today:
      "The Moon, your ruler, brings heightened intuition today. Trust your gut feelings in all matters. Home and family matters require your attention and nurturing energy.",
    love: "Emotional bonds strengthen today. Your caring nature makes loved ones feel cherished and appreciated. Family harmony is indicated.",
    career:
      "Your empathy helps you understand clients and colleagues better. Creative and intuitive approaches to problems yield success.",
    health:
      "Emotional wellbeing directly affects physical health. Nurture yourself with comfort, good food, and loved ones nearby.",
  },
  {
    symbol: "♌",
    name: "Leo",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    planet: "Sun",
    color: "#ffd54f",
    today:
      "The Sun illuminates your natural charisma and leadership abilities. This is your time to shine. Creative projects receive cosmic support. Your confidence inspires those around you.",
    love: "Passion and romance are highlighted. Express your love generously. Singles have high chances of meeting their soulmate today.",
    career:
      "Your natural leadership qualities are noticed by those in authority. Present your ideas boldly — this is your moment to lead.",
    health:
      "Vitality is strong. Engage in activities that bring joy and self-expression. Physical activity enhances your natural radiance.",
  },
  {
    symbol: "♍",
    name: "Virgo",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    planet: "Mercury",
    color: "#a5d6a7",
    today:
      "Mercury sharpens your analytical mind today. Attention to detail serves you well in professional matters. Health and wellness routines benefit from your focused energy.",
    love: "Thoughtful gestures mean more than grand gestures today. Pay attention to the small details that show your partner you care.",
    career:
      "Your analytical skills and attention to detail impress supervisors. Perfect day for research, analysis, and quality control work.",
    health:
      "Excellent day to start new health routines. Your body responds well to dietary changes and exercise regimens begun today.",
  },
  {
    symbol: "♎",
    name: "Libra",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    planet: "Venus",
    color: "#f48fb1",
    today:
      "Venus blesses your social life and relationships. Balance and harmony guide your decisions. Artistic endeavors flourish under today's cosmic energy.",
    love: "Romance is highly favored. Your natural grace and charm attract positive attention. Committed couples find new ways to connect deeply.",
    career:
      "Diplomacy and collaboration skills help you mediate conflicts and build bridges between opposing parties at work.",
    health:
      "Balance is the key to your wellbeing. Ensure equal attention to work, rest, and play for optimal health and vitality.",
  },
  {
    symbol: "♏",
    name: "Scorpio",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    planet: "Pluto",
    color: "#9575cd",
    today:
      "Pluto deepens your perception and insight today. Hidden matters come to light. Transformative experiences are possible. Your magnetic presence draws important people into your sphere.",
    love: "Intense emotional connections are possible. Deep conversations reveal the true nature of your relationships and desires.",
    career:
      "Your investigative nature uncovers important information. Research and analysis work are highly productive and rewarding.",
    health:
      "Emotional release through exercise or meditation is beneficial. Transform challenging emotions into creative energy and motivation.",
  },
  {
    symbol: "♐",
    name: "Sagittarius",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    planet: "Jupiter",
    color: "#ff8a65",
    today:
      "Jupiter expands your horizons and opportunities today. Adventure and exploration are favored. Your optimism is contagious and inspires others. Long-distance matters bring positive news.",
    love: "Your adventurous spirit attracts like-minded souls. Freedom-loving partners appreciate your enthusiasm and zest for life.",
    career:
      "Opportunities for advancement, travel, or education emerge. Your broad perspective and philosophical approach solve complex problems.",
    health:
      "High spirits and optimism boost your physical vitality. Outdoor activities and sports bring both joy and excellent health benefits.",
  },
  {
    symbol: "♑",
    name: "Capricorn",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    planet: "Saturn",
    color: "#78909c",
    today:
      "Saturn, your ruler, rewards your discipline and hard work. Career advancement is indicated. Your practical wisdom and patience create solid foundations for long-term success.",
    love: "Stability and commitment are emphasized in relationships. Your reliable and trustworthy nature is deeply appreciated by your partner.",
    career:
      "Your professional reputation reaches new heights. Authority figures recognize your contributions and reliability. Promotion is possible.",
    health:
      "Discipline in health routines pays dividends. Bone health, joints, and teeth deserve special attention and regular care.",
  },
  {
    symbol: "♒",
    name: "Aquarius",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    planet: "Uranus",
    color: "#4dd0e1",
    today:
      "Uranus sparks your innovative thinking and unique perspective. Revolutionary ideas emerge. Community involvement and humanitarian efforts bring deep satisfaction and recognition.",
    love: "Intellectual connection is paramount in relationships. Engaging in meaningful conversations and shared visions strengthens bonds.",
    career:
      "Your unique ideas and progressive thinking set you apart from the crowd. Technology-related ventures and innovations are highly favorable.",
    health:
      "Your nervous system needs grounding. Meditation, yoga, and time in nature help balance your highly stimulated mental energy.",
  },
  {
    symbol: "♓",
    name: "Pisces",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    planet: "Neptune",
    color: "#80cbc4",
    today:
      "Neptune deepens your spiritual awareness and creative vision today. Intuitive insights are powerful. Artistic and healing professions are especially favored under today's cosmic energy.",
    love: "Romantic and idealistic energy is very high. Your compassionate and empathetic nature creates deep emotional bonds with loved ones.",
    career:
      "Creative, artistic, and healing-related work flourishes. Trust your instincts in professional decisions — your intuition is rarely wrong.",
    health:
      "Rest and spiritual practices are essential today. Your sensitive nature benefits from time alone, meditation, and creative expression.",
  },
];

export default function HoroscopePageContent() {
  const [selected, setSelected] = useState(null);

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
            ✦ Your Star Sign
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Daily <span style={{ color: "#c9a84c" }}>Horoscope</span>
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
            <span>Horoscope</span>
          </motion.nav>
        </div>
      </section>

      {/* Zodiac Grid */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Choose Your Sign"
            title="Select Your"
            highlight="Zodiac Sign"
            description="Click on your zodiac sign to read your personalized daily horoscope, love forecast, and career guidance."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {zodiacs.map((zodiac, i) => (
              <motion.button
                key={zodiac.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() =>
                  setSelected(selected?.name === zodiac.name ? null : zodiac)
                }
                className="group p-5 rounded-2xl text-center cursor-pointer border-0 outline-none"
                style={{
                  background:
                    selected?.name === zodiac.name
                      ? "linear-gradient(135deg, rgba(139,26,26,0.4), rgba(201,168,76,0.2))"
                      : "rgba(255,255,255,0.03)",
                  border: `2px solid ${selected?.name === zodiac.name ? zodiac.color : "rgba(201,168,76,0.1)"}`,
                  transition: "all 0.3s ease",
                }}
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label={`View ${zodiac.name} horoscope`}
              >
                <div className="text-3xl mb-2" style={{ color: zodiac.color }}>
                  {zodiac.symbol}
                </div>
                <p
                  className="text-xs font-semibold"
                  style={{
                    color: "#ffffff",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  {zodiac.name}
                </p>
                <p className="text-xs mt-1" style={{ color: "#9a9ab0" }}>
                  {zodiac.dates}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Selected Zodiac Detail */}
          <AnimatePresence>
            {selected && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `2px solid ${selected.color}40`,
                }}
                aria-label={`${selected.name} horoscope detail`}
              >
                {/* Header */}
                <div
                  className="p-8"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139,26,26,0.4), rgba(201,168,76,0.1))",
                    borderBottom: `1px solid ${selected.color}30`,
                  }}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-5xl"
                      style={{
                        background: `${selected.color}20`,
                        border: `2px solid ${selected.color}60`,
                      }}
                    >
                      {selected.symbol}
                    </div>
                    <div>
                      <h2
                        className="text-3xl font-bold text-white"
                        style={{ fontFamily: "var(--font-playfair), serif" }}
                      >
                        {selected.name}
                      </h2>
                      <p className="text-sm mt-1" style={{ color: "#9a9ab0" }}>
                        {selected.dates} • {selected.element} Sign • Ruled by{" "}
                        {selected.planet}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Today's Reading */}
                <div className="p-8">
                  <h3
                    className="text-lg font-semibold text-white mb-3"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Today&apos;s Overview
                  </h3>
                  <p
                    className="leading-relaxed mb-8"
                    style={{ color: "#9a9ab0" }}
                  >
                    {selected.today}
                  </p>

                  <div className="grid sm:grid-cols-3 gap-6">
                    {[
                      { label: "❤️ Love", content: selected.love },
                      { label: "💼 Career", content: selected.career },
                      { label: "🌿 Health", content: selected.health },
                    ].map(({ label, content }) => (
                      <div
                        key={label}
                        className="p-5 rounded-2xl"
                        style={{
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(201,168,76,0.1)",
                        }}
                      >
                        <p
                          className="font-semibold mb-2 text-sm"
                          style={{ color: "#c9a84c" }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "#9a9ab0" }}
                        >
                          {content}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <Link href="/contact" className="btn-primary">
                      Get Personalized Reading
                    </Link>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
