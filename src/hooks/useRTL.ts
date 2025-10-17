'use client'

import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

export function useRTL() {
  const { i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  useEffect(() => {
    // Update document direction when language changes
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = i18n.language
  }, [isRTL, i18n.language])

  return {
    isRTL,
    direction: isRTL ? 'rtl' : 'ltr',
    textAlign: isRTL ? 'text-right' : 'text-left',
    textAlignCenter: 'text-center',
    flexDirection: isRTL ? 'flex-row-reverse' : 'flex-row',
    marginLeft: isRTL ? 'mr-auto' : 'ml-auto',
    marginRight: isRTL ? 'ml-auto' : 'mr-auto',
    paddingLeft: isRTL ? 'pr' : 'pl',
    paddingRight: isRTL ? 'pl' : 'pr',
    roundedLeft: isRTL ? 'rounded-r' : 'rounded-l',
    roundedRight: isRTL ? 'rounded-l' : 'rounded-r',
    borderLeft: isRTL ? 'border-r' : 'border-l',
    borderRight: isRTL ? 'border-l' : 'border-r',
  }
}