// Renders an astrologer's real photo (object-cover, cropped to a circle)
// when one is set in data/astrologers.js, falling back to the emoji avatar
// otherwise so every astrologer always has *something* to show.

import Image from "next/image";

export default function AstrologerAvatar({ astrologer, size = 80, className = "" }) {
  const dimension = `${size}px`;

  if (astrologer.photo) {
    return (
      <div
        className={`relative rounded-full overflow-hidden ${className}`}
        style={{
          width: dimension,
          height: dimension,
          border: "2px solid rgba(201,168,76,0.3)",
        }}
      >
        <Image
          src={astrologer.photo}
          alt={astrologer.name}
          fill
          sizes={dimension}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`rounded-full flex items-center justify-center ${className}`}
      style={{
        width: dimension,
        height: dimension,
        fontSize: size * 0.45,
        background: "linear-gradient(135deg, rgba(139,26,26,0.3), rgba(201,168,76,0.2))",
        border: "2px solid rgba(201,168,76,0.3)",
      }}
      role="img"
      aria-label={astrologer.name}
    >
      {astrologer.avatar}
    </div>
  );
}
