"use client";

import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaCertificate,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

const features = [
  {
    icon: <FaUserCheck size={24} />,
    title: "Certified Astrologers",
    desc: "All our astrologers are certified with advanced degrees in Vedic astrology and have been vetted for accuracy.",
  },
  {
    icon: <FaCertificate size={24} />,
    title: "Authentic Vedic Methods",
    desc: "We follow traditional Vedic astrology methods passed down through generations for accurate readings.",
  },
  {
    icon: <FaClock size={24} />,
    title: "24/7 Availability",
    desc: "Get guidance whenever you need it. Our astrologers are available round the clock for consultations.",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "100% Confidential",
    desc: "Your personal information and consultation details are kept completely private and secure.",
  },
];

export default function WhyChoose() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
            aria-hidden="true"
          >
            <div
              className="relative rounded-3xl overflow-hidden p-10 flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,26,26,0.2), rgba(201,168,76,0.1))",
                border: "1px solid rgba(201,168,76,0.2)",
                minHeight: 420,
              }}
            >
              <div className="relative w-72 h-72">
                {[1, 2, 3].map((ring) => (
                  <motion.div
                    key={ring}
                    className="absolute inset-0 rounded-full"
                    style={{
                      border: `${ring === 1 ? 2 : 1}px ${ring === 1 ? "solid" : "dashed"} rgba(201,168,76,${0.4 - ring * 0.1})`,
                      margin: `${(ring - 1) * 20}px`,
                    }}
                    animate={{ rotate: ring % 2 === 0 ? -360 : 360 }}
                    transition={{
                      duration: 20 + ring * 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
                <div
                  className="absolute inset-24 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139,26,26,0.8), rgba(201,168,76,0.5))",
                    boxShadow: "0 0 80px rgba(139,26,26,0.5)",
                  }}
                >
                  <span className="text-5xl">🔯</span>
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 right-6 px-4 py-3 rounded-xl text-center"
                style={{
                  background: "rgba(13,13,26,0.9)",
                  border: "1px solid rgba(201,168,76,0.3)",
                }}
              >
                <p className="text-2xl font-bold" style={{ color: "#c9a84c" }}>
                  4.9★
                </p>
                <p className="text-xs" style={{ color: "#9a9ab0" }}>
                  User Rating
                </p>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-6 left-6 px-4 py-3 rounded-xl text-center"
                style={{
                  background: "rgba(13,13,26,0.9)",
                  border: "1px solid rgba(139,26,26,0.3)",
                }}
              >
                <p className="text-2xl font-bold" style={{ color: "#c9a84c" }}>
                  98%
                </p>
                <p className="text-xs" style={{ color: "#9a9ab0" }}>
                  Accuracy Rate
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle
              subtitle="Why Choose Us"
              title="The Most Trusted"
              highlight="Astrology Platform"
            />
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#9a9ab0" }}
            >
              With decades of experience and thousands of satisfied clients,
              Guru Astrology has established itself as the most reliable and
              accurate astrology platform in the industry.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-5 rounded-2xl transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,168,76,0.1)",
                  }}
                  whileHover={{
                    borderColor: "rgba(201,168,76,0.4)",
                    background: "rgba(139,26,26,0.1)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139,26,26,0.4), rgba(201,168,76,0.2))",
                      color: "#c9a84c",
                    }}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className="font-semibold text-white mb-2"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#9a9ab0" }}
                  >
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
