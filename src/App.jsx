import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Appointment from "./pages/Appointment/Appointment";
import Plans from "./pages/Plans/Plans";
import ServicesPage from "./pages/ServicesPage";
import DoctorsPage from "./pages/DoctorsPage";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";

import { FaWhatsapp } from "react-icons/fa";
import ScrollTop from "./components/ScrollTop";

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
        <Route path="/plans" element={<Plans />} />
      </Routes>

      <ScrollTop />

      <a
        href="https://wa.me/917483068353"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={28} />
      </a>

      <Footer />
    </>
  );
}

// function About() {
//   return (
//     <main style={{ paddingTop: "80px" }}>
//       <div
//         style={{
//           background: "linear-gradient(135deg, var(--primary) 0%, var(--dark) 100%)",
//           padding: "80px 0",
//           color: "white",
//         }}
//       >
//         <div className="container">
//           <h1
//             style={{
//               fontFamily: "var(--font-display)",
//               fontSize: "clamp(36px, 5vw, 60px)",
//               fontWeight: 800,
//               marginBottom: 20,
//             }}
//           >
//             About <span style={{ color: "rgba(255,255,255,0.6)" }}>cuure.health</span>
//           </h1>

//           <p
//             style={{
//               fontSize: 17,
//               color: "rgba(255,255,255,0.7)",
//               maxWidth: 560,
//               lineHeight: 1.7,
//             }}
//           >
//             Founded in 2020, Cuure Health is on a mission to make quality healthcare accessible to everyone.
//           </p>
//         </div>
//       </div>

//       <div
//         className="container"
//         style={{
//           padding: "64px 24px",
//           maxWidth: 800,
//           margin: "0 auto",
//         }}
//       >
//         <p
//           style={{
//             fontSize: 17,
//             color: "var(--text-muted)",
//             lineHeight: 1.85,
//             marginBottom: 24,
//           }}
//         >
//           Cuure Health was born from a simple belief: every person deserves access to world-class healthcare,
//           regardless of geography or circumstance.
//         </p>

//         <p
//           style={{
//             fontSize: 17,
//             color: "var(--text-muted)",
//             lineHeight: 1.85,
//           }}
//         >
//           Our team of 500+ board-certified specialists works alongside our AI-powered platform to ensure accurate
//           diagnostics, personalized treatment plans, and seamless follow-up care.
//         </p>
//       </div>
//     </main>
//   );
// }

