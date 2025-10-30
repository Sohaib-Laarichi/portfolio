'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const getExperiences = () => {
    const jobs = t('experience.jobs', { returnObjects: true }) as any[]
    return jobs.length > 0 ? jobs : [
      {
        period: "July - August 2025",
        title: "Summer Intern",
        company: "HA Groupe",
        location: "Marrakech",
        description: "End-to-end development of the Mkhademia platform - a comprehensive web platform for Moroccan freelancers. Full-stack architecture design and implementation with modern technologies.",
        achievements: [
          "Complete development of Mkhademia web platform using Node.js, Next.js and MongoDB",
          "Designed and implemented MongoDB database architecture for freelance profile management",
          "Created responsive user interface with Next.js 14 and modern design patterns",
          "Integrated search and filtering features by Moroccan cities"
        ],
        type: "internship"
      },
      {
        period: "May - June 2023",
        title: "IT Technician (Intern)",
        company: "Phone Dreams",
        location: "Marrakech",
        description: "Technical support and IT infrastructure management in a commercial environment. Responsible for maintaining the IT fleet, server configuration, and incident resolution.",
        achievements: [
          "Configured and maintained 3 internal Windows Server 2019 servers",
          "Diagnosed and repaired IT fleet of ~50 workstations",
          "Resolved 80+ technical support tickets with direct user assistance",
          "Documented maintenance procedures and created intervention guides"
        ],
        type: "internship"
      },
      {
        period: "June 2022",
        title: "Technician Assistant (Intern)",
        company: "CHU (University Hospital Center)",
        location: "Marrakech",
        description: "Participated in critical network infrastructure projects in healthcare environment. Deployment of enterprise-level network solutions with Cisco equipment and fiber optic infrastructure.",
        achievements: [
          "Deployed structured cabling infrastructure and patched 12 network bays",
          "Performed single-mode fiber optic splicing with reflectometry testing",
          "Configured 8 Cisco switches (Layer 2): VLAN management, Port Security for new equipment integration",
          "Participated in network deployment for 2 new medical departments"
        ],
        type: "internship"
      }
    ]
  }

  const volunteerWork = [
    {
      title: "Earthquake Relief Volunteer",
      description: "Participated in relief efforts for earthquake victims, providing technical and logistical support.",
      impact: "Community Support"
    },
    {
      title: "National Census Participant",
      description: "Contributed to national statistical data collection efforts, demonstrating civic engagement.",
      impact: "Civic Duty"
    }
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white/90 via-slate-50/70 to-white/90 dark:from-slate-800/90 dark:via-slate-700/70 dark:to-slate-800/90 backdrop-blur-sm w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent mb-6 ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto mb-8 rounded-full"></div>
          <p className={`text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {getExperiences().map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", damping: 20 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center">
                {/* Timeline connector */}
                <div className="hidden lg:flex flex-col items-center mr-8">
                  <motion.div 
                    className="w-4 h-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mb-2 shadow-lg"
                    whileHover={{ scale: 1.3, rotate: 180 }}
                    transition={{ type: "spring", damping: 15 }}
                  ></motion.div>
                  {index < getExperiences().length - 1 && (
                    <motion.div 
                      className="w-0.5 h-32 bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 rounded-full"
                      initial={{ height: 0 }}
                      whileInView={{ height: 128 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`bg-gradient-to-br from-slate-50/80 to-white/90 dark:from-slate-800/80 dark:to-slate-700/90 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 flex-1 border border-slate-200 dark:border-slate-600 backdrop-blur-sm ${isRTL ? 'text-right' : ''}`}>
                  <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                    <div className={`flex items-center mb-2 sm:mb-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", damping: 15 }}
                      >
                        <Briefcase className={`w-5 h-5 text-slate-700 dark:text-slate-300 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      </motion.div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                        {exp.title}
                      </h3>
                    </div>
                    <motion.div 
                      className={`flex items-center text-slate-700 dark:text-slate-300 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 px-4 py-2 rounded-xl text-sm font-medium shadow-md ${isRTL ? 'flex-row-reverse' : ''}`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", damping: 15 }}
                    >
                      <Calendar className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                      {exp.period}
                    </motion.div>
                  </div>

                  <div className={`flex items-center mb-4 text-slate-600 dark:text-slate-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={`font-semibold text-slate-800 dark:text-slate-200 ${isRTL ? 'ml-2' : 'mr-2'}`}>{exp.company}</span>
                    <MapPin className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement: string, achievementIndex: number) => (
                          <motion.li 
                            key={achievementIndex} 
                            className="flex items-start group cursor-pointer"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            whileHover={{ x: 5, scale: 1.02 }}
                            transition={{ duration: 0.3, delay: achievementIndex * 0.1, type: "spring", damping: 20 }}
                            viewport={{ once: true }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-150"
                              transition={{ type: "spring", damping: 15 }}
                            ></motion.div>
                            <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteer Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 border border-primary-100 dark:border-primary-800"
        >
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
              <h3 className="text-3xl font-bold font-display text-primary-900 dark:text-primary-100">
                Community Involvement
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Contributing to society through volunteer work and civic engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {volunteerWork.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border dark:border-gray-700"
              >
                <h4 className="font-bold text-gray-800 dark:text-white mb-3 font-display">
                  {work.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {work.description}
                </p>
                <div className="inline-block bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-3 py-1 rounded-full text-sm font-medium">
                  {work.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience