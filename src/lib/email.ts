import nodemailer from 'nodemailer'

// Configuration du transporteur email
export const createEmailTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || '9iloxm9lx@gmail.com',
      pass: process.env.EMAIL_PASS || '', // Mot de passe d'application Gmail
    },
  })
}

// Configuration par défaut des emails
export const emailConfig = {
  from: process.env.EMAIL_FROM || '9iloxm9lx@gmail.com',
  to: process.env.EMAIL_TO || '9iloxm9lx@gmail.com',
}

export interface ContactEmailData {
  name: string
  email: string
  subject: string
  message: string
}

export const sendContactEmail = async (data: ContactEmailData) => {
  // Vérifier que les credentials sont configurés
  if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS.trim() === '') {
    throw new Error('EMAIL_PASS not configured. Please set up Gmail App Password.')
  }

  const transporter = createEmailTransporter()
  
  // Vérifier la connexion Gmail
  await transporter.verify()
  
  const mailOptions = {
    from: process.env.EMAIL_USER || '9iloxm9lx@gmail.com',
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
    text: `
      Nouveau message de contact depuis votre portfolio
      
      Nom: ${data.name}
      Email: ${data.email}
      Sujet: ${data.subject}
      
      Message:
      ${data.message}
      
      Envoyé le: ${new Date().toLocaleString('fr-FR')}
    `,
  }

  await transporter.sendMail(mailOptions)
}