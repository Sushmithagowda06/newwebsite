export default function Blog() {
  const posts = [
    { title: "5 Signs You Should See a Cardiologist", date: "Mar 1, 2025", tag: "Cardiology", emoji: "❤️" },
    { title: "Understanding Your Lung Health: A Guide", date: "Feb 22, 2025", tag: "Pulmonology", emoji: "🫁" },
    { title: "How Virtual Consultations Are Changing Healthcare", date: "Feb 15, 2025", tag: "Technology", emoji: "💻" },
    { title: "Nutrition Tips for Better Gut Health", date: "Feb 8, 2025", tag: "Gastroenterology", emoji: "🌿" },
  ];

  return (
    <main style={{ paddingTop: "80px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%)",
          padding: "80px 0",
        }}
      >
        <div className="container">
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              color: "white",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Health <span style={{ color: "rgba(255,255,255,0.6)" }}>Blog</span>
          </h1>

          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 480,
            }}
          >
            Expert articles, tips, and guides from our team of doctors.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: "64px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {posts.map((p, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: 28,
                cursor: "pointer",
                transition: "all 0.3s",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ fontSize: 40 }}>{p.emoji}</div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--primary)",
                }}
              >
                {p.tag}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--dark)",
                  lineHeight: 1.35,
                }}
              >
                {p.title}
              </h3>

              <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{p.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}