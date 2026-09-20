import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      style={{ background: "#0d0d1a" }}
    >
      <div className="text-8xl mb-6">🌙</div>
      <h1
        className="text-6xl font-bold mb-3"
        style={{ fontFamily: "var(--font-playfair), serif", color: "#c9a84c" }}
      >
        404
      </h1>
      <h2
        className="text-2xl font-bold text-white mb-4"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        Page Not Found
      </h2>
      <p className="mb-8 max-w-md" style={{ color: "#9a9ab0" }}>
        The cosmic page you are looking for has drifted into another dimension.
        Let us guide you back on the right path.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
