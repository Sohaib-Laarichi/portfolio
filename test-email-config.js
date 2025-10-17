const nodemailer = require('nodemailer')
require('dotenv').config({ path: '.env.local' })

async function testEmailConfig() {
  console.log('🧪 Test de configuration email Gmail...')
  console.log('=======================================')
  
  // Vérifier les variables d'environnement
  console.log(`📧 EMAIL_USER: ${process.env.EMAIL_USER}`)
  console.log(`🔑 EMAIL_PASS: ${process.env.EMAIL_PASS ? '***configuré***' : '❌ NON CONFIGURÉ'}`)
  
  if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS.trim() === '' || process.env.EMAIL_PASS === 'YOUR_APP_PASSWORD_HERE') {
    console.log('\n❌ ERREUR: EMAIL_PASS non configuré!')
    console.log('📋 Pour configurer Gmail SMTP:')
    console.log('1. Allez sur https://myaccount.google.com/security')
    console.log('2. Activez l\'authentification à 2 facteurs')
    console.log('3. Allez sur https://myaccount.google.com/apppasswords')
    console.log('4. Générez un mot de passe d\'application pour "Mail"')
    console.log('5. Copiez le mot de passe (16 caractères) dans .env.local')
    return
  }

  try {
    // Créer le transporteur
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Vérifier la connexion
    console.log('\n🔄 Test de connexion SMTP...')
    await transporter.verify()
    console.log('✅ Connexion SMTP réussie!')

    // Envoyer un email de test
    console.log('\n📤 Envoi d\'un email de test...')
    const testEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // S'envoyer à soi-même pour le test
      subject: '✅ Test Portfolio - Configuration email réussie',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #22c55e;">🎉 Configuration email réussie!</h2>
          <p>Ce message confirme que votre configuration Gmail SMTP fonctionne correctement.</p>
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3>📋 Détails de configuration:</h3>
            <ul>
              <li><strong>Email:</strong> ${process.env.EMAIL_USER}</li>
              <li><strong>Service:</strong> Gmail SMTP</li>
              <li><strong>Date du test:</strong> ${new Date().toLocaleString('fr-FR')}</li>
            </ul>
          </div>
          <p style="color: #6b7280;">Votre formulaire de contact est maintenant prêt à recevoir des messages!</p>
        </div>
      `,
      text: `Configuration email réussie! Votre formulaire de contact fonctionne correctement. Test effectué le ${new Date().toLocaleString('fr-FR')}`
    }

    const result = await transporter.sendMail(testEmail)
    console.log('✅ Email de test envoyé avec succès!')
    console.log(`📧 ID du message: ${result.messageId}`)
    
    console.log('\n🎉 SUCCÈS: Configuration email complète!')
    console.log('🔥 Votre formulaire de contact est prêt à recevoir des messages.')

  } catch (error) {
    console.log('\n❌ ERREUR de configuration:')
    console.error(error.message)
    
    if (error.code === 'EAUTH') {
      console.log('\n🔧 Solutions possibles:')
      console.log('1. Vérifiez que l\'authentification à 2 facteurs est activée')
      console.log('2. Régénérez un nouveau mot de passe d\'application')
      console.log('3. Vérifiez que vous utilisez le bon mot de passe d\'application (pas votre mot de passe Gmail)')
    }
  }
}

// Exécuter le test
testEmailConfig().catch(console.error)