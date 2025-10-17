'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeTransition = () => {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800'
              : 'bg-gradient-to-br from-orange-200 via-yellow-100 to-sky-200'
          }`}
        />
      </AnimatePresence>

      {/* Overlay patterns */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        isDark ? 'opacity-40' : 'opacity-20'
      }`}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, ${
            isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(251, 191, 36, 0.1)'
          } 0%, transparent 50%), 
          radial-gradient(circle at 80% 20%, ${
            isDark ? 'rgba(139, 69, 19, 0.1)' : 'rgba(34, 197, 94, 0.1)'
          } 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, ${
            isDark ? 'rgba(168, 85, 247, 0.1)' : 'rgba(59, 130, 246, 0.1)'
          } 0%, transparent 50%)`
        }} />
      </div>
    </div>
  )
}

export default ThemeTransition