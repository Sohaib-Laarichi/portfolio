'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
    )
  }

  const currentTheme = resolvedTheme || theme

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className={`
        relative flex items-center justify-center
        w-12 h-12 rounded-full
        bg-gray-200 dark:bg-gray-800
        hover:bg-gray-300 dark:hover:bg-gray-700
        transition-all duration-300 ease-in-out
        shadow-lg hover:shadow-xl
        border-2 border-gray-300 dark:border-gray-600
        group
      `}
      aria-label="Toggle theme"
      title={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`
            absolute inset-0 w-6 h-6 text-yellow-500
            transition-all duration-300 ease-in-out transform
            ${currentTheme === 'dark' 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
            }
          `}
        />
        <Moon 
          className={`
            absolute inset-0 w-6 h-6 text-blue-400
            transition-all duration-300 ease-in-out transform
            ${currentTheme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
            }
          `}
        />
      </div>
      
      {/* Tooltip */}
      <div className={`
        absolute -bottom-10 left-1/2 transform -translate-x-1/2
        bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800
        px-2 py-1 rounded text-xs font-medium
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        whitespace-nowrap pointer-events-none z-50
      `}>
        {currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        <div className={`
          absolute -top-1 left-1/2 transform -translate-x-1/2
          w-2 h-2 bg-gray-800 dark:bg-gray-200 rotate-45
        `}></div>
      </div>
    </button>
  )
}

export default ThemeToggle