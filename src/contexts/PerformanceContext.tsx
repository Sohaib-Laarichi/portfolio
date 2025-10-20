'use client'

import { createContext, useContext, ReactNode } from 'react'
import { usePerformanceOptimization } from '../hooks/useReducedMotion'

interface PerformanceContextType {
  isMobile: boolean
  isLowEndDevice: boolean
  shouldReduceAnimations: boolean
  shouldUseSimpleAnimations: boolean
  particleCount: number
  animationConfig: {
    duration: number
    ease: string
    stagger: number
  }
}

const PerformanceContext = createContext<PerformanceContextType | null>(null)

export const usePerformanceContext = () => {
  const context = useContext(PerformanceContext)
  if (!context) {
    throw new Error('usePerformanceContext must be used within a PerformanceProvider')
  }
  return context
}

interface PerformanceProviderProps {
  children: ReactNode
}

export const PerformanceProvider = ({ children }: PerformanceProviderProps) => {
  const performanceConfig = usePerformanceOptimization()

  return (
    <PerformanceContext.Provider value={performanceConfig}>
      {children}
    </PerformanceContext.Provider>
  )
}