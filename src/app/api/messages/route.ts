import { NextRequest, NextResponse } from 'next/server'
import { getAllMessages, getStats, markAsRead, markAsReplied, deleteMessage, exportMessages } from '@/lib/messages'

// Code secret pour accéder à la page admin (changez-le pour plus de sécurité)
const ADMIN_SECRET = 'Dark:911'

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get('authorization')
  const secretParam = request.nextUrl.searchParams.get('secret')
  
  return authHeader === `Bearer ${ADMIN_SECRET}` || secretParam === ADMIN_SECRET
}

export async function GET(request: NextRequest) {
  // Vérifier l'authentification
  if (!checkAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized access' },
      { status: 401 }
    )
  }

  try {
    const action = request.nextUrl.searchParams.get('action')
    
    switch (action) {
      case 'stats':
        return NextResponse.json(getStats())
      
      case 'export':
        return NextResponse.json({
          data: exportMessages(),
          timestamp: new Date().toISOString()
        })
      
      default:
        const messages = getAllMessages()
        return NextResponse.json({
          messages,
          stats: getStats(),
          total: messages.length
        })
    }
  } catch (error) {
    console.error('Messages API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  // Vérifier l'authentification
  if (!checkAuth(request)) {
    return NextResponse.json(
      { error: 'Unauthorized access' },
      { status: 401 }
    )
  }

  try {
    const body = await request.json()
    const { action, messageId } = body

    switch (action) {
      case 'markAsRead':
        if (!messageId) {
          return NextResponse.json(
            { error: 'Message ID required' },
            { status: 400 }
          )
        }
        const readResult = markAsRead(messageId)
        return NextResponse.json({ success: readResult })

      case 'markAsReplied':
        if (!messageId) {
          return NextResponse.json(
            { error: 'Message ID required' },
            { status: 400 }
          )
        }
        const repliedResult = markAsReplied(messageId)
        return NextResponse.json({ success: repliedResult })

      case 'delete':
        if (!messageId) {
          return NextResponse.json(
            { error: 'Message ID required' },
            { status: 400 }
          )
        }
        const deleteResult = deleteMessage(messageId)
        return NextResponse.json({ success: deleteResult })

      default:
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Messages API POST error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}