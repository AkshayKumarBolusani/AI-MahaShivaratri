import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PremiumTrishul from './PremiumTrishul'

export default function Hero() {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          const speed = 0.15
          setOffset((window.innerHeight - rect.top) * speed)
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 md:pt-0"
    >
      {/* Full-viewport fixed background (covers behind header too) */}
      <div
        className="fixed inset-0 h-screen z-0"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80)`,
            transform: `translateY(${offset * 0.5}px) scale(1.05)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic/90 via-cosmic/80 to-cosmic" />
        <div className="absolute inset-0 bg-glow-gradient opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23FFFFFF' fill-opacity='1' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Premium floating Trishul decorations */}
      <div className="absolute top-1/4 right-[8%] w-16 h-[120px] md:w-20 md:h-[160px] opacity-25 pointer-events-none">
        <PremiumTrishul className="w-full h-full" />
      </div>
      <div className="absolute bottom-1/3 left-[6%] w-14 h-[100px] md:w-20 md:h-[140px] opacity-20 pointer-events-none scale-x-[-1]">
        <PremiumTrishul className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5 }}
          className="text-gold font-cinzel text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          World&apos;s First
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: 0.08 }}
          className="font-cinzel font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
        >
          <span className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="inline-flex shrink-0 w-8 h-16 sm:w-10 sm:h-20 md:w-12 md:h-24" aria-hidden>
              <PremiumTrishul className="w-full h-full" noFloat />
            </span>
            <span className="block">AI MahaShivaratri</span>
          </span>
          <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">
            2026
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: 0.15 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 font-light"
        >
          World&apos;s First <span className="text-cyan font-medium">5000+ AI Generated</span> Telugu Shiva Songs Movement
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: 0.25 }}
          className="text-gold font-cinzel text-base md:text-lg tracking-wide mb-3"
        >
          50+ Captains · 500+ Devotees · 5000+ Songs · 1 Divine Night
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: 0.3 }}
          className="text-slate-400 text-sm md:text-base mb-10"
        >
          Song Creation: 10AM – 11AM IST &nbsp;·&nbsp; Playing of Songs: 10PM – 1AM IST
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: 0.35 }}
          className="pb-16 md:pb-0"
        >
          <a
            href="https://learn.superaiacademy.com/l/64eff2a227"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-4 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-fire-orange to-amber-600 text-white font-semibold text-base sm:text-lg shadow-glow hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] hover:scale-105 transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic"
          >
            <span className="flex shrink-0 w-5 h-10" aria-hidden>
              <PremiumTrishul className="w-full h-full" noFloat />
            </span>
            Register Now
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - hidden on mobile so it doesn't sit under button */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ type: 'tween', ease: 'easeInOut', duration: 2, repeat: Infinity }}
        aria-hidden
      >
        <div className="w-8 h-12 rounded-full border-2 border-gold/50 flex justify-center pt-2">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  )
}
