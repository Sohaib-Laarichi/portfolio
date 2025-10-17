'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Eye, 
  Reply, 
  Trash2, 
  Download, 
  RefreshCw, 
  Clock, 
  User, 
  AtSign,
  MessageSquare,
  BarChart3,
  Lock,
  Unlock,
  Smartphone,
  Tablet,
  Monitor,
  Globe,
  MapPin,
  Cookie,
  Wifi,
  Shield,
  Database,
  Settings,
  Camera,
  Mic,
  Bell,
  Bluetooth,
  Cpu,
  HardDrive
} from 'lucide-react'

interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  timestamp: string
  status: 'new' | 'read' | 'replied'
  ip?: string
  userAgent?: string
  browserInfo?: {
    // Informations de base
    language: string
    languages: string[]
    platform: string
    userAgent: string
    cookieEnabled: boolean
    onLine: boolean
    
    // Informations d'écran
    screenResolution: string
    screenColorDepth: string | number
    pixelRatio: number
    timezone: string
    
    // Navigation
    referrer: string
    url: string
    origin: string
    
    // Cookies détaillés
    cookieInfo: {
      rawCookies: string
      parsedCookies: { [key: string]: string }
      cookieCount: number
      cookieNames: string[]
    }
    
    // Stockage
    storageInfo: {
      localStorage: {
        available: boolean
        itemCount: number
        items: { [key: string]: string }
      }
      sessionStorage: {
        available: boolean
        itemCount: number
        items: { [key: string]: string }
      }
    }
    
    // Connexion
    connectionInfo: {
      effectiveType: string
      downlink: string | number
      rtt: string | number
      saveData: boolean
    }
    
    // Capacités
    capabilities: {
      geolocation: boolean
      camera: boolean
      microphone: boolean
      notifications: boolean
      serviceWorker: boolean
      webGL: boolean
      webRTC: boolean
      battery: boolean
      vibration: boolean
      bluetooth: boolean
      usb: boolean
    }
    
    // Plugins
    pluginsInfo: {
      pluginCount: number
      plugins: Array<{
        name: string
        description: string
        filename: string
      }>
      javaEnabled: boolean
    }
    
    // Divers
    hardwareConcurrency: string | number
    maxTouchPoints: number
    doNotTrack: string
    timestamp: string
    timezoneOffset: number
  }
  deviceInfo?: {
    isMobile: boolean
    isTablet: boolean
    isDesktop: boolean
    deviceType: string
  }
}

interface Stats {
  total: number
  new: number
  read: number
  replied: number
}

