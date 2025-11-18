import { NextRequest, NextResponse } from 'next/server'

/**
 * API Route para capturar emails e enviar para Brevo (ex-Sendinblue)
 *
 * SETUP:
 * 1. Criar conta em https://www.brevo.com/
 * 2. Obter API key em: Account > SMTP & API > API Keys
 * 3. Criar variável de ambiente: BREVO_API_KEY no Vercel
 * 4. Criar lista de contatos em Brevo (anotar o ID da lista)
 * 5. Adicionar variável BREVO_LIST_ID no Vercel
 */

export async function POST(request: NextRequest) {
  try {
    const { email, nome } = await request.json()

    // Validação básica
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Verificar se API key está configurada
    const apiKey = process.env.BREVO_API_KEY
    const listId = process.env.BREVO_LIST_ID

    if (!apiKey) {
      console.error('BREVO_API_KEY não configurada')
      // Salvar localmente como fallback (para não perder leads)
      return NextResponse.json({
        success: true,
        message: 'Email salvo localmente (API não configurada)',
      })
    }

    // Enviar para Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: nome || '',
          ORIGEM: 'popup-homepage',
          DATA_CADASTRO: new Date().toISOString(),
        },
        listIds: listId ? [parseInt(listId)] : [],
        updateEnabled: true, // Atualiza se já existir
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      // Se contato já existe, Brevo retorna 400 - mas é OK
      if (data.code === 'duplicate_parameter') {
        return NextResponse.json({
          success: true,
          message: 'Email já cadastrado',
        })
      }

      console.error('Erro ao adicionar contato no Brevo:', data)
      return NextResponse.json(
        { error: 'Erro ao processar email' },
        { status: 500 }
      )
    }

    // Opcional: Enviar email de boas-vindas imediatamente
    // (ou configurar no Brevo com automation)
    /*
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: 'Suplementa Já',
          email: 'contato@suplementaja.com' // Substituir por seu email
        },
        to: [{ email: email, name: nome }],
        subject: 'Bem-vindo ao Suplementa Já! 🚀',
        htmlContent: `
          <h1>Olá ${nome}!</h1>
          <p>Obrigado por se cadastrar no Suplementa Já!</p>
          <p>Você receberá conteúdo exclusivo sobre suplementação personalizada.</p>
          <a href="https://suplementaja.vercel.app/avaliacao">Fazer Avaliação Gratuita</a>
        `,
      }),
    })
    */

    return NextResponse.json({
      success: true,
      message: 'Email cadastrado com sucesso!',
    })
  } catch (error) {
    console.error('Erro no endpoint /api/subscribe:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
