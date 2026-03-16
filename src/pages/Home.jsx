import Hero from '../components/Hero/Hero'
// import Plans from '../components/Plans'
import About from '../components/About/About'
import Services from '../components/Services/Services'
import Features from '../components/Features/Features'
import Doctors from '../components/Doctors/Doctors'
import Testimonials from '../components/Testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <Plans /> */}
      <Services />
      <Features />
      <Doctors />
      <Testimonials />
    </main>
  )
}
