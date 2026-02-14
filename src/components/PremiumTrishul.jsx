import { useId } from 'react'

export default function PremiumTrishul({ className = '', noFloat = false }) {
  const id = useId().replace(/:/g, '')
  const gradientId = `goldGradient-${id}`
  const glowId = `glow-${id}`

  return (
    <div className={`trishul-container ${noFloat ? 'trishul-no-float' : ''} ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 400"
        xmlns="http://www.w3.org/2000/svg"
        className="trishul-svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFB800" />
            <stop offset="100%" stopColor="#C58F00" />
          </linearGradient>

          <filter id={glowId}>
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left Prong */}
        <path
          d="M60 60 Q40 20 70 20 Q90 40 70 80"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
          filter={`url(#${glowId})`}
        />

        {/* Center Prong */}
        <path
          d="M100 20 Q120 60 100 100 Q80 60 100 20"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
          filter={`url(#${glowId})`}
        />

        {/* Right Prong */}
        <path
          d="M140 60 Q160 20 130 20 Q110 40 130 80"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="6"
          filter={`url(#${glowId})`}
        />

        {/* Staff */}
        <rect
          x="95"
          y="100"
          width="10"
          height="260"
          fill={`url(#${gradientId})`}
          filter={`url(#${glowId})`}
        />
      </svg>
    </div>
  )
}
