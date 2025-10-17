import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Messages - Portfolio Sohaib Laarichi',
  description: 'Interface d\'administration pour gérer les messages de contact',
  robots: 'noindex, nofollow' // Empêcher l'indexation par les moteurs de recherche
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {children}
    </div>
  )
}