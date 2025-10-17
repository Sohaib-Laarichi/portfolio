'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

const Counter = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = ""
}: CounterProps) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOutCubic * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isVisible])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setIsVisible(true)}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <span className="tabular-nums">
        {prefix}{count}{suffix}
      </span>
    </motion.div>
  )
}

export default Counter