import TermsPageContent from "@/app/terms/TermsPageContent";

export const metadata = {
  title: "Terms & Conditions | Guru Astrology",
  description:
    "Read the Terms & Conditions for using Guru Astrology's website, consultations and registration services.",
  alternates: { canonical: "https://www.guruastrology.in/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return <TermsPageContent />;
}
