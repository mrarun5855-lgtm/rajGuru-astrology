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
};

export default nextConfig;
