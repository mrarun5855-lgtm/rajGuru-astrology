import RegisterPageContent from "@/app/register/RegisterPageContent";

export const metadata = {
  title: "Register for a Free Astrology Consultation | Guru Astrology",
  description:
    "Register with your name, age, date of birth and mobile number and one of our expert astrologers will call you shortly for a personal consultation.",
  keywords: [
    "register astrology consultation",
    "free astrology consultation",
    "talk to astrologer",
    "book astrologer call",
  ],
  alternates: { canonical: "https://www.guruastrology.in/register" },
  openGraph: {
    title: "Register for a Free Astrology Consultation | Guru Astrology",
    description:
      "Share your details and an expert astrologer will call you shortly for a personal consultation.",
    url: "https://www.guruastrology.in/register",
  },
};

export default function RegisterPage() {
  return <RegisterPageContent />;
}
