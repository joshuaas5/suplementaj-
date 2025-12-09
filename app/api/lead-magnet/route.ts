import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * API Route para capturar leads do Popup
 * 
 * Aceita EMAIL ou TELEFONE para facilitar conversão
 * SALVA em arquivo JSON local para remarketing posterior
 * 
 * Integração futura:
 * - Mailchimp (https://mailchimp.com/developer/)
 * - ConvertKit (https://developers.convertkit.com/)
 * - WhatsApp Business API (para telefones)
 * - Banco de dados (Prisma/Supabase)
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

    // Salvar em arquivo JSON (para remarketing)
    const leadsPath = path.join(process.cwd(), 'data', 'leads.json');
    
    let leads = [];
    if (fs.existsSync(leadsPath)) {
      const existingData = fs.readFileSync(leadsPath, 'utf-8');
      leads = JSON.parse(existingData);
    }

    leads.push(leadData);
    fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2));

    console.log(`[LEAD CAPTURADO] ${contactType}: ${contact} | Total leads: ${leads.length}`);

    // TODO: Integração futura com email marketing/WhatsApp
    // if (contactType === 'email') {
    //   await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
    //     email_address: contact,
    //     status: 'subscribed',
    //     tags: [leadMagnet],
    //   });
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
