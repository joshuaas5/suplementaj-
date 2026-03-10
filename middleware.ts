import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Pega o hostname atual (ex: suplementaja.vercel.app)
  const hostname = request.headers.get('host') || ''

  const isLocalhost = hostname.includes('localhost') || hostname.includes('127.0.0.1')

  // Se não for localhost e não for o domínio oficial (www), redireciona
  // Isso pega qualquer variação .vercel.app ou suplementaja.com
  if (!isLocalhost && hostname !== 'www.suplementaja.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'www.suplementaja.com'
    url.protocol = 'https'
    url.port = ''

    // Mantém o path e query params originais
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Pula arquivos estáticos e internos do Next.js para economizar recursos
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
