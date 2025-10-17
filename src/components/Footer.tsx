'use client'

import { Github, Linkedin, Mail, ArrowUp, MessageCircle, Facebook, Instagram, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === 'ar'
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/laarichi-sohaib",
      name: "LinkedIn"
    },
    {
      icon: Github,
      url: "https://github.com/Sohaib-Laarichi",
      name: "GitHub"
    },
    {
      icon: MessageCircle,
      url: "https://wa.me/212701820101",
      name: "WhatsApp"
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/sohaib.laarichi.2025",
      name: "Facebook"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/sohaib_ls_/",
      name: "Instagram"
    },
    {
      icon: Mail,
      url: "mailto:sohaiblaarichi112@gmail.com",
      name: "Email"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900/90 dark:bg-gray-950/90 backdrop-blur-sm text-white py-16 w-full">
      <div className="w-full px-6 lg:px-12 xl:px-16">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold font-display hover:text-primary-400 transition-colors duration-200"
            >
              SOHAIB LAARICHI
            </button>
            <p className="text-gray-400 mt-2 text-sm">
              Network & Software Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-2">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-primary-600 rounded-full transition-all duration-300 transform hover:scale-110"
                  title={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-xs">
              © {currentYear} Sohaib Laarichi
            </p>
            <div className="flex items-center justify-center md:justify-end mt-2 text-gray-400 text-sm">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using Next.js
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center text-gray-500 text-xs">
            <p>
              This portfolio showcases my technical skills and projects. 
              All projects and achievements mentioned are based on real work and experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer