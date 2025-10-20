'use client'

import { useEffect, useState } from 'react'

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth
      const isMobileWidth = width < 768
      setIsMobile(isMobileWidth)

      // Détecter les appareils moins performants
      const isLowEnd = 
        // Connexion lente
        (navigator as any)?.connection?.effectiveType === '2g' ||
        (navigator as any)?.connection?.effectiveType === 'slow-2g' ||
        // RAM limitée (si disponible)
        (navigator as any)?.deviceMemory < 4 ||
        // GPU intégré ou faible
        (navigator as any)?.hardwareConcurrency <= 2

      setIsLowEndDevice(isLowEnd)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)
    
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  return { isMobile, isLowEndDevice }
}

export const usePerformanceOptimization = () => {
  const prefersReducedMotion = useReducedMotion()
  const { isMobile, isLowEndDevice } = useMobileDetection()

  const shouldReduceAnimations = prefersReducedMotion || isLowEndDevice
  const shouldUseSimpleAnimations = isMobile || isLowEndDevice
  const particleCount = isMobile ? (isLowEndDevice ? 2 : 5) : (isLowEndDevice ? 8 : 20)

  return {
    prefersReducedMotion,
    isMobile,
    isLowEndDevice,
    shouldReduceAnimations,
    shouldUseSimpleAnimations,
    particleCount,
    // Configuration d'animation optimisée
    animationConfig: {
      duration: shouldUseSimpleAnimations ? 0.3 : 0.8,
      ease: shouldUseSimpleAnimations ? 'easeOut' : 'easeInOut',
      stagger: shouldUseSimpleAnimations ? 0.05 : 0.1,
    }
  }
}