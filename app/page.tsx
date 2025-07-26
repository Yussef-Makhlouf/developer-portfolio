import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { About } from "@/components/about"
import { ServicesEnhanced } from "@/components/services-enhanced"
import { Portfolio } from "@/components/portfolio"
import { Partners } from "@/components/partners"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <ServicesEnhanced />
        <Services />
        <Portfolio />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
