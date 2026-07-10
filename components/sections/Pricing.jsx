"use client";

import { motion } from "framer-motion";
import { FaCheck, FaStar } from "react-icons/fa";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";

const plans = [
  {
    name: "Basic",
    price: "29",
    period: "/month",
    desc: "Perfect for beginners exploring astrology",
    features: [
      "Daily Horoscope",
      "Weekly Forecast",
      "Basic Birth Chart",
      "Email Support",
      "1 Consultation/month",
    ],
    notIncluded: ["Kundli Analysis", "Gemstone Advice", "Priority Support"],
    recommended: false,
    icon: "🌙",
  },
  {
    name: "Premium",
    price: "79",
    period: "/month",
    desc: "Most popular for serious seekers",
    features: [
      "Daily + Weekly Horoscope",
      "Detailed Birth Chart",
      "Kundli Analysis",
      "Gemstone Advice",
      "3 Consultations/month",
      "Priority Email Support",
      "Yearly Forecast",
    ],
    notIncluded: ["Priority Support"],
    recommended: true,
    icon: "⭐",
  },
  {
    name: "Ultimate",
    price: "149",
    period: "/month",
    desc: "Complete astrology experience",
    features: [
      "Unlimited Horoscopes",
      "Complete Kundli Report",
      "Vastu Consultation",
      "Gemstone & Remedies",
      "Unlimited Consultations",
      "24/7 Priority Support",
      "Personalized Yearly Report",
      "Tarot Reading Sessions",
    ],
    notIncluded: [],
    recommended: false,
    icon: "🌟",
  },
];

export default function Pricing() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Pricing"
          title="Choose Your"
          highlight="Plan"
          description="Transparent pricing with no hidden fees. Choose the plan that best fits your spiritual journey."
        />

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`relative rounded-3xl overflow-hidden ${plan.recommended ? "md:-mt-6 md:shadow-2xl" : ""}`}
              style={{
                background: plan.recommended
                  ? "linear-gradient(135deg, #8b1a1a, #4a0d0d)"
                  : "rgba(255,255,255,0.03)",
                border: plan.recommended
                  ? "2px solid rgba(201,168,76,0.6)"
                  : "1px solid rgba(201,168,76,0.15)",
                boxShadow: plan.recommended
                  ? "0 30px 80px rgba(139,26,26,0.4)"
                  : "none",
              }}
            >
              {plan.recommended && (
                <div
                  className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-bold tracking-widest uppercase"
                  style={{
                    background: "linear-gradient(90deg, #c9a84c, #e8c97a)",
                    color: "#0d0d1a",
                  }}
                >
                  <FaStar
                    className="inline mr-1"
                    size={10}
                    aria-hidden="true"
                  />{" "}
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${plan.recommended ? "pt-12" : ""}`}>
                <div className="text-4xl mb-4" aria-hidden="true">
                  {plan.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    color: "#ffffff",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  className="text-xs mb-6"
                  style={{
                    color: plan.recommended
                      ? "rgba(255,255,255,0.7)"
                      : "#9a9ab0",
                  }}
                >
                  {plan.desc}
                </p>

                <div className="flex items-end gap-1 mb-8">
                  <span
                    className="text-lg font-bold"
                    style={{ color: "#c9a84c" }}
                  >
                    $
                  </span>
                  <span
                    className="text-5xl font-bold"
                    style={{
                      color: plan.recommended ? "#ffffff" : "#c9a84c",
                      fontFamily: "var(--font-playfair), serif",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="pb-2 text-sm"
                    style={{
                      color: plan.recommended
                        ? "rgba(255,255,255,0.6)"
                        : "#9a9ab0",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>

                <div
                  className="w-full h-px mb-6"
                  style={{
                    background: plan.recommended
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(201,168,76,0.15)",
                  }}
                />

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(201,168,76,0.2)" }}
                        aria-hidden="true"
                      >
                        <FaCheck size={10} style={{ color: "#c9a84c" }} />
                      </div>
                      <span
                        style={{
                          color: plan.recommended
                            ? "rgba(255,255,255,0.9)"
                            : "#e8e8e8",
                        }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm opacity-40"
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(255,255,255,0.05)" }}
                        aria-hidden="true"
                      >
                        <span className="text-xs">✕</span>
                      </div>
                      <span style={{ color: "#9a9ab0" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center rounded-full py-3 px-6 font-semibold text-sm transition-all duration-300 no-underline ${
                    plan.recommended
                      ? "bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 hover:opacity-90"
                      : "btn-primary"
                  }`}
                  style={
                    plan.recommended ? { color: "#0d0d1a" } : { color: "white" }
                  }
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
