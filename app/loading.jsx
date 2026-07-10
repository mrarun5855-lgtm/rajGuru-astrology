export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d0d1a",
        zIndex: 9999,
      }}
    >
      <div style={{ position: "relative", width: 64, height: 64 }}>
        <div
          style={{
            width: 64,
            height: 64,
            border: "4px solid transparent",
            borderTopColor: "#c9a84c",
            borderRightColor: "#8b1a1a",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            top: 12,
            left: 12,
            border: "4px solid transparent",
            borderTopColor: "#8b1a1a",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite reverse",
          }}
        />
      </div>
      <p
        style={{
          color: "#c9a84c",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginTop: "1rem",
        }}
      >
        Loading...
      </p>
    </div>
  );
}
