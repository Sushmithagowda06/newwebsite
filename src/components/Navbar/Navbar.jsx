import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

{/* <nav>
  <Link to="/">Home</Link>
  <Link to="/services">Services</Link>
  <Link to="/doctors">Doctors</Link>
  <Link to="/plans">Plans</Link>
</nav> */}

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Doctors', to: '/doctors' },
  { label: 'Blog', to: '/blog' },
  // { label: 'Contact', to: '/contact' },
  { label: 'Plans', to: '/plans' },
  
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.nav}`}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z" fill="var(--primary)"/>
              <path d="M14 7v7l5 3" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M9 14h10M14 9v10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className={styles.logoText}>cuure<span>.health</span></span>
        </Link>

       <nav className={`${styles.links} ${mobileOpen ? styles.open : ''}`}>
  {navLinks.map(link => (
    <Link
      key={link.to}
      to={link.to}
      className={`${styles.link} ${
        location.pathname === link.to ? styles.active : ""
      }`}
    >
      {link.label}
    </Link>
  ))}

  {/* NURSING DROPDOWN */}
 <div className={styles.dropdown}>
  <Link to="/nursing" className={styles.link}>
    Nursing ▾
  </Link>

  <div className={styles.dropdownMenu}>
    <Link to="/nursing">Doctors at Home</Link>
  <Link to="/nursing">Nursing Care At Home</Link>
  <Link to="/nursing">Elderly Care</Link>
  <Link to="/nursing">Palliative Care</Link>
  <Link to="/nursing">Post-Operative Care</Link>
  <Link to="/nursing">Physiotherapy</Link>
  <Link to="/nursing">Attenders</Link>
</div>
</div>
</nav>

        <div className={styles.cta}>
          <Link to="/appointment" className={styles.btnBook}>
            Book Appointment
          </Link>
          <button
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
