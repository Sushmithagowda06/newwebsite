import { useState } from 'react'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Anjali Mehta',
    role: 'Marketing Manager, Bengaluru',
    text: 'Cuure Health made booking doctor consultations and physiotherapy at home extremely easy. I scheduled the appointment in minutes and received professional care without leaving my home.',
    rating: 5,
    emoji: '👩',
  },
  {
    name: 'Rajan Pillai',
    role: 'Software Engineer, Chennai',
    text: 'Cuure Health made getting medical care at home incredibly convenient. I scheduled the appointment in minutes and received professional treatment without leaving my house.',
    rating: 5,
    emoji: '👨',
  },
  {
    name: 'Sunita Rao',
    role: 'Teacher, Hyderabad',
    text: 'Outstanding experience. The 24/7 support team was responsive when I had questions late at night. I never felt alone in managing my health condition. Highly recommend Cuure Health.',
    rating: 5,
    emoji: '👩',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className="container">
        <div className={styles.header}>
          <div className={styles.pill}>Patient Stories</div>
          <h2 className={styles.title}>
            What Our Patients<br />
            <span>Are Saying</span>
          </h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.main}>
            <div className={styles.quote}>"</div>
            <p className={styles.text}>{testimonials[active].text}</p>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>{testimonials[active].emoji}</div>
              <div>
                <p className={styles.authorName}>{testimonials[active].name}</p>
                <p className={styles.authorRole}>{testimonials[active].role}</p>
              </div>
              <div className={styles.stars}>
                {'⭐'.repeat(testimonials[active].rating)}
              </div>
            </div>

            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${active === i ? styles.dotActive : ''}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>

          <div className={styles.sidebar}>
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${active === i ? styles.thumbActive : ''}`}
                onClick={() => setActive(i)}
              >
                <span className={styles.thumbEmoji}>{t.emoji}</span>
                <div>
                  <p className={styles.thumbName}>{t.name}</p>
                  <p className={styles.thumbRole}>{t.role}</p>
                </div>
              </button>
            ))}

            <div className={styles.cta}>
              <p>Join 10,000+ patients who trust Cuure Health</p>
              <a href="/appointment" className={styles.ctaBtn}>Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
