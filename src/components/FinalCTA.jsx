import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PremiumTrishul from './PremiumTrishul'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(30,58,138,0.4)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_80%,rgba(76,29,149,0.3)_0%,transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L20 40 M0 20 L40 20' stroke='%23FFFFFF' stroke-width='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-gold/90 font-cinzel text-sm tracking-[0.3em] uppercase mb-6"
        >
          One Night. One Movement.
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-cinzel font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-8 leading-tight"
        >
          Join the AI MahaShivaratri Movement
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-4 max-w-2xl mx-auto"
        >
          Register now. Become a Creator or Captain. Be part of the world’s first 5000+ AI Shiva songs offering.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="text-gold/90 text-sm md:text-base mb-10"
        >
          Song Creation: 10AM – 11AM IST &nbsp;·&nbsp; Playing of Songs: 10PM – 1AM IST
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://learn.superaiacademy.com/l/64eff2a227"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-4 sm:px-10 sm:py-5 rounded-xl bg-gradient-to-r from-gold via-amber-400 to-gold text-cosmic font-cinzel font-bold text-base sm:text-lg shadow-glow hover:shadow-[0_0_60px_rgba(255,215,0,0.5)] hover:scale-105 transition-all duration-300 active:scale-[0.98]"
          >
            <span className="flex shrink-0 w-5 h-10 sm:w-6 sm:h-12" aria-hidden>
              <PremiumTrishul className="w-full h-full" noFloat />
            </span>
            <span className="text-center">Join the AI MahaShivaratri Movement</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
