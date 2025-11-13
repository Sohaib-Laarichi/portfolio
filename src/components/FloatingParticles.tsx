'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

interface FloatingParticlesProps {
  count?: number
  type?: 'default' | 'fireflies' | 'birds'
  color?: string
}

const FloatingParticles = ({ count = 20, type = 'default', color = '#3B82F6' }: FloatingParticlesProps) => {
  const prefersReducedMotion = useReducedMotion()

  const particleConfigs = useMemo(() => {
    const effectiveCount = prefersReducedMotion ? Math.max(4, Math.ceil(count / 2)) : count

    if (type === 'fireflies') {
      return Array.from({ length: effectiveCount }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 6 + Math.random() * 4,
        delay: Math.random() * 3,
      }))
    }

    if (type === 'birds') {
      return Array.from({ length: effectiveCount }, (_, i) => ({
        left: Math.random() * 20,
        top: 10 + Math.random() * 30,
        duration: 20 + Math.random() * 10,
        delay: i * 3,
      }))
    }

    return Array.from({ length: effectiveCount }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 4,
    }))
  }, [count, type, prefersReducedMotion])

  const getTransition = (duration: number, delay: number) =>
    prefersReducedMotion
      ? {
          duration: Math.max(duration * 0.6, 4),
          repeat: Infinity,
          ease: 'easeInOut',
        }
      : {
          duration,
          repeat: Infinity,
          delay,
          ease: 'easeInOut',
        }

  if (type === 'fireflies') {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {particleConfigs.map(({ left, top, duration, delay }, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              boxShadow: `0 0 8px ${color}`,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={
              prefersReducedMotion
                ? { opacity: [0.3, 0.6, 0.3], scale: [0.95, 1, 0.95] }
                : { x: [0, 30, -20, 40, 0], y: [0, -25, 15, -35, 0], opacity: [0.3, 1, 0.5, 1, 0.3] }
            }
            transition={getTransition(duration, delay)}
          />
        ))}
      </div>
    )
  }

  if (type === 'birds') {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {particleConfigs.map(({ left, top, duration, delay }, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={
              prefersReducedMotion
                ? { opacity: [0.4, 0.6, 0.4], y: [0, -5, 0] }
                : { x: [0, 1200], y: [0, -20, 10, -15, 5] }
            }
            transition={getTransition(duration, delay)}
          >
            <svg width="20" height="16" viewBox="0 0 20 16" className="drop-shadow-sm">
              <motion.path
                d="M3,8 Q7,4 10,8 Q13,4 17,8"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                animate={
                  prefersReducedMotion
                    ? { opacity: 0.7 }
                    : {
                        d: [
                          "M3,8 Q7,4 10,8 Q13,4 17,8",
                          "M3,8 Q7,10 10,8 Q13,10 17,8",
                          "M3,8 Q7,4 10,8 Q13,4 17,8",
                        ],
                      }
                }
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                }}
              />
            </svg>
          </motion.div>
        ))}
      </div>
    )
  }

  // Default particles
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particleConfigs.map(({ left, top, duration, delay }, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: color,
            left: `${left}%`,
            top: `${top}%`,
          }}
          animate={
            prefersReducedMotion
              ? { opacity: [0.2, 0.5, 0.2] }
              : { x: [0, 20, -15, 25, 0], y: [0, -30, 10, -20, 0], opacity: [0.1, 0.8, 0.3, 0.9, 0.1] }
          }
          transition={getTransition(duration, delay)}
        />
      ))}
    </div>
  )
}

export default FloatingParticles
