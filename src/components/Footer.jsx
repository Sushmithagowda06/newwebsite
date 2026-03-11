import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const links = {
  Company: ['About Us', 'Our Doctors', 'Careers', 'Press'],
  Services: ['Cardiology', 'Pulmonology', 'Orthopedics', 'Neurology'],
  Support: ['Help Center', 'Book Appointment', 'Privacy Policy', 'Terms of Use'],
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <svg width="22" height="22" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="12" fill="rgba(255,255,255,0.15)"/>
                  <path d="M9 14h10M14 9v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span>Cuure<span>.health</span></span>
            </div>
            <p>Revolutionizing healthcare through innovative technology for better lives and improved care.</p>
            <div className={styles.socials}>
              {['Twitter', 'LinkedIn', 'Instagram', 'YouTube'].map(s => (
                <a key={s} href="#" className={styles.social} aria-label={s}>{s[0]}</a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group} className={styles.col}>
              <h4>{group}</h4>
              {items.map(item => (
                <a key={item} href="#" className={styles.colLink}>{item}</a>
              ))}
            </div>
          ))}

          <div className={styles.col}>
            <h4>Stay Updated</h4>
            <p className={styles.newsDesc}>Get health tips and updates in your inbox.</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Your email" />
              <button>→</button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Cuure Health. All rights reserved.</p>
          <p>Made with ❤️ for better healthcare</p>
        </div>
      </div>
    </footer>
  )
}
