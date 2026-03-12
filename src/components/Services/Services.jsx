import { useState } from "react";

const SERVICES = [
  {
    id: "consultation",
    icon: "🩺",
    name: "Doctor Consultation",
    tagline: "Consult experienced doctors and book appointments easily — in-clinic or online.",
    badges: [
      { label: "🟢 Available Today", green: true },
      { label: "In-Clinic" },
      { label: "Online Video" },
      { label: "₹300 onwards" },
    ],
    procedures: [
      "General physician consultation",
      "Specialist consultation",
      "Online video consultation",
      "Follow-up appointments",
      "Second opinion service",
      "Health check-up packages",
    ],
    ctaLabel: "Book Consultation",
    learnMore: {
      title: "World-Class Consultations, Right at Your Fingertips",
      body: "Our Doctor Consultation service connects you with over 120 verified specialists spanning 40+ medical disciplines. Whether you need an urgent same-day appointment with a general physician, a specialist second opinion, or a relaxed online video call from home — Cuure.health makes it seamless. Every consultation is conducted by board-certified doctors with an average of 12 years of clinical experience. Your medical history, prescriptions, and reports are securely stored and accessible at any time.",
      highlights: [
        { num: "120+", label: "Verified Doctors" },
        { num: "40+",  label: "Specializations" },
        { num: "4.9★", label: "Avg Rating" },
        { num: "15min",label: "Avg Wait Time" },
      ],
      gallery: [
        { emoji: "🏥", caption: "State-of-the-art Consultation Rooms", bg: "linear-gradient(135deg,#e8f4fd,#c3dff7)", span: true },
        { emoji: "🎥", caption: "HD Video Consultation",   bg: "linear-gradient(135deg,#e0f2fe,#bae6fd)" },
        { emoji: "👨‍⚕️", caption: "Experienced Specialists",  bg: "linear-gradient(135deg,#fef3e2,#fde68a)" },
        { emoji: "📋", caption: "Digital Prescriptions",    bg: "linear-gradient(135deg,#f0fdf4,#bbf7d0)" },
        { emoji: "🔒", caption: "Secure Health Records",    bg: "linear-gradient(135deg,#fdf2f8,#f5d0fe)" },
      ],
      steps: [
        { title: "Search & Select Your Doctor",    desc: "Browse our curated list of verified specialists. Filter by specialty, location, language, or consultation fee to find your perfect match." },
        { title: "Pick a Date & Time Slot",        desc: "Choose from real-time available slots. Same-day appointments available for many specialists. Online or in-clinic — your choice." },
        { title: "Attend Your Consultation",       desc: "Visit the clinic or join a secure HD video call. Share reports and symptoms ahead of time for a more focused session." },
        { title: "Receive Prescription & Follow-up", desc: "Get a digital prescription instantly. Schedule follow-ups with one tap. All records saved securely in your health dashboard." },
      ],
    },
  },
  {
    id: "physiotherapy",
    icon: "🦾",
    name: "Physiotherapy",
    tagline: "Expert physiotherapy for injury recovery, pain management, and mobility restoration.",
    iconBg: "#fff7ed",
    badges: [
      { label: "🟢 Home Visits Available", green: true },
      { label: "In-Clinic" },
      { label: "₹500 onwards" },
    ],
    procedures: [
      "Sports injury rehabilitation",
      "Post-surgery recovery",
      "Back & neck pain therapy",
      "Joint mobilisation",
      "Neurological physiotherapy",
      "Electrotherapy & ultrasound",
    ],
    ctaLabel: "Book Session",
    learnMore: {
      title: "Heal Faster. Move Better. Live Fully.",
      body: "Our physiotherapy service is delivered by certified therapists trained in manual therapy, exercise science, and modern rehabilitation protocols. We treat a wide spectrum — from acute sports injuries and post-operative recovery to chronic musculoskeletal conditions and neurological disorders. Home visit sessions are available for patients who cannot travel. Every treatment plan is completely personalised and reviewed weekly to ensure optimal progress.",
      highlights: [
        { num: "35+", label: "Physiotherapists" },
        { num: "92%", label: "Recovery Rate" },
        { num: "Home", label: "Visits Available" },
      ],
      gallery: [
        { emoji: "🤸", caption: "Advanced Rehab Equipment", bg: "linear-gradient(135deg,#fff7ed,#fed7aa)", span: true },
        { emoji: "💪", caption: "Strength Training",        bg: "linear-gradient(135deg,#fef3e2,#fde68a)" },
        { emoji: "🏊", caption: "Hydrotherapy Pool",        bg: "linear-gradient(135deg,#f0fdf4,#bbf7d0)" },
        { emoji: "🏠", caption: "Home Visit Sessions",      bg: "linear-gradient(135deg,#eff6ff,#bfdbfe)" },
        { emoji: "⚡", caption: "Electrotherapy Equipment", bg: "linear-gradient(135deg,#fdf4ff,#e9d5ff)" },
      ],
      steps: [
        { title: "Initial Assessment",        desc: "A certified physiotherapist conducts a thorough evaluation of your condition, mobility, and pain levels." },
        { title: "Personalised Treatment Plan", desc: "A tailored plan is created including exercise protocols, manual therapy, and lifestyle recommendations." },
        { title: "Regular Therapy Sessions",  desc: "Attend guided sessions in-clinic or at home. Progress is monitored and plans adjusted as you improve." },
      ],
    },
  },
  {
    id: "elderly",
    icon: "👴",
    name: "Elderly Care",
    iconBg: "#fdf2f8",
    tagline: "Compassionate, professional care designed specifically for our senior community.",
    badges: [
      { label: "🟢 24/7 Support", green: true },
      { label: "Home Visits" },
      { label: "₹800 onwards" },
    ],
    procedures: [
      "Geriatric medical assessment",
      "Medication management",
      "Companionship & daily care",
      "Dementia & Alzheimer's care",
      "Fall prevention programs",
      "Emergency response support",
    ],
    ctaLabel: "Enquire Now",
    learnMore: {
      title: "Dignity, Comfort & Expert Care for Every Senior",
      body: "Our Elderly Care service is built around respect, empathy, and clinical excellence. We provide holistic care to seniors at home, covering everything from daily health monitoring and medication reminders to specialised dementia support and emergency assistance. Our trained caregivers and geriatric specialists work together to create a safe, enriching environment — allowing your loved ones to age gracefully and independently.",
      highlights: [
        { num: "500+", label: "Seniors Cared For" },
        { num: "24/7", label: "Emergency Line" },
        { num: "CG",   label: "Certified Caregivers" },
      ],
      gallery: [
        { emoji: "🏡", caption: "Comfortable Home Care Settings", bg: "linear-gradient(135deg,#fdf2f8,#f5d0fe)", span: true },
        { emoji: "🤝", caption: "Compassionate Companions",  bg: "linear-gradient(135deg,#fff7ed,#fed7aa)" },
        { emoji: "💊", caption: "Medication Management",     bg: "linear-gradient(135deg,#f0fdf4,#bbf7d0)" },
        { emoji: "🧠", caption: "Dementia Care Program",     bg: "linear-gradient(135deg,#eff6ff,#bfdbfe)" },
        { emoji: "🚨", caption: "24/7 Emergency Response",   bg: "linear-gradient(135deg,#fef3e2,#fde68a)" },
      ],
      steps: [
        { title: "Free Home Assessment", desc: "A geriatric specialist visits to assess health status, home safety, and care requirements." },
        { title: "Custom Care Plan",     desc: "A personalised plan is created covering medical, nutritional, and emotional support needs." },
        { title: "Caregiver Matching",   desc: "We match a trained caregiver whose personality and skills suit your family's needs perfectly." },
      ],
    },
  },
  {
    id: "pharmacy",
    icon: "💊",
    name: "Pharmacy",
    iconBg: "#fef3e2",
    tagline: "Genuine medicines delivered to your door — fast, affordable, and prescription-verified.",
    badges: [
      { label: "🟢 2-Hr Delivery", green: true },
      { label: "Prescription Upload" },
      { label: "Genuine Medicines" },
    ],
    procedures: [
      "Prescription medicines",
      "OTC & wellness products",
      "Chronic disease refills",
      "Refrigerated medicines",
      "Nutritional supplements",
      "Medical devices & equipment",
    ],
    ctaLabel: "Order Medicines",
    learnMore: {
      title: "Your Medicines, Delivered in Hours — Not Days",
      body: "Cuure Pharmacy is your trusted digital pharmacy partner. We source exclusively from licensed manufacturers and distributors, ensuring 100% genuine, quality-checked medicines. Upload your prescription through the app, and we'll dispense and deliver to your door — often within 2 hours. Our pharmacists review every order and are available around the clock for queries, dosage guidance, and drug interaction checks.",
      highlights: [
        { num: "50K+", label: "Orders Fulfilled" },
        { num: "2hr",  label: "Avg Delivery" },
        { num: "100%", label: "Genuine Meds" },
      ],
      gallery: [
        { emoji: "🏪", caption: "Licensed Storage Facility",   bg: "linear-gradient(135deg,#fef3e2,#fde68a)", span: true },
        { emoji: "📱", caption: "Easy Prescription Upload",    bg: "linear-gradient(135deg,#f0fdf4,#bbf7d0)" },
        { emoji: "🚚", caption: "Express Home Delivery",       bg: "linear-gradient(135deg,#eff6ff,#bfdbfe)" },
        { emoji: "❄️", caption: "Cold Chain Medicines",        bg: "linear-gradient(135deg,#fdf4ff,#e9d5ff)" },
        { emoji: "👨‍⚕️", caption: "Pharmacist Review",          bg: "linear-gradient(135deg,#fdf2f8,#f5d0fe)" },
      ],
      steps: [
        { title: "Upload Prescription",       desc: "Take a photo of your prescription and upload it via app or website. OTC items need no prescription." },
        { title: "Pharmacist Verification",   desc: "Our licensed pharmacist reviews your prescription and prepares your order accurately." },
        { title: "Doorstep Delivery",         desc: "Medicines delivered in sealed, tamper-proof packaging. Track your order in real time." },
      ],
    },
  },
  {
    id: "nursing",
    icon: "👩‍⚕️",
    name: "Nursing",
    iconBg: "#eff6ff",
    tagline: "Certified nurses providing professional medical care in the comfort of your home.",
    badges: [
      { label: "🟢 24/7 Available", green: true },
      { label: "Home Visits" },
      { label: "₹600 onwards" },
    ],
    procedures: [
      "IV drip administration",
      "Wound dressing & care",
      "Post-surgery nursing",
      "Catheter management",
      "Vital signs monitoring",
      "Injection administration",
    ],
    ctaLabel: "Book a Nurse",
    learnMore: {
      title: "Hospital-Level Nursing Care at Home",
      body: "Our home nursing service brings ICU-trained, certified nurses to your doorstep — available day and night. Whether you're recovering from surgery, managing a chronic condition, or need specialised post-natal care, our nurses deliver clinical-grade care with warmth and professionalism. All nurses are background-verified, uniformed, and carry standardised medical kits for safe, hygienic procedures.",
      highlights: [
        { num: "200+", label: "Certified Nurses" },
        { num: "24/7", label: "On-call" },
        { num: "1hr",  label: "Response Time" },
      ],
      gallery: [
        { emoji: "🏠", caption: "Home Care Visits",        bg: "linear-gradient(135deg,#eff6ff,#bfdbfe)", span: true },
        { emoji: "💉", caption: "IV Drip Administration",  bg: "linear-gradient(135deg,#f0fdf4,#bbf7d0)" },
        { emoji: "🩹", caption: "Wound Dressing",          bg: "linear-gradient(135deg,#fdf2f8,#f5d0fe)" },
        { emoji: "📊", caption: "Vitals Monitoring",       bg: "linear-gradient(135deg,#fef3e2,#fde68a)" },
        { emoji: "👶", caption: "Post-Natal Nursing",      bg: "linear-gradient(135deg,#fff7ed,#fed7aa)" },
      ],
      steps: [
        { title: "Select Nursing Type", desc: "Choose from general nursing, ICU-trained, post-surgery, or paediatric nursing based on your needs." },
        { title: "Schedule Timing",     desc: "Book for a specific shift or round-the-clock care. We accommodate same-day requests." },
        { title: "Nurse Arrives & Begins Care", desc: "Background-verified nurse arrives at your home with all necessary equipment and begins treatment immediately." },
      ],
    },
  },
  {
    id: "diagnostics",
    icon: "🔬",
    name: "Diagnostics",
    iconBg: "#f0fdf4",
    tagline: "Accurate lab tests and imaging — at our centres or collected from your home.",
    badges: [
      { label: "🟢 Home Sample Pickup", green: true },
      { label: "1000+ Tests" },
      { label: "Reports in 24hr" },
    ],
    procedures: [
      "Blood & urine tests",
      "X-ray & ultrasound",
      "MRI & CT scans",
      "ECG & Echo",
      "Full body health packages",
      "Genetic testing",
    ],
    ctaLabel: "Book a Test",
    learnMore: {
      title: "Precise Diagnostics. Faster Answers. Better Outcomes.",
      body: "Our NABL-accredited diagnostic labs and imaging centres offer over 1,000 tests with the highest levels of accuracy. Our home sample collection service sends a trained phlebotomist to your door — no need to visit a lab. Digital reports are available within 24 hours and can be shared directly with your Cuure doctor for interpretation. We offer comprehensive health packages designed for annual check-ups, pre-employment screenings, and disease monitoring.",
      highlights: [
        { num: "1000+", label: "Tests Available" },
        { num: "NABL",  label: "Accredited Labs" },
        { num: "24hr",  label: "Report Time" },
      ],
      gallery: [
        { emoji: "🔬", caption: "NABL-Accredited Laboratory", bg: "linear-gradient(135deg,#f0fdf4,#bbf7d0)", span: true },
        { emoji: "🧲", caption: "MRI & CT Imaging Centre",    bg: "linear-gradient(135deg,#eff6ff,#bfdbfe)" },
        { emoji: "🏠", caption: "Home Sample Collection",     bg: "linear-gradient(135deg,#fef3e2,#fde68a)" },
        { emoji: "📄", caption: "Digital Reports",            bg: "linear-gradient(135deg,#fdf4ff,#e9d5ff)" },
        { emoji: "📦", caption: "Health Check Packages",      bg: "linear-gradient(135deg,#fdf2f8,#f5d0fe)" },
      ],
      steps: [
        { title: "Select Your Test",               desc: "Search from 1,000+ tests or choose a health package. Doctor prescriptions can be uploaded for guidance." },
        { title: "Home Pickup or Visit Centre",    desc: "A phlebotomist visits your home at your chosen time, or walk in to our nearest diagnostic centre." },
        { title: "Digital Reports in 24 Hours",   desc: "Reports are emailed and available in your dashboard. Share instantly with your doctor for interpretation." },
      ],
    },
  },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  .cuure-root {
    font-family: 'DM Sans', sans-serif;
    background: #F7F8FC;
    color: #1E2740;
    min-height: 100vh;
  }

  /* NAV */
  .cuure-nav {
    position: sticky; top: 0; z-index: 200;
    background: rgba(255,255,255,0.97);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid #E2E6EF;
    height: 68px;
    display: flex; align-items: center;
    padding: 0 6%;
    justify-content: space-between;
    box-shadow: 0 2px 10px rgba(15,31,61,0.07);
  }
  .cuure-logo {
    display: flex; align-items: center; gap: 10px;
    font-family: 'Fraunces', serif; font-size: 1.35rem; font-weight: 700;
    color: #0F1F3D; text-decoration: none; cursor: pointer;
  }
  .cuure-logo-icon {
    width: 38px; height: 38px; border-radius: 50%;
    background: linear-gradient(135deg, #0F1F3D, #1A3260);
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 1rem; font-weight: 700;
  }
  .cuure-logo-teal { color: #0D8C7A; }
  .cuure-nav-links { display: flex; gap: 32px; list-style: none; margin: 0; padding: 0; }
  .cuure-nav-links a {
    text-decoration: none; font-size: 0.9rem; font-weight: 500;
    color: #4F5B79; transition: color 0.2s; position: relative; padding-bottom: 4px;
  }
  .cuure-nav-links a.active,
  .cuure-nav-links a:hover { color: #0F1F3D; }
  .cuure-nav-cta {
    background: #0F1F3D; color: white;
    padding: 10px 22px; border-radius: 50px;
    font-size: 0.875rem; font-weight: 600; border: none; cursor: pointer;
    transition: all 0.3s;
  }
  .cuure-nav-cta:hover { background: #0D8C7A; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(13,140,122,0.35); }

  /* HERO */
  .cuure-hero {
    padding: 72px 6% 56px;
    background: linear-gradient(160deg, #f0f4ff 0%, #F7F8FC 60%);
    border-bottom: 1px solid #E2E6EF;
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 40px; align-items: end;
  }
  .cuure-hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: #E6F7F4; color: #0D8C7A;
    border: 1px solid rgba(13,140,122,0.25);
    padding: 5px 14px; border-radius: 50px;
    font-size: 0.75rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 16px;
  }
  .cuure-hero-dot { width: 6px; height: 6px; border-radius: 50%; background: #0D8C7A; }
  .cuure-hero h1 {
    font-family: 'Fraunces', serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 700; line-height: 1.15; color: #0F1F3D;
  }
  .cuure-hero-em { color: #0D8C7A; }
  .cuure-hero-stats {
    display: flex; gap: 32px; margin-top: 36px;
    padding-top: 28px; border-top: 1px solid #E2E6EF;
  }
  .cuure-stat-num {
    font-family: 'Fraunces', serif;
    font-size: 1.7rem; font-weight: 700; color: #0F1F3D;
  }
  .cuure-stat-lbl { font-size: 0.78rem; color: #9BA5BE; margin-top: 2px; }
  .cuure-hero-desc { font-size: 1rem; color: #4F5B79; line-height: 1.75; align-self: end; }

  /* LAYOUT */
  .cuure-wrapper {
    display: grid; grid-template-columns: 300px 1fr;
    gap: 0; padding: 48px 6%; align-items: start;
  }

  /* SIDEBAR */
  .cuure-sidebar {
    position: sticky; top: 88px;
    background: white; border-radius: 14px;
    border: 1px solid #E2E6EF;
    box-shadow: 0 2px 10px rgba(15,31,61,0.07);
    overflow: hidden;
  }
  .cuure-sidebar-header {
    padding: 18px 22px 14px;
    border-bottom: 1px solid #F1F3F8;
  }
  .cuure-sidebar-title {
    font-size: 0.7rem; font-weight: 700;
    text-transform: uppercase; letter-spacing: 1.5px; color: #9BA5BE;
  }
  .cuure-tab {
    display: flex; align-items: center; gap: 14px;
    padding: 15px 22px; cursor: pointer;
    border-left: 3px solid transparent;
    border-bottom: 1px solid #F1F3F8;
    transition: all 0.25s; background: white;
  }
  .cuure-tab:last-child { border-bottom: none; }
  .cuure-tab:hover { background: #F7F8FC; border-left-color: #E2E6EF; }
  .cuure-tab.active { background: #E6F7F4; border-left-color: #0D8C7A; }
  .cuure-tab-icon {
    width: 42px; height: 42px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 1.2rem; background: #F1F3F8;
    transition: background 0.25s; flex-shrink: 0;
  }
  .cuure-tab.active .cuure-tab-icon { background: rgba(13,140,122,0.15); }
  .cuure-tab-name {
    font-size: 0.9rem; font-weight: 500; color: #1E2740;
    transition: color 0.2s;
  }
  .cuure-tab.active .cuure-tab-name { font-weight: 600; }
  .cuure-tab-arrow {
    margin-left: auto; color: #9BA5BE; font-size: 0.85rem;
    transition: all 0.25s;
  }
  .cuure-tab.active .cuure-tab-arrow { color: #0D8C7A; transform: translateX(2px); }

  /* CONTENT */
  .cuure-content { padding-left: 28px; }
  .cuure-panel { animation: cuureUp 0.4s ease both; }
  @keyframes cuureUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* PANEL HEADER */
  .cuure-panel-header {
    background: white; border-radius: 14px;
    border: 1px solid #E2E6EF; padding: 28px 30px;
    margin-bottom: 18px;
    display: grid; grid-template-columns: auto 1fr;
    gap: 22px; align-items: center;
  }
  .cuure-panel-icon {
    width: 72px; height: 72px; border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    font-size: 2rem; background: #E6F7F4;
    border: 1px solid rgba(13,140,122,0.2); flex-shrink: 0;
  }
  .cuure-panel-name {
    font-family: 'Fraunces', serif;
    font-size: 1.65rem; font-weight: 700; color: #0F1F3D; margin-bottom: 6px;
  }
  .cuure-panel-tagline { font-size: 0.93rem; color: #4F5B79; line-height: 1.6; }
  .cuure-panel-badges { display: flex; gap: 8px; margin-top: 12px; flex-wrap: wrap; }
  .cuure-badge {
    padding: 4px 12px; border-radius: 50px;
    font-size: 0.75rem; font-weight: 600;
    background: #E8F4FD; color: #1A3260;
    border: 1px solid rgba(13,50,96,0.15);
  }
  .cuure-badge.green { background: #E6F7F4; color: #0D8C7A; border-color: rgba(13,140,122,0.2); }

  /* PROCEDURES */
  .cuure-procedures {
    background: white; border-radius: 14px;
    border: 1px solid #E2E6EF; padding: 26px 30px; margin-bottom: 18px;
  }
  .cuure-card-label {
    font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 1.5px; color: #9BA5BE; margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .cuure-card-label::after {
    content: ''; flex: 1; height: 1px; background: #E2E6EF;
  }
  .cuure-proc-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
  }
  .cuure-proc-item {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 14px; background: #F7F8FC;
    border-radius: 10px; font-size: 0.875rem; color: #4F5B79;
    border: 1px solid #E2E6EF; transition: all 0.2s; cursor: default;
  }
  .cuure-proc-item:hover { background: #E6F7F4; border-color: rgba(13,140,122,0.3); color: #0F1F3D; }
  .cuure-check { color: #0D8C7A; font-weight: 700; font-size: 0.9rem; flex-shrink: 0; }

  /* CTA ROW */
  .cuure-cta-row {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 20px; flex-wrap: wrap;
  }
  .cuure-btn-primary {
    padding: 12px 26px; border-radius: 50px; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 0.875rem; font-weight: 600;
    background: #0F1F3D; color: white; transition: all 0.3s; letter-spacing: 0.02em;
  }
  .cuure-btn-primary:hover { background: #0D8C7A; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(13,140,122,0.35); }
  .cuure-btn-learn {
    background: none; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600;
    color: #0D8C7A; display: flex; align-items: center; gap: 6px;
    padding: 0; transition: all 0.25s;
  }
  .cuure-btn-learn:hover { color: #0F1F3D; gap: 10px; }
  .cuure-btn-learn.open { color: #9BA5BE; }
  .cuure-btn-learn.open:hover { color: #EF4444; }
  .cuure-btn-arrow { transition: transform 0.25s; display: inline-block; }
  .cuure-btn-learn.open .cuure-btn-arrow { transform: rotate(90deg); }

  /* LEARN MORE SECTION */
  .cuure-lm { animation: cuureUp 0.45s ease both; }

  /* DESCRIPTION CARD */
  .cuure-desc-card {
    background: linear-gradient(135deg, #0F1F3D 0%, #1A3260 100%);
    border-radius: 14px; padding: 34px; margin-bottom: 18px;
    position: relative; overflow: hidden;
  }
  .cuure-desc-card::before {
    content: ''; position: absolute; top: -60px; right: -60px;
    width: 220px; height: 220px; border-radius: 50%;
    background: rgba(13,140,122,0.2); pointer-events: none;
  }
  .cuure-desc-label {
    font-size: 0.7rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 1.5px; color: rgba(255,255,255,0.4); margin-bottom: 12px;
  }
  .cuure-desc-title {
    font-family: 'Fraunces', serif; font-size: 1.45rem;
    font-weight: 700; color: white; margin-bottom: 14px;
    line-height: 1.3; position: relative; z-index: 1;
  }
  .cuure-desc-body {
    font-size: 0.9rem; color: rgba(255,255,255,0.72);
    line-height: 1.8; position: relative; z-index: 1;
  }
  .cuure-desc-highlights {
    display: flex; gap: 28px; margin-top: 24px;
    padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);
    flex-wrap: wrap; position: relative; z-index: 1;
  }
  .cuure-desc-hl { text-align: center; }
  .cuure-desc-num {
    font-family: 'Fraunces', serif; font-size: 1.5rem;
    font-weight: 700; color: #12B89A;
  }
  .cuure-desc-lbl { font-size: 0.75rem; color: rgba(255,255,255,0.42); margin-top: 2px; }

  /* GALLERY */
  .cuure-gallery-card {
    background: white; border-radius: 14px;
    border: 1px solid #E2E6EF; padding: 26px 30px; margin-bottom: 18px;
  }
  .cuure-gallery {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 12px; margin-top: 14px;
  }
  .cuure-gallery-item {
    border-radius: 10px; overflow: hidden;
    cursor: pointer; transition: transform 0.25s;
  }
  .cuure-gallery-item:first-child { grid-row: 1 / 3; }
  .cuure-gallery-item:hover { transform: scale(1.02); }
  .cuure-gallery-inner {
    width: 100%; height: 100%; min-height: 150px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 8px;
    font-size: 2.2rem; padding: 16px;
  }
  .cuure-gallery-item:first-child .cuure-gallery-inner { min-height: 290px; font-size: 3rem; }
  .cuure-gallery-caption {
    font-size: 0.72rem; font-weight: 600; color: #4F5B79;
    text-align: center; line-height: 1.3;
  }

  /* STEPS */
  .cuure-steps-card {
    background: white; border-radius: 14px;
    border: 1px solid #E2E6EF; padding: 26px 30px; margin-bottom: 18px;
  }
  .cuure-steps-list { margin-top: 14px; }
  .cuure-step-row {
    display: grid; grid-template-columns: 48px 1fr;
    gap: 16px; align-items: start; position: relative;
  }
  .cuure-step-row:not(:last-child)::before {
    content: ''; position: absolute;
    left: 23px; top: 48px; bottom: -8px; width: 2px;
    background: #E2E6EF;
  }
  .cuure-step-num {
    width: 48px; height: 48px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; font-size: 0.875rem;
    background: #E6F7F4; color: #0D8C7A;
    border: 2px solid rgba(13,140,122,0.2);
    position: relative; z-index: 1; flex-shrink: 0;
  }
  .cuure-step-body { padding: 10px 0 24px; }
  .cuure-step-title { font-weight: 700; color: #0F1F3D; font-size: 0.93rem; margin-bottom: 4px; }
  .cuure-step-desc { font-size: 0.845rem; color: #4F5B79; line-height: 1.65; }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .cuure-wrapper { grid-template-columns: 1fr; }
    .cuure-sidebar { position: static; margin-bottom: 20px; }
    .cuure-content { padding-left: 0; }
    .cuure-hero { grid-template-columns: 1fr; }
    .cuure-proc-grid { grid-template-columns: 1fr; }
    .cuure-gallery { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
    .cuure-gallery-item:first-child { grid-row: auto; }
    .cuure-nav-links { display: none; }
  }
`;

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="cuure-nav">
      <div className="cuure-logo">
        <div className="cuure-logo-icon">C</div>
        Cuure<span className="cuure-logo-teal">.health</span>
      </div>
      <ul className="cuure-nav-links">
        {["About", "Services", "Doctors", "Blog", "Contact"].map((link) => (
          <li key={link}>
            <a href="#" className={link === "Services" ? "active" : ""}>{link}</a>
          </li>
        ))}
      </ul>
      <button className="cuure-nav-cta">Book Appointment</button>
    </nav>
  );
}

function Hero() {
  return (
    <div className="cuure-hero">
      <div>
        <div className="cuure-hero-tag">
          <span className="cuure-hero-dot" />
          Our Services
        </div>
        <h1>
          Our Services Cover<br />
          <span className="cuure-hero-em">All Areas</span>
        </h1>
        <div className="cuure-hero-stats">
          {[["6+", "Service Categories"], ["120+", "Specialists"], ["24/7", "Available"]].map(
            ([num, lbl]) => (
              <div key={lbl}>
                <div className="cuure-stat-num">{num}</div>
                <div className="cuure-stat-lbl">{lbl}</div>
              </div>
            )
          )}
        </div>
      </div>
      <p className="cuure-hero-desc">
        Complete medical services across all specialties, ensuring quality care, accurate
        diagnosis, and effective treatment for everyone — from routine check-ups to advanced
        specialist care.
      </p>
    </div>
  );
}

function Sidebar({ activeId, onSelect }) {
  return (
    <div className="cuure-sidebar">
      <div className="cuure-sidebar-header">
        <div className="cuure-sidebar-title">Select a Service</div>
      </div>
      {SERVICES.map((s) => (
        <div
          key={s.id}
          className={`cuure-tab${activeId === s.id ? " active" : ""}`}
          onClick={() => onSelect(s.id)}
        >
          <div className="cuure-tab-icon">{s.icon}</div>
          <span className="cuure-tab-name">{s.name}</span>
          <span className="cuure-tab-arrow">›</span>
        </div>
      ))}
    </div>
  );
}

function LearnMoreSection({ data }) {
  return (
    <div className="cuure-lm">
      {/* Description */}
      <div className="cuure-desc-card">
        <div className="cuure-desc-label">About This Service</div>
        <div className="cuure-desc-title">{data.title}</div>
        <div className="cuure-desc-body">{data.body}</div>
        <div className="cuure-desc-highlights">
          {data.highlights.map((h) => (
            <div className="cuure-desc-hl" key={h.label}>
              <div className="cuure-desc-num">{h.num}</div>
              <div className="cuure-desc-lbl">{h.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="cuure-gallery-card">
        <div className="cuure-card-label">Facilities & Photos</div>
        <div className="cuure-gallery">
          {data.gallery.map((img, i) => (
            <div className="cuure-gallery-item" key={i}>
              <div
                className="cuure-gallery-inner"
                style={{ background: img.bg }}
              >
                <span>{img.emoji}</span>
                <span className="cuure-gallery-caption">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="cuure-steps-card">
        <div className="cuure-card-label">How It Works</div>
        <div className="cuure-steps-list">
          {data.steps.map((step, i) => (
            <div className="cuure-step-row" key={i}>
              <div className="cuure-step-num">{i + 1}</div>
              <div className="cuure-step-body">
                <div className="cuure-step-title">{step.title}</div>
                <div className="cuure-step-desc">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicePanel({ service, learnOpen, onToggleLearn }) {
  return (
    <div className="cuure-panel">
      {/* Header */}
      <div className="cuure-panel-header">
        <div
          className="cuure-panel-icon"
          style={{ background: service.iconBg || "#E6F7F4" }}
        >
          {service.icon}
        </div>
        <div>
          <div className="cuure-panel-name">{service.name}</div>
          <div className="cuure-panel-tagline">{service.tagline}</div>
          <div className="cuure-panel-badges">
            {service.badges.map((b) => (
              <span
                key={b.label}
                className={`cuure-badge${b.green ? " green" : ""}`}
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Procedures */}
      <div className="cuure-procedures">
        <div className="cuure-card-label">Key Procedures &amp; Treatments</div>
        <div className="cuure-proc-grid">
          {service.procedures.map((p) => (
            <div className="cuure-proc-item" key={p}>
              <span className="cuure-check">✓</span> {p}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Row */}
      <div className="cuure-cta-row">
        <button className="cuure-btn-primary">{service.ctaLabel}</button>
        <button
          className={`cuure-btn-learn${learnOpen ? " open" : ""}`}
          onClick={onToggleLearn}
        >
          {learnOpen ? "Show Less" : "Learn More"}
          <span className="cuure-btn-arrow">{learnOpen ? " ↑" : " →"}</span>
        </button>
      </div>

      {/* Learn More Expanded */}
      {learnOpen && <LearnMoreSection data={service.learnMore} />}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [activeId, setActiveId] = useState("consultation");
  const [learnOpenId, setLearnOpenId] = useState(null);

  const activeService = SERVICES.find((s) => s.id === activeId);

  function handleSelectService(id) {
    setActiveId(id);
    setLearnOpenId(null); // close learn more when switching tabs
  }

  function handleToggleLearn() {
    setLearnOpenId((prev) => (prev === activeId ? null : activeId));
  }

  return (
    <>
      <style>{css}</style>
      <div className="cuure-root">
        <Navbar />
        <Hero />
        <div className="cuure-wrapper">
          <Sidebar activeId={activeId} onSelect={handleSelectService} />
          <div className="cuure-content">
            <ServicePanel
              key={activeId}
              service={activeService}
              learnOpen={learnOpenId === activeId}
              onToggleLearn={handleToggleLearn}
            />
          </div>
        </div>
      </div>
    </>
  );
}
