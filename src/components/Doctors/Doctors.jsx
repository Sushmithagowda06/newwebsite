import { useNavigate } from 'react-router-dom';
import { MdChat } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import styles from './Doctors.module.css';

const doctors = [
  {
    id: 1,
    name: "Dr. Arjun Kumar",
    specialty: "Senior Cardiologist",
    degree: "MBBS, DM Cardiology",
    experience: "17 years experience",
    clinic: "Apollo Health Hub Mysore, Vijayanagar",
    fee: 1200,
    available: "Mon-Fri 9:30 -1 PM , 4-8:30 PM",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Dr. Sneha Rao",
    specialty: "Neurologist",
    degree: "MBBS, DM Neurology",
    experience: "13 years experience",
    clinic: "Clinikk Health Hub Mysore, Kuvempunagar",
    fee: 1000,
    available: "Mon-Sat 10:00 -1 PM , 5-8:00 PM",
    rating: 4.8,
    reviews: 278,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Dr. Priya Menon",
    specialty: "Orthopedic Surgeon",
    degree: "MBBS, MS Orthopedics",
    experience: "10 years experience",
    clinic: "Manipal Hospital Mysore, Nazarbad",
    fee: 900,
    available: "Mon-Fri 9:00 -1 PM , 4-7:30 PM",
    rating: 4.9,
    reviews: 195,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Dr. Rahul Sharma",
    specialty: "Pediatrician",
    degree: "MBBS, MD Pediatrics",
    experience: "8 years experience",
    clinic: "Cloudnine Hospital Mysore, Saraswathipuram",
    fee: 750,
    available: "Tue-Sat 10:00 -2 PM , 5-8:30 PM",
    rating: 4.7,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Dr. Nisha Desai",
    specialty: "Dermatologist",
    degree: "MBBS, MD Dermatology",
    experience: "12 years experience",
    clinic: "Skin & Care Clinic Mysore, Gokulam",
    fee: 850,
    available: "Mon-Fri 11:00 -2 PM , 4-8:00 PM",
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=300&h=300&fit=crop&crop=face",
  },
];

// ── HOME CARD ──
function HomeCard({ doc }) {
  const navigate = useNavigate();
  return (
    <div className={styles.homeCard}>
      <div className={styles.homeAvatar}>
        <img src={doc.image} alt={doc.name} />
      </div>
      <div className={styles.homeName}>{doc.name}</div>
      <div className={styles.homeSpecialty}>{doc.specialty}</div>
      <div className={styles.homeMeta}>
        <span>{doc.experience}</span>
        <span className={styles.dot} />
        <span className={styles.star}>
          <FaStar size={12} />
          {doc.rating} ({doc.reviews})
        </span>
      </div>
      <div className={styles.homeBtns}>
        <button className={styles.homeBookBtn} onClick={() => navigate('/appointment')}>
          Book Now
        </button>
      </div>
    </div>
  );
}

// ── LIST CARD ──
function ListCard({ doc }) {
  const navigate = useNavigate();
  return (
    <div className={styles.listCard}>
      <div className={styles.listTop}>
        <div className={styles.listPhoto}>
          <img src={doc.image} alt={doc.name} />
        </div>
        <div className={styles.listRight}>
          <div className={styles.listName}>{doc.name}</div>
          <div className={styles.listDegree}>{doc.degree}, {doc.experience}</div>
          <div className={styles.listClinic}>{doc.clinic}</div>
          <div className={styles.listFee}>
            <strong>Rs {doc.fee}</strong>
            <span> · Consultation fee at clinic</span>
          </div>
          <div className={styles.listAvailRow}>
            <div className={styles.listAvail}>
              <span className={styles.listAvailLabel}>Available: </span>
              <span className={styles.listAvailTime}>{doc.available}</span>
            </div>
            <button className={styles.listBookBtn} onClick={() => navigate('/appointment')}>
              Book Appointment →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── HOME SECTION (with header + 4 cards grid) ──
export function DoctorsHome() {
  const navigate = useNavigate();
  return (
    <section className={styles.doctorsSection}>
      <div className={styles.doctorsInner}>

        <div className={styles.doctorsHeader}>
          <div className={styles.doctorsPill}>MEET THE TEAM</div>
          <h2 className={styles.doctorsTitle}>
            Our Expert <span>Doctors</span>
          </h2>
        </div>

        <div className={styles.doctorsGrid}>
          {doctors.slice(0, 4).map(doc => (
            <HomeCard key={doc.id} doc={doc} />
          ))}
        </div>

        <div className={styles.viewAllWrap}>
          <button className={styles.viewAllBtn} onClick={() => navigate('/doctors')}>
            View All Doctors →
          </button>
        </div>

      </div>
    </section>
  );
}

// ── DOCTORS PAGE SECTION (full list) ──
export function DoctorsList() {
  return (
    <div className={styles.dsPage}>
      <div className={styles.dsList}>
        {doctors.map(doc => (
          <ListCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
}