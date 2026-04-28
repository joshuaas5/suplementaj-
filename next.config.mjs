/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/icon.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/blog/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=300',
          },
        ],
      },
      {
        source: '/nutrientes/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=300',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // URL canônica de creatina: /blog/guia-completo-creatina-2026
      // Todos os satélites redirecionam para o guia principal
      {
        source: '/blog/creatina-como-tomar',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-antes-ou-depois-treino',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-e-cafe',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-engorda',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-fase-carga-necessaria',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-faz-mal',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-monohidratada-vs-outras',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-para-idosos',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-para-mulheres',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-para-que-serve',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-quem-nao-deve-tomar',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/creatina-retencao-liquido',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      {
        source: '/blog/melhor-marca-creatina-brasil',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      // Redirects: URLs antigas com acentos -> novas sem acentos
      {
        source: '/nutrientes/c%C3%A1lcio',
        destination: '/nutrientes/calcio',
        permanent: true,
      },
      {
        source: '/nutrientes/magn%C3%A9sio',
        destination: '/nutrientes/magnesio',
        permanent: true,
      },
      {
        source: '/nutrientes/%C3%A1cido-folico',
        destination: '/nutrientes/acido-folico',
        permanent: true,
      },
      {
        source: '/nutrientes/pot%C3%A1ssio',
        destination: '/nutrientes/potassio',
        permanent: true,
      },
      {
        source: '/nutrientes/prote%C3%ADna',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/vitamina-d-defici%C3%AAncia-brasileiros',
        destination: '/blog/vitamina-d-deficiencia-brasileiros',
        permanent: true,
      },
      {
        source: '/blog/omega-3-benef%C3%ADcios-comprovados',
        destination: '/blog/omega-3-beneficios-comprovados',
        permanent: true,
      },
      {
        source: '/blog/magn%C3%A9sio-ansiedade-sono-tipos',
        destination: '/blog/magnesio-ansiedade-sono-tipos',
        permanent: true,
      },
      {
        source: '/blog/col%C3%A1geno-hidrolisado-funciona-pele-articula%C3%A7%C3%B5es',
        destination: '/blog/colageno-hidrolisado-funciona-pele-articulacoes',
        permanent: true,
      },
      // Novos redirects de 404 mapeados pelo Search Console em 10 de Março
      {
        source: '/blog/erros-contagem-calorias',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/whey-protein-intolerantes-lactose',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/whey-isolado-vs-concentrado',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      // Nota: /blog/creatina-como-tomar e /blog/melhor-marca-creatina-brasil já estão
      // redirecionados acima para /blog/guia-completo-creatina-2026
      {
        source: '/blog/guia-whey-protein-2026',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/macros-para-definicao-muscular',
        destination: '/blog/como-dividir-macros-cutting-bulking-manutencao',
        permanent: true,
      },
      // Nota: /blog/creatina-retencao-liquido já está redirecionado acima
      {
        source: '/blog/bulking-calorias-superavit',
        destination: '/blog/como-dividir-macros-cutting-bulking-manutencao',
        permanent: true,
      },
      {
        source: '/blog/maca-peruana-libido-energia-horm\u00F4nios',
        destination: '/blog/maca-peruana-libido-energia-hormonios',
        permanent: true,
      },
      {
        source: '/blog/maca-peruana-libido-energia-hormonios',
        destination: '/blog/maca-peruana-libido-energia-hormonios',
        permanent: true,
      },
      // Redirects para URLs faltantes (evitar 404)
      {
        source: '/blog/cutting-modelo-calorias-macros',
        destination: '/blog/como-dividir-macros-cutting-bulking-manutencao',
        permanent: true,
      },
      {
        source: '/blog/deficit-calorico-quanto-cortar',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/dieta-reversa-como-fazer',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/diferenca-proteinas-whey-caseina-albumina',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/economizar-300-reais-suplementacao',
        destination: '/nutrientes',
        permanent: true,
      },
      {
        source: '/blog/como-dormir-melhor-suplementos',
        destination: '/blog/melatonina-sono-insonia-dose-ideal',
        permanent: true,
      },
      {
        source: '/blog/como-fortalecer-imunidade-suplementos',
        destination: '/blog/vitamina-c-imunidade-gripes-resfriados',
        permanent: true,
      },
      {
        source: '/blog/macros-para-ganho-massa',
        destination: '/blog/como-dividir-macros-cutting-bulking-manutencao',
        permanent: true,
      },
      {
        source: '/blog/melhores-marcas-whey-protein-2026',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/mifflin-st-jeor-formula',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/neat-fator-oculto-dieta',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/o-que-e-tdee-como-calcular',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/plateau-dieta-como-sair',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/pre-treino-vale-a-pena',
        destination: '/blog/cafeina-performance-dose-pre-treino',
        permanent: true,
      },
      {
        source: '/blog/proteina-isolada-soja-veganos',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/quantas-calorias-comer-por-dia',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/receitas-whey-protein-faceis',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/refeed-day-como-fazer',
        destination: '/blog/como-dividir-macros-cutting-bulking-manutencao',
        permanent: true,
      },
      {
        source: '/blog/suplementos-para-dor-articulacao-joelho',
        destination: '/blog/glucosamina-condroitina-articulacoes-artrite',
        permanent: true,
      },
      {
        source: '/blog/suplementos-para-emagrecer-funcionam',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/suplementos-para-iniciantes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/whey-antes-ou-depois-treino',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/whey-com-leite-ou-agua',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/whey-engorda-ou-emagrece',
        destination: '/nutrientes/proteina',
        permanent: true,
      },
      {
        source: '/blog/5-suplementos-mais-vendidos',
        destination: '/nutrientes',
        permanent: true,
      },
      {
        source: '/blog/calculadora-nutricional-calorias-macros',
        destination: '/calculadoras',
        permanent: true,
      },
      {
        source: '/blog/calorias-manutencao-encontrar',
        destination: '/blog/como-calcular-gasto-calorico-tmb-tdee',
        permanent: true,
      },
      {
        source: '/blog/quanta-agua-beber-por-dia-calculo-por-peso',
        destination: '/calculadoras/agua',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
