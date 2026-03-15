import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Appointment from './pages/Appointment/Appointment'
import Services from './components/Services/Services'
import DoctorsPage from './pages/DoctorsPage'
import Contact from './pages/Contact/Contact'
import About from './pages/About'
import Blog from './pages/Blog'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  )
}
