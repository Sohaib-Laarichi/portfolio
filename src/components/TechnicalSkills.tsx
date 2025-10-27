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
        color: "from-slate-600 to-slate-700",
        bgColor: "bg-slate-100 dark:bg-slate-800",
        textColor: "text-slate-700 dark:text-slate-300",
        skills: Array.isArray(networking) ? networking : []
      },
      {
        title: t('skills.categories.programming'),
        icon: Code,
        color: "from-emerald-600 to-emerald-700",
        bgColor: "bg-emerald-50 dark:bg-slate-800",
        textColor: "text-emerald-700 dark:text-emerald-400",
        skills: Array.isArray(programming) ? programming : []
      },
      {
        title: t('skills.categories.tools'),
        icon: Settings,
        color: "from-purple-600 to-purple-700",
        bgColor: "bg-purple-50 dark:bg-slate-800",
        textColor: "text-purple-700 dark:text-purple-400",
        skills: Array.isArray(tools) ? tools : []
      },
      {
        title: t('skills.categories.databases'),
        icon: Database,
        color: "from-amber-600 to-amber-700",
        bgColor: "bg-amber-50 dark:bg-slate-800",
        textColor: "text-amber-700 dark:text-amber-400",
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
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50/90 via-white/80 to-slate-100/90 dark:from-slate-900/90 dark:via-slate-800/80 dark:to-slate-900/90 backdrop-blur-sm w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent mb-6 ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto mb-8 rounded-full"></div>
          <p className={`text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
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
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1, type: "spring", damping: 20 }}
                viewport={{ once: true }}
                className={`${category.bgColor} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-slate-200 dark:border-slate-700 backdrop-blur-sm`}
              >
                <div className="flex items-center mb-6">
                  <motion.div 
                    className={`bg-gradient-to-br ${category.color} p-3 rounded-xl mr-4 flex-shrink-0 shadow-md`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className={`text-xl font-bold ${category.textColor} font-display`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 5, scale: 1.05 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        damping: 20
                      }}
                      viewport={{ once: true }}
                      className="flex items-center flex-wrap group cursor-pointer"
                    >
                      <motion.div 
                        className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3 flex-shrink-0 mt-1 group-hover:scale-150`}
                        transition={{ type: "spring", damping: 15 }}
                      ></motion.div>
                      <span className={`${category.textColor} group-hover:font-semibold transition-all duration-300 text-base leading-relaxed`}>
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
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white via-slate-50/50 to-white dark:from-slate-800 dark:via-slate-700/50 dark:to-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
        >
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", damping: 15 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", damping: 10 }}
            >
              <Award className="w-8 h-8 text-slate-700 dark:text-slate-300 mr-4" />
            </motion.div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Certifications
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", damping: 20 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-slate-500 group-hover:to-slate-600 transition-all duration-300 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                    <ExternalLink className="absolute -top-1 -right-1 w-4 h-4 text-white bg-slate-500 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" />
                  </div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-sm leading-tight group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 font-semibold text-sm">
                    {cert.provider}
                  </p>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-1">
                    {cert.year}
                  </p>
                  <div className="mt-3 text-xs text-slate-600 dark:text-slate-400 opacity-70 group-hover:opacity-100 transition-opacity">
                    📜 Voir le certificat
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSkills