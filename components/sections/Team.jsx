"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

const team = [
  {
    name: "Dr. Emma Sharma",
    specialty: "Vedic Astrologer",
    experience: "20 Years",
    avatar: "👩‍🔬",
    signs: ["♈", "♉", "♊", "♋"],
  },
  {
    name: "Prof. John Patel",
    specialty: "Numerologist",
    experience: "18 Years",
    avatar: "👨‍💼",
    signs: ["♌", "♍", "♎", "♏"],
  },
  {
    name: "Manisha Devi",
    specialty: "Tarot Reader",
    experience: "15 Years",
    avatar: "🧿",
    signs: ["♐", "♑", "♒", "♓"],
  },
  {
    name: "Guru Ramesh",
    specialty: "Vastu Expert",
    experience: "25 Years",
    avatar: "🧘",
    signs: ["♈", "♌", "♐", "♉"],
  },
];

export default function Team() {
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
          description="Our certified team of Vedic astrologers, numerologists, and spiritual guides are here to illuminate your path."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden text-center"
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

              <div className="relative pt-8 pb-4 px-6">
                <div
                  className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-5xl mb-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139,26,26,0.3), rgba(201,168,76,0.2))",
                    border: "2px solid rgba(201,168,76,0.3)",
                  }}
                  role="img"
                  aria-label={member.name}
                >
                  {member.avatar}
                </div>
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  {member.name}
                </h3>
                <p className="text-sm mb-1" style={{ color: "#c9a84c" }}>
                  {member.specialty}
                </p>
                <p className="text-xs mb-4" style={{ color: "#9a9ab0" }}>
                  {member.experience} Experience
                </p>

                {/* Zodiac signs */}
                <div className="flex justify-center gap-2 mb-5">
                  {member.signs.map((sign) => (
                    <span
                      key={sign}
                      className="text-sm"
                      style={{ color: "rgba(201,168,76,0.6)" }}
                      aria-hidden="true"
                    >
                      {sign}
                    </span>
                  ))}
                </div>

                {/* Social links */}
                <div className="flex justify-center gap-2">
                  {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                    (Icon, j) => (
                      <a
                        key={j}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="w-7 h-7 rounded-full flex items-center justify-center no-underline"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          color: "#9a9ab0",
                        }}
                        aria-label={`${member.name} social profile`}
                      >
                        <Icon size={12} aria-hidden="true" />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
