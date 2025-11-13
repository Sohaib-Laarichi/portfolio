'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'

const ThemeTransition = () => {
  const { resolvedTheme } = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  const palette = useMemo(() => {
    if (isDark) {
      return {
        gradientStops: ['#050816', '#1e1b4b', '#312e81', '#0f172a'],
        mesh: [
          'rgba(59, 130, 246, 0.15)',
          'rgba(99, 102, 241, 0.18)',
          'rgba(14, 165, 233, 0.14)',
        ],
        spark: 'rgba(251, 113, 133, 0.22)',
        cssVars: {
          '--theme-accent': '#818cf8',
          '--theme-surface': '#0f172a',
          '--theme-muted': '#1e1b4b',
          '--theme-glow': 'rgba(129, 140, 248, 0.4)',
        },
      }
    }

    return {
      gradientStops: ['#fef3c7', '#fde68a', '#bfdbfe', '#ecfccb'],
      mesh: [
        'rgba(249, 115, 22, 0.18)',
        'rgba(59, 130, 246, 0.15)',
        'rgba(16, 185, 129, 0.12)',
      ],
      spark: 'rgba(14, 165, 233, 0.18)',
      cssVars: {
        '--theme-accent': '#2563eb',
        '--theme-surface': '#f8fafc',
        '--theme-muted': '#e0f2fe',
        '--theme-glow': 'rgba(59, 130, 246, 0.28)',
      },
    }
  }, [isDark])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    Object.entries(palette.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })
  }, [palette, mounted])

  if (!mounted) {
    return null
  }

  const gradientBackground = `linear-gradient(120deg, ${palette.gradientStops.join(', ')})`

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            backgroundPosition: prefersReducedMotion
              ? '50% 50%'
              : ['0% 50%', '100% 50%', '0% 50%'],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0.01 : 18,
            repeat: prefersReducedMotion ? 0 : Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: gradientBackground,
            backgroundSize: '250% 250%',
            filter: isDark ? 'saturate(1.1)' : 'saturate(1.05)',
          }}
        />
      </AnimatePresence>

      {/* Mesh overlay */}
      <motion.div
        className="absolute inset-0 mix-blend-screen opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, ${palette.mesh[0]} 0%, transparent 55%),
            radial-gradient(circle at 80% 10%, ${palette.mesh[1]} 0%, transparent 45%),
            radial-gradient(circle at 60% 80%, ${palette.mesh[2]} 0%, transparent 50%)
          `,
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }
        }
        transition={{
          duration: prefersReducedMotion ? 0.01 : 28,
          repeat: prefersReducedMotion ? 0 : Infinity,
          ease: 'linear',
        }}
      />

      {/* Moving glow */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0 mix-blend-color-dodge opacity-40"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${palette.spark} 0%, transparent 60%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: ['-10%', '20%', '-10%'],
            y: ['-10%', '15%', '-5%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)',
          backgroundSize: '3px 3px',
        }}
      />
    </div>
  )
}

export default ThemeTransition
