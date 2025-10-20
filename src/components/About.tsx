'use client'

import { motion } from 'framer-motion'
import { GraduationCap, User, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

const About = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const education = [
    {
      period: "2021-2026 (5ème année - In Progress)",
      degree: "Diplôme d'Ingénieur en Informatique (Option MIAGE)",
      institution: "EMSI - École Marocaine des Sciences de l'Ingénieur, Marrakech",
      logo: "/images/emsi-logo.svg"
    },
    {
      period: "2021-2023",
      degree: "Bachelor's Degree in Computer Science & BTS in IT Systems and Networks",
      institution: "Private University of Marrakech (UPM)",
      logo: "/images/upm-logo.svg"
    },
    {
      period: "2020-2021",
      degree: "Baccalaureate in Electrical Science and Technologies",
      institution: "Mohamed VI High School, Marrakech",
      logo: "/images/lycee-logo.svg"
    }
  ]

  const softSkills = [
    { icon: "👥" },
    { icon: "🧠" },
    { icon: "💭" },
    { icon: "📋" },
    { icon: "💬" },
    { icon: "🔄" }
  ]

  return (
    <section id="about" className="py-24 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold font-display text-gray-800 dark:text-white mb-6 ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('about.title')}
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* My Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <User className={`w-8 h-8 text-blue-600 dark:text-blue-400 ${isRTL ? 'ml-4' : 'mr-4'}`} />
                <h3 className={`text-2xl font-bold font-display text-gray-800 dark:text-white ${isRTL ? 'text-right' : ''}`}>
                  {t('about.profile.title')}
                </h3>
              </div>
              <div className="bg-gray-50/70 dark:bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                <p className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {t('about.profile.description')}
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Heart className={`w-8 h-8 text-blue-600 dark:text-blue-400 ${isRTL ? 'ml-4' : 'mr-4'}`} />
                <h3 className={`text-2xl font-bold font-display text-gray-800 dark:text-white ${isRTL ? 'text-right' : ''}`}>
                  {t('about.softSkills.title')}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => {
                  const skillsArray = t('about.softSkills.skills', { returnObjects: true }) as string[]
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 hover:shadow-md transition-shadow ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <span className={`text-2xl ${isRTL ? 'ml-3' : 'mr-3'}`}>{skill.icon}</span>
                      <span className="font-medium text-gray-800 dark:text-gray-200">{skillsArray[index]}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={`flex items-center mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <GraduationCap className={`w-8 h-8 text-blue-600 dark:text-blue-400 ${isRTL ? 'ml-4' : 'mr-4'}`} />
              <h3 className={`text-2xl font-bold font-display text-gray-800 dark:text-white ${isRTL ? 'text-right' : ''}`}>
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
                    <div className={`flex-shrink-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 relative z-10 ${isRTL ? 'ml-6' : 'mr-6'}`}>
                      {index < education.length - 1 && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-blue-200 dark:bg-blue-800"></div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className={`bg-white dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex-1 ${isRTL ? 'text-right' : ''}`}>
                      <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {/* School Logo */}
                        <div className="flex-shrink-0">
                          <Image
                            src={edu.logo}
                            alt={`Logo ${edu.institution}`}
                            width={50}
                            height={50}
                            className="rounded-lg shadow-sm"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                            {index === 0 ? t('about.education.period') : edu.period}
                          </div>
                          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                            {index === 0 ? t('about.education.degree') : edu.degree}
                          </h4>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {index === 0 ? t('about.education.school') : edu.institution}
                      </p>
                    </div>
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