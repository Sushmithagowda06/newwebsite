import Hero from '../components/Hero'
import Features from '../components/Features'
// import Plans from '../components/Plans'
import Services from '../components/Services'
import Doctors from '../components/Doctors'
import Testimonials from '../components/Testimonials'

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
