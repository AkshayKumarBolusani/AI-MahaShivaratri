import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { SectionSkeleton } from './components/Skeleton'

const BelowFold = lazy(() => import('./components/BelowFold'))
const CursorGlow = lazy(() => import('./components/CursorGlow'))
const FloatingParticles = lazy(() => import('./components/FloatingParticles'))

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
      <Suspense fallback={null}>
        {!isTouch && <CursorGlow x={mousePosition.x} y={mousePosition.y} />}
        <FloatingParticles />
      </Suspense>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <BelowFold />
        </Suspense>
      </main>
    </>
  )
}

export default App
