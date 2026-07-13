"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a0a0a 100%)",
        borderTop: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 no-underline mb-5"
              aria-label="Guru Astrology Home"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #8b1a1a, #c9a84c)",
                }}
              >
                <span className="text-white text-lg" aria-hidden="true">
                  ✦
                </span>
              </div>
              <div>
                <span
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-playfair), serif",
                    color: "#ffffff",
                  }}
                >
                  Guru<span style={{ color: "#c9a84c" }}>Astrology</span>
                </span>
                <p
                  className="text-xs tracking-wider"
                  style={{ color: "#9a9ab0" }}
                >
                  ASTROLOGY SERVICES
                </p>
              </div>
            </Link>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#9a9ab0" }}
            >
              Your trusted guide to the ancient wisdom of Vedic astrology. We
              illuminate your path with accurate predictions and spiritual
              guidance.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: FaFacebook,
                  href: "https://facebook.com/guruastrology",
                  label: "Facebook",
                },
                {
                  icon: FaTwitter,
                  href: "https://twitter.com/guruastrology",
                  label: "Twitter",
                },
                {
                  icon: FaYoutube,
                  href: "https://youtube.com/guruastrology",
                  label: "YouTube",
                },
                {
                  icon: FaInstagram,
                  href: "https://instagram.com/guruastrology",
                  label: "Instagram",
                },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center no-underline"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "#9a9ab0",
                  }}
                  whileHover={{
                    background: "rgba(201,168,76,0.2)",
                    color: "#c9a84c",
                    scale: 1.1,
                  }}
                  aria-label={label}
                >
                  <Icon size={14} aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className="font-semibold text-sm tracking-wider uppercase mb-5"
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Our Services
            </h3>
            <ul className="space-y-3" role="list">
              {[
                "Horoscopes",
                "Gemstones",
                "Numerology",
                "Tarot Cards",
                "Birth Journal",
                "Vastu Shastra",
                "Kundli Matching",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm no-underline flex items-center gap-2 group"
                    style={{ color: "#9a9ab0" }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: "#c9a84c" }}
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-semibold text-sm tracking-wider uppercase mb-5"
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {[
                { label: "About Us", path: "/about" },
                { label: "Blog", path: "/blog" },
                { label: "Astrologers", path: "/about" },
                { label: "Appointment", path: "/contact" },
                { label: "Contact Us", path: "/contact" },
              ].map(({ label, path }) => (
                <li key={label}>
                  <Link
                    href={path}
                    className="text-sm no-underline flex items-center gap-2 group"
                    style={{ color: "#9a9ab0" }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: "#c9a84c" }}
                      aria-hidden="true"
                    >
                      ✦
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-semibold text-sm tracking-wider uppercase mb-5"
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              Contact Us
            </h3>
            <address className="space-y-4 not-italic">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt
                  size={14}
                  style={{ color: "#c9a84c", marginTop: 3, flexShrink: 0 }}
                  aria-hidden="true"
                />
                <span className="text-sm" style={{ color: "#9a9ab0" }}>
                  Maa Kamakhya Jyotish Seva Sansthan, Birkuchi Road, Narangi, Guwahati - 781026
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope
                  size={14}
                  style={{ color: "#c9a84c", flexShrink: 0 }}
                  aria-hidden="true"
                />
                <a
                  href="mailto:dobrabhatt@gmail.com"
                  className="text-sm no-underline"
                  style={{ color: "#9a9ab0" }}
                >
                  dobrabhatt@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone
                  size={14}
                  style={{ color: "#c9a84c", flexShrink: 0 }}
                  aria-hidden="true"
                />
                <a
                  href="tel:+919599327922"
                  className="text-sm no-underline"
                  style={{ color: "#9a9ab0" }}
                >
                  +(91) 9599327922
                </a>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-4 text-center text-xs"
        style={{
          borderTop: "1px solid rgba(201,168,76,0.1)",
          color: "#9a9ab0",
        }}
      >
        <p>
          © {year} <span style={{ color: "#c9a84c" }}>GuruAstrology</span>. All
          rights reserved. Crafted with ✦ for seekers of cosmic truth.
        </p>
      </div>
    </footer>
  );
}