export default function AdminMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [stats, setStats] = useState<Stats>({ total: 0, new: 0, read: 0, replied: 0 })
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [secret, setSecret] = useState('')
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null)

  const ADMIN_SECRET = 'Dark:911'

  const authenticate = () => {
    if (secret === ADMIN_SECRET) {
      setAuthenticated(true)
      localStorage.setItem('admin_auth', ADMIN_SECRET)
      fetchMessages()
    } else {
      alert('Code secret incorrect!')
    }
  }

  const fetchMessages = async () => {
    setLoading(true)
    try {
      const response = await fetch(`/api/messages?secret=${ADMIN_SECRET}`)
      if (response.ok) {
        const data = await response.json()
        setMessages(data.messages || [])
        setStats(data.stats || { total: 0, new: 0, read: 0, replied: 0 })
      }
    } catch (error) {
      console.error('Erreur lors du chargement des messages:', error)
    }
    setLoading(false)
  }

  const updateMessageStatus = async (messageId: string, action: string) => {
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ADMIN_SECRET}`
        },
        body: JSON.stringify({ action, messageId })
      })
      
      if (response.ok) {
        fetchMessages() // Recharger les messages
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error)
    }
  }

  const exportMessages = async () => {
    try {
      const response = await fetch(`/api/messages?action=export&secret=${ADMIN_SECRET}`)
      if (response.ok) {
        const data = await response.json()
        const blob = new Blob([data.data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `messages-export-${new Date().toISOString().split('T')[0]}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      }
    } catch (error) {
      console.error('Erreur lors de l\'export:', error)
    }
  }

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('fr-FR')
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      case 'read': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'replied': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'Nouveau'
      case 'read': return 'Lu'
      case 'replied': return 'Répondu'
      default: return status
    }
  }

  const getDeviceIcon = (deviceInfo?: { deviceType: string }) => {
    if (!deviceInfo) return <Monitor className="h-4 w-4" />
    
    switch (deviceInfo.deviceType) {
      case 'Mobile': return <Smartphone className="h-4 w-4" />
      case 'Tablet': return <Tablet className="h-4 w-4" />
      case 'Desktop': return <Monitor className="h-4 w-4" />
      default: return <Monitor className="h-4 w-4" />
    }
  }

  const getDeviceColor = (deviceInfo?: { deviceType: string }) => {
    if (!deviceInfo) return 'text-gray-500'
    
    switch (deviceInfo.deviceType) {
      case 'Mobile': return 'text-blue-500'
      case 'Tablet': return 'text-green-500'
      case 'Desktop': return 'text-purple-500'
      default: return 'text-gray-500'
    }
  }

  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth')
    if (savedAuth === ADMIN_SECRET) {
      setAuthenticated(true)
      fetchMessages()
    }
  }, [])

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-6">
            <Lock className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Zone Admin
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Accès sécurisé aux messages de contact
            </p>
          </div>
          
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Code secret d'administration"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && authenticate()}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={authenticate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
            >
              <Unlock className="inline w-4 h-4 mr-2" />
              Accéder
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Mail className="h-8 w-8 text-blue-600" />
                Messages de Contact
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Gestion des messages reçus depuis le formulaire de contact
              </p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={fetchMessages}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                Actualiser
              </button>
              <button
                onClick={exportMessages}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Exporter
              </button>
            </div>
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <BarChart3 className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Nouveaux</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.new}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Eye className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Lus</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.read}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Reply className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Répondus</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.replied}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Liste des messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
        >
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Messages ({messages.length})
            </h2>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <RefreshCw className="h-8 w-8 animate-spin mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-300">Chargement des messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="p-8 text-center">
              <Mail className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-300">Aucun message reçu pour le moment</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                          {getStatusText(message.status)}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatDate(message.timestamp)}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                        {message.subject}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-2">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {message.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <AtSign className="h-3 w-3" />
                          {message.email}
                        </span>
                        <span className={`flex items-center gap-1 ${getDeviceColor(message.deviceInfo)}`}>
                          {getDeviceIcon(message.deviceInfo)}
                          {message.deviceInfo?.deviceType || 'Unknown'}
                        </span>
                        {message.browserInfo?.language && (
                          <span className="flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            {message.browserInfo.language}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 line-clamp-2">
                        {message.message}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedMessage(message)}
                        className="bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                      >
                        <Eye className="h-3 w-3" />
                        Voir
                      </button>
                      
                      {message.status === 'new' && (
                        <button
                          onClick={() => updateMessageStatus(message.id, 'markAsRead')}
                          className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                        >
                          <Eye className="h-3 w-3" />
                          Marquer lu
                        </button>
                      )}
                      
                      {message.status !== 'replied' && (
                        <button
                          onClick={() => updateMessageStatus(message.id, 'markAsReplied')}
                          className="bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                        >
                          <Reply className="h-3 w-3" />
                          Marquer répondu
                        </button>
                      )}
                      
                      <button
                        onClick={() => {
                          if (confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) {
                            updateMessageStatus(message.id, 'delete')
                          }
                        }}
                        className="bg-red-100 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded-lg text-sm flex items-center gap-1"
                      >
                        <Trash2 className="h-3 w-3" />
                        Supprimer
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Modal de détail du message */}
        {selectedMessage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Détails du message
                  </h2>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Nom</label>
                      <p className="text-gray-900 dark:text-white">{selectedMessage.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Email</label>
                      <p className="text-gray-900 dark:text-white">{selectedMessage.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Date</label>
                      <p className="text-gray-900 dark:text-white">{formatDate(selectedMessage.timestamp)}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Statut</label>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedMessage.status)}`}>
                        {getStatusText(selectedMessage.status)}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Sujet</label>
                    <p className="text-gray-900 dark:text-white font-medium">{selectedMessage.subject}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-400">Message</label>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mt-1">
                      <p className="text-gray-900 dark:text-white whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                  </div>
                  
                  {/* Informations techniques détaillées */}
                  <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Informations techniques complètes</h4>
                    
                    {/* Section Cookies */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mb-4">
                      <h5 className="text-sm font-medium text-yellow-800 dark:text-yellow-200 mb-3 flex items-center gap-2">
                        <Cookie className="h-4 w-4" />
                        Cookies & Stockage ({selectedMessage.browserInfo?.cookieInfo?.cookieCount || 0} cookies)
                      </h5>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="font-medium text-yellow-700 dark:text-yellow-300 mb-2">Cookies présents:</p>
                          {selectedMessage.browserInfo?.cookieInfo?.parsedCookies && Object.keys(selectedMessage.browserInfo.cookieInfo.parsedCookies).length > 0 ? (
                            <div className="space-y-1 max-h-32 overflow-y-auto">
                              {Object.entries(selectedMessage.browserInfo.cookieInfo.parsedCookies).map(([name, value]) => (
                                <div key={name} className="bg-yellow-100 dark:bg-yellow-800/30 rounded px-2 py-1">
                                  <strong>{name}:</strong> {value.substring(0, 50)}{value.length > 50 ? '...' : ''}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-yellow-600 dark:text-yellow-400">Aucun cookie trouvé</p>
                          )}
                        </div>
                        
                        <div>
                          <p className="font-medium text-yellow-700 dark:text-yellow-300 mb-2">Stockage Local:</p>
                          <div className="space-y-1">
                            <p><strong>LocalStorage:</strong> {selectedMessage.browserInfo?.storageInfo?.localStorage?.available ? `${selectedMessage.browserInfo.storageInfo.localStorage.itemCount} éléments` : 'Non disponible'}</p>
                            <p><strong>SessionStorage:</strong> {selectedMessage.browserInfo?.storageInfo?.sessionStorage?.available ? `${selectedMessage.browserInfo.storageInfo.sessionStorage.itemCount} éléments` : 'Non disponible'}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section Capacités & Permissions */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-4">
                      <h5 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        Capacités & Permissions du Navigateur
                      </h5>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                        {selectedMessage.browserInfo?.capabilities && Object.entries(selectedMessage.browserInfo.capabilities).map(([capability, available]) => (
                          <div key={capability} className={`flex items-center gap-1 px-2 py-1 rounded ${available ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
                            {capability === 'camera' && <Camera className="h-3 w-3" />}
                            {capability === 'microphone' && <Mic className="h-3 w-3" />}
                            {capability === 'notifications' && <Bell className="h-3 w-3" />}
                            {capability === 'bluetooth' && <Bluetooth className="h-3 w-3" />}
                            {capability === 'geolocation' && <MapPin className="h-3 w-3" />}
                            <span className="capitalize">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Section Réseau & Connexion */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <h5 className="text-sm font-medium text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                          <Wifi className="h-4 w-4" />
                          Connexion Réseau
                        </h5>
                        <div className="text-xs text-green-700 dark:text-green-300 space-y-1">
                          <p><strong>IP:</strong> {selectedMessage.ip || 'Non disponible'}</p>
                          <p><strong>Type de connexion:</strong> {selectedMessage.browserInfo?.connectionInfo?.effectiveType || 'Inconnu'}</p>
                          <p><strong>Bande passante:</strong> {selectedMessage.browserInfo?.connectionInfo?.downlink || 'Inconnue'} Mbps</p>
                          <p><strong>Latence:</strong> {selectedMessage.browserInfo?.connectionInfo?.rtt || 'Inconnue'} ms</p>
                          <p><strong>Mode économie:</strong> {selectedMessage.browserInfo?.connectionInfo?.saveData ? 'Activé' : 'Désactivé'}</p>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                        <h5 className="text-sm font-medium text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
                          <Cpu className="h-4 w-4" />
                          Matériel & Performance
                        </h5>
                        <div className="text-xs text-purple-700 dark:text-purple-300 space-y-1">
                          <p><strong>CPU Cores:</strong> {selectedMessage.browserInfo?.hardwareConcurrency || 'Inconnu'}</p>
                          <p><strong>Écran:</strong> {selectedMessage.browserInfo?.screenResolution || 'Inconnu'}</p>
                          <p><strong>Profondeur couleur:</strong> {selectedMessage.browserInfo?.screenColorDepth || 'Inconnue'} bits</p>
                          <p><strong>Pixel Ratio:</strong> {selectedMessage.browserInfo?.pixelRatio || 'Inconnu'}</p>
                          <p><strong>Points tactiles:</strong> {selectedMessage.browserInfo?.maxTouchPoints || 0}</p>
                        </div>
                      </div>
                    </div>

                    {/* Section Plugins */}
                    {selectedMessage.browserInfo?.pluginsInfo && selectedMessage.browserInfo.pluginsInfo.pluginCount > 0 && (
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-4">
                        <h5 className="text-sm font-medium text-indigo-800 dark:text-indigo-200 mb-3 flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          Plugins Installés ({selectedMessage.browserInfo.pluginsInfo.pluginCount})
                        </h5>
                        <div className="max-h-32 overflow-y-auto text-xs text-indigo-700 dark:text-indigo-300">
                          {selectedMessage.browserInfo.pluginsInfo.plugins.map((plugin, index) => (
                            <div key={index} className="mb-1">
                              <strong>{plugin.name}</strong> - {plugin.description}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* User Agent */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h5 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                        <HardDrive className="h-4 w-4" />
                        User Agent Complet
                      </h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400 break-all font-mono">
                        {selectedMessage.userAgent || selectedMessage.browserInfo?.userAgent || 'Non disponible'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-6">
                  <a
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <Reply className="h-4 w-4" />
                    Répondre par email
                  </a>
                  
                  {selectedMessage.status !== 'replied' && (
                    <button
                      onClick={() => {
                        updateMessageStatus(selectedMessage.id, 'markAsReplied')
                        setSelectedMessage(null)
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Marquer comme répondu
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}