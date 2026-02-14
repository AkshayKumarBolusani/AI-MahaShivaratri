import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#vision', label: 'Vision' },
    { href: '/song-styles', label: 'Song Styles', isRoute: true },
    { href: '/categories', label: 'Categories', isRoute: true },
    { href: '#about-me', label: 'About Me' },
    { href: '#numbers', label: 'Numbers' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#why-historic', label: 'Why Historic' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-cosmic/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic rounded" aria-label="AI MahaShivaratri - Home">
              <img src="/loggo.png" alt="" className="h-8 md:h-10 w-auto object-contain" width={120} height={40} />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {links.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-sm text-slate-300 hover:text-gold transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic rounded px-1"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-gold transition-colors duration-200 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic rounded px-1"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="https://learn.superaiacademy.com/l/64eff2a227"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-gold to-amber-500 text-cosmic font-semibold text-sm hover:shadow-glow hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic inline-flex items-center gap-1.5"
              >
                Register Now
                <span className="inline-block w-3.5 h-3.5 opacity-80" aria-hidden><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.3 }}
              className="md:hidden bg-cosmic/95 backdrop-blur-xl border-t border-white/5"
            >
              <div className="px-4 py-4 space-y-3">
                {links.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-slate-300 hover:text-gold focus-visible:text-gold rounded"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-slate-300 hover:text-gold focus-visible:text-gold rounded"
                    >
                      {link.label}
                    </a>
                  )
                )}
                <a
                  href="https://learn.superaiacademy.com/l/64eff2a227"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 min-h-[48px] py-3 px-4 rounded-lg bg-gradient-to-r from-gold to-amber-500 text-cosmic font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
