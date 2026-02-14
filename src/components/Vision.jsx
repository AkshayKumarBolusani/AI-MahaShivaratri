import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Vision() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="vision" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic" />
      {/* Sacred geometry animated background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L61 35 L98 35 L68 57 L79 92 L50 72 L21 92 L32 57 L2 35 L39 35 Z' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(76, 29, 149, 0.25) 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gold/80 font-cinzel text-sm tracking-[0.3em] uppercase mb-8"
        >
          Our Vision
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="font-cinzel font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
        >
          <span className="bg-gradient-to-r from-gold via-amber-200 to-cyan bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]">
            &ldquo;Where Devotion meets Artificial Intelligence&rdquo;
          </span>
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-slate-400 text-lg max-w-2xl mx-auto"
        >
          A new chapter in the eternal story of devotion—written with code, sung with soul.
        </motion.p>
      </div>
    </section>
  )
}
