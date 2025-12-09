import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route para capturar leads do Popup
 * 
 * Aceita EMAIL ou TELEFONE para facilitar conversão
 * 
 * Integração futura:
 * - Mailchimp (https://mailchimp.com/developer/)
 * - ConvertKit (https://developers.convertkit.com/)
 * - WhatsApp Business API (para telefones)
 * - Google Sheets (simples, mas funcional)
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

    // Log do lead capturado (para análise)
    console.log(`[LEAD CAPTURADO]`, {
      contactType,
      contact,
      leadMagnet,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent'),
    });

    // TODO: Salvar em banco de dados (Prisma/Supabase)
    // await db.leads.create({
    //   data: {
    //     contact,
    //     contactType,
    //     leadMagnet,
    //     source: 'popup',
    //     createdAt: new Date(),
    //   }
    // });

    // TODO: Se for email, adicionar à lista de email marketing
    // if (contactType === 'email') {
    //   await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
    //     email_address: contact,
    //     status: 'subscribed',
    //     tags: [leadMagnet],
    //   });
    // }

    // TODO: Se for telefone, adicionar à lista do WhatsApp Business
    // if (contactType === 'phone') {
    //   await whatsapp.sendWelcomeMessage(contact);
    // }

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
