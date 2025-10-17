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
  title: 'Sohaib Laarichi - Network & Software Engineer | Portfolio Professionnel',
  description: 'Portfolio professionnel de Sohaib Laarichi, Ingénieur Réseau et Développeur Full-Stack. Spécialiste en sécurité réseau, architecture système et développement web moderne. Expert Java, Spring Boot, Next.js.',
  keywords: [
    'Sohaib Laarichi',
    'Sohaib',
    'Laarichi', 
    'SohaibLaarichi',
    'Network Engineer',
    'Software Engineer',
    'Ingénieur Réseau',
    'Développeur Full Stack',
    'Computer Engineering',
    'Network Security',
    'Cisco',
    'Java Developer',
    'Spring Boot',
    'Next.js',
    'React',
    'TypeScript',
    'Systems Administration',
    'Network Architecture',
    'Cybersecurity',
    'Web Development',
    'Mobile Development',
    'Android',
    'Kotlin',
    'MySQL',
    'MongoDB',
    'Portfolio',
    'Morocco',
    'Maroc',
    'EMSI',
    'Freelance Developer',
    'Backend Developer',
    'Frontend Developer'
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
    title: 'Sohaib Laarichi - Network & Software Engineer Portfolio',
    description: 'Portfolio professionnel de Sohaib Laarichi, spécialiste en ingénierie réseau et développement logiciel. Découvrez mes projets et compétences techniques.',
    url: 'https://sohaib-laarichi.vercel.app',
    siteName: 'Sohaib Laarichi Portfolio',
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: ['en_US', 'ar_SA'],
    images: [
      {
        url: '/images/me.png',
        width: 1200,
        height: 630,
        alt: 'Sohaib Laarichi - Network & Software Engineer',
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
    canonical: 'https://sohaib-laarichi.vercel.app',
    languages: {
      'fr-FR': 'https://sohaib-laarichi.vercel.app/fr',
      'en-US': 'https://sohaib-laarichi.vercel.app/en',
      'ar-SA': 'https://sohaib-laarichi.vercel.app/ar',
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