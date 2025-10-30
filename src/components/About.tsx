'use client'

import { motion, useInView } from 'framer-motion'
import { GraduationCap, User, Heart, Award, BookOpen, Users, School, Building } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useRef, useState, useEffect } from 'react'

// Composant Counter animé
const AnimatedCounter = ({ target, label, suffix = "", duration = 2 }: { target: number, label: string, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = target
      const increment = end / (duration * 60)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }
  }, [isInView, target, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, type: "spring", damping: 20 }}
      className="text-center p-6 bg-gradient-to-br from-slate-50/80 to-white/90 dark:from-slate-800/80 dark:to-slate-700/90 rounded-2xl border border-slate-200 dark:border-slate-600 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-700 to-slate-600 dark:from-slate-300 dark:to-slate-200 bg-clip-text text-transparent mb-2"
      >
        {count}{suffix}
      </motion.div>
      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{label}</div>
    </motion.div>
  )
}

const About = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const education = [
    {
      period: "2024-2026 (En cours)",
      degree: "Diplôme d'Ingénieur Informatique - Option MIAGE",
      institution: "EMSI, Marrakech",
      icon: GraduationCap,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50 dark:bg-slate-800"
    },
    {
      period: "2023-2024",
      degree: "Licence en Informatique",
      institution: "Université Privée de Marrakech (UPM)",
      icon: School,
      color: "from-slate-700 to-slate-800",
      bgColor: "bg-slate-100 dark:bg-slate-700"
    },
    {
      period: "2021-2023",
      degree: "BTS en Systèmes et Réseaux Informatiques",
      institution: "Lycée Qualifiant Mohamed V, Essaouira",
      icon: School,
      color: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50 dark:bg-slate-800"
    },
    {
      period: "2021",
      degree: "Baccalauréat - Sciences et Technologies Électriques",
      institution: "Lycée Qualifiant Mohamed VI, Marrakech",
      icon: Building,
      color: "from-slate-500 to-slate-600",
      bgColor: "bg-slate-100 dark:bg-slate-700"
    }
  ]

  const softSkills = [
    { icon: "👥", color: "from-slate-600 to-slate-700" },
    { icon: "🧠", color: "from-slate-700 to-slate-800" },
    { icon: "💭", color: "from-slate-500 to-slate-600" },
    { icon: "📋", color: "from-slate-600 to-slate-700" },
    { icon: "💬", color: "from-slate-700 to-slate-800" },
    { icon: "🔄", color: "from-slate-500 to-slate-600" }
  ]

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-br from-white/90 via-slate-50/70 to-white/90 dark:from-slate-800/90 dark:via-slate-700/70 dark:to-slate-800/90 backdrop-blur-sm w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", damping: 15 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl mb-6 shadow-lg"
          >
            <User className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent mb-6 ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('about.title')}
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring", damping: 20 }}
            className="h-1 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto mb-8 rounded-full"
          />
        </motion.div>

        {/* Statistiques animées */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <AnimatedCounter target={3} label={t('about.stats.experience') || "Années d'Expérience"} suffix="+" />
          <AnimatedCounter target={25} label={t('about.stats.projects') || "Projets Réalisés"} suffix="+" />
          <AnimatedCounter target={12} label={t('about.stats.technologies') || "Technologies Maîtrisées"} />
          <AnimatedCounter target={98} label={t('about.stats.satisfaction') || "Taux de Satisfaction"} suffix="%" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* My Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className={`p-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl shadow-lg ${isRTL ? 'ml-4' : 'mr-4'}`}
                >
                  <User className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent ${isRTL ? 'text-right' : ''}`}>
                  {t('about.profile.title')}
                </h3>
              </div>
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-gradient-to-br from-slate-50/80 to-white/90 dark:from-slate-800/80 dark:to-slate-700/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-200 dark:border-slate-600 shadow-xl"
              >
                <p className={`text-lg text-slate-700 dark:text-slate-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {t('about.profile.description')}
                </p>
              </motion.div>
            </motion.div>

            {/* Soft Skills Améliorées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", damping: 15 }}
                  className={`p-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl shadow-lg ${isRTL ? 'ml-4' : 'mr-4'}`}
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent ${isRTL ? 'text-right' : ''}`}>
                  {t('about.softSkills.title')}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const skillsArray = t('about.softSkills.skills', { returnObjects: true }) as string[]
                  const skillLabels = [
                    "Leadership d'équipe",
                    "Pensée critique", 
                    "Créativité",
                    "Gestion de projet",
                    "Communication",
                    "Adaptabilité"
                  ]
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, x: -20 }}
                      animate={isInView ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1, type: "spring", damping: 20 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2
                      }}
                      className={`group flex items-center p-5 bg-gradient-to-br from-slate-50/90 to-white/95 dark:from-slate-800/90 dark:to-slate-700/95 rounded-2xl border border-slate-200/60 dark:border-slate-600/60 hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl backdrop-blur-sm ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <motion.div
                        className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${skill.color} rounded-xl shadow-md ${isRTL ? 'ml-4' : 'mr-4'}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", damping: 15 }}
                      >
                        <span className="text-2xl filter drop-shadow-sm">
                          {skill.icon}
                        </span>
                      </motion.div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-600 dark:group-hover:text-slate-400 transition-colors">
                        {(Array.isArray(skillsArray) && skillsArray[index]) || skillLabels[index] || `Compétence ${index + 1}`}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`flex items-center mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", damping: 15 }}
                className={`p-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl shadow-lg ${isRTL ? 'ml-4' : 'mr-4'}`}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className={`text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent ${isRTL ? 'text-right' : ''}`}>
                {t('about.education.title')}
              </h3>
            </div>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start">
                    {/* Timeline dot */}
                    <motion.div 
                      className={`flex-shrink-0 w-4 h-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mt-2 relative z-10 shadow-md ${isRTL ? 'ml-6' : 'mr-6'}`}
                      whileHover={{ scale: 1.3, rotate: 180 }}
                      transition={{ type: "spring", damping: 15 }}
                    >
                      {index < education.length - 1 && (
                        <motion.div 
                          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-full"
                          initial={{ height: 0 }}
                          whileInView={{ height: 64 }}
                          transition={{ duration: 1, delay: index * 0.3 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      )}
                    </motion.div>
                    
                    {/* Content */}
                    <motion.div 
                      className={`bg-gradient-to-br from-slate-50/80 to-white/90 dark:from-slate-800/80 dark:to-slate-700/90 border border-slate-200 dark:border-slate-600 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 ${isRTL ? 'text-right' : ''}`}
                      whileHover={{ y: -3, scale: 1.01 }}
                      transition={{ type: "spring", damping: 20 }}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {/* School Icon */}
                        <motion.div 
                          className={`flex-shrink-0 p-3 bg-gradient-to-br ${edu.color} rounded-xl shadow-lg`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ type: "spring", damping: 15 }}
                        >
                          <edu.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1">
                            {edu.period}
                          </div>
                          <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                            {edu.degree}
                          </h4>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">
                        {edu.institution}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About