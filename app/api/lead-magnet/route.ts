import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route para capturar leads do Popup
 * 
 * IMPORTANTE: Leads são salvos via Webhook/Database
 * Vercel é read-only, não pode salvar em arquivo
 * 
 * Solução atual: Log + Google Sheets (via Webhook futuro)
 */

export async function POST(request: NextRequest) {
  try {
    const { contact, contactType, leadMagnet } = await request.json();

    // Validação básica
    if (!contact || !contactType) {
      return NextResponse.json(
        { error: 'Contato e tipo são obrigatórios' },
        { status: 400 }
      );
    }

    // Validar formato baseado no tipo
    if (contactType === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(contact)) {
        return NextResponse.json(
          { error: 'Email inválido' },
          { status: 400 }
        );
      }
    } else if (contactType === 'phone') {
      const cleanPhone = contact.replace(/\D/g, '');
      if (cleanPhone.length < 10 || cleanPhone.length > 11) {
        return NextResponse.json(
          { error: 'Telefone inválido (use formato: (11) 99999-9999)' },
          { status: 400 }
        );
      }
    }

    // Criar objeto do lead
    const leadData = {
      id: `LEAD_${Date.now()}`,
      contact,
      contactType,
      leadMagnet,
      source: 'popup',
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
      referer: request.headers.get('referer'),
    };

    // Log detalhado para Vercel Analytics
    console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 NOVO LEAD CAPTURADO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ID: ${leadData.id}
Tipo: ${contactType.toUpperCase()}
Contato: ${contact}
Lead Magnet: ${leadMagnet}
Data/Hora: ${new Date().toLocaleString('pt-BR')}
Origem: ${leadData.referer || 'Direto'}
User Agent: ${leadData.userAgent}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `);

    // TODO: Integrar com Google Sheets para salvar permanentemente
    // Exemplo: https://developers.google.com/sheets/api/guides/values#writing_to_a_single_range
    
    // TODO: Ou usar Airtable (mais fácil):
    // await fetch('https://api.airtable.com/v0/YOUR_BASE/Leads', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ fields: leadData })
    // });

    return NextResponse.json({
      success: true,
      message: 'Lead capturado com sucesso!',
      downloadUrl: `/downloads/${leadMagnet}.pdf`,
    });

  } catch (error) {
    console.error('[LEAD MAGNET ERROR]', error);
    return NextResponse.json(
      { error: 'Erro ao processar lead' },
      { status: 500 }
    );
  }
}
