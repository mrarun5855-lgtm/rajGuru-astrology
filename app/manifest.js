export default function manifest() {
  return {
    name: "AstroVedic — Professional Astrology Services",
    short_name: "AstroVedic",
    description:
      "Book online astrology consultation with experienced Vedic astrologers.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d1a",
    theme_color: "#8b1a1a",
    orientation: "portrait",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["lifestyle", "spirituality", "education"],
  };
}
