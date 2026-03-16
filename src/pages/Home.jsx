import Hero from '../components/Hero/Hero'
// import Plans from '../components/Plans'
import Services from '../components/Services/Services'
import Features from '../components/Features/Features'
import { DoctorsHome } from '../components/Doctors/Doctors'
import Testimonials from '../components/Testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Plans /> */}
      <Services />
      <Features />
      <DoctorsHome />
      <Testimonials />
    </main>
  )
}
