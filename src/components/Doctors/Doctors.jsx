import { Link } from 'react-router-dom'
import styles from './Doctors.module.css'

const doctors = [
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Senior Cardiologist',
    exp: '14 yrs exp',
    rating: 4.9,
    reviews: 312,
    emoji: '👩‍⚕️',
    bg: '#e8eef8',
  },
  {
    name: 'Dr. James Okafor',
    specialty: 'Orthopedic Surgeon',
    exp: '11 yrs exp',
    rating: 4.8,
    reviews: 278,
    emoji: '👨‍⚕️',
    bg: '#edf1fb',
  },
  {
    name: 'Dr. Priya Nair',
    specialty: 'Pulmonologist',
    exp: '9 yrs exp',
    rating: 4.9,
    reviews: 195,
    emoji: '👩‍⚕️',
    bg: '#e8eef8',
  },
  {
    name: 'Dr. Marco Ricci',
    specialty: 'Gastroenterologist',
    exp: '16 yrs exp',
    rating: 4.7,
    reviews: 423,
    emoji: '👨‍⚕️',
    bg: '#eaf0fb',
  },
]

export default function Doctors() {
  return (
    <section className={styles.section} id="doctors">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.pill}>Meet the Team</div>
            <h2 className={styles.title}>
              Our Expert<br />
              <span>Doctors</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.desc}>
              Every specialist on our platform is board-certified, continuously trained, 
              and committed to delivering the best patient outcomes.
            </p>
            <Link to="/doctors" className={styles.viewAll}>
              View All Doctors →
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {doctors.map((doc, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.avatar} style={{ background: doc.bg }}>
                <span>{doc.emoji}</span>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{doc.name}</h3>
                <p className={styles.specialty}>{doc.specialty}</p>
                <div className={styles.meta}>
                  <span className={styles.exp}>{doc.exp}</span>
                  <span className={styles.dot} />
                  <span className={styles.rating}>
                    ⭐ {doc.rating} ({doc.reviews})
                  </span>
                </div>
              </div>
              <div className={styles.actions}>
                <Link to="/appointment" className={styles.btnBook}>
                  Book Now
                </Link>
                <button className={styles.btnMsg} aria-label="Message">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
