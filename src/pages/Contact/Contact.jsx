import { useState } from 'react'
import styles from './Contact.module.css'
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const contactInfo = [
    {
      icon: <MdLocationOn size={24} color="#001f5b" />,
      title: 'Visit Us',
      lines: [
        { text: '1054, Sarvajanika Hostel Rd, Vidyaranyapura', href: 'https://maps.google.com/?q=1054+Sarvajanika+Hostel+Rd+Vidyaranyapura+Mysuru' },
        { text: 'Mysuru, Karnataka 570008', href: null },
      ]
    },
    {
      icon: <MdPhone size={24} color="#001f5b" />,
      title: 'Call Us',
      lines: [
        { text: '+91 74830 68353', href: 'tel:+917483068353' },
        { text: ' 82131 56014', href: 'tel:8213156014' },
        { text: 'Available 24/7 for emergency calls', href: null },
      ]
    },
    {
      icon: <MdEmail size={24} color="#001f5b" />,
      title: 'Email Us',
      lines: [
        { text: 'enquire@cuure.health', href: 'mailto:enquire@cuure.health' },
        { text: 'Response within 2 hours', href: null },
      ]
    },
    {
      icon: <MdAccessTime size={24} color="#001f5b" />,
      title: 'Working Hours',
      lines: [
        { text: 'Weekdays: 8 AM – 8 PM', href: null },
        { text: 'Weekends: 9 AM – 5 PM', href: null },
      ]
    },
  ]

  const linkStyle = {
    display: 'block',
    color: '#001f5b',
    fontWeight: '600',
    textDecoration: 'none',
    fontSize: '14px',
    marginBottom: '4px',
    cursor: 'pointer'
  }

  const paraStyle = {
    fontSize: '14px',
    marginBottom: '4px',
    color: '#444'
  }

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
              <form
                className={styles.form}
                onSubmit={e => { e.preventDefault(); setSent(true) }}
              >
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
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Your phone number" />
                </div>
                <div className={styles.field}>
                  <label>Message *</label>
                  <textarea required rows={5} placeholder="Tell us more..." />
                </div>
                <button type="submit" className={styles.btnSend}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

          <div className={styles.contacts}>
            {contactInfo.map((c, i) => (
              <div key={i} className={styles.contactCard}>
                <div className={styles.contactIcon}>{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  {c.lines.map((line, j) => {
                    if (line.href) {
                      return (
                        <a key={j} href={line.href} style={linkStyle}>
                          {line.text}
                        </a>
                      )
                    }
                    return (
                      <p key={j} style={paraStyle}>
                        {line.text}
                      </p>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  )
}