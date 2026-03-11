import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const services = [
  {
    id: 'cardiology',
    icon: '❤️',
    title: 'Cardiology',
    desc: 'Expert care for heart conditions with advanced diagnostics and surgical procedures.',
    items: ['Bypass surgery (CABG)', 'Heart valve surgery', 'Cardiac rehabilitation', 'Aortic aneurysm repair'],
    color: '#e8eef8',
    accent: '#1b3a6b',
  },
  {
    id: 'pulmonology',
    icon: '🫁',
    title: 'Pulmonology',
    desc: 'Respiratory care for asthma, COPD, and lung infections with state-of-the-art diagnostics.',
    items: ['Pulmonary function tests', 'Sleep studies (PSG)', 'Asthma management', 'Oxygen therapy'],
    color: '#eaf0fb',
    accent: '#2d5fad',
  },
  {
    id: 'orthopedic',
    icon: '🦴',
    title: 'Orthopedics',
    desc: 'Musculoskeletal care for injuries, degenerative conditions, and sports-related issues.',
    items: ['Joint replacement surgery', 'Sports injury treatment', 'Arthroscopic surgery', 'Osteoarthritis management'],
    color: '#eef2fc',
    accent: '#4f8ef7',
  },
  {
    id: 'gastro',
    icon: '🏥',
    title: 'Gastroenterology',
    desc: 'Diagnosis and treatment of digestive system disorders from acid reflux to complex diseases.',
    items: ['Endoscopy (Gastroscopy)', 'Irritable bowel syndrome', 'Liver disease management', 'Nutritional counseling'],
    color: '#e8eef8',
    accent: '#1b3a6b',
  },
  {
    id: 'neurology',
    icon: '🧠',
    title: 'Neurology',
    desc: 'Comprehensive neurological care for brain, spine, and nervous system conditions.',
    items: ['Stroke treatment', 'Epilepsy management', 'Multiple sclerosis care', 'Migraine treatment'],
    color: '#edf1fb',
    accent: '#2d5fad',
  },
  {
    id: 'dermatology',
    icon: '🌿',
    title: 'Dermatology',
    desc: 'Skin care solutions for all conditions — from acne and eczema to skin cancer screenings.',
    items: ['Skin cancer screening', 'Acne treatment', 'Eczema management', 'Cosmetic dermatology'],
    color: '#e8eef8',
    accent: '#4f8ef7',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section className={styles.section} id="services">
      <div className="container">
        <div className={styles.top}>
          <div>
            <div className={styles.pill}>Our Services</div>
            <h2 className={styles.title}>
              Our Services Cover<br />
              <span>All Areas</span>
            </h2>
          </div>
          <p className={styles.desc}>
            Complete medical services across all specialties, ensuring quality care,
            accurate diagnosis, and effective treatment for everyone.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Sidebar tabs */}
          <div className={styles.tabs}>
            {services.map((s, i) => (
              <button
                key={s.id}
                className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabIcon} style={{ background: s.color }}>
                  {s.icon}
                </span>
                <span className={styles.tabLabel}>{s.title}</span>
                <svg
                  className={styles.tabArrow}
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                >
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className={styles.panel} key={active}>
            <div className={styles.panelHeader} style={{ background: services[active].color }}>
              <div className={styles.panelEmoji}>{services[active].icon}</div>
              <div>
                <h3 className={styles.panelTitle}>{services[active].title}</h3>
                <p className={styles.panelDesc}>{services[active].desc}</p>
              </div>
            </div>
            <div className={styles.panelBody}>
              <p className={styles.panelSubhead}>Key Procedures & Treatments</p>
              <ul className={styles.list}>
                {services[active].items.map((item, i) => (
                  <li key={i} className={styles.listItem}>
                    <span className={styles.listCheck} style={{ color: services[active].accent }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.panelActions}>
                <Link to="/appointment" className={styles.btnBook}>
                  Book Consultation
                </Link>
                <Link to="/services" className={styles.btnLearn}>
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
