'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Code, Server, Database, Shield } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Project {
  title: string
  description: string
  technologies: string[]
  category: string
  icon: any
  features: string[]
  githubUrl: string | null
  liveUrl?: string | null
  status: string
  isBackendAndMobile?: boolean
  isFullStack?: boolean
  backendTech?: string[]
  mobileTech?: string[]
  frontendTech?: string[]
  demoLinks?: {
    frontend: string
    backend: string
    documentation: string
  }
}

const Projects = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const projects: Project[] = [
    {
      title: "GeoBus - Bus Tracking System",
      description: "A comprehensive bus tracking system for Marrakech, Morocco, consisting of a Spring Boot backend and Android mobile app. The system provides real-time bus tracking, nearest bus stop finder, and arrival time estimation to improve public transportation experience.",
      technologies: ["Spring Boot", "Android", "Kotlin", "MySQL", "JWT", "Google Maps", "Retrofit"],
      category: "Mobile & Backend Development",
      icon: Code,
      features: [
        "Real-time bus tracking on interactive maps",
        "Nearest bus stop discovery based on user location",
        "Walking time and bus arrival estimation",
        "User authentication with JWT tokens",
        "RESTful API with Spring Boot backend",
        "Android app with MVVM architecture",
        "MySQL database for bus stop and route data",
        "Google Maps integration for visualization"
      ],
      githubUrl: "https://github.com/Sohaib-Laarichi/geobus",
      liveUrl: null,
      status: "Completed",
      isBackendAndMobile: true,
      backendTech: ["Java 17", "Spring Boot 3.1.0", "Spring Security", "Spring Data JPA", "MySQL", "Maven"],
      mobileTech: ["Kotlin", "Android Jetpack", "Retrofit", "OkHttp", "Google Maps", "Navigation Component"]
    },
    {
      title: "Mkhedmin.ma - Moroccan Freelancer Platform",
      description: "A modern, Morocco-first freelancer platform inspired by LinkedIn's depth and Airbnb's crisp filters. Built with Node.js, Express, MongoDB, Next.js, and TypeScript. Features zero-friction discovery for clients and comprehensive profile management for freelancers with Morocco-specific localization.",
      technologies: ["Node.js", "Express", "MongoDB", "Next.js 14", "TypeScript", "Tailwind CSS", "JWT", "React Query"],
      category: "Full-Stack Web Platform",
      icon: Code,
      features: [
        "Zero-friction freelancer discovery without signup required",
        "Advanced search with Morocco-specific filters (cities, MAD currency)",
        "Multi-language support (Arabic RTL, French, English)",
        "Real-time search with autocomplete and indexing",
        "WhatsApp integration for instant communication",
        "Portfolio showcase with projects and testimonials",
        "Lead management and analytics dashboard",
        "SEO optimization with custom slugs and meta descriptions",
        "Mobile-first responsive design",
        "JWT authentication with refresh tokens",
        "Rate limiting and comprehensive security features",
        "Performance optimizations with caching and lazy loading"
      ],
      githubUrl: "https://github.com/Sohaib-Laarichi/mkhademia",
      liveUrl: "https://mkhedmin.ma",
      status: "Completed",
      isFullStack: true,
      backendTech: ["Node.js", "Express.js", "MongoDB", "Mongoose ODM", "JWT", "Joi Validation", "Cloudinary", "Nodemailer"],
      frontendTech: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Query", "Zustand", "React Hook Form", "Framer Motion"],
      demoLinks: {
        frontend: "https://mkhedmin-frontend.vercel.app",
        backend: "https://mkhedmin-api.herokuapp.com/api",
        documentation: "https://mkhedmin-docs.netlify.app"
      }
    },
    {
      title: "PharmaLive",
      description: "A comprehensive pharmacy management web application that streamlines inventory management, prescription processing, and customer relationship management. Built with enterprise-grade architecture for scalability and reliability.",
      technologies: ["Java EE", "MySQL", "Bootstrap", "JSP", "Servlet", "JDBC"],
      category: "Enterprise Application",
      icon: Database,
      features: [
        "Inventory management with low-stock alerts",
        "Prescription processing and validation",
        "Customer database and history tracking",
        "Sales analytics and reporting",
        "Multi-user role management",
        "Automated backup and recovery"
      ],
      githubUrl: "https://github.com/Sohaib-Laarichi/pharmalive",
      liveUrl: null,
      status: "Completed"
    },
    {
      title: "Call Center Desktop Application",
      description: "A robust desktop application for managing call center operations, including call logging, customer data management, and performance analytics. Designed to improve efficiency and track key performance indicators.",
      technologies: ["Java", "MySQL", "JavaFX", "JDBC", "Apache POI"],
      category: "Desktop Application",
      icon: Code,
      features: [
        "Real-time call logging and tracking",
        "Customer information management",
        "Agent performance analytics",
        "Call history and search functionality",
        "Export capabilities to Excel/PDF",
        "Automated report generation"
      ],
      githubUrl: "https://github.com/Sohaib-Laarichi/call-center-app",
      liveUrl: null,
      status: "Completed"
    },
    {
      title: "Gestion Des Réservations Swing",
      description: "A comprehensive reservation management application developed in Java using Swing for the user interface. This desktop application allows users to create, modify, delete, and view existing reservations with an intuitive graphical interface.",
      technologies: ["Java", "Swing", "JDK 8+", "OOP", "Event Handling", "GUI Development"],
      category: "Desktop Application",
      icon: Code,
      features: [
        "Add new reservations with user-friendly forms",
        "Modify existing reservations with real-time updates",
        "Delete reservations with confirmation dialogs",
        "View and browse all reservations in organized lists",
        "Advanced search functionality by date, name, and criteria",
        "Intuitive Swing-based graphical user interface",
        "Data validation and error handling",
        "Object-oriented design with clean architecture"
      ],
      githubUrl: "https://github.com/Sohaib-Laarichi/Gestion-Des-Reservation-Swing",
      liveUrl: null,
      status: "Completed"
    },
    {
      title: "Professional Network Infrastructure",
      description: "Designed and deployed a complete network infrastructure for a 100-user company, including server setup, domain management, and security implementation. This project showcases enterprise-level networking skills.",
      technologies: ["Windows Server", "Active Directory", "DHCP", "DNS", "PowerShell", "Group Policy"],
      category: "Network Infrastructure",
      icon: Server,
      features: [
        "Active Directory domain setup and management",
        "DHCP and DNS server configuration",
        "Group Policy implementation for security",
        "User and computer management",
        "Network monitoring and maintenance scripts",
        "Backup and disaster recovery planning"
      ],
      githubUrl: null,
      liveUrl: null,
      status: "Completed"
    },
    {
      title: "Cisco ISE NAC Solution",
      description: "Implemented a comprehensive Network Access Control (NAC) solution using Cisco Identity Services Engine (ISE) to secure network access, authenticate users, and enforce security policies across the enterprise network.",
      technologies: ["Cisco ISE", "RADIUS", "802.1X", "Network Security", "Policy Management"],
      category: "Network Security",
      icon: Shield,
      features: [
        "802.1X authentication implementation",
        "Dynamic VLAN assignment based on user roles",
        "Guest network access management",
        "Device compliance checking",
        "Security policy enforcement",
        "Real-time monitoring and threat detection"
      ],
      githubUrl: null,
      liveUrl: null,
      status: "Completed"
    }
  ]

  const getCategoryColor = (category: string) => {
    const colors = {
      "Mobile & Backend Development": "bg-indigo-500",
      "Full-Stack Web Platform": "bg-cyan-500",
      "Web Development": "bg-blue-500",
      "Enterprise Application": "bg-green-500",
      "Desktop Application": "bg-purple-500",
      "Network Infrastructure": "bg-orange-500",
      "Network Security": "bg-red-500"
    }
    return colors[category as keyof typeof colors] || "bg-gray-500"
  }

  return (
    <section id="projects" className="py-24 bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-sm w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-primary-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning web development, network infrastructure, and security implementations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-600 group backdrop-blur-sm"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-600 bg-gradient-to-r from-gray-50/50 to-white dark:from-gray-700/50 dark:to-gray-800">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`${getCategoryColor(project.category)} p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white font-display mb-2">
                          {project.title}
                        </h3>
                        <span className="text-sm font-semibold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/40 px-3 py-1.5 rounded-full border border-primary-200 dark:border-primary-700">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          title="View Source Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4 font-display text-lg">Technologies Used</h4>
                    
                    {/* Special layout for GeoBus (Backend + Mobile) */}
                    {project.isBackendAndMobile ? (
                      <div className="space-y-5">
                        {/* Backend Technologies */}
                        <div className="bg-blue-50/50 dark:bg-blue-900/10 rounded-lg p-4">
                          <h5 className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3 flex items-center">
                            <Server className="w-4 h-4 mr-2" />
                            Backend (Spring Boot)
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.backendTech?.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-lg font-medium border border-blue-200 dark:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-all duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Mobile Technologies */}
                        <div className="bg-green-50/50 dark:bg-green-900/10 rounded-lg p-4">
                          <h5 className="text-sm font-medium text-green-600 dark:text-green-400 mb-3 flex items-center">
                            <Code className="w-4 h-4 mr-2" />
                            Mobile (Android)
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.mobileTech?.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm rounded-lg font-medium border border-green-200 dark:border-green-700 hover:bg-green-200 dark:hover:bg-green-800/40 transition-all duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : project.isFullStack ? (
                      /* Special layout for Mkhademia (Full-Stack) */
                      <div className="space-y-5">
                        {/* Backend Technologies */}
                        <div className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-lg p-4">
                          <h5 className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-3 flex items-center">
                            <Server className="w-4 h-4 mr-2" />
                            Backend (Node.js/Express)
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.backendTech?.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-sm rounded-lg font-medium border border-emerald-200 dark:border-emerald-700 hover:bg-emerald-200 dark:hover:bg-emerald-800/40 transition-all duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Frontend Technologies */}
                        <div className="bg-cyan-50/50 dark:bg-cyan-900/10 rounded-lg p-4">
                          <h5 className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-3 flex items-center">
                            <Code className="w-4 h-4 mr-2" />
                            Frontend (Next.js)
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.frontendTech?.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-200 text-sm rounded-lg font-medium border border-cyan-200 dark:border-cyan-700 hover:bg-cyan-200 dark:hover:bg-cyan-800/40 transition-all duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Regular technology display for other projects */
                      <div className="flex flex-wrap gap-2.5">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 text-sm rounded-lg font-medium shadow-sm hover:shadow-md hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-800 dark:hover:to-primary-700 transition-all duration-200 border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-4 font-display text-lg">Key Features</h4>
                    <ul className="space-y-3">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                      {project.features.length > 4 && (
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-primary-600 dark:text-primary-400 font-medium italic">
                            +{project.features.length - 4} more features
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Project Footer */}
                <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Status: <span className="text-green-600 dark:text-green-400 font-semibold">{project.status}</span>
                      </span>
                    </div>
                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                          >
                            <Github className="w-4 h-4" />
                            Code
                          </a>
                        )}
                        
                        {/* Special demo links for full-stack projects */}
                        {project.demoLinks ? (
                          <>
                            <a
                              href={project.demoLinks.frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-200"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Frontend
                            </a>
                            <a
                              href={project.demoLinks.backend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors duration-200"
                            >
                              <Server className="w-4 h-4" />
                              API
                            </a>
                            <a
                              href={project.demoLinks.documentation}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors duration-200"
                            >
                              <Code className="w-4 h-4" />
                              Docs
                            </a>
                          </>
                        ) : project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        ) : null}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 font-display">
              Interested in collaborating?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, innovative projects, and ways to contribute to meaningful technology solutions.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300 shadow-lg"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects