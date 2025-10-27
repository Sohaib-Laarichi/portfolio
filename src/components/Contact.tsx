'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, MessageCircle, Facebook, Instagram } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Fonction avancée pour capturer TOUS les cookies et informations disponibles
  const getBrowserInfo = () => {
    // Fonction pour parser tous les cookies individuellement
    const getAllCookies = () => {
      const cookies: { [key: string]: string } = {}
      const cookieString = document.cookie
      
      if (cookieString && cookieString !== '') {
        cookieString.split(';').forEach(cookie => {
          const [name, value] = cookie.trim().split('=')
          if (name && value) {
            cookies[name] = decodeURIComponent(value)
          }
        })
      }
      
      return {
        rawCookies: cookieString || 'none',
        parsedCookies: cookies,
        cookieCount: Object.keys(cookies).length,
        cookieNames: Object.keys(cookies)
      }
    }

    // Fonction pour capturer les informations de stockage
    const getStorageInfo = () => {
      try {
        return {
          localStorage: {
            available: typeof Storage !== 'undefined',
            itemCount: localStorage.length,
            items: Object.keys(localStorage).reduce((acc: { [key: string]: string }, key) => {
              acc[key] = localStorage.getItem(key) || ''
              return acc
            }, {})
          },
          sessionStorage: {
            available: typeof Storage !== 'undefined',
            itemCount: sessionStorage.length,
            items: Object.keys(sessionStorage).reduce((acc: { [key: string]: string }, key) => {
              acc[key] = sessionStorage.getItem(key) || ''
              return acc
            }, {})
          }
        }
      } catch (e) {
        return {
          localStorage: { available: false, itemCount: 0, items: {} },
          sessionStorage: { available: false, itemCount: 0, items: {} }
        }
      }
    }

    // Fonction pour capturer les informations de connexion
    const getConnectionInfo = () => {
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      
      return {
        effectiveType: connection?.effectiveType || 'unknown',
        downlink: connection?.downlink || 'unknown',
        rtt: connection?.rtt || 'unknown',
        saveData: connection?.saveData || false
      }
    }

    // Fonction pour capturer les permissions et capacités
    const getCapabilities = () => {
      return {
        geolocation: 'geolocation' in navigator,
        camera: 'mediaDevices' in navigator,
        microphone: 'mediaDevices' in navigator,
        notifications: 'Notification' in window,
        serviceWorker: 'serviceWorker' in navigator,
        webGL: !!document.createElement('canvas').getContext('webgl'),
        webRTC: !!(window as any).RTCPeerConnection,
        battery: 'getBattery' in navigator,
        vibration: 'vibrate' in navigator,
        bluetooth: 'bluetooth' in navigator,
        usb: 'usb' in navigator
      }
    }

    // Fonction pour détecter les plugins et extensions
    const getPluginsInfo = () => {
      const plugins = Array.from(navigator.plugins).map(plugin => ({
        name: plugin.name,
        description: plugin.description,
        filename: plugin.filename
      }))

      return {
        pluginCount: navigator.plugins.length,
        plugins: plugins,
        javaEnabled: navigator.javaEnabled ? navigator.javaEnabled() : false
      }
    }

    // Informations complètes du navigateur
    const browserInfo = {
      // Informations de base
      language: navigator.language || 'unknown',
      languages: navigator.languages || [],
      platform: navigator.platform || 'unknown',
      userAgent: navigator.userAgent || 'unknown',
      cookieEnabled: navigator.cookieEnabled || false,
      onLine: navigator.onLine || false,
      
      // Informations d'écran et affichage
      screenResolution: `${screen.width}x${screen.height}`,
      screenColorDepth: screen.colorDepth || 'unknown',
      pixelRatio: window.devicePixelRatio || 1,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
      
      // Informations de navigation
      referrer: document.referrer || 'direct',
      url: window.location.href,
      origin: window.location.origin,
      
      // Cookies et stockage
      cookieInfo: getAllCookies(),
      storageInfo: getStorageInfo(),
      
      // Informations de connexion
      connectionInfo: getConnectionInfo(),
      
      // Capacités du navigateur
      capabilities: getCapabilities(),
      
      // Plugins et extensions
      pluginsInfo: getPluginsInfo(),
      
      // Informations supplémentaires
      hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
      maxTouchPoints: navigator.maxTouchPoints || 0,
      doNotTrack: navigator.doNotTrack || 'unknown',
      
      // Informations de temps
      timestamp: new Date().toISOString(),
      timezoneOffset: new Date().getTimezoneOffset()
    }

    // Détection du type d'appareil
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobile = /mobile|android|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent)
    const isTablet = /tablet|ipad/i.test(userAgent) && !isMobile
    const isDesktop = !isMobile && !isTablet

    const deviceInfo = {
      isMobile,
      isTablet,
      isDesktop,
      deviceType: isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'
    }

    return { browserInfo, deviceInfo }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Capturer les informations du navigateur et de l'appareil
      const { browserInfo, deviceInfo } = getBrowserInfo()
      
      // Préparer les données à envoyer
      const submissionData = {
        ...formData,
        browserInfo,
        deviceInfo
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Reset success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        const errorData = await response.json()
        console.error('Form submission error:', errorData)
        // Handle error (you could add error state here)
      }
    } catch (error) {
      console.error('Network error:', error)
      // Handle network error
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sohaiblaarichi112@gmail.com",
      link: "mailto:sohaiblaarichi112@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "07.01.82.01.01",
      link: "tel:+212701820101"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "07.01.82.01.01",
      link: "https://wa.me/212701820101"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Marrakech, Morocco",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/laarichi-sohaib",
      color: "hover:bg-blue-600"
    },
    {
      icon: Github,
      name: "GitHub", 
      url: "https://github.com/Sohaib-Laarichi",
      color: "hover:bg-gray-800"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/212701820101",
      color: "hover:bg-green-600"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/sohaib.laarichi.2025",
      color: "hover:bg-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/sohaib_ls_/",
      color: "hover:bg-pink-600"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:sohaiblaarichi112@gmail.com",
      color: "hover:bg-red-600"
    }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white/90 via-slate-50/70 to-white/90 dark:from-slate-800/90 dark:via-slate-700/70 dark:to-slate-800/90 backdrop-blur-sm w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", damping: 20 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 dark:from-slate-200 dark:via-slate-100 dark:to-slate-200 bg-clip-text text-transparent mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50/80 to-white/90 dark:from-slate-800/80 dark:to-slate-700/90 rounded-2xl p-8 border border-slate-200 dark:border-slate-600 shadow-xl backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              {t('contact.cta')}
            </h3>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center"
              >
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" />
                <span className="text-green-700 dark:text-green-300 font-medium">
                  {t('contact.form.success')}
                </span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.subject')} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t('contact.form.sending')}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    {t('contact.form.send')}
                  </div>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold font-display text-gray-800 dark:text-white mb-6">
                {t('contact.info.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('contact.info.subtitle')}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const content = (
                  <div className="flex items-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800 hover:shadow-md transition-all duration-300">
                    <div className="bg-primary-600 dark:bg-primary-700 p-3 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white font-display">
                        {info.label}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    </div>
                  </div>
                )

                return info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    className="block hover:transform hover:scale-105 transition-transform duration-200"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold font-display text-gray-800 dark:text-white mb-4">
                {t('contact.social.title')}
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-gray-800 dark:bg-gray-700 text-white rounded-xl transition-all duration-300 hover:transform hover:scale-110 ${social.color} shadow-lg hover:shadow-xl`}
                      title={social.name}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl p-6 border border-primary-200 dark:border-primary-700">
              <h4 className="font-bold text-primary-900 dark:text-primary-100 mb-3 font-display">
                Current Availability
              </h4>
              <p className="text-primary-700 dark:text-primary-300 text-sm leading-relaxed">
                <strong>Open for opportunities:</strong> Internships, part-time projects, 
                and collaboration on innovative technology solutions. Available for 
                immediate start on exciting projects.
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-medium text-primary-800 dark:text-primary-200">
                  Available for new projects
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact