'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ColorTransitionProps {
  lightColors: string[]
  darkColors: string[]
  className?: string
}

const ColorTransition = ({ lightColors, darkColors, className = '' }: ColorTransitionProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentColors, setCurrentColors] = useState(lightColors)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      setCurrentColors(resolvedTheme === 'dark' ? darkColors : lightColors)
    }
  }, [resolvedTheme, mounted, darkColors, lightColors])

  if (!mounted) {
    return <div className={className} />
  }

  return (
    <motion.div
      className={className}
      animate={{
        background: `linear-gradient(135deg, ${currentColors.join(', ')})`,
      }}
      transition={{ duration: 0.8 }}
    />
  )
}

export default ColorTransition