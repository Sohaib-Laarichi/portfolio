'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingParticlesProps {
  count?: number
  type?: 'default' | 'fireflies' | 'birds'
  color?: string
}

const FloatingParticles = ({ count = 20, type = 'default', color = '#3B82F6' }: FloatingParticlesProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    // Détecter mobile et préférences de mouvement réduit
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    const checkReducedMotion = () => {
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }

    checkMobile()
    checkReducedMotion()

    const handleResize = () => checkMobile()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Réduire le nombre de particules sur mobile pour les performances
  const adjustedCount = isMobile ? Math.max(3, Math.floor(count / 4)) : count
  
  // Désactiver les animations si l'utilisateur préfère un mouvement réduit
  if (reducedMotion) {
    return null
  }
  
  if (type === 'fireflies') {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(adjustedCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              boxShadow: `0 0 8px ${color}`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: isMobile ? [0, 15, -10, 20, 0] : [0, 30, -20, 40, 0],
              y: isMobile ? [0, -12, 8, -18, 0] : [0, -25, 15, -35, 0],
              opacity: [0.3, 1, 0.5, 1, 0.3],
            }}
            transition={{
              duration: isMobile ? 8 + Math.random() * 4 : 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    )
  }

  if (type === 'birds') {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(adjustedCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 20}%`,
              top: `${10 + Math.random() * 30}%`,
            }}
            animate={{
              x: [0, 1200],
              y: [0, -20, 10, -15, 5],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeInOut",
            }}
          >
            <svg width="20" height="16" viewBox="0 0 20 16" className="drop-shadow-sm">
              <motion.path
                d="M3,8 Q7,4 10,8 Q13,4 17,8"
                stroke={color}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M3,8 Q7,4 10,8 Q13,4 17,8",
                    "M3,8 Q7,10 10,8 Q13,10 17,8",
                    "M3,8 Q7,4 10,8 Q13,4 17,8",
                  ],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
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
      {[...Array(adjustedCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: isMobile ? [0, 10, -8, 12, 0] : [0, 20, -15, 25, 0],
            y: isMobile ? [0, -15, 5, -10, 0] : [0, -30, 10, -20, 0],
            opacity: [0.1, 0.8, 0.3, 0.9, 0.1],
          }}
          transition={{
            duration: isMobile ? 10 + Math.random() * 4 : 8 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default FloatingParticles