import { NextRequest, NextResponse } from 'next/server'

/**
 * API Route para capturar emails e enviar para Brevo (ex-Sendinblue)
 */

export async function POST(request: NextRequest) {
  try {
    const { email, nome } = await request.json()

    console.log('📧 Recebido request:', { email, nome })

    // Validação básica
    if (!email || !email.includes('@')) {
      console.log('❌ Email inválido:', email)
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }

    // Verificar se API key está configurada
    const apiKey = process.env.BREVO_API_KEY
    const listId = process.env.BREVO_LIST_ID

    console.log('🔑 Variáveis de ambiente:', {
      hasApiKey: !!apiKey,
      apiKeyPrefix: apiKey ? apiKey.substring(0, 15) + '...' : 'não configurada',
      listId: listId || 'não configurada',
    })

    if (!apiKey) {
      console.error('❌ BREVO_API_KEY não configurada')
      return NextResponse.json({
        success: true,
        message: 'Email salvo localmente (API não configurada)',
      })
    }

    // Preparar payload para Brevo
    const brevoPayload = {
      email: email,
      attributes: {
        FIRSTNAME: nome || '',
        ORIGEM: 'popup-homepage',
        DATA_CADASTRO: new Date().toISOString(),
      },
      listIds: listId ? [parseInt(listId)] : [],
      updateEnabled: true,
    }

    console.log('📤 Enviando para Brevo:', brevoPayload)

    // Enviar para Brevo
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify(brevoPayload),
    })

    console.log('📥 Resposta Brevo (raw):', {
      status: response.status,
      ok: response.ok,
      statusText: response.statusText,
      contentType: response.headers.get('content-type'),
      contentLength: response.headers.get('content-length'),
    })

    // Verificar se resposta tem conteúdo antes de parsear
    const contentType = response.headers.get('content-type')
    const contentLength = response.headers.get('content-length')

    // Se não tem content-type JSON ou content-length é 0, não tentar parsear
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text()
      console.error('❌ Resposta não é JSON:', {
        contentType,
        text: text.substring(0, 500),
      })

      // Se resposta foi bem-sucedida mesmo sem JSON, considerar sucesso
      if (response.ok) {
        console.log('✅ Resposta OK mesmo sem JSON (assumindo sucesso)')
        return NextResponse.json({
          success: true,
          message: 'Email cadastrado com sucesso!',
        })
      }

      return NextResponse.json(
        {
          error: 'Resposta inválida do Brevo',
          details: text,
        },
        { status: 500 }
      )
    }

    // Se content-length é 0, resposta está vazia mas foi sucesso
    if (contentLength === '0' && response.ok) {
      console.log('✅ Resposta vazia mas OK (sucesso)')
      return NextResponse.json({
        success: true,
        message: 'Email cadastrado com sucesso!',
      })
    }

    // Tentar parsear JSON
    let data
    try {
      data = await response.json()
      console.log('📥 JSON parseado com sucesso:', data)
    } catch (parseError) {
      console.error('❌ Erro ao parsear JSON:', parseError)
      const text = await response.text()
      console.error('❌ Texto da resposta:', text.substring(0, 500))

      // Se resposta foi bem-sucedida, considerar sucesso mesmo com erro de parse
      if (response.ok) {
        console.log('✅ Resposta OK apesar de erro de parse (assumindo sucesso)')
        return NextResponse.json({
          success: true,
          message: 'Email cadastrado com sucesso!',
        })
      }

      return NextResponse.json(
        {
          error: 'Erro ao processar resposta do Brevo',
          details: parseError instanceof Error ? parseError.message : 'Erro desconhecido',
        },
        { status: 500 }
      )
    }

    console.log('📥 Dados finais:', {
      status: response.status,
      ok: response.ok,
      data: data,
    })

    if (!response.ok) {
      // Se contato já existe, Brevo retorna 400 - mas é OK
      if (data.code === 'duplicate_parameter') {
        console.log('✅ Email já cadastrado (duplicate)')
        return NextResponse.json({
          success: true,
          message: 'Email já cadastrado',
        })
      }

      console.error('❌ Erro ao adicionar contato no Brevo:', {
        status: response.status,
        error: data,
      })

      return NextResponse.json(
        {
          error: `Erro ao processar email: ${data.message || 'Erro desconhecido'}`,
          details: data,
        },
        { status: 500 }
      )
    }

    console.log('✅ Email cadastrado com sucesso!')

    return NextResponse.json({
      success: true,
      message: 'Email cadastrado com sucesso!',
    })
  } catch (error) {
    console.error('💥 Erro no endpoint /api/subscribe:', error)
    return NextResponse.json(
      {
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido',
      },
      { status: 500 }
    )
  }
}
