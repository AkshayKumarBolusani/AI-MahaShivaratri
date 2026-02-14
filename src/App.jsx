import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Numbers from './components/Numbers'
import HowItWorks from './components/HowItWorks'
import WhyHistoric from './components/WhyHistoric'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
import FloatingParticles from './components/FloatingParticles'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    if (isTouch) return
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isTouch])

  return (
    <>
      {!isTouch && <CursorGlow x={mousePosition.x} y={mousePosition.y} />}
      <Navbar />
      <main>
        <Hero />
        <FloatingParticles />
        <About />
        <Vision />
        <Numbers />
        <HowItWorks />
        <WhyHistoric />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}

export default App
