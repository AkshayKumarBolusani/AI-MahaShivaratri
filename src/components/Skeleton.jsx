import React from 'react'

const shimmerStyle = {
  background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 100%)',
  backgroundSize: '200% 100%',
  animation: 'shimmer 1.2s ease-in-out infinite',
}

export function SkeletonLine({ className = '', width = '100%' }) {
  return (
    <div
      className={`rounded h-4 bg-white/10 ${className}`}
      style={{ width, ...shimmerStyle }}
    />
  )
}

export function SkeletonBlock({ className = '', height = 24 }) {
  return (
    <div
      className={`rounded bg-white/10 ${className}`}
      style={{ height, ...shimmerStyle }}
    />
  )
}

export function SectionSkeleton() {
  return (
    <div className="py-16 md:py-24" aria-hidden>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 mb-12">
          <SkeletonLine width="120px" className="h-3" />
          <SkeletonLine width="min(100%, 320px)" className="h-8" />
          <SkeletonLine width="min(100%, 280px)" className="h-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <SkeletonBlock key={i} height={160} className="w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-cosmic" aria-busy="true" aria-label="Loading">
      {/* Navbar skeleton */}
      <header className="h-16 md:h-20 bg-cosmic/95 border-b border-white/10 flex items-center px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="w-5 h-10 bg-white/10 rounded animate-pulse" />
          <div className="w-32 h-5 bg-white/10 rounded animate-pulse" />
        </div>
      </header>
      {/* Hero skeleton */}
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-20">
        <div className="w-24 h-3 bg-white/10 rounded mb-6 animate-pulse" />
        <div className="w-full max-w-md flex flex-col items-center gap-3 mb-8">
          <div className="w-full max-w-sm h-10 md:h-12 bg-white/10 rounded animate-pulse" />
          <div className="w-full max-w-xs h-8 bg-white/10 rounded animate-pulse" />
        </div>
        <div className="flex flex-col gap-2 w-full max-w-lg mb-10">
          <div className="w-full h-4 bg-white/10 rounded animate-pulse" />
          <div className="w-4/5 h-4 bg-white/10 rounded animate-pulse mx-auto" />
        </div>
        <div className="w-40 h-12 bg-white/10 rounded-lg animate-pulse" />
      </div>
    </div>
  )
}
