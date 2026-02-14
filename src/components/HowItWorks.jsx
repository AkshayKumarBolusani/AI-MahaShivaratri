import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    iconClass: 'icon-register',
    title: 'Register',
    desc: 'Sign up and become part of the AI MahaShivaratri movement. One form, one commitment.',
  },
  {
    iconClass: 'icon-team',
    title: 'Join Captain Team',
    desc: 'Get assigned to a Captain. Connect with fellow creators and devotees in your squad.',
  },
  {
    iconClass: 'icon-music',
    title: 'Create AI Telugu Shiva Songs',
    desc: 'Use AI tools to compose and produce Telugu songs dedicated to Lord Shiva. Guidance and resources provided.',
  },
  {
    iconClass: 'icon-night',
    title: 'Release on Maha Shivaratri Night',
    desc: 'All 5000+ songs go live on one divine night. A global offering in unison.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic via-shiva-blue/20 to-cosmic" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08)_0%,transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="text-gold font-cinzel text-sm tracking-[0.2em] uppercase mb-4">Process</p>
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl lg:text-5xl text-white">
            How It Works
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-cyan/50 to-gold/50 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`relative md:flex md:items-center md:min-h-[180px] ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`md:w-[calc(50%-3rem)] pl-0 ${i % 2 === 1 ? 'md:pl-12 md:pr-0 md:text-right' : 'md:pr-12'}`}>
                  <div className="rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan/30 hover:shadow-glow-cyan transition-all duration-300">
                    <div className="mb-4"><span className={step.iconClass} aria-hidden /></div>
                    <h3 className="font-cinzel font-semibold text-xl text-white mb-2">
                      Step {i + 1}: {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base">{step.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-cosmic border-2 border-gold flex items-center justify-center text-gold font-cinzel font-bold hidden md:flex z-10 shrink-0">
                  {i + 1}
                </div>
                <div className="hidden md:block md:w-[calc(50%-3rem)] shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
