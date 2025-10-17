'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ColorTransition from './ColorTransition'

interface SectionBackgroundProps {
  children: React.ReactNode
  type?: 'hero' | 'about' | 'skills' | 'experience' | 'projects' | 'contact'
  className?: string
}

const SectionBackground = ({ children, type = 'hero', className = '' }: SectionBackgroundProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getBackgroundColors = () => {
    const themes = {
      hero: {
        light: ['rgba(255, 237, 213, 0.8)', 'rgba(254, 215, 170, 0.6)', 'rgba(147, 197, 253, 0.4)'],
        dark: ['rgba(15, 23, 42, 0.9)', 'rgba(88, 28, 135, 0.7)', 'rgba(30, 41, 59, 0.8)']
      },
      about: {
        light: ['rgba(236, 254, 255, 0.8)', 'rgba(207, 250, 254, 0.6)', 'rgba(165, 243, 252, 0.4)'],
        dark: ['rgba(12, 74, 110, 0.8)', 'rgba(30, 41, 59, 0.7)', 'rgba(51, 65, 85, 0.6)']
      },
      skills: {
        light: ['rgba(240, 253, 244, 0.8)', 'rgba(187, 247, 208, 0.6)', 'rgba(134, 239, 172, 0.4)'],
        dark: ['rgba(20, 83, 45, 0.8)', 'rgba(22, 101, 52, 0.7)', 'rgba(21, 128, 61, 0.6)']
      },
      experience: {
        light: ['rgba(255, 247, 237, 0.8)', 'rgba(254, 215, 170, 0.6)', 'rgba(251, 191, 36, 0.4)'],
        dark: ['rgba(120, 53, 15, 0.8)', 'rgba(146, 64, 14, 0.7)', 'rgba(180, 83, 9, 0.6)']
      },
      projects: {
        light: ['rgba(245, 243, 255, 0.8)', 'rgba(221, 214, 254, 0.6)', 'rgba(196, 181, 253, 0.4)'],
        dark: ['rgba(76, 29, 149, 0.8)', 'rgba(88, 28, 135, 0.7)', 'rgba(107, 33, 168, 0.6)']
      },
      contact: {
        light: ['rgba(255, 241, 242, 0.8)', 'rgba(254, 205, 211, 0.6)', 'rgba(252, 165, 165, 0.4)'],
        dark: ['rgba(127, 29, 29, 0.8)', 'rgba(153, 27, 27, 0.7)', 'rgba(185, 28, 28, 0.6)']
      }
    }

    return themes[type]
  }

  const colors = getBackgroundColors()

  if (!mounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={`relative ${className}`}>
      {/* Animated Background */}
      <ColorTransition
        lightColors={colors.light}
        darkColors={colors.dark}
        className="absolute inset-0"
      />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              resolvedTheme === 'dark'
                ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/10'
                : 'bg-gradient-to-br from-yellow-300/20 to-orange-300/10'
            }`}
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
            }}
            animate={{
              x: [0, 50, -30, 40, 0],
              y: [0, -30, 20, -25, 0],
              scale: [1, 1.1, 0.9, 1.05, 1],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default SectionBackground