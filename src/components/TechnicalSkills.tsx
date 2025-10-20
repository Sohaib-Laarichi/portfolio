'use client'

import { motion } from 'framer-motion'
import { Shield, Code, Database, Settings, Award, ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const TechnicalSkills = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const getSkillCategories = () => {
    const networking = t('skills.items.networking', { returnObjects: true })
    const programming = t('skills.items.programming', { returnObjects: true })
    const tools = t('skills.items.tools', { returnObjects: true })
    const databases = t('skills.items.databases', { returnObjects: true })

    return [
      {
        title: t('skills.categories.networking'),
        icon: Shield,
        color: "bg-blue-500",
        skills: Array.isArray(networking) ? networking : []
      },
      {
        title: t('skills.categories.programming'),
        icon: Code,
        color: "bg-green-500",
        skills: Array.isArray(programming) ? programming : []
      },
      {
        title: t('skills.categories.tools'),
        icon: Settings,
        color: "bg-purple-500",
        skills: Array.isArray(tools) ? tools : []
      },
      {
        title: t('skills.categories.databases'),
        icon: Database,
        color: "bg-orange-500",
        skills: Array.isArray(databases) ? databases : []
      }
    ]
  }

  const certifications = [
    {
      name: "Introduction to Containers with Docker, Kubernetes, and OpenShift",
      provider: "IBM/Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/UEAEZHBM97J1"
    },
    {
      name: "Virtual Networks in Azure",
      provider: "Microsoft/Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/HDWI0W2VAOQ4"
    },
    {
      name: "Microsoft 365 and Azure Security Administration",
      provider: "Microsoft/Coursera",
      year: "2024",
      link: "https://www.coursera.org/account/accomplishments/verify/OMB7TVTDZPMN"
    },
    {
      name: "Introduction to Cybersecurity Careers",
      provider: "IBM/Coursera",
      year: "2025",
      link: "https://coursera.org/share/c0b09d863307b7d6510149b0bbe4d819"
    },
    {
      name: "Introduction to Java and Object-Oriented Programming",
      provider: "University of Pennsylvania/Coursera",
      year: "2025",
      link: "https://coursera.org/share/0a31c9c6a10d188100397acacada0cea"
    },
    {
      name: "React Basics",
      provider: "Meta/Coursera",
      year: "2025",
      link: "https://coursera.org/share/ecd3690e5151be1bb40d937274789a62"
    }
  ]

  return (
    <section id="skills" className="py-24 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-sm w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold font-display text-gray-800 dark:text-white mb-6 ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className={`text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {getSkillCategories().map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <div className={`${category.color} p-2 sm:p-3 rounded-lg mr-4 flex-shrink-0`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white font-display">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="flex items-center flex-wrap"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0 mt-1"></div>
                      <span className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm sm:text-base">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center justify-center mb-8">
            <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-4" />
            <h3 className="text-3xl font-bold font-display text-gray-800 dark:text-white">
              Certifications
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                >
                  <div className="relative w-16 h-16 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-700 dark:group-hover:bg-primary-400 transition-colors">
                    <Award className="w-8 h-8 text-white" />
                    <ExternalLink className="absolute -top-1 -right-1 w-4 h-4 text-white bg-accent-500 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 text-sm leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
                    {cert.provider}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {cert.year}
                  </p>
                  <div className="mt-3 text-xs text-primary-600 dark:text-primary-400 opacity-70 group-hover:opacity-100 transition-opacity">
                    📜 Voir le certificat
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSkills