import { useState } from 'react'
import './About.css'

function About() {
    const [show, setShow] = useState(false); 
    return (
      <main style={{ paddingTop: '80px' }}>
        <div style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%)',
          padding: '80px 0', color: 'white'
        }}>
          <div className="container">
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 800, marginBottom: 20,paddingLeft:'6rem'}}>
              About <span style={{ color: 'rgba(255,255,255,0.6)' }}>Cuure Health</span>
            </h1>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 560, lineHeight: 1.7,paddingLeft:'6rem' }}>
              Founded in 2024, Cuure Health is on a mission to make quality healthcare accessible to everyone.
            </p>
          </div>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:"60px" }}>

          <div style={{ flex:1 }}>
            <p style={{ fontSize:30, color:'var(--text-muted)', lineHeight:1.85, marginBottom:24,paddingLeft:'8rem' }}>
              We believe healthcare should be accessible, convenient,
              and affordable for everyone. Our mission is to bring
              qualified medical professionals directly to your home,
              eliminating travel hassles and reducing wait times.
            </p>
            <ul className="list" style={{listStyle:'none', fontSize:20,paddingLeft:'9.5rem'}}>
              <li>✓ Experienced medical professionals with years of expertise</li>
              <li>✓ Quick response time and flexible scheduling</li>
              <li>✓ Comprehensive health consultations and treatments</li>
              <li>✓ Personalized care in the comfort of your home</li>
              <li>✓ Transparent and competitive pricing</li>
            </ul>
          </div>

          <div style={{ flex:1, position:"relative", padding:"40px 40px" }}>
            <img
              className={`img-main ${show ? "show" : ""}`}
              src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=800&q=80"
              alt="Doctor"
              onLoad={() => setShow(true)}
            />

            <div className={`img-card-1 ${show ? "show" : ""}`}>
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80" alt="Consultation" />
            </div>

            <div className={`img-card-2 ${show ? "show" : ""}`} style={{margin:'40px 80px'}}>
              <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80" alt="Home visit" />
            </div>

            <div className={`stat-badge ${show ? "show" : ""}`} style={{margin:'10px 80px'}}>
              <div className="pulse-dot" />
              <div className="stat-num">90%</div>
              <div className="stat-label">Patient Satisfaction</div>
            </div>
          </div>

        </div>
      </main>
    )
}
export default About;