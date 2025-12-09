import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route para capturar leads do Exit Intent Popup
 * 
 * Integração futura:
 * - Mailchimp (https://mailchimp.com/developer/)
 * - ConvertKit (https://developers.convertkit.com/)
 * - ActiveCampaign (https://developers.activecampaign.com/)
 * - Google Sheets (simples, mas funcional)
 */

export async function POST(request: NextRequest) {
  try {
    const { email, leadMagnet } = await request.json();

    // Validação básica
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // TODO: Integrar com serviço de email marketing
    // Exemplo Mailchimp:
    // const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    // const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    // 
    // await fetch(`https://${datacenter}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email_address: email,
    //     status: 'subscribed',
    //     tags: [leadMagnet],
    //     merge_fields: {
    //       LEAD_SOURCE: 'exit_intent',
    //       LEAD_MAGNET: leadMagnet,
    //     }
    //   }),
    // });

    // Por enquanto: salvar em arquivo/database (implementação simples)
    console.log(`[LEAD CAPTURADO] Email: ${email} | Lead Magnet: ${leadMagnet}`);

    // Salvar em banco de dados local (opcional - adicionar Prisma/MongoDB depois)
    // await db.leads.create({
    //   data: {
    //     email,
    //     leadMagnet,
    //     source: 'exit_intent',
    //     createdAt: new Date(),
    //   }
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
