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
        period: "Summer 2025",
        title: "Summer Intern",
        company: "HA Groupe",
        location: "Marrakech",
        description: "Developed the Mkhademia platform - a comprehensive web platform for Moroccan freelancers. Led the technical implementation using modern web technologies and managed the complete development lifecycle.",
        achievements: [
          "Built full-stack web application using Node.js and Next.js",
          "Implemented user authentication and profile management",
          "Designed and developed MongoDB database architecture",
          "Created responsive user interface with modern design patterns"
        ],
        type: "internship"
      },
      {
        period: "May - June 2023",
        title: "IT Technician (Intern)",
        company: "Phone Dreams",
        location: "Marrakech",
        description: "Gained hands-on experience in IT support and infrastructure management. Responsible for hardware repairs, server configuration, and technical troubleshooting.",
        achievements: [
          "Performed hardware diagnostics and repairs on various devices",
          "Configured and maintained server infrastructure",
          "Provided technical support to end users",
          "Documented repair procedures and maintenance protocols"
        ],
        type: "internship"
      },
      {
        period: "June 2022",
        title: "Technician Assistant (Intern)",
        company: "CHU (University Hospital Center)",
        location: "Marrakech",
        description: "Worked on critical network infrastructure projects in a healthcare environment. Gained experience with enterprise-level networking equipment and protocols.",
        achievements: [
          "Performed structured cabling installation and maintenance",
          "Executed fiber optic splicing and testing procedures",
          "Configured network switches and routing equipment",
          "Assisted in network security implementation"
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
    <section id="experience" className="py-24 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold font-display text-gray-800 dark:text-white mb-6 ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('experience.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className={`text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto ${isRTL ? 'text-right' : 'text-center'}`}>
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          {getExperiences().map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center">
                {/* Timeline connector */}
                <div className="hidden lg:flex flex-col items-center mr-8">
                  <div className="w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full mb-2"></div>
                  {index < getExperiences().length - 1 && (
                    <div className="w-0.5 h-32 bg-primary-200 dark:bg-primary-700"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 border border-gray-100 dark:border-gray-600 ${isRTL ? 'text-right' : ''}`}>
                  <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                    <div className={`flex items-center mb-2 sm:mb-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Briefcase className={`w-5 h-5 text-blue-600 dark:text-blue-400 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white font-display">
                        {exp.title}
                      </h3>
                    </div>
                    <div className={`flex items-center text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full text-sm font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <Calendar className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                      {exp.period}
                    </div>
                  </div>

                  <div className={`flex items-center mb-4 text-gray-600 dark:text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className={`font-semibold text-gray-800 dark:text-white ${isRTL ? 'ml-2' : 'mr-2'}`}>{exp.company}</span>
                    <MapPin className={`w-4 h-4 ${isRTL ? 'ml-1' : 'mr-1'}`} />
                    <span>{exp.location}</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.achievements && exp.achievements.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement: string, achievementIndex: number) => (
                          <li key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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