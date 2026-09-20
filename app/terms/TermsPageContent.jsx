"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using the Guru Astrology website (\"Site\"), including browsing astrologer profiles, registering for a consultation, or submitting any form on the Site, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use the Site.",
    ],
  },
  {
    title: "2. Nature of Our Services",
    body: [
      "Guru Astrology provides Vedic astrology, numerology, Vastu, tarot and related consultation services for guidance, entertainment and informational purposes only.",
      "Astrology is a belief system and predictive tradition, not an exact or empirically proven science. Readings, predictions and remedies offered by our astrologers reflect their professional interpretation and should not be treated as guaranteed outcomes.",
    ],
  },
  {
    title: "3. Not a Substitute for Professional Advice",
    body: [
      "Our services are not a substitute for professional medical, legal, financial, psychiatric or psychological advice. For decisions relating to health, marriage, litigation, investments or mental wellbeing, please consult an appropriately licensed professional in addition to any astrological guidance you receive from us.",
    ],
  },
  {
    title: "4. Eligibility",
    body: [
      "Our services are intended for individuals aged 18 years and above. If you are under 18, you may use the Site only with the involvement and consent of a parent or legal guardian.",
    ],
  },
  {
    title: "5. Registration & Consultation Requests",
    body: [
      "When you register on the Site, use the \"Talk to Astrologer\" flow, or submit the contact form, you agree to provide accurate and current information, including your name, age, date of birth and a valid mobile number.",
      "Submitting your details does not guarantee a consultation at a specific time; our team or an astrologer will reach out to you as soon as reasonably possible on the contact number provided.",
    ],
  },
  {
    title: "6. Payments & Refunds",
    body: [
      "Where a consultation involves a paid session, applicable pricing will be communicated to you before the session is confirmed. Fees paid for a completed consultation are generally non-refundable, except where required by applicable law or explicitly agreed to by Guru Astrology in writing.",
      "If a scheduled session is not delivered due to an error on our part, you may be offered a rescheduled session or refund at our discretion.",
    ],
  },
  {
    title: "7. User Conduct",
    body: [
      "You agree not to misuse the Site, including but not limited to: submitting false or misleading information, attempting to access data belonging to other users, interfering with the Site's normal operation, or using the Site for any unlawful purpose.",
    ],
  },
  {
    title: "8. Intellectual Property",
    body: [
      "All content on this Site — including text, graphics, logos and the overall design — is the property of Guru Astrology or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute or create derivative works from this content without our prior written consent.",
    ],
  },
  {
    title: "9. Third-Party Links",
    body: [
      "The Site may contain links to third-party websites (such as social media platforms or WhatsApp). We are not responsible for the content, policies or practices of any third-party sites you visit via these links.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Guru Astrology and its astrologers shall not be liable for any direct, indirect, incidental or consequential damages arising from your use of the Site or reliance on any astrological guidance, predictions or remedies provided.",
    ],
  },
  {
    title: "11. Termination",
    body: [
      "We reserve the right to suspend or restrict access to the Site for any user who violates these Terms & Conditions, without prior notice.",
    ],
  },
  {
    title: "12. Governing Law",
    body: [
      "These Terms & Conditions are governed by the laws of India. Any disputes arising from your use of the Site shall be subject to the exclusive jurisdiction of the courts of Guwahati, Assam.",
    ],
  },
  {
    title: "13. Changes to These Terms",
    body: [
      "We may update these Terms & Conditions from time to time. Continued use of the Site after changes are posted constitutes your acceptance of the revised terms.",
    ],
  },
  {
    title: "14. Contact Us",
    body: [
      "If you have any questions about these Terms & Conditions, please reach out to us at dobrabhatt@gmail.com or +91 9599327922.",
    ],
  },
];

export default function TermsPageContent() {
  const locale = useLocale();

  return (
    <div>
      <section
        className="relative py-20"
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #1a0a0a 50%, #0d0d1a 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-sm mb-6"
            style={{ color: "#9a9ab0" }}
            aria-label="Breadcrumb"
          >
            <Link href={`/${locale}`} style={{ color: "#c9a84c" }}>
              Home
            </Link>
            <span>/</span>
            <span>Terms &amp; Conditions</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Terms &amp; <span style={{ color: "#c9a84c" }}>Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-sm"
            style={{ color: "#9a9ab0" }}
          >
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </motion.p>
        </div>
      </section>

      <section
        className="py-16 lg:py-20"
        style={{ background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2
                className="text-lg font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                <span style={{ color: "#c9a84c" }}>{section.title}</span>
              </h2>
              {section.body.map((para, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed mb-2"
                  style={{ color: "#9a9ab0" }}
                >
                  {para}
                </p>
              ))}
            </motion.div>
          ))}

          <p className="text-xs pt-6" style={{ color: "#6b6b80" }}>
            See also our{" "}
            <Link href={`/${locale}/privacy`} style={{ color: "#c9a84c" }}>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
