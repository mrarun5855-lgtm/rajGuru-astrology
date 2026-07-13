"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import SectionTitle from "@/components/ui/SectionTitle";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={18} />,
    title: "Visit Us",
    lines: ["Maa Kamakhya Jyotish Seva Sansthan, Birkuchi Road, Narangi, Guwahati - 781026, Assam, India"],
  },
  {
    icon: <FaPhone size={18} />,
    title: "Call Us",
    lines: ["+(91) 9599327922", "+(91) 8750880631"],
  },
  {
    icon: <FaEnvelope size={18} />,
    title: "Email Us",
    lines: ["dobrabhatt@gmail.com", "support@guruastrology.com"],
  },
  {
    icon: <FaClock size={18} />,
    title: "Working Hours",
    lines: ["Mon - Sat: 9AM - 9PM", "Sunday: 10AM - 6PM"],
  },
  {
    icon: <FaWhatsapp size={18} />,
    title: "WhatsApp Us",
    lines: ["+(91) 9599327922", "Chat with us instantly"],
    href: "https://wa.me/919599327922?text=Hello%2C%20I%20would%20like%20to%20book%20an%20astrology%20consultation.",
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, phone, subject, message } = data;
    const body = encodeURIComponent(
      [
        `Name    : ${name}`,
        `Email   : ${email}`,
        `Phone   : ${phone || "Not provided"}`,
        `Subject : ${subject}`,
        ``,
        `Message :`,
        message,
      ].join("\n"),
    );
    const mailSubject = encodeURIComponent(`Consultation Request – ${subject}`);
    const mailto = `mailto:dobrabhatt@gmail.com?subject=${mailSubject}&body=${body}`;
    window.location.href = mailto;
    reset();
  };

  const inputStyle = (hasError) => ({
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${hasError ? "#ef4444" : "rgba(201,168,76,0.2)"}`,
    color: "#e8e8e8",
    colorScheme: "dark",
  });

  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Contact Us"
          title="Get In"
          highlight="Touch"
          description="Have questions or ready to book a consultation? Our astrologers are here to help you find clarity and direction."
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <motion.address
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5 not-italic"
          >
            <div
              className="p-6 rounded-2xl mb-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,26,26,0.3), rgba(201,168,76,0.1))",
                border: "1px solid rgba(139,26,26,0.4)",
              }}
            >
              <p
                className="text-base font-semibold mb-2"
                style={{
                  color: "#ffffff",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Ready for a Consultation?
              </p>
              <p className="text-sm" style={{ color: "#9a9ab0" }}>
                Book a session with one of our expert astrologers and get the
                guidance you need for love, career, marriage, health and spiritual clarity.
              </p>
            </div>

            {contactInfo.map((info) => {
              const Tag = info.href ? "a" : "div";
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Tag
                    {...(info.href
                      ? {
                          href: info.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    className="flex items-start gap-4 p-4 rounded-xl no-underline"
                    style={{
                      background: info.href
                        ? "rgba(37,211,102,0.07)"
                        : "rgba(255,255,255,0.03)",
                      border: info.href
                        ? "1px solid rgba(37,211,102,0.25)"
                        : "1px solid rgba(201,168,76,0.1)",
                      display: "flex",
                      cursor: info.href ? "pointer" : "default",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: info.href
                          ? "linear-gradient(135deg, rgba(37,211,102,0.3), rgba(37,211,102,0.15))"
                          : "linear-gradient(135deg, rgba(139,26,26,0.4), rgba(201,168,76,0.2))",
                        color: info.href ? "#25d366" : "#c9a84c",
                      }}
                      aria-hidden="true"
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p
                        className="text-xs font-semibold tracking-wider uppercase mb-1"
                        style={{ color: info.href ? "#25d366" : "#c9a84c" }}
                      >
                        {info.title}
                      </p>
                      {info.lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm"
                          style={{ color: "#9a9ab0" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </Tag>
                </motion.div>
              );
            })}
          </motion.address>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{
                  color: "#ffffff",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                Ask for a <span style={{ color: "#c9a84c" }}>Consultation</span>
              </h3>

              {/* {isSubmitSuccessful && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-xl text-sm"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    color: "#4ade80",
                  }}
                  role="alert"
                >
                  ✓ Thank you! Your message has been sent. We will get back to
                  you within 24 hours.
                </motion.div>
              )} */}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
                aria-label="Contact form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name *"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={inputStyle(errors.name)}
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    {errors.name && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "#ef4444" }}
                        role="alert"
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email Address *"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={inputStyle(errors.email)}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "#ef4444" }}
                        role="alert"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={inputStyle(errors.phone)}
                      {...register("phone", {
                        pattern: {
                          value: /^[\d\s+\-()]{7,15}$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "#ef4444" }}
                        role="alert"
                      >
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="sr-only">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={inputStyle(errors.subject)}
                      {...register("subject", {
                        required: "Please select a subject",
                      })}
                    >
                      <option
                        value=""
                        style={{ background: "#1a1a2e", color: "#9a9ab0" }}
                      >
                        Select Subject *
                      </option>
                      <option
                        value="Horoscope Reading"
                        style={{ background: "#1a1a2e", color: "#e8e8e8" }}
                      >
                        Horoscope Reading
                      </option>
                      <option
                        value="Kundli Analysis"
                        style={{ background: "#1a1a2e", color: "#e8e8e8" }}
                      >
                        Kundli Analysis
                      </option>
                      <option
                        value="Vastu Consultation"
                        style={{ background: "#1a1a2e", color: "#e8e8e8" }}
                      >
                        Vastu Consultation
                      </option>
                      <option
                        value="Tarot Reading"
                        style={{ background: "#1a1a2e", color: "#e8e8e8" }}
                      >
                        Tarot Reading
                      </option>
                      <option
                        value="Gemstone Advice"
                        style={{ background: "#1a1a2e", color: "#e8e8e8" }}
                      >
                        Gemstone Advice
                      </option>
                      <option
                        value="Other"
                        style={{ background: "#1a1a2e", color: "#e8e8e8" }}
                      >
                        Other
                      </option>
                    </select>
                    {errors.subject && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "#ef4444" }}
                        role="alert"
                      >
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your Message *"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                    style={inputStyle(errors.message)}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message: "Message must be at least 20 characters",
                      },
                    })}
                  />
                  {errors.message && (
                    <p
                      className="text-xs mt-1"
                      style={{ color: "#ef4444" }}
                      role="alert"
                    >
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message ✦
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
