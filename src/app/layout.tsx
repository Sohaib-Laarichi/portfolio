import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { I18nProvider } from '@/components/I18nProvider'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Sohaib Laarichi - Ingénieur Réseau & Développeur Maroc | Portfolio Professionnel',
  description: 'Portfolio de Sohaib Laarichi, Ingénieur Réseau et Développeur Full-Stack au Maroc. Étudiant EMSI Marrakech, spécialiste sécurité réseau Cisco, développement Java Spring Boot, Next.js. Services informatiques professionnels au Maroc.',
  keywords: [
    // Nom et variations principales
    'Sohaib Laarichi',
    'Sohaib Laarichi Maroc',
    'Sohaib Laarichi Morocco',
    'Sohaib',
    'Laarichi', 
    'SohaibLaarichi',
    'صهيب لعريشي',
    'صهيب لعريشي المغرب',
    
    // Professions avec géolocalisation
    'Ingénieur Réseau Maroc',
    'Network Engineer Morocco',
    'Développeur Full Stack Maroc',
    'Software Engineer Morocco',
    'Informaticien Maroc',
    'IT Specialist Morocco',
    
    // Villes marocaines
    'Ingénieur Réseau Marrakech',
    'Développeur Casablanca',
    'IT Rabat',
    'Network Engineer Marrakech',
    'Software Developer Casablanca',
    'Freelancer Morocco',
    'Freelance Maroc',
    
    // Éducation et institutions
    'EMSI Marrakech',
    'EMSI Morocco',
    'École Marocaine Sciences Ingénieur',
    'UPM Marrakech',
    'Université Privée Marrakech',
    'Étudiant Ingénieur Maroc',
    'Computer Engineering Morocco',
    
    // Technologies avec localisation
    'Cisco Morocco',
    'Java Developer Morocco',
    'Spring Boot Maroc',
    'Next.js Developer Morocco',
    'React Developer Maroc',
    'Android Developer Morocco',
    'TypeScript Morocco',
    
    // Services et spécialisations
    'Sécurité Réseau Maroc',
    'Network Security Morocco',
    'Administration Système Maroc',
    'Systems Administrator Morocco',
    'Cybersécurité Maroc',
    'Cybersecurity Morocco',
    'Infrastructure Réseau Maroc',
    'Network Infrastructure Morocco',
    
    // Développement web et mobile
    'Développement Web Maroc',
    'Web Development Morocco',
    'Développement Mobile Maroc',
    'Mobile App Development Morocco',
    'Site Web Maroc',
    'Website Morocco',
    
    // Secteur freelance et services
    'Freelance IT Maroc',
    'Consultant Informatique Maroc',
    'Services Informatiques Maroc',
    'IT Services Morocco',
    'Développeur Indépendant Maroc',
    'Independent Developer Morocco',
    
    // Termes généraux
    'Portfolio',
    'CV Informatique',
    'Projets IT',
    'Morocco Tech',
    'Maroc Technologie',
    'Digital Morocco',
    'Numérique Maroc'
  ].join(', '),
  authors: [{ 
    name: 'Sohaib Laarichi',
    url: 'https://github.com/Sohaib-Laarichi'
  }],
  creator: 'Sohaib Laarichi',
  publisher: 'Sohaib Laarichi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Sohaib Laarichi - Ingénieur Réseau & Développeur Maroc | Portfolio',
    description: 'Portfolio de Sohaib Laarichi, Ingénieur Réseau et Développeur Full-Stack au Maroc. Étudiant EMSI Marrakech, expert Cisco, Java, Spring Boot. Services IT professionnels Morocco.',
    url: 'https://sohaib-laarichi.netlify.app',
    siteName: 'Sohaib Laarichi Portfolio Morocco',
    type: 'website',
    locale: 'fr_MA',
    alternateLocale: ['en_US', 'ar_MA', 'fr_FR'],
    countryName: 'Morocco',
    images: [
      {
        url: '/images/me.png',
        width: 1200,
        height: 630,
        alt: 'Sohaib Laarichi - Ingénieur Réseau Maroc, Développeur Full-Stack Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sohaib Laarichi - Network & Software Engineer',
    description: 'Portfolio professionnel de Sohaib Laarichi, ingénieur réseau et développeur full-stack.',
    images: ['/images/me.png'],
    creator: '@SohaibLaarichi',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://sohaib-laarichi.netlify.app',
    languages: {
      'fr-FR': 'https://sohaib-laarichi.netlify.app/fr',
      'en-US': 'https://sohaib-laarichi.netlify.app/en',
      'ar-SA': 'https://sohaib-laarichi.netlify.app/ar',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' }
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased`}>
        <I18nProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={true}
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}