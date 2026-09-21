import PrivacyPageContent from "@/app/privacy/PrivacyPageContent";

export const metadata = {
  title: "Privacy Policy | Guru Astrology",
  description:
    "Learn how Guru Astrology collects, uses and protects your personal information across the website, registration and consultation forms.",
  alternates: { canonical: "https://www.guruastrology.in/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
