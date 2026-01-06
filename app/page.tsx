import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section" 
import TestimonialsSection from "@/components/Testimonials" 
import VisaTypesSection from "@/components/visa-types"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection /> 
      <TestimonialsSection/> 
      <VisaTypesSection/>
    </main>
  )
}
