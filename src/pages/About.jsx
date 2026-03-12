export default function About() {
  return (
    <main style={{ paddingTop: "80px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%)",
          padding: "80px 0",
          color: "white",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              marginBottom: 20,
            }}
          >
            About <span style={{ color: "rgba(255,255,255,0.6)" }}>cuure.health</span>
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            Founded in 2020, Cuure Health is on a mission to make quality healthcare accessible to everyone.
          </p>
        </div>
      </div>

      <div
        className="container"
        style={{
          padding: "64px 24px",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: 17,
            color: "var(--text-muted)",
            lineHeight: 1.85,
            marginBottom: 24,
          }}
        >
          Cuure Health was born from a simple belief: every person deserves access to world-class healthcare,
          regardless of geography or circumstance.
        </p>

        <p
          style={{
            fontSize: 17,
            color: "var(--text-muted)",
            lineHeight: 1.85,
          }}
        >
          Our team of 500+ board-certified specialists works alongside our AI-powered platform to ensure
          accurate diagnostics, personalized treatment plans, and seamless follow-up care.
        </p>
      </div>
    </main>
  );
}