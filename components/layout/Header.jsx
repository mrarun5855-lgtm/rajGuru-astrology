"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaSearch, FaStar } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Horoscope", path: "/horoscope" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      {/* Top Bar */}
      <div
        className="hidden lg:flex items-center justify-between px-8 py-2 text-sm"
        style={{ background: "#8b1a1a" }}
      >
        <div className="flex items-center gap-6">
          <span
            className="flex items-center gap-2"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            <FaPhone size={12} />
            <a
              href="tel:+919599327922"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              +(91) 9599327922
            </a>
          </span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>|</span>
          <a
            href="mailto:dobrabhatt@gmail.com"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            dobrabhatt@gmail.com
          </a>
        </div>
        <span
          style={{ color: "#c9a84c" }}
          className="flex items-center gap-1 text-xs"
        >
          <FaStar size={10} />
          Professional Astrology Services Since 1995
        </span>
      </div>

      {/* Main Header */}
      <motion.header
        className="sticky top-0 z-50 w-full"
        style={{
          background: scrolled ? "rgba(13,13,26,0.97)" : "rgba(13,13,26,0.85)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.2)"
            : "1px solid rgba(255,255,255,0.05)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 no-underline"
              aria-label="Guru Astrology Home"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #8b1a1a, #c9a84c)",
                }}
              >
                <span
                  className="text-white text-lg font-bold"
                  aria-hidden="true"
                >
                  ✦
                </span>
              </div>
              <div>
                <span
                  className="text-2xl font-bold"
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

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline"
                  style={{ color: isActive(link.path) ? "#c9a84c" : "#d1d5db" }}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "#9a9ab0",
                }}
                aria-label="Toggle search"
                aria-expanded={searchOpen}
              >
                <FaSearch size={14} />
              </button>
              <Link
                href="/contact"
                className="btn-primary text-sm py-2 px-5 no-underline"
                style={{ color: "white" }}
              >
                Get Consultation
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.05)", color: "#c9a84c" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden pb-4"
              >
                <div className="relative">
                  <label htmlFor="site-search" className="sr-only">
                    Search
                  </label>
                  <input
                    id="site-search"
                    type="search"
                    placeholder="Search astrology services..."
                    className="w-full px-5 py-3 rounded-full text-sm outline-none"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "#e8e8e8",
                    }}
                    autoFocus
                  />
                  <FaSearch
                    className="absolute right-5 top-1/2 -translate-y-1/2"
                    style={{ color: "#c9a84c" }}
                    size={14}
                    aria-hidden="true"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
              style={{
                background: "rgba(13,13,26,0.98)",
                borderTop: "1px solid rgba(201,168,76,0.1)",
              }}
            >
              <nav
                className="flex flex-col px-4 py-4 gap-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="px-4 py-3 rounded-lg text-sm font-medium no-underline transition-all"
                    style={
                      isActive(link.path)
                        ? {
                            color: "#c9a84c",
                            background: "rgba(139,26,26,0.2)",
                          }
                        : { color: "#d1d5db" }
                    }
                    aria-current={isActive(link.path) ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary text-center mt-3 text-sm no-underline"
                  style={{ color: "white" }}
                >
                  Get Consultation
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
