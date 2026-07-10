"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ background: "#0d0d1a" }}
    >
      <div className="text-6xl mb-6">⚠️</div>
      <h1
        className="text-3xl font-bold text-white mb-3"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        Something Went Wrong
      </h1>
      <p className="mb-8 max-w-md" style={{ color: "#9a9ab0" }}>
        The stars are momentarily misaligned. Our team has been notified and
        will restore cosmic order shortly.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button onClick={() => reset()} className="btn-primary">
          Try Again
        </button>
        <Link href="/" className="btn-outline">
          Return Home
        </Link>
      </div>
    </div>
  );
}
