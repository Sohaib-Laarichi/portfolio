import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { addMessage } from '@/lib/messages'

// Fonction pour envoyer un email via Gmail
const sendGmailEmail = async (data: { name: string, email: string, subject: string, message: string }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || '9iloxm9lx@gmail.com',
      pass: process.env.EMAIL_PASS,
    },
  })

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

// Mock function pour simuler l'envoi d'email
const logContactMessage = (data: { name: string, email: string, subject: string, message: string }) => {
  console.log('📧 [CONTACT FORM] Nouveau message reçu:')
  console.log('=====================================')
  console.log(`👤 Nom: ${data.name}`)
  console.log(`📧 Email: ${data.email}`)
  console.log(`📋 Sujet: ${data.subject}`)
  console.log(`💬 Message: ${data.message}`)
  console.log(`⏰ Date: ${new Date().toLocaleString('fr-FR')}`)
  console.log('=====================================')
  console.log('❌ Gmail non configuré - Email non envoyé!')
  console.log('🔧 Pour recevoir les emails, configurez EMAIL_PASS dans .env.local')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, browserInfo, deviceInfo } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Récupérer les informations de la requête
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Log des informations capturées pour debug
    console.log('📊 Informations visiteur capturées:')
    console.log('IP:', ip)
    console.log('User Agent:', userAgent)
    console.log('Navigateur:', browserInfo)
    console.log('Appareil:', deviceInfo)

    // Sauvegarder le message dans notre système de stockage local
    const savedMessage = addMessage({
      name,
      email,
      subject,
      message,
      ip,
      userAgent,
      browserInfo,
      deviceInfo
    })

    console.log('💾 Message sauvegardé avec l\'ID:', savedMessage.id)

    // Essayer d'envoyer l'email si Gmail est configuré
    if (process.env.EMAIL_PASS && process.env.EMAIL_PASS.trim() !== '' && process.env.EMAIL_PASS !== 'YOUR_APP_PASSWORD_HERE') {
      try {
        await sendGmailEmail({ name, email, subject, message })
        console.log('✅ Email envoyé avec succès à 9iloxm9lx@gmail.com')
      } catch (emailError) {
        console.error('❌ Erreur envoi email:', emailError)
        // Continuer même si l'email échoue - le message est déjà sauvegardé
        logContactMessage({ name, email, subject, message })
      }
    } else {
      // Gmail non configuré, juste logger
      logContactMessage({ name, email, subject, message })
    }

    // Simuler un délai de traitement
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json(
      { 
        message: 'Message sent successfully! We will get back to you soon.',
        success: true,
        messageId: savedMessage.id // Optionnel: retourner l'ID pour debug
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}