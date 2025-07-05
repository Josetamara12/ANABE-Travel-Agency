import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonial from "@/components/testimonial";

function App() { 
  return (
    <>
    <Navbar />
    <Hero />
      <Features />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Footer />      
    </>
  )
}
export default App;