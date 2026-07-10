"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const zodiacs = [
  {
    symbol: "♈",
    name: "Aries",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    desc: "Bold, ambitious, and energetic. Natural leaders who dive headfirst into challenges.",
  },
  {
    symbol: "♉",
    name: "Taurus",
    dates: "Apr 20 - May 20",
    element: "Earth",
    desc: "Reliable, patient, and practical. Known for their love of comfort and beauty.",
  },
  {
    symbol: "♊",
    name: "Gemini",
    dates: "May 21 - Jun 20",
    element: "Air",
    desc: "Versatile, curious, and expressive. Quick-witted communicators with dual nature.",
  },
  {
    symbol: "♋",
    name: "Cancer",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    desc: "Intuitive, compassionate, and loyal. Deeply emotional and home-oriented souls.",
  },
  {
    symbol: "♌",
    name: "Leo",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    desc: "Dramatic, creative, and confident. Natural born leaders who love the spotlight.",
  },
  {
    symbol: "♍",
    name: "Virgo",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    desc: "Analytical, kind, and hardworking. Known for their attention to detail and service.",
  },
  {
    symbol: "♎",
    name: "Libra",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    desc: "Diplomatic, gracious, and fair-minded. Always seeking balance and harmony.",
  },
  {
    symbol: "♏",
    name: "Scorpio",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    desc: "Passionate, resourceful, and brave. Known for their intensity and determination.",
  },
  {
    symbol: "♐",
    name: "Sagittarius",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    desc: "Generous, idealistic, and adventurous. Eternal seekers of truth and freedom.",
  },
  {
    symbol: "♑",
    name: "Capricorn",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    desc: "Responsible, disciplined, and self-controlled. Masters of patience and persistence.",
  },
  {
    symbol: "♒",
    name: "Aquarius",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    desc: "Progressive, original, and humanitarian. Visionary thinkers ahead of their time.",
  },
  {
    symbol: "♓",
    name: "Pisces",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    desc: "Compassionate, artistic, and intuitive. The dreamers and mystics of the zodiac.",
  },
];

const elementColors = {
  Fire: {
    bg: "rgba(220,60,20,0.15)",
    border: "rgba(220,60,20,0.3)",
    text: "#ff7043",
  },
  Earth: {
    bg: "rgba(80,140,40,0.15)",
    border: "rgba(80,140,40,0.3)",
    text: "#81c784",
  },
  Air: {
    bg: "rgba(30,140,200,0.15)",
    border: "rgba(30,140,200,0.3)",
    text: "#4fc3f7",
  },
  Water: {
    bg: "rgba(60,60,200,0.15)",
    border: "rgba(60,60,200,0.3)",
    text: "#7986cb",
  },
};

export default function Horoscope() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Choose Your Sign"
          title="Explore Your"
          highlight="Zodiac Sign"
          description="Discover the cosmic influence of your zodiac sign. Get personalized daily, weekly, and monthly horoscope readings."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {zodiacs.map((zodiac, i) => {
            const colors = elementColors[zodiac.element];
            return (
              <motion.div
                key={zodiac.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative p-5 rounded-2xl text-center cursor-pointer overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(201,168,76,0.1)",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: colors.bg }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="text-3xl mb-3" style={{ color: colors.text }}>
                    {zodiac.symbol}
                  </div>
                  <p
                    className="text-sm font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {zodiac.name}
                  </p>
                  <p className="text-xs mb-2" style={{ color: "#9a9ab0" }}>
                    {zodiac.dates}
                  </p>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{
                      background: colors.bg,
                      color: colors.text,
                      border: `1px solid ${colors.border}`,
                    }}
                  >
                    {zodiac.element}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/horoscope"
            className="btn-primary no-underline"
            style={{ color: "white" }}
          >
            View Full Horoscope
          </Link>
        </div>
      </div>
    </section>
  );
}
