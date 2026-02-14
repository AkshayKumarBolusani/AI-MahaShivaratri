import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CATEGORY_GROUPS } from '../data/categories'

function CategoryChip({ name, onCopy }) {
  const [copied, setCopied] = useState(false)

  const handleClick = useCallback(() => {
    onCopy(name)
    setCopied(true)
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [name, onCopy])

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-left text-slate-200 hover:border-gold/50 hover:bg-white/10 hover:text-gold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic"
    >
      <span className="block truncate font-medium">{name}</span>
      {copied && (
        <span className="block text-xs text-gold mt-0.5">Copied!</span>
      )}
    </button>
  )
}

export default function CategoriesPage() {
  const copyToClipboard = useCallback((text) => {
    navigator.clipboard?.writeText(text)
  }, [])

  return (
    <div className="min-h-screen bg-cosmic">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0 L61 35 L98 35 L68 57 L79 92 L50 72 L21 92 L32 57 L2 35 L39 35 Z' fill='none' stroke='%23FFD700' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5 }}
          className="text-center mb-14"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm font-medium mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic rounded"
          >
            <span className="inline-block w-4 h-4" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </span>
            Back to home
          </Link>
          <p className="text-gold/80 font-cinzel text-sm tracking-[0.3em] uppercase mb-4">
            Categories
          </p>
          <h1 className="font-cinzel font-bold text-3xl sm:text-4xl md:text-5xl text-white">
            All song categories
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Click any category to copy. Use these to guide your AI song prompts by theme and tradition.
          </p>
        </motion.div>

        <div className="space-y-14">
          {CATEGORY_GROUPS.map((group, i) => (
            <motion.section
              key={group.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'tween', ease: [0.25, 0.46, 0.45, 0.94], duration: 0.5, delay: Math.min(i * 0.04, 0.5) }}
            >
              <h2 className="font-cinzel font-semibold text-xl text-gold mb-6 flex items-center gap-2">
                <span>{group.emoji}</span>
                <span>{group.title}</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {group.items.map((name) => (
                  <CategoryChip key={name} name={name} onCopy={copyToClipboard} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold/15 border border-gold/40 text-gold font-semibold hover:bg-gold/25 hover:border-gold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cosmic"
          >
            Back to home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
