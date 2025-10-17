import { Resend } from 'resend'

// Configuration Resend (alternative plus simple)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

// Version avec Resend (plus simple à configurer)
export const sendContactEmailWithResend = async (data: ContactEmailData) => {
  if (!resend) {
    throw new Error('Resend API key not configured')
  }
  
  try {
    await resend.emails.send({
      from: 'portfolio@yourdomain.com', // Vous devrez configurer un domaine avec Resend
      to: '9iloxm9lx@gmail.com',
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e5e9; border-radius: 8px;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Nouveau message de contact depuis votre portfolio</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #334155;">Informations de contact</h3>
            <p style="margin: 5px 0;"><strong>Nom:</strong> ${data.name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 5px 0;"><strong>Sujet:</strong> ${data.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 6px;">
            <h3 style="margin: 0 0 15px 0; color: #334155;">Message</h3>
            <p style="line-height: 1.6; color: #475569; white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>Ce message a été envoyé depuis votre portfolio le ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
    })
  } catch (error) {
    console.error('Erreur Resend:', error)
    throw error
  }
}

// Version de test sans vrai envoi d'email (pour développement)
export const sendContactEmailMock = async (data: ContactEmailData) => {
  console.log('📧 [MODE TEST] Email qui serait envoyé:')
  console.log('De:', data.email)
  console.log('À: 9iloxm9lx@gmail.com')
  console.log('Sujet:', `Portfolio Contact: ${data.subject}`)
  console.log('Message:')
  console.log('---')
  console.log(`Nom: ${data.name}`)
  console.log(`Email: ${data.email}`)
  console.log(`Sujet: ${data.subject}`)
  console.log(`Message: ${data.message}`)
  console.log('---')
  console.log('✅ Email simulé envoyé avec succès!')
}