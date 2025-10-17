import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { I18nProvider } from '@/components/I18nProvider'

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
  title: 'Sohaib Laarichi - Network & Software Engineer',
  description: 'Professional portfolio of Sohaib Laarichi, a Computer Engineering student specializing in network architecture, security, and systems administration.',
  keywords: 'Network Engineer, Software Engineer, Computer Engineering, Network Security, Systems Administration, Full Stack Developer',
  authors: [{ name: 'Sohaib Laarichi' }],
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