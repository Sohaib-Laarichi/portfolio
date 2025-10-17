// Script de test pour vérifier la configuration email
// Exécutez: node test-email.js

const nodemailer = require('nodemailer')
require('dotenv').config({ path: '.env.local' })

async function testEmailConfig() {
  try {
    console.log('🧪 Test de la configuration email...\n')
    
    // Vérifier les variables d'environnement
    console.log('📧 Variables d\'environnement:')
    console.log('EMAIL_USER:', process.env.EMAIL_USER || 'NON DÉFINIE')
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***DÉFINIE***' : 'NON DÉFINIE')
    console.log('')

    if (!process.env.EMAIL_PASS) {
      console.log('❌ EMAIL_PASS n\'est pas définie dans .env.local')
      console.log('   Suivez les instructions dans EMAIL_SETUP.md pour configurer Gmail')
      return
    }

    // Créer le transporteur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || '9iloxm9lx@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    })

    // Vérifier la connexion
    console.log('🔐 Test de la connexion Gmail...')
    await transporter.verify()
    console.log('✅ Connexion Gmail réussie !')
    console.log('')

    // Envoyer un email de test (optionnel - décommentez les lignes ci-dessous)
    /*
    console.log('📩 Envoi d\'un email de test...')
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: '9iloxm9lx@gmail.com',
      subject: 'Test - Configuration Portfolio Email',
      text: 'Ceci est un test pour vérifier que les emails fonctionnent correctement depuis votre portfolio.',
      html: '<h2>Test réussi !</h2><p>Les emails depuis votre portfolio fonctionnent correctement.</p>'
    })
    console.log('✅ Email de test envoyé !')
    */
    
    console.log('🎉 Configuration email prête pour votre portfolio !')
    
  } catch (error) {
    console.error('❌ Erreur lors du test:', error.message)
    
    if (error.message.includes('Invalid login')) {
      console.log('\n🔧 Solutions possibles:')
      console.log('1. Vérifiez que l\'authentification à 2 facteurs est activée sur Gmail')
      console.log('2. Utilisez un mot de passe d\'application (pas votre mot de passe Gmail)')
      console.log('3. Vérifiez l\'adresse email dans EMAIL_USER')
    }
  }
}

testEmailConfig()