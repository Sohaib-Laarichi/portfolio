'use client'

import { useState, useEffect } from 'react'

const DarkModeTest = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Force dark mode for testing
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsDark(!isDark)}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          isDark 
            ? 'bg-yellow-500 text-black hover:bg-yellow-400' 
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default DarkModeTest