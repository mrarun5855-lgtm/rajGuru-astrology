import createNextIntlPlugin from "next-intl/plugin";

// Points to the next-intl request config (i18n.js at the project root).
const withNextIntl = createNextIntlPlugin("./i18n.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion", "swiper"],
  },
  // NOTE: the legacy Pages Router `i18n` key was removed here — it is
  // unsupported (and triggers a build warning) in the App Router.
  // Locale routing is instead handled by next-intl's middleware + the
  // app/[locale] segment.
};

export default withNextIntl(nextConfig);
