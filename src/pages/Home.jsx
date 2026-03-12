import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
// import Plans from '../components/Plans'
import Services from '../components/Services/Services'
import Doctors from '../components/Doctors/Doctors'
import Testimonials from '../components/Testimonials/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      {/* <Plans /> */}
      <Services />
      <Doctors />
      <Testimonials />
    </main>
  )
}
