import { NextResponse } from 'next/server';

/**
 * API Admin para visualizar leads capturados
 * 
 * NOTA: Vercel é read-only, leads estão nos LOGS
 * 
 * Para ver leads:
 * 1. Vercel Dashboard → Seu Projeto → Logs
 * 2. Filtrar por "NOVO LEAD CAPTURADO"
 * 3. Exportar manualmente para planilha
 * 
 * Solução futura: Integrar com Airtable/Google Sheets
 */

export async function GET() {
  try {
    // Retornar instruções para acessar logs
    return NextResponse.json({
      leads: [],
      stats: {
        total: 0,
        emails: 0,
        phones: 0,
        ultimoLead: null,
      },
      message: 'Leads estão salvos nos LOGS do Vercel',
      instructions: {
        step1: 'Acesse: https://vercel.com/joshuaas5/suplementaj-/logs',
        step2: 'Procure por: "NOVO LEAD CAPTURADO"',
        step3: 'Copie os dados e cole em planilha',
        step4: 'Alternativa: Configure Google Sheets (veja docs/SISTEMA-LEADS-REMARKETING.md)',
      }
    });

  } catch (error) {
    console.error('[ADMIN LEADS ERROR]', error);
    return NextResponse.json(
      { error: 'Erro ao buscar leads' },
      { status: 500 }
    );
  }
}
