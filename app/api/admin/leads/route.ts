import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * API Admin para visualizar leads capturados
 * 
 * Acesso: GET /api/admin/leads
 * 
 * TODO: Adicionar autenticação (senha admin) para proteger dados
 */

export async function GET() {
  try {
    const leadsPath = path.join(process.cwd(), 'data', 'leads.json');
    
    // Verificar se arquivo existe
    if (!fs.existsSync(leadsPath)) {
      return NextResponse.json({ 
        leads: [],
        total: 0,
        message: 'Nenhum lead capturado ainda' 
      });
    }

    const leadsData = fs.readFileSync(leadsPath, 'utf-8');
    const leads = JSON.parse(leadsData);

    // Estatísticas
    const stats = {
      total: leads.length,
      emails: leads.filter((l: { contactType: string }) => l.contactType === 'email').length,
      phones: leads.filter((l: { contactType: string }) => l.contactType === 'phone').length,
      ultimoLead: leads.length > 0 ? leads[leads.length - 1] : null,
    };

    return NextResponse.json({
      leads: leads.reverse(), // Mais recentes primeiro
      stats,
    });

  } catch (error) {
    console.error('[ADMIN LEADS ERROR]', error);
    return NextResponse.json(
      { error: 'Erro ao buscar leads' },
      { status: 500 }
    );
  }
}
