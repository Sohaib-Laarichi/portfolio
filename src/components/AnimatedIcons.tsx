'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Code, Database, Shield, Server, Wifi, Terminal, Cpu, Cloud } from 'lucide-react'

const AnimatedIcons = () => {
  const prefersReducedMotion = useReducedMotion()

  const icons = [
    { Icon: Code, delay: 0, x: 10, y: 20 },
    { Icon: Database, delay: 0.5, x: 85, y: 15 },
    { Icon: Shield, delay: 1, x: 15, y: 70 },
    { Icon: Server, delay: 1.5, x: 80, y: 80 },
    { Icon: Wifi, delay: 2, x: 50, y: 10 },
    { Icon: Terminal, delay: 2.5, x: 20, y: 45 },
    { Icon: Cpu, delay: 3, x: 75, y: 50 },
    { Icon: Cloud, delay: 3.5, x: 50, y: 85 },
  ]

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={
            prefersReducedMotion
              ? {
                  opacity: [0, 0.12, 0],
                  scale: [0.85, 1, 0.85],
                }
              : {
                  opacity: [0, 0.12, 0.2, 0.12, 0],
                  scale: [0, 1, 1.1, 1, 0],
                  rotate: [0, 180, 360],
                  y: [0, -20, 0, 20, 0],
                }
          }
          transition={{
            duration: prefersReducedMotion ? 10 : 8,
            delay: delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          <Icon 
            className="w-8 h-8 drop-shadow-lg opacity-80" 
            strokeWidth={1}
            style={{ color: 'var(--theme-accent)' }}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedIcons
