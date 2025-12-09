import { NextRequest, NextResponse } from 'next/server';

/**
 * API de Autenticação Admin
 * Verifica senha para acessar painel de leads
 */

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Senha configurada em .env.local
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'SuplementaJa2025@Seguro';

    if (password === ADMIN_PASSWORD) {
      return NextResponse.json({ 
        success: true,
        message: 'Autenticado com sucesso' 
      });
    } else {
      return NextResponse.json(
        { error: 'Senha incorreta' },
        { status: 401 }
      );
    }

  } catch (error) {
    console.error('[AUTH ERROR]', error);
    return NextResponse.json(
      { error: 'Erro ao autenticar' },
      { status: 500 }
    );
  }
}
