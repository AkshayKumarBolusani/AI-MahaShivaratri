import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { SectionSkeleton } from './components/Skeleton'
import CategoriesPage from './components/CategoriesPage'
import SongStylesPage from './components/SongStylesPage'

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
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-cosmic focus:font-semibold focus:rounded-lg focus:w-auto focus:h-auto focus:m-0 focus:overflow-visible focus:[clip:auto]"
      >
        Skip to main content
      </a>
      <Suspense fallback={null}>
        {!isTouch && <CursorGlow x={mousePosition.x} y={mousePosition.y} />}
        <FloatingParticles />
      </Suspense>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Suspense fallback={<SectionSkeleton />}>
                  <BelowFold />
                </Suspense>
              </>
            }
          />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/song-styles" element={<SongStylesPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
