import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic via-shiva-blue/20 to-cosmic" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,29,149,0.15)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <p className="text-gold font-cinzel text-sm tracking-[0.2em] uppercase mb-4">About the Event</p>
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Where Ancient Devotion Meets the Future of Creation
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We are creating <span className="text-cyan font-medium">5000+ AI-generated Telugu songs</span> dedicated to Lord Shiva—a first-of-its-kind global digital devotional movement. Fifty-plus Captains lead hundreds of creators across the world, uniting under one vision: to offer a night of divine sound on Maha Shivaratri.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              This is not just an event; it is a bridge between <span className="text-gold">Bhakti</span> and <span className="text-cyan">Artificial Intelligence</span>. Every song is born from devotion and powered by AI—a new form of worship for a new era, rooted in the eternal essence of Shiva.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Join us in making history: one divine night, thousands of voices, one cosmic offering to the Lord of the Cosmic Dance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-violet/20 ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
                alt="Sacred mountains - Kailasa inspiration"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-cinzel text-gold text-sm">Kailasa · Himalayas · Eternal Shiva</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-violet/30 backdrop-blur-sm border border-gold/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
