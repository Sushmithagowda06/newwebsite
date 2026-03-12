import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const SERVICES = [
  { id: "consultation", icon: "🩺", name: "Doctor Consultation", tagline: "Consult experienced doctors and book appointments easily — in-clinic or online.", badges: [{ label: "🟢 Available Today", green: true }, { label: "In-Clinic" }, { label: "Online Video" }, { label: "₹300 onwards" }], procedures: ["General physician consultation", "Specialist consultation", "Online video consultation", "Follow-up appointments", "Second opinion service", "Health check-up packages"], ctaLabel: "Book Consultation", learnMore: { title: "World-Class Consultations, Right at Your Fingertips", body: "Our Doctor Consultation service connects you with over 120 verified specialists spanning 40+ medical disciplines. Whether you need an urgent same-day appointment with a general physician, a specialist second opinion, or a relaxed online video call from home — Cuure.health makes it seamless.", highlights: [{ num: "120+", label: "Verified Doctors" }, { num: "40+", label: "Specializations" }, { num: "4.9★", label: "Avg Rating" }, { num: "15min", label: "Avg Wait Time" }], gallery: [{ img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80", caption: "State-of-the-art Consultation Rooms", span: true }, { img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&auto=format&fit=crop&q=80", caption: "HD Video Consultation" }, { img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80", caption: "Experienced Specialists" }, { img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop&q=80", caption: "Digital Prescriptions" }, { img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&auto=format&fit=crop&q=80", caption: "Secure Health Records" }], steps: [{ title: "Search & Select Your Doctor", desc: "Browse our curated list of verified specialists. Filter by specialty, location, language, or consultation fee." }, { title: "Pick a Date & Time Slot", desc: "Choose from real-time available slots. Same-day appointments available for many specialists." }, { title: "Attend Your Consultation", desc: "Visit the clinic or join a secure HD video call." }, { title: "Receive Prescription & Follow-up", desc: "Get a digital prescription instantly. Schedule follow-ups with one tap." }] } },
  { id: "physiotherapy", icon: "🦾", iconBg: "#fff7ed", name: "Physiotherapy", tagline: "Expert physiotherapy for injury recovery, pain management, and mobility restoration.", badges: [{ label: "🟢 Home Visits Available", green: true }, { label: "In-Clinic" }, { label: "₹500 onwards" }], procedures: ["Sports injury rehabilitation", "Post-surgery recovery", "Back & neck pain therapy", "Joint mobilisation", "Neurological physiotherapy", "Electrotherapy & ultrasound"], ctaLabel: "Book Session", learnMore: { title: "Heal Faster. Move Better. Live Fully.", body: "Our physiotherapy service is delivered by certified therapists trained in manual therapy, exercise science, and modern rehabilitation protocols.", highlights: [{ num: "35+", label: "Physiotherapists" }, { num: "92%", label: "Recovery Rate" }, { num: "Home", label: "Visits Available" }], gallery: [{ img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=80", caption: "Advanced Rehab Equipment", span: true }, { img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80", caption: "Strength Training" }, { img: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&auto=format&fit=crop&q=80", caption: "Hydrotherapy Pool" }, { img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&auto=format&fit=crop&q=80", caption: "Home Visit Sessions" }, { img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80", caption: "Electrotherapy Equipment" }], steps: [{ title: "Initial Assessment", desc: "A certified physiotherapist conducts a thorough evaluation of your condition, mobility, and pain levels." }, { title: "Personalised Treatment Plan", desc: "A tailored plan is created including exercise protocols, manual therapy, and lifestyle recommendations." }, { title: "Regular Therapy Sessions", desc: "Attend guided sessions in-clinic or at home. Progress is monitored and plans adjusted as you improve." }] } },
  { id: "elderly", icon: "👴", iconBg: "#fdf2f8", name: "Elderly Care", tagline: "Compassionate, professional care designed specifically for our senior community.", badges: [{ label: "🟢 24/7 Support", green: true }, { label: "Home Visits" }, { label: "₹800 onwards" }], procedures: ["Geriatric medical assessment", "Medication management", "Companionship & daily care", "Dementia & Alzheimer's care", "Fall prevention programs", "Emergency response support"], ctaLabel: "Enquire Now", learnMore: { title: "Dignity, Comfort & Expert Care for Every Senior", body: "Our Elderly Care service is built around respect, empathy, and clinical excellence. We provide holistic care to seniors at home.", highlights: [{ num: "500+", label: "Seniors Cared For" }, { num: "24/7", label: "Emergency Line" }, { num: "CG", label: "Certified Caregivers" }], gallery: [{ img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80", caption: "Comfortable Home Care Settings", span: true }, { img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&auto=format&fit=crop&q=80", caption: "Compassionate Companions" }, { img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80", caption: "Medication Management" }, { img: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&auto=format&fit=crop&q=80", caption: "Dementia Care Program" }, { img: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=600&auto=format&fit=crop&q=80", caption: "24/7 Emergency Response" }], steps: [{ title: "Free Home Assessment", desc: "A geriatric specialist visits to assess health status, home safety, and care requirements." }, { title: "Custom Care Plan", desc: "A personalised plan is created covering medical, nutritional, and emotional support needs." }, { title: "Caregiver Matching", desc: "We match a trained caregiver whose personality and skills suit your family's needs perfectly." }] } },
  { id: "pharmacy", icon: "✚", iconColor: "#16a34a", iconBg: "#fef3e2", name: "Pharmacy", tagline: "Genuine medicines delivered to your door — fast, affordable, and prescription-verified.", badges: [{ label: "🟢 2-Hr Delivery", green: true }, { label: "Prescription Upload" }, { label: "Genuine Medicines" }], procedures: ["Prescription medicines", "OTC & wellness products", "Chronic disease refills", "Refrigerated medicines", "Nutritional supplements", "Medical devices & equipment"], ctaLabel: "Order Medicines", learnMore: { title: "Your Medicines, Delivered in Hours — Not Days", body: "Cuure Pharmacy is your trusted digital pharmacy partner. We source exclusively from licensed manufacturers and distributors, ensuring 100% genuine, quality-checked medicines.", highlights: [{ num: "50K+", label: "Orders Fulfilled" }, { num: "2hr", label: "Avg Delivery" }, { num: "100%", label: "Genuine Meds" }], gallery: [{ img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=80", caption: "Licensed Storage Facility", span: true }, { img: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=80", caption: "Easy Prescription Upload" }, { img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&auto=format&fit=crop&q=80", caption: "Express Home Delivery" }, { img: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&auto=format&fit=crop&q=80", caption: "Cold Chain Medicines" }, { img: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&auto=format&fit=crop&q=80", caption: "Pharmacist Review" }], steps: [{ title: "Upload Prescription", desc: "Take a photo of your prescription and upload it via app or website." }, { title: "Pharmacist Verification", desc: "Our licensed pharmacist reviews your prescription and prepares your order accurately." }, { title: "Doorstep Delivery", desc: "Medicines delivered in sealed, tamper-proof packaging. Track your order in real time." }] } },
  { id: "nursing", icon: "👩‍⚕️", iconBg: "#eff6ff", name: "Nursing", tagline: "Certified nurses providing professional medical care in the comfort of your home.", badges: [{ label: "🟢 24/7 Available", green: true }, { label: "Home Visits" }, { label: "₹600 onwards" }], procedures: ["IV drip administration", "Wound dressing & care", "Post-surgery nursing", "Catheter management", "Vital signs monitoring", "Injection administration"], ctaLabel: "Book a Nurse", learnMore: { title: "Hospital-Level Nursing Care at Home", body: "Our home nursing service brings ICU-trained, certified nurses to your doorstep — available day and night.", highlights: [{ num: "200+", label: "Certified Nurses" }, { num: "24/7", label: "On-call" }, { num: "1hr", label: "Response Time" }], gallery: [{ img: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&auto=format&fit=crop&q=80", caption: "Home Care Visits", span: true }, { img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80", caption: "IV Drip Administration" }, { img: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600&auto=format&fit=crop&q=80", caption: "Wound Dressing" }, { img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&auto=format&fit=crop&q=80", caption: "Vitals Monitoring" }, { img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop&q=80", caption: "Post-Natal Nursing" }], steps: [{ title: "Select Nursing Type", desc: "Choose from general nursing, ICU-trained, post-surgery, or paediatric nursing based on your needs." }, { title: "Schedule Timing", desc: "Book for a specific shift or round-the-clock care. We accommodate same-day requests." }, { title: "Nurse Arrives & Begins Care", desc: "Background-verified nurse arrives at your home with all necessary equipment." }] } },
  { id: "diagnostics", icon: "🔬", iconBg: "#f0fdf4", name: "Diagnostics", tagline: "Accurate lab tests and imaging — at our centres or collected from your home.", badges: [{ label: "🟢 Home Sample Pickup", green: true }, { label: "1000+ Tests" }, { label: "Reports in 24hr" }], procedures: ["Blood & urine tests", "X-ray & ultrasound", "MRI & CT scans", "ECG & Echo", "Full body health packages", "Genetic testing"], ctaLabel: "Book a Test", learnMore: { title: "Precise Diagnostics. Faster Answers. Better Outcomes.", body: "Our NABL-accredited diagnostic labs and imaging centres offer over 1,000 tests with the highest levels of accuracy.", highlights: [{ num: "1000+", label: "Tests Available" }, { num: "NABL", label: "Accredited Labs" }, { num: "24hr", label: "Report Time" }], gallery: [{ img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80", caption: "NABL-Accredited Laboratory", span: true }, { img: "https://images.unsplash.com/photo-1516069677018-378515003435?w=600&auto=format&fit=crop&q=80", caption: "MRI & CT Imaging Centre" }, { img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&auto=format&fit=crop&q=80", caption: "Home Sample Collection" }, { img: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&auto=format&fit=crop&q=80", caption: "Digital Reports" }, { img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&auto=format&fit=crop&q=80", caption: "Health Check Packages" }], steps: [{ title: "Select Your Test", desc: "Search from 1,000+ tests or choose a health package." }, { title: "Home Pickup or Visit Centre", desc: "A phlebotomist visits your home at your chosen time, or walk in to our nearest diagnostic centre." }, { title: "Digital Reports in 24 Hours", desc: "Reports are emailed and available in your dashboard." }] } },
]

function LearnMoreSection({ data }) {
  return (
    <div className={styles.learnMore}>
      <div className={styles.descCard}>
        <div className={styles.descLabel}>About This Service</div>
        <div className={styles.descTitle}>{data.title}</div>
        <div className={styles.descBody}>{data.body}</div>
        <div className={styles.descHighlights}>
          {data.highlights.map((h) => (
            <div className={styles.descHl} key={h.label}>
              <div className={styles.descNum}>{h.num}</div>
              <div className={styles.descLbl}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.galleryCard}>
        <div className={styles.cardLabel}>Facilities &amp; Photos</div>
        <div className={styles.gallery}>
          {data.gallery.map((img, i) => (
            <div className={`${styles.galleryItem}${img.span ? ` ${styles.gallerySpan}` : ''}`} key={i}>
              <div className={styles.galleryInner}>
                <img src={img.img} alt={img.caption} loading="lazy" />
                <span className={styles.galleryCaption}>{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.stepsCard}>
        <div className={styles.cardLabel}>How It Works</div>
        <div className={styles.stepsList}>
          {data.steps.map((step, i) => (
            <div className={styles.stepRow} key={i}>
              <div className={styles.stepNum}>{i + 1}</div>
              <div className={styles.stepBody}>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepDesc}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ServicePanel({ service, learnOpen, onToggleLearn }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <div className={styles.panelIcon} style={{ background: service.iconBg || '#E6F7F4', color: service.iconColor || 'inherit' }}>
          {service.icon}
        </div>
        <div>
          <div className={styles.panelName}>{service.name}</div>
          <div className={styles.panelTagline}>{service.tagline}</div>
          <div className={styles.badges}>
            {service.badges.map((b) => (
              <span key={b.label} className={`${styles.badge}${b.green ? ` ${styles.badgeGreen}` : ''}`}>{b.label}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.procedures}>
        <div className={styles.cardLabel}>Key Procedures &amp; Treatments</div>
        <div className={styles.procGrid}>
          {service.procedures.map((p) => (
            <div className={styles.procItem} key={p}>
              <span className={styles.check}>✓</span> {p}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ctaRow}>
        {service.id === 'pharmacy' ? (
          <button className={styles.btnPrimary}>{service.ctaLabel}</button>
        ) : (
          <Link to="/appointment" className={styles.btnPrimary}>{service.ctaLabel}</Link>
        )}
        <button className={`${styles.btnLearnMore}${learnOpen ? ` ${styles.btnLearnOpen}` : ''}`} onClick={onToggleLearn}>
          {learnOpen ? 'Show Less' : 'Learn More'}
          <span className={styles.btnArrow}>{learnOpen ? ' ↑' : ' →'}</span>
        </button>
      </div>
      {learnOpen && <LearnMoreSection data={service.learnMore} />}
    </div>
  )
}

export default function Services() {
  const [activeId, setActiveId] = useState('consultation')
  const [learnOpenId, setLearnOpenId] = useState(null)
  const activeService = SERVICES.find((s) => s.id === activeId)

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <h2 className={styles.heroTitle}>
              Our Services Cover <span className={styles.heroEm}>All Areas</span>
            </h2>
            <div className={styles.heroStats}>
              {[['6+', 'Service Categories'], ['120+', 'Specialists'], ['24/7', 'Available']].map(([num, lbl]) => (
                <div key={lbl}>
                  <div className={styles.statNum}>{num}</div>
                  <div className={styles.statLbl}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.heroDesc}>
            Complete medical services across all specialties, ensuring quality care, accurate diagnosis,
            and effective treatment for everyone — from routine check-ups to advanced specialist care.
          </p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>Select a Service</div>
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className={`${styles.tab}${activeId === s.id ? ` ${styles.tabActive}` : ''}`}
                onClick={() => { setActiveId(s.id); setLearnOpenId(null) }}
              >
                <div className={styles.tabIcon} style={{ color: s.iconColor || 'inherit' }}>{s.icon}</div>
                <span className={styles.tabName}>{s.name}</span>
                <span className={styles.tabArrow}>›</span>
              </div>
            ))}
          </div>
          <div className={styles.content}>
            <ServicePanel
              key={activeId}
              service={activeService}
              learnOpen={learnOpenId === activeId}
              onToggleLearn={() => setLearnOpenId((p) => (p === activeId ? null : activeId))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}