"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 5000, suffix: "+", label: "Happy Clients", icon: "😊" },
  { value: 25, suffix: "+", label: "Years Experience", icon: "🏆" },
  { value: 12000, suffix: "+", label: "Consultations", icon: "📞" },
  { value: 50, suffix: "+", label: "Awards Won", icon: "🥇" },
];

function useCounter(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);

  return count;
}

function StatCard({ stat, started }) {
  const count = useCounter(stat.value, 2000, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-8 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(201,168,76,0.15)",
      }}
      whileHover={{
        borderColor: "rgba(201,168,76,0.4)",
        background: "rgba(139,26,26,0.1)",
      }}
    >
      <div className="text-4xl mb-3" aria-hidden="true">
        {stat.icon}
      </div>
      <p
        className="text-4xl lg:text-5xl font-bold mb-2"
        style={{ color: "#c9a84c", fontFamily: "var(--font-playfair), serif" }}
      >
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p
        className="text-sm tracking-widest uppercase"
        style={{ color: "#9a9ab0" }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Counter() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #8b1a1a 0%, #4a0d0d 50%, #8b1a1a 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: (i % 3) + 1,
              height: (i % 3) + 1,
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              background: "rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
