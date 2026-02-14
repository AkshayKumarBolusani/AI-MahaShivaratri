import { motion } from 'framer-motion'

export default function CursorGlow({ x, y }) {
  return (
    <motion.div
      className="cursor-glow fixed pointer-events-none z-[9999] mix-blend-screen"
      style={{
        left: x,
        top: y,
        width: 300,
        height: 300,
        marginLeft: -150,
        marginTop: -150,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.06) 0%, transparent 70%)',
      }}
      animate={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 28 }}
    />
  )
}
