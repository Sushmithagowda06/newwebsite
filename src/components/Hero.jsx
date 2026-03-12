import { Link } from 'react-router-dom'
import styles from './Hero.module.css'
import doctorImg from "./doctor.png";

const stats = [
  <div className={styles.movingStrip}>
  <div className={styles.movingText}>
    🏥 Healthcare at your doorstep • 👩‍⚕️ Trusted Doctors • 📅 Instant Appointments • 💊 Quality Care •
  </div>
</div>
  // { value: '10K+', label: 'Patients treated' },
  // { value: '98%', label: 'Satisfaction rate' },
  // { value: '100+', label: 'Expert doctors' },
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
            Trusted by 10K+ patients
          </div>

          <h1 className={styles.heading}>
            Advanced
            <span className={styles.headingAccent}> Healthcare</span>
            <br />for Better Lives
          </h1>

          <p className={styles.sub}>
            Revolutionizing healthcare through innovative technology. 
            Get expert care from top specialists — in-clinic or at home.
          </p>

          <div className={styles.actions}>
            <Link to="/appointment" className={styles.btnPrimary}>
              Book Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
           <Link to="/plans" className={styles.btnGhost}>
  <span className={styles.playIcon}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z"/>
    </svg>
  </span>
  Explore Our Plans
</Link>
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
  <img src={doctorImg} className={styles.doctorImg}/>
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
     {/* Moving Healthcare Strip */}
<div className={styles.statsBar}>
  <div className={styles.movingStrip}>
    <div className={styles.movingText}>
      🏥 Healthcare at your doorstep • 👩‍⚕️ Trusted Doctors • 📅 Instant Appointments • 💊 Quality Care 
    </div>
  </div>
</div>
    </section>
  )
}
