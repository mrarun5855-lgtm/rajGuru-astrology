"use client";

import { motion } from "framer-motion";

export default function SectionTitle({
  subtitle,
  title,
  highlight,
  description,
  light = false,
}) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <span
          className="text-sm font-semibold tracking-[3px] uppercase block mb-3"
          style={{ color: "#c9a84c" }}
        >
          {subtitle}
        </span>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
        style={{
          fontFamily: "var(--font-playfair), serif",
          color: light ? "#0d0d1a" : "#ffffff",
        }}
      >
        {title}{" "}
        {highlight && <span style={{ color: "#c9a84c" }}>{highlight}</span>}
      </h2>
      <div
        className="w-16 h-1 mx-auto mt-4 rounded-full"
        style={{ background: "linear-gradient(90deg, #8b1a1a, #c9a84c)" }}
        aria-hidden="true"
      />
      {description && (
        <p
          className="max-w-2xl mx-auto mt-4 leading-relaxed text-base"
          style={{ color: light ? "#555" : "#9a9ab0" }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
