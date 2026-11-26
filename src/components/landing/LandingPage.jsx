
import { useCallback, useEffect, useState } from 'react'
import Footer from '../Footer'
import IntroLoader from './IntroLoader'
import LandingNavbar from './LandingNavbar'
import LandingHeroSection from './LandingHeroSection'
import ServicesSection from './ServicesSection'
import EquipmentShowcase from './EquipmentShowcase'
import HowItWorks from './HowItWorks'
import LandingCTA from './LandingCTA'
import '../../styles/landing-page.css'

export default function LandingPage() {
  const [introComplete, setIntroComplete] = useState(false)

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  useEffect(() => {
    if (!introComplete) return

    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [introComplete])

  return (
    <>
      {!introComplete && (
        <IntroLoader onComplete={handleIntroComplete} />
      )}

      <div className={`landing-page ${introComplete ? 'page-visible' : ''}`}>
        <LandingNavbar />

        <main>
          <LandingHeroSection />
          <ServicesSection />
          <EquipmentShowcase />
          <HowItWorks />
          <LandingCTA />
        </main>

        <Footer />
      </div>
    </>
  )
}
