"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import AstrologerAvatar from "@/components/ui/AstrologerAvatar";

export default function ConsultationModal({ astrologer, open, onClose }) {
  const [status, setStatus] = useState("form"); // "form" | "submitting" | "success" | "error"
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Reset to a clean form every time the modal is (re)opened for a
  // (possibly different) astrologer.
  useEffect(() => {
    if (open) {
      setStatus("form");
      setServerError("");
      reset();
    }
  }, [open, astrologer, reset]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!astrologer) return null;

  const todayISO = new Date().toISOString().split("T")[0];

  const onSubmit = async (data) => {
    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          astrologerSlug: astrologer.slug,
          astrologerName: astrologer.name,
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
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.7)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-modal-title"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            style={{
              background: "#15151f",
              border: "1px solid rgba(201,168,76,0.25)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#9a9ab0",
              }}
              aria-label="Close dialog"
            >
              <FaTimes size={14} />
            </button>

            {status === "success" ? (
              <div className="text-center py-6">
                <FaCheckCircle
                  className="mx-auto mb-4"
                  size={48}
                  style={{ color: "#4ade80" }}
                  aria-hidden="true"
                />
                <h3
                  id="consultation-modal-title"
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Request Received!
                </h3>
                <p className="text-sm mb-6" style={{ color: "#9a9ab0" }}>
                  Thank you, {astrologer && "your details have been sent to"}{" "}
                  <span style={{ color: "#c9a84c" }}>{astrologer.name}</span>.
                  The astrologer will consult with you soon on the mobile
                  number you provided.
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-1">
                  <AstrologerAvatar astrologer={astrologer} size={48} />
                  <div>
                    <h3
                      id="consultation-modal-title"
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      Talk to {astrologer.name}
                    </h3>
                    <p className="text-xs" style={{ color: "#c9a84c" }}>
                      {astrologer.specialty}
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-6" style={{ color: "#9a9ab0" }}>
                  Share your details and our team will connect you with this
                  astrologer shortly.
                </p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                  noValidate
                >
                  <div>
                    <label htmlFor="ct-name" className="sr-only">
                      Full Name
                    </label>
                    <input
                      id="ct-name"
                      type="text"
                      placeholder="Full Name *"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={inputStyle(errors.name)}
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Enter your full name" },
                      })}
                    />
                    {errors.name && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }} role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ct-age" className="sr-only">
                        Age
                      </label>
                      <input
                        id="ct-age"
                        type="number"
                        min={1}
                        max={120}
                        placeholder="Age *"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={inputStyle(errors.age)}
                        {...register("age", {
                          required: "Age is required",
                          min: { value: 1, message: "Enter a valid age" },
                          max: { value: 120, message: "Enter a valid age" },
                        })}
                      />
                      {errors.age && (
                        <p className="text-xs mt-1" style={{ color: "#ef4444" }} role="alert">
                          {errors.age.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="ct-dob" className="sr-only">
                        Date of Birth
                      </label>
                      <input
                        id="ct-dob"
                        type="date"
                        max={todayISO}
                        placeholder="Date of Birth *"
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={inputStyle(errors.dob)}
                        {...register("dob", {
                          required: "Date of birth is required",
                        })}
                      />
                      {errors.dob && (
                        <p className="text-xs mt-1" style={{ color: "#ef4444" }} role="alert">
                          {errors.dob.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ct-mobile" className="sr-only">
                      Mobile Number
                    </label>
                    <input
                      id="ct-mobile"
                      type="tel"
                      inputMode="numeric"
                      placeholder="Mobile Number *"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={inputStyle(errors.mobile)}
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Enter a valid 10-digit mobile number",
                        },
                      })}
                    />
                    {errors.mobile && (
                      <p className="text-xs mt-1" style={{ color: "#ef4444" }} role="alert">
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

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full"
                    style={{ opacity: status === "submitting" ? 0.7 : 1 }}
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Request ✦"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
