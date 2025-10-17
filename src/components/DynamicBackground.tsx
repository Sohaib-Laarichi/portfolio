'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import FloatingParticles from './FloatingParticles'

const DynamicBackground = () => {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isDark = resolvedTheme === 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Évite l'hydration mismatch
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Background Gradients */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="dark-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800"
          >
            {/* Night Sky Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/60 via-purple-900/40 to-slate-900/80" />
            
            {/* Stars Pattern */}
            <div className="absolute inset-0 opacity-60">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 80}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Moon */}
            <motion.div
              className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {/* Moon craters */}
              <div className="absolute top-4 left-6 w-3 h-3 bg-slate-400 rounded-full opacity-40" />
              <div className="absolute bottom-6 right-4 w-2 h-2 bg-slate-400 rounded-full opacity-30" />
              <div className="absolute top-8 right-8 w-4 h-4 bg-slate-400 rounded-full opacity-20" />
            </motion.div>

            {/* Fireflies */}
            <FloatingParticles 
              count={15}
              type="fireflies"
              color="rgb(34, 197, 94)"
            />
          </motion.div>
        ) : (
          <motion.div
            key="light-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-gradient-to-br from-orange-200 via-yellow-100 to-sky-200"
          >
            {/* Morning Sky Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-100/40 via-yellow-50/60 to-orange-100/80" />
            
            {/* Clouds */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white/60 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + Math.random() * 20}%`,
                    width: `${60 + Math.random() * 40}px`,
                    height: `${30 + Math.random() * 20}px`,
                  }}
                  animate={{
                    x: [0, 10, 0],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Sun */}
            <motion.div
              className="absolute top-16 right-24 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-2xl"
              initial={{ scale: 0, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              {/* Sun rays */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-8 bg-yellow-300/80 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: '50% 50%',
                    transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-24px)`,
                  }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>

            {/* Flying Birds */}
            <FloatingParticles 
              count={6}
              type="birds"
              color="rgb(71, 85, 105)"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mountain Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3">
        <motion.svg
          viewBox="0 0 1200 400"
          className="w-full h-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {/* Back mountains */}
          <motion.path
            d="M0,400 L0,200 L200,100 L400,150 L600,80 L800,120 L1000,90 L1200,130 L1200,400 Z"
            fill={isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(148, 163, 184, 0.6)'}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          
          {/* Front mountains */}
          <motion.path
            d="M0,400 L0,280 L300,180 L500,220 L700,160 L900,200 L1200,170 L1200,400 Z"
            fill={isDark ? 'rgba(51, 65, 85, 0.9)' : 'rgba(100, 116, 139, 0.7)'}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.8 }}
          />
        </motion.svg>
      </div>

      {/* River/Water */}
      <motion.div
        className="absolute bottom-0 left-1/4 right-1/4 h-16"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className={`w-full h-full ${
          isDark 
            ? 'bg-gradient-to-r from-slate-700 via-blue-900 to-slate-700' 
            : 'bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-300'
        } rounded-t-3xl relative overflow-hidden`}>
          {/* Water ripples */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-full h-1 ${
                isDark ? 'bg-blue-400/30' : 'bg-white/40'
              }`}
              style={{ top: `${i * 20}%` }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Foreground Elements */}
      <div className="absolute bottom-16 left-0 right-0">
        <AnimatePresence mode="wait">
          {isDark ? (
            /* Mushrooms and Night Plants */
            <motion.div
              key="night-plants"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex justify-around px-8"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {/* Glowing Mushroom */}
                  <div className={`w-4 h-6 ${
                    i % 2 === 0 ? 'bg-emerald-400' : 'bg-purple-400'
                  } rounded-t-full relative shadow-lg`}>
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-4 ${
                      i % 2 === 0 ? 'bg-emerald-600' : 'bg-purple-600'
                    }`} />
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute inset-0 ${
                        i % 2 === 0 ? 'bg-emerald-400' : 'bg-purple-400'
                      } rounded-t-full blur-sm`}
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Flowers and Day Plants */
            <motion.div
              key="day-plants"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex justify-around px-8"
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="relative"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {/* Flower */}
                  <div className={`w-3 h-3 ${
                    ['bg-pink-400', 'bg-yellow-400', 'bg-purple-400', 'bg-red-400'][i % 4]
                  } rounded-full relative`}>
                    {/* Petals */}
                    {[...Array(6)].map((_, petalIndex) => (
                      <div
                        key={petalIndex}
                        className={`absolute w-2 h-2 ${
                          ['bg-pink-300', 'bg-yellow-300', 'bg-purple-300', 'bg-red-300'][i % 4]
                        } rounded-full`}
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(-50%, -50%) rotate(${petalIndex * 60}deg) translateY(-4px)`,
                        }}
                      />
                    ))}
                    {/* Stem */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-green-500" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default DynamicBackground