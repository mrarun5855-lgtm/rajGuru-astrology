"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaUser,
  FaBirthdayCake,
  FaCalendarAlt,
  FaMobileAlt,
  FaShieldAlt,
  FaClock,
  FaStar,
} from "react-icons/fa";

const trustPoints = [
  { icon: FaShieldAlt, text: "Your details stay private & secure" },
  { icon: FaClock, text: "Astrologer usually calls within a few hours" },
  { icon: FaStar, text: "18+ verified, experienced astrologers" },
];

export default function RegisterPageContent() {
  const locale = useLocale();
  const [status, setStatus] = useState("form"); // "form" | "submitting" | "success" | "error"
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const todayISO = new Date().toISOString().split("T")[0];

  const onSubmit = async (data) => {
    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "register",
          name: data.name,
          age: data.age,
          dob: data.dob,
          mobile: data.mobile,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json?.message || "Something went wrong");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const inputStyle = (hasError) => ({
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${hasError ? "#ef4444" : "rgba(201,168,76,0.2)"}`,
    color: "#e8e8e8",
    colorScheme: "dark",
  });

  return (
    <div>
      {/* Page Hero */}
      <section
        className="relative py-20 sm:py-24"
        style={{
          background:
            "linear-gradient(135deg, #0d0d1a 0%, #1a0a0a 50%, #0d0d1a 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: (i % 3) + 1,
                height: (i % 3) + 1,
                left: `${(i * 7) % 100}%`,
                top: `${(i * 13) % 100}%`,
                background: "rgba(201,168,76,0.5)",
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-sm mb-8"
            style={{ color: "#9a9ab0" }}
            aria-label="Breadcrumb"
          >
            <Link href={`/${locale}`} style={{ color: "#c9a84c" }}>
              Home
            </Link>
            <span>/</span>
            <span>Register</span>
          </motion.nav>

          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Left: pitch */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 text-center lg:text-left"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.3)",
                  color: "#c9a84c",
                }}
              >
                ✦ Free Registration
              </span>
              <h1
                className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                Register &amp; Let an{" "}
                <span style={{ color: "#c9a84c" }}>Astrologer Call You</span>
              </h1>
              <p
                className="text-sm sm:text-base mb-8"
                style={{ color: "#9a9ab0" }}
              >
                No need to browse profiles — just share a few details and
                one of our expert astrologers will reach out to you
                directly for a personal consultation.
              </p>

              <ul className="space-y-4 hidden lg:block">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 justify-start">
                    <span
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(139,26,26,0.4), rgba(201,168,76,0.2))",
                        color: "#c9a84c",
                      }}
                      aria-hidden="true"
                    >
                      <Icon size={14} />
                    </span>
                    <span className="text-sm" style={{ color: "#d1d5db" }}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: form card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <div
                className="p-6 sm:p-9 rounded-3xl"
                style={{
                  background: "#15151f",
                  border: "1px solid rgba(201,168,76,0.25)",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
                }}
              >
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <FaCheckCircle
                      className="mx-auto mb-5"
                      size={56}
                      style={{ color: "#4ade80" }}
                      aria-hidden="true"
                    />
                    <h2
                      className="text-2xl font-bold text-white mb-3"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      You&apos;re All Set!
                    </h2>
                    <p
                      className="text-base mb-2"
                      style={{ color: "#c9a84c" }}
                    >
                      An astrologer will contact you shortly.
                    </p>
                    <p
                      className="text-sm mb-8 max-w-sm mx-auto"
                      style={{ color: "#9a9ab0" }}
                    >
                      Please keep your phone reachable. We&apos;ll call you
                      on the mobile number you provided.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => setStatus("form")}
                        className="btn-outline"
                      >
                        Register Another Person
                      </button>
                      <Link
                        href={`/${locale}/talk-to-astrologer`}
                        className="btn-primary no-underline"
                        style={{ color: "white" }}
                      >
                        Browse Astrologers
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <h2
                      className="text-xl sm:text-2xl font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      Your <span style={{ color: "#c9a84c" }}>Details</span>
                    </h2>
                    <p className="text-sm mb-7" style={{ color: "#9a9ab0" }}>
                      All fields are required — this helps us match you with
                      the right astrologer.
                    </p>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-5"
                      noValidate
                    >
                      <div>
                        <label
                          htmlFor="reg-name"
                          className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase mb-2"
                          style={{ color: "#c9a84c" }}
                        >
                          <FaUser size={11} aria-hidden="true" />
                          Full Name
                        </label>
                        <input
                          id="reg-name"
                          type="text"
                          placeholder="e.g. Priya Sharma"
                          className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                          style={inputStyle(errors.name)}
                          {...register("name", {
                            required: "Name is required",
                            minLength: { value: 2, message: "Enter your full name" },
                          })}
                        />
                        {errors.name && (
                          <p className="text-xs mt-1.5" style={{ color: "#ef4444" }} role="alert">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="reg-age"
                            className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase mb-2"
                            style={{ color: "#c9a84c" }}
                          >
                            <FaBirthdayCake size={11} aria-hidden="true" />
                            Age
                          </label>
                          <input
                            id="reg-age"
                            type="number"
                            min={1}
                            max={120}
                            placeholder="e.g. 28"
                            className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                            style={inputStyle(errors.age)}
                            {...register("age", {
                              required: "Age is required",
                              min: { value: 1, message: "Enter a valid age" },
                              max: { value: 120, message: "Enter a valid age" },
                            })}
                          />
                          {errors.age && (
                            <p className="text-xs mt-1.5" style={{ color: "#ef4444" }} role="alert">
                              {errors.age.message}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="reg-dob"
                            className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase mb-2"
                            style={{ color: "#c9a84c" }}
                          >
                            <FaCalendarAlt size={11} aria-hidden="true" />
                            Date of Birth
                          </label>
                          <input
                            id="reg-dob"
                            type="date"
                            max={todayISO}
                            className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                            style={inputStyle(errors.dob)}
                            {...register("dob", {
                              required: "Date of birth is required",
                            })}
                          />
                          {errors.dob && (
                            <p className="text-xs mt-1.5" style={{ color: "#ef4444" }} role="alert">
                              {errors.dob.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="reg-mobile"
                          className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase mb-2"
                          style={{ color: "#c9a84c" }}
                        >
                          <FaMobileAlt size={11} aria-hidden="true" />
                          Mobile Number
                        </label>
                        <div className="relative">
                          <span
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                            style={{ color: "#9a9ab0" }}
                          >
                            +91
                          </span>
                          <input
                            id="reg-mobile"
                            type="tel"
                            inputMode="numeric"
                            placeholder="98765 43210"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                            style={inputStyle(errors.mobile)}
                            {...register("mobile", {
                              required: "Mobile number is required",
                              pattern: {
                                value: /^[6-9]\d{9}$/,
                                message: "Enter a valid 10-digit mobile number",
                              },
                            })}
                          />
                        </div>
                        {errors.mobile && (
                          <p className="text-xs mt-1.5" style={{ color: "#ef4444" }} role="alert">
                            {errors.mobile.message}
                          </p>
                        )}
                      </div>

                      {status === "error" && serverError && (
                        <p
                          className="text-sm p-3 rounded-xl"
                          style={{
                            background: "rgba(239,68,68,0.1)",
                            border: "1px solid rgba(239,68,68,0.3)",
                            color: "#fca5a5",
                          }}
                          role="alert"
                        >
                          {serverError}
                        </p>
                      )}

                      <motion.button
                        type="submit"
                        disabled={status === "submitting"}
                        className="btn-primary w-full"
                        style={{ opacity: status === "submitting" ? 0.7 : 1 }}
                        whileHover={{ scale: status === "submitting" ? 1 : 1.02 }}
                        whileTap={{ scale: status === "submitting" ? 1 : 0.98 }}
                      >
                        {status === "submitting" ? "Submitting..." : "Register Now ✦"}
                      </motion.button>

                      <p
                        className="text-xs text-center"
                        style={{ color: "#6b6b80" }}
                      >
                        By registering you agree to be contacted by our
                        team regarding your consultation.
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* Trust points — mobile */}
              <ul className="mt-6 space-y-3 lg:hidden">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(139,26,26,0.4), rgba(201,168,76,0.2))",
                        color: "#c9a84c",
                      }}
                      aria-hidden="true"
                    >
                      <Icon size={12} />
                    </span>
                    <span className="text-xs" style={{ color: "#d1d5db" }}>
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
