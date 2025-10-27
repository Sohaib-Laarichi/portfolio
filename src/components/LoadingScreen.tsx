'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMemo } from 'react'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [loadingText, setLoadingText] = useState('Initialisation...')

  const loadingPhases = useMemo(() => [
    'Initialisation des ressources...',
    'Chargement des composants...',
    'Configuration de l\'interface...',
    'Optimisation des performances...',
    'Finalisation...',
    'Prêt !'
  ], [])

  useEffect(() => {
    // Animation de chargement plus réaliste
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onLoadingComplete, 800)
          return 100
        }
        
        const newProgress = prev + (Math.random() * 3 + 1)
        const phase = Math.floor((newProgress / 100) * (loadingPhases.length - 1))
        
        if (phase !== currentPhase && phase < loadingPhases.length) {
          setCurrentPhase(phase)
          setLoadingText(loadingPhases[phase])
        }
        
        return Math.min(newProgress, 100)
      })
    }, 100)

    return () => clearInterval(timer)
  }, [onLoadingComplete, currentPhase, loadingPhases])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Particules animées statiques en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grille de particules avec positions fixes */}
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        
        {/* Points fixes animés */}
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
            style={{
              left: `${15 + (i % 4) * 25}%`,
              top: `${20 + Math.floor(i / 4) * 30}%`
            }}
          />
        ))}
      </div>

      {/* Logo professionnel */}
      <motion.div
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="mb-12 relative"
      >
        <div className="relative group">
          {/* Cercle extérieur avec rotation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-20 blur-sm"
          />
          
          {/* Logo principal professionnel */}
          <div className="relative w-24 h-24 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-2xl border border-slate-600/30 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-3xl font-bold bg-gradient-to-r from-slate-100 via-blue-200 to-slate-100 bg-clip-text text-transparent"
            >
              SL
            </motion.div>
            
            {/* Effet de brillance */}
            <motion.div
              animate={{ 
                x: [-100, 100],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Nom et titre professionnel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-light text-slate-100 mb-2 tracking-wide">
          Sohaib <span className="font-bold bg-gradient-to-r from-slate-200 via-blue-200 to-slate-200 bg-clip-text text-transparent">Laarichi</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.05em' }}
          transition={{ delay: 1.3, duration: 1 }}
          className="text-slate-300/90 text-lg font-light uppercase tracking-wider"
        >
          Network & Software Engineer
        </motion.p>
      </motion.div>

      {/* Système de progression avancé */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="w-96 max-w-sm mx-auto"
      >
        {/* Texte de statut */}
        <div className="text-center mb-6">
          <motion.p
            key={loadingText}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.5 }}
            className="text-slate-300 text-sm font-medium tracking-wide"
          >
            {loadingText}
          </motion.p>
        </div>
        
        {/* Barre de progression moderne */}
        <div className="relative">
          <div className="w-full bg-slate-800/70 rounded-full h-1 overflow-hidden backdrop-blur-sm border border-slate-700/40">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-slate-400 via-slate-300 to-slate-200 rounded-full relative shadow-lg shadow-slate-400/25"
            >
              {/* Particule en mouvement */}
              <motion.div
                animate={{ 
                  x: ["-10px", "10px", "-10px"],
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
              />
            </motion.div>
          </div>
          
          {/* Points de progression */}
          <div className="flex justify-between mt-3">
            {loadingPhases.slice(0, -1).map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: currentPhase >= index ? 1 : 0.5,
                  backgroundColor: currentPhase >= index ? '#3b82f6' : '#1e293b'
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="w-1.5 h-1.5 rounded-full"
              />
            ))}
          </div>
        </div>
        
        {/* Pourcentage avec animation */}
        <div className="text-center mt-4">
          <motion.span
            key={Math.floor(progress)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-blue-300/90 text-xs font-mono tracking-wider"
          >
            {Math.floor(progress)}%
          </motion.span>
        </div>
      </motion.div>

      {/* Indicateur de connectivité */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="mt-12 flex items-center space-x-3"
      >
        <div className="flex space-x-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                height: [4, 12, 4],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
              className="w-0.5 bg-gradient-to-t from-blue-600 to-blue-400 rounded-full"
            />
          ))}
        </div>
        <span className="text-blue-200/60 text-xs font-light">
          Connexion sécurisée
        </span>
      </motion.div>

      {/* Message final avec transition */}
      <AnimatePresence>
        {progress === 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-light text-white mb-2">Portfolio Prêt</h3>
              <p className="text-blue-200/80 text-sm">Bienvenue dans mon univers</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default LoadingScreen