import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const stats = [
  { value: '180K+', label: 'Patients treated' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '500+', label: 'Expert doctors' },
]

const avatars = ['👩‍⚕️', '👨‍⚕️', '👩‍⚕️']

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={`container ${styles.inner}`}>
        {/* Left content */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Trusted by 180K+ patients
          </div>

          <h1 className={styles.heading}>
            Advanced
            <span className={styles.headingAccent}> Healthcare</span>
            <br />for Better Lives
          </h1>

          <p className={styles.sub}>
            Revolutionizing healthcare through innovative technology. 
            Get expert care from top specialists — in-clinic or virtually, 
            from anywhere.
          </p>

          <div className={styles.actions}>
            <Link to="/appointment" className={styles.btnPrimary}>
              Book Free Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="#services" className={styles.btnGhost}>
              <span className={styles.playIcon}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
              See Our Services
            </a>
          </div>

          {/* Social proof */}
          <div className={styles.proof}>
            <div className={styles.avatars}>
              {avatars.map((a, i) => (
                <div key={i} className={styles.avatar} style={{ zIndex: avatars.length - i }}>
                  {a}
                </div>
              ))}
            </div>
            <p className={styles.proofText}>
              <strong>4.9/5</strong> rating from our patients
            </p>
          </div>
        </div>

        {/* Right visual */}
        <div className={styles.visual}>
          <div className={styles.imageWrap}>
            <div className={styles.imageGlow} />
            <div className={styles.imagePlaceholder}>
              <div className={styles.doctorGraphic}>
                <div className={styles.doctorCircle}>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="32" r="18" fill="var(--primary-pale)" stroke="var(--primary)" strokeWidth="2"/>
                    <path d="M15 72c0-13.807 11.193-25 25-25s25 11.193 25 25" fill="var(--primary-pale)" stroke="var(--primary)" strokeWidth="2"/>
                    <path d="M32 30h16M40 22v16" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p>Dr. Sarah Chen</p>
                <span>Senior Cardiologist</span>
              </div>
            </div>

            {/* Floating cards */}
            <div className={`${styles.floatCard} ${styles.cardLeft}`}>
              <div className={styles.cardIcon}>🩺</div>
              <div>
                <p className={styles.cardTitle}>Next Available</p>
                <p className={styles.cardValue}>Today, 3:00 PM</p>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.cardRight}`}>
              <div className={styles.cardIcon}>✅</div>
              <div>
                <p className={styles.cardTitle}>Appointments</p>
                <p className={styles.cardValue}>24 Today</p>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.cardBottom}`}>
              <div className={styles.cardIcon}>❤️</div>
              <div>
                <p className={styles.cardTitle}>Heart Rate</p>
                <p className={styles.cardValue}>72 bpm — Normal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className="container">
          <div className={styles.stats}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statItem}>
                <p className={styles.statValue}>{s.value}</p>
                <p className={styles.statLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
