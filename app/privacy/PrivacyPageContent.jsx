"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "This Privacy Policy explains how Guru Astrology (\"we\", \"us\") collects, uses and protects the personal information you share with us through this website, including via the Register page, the \"Talk to Astrologer\" consultation flow, and the \"Get in Touch\" contact form.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "Depending on which form you use, we may collect: your full name, age, date of birth, mobile number, email address, the subject and content of your message, and which astrologer (if any) you requested to speak with.",
      "We do not ask for or store sensitive information such as payment card details, government ID numbers, or precise birth time/location beyond what you voluntarily choose to share with an astrologer during a consultation.",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: [
      "We use the information you submit to: connect you with an appropriate astrologer for a consultation, contact you by phone or email regarding your request, respond to questions submitted via the contact form, and improve our services.",
      "We do not use your personal information for automated decision-making or profiling that produces legal or similarly significant effects.",
    ],
  },
  {
    title: "4. How Your Information Is Stored",
    body: [
      "Submissions are stored securely on our servers and are accessible only to authorized Guru Astrology team members through a password-protected admin page, for the purpose of following up with you.",
      "Where email notifications are enabled internally, a copy of your submission may also be sent to our team's email inbox so a consultation request is not missed.",
    ],
  },
  {
    title: "5. Sharing of Information",
    body: [
      "We do not sell, rent or trade your personal information to third parties for marketing purposes.",
      "Your details are shared only with the specific astrologer you requested to consult with (or, for a general registration, the astrologer assigned to follow up), and with service providers who help us operate the Site (such as our email delivery provider), solely for the purpose of contacting you.",
    ],
  },
  {
    title: "6. Cookies & Similar Technologies",
    body: [
      "The Site may use minimal, functional browser storage (for example, to remember your selected language) to improve your experience. We do not use invasive third-party tracking or advertising cookies.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of the personal information you have submitted to us by contacting us at the details below. We will respond to reasonable requests within a reasonable timeframe.",
    ],
  },
  {
    title: "8. Children's Privacy",
    body: [
      "Our services are intended for individuals aged 18 and above. We do not knowingly collect personal information from children without the involvement of a parent or legal guardian. If you believe a child has submitted information to us without appropriate consent, please contact us so we can remove it.",
    ],
  },
  {
    title: "9. Data Retention",
    body: [
      "We retain submitted consultation and contact details for as long as reasonably necessary to fulfil the purpose they were collected for, or until you request their deletion, whichever is earlier.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices. The \"Last updated\" date at the top of this page indicates when it was last revised.",
    ],
  },
  {
    title: "11. Contact Us",
    body: [
      "For any privacy-related questions or requests, please contact us at dobrabhatt@gmail.com or +91 9599327922.",
    ],
  },
];

export default function PrivacyPageContent() {
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
            <span>Privacy Policy</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Privacy <span style={{ color: "#c9a84c" }}>Policy</span>
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
            <Link href={`/${locale}/terms`} style={{ color: "#c9a84c" }}>
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
