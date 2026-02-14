import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedCounter({ end, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const stats = [
  { value: 5000, suffix: '+', label: 'Songs', sub: 'AI Telugu Shiva songs' },
  { value: 50, suffix: '+', label: 'Captains', sub: 'Leading the movement' },
  { value: 500, suffix: '+', label: 'Participants', sub: 'Creators & devotees' },
  { value: 1, suffix: '', label: 'Divine Night', sub: 'Maha Shivaratri 2026' },
]

export default function Numbers() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="numbers" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic via-violet/10 to-cosmic" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.2)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gold font-cinzel text-sm tracking-[0.2em] uppercase mb-4">The Scale</p>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-white">
            Numbers That Define a Movement
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl p-8 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-gold/30 hover:shadow-glow transition-all duration-500"
            >
              <div className="font-cinzel font-bold text-4xl md:text-5xl lg:text-6xl text-gold mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
              <div className="text-slate-400 text-sm">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
