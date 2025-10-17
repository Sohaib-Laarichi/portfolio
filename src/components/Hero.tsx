'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Typewriter from './Typewriter'
import AnimatedStats from './AnimatedStats'

const Hero = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center bg-transparent relative">
      {/* SEO Keywords cachés pour référencement Maroc */}
      <div className="sr-only">
        <h1>Sohaib Laarichi - Ingénieur Réseau et Développeur Full-Stack Maroc</h1>
        <p>Sohaib Laarichi, Ingénieur Réseau Maroc, Network Engineer Morocco, Développeur Full Stack Marrakech, Software Engineer Casablanca, Informaticien Rabat, IT Specialist Morocco, EMSI Marrakech, Étudiant Ingénieur Maroc, Computer Engineering Morocco, Cisco Maroc, Java Developer Morocco, Spring Boot Maroc, Next.js Developer Morocco, React Developer Maroc, TypeScript Morocco, Android Developer Morocco, Kotlin Maroc, Freelance IT Maroc, Services Informatiques Morocco, Consultant Informatique Maroc, Développeur Web Maroc, Mobile App Developer Morocco, Backend Developer Maroc, Frontend Developer Morocco, Sécurité Réseau Maroc, Network Security Morocco, Administration Système Maroc, Systems Administrator Morocco, Infrastructure Réseau Maroc, Portfolio Maroc, CV Informatique Morocco, Projets IT Maroc, Morocco Tech, Maroc Technologie, صهيب لعريشي, صهيب لعريشي المغرب, مهندس شبكات المغرب, مطور تطبيقات المغرب</p>
        <address>
          Sohaib Laarichi, Ingénieur Réseau, Marrakech, Maroc, Morocco
          EMSI - École Marocaine des Sciences de l&apos;Ingénieur
          Services IT professionnels au Maroc
        </address>
      </div>
      
      <div className="w-full px-6 lg:px-12 xl:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-4"
            >
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                {t('hero.greeting')}
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`text-5xl md:text-7xl lg:text-8xl font-bold font-display text-gray-800 dark:text-white mb-6 drop-shadow-lg ${isRTL ? 'text-right lg:text-right' : 'text-center lg:text-left'}`}
            >
              {isRTL ? t('hero.name') : 'LAARICHI'}
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {isRTL ? '' : 'SOHAIB'}
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8"
            >
              <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 min-h-[3rem] ${isRTL ? 'text-right lg:text-right' : 'text-center lg:text-left'}`}>
                <Typewriter 
                  words={t('hero.titles', { returnObjects: true }) as string[]}
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent font-bold"
                />
              </h2>
              
              <p className={`text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed font-medium ${isRTL ? 'text-right lg:text-right' : 'text-center lg:text-left'}`}>
                {t('hero.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'justify-center lg:justify-end' : 'justify-center lg:justify-start'} mb-8`}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('hero.viewProjects')}
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                {t('hero.contactMe')}
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://www.linkedin.com/in/laarichi-sohaib"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Sohaib-Laarichi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 hover:bg-gray-800 text-gray-800 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/212701820101"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-100 hover:bg-green-600 text-green-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/sohaib.laarichi.2025"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-100 hover:bg-blue-700 text-blue-700 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                title="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/sohaib_ls_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-pink-100 hover:bg-pink-600 text-pink-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:sohaiblaarichi112@gmail.com"
                className="p-3 bg-red-100 hover:bg-red-600 text-red-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 shadow-2xl overflow-hidden border-4 border-white/20">
                <Image
                  src="/images/me.png"
                  alt="Sohaib Laarichi - Professional Photo"
                  width={448}
                  height={448}
                  className="w-full h-full object-cover rounded-full scale-105"
                  priority
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-accent-500 rounded-full shadow-lg opacity-20"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-400 rounded-full shadow-lg opacity-30"
              />
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics */}
        <AnimatedStats />

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="text-sm font-medium mb-2">{t('hero.scrollDown')}</span>
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero