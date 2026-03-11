import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import ServicesPage from './pages/ServicesPage'
import DoctorsPage from './pages/DoctorsPage'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  )
}

function About() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <div style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%)',
        padding: '80px 0', color: 'white'
      }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, marginBottom: 20 }}>
            About <span style={{ color: 'rgba(255,255,255,0.6)' }}>Cuure Health</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 560, lineHeight: 1.7 }}>
            Founded in 2020, Cuure Health is on a mission to make quality healthcare accessible to everyone.
          </p>
        </div>
      </div>
      <div className="container" style={{ padding: '64px 24px', maxWidth: 800, margin: '0 auto' }}>
        <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 24 }}>
          Cuure Health was born from a simple belief: every person deserves access to world-class healthcare, regardless of geography or circumstance. 
          We combine cutting-edge technology with the human touch of compassionate doctors to deliver care that truly makes a difference.
        </p>
        <p style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.85 }}>
          Our team of 500+ board-certified specialists works alongside our AI-powered platform to ensure accurate diagnostics, 
          personalized treatment plans, and seamless follow-up care — all from the comfort of your home or at one of our partner clinics.
        </p>
      </div>
    </main>
  )
}

function Blog() {
  const posts = [
    { title: '5 Signs You Should See a Cardiologist', date: 'Mar 1, 2025', tag: 'Cardiology', emoji: '❤️' },
    { title: 'Understanding Your Lung Health: A Guide', date: 'Feb 22, 2025', tag: 'Pulmonology', emoji: '🫁' },
    { title: 'How Virtual Consultations Are Changing Healthcare', date: 'Feb 15, 2025', tag: 'Technology', emoji: '💻' },
    { title: 'Nutrition Tips for Better Gut Health', date: 'Feb 8, 2025', tag: 'Gastroenterology', emoji: '🌿' },
  ]

  return (
    <main style={{ paddingTop: '80px' }}>
      <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%)', padding: '80px 0' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, color: 'white', marginBottom: 16, letterSpacing: '-0.02em' }}>
            Health <span style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</span>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 480 }}>Expert articles, tips, and guides from our team of doctors.</p>
        </div>
      </div>
      <div className="container" style={{ padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {posts.map((p, i) => (
            <div key={i} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-lg)', padding: 28, cursor: 'pointer',
              transition: 'all 0.3s', display: 'flex', flexDirection: 'column', gap: 12
            }}>
              <div style={{ fontSize: 40 }}>{p.emoji}</div>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)' }}>{p.tag}</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, color: 'var(--dark)', lineHeight: 1.35 }}>{p.title}</h3>
              <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{p.date}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
