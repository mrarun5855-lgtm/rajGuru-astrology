export default function manifest() {
  return {
    name: "Guru Astrology — Vedic Astrology Consultation & Horoscope",
    short_name: "Guru Astrology",
    description:
      "Book online astrology consultation with experienced Vedic astrologers for horoscope, Kundli and Vastu guidance.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d1a",
    theme_color: "#8b1a1a",
    orientation: "portrait",
    icons: [
      { src: "/favicon.svg", sizes: "192x192", type: "image/svg+xml" },
      { src: "/favicon.svg", sizes: "512x512", type: "image/svg+xml" },
      {
        src: "/favicon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    categories: ["lifestyle", "spirituality", "education"],
  };
}
