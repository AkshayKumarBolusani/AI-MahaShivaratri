import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PremiumTrishul from './PremiumTrishul'

const points = [
  {
    title: 'World’s First AI Devotional Music Movement',
    desc: 'No initiative has ever combined artificial intelligence with large-scale devotional music creation in a single, coordinated global offering.',
  },
  {
    title: 'Digital Bhakti Revolution',
    desc: 'We are redefining how devotion is expressed in the digital age—code and creativity in service of the divine.',
  },
  {
    title: 'Largest Shiva AI Song Collaboration',
    desc: 'Five thousand songs, hundreds of creators, one night. A milestone in both spiritual and technological collaboration.',
  },
]

export default function WhyHistoric() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-historic" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cosmic" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,215,0,0.06)_0%,transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-gold font-cinzel text-sm tracking-[0.2em] uppercase mb-4">Legacy</p>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Why This Is Historic
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            This is not just an event. It is a landmark at the intersection of faith and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-gold/30 hover:shadow-glow transition-all duration-300"
            >
              <div className="mb-3 flex">
                <span className="w-6 h-12 shrink-0" aria-hidden>
                  <PremiumTrishul className="w-full h-full" noFloat />
                </span>
              </div>
              <h3 className="font-cinzel font-semibold text-lg text-white mb-3">{point.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
