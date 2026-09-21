export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
