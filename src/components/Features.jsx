import styles from './Features.module.css'

const features = [
  {
    icon: '🏥',
    title: 'Expert Medical Team',
    desc: 'Our 500+ board-certified specialists deliver compassionate, precise, evidence-based care.',
  },
  {
    icon: '⭐',
    title: 'Best Medical Service',
    desc: 'Combining deep clinical expertise with cutting-edge diagnostic technology for accurate outcomes.',
  },
  {
    icon: '💻',
    title: 'Virtual Consultation',
    desc: 'Access professional healthcare via secure video or chat — no travel, no waiting rooms.',
  },
  {
    icon: '🔔',
    title: '24/7 Instant Support',
    desc: 'Round-the-clock medical support ensuring immediate help whenever you need it most.',
  },
]

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.pill}>Why Choose Us</div>
          <h2 className={styles.title}>
            Discover What Makes<br />
            <span>Us Different</span>
          </h2>
          <p className={styles.desc}>
            By adopting modern medical technology, we ensure high-quality care, 
            accurate assessments, and better patient experiences across all healthcare services.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{f.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
              <div className={styles.cardArrow}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Visual band */}
        <div className={styles.band}>
          <div className={styles.bandContent}>
            <div className={styles.bandText}>
              <h3>Powered by AI-driven diagnostics</h3>
              <p>Our platform integrates real-time health monitoring, AI triage, and specialist matching — all in one place.</p>
            </div>
            <div className={styles.bandStats}>
              <div className={styles.bandStat}>
                <span>99.2%</span>
                <p>Diagnostic accuracy</p>
              </div>
              <div className={styles.bandStat}>
                <span>&lt;5 min</span>
                <p>Average response time</p>
              </div>
              <div className={styles.bandStat}>
                <span>40+</span>
                <p>Specialties covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
