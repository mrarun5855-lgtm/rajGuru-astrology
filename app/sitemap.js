export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.guruastrology.in";
  const lastModified = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "daily" },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services", priority: 0.95, changeFrequency: "weekly" },
    { url: "/horoscope", priority: 0.95, changeFrequency: "daily" },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { url: "/blog", priority: 0.85, changeFrequency: "weekly" },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
