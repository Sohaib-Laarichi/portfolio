// Script de test pour vérifier l'accès admin avec le nouveau mot de passe
const testAdminAccess = async () => {
  const SECRET = 'Dark:911'
  
  console.log('🔐 Test d\'accès à la page admin...')
  console.log('=====================================')
  console.log(`🔑 Nouveau mot de passe: ${SECRET}`)
  
  try {
    // Test de l'API messages avec le nouveau secret
    const response = await fetch(`http://localhost:3000/api/messages?secret=${SECRET}`)
    
    if (response.ok) {
      const data = await response.json()
      console.log('✅ Accès admin réussi!')
      console.log(`📧 Nombre de messages: ${data.total}`)
      console.log(`📊 Statistiques:`)
      console.log(`   - Nouveaux: ${data.stats.new}`)
      console.log(`   - Lus: ${data.stats.read}`)
      console.log(`   - Répondus: ${data.stats.replied}`)
      console.log('')
      console.log('🎯 Page admin accessible sur: http://localhost:3000/admin/messages')
      console.log('🔑 Code secret: Dark:911')
    } else {
      console.log('❌ Erreur d\'accès:', response.status)
      if (response.status === 401) {
        console.log('🔐 Mot de passe incorrect ou non autorisé')
      }
    }
  } catch (error) {
    console.log('❌ Erreur de connexion:', error.message)
    console.log('💡 Assurez-vous que le serveur fonctionne sur http://localhost:3000')
  }
}

// Exécuter le test si appelé directement
if (typeof window === 'undefined') {
  testAdminAccess().catch(console.error)
}

module.exports = { testAdminAccess }