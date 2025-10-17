// Système de stockage des messages de contact en local
// Ce fichier stocke tous les messages reçus depuis le formulaire

export interface ContactMessage {
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
    
    // Informations d'écran et affichage
    screenResolution: string
    screenColorDepth: string | number
    pixelRatio: number
    timezone: string
    
    // Informations de navigation
    referrer: string
    url: string
    origin: string
    
    // Cookies et stockage détaillés
    cookieInfo: {
      rawCookies: string
      parsedCookies: { [key: string]: string }
      cookieCount: number
      cookieNames: string[]
    }
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
    
    // Informations de connexion
    connectionInfo: {
      effectiveType: string
      downlink: string | number
      rtt: string | number
      saveData: boolean
    }
    
    // Capacités du navigateur
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
    
    // Plugins et extensions
    pluginsInfo: {
      pluginCount: number
      plugins: Array<{
        name: string
        description: string
        filename: string
      }>
      javaEnabled: boolean
    }
    
    // Informations supplémentaires
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

// Simuler une base de données en mémoire
let messages: ContactMessage[] = []

// Fonction pour ajouter un nouveau message
export function addMessage(messageData: Omit<ContactMessage, 'id' | 'timestamp' | 'status'>): ContactMessage {
  const newMessage: ContactMessage = {
    id: generateId(),
    ...messageData,
    timestamp: new Date().toISOString(),
    status: 'new'
  }
  
  messages.unshift(newMessage) // Ajouter au début pour avoir les plus récents en premier
  
  // Conserver seulement les 100 derniers messages pour éviter de surcharger la mémoire
  if (messages.length > 100) {
    messages = messages.slice(0, 100)
  }
  
  return newMessage
}

// Fonction pour récupérer tous les messages
export function getAllMessages(): ContactMessage[] {
  return messages
}

// Fonction pour récupérer un message par ID
export function getMessageById(id: string): ContactMessage | undefined {
  return messages.find(msg => msg.id === id)
}

// Fonction pour marquer un message comme lu
export function markAsRead(id: string): boolean {
  const message = messages.find(msg => msg.id === id)
  if (message) {
    message.status = 'read'
    return true
  }
  return false
}

// Fonction pour marquer un message comme répondu
export function markAsReplied(id: string): boolean {
  const message = messages.find(msg => msg.id === id)
  if (message) {
    message.status = 'replied'
    return true
  }
  return false
}

// Fonction pour supprimer un message
export function deleteMessage(id: string): boolean {
  const index = messages.findIndex(msg => msg.id === id)
  if (index !== -1) {
    messages.splice(index, 1)
    return true
  }
  return false
}

// Fonction pour obtenir les statistiques
export function getStats() {
  return {
    total: messages.length,
    new: messages.filter(msg => msg.status === 'new').length,
    read: messages.filter(msg => msg.status === 'read').length,
    replied: messages.filter(msg => msg.status === 'replied').length
  }
}

// Fonction pour générer un ID unique
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9)
}

// Fonction pour exporter les messages (utile pour backup)
export function exportMessages(): string {
  return JSON.stringify(messages, null, 2)
}

// Fonction pour importer des messages (utile pour restore)
export function importMessages(data: string): boolean {
  try {
    const importedMessages = JSON.parse(data)
    if (Array.isArray(importedMessages)) {
      messages = importedMessages
      return true
    }
    return false
  } catch {
    return false
  }
}