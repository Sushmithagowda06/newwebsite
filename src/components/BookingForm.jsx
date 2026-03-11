import { useState } from 'react'
import styles from './BookingForm.module.css'

const specialties = ['Cardiology', 'Pulmonology', 'Orthopedics', 'Gastroenterology', 'Neurology', 'Dermatology']
const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', specialty: '', date: '', time: '', type: 'in-person', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✅</div>
        <h2>Appointment Booked!</h2>
        <p>We've sent a confirmation to <strong>{form.email}</strong>. Our team will reach out to confirm your slot shortly.</p>
        <button className={styles.btnReset} onClick={() => setSubmitted(false)}>Book Another</button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h2>Book Your Consultation</h2>
        <p>Fill in your details and we'll confirm your appointment within 15 minutes.</p>
      </div>

      <div className={styles.typeToggle}>
        {['in-person', 'virtual'].map(t => (
          <button
            key={t}
            type="button"
            className={`${styles.typeBtn} ${form.type === t ? styles.typeBtnActive : ''}`}
            onClick={() => setForm(f => ({ ...f, type: t }))}
          >
            {t === 'in-person' ? '🏥 In-Person' : '💻 Virtual'}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Full Name *</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
        </div>
        <div className={styles.field}>
          <label>Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
        </div>
        <div className={styles.field}>
          <label>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
        </div>
        <div className={styles.field}>
          <label>Specialty *</label>
          <select name="specialty" value={form.specialty} onChange={handleChange} required>
            <option value="">Select a specialty</option>
            {specialties.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>
        <div className={styles.field}>
          <label>Preferred Date *</label>
          <input name="date" type="date" value={form.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} />
        </div>
        <div className={styles.field}>
          <label>Preferred Time *</label>
          <select name="time" value={form.time} onChange={handleChange} required>
            <option value="">Select a time</option>
            {timeSlots.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className={`${styles.field} ${styles.fieldFull}`}>
        <label>Notes / Symptoms (optional)</label>
        <textarea name="notes" value={form.notes} onChange={handleChange} placeholder="Describe your symptoms or any relevant medical history..." rows={4} />
      </div>

      <button type="submit" className={styles.btnSubmit}>
        Confirm Appointment →
      </button>
    </form>
  )
}
