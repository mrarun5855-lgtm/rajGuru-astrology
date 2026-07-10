"use client";

import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const current =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full z-[100] h-1"
      style={{ background: "rgba(255,255,255,0.05)" }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className="h-full transition-all duration-100"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #8b1a1a, #c9a84c)",
        }}
      />
    </div>
  );
}
