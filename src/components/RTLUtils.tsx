'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface RTLWrapperProps {
  children: React.ReactNode
  className?: string
}

export function RTLWrapper({ children, className = '' }: RTLWrapperProps) {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  return (
    <div 
      className={`${className} ${isRTL ? 'rtl' : 'ltr'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {children}
    </div>
  )
}

interface TextProps {
  children: React.ReactNode
  className?: string
  align?: 'left' | 'center' | 'right' | 'auto'
}

export function RTLText({ children, className = '', align = 'auto' }: TextProps) {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  
  const getAlignment = () => {
    if (align === 'auto') {
      return isRTL ? 'text-right' : 'text-left'
    }
    return `text-${align}`
  }

  return (
    <span className={`${className} ${getAlignment()}`}>
      {children}
    </span>
  )
}