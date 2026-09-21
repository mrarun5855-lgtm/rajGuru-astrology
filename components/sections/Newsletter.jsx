"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #4a0d0d 0%, #8b1a1a 50%, #4a0d0d 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: (i % 3) + 1,
              height: (i % 3) + 1,
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              background: "rgba(201,168,76,0.5)",
            }}
          />
        ))}
        <div
          className="absolute right-0 top-0 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #c9a84c, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute left-0 bottom-0 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #ffffff, transparent)",
            transform: "translate(-30%, 30%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-3xl mb-4 block" aria-hidden="true">
            📬
          </span>
          <h2
            className="text-2xl md:text-3xl font-bold mb-3 text-white"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Subscribe to Our{" "}
            <span style={{ color: "#c9a84c" }}>Newsletter</span>
          </h2>
          <p
            className="text-sm mb-8"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Get your daily horoscope, love forecast, and weekly planetary
            overview directly in your inbox.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4 px-6 rounded-2xl inline-block"
              style={{
                background: "rgba(201,168,76,0.2)",
                border: "1px solid rgba(201,168,76,0.4)",
              }}
              role="status"
            >
              <p className="text-white font-semibold">
                ✦ Thank you for subscribing!
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Your cosmic updates are on the way.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label="Newsletter subscription"
            >
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your email address"
                  className="w-full px-5 py-3 rounded-full text-sm outline-none"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: error
                      ? "1px solid #ef4444"
                      : "1px solid rgba(255,255,255,0.2)",
                    color: "#ffffff",
                  }}
                  aria-describedby={error ? "newsletter-error" : undefined}
                />
                {error && (
                  <p
                    id="newsletter-error"
                    className="text-xs mt-1 text-left"
                    style={{ color: "#ff9999" }}
                    role="alert"
                  >
                    {error}
                  </p>
                )}
              </div>
              <motion.button
                type="submit"
                className="btn-primary whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #e8c97a)",
                  color: "#0d0d1a",
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe ✦
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
