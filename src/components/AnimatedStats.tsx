'use client'

import { motion } from 'framer-motion'
import Counter from './Counter'
import { Award, Code, Users, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const AnimatedStats = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const stats = [
    {
      icon: Award,
      number: 3,
      suffix: '+',
      label: t('stats.certifications'),
      color: 'text-blue-500'
    },
    {
      icon: Code,
      number: 10,
      suffix: '+',
      label: t('stats.projects'),
      color: 'text-green-500'
    },
    {
      icon: Users,
      number: 100,
      suffix: '+',
      label: 'Network Users',
      color: 'text-purple-500'
    },
    {
      icon: Star,
      number: 2,
      suffix: '+',
      label: t('stats.experience'),
      color: 'text-orange-500'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
    >
      {stats.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            className="text-center p-4 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20"
          >
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-3`}>
              <IconComponent className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              <Counter 
                end={stat.number} 
                suffix={stat.suffix}
                duration={2000}
              />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {stat.label}
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default AnimatedStats