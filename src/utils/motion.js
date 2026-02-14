/**
 * Shared motion config for smooth, consistent animations.
 * Respects prefers-reduced-motion when useReducedMotion() is true.
 */

// Smooth easing: ease-out for entrances, minimal bounce
export const smoothTransition = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.5,
}

export const smoothTransitionFast = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.35,
}

export const smoothTransitionSlow = {
  type: 'tween',
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.65,
}

// When reduced motion: instant or very short
export const reducedTransition = {
  type: 'tween',
  duration: 0.01,
}
