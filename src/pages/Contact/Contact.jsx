import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <main style={{ paddingTop: '80px' }}>
      <div className={styles.hero}>
        <div className="container">
          <div className={styles.pill}>Get In Touch</div>
          <h1>Contact <span>Us</span></h1>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.layout}>
          <div className={styles.formSection}>
            {sent ? (
              <div className={styles.success}>
                <div>✅</div>
                <h3>Message Sent!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={e => { e.preventDefault(); setSent(true) }}>
                <h2>Send a Message</h2>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label>Name *</label>
                    <input required placeholder="Your name" />
                  </div>
                  <div className={styles.field}>
                    <label>Email *</label>
                    <input type="email" required placeholder="you@email.com" />
                  </div>
                </div>
                <div className={styles.field}>
                  <label>Subject</label>
                  <input placeholder="How can we help?" />
                </div>
                <div className={styles.field}>
                  <label>Message *</label>
                  <textarea required rows={5} placeholder="Tell us more..." />
                </div>
                <button type="submit" className={styles.btnSend}>Send Message →</button>
              </form>
            )}
          </div>

          <div className={styles.contacts}>
            {[
              { icon: '📍', title: 'Visit Us', lines: ['12 Health Avenue, MG Road', 'Bengaluru, Karnataka 560001'] },
              { icon: '📞', title: 'Call Us', lines: ['+91 80 4567 8900', 'Mon–Sat, 8 AM – 8 PM'] },
              { icon: '✉️', title: 'Email Us', lines: ['hello@cuure.health', 'support@cuure.health'] },
              { icon: '⏰', title: 'Working Hours', lines: ['Weekdays: 8 AM – 8 PM', 'Weekends: 9 AM – 5 PM'] },
            ].map((c, i) => (
              <div key={i} className={styles.contactCard}>
                <div className={styles.contactIcon}>{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  {c.lines.map((l, j) => <p key={j}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
