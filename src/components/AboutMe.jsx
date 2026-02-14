import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AboutMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about-me" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic via-shiva-blue/10 to-cosmic" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(76,29,149,0.12)_0%,transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-gold font-cinzel text-sm tracking-[0.2em] uppercase mb-8 text-center"
        >
          About Me
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Photo with gradient backdrop for transparent PNG */}
          <div className="relative flex-shrink-0 w-[260px] h-[300px] md:w-[300px] md:h-[340px] flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{ background: 'linear-gradient(135deg, rgba(11,15,47,0.92) 0%, rgba(76,29,149,0.25) 100%)' }}
            />
            <img
              src="/nikeelu.png"
              alt="Nikeelu Gunda"
              className="relative z-10 w-full h-full object-contain object-center drop-shadow-2xl"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-slate-300 text-lg leading-relaxed">
            I am Nikeelu Gunda, a digital coach, entrepreneur, and community builder driven by the belief that technology and knowledge can truly transform lives. My journey has been shaped by constant learning and experimentation—exploring how innovation can solve real-world problems. From empowering rural communities through digital literacy to mentoring entrepreneurs and professionals on leveraging AI and digital tools, I have dedicated my path to creating opportunities for growth, impact, and sustainable success in the digital era.            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
