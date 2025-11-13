'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useMemo, useState } from 'react'

const ParallaxElements = () => {
  const { scrollY } = useScroll()
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 1000], [0, -100])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])
  const y3 = useTransform(scrollY, [0, 1000], [0, -50])

  useEffect(() => {
    setMounted(true)
  }, [])

  const particleConfig = useMemo(() => {
    if (!mounted) return []

    return Array.from({ length: 15 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  }, [mounted])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
      {/* Layer 1 - Slow moving elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0"
      >
        {/* Large floating shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`layer1-${i}`}
            className={`absolute rounded-full ${
              isDark
                ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/5'
                : 'bg-gradient-to-br from-yellow-200/15 to-orange-200/10'
            }`}
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${10 + i * 20}%`,
              top: `${i * 25}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 30 + i * 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </motion.div>

      {/* Layer 2 - Medium speed elements */}
      <motion.div
        style={{ y: y2 }}
        className="absolute inset-0"
      >
        {/* Medium geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`layer2-${i}`}
            className={`absolute ${
              i % 3 === 0 ? 'rounded-full' : i % 3 === 1 ? 'rounded-lg rotate-45' : 'rounded-none'
            } ${
              isDark
                ? 'bg-gradient-to-tr from-indigo-400/8 to-purple-400/5'
                : 'bg-gradient-to-tr from-cyan-300/12 to-blue-300/8'
            }`}
            style={{
              width: `${50 + i * 20}px`,
              height: `${50 + i * 20}px`,
              left: `${5 + i * 12}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              rotate: [0, i % 2 === 0 ? 180 : -180],
              x: [0, 30, -20, 0],
            }}
            transition={{
              rotate: { duration: 15 + i * 3, repeat: Infinity, ease: "linear" },
              x: { duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        ))}
      </motion.div>

      {/* Layer 3 - Fast elements */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0"
      >
        {/* Small particles */}
        {particleConfig.map(({ left, top, duration, delay }, i) => (
          <motion.div
            key={`layer3-${i}`}
            className={`absolute w-2 h-2 rounded-full ${
              isDark ? 'bg-white/20' : 'bg-gray-600/15'
            }`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
            }}
          />
        ))}
      </motion.div>

      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: isDark
            ? [
                'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)',
              ]
            : [
                'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.08) 0%, transparent 50%)',
              ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default ParallaxElements
