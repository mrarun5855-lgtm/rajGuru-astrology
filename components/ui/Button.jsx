"use client";

import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${variant === "primary" ? "btn-primary" : "btn-outline"} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
