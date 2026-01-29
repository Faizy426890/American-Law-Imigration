import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section" 
import TestimonialsSection from "@/components/Testimonials" 
import VisaTypesSection from "@/components/visa-types" 
import LogoLinks from "@/components/logo-links"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />  
      <LogoLinks/>
      <TestimonialsSection/> 
      <VisaTypesSection/>  
      <Footer/>
    </main>
  )
}
