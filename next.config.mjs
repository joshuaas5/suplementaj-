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
      // Redirects: URLs antigas com acentos -> novas sem acentos
      {
        source: '/blog/guia-completo-creatina-2025',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
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
        source: '/blog/maca-peruana-libido-energia-horm\u00F4nios',
        destination: '/blog/maca-peruana-libido-energia-hormonios',
        permanent: true,
      },
      // Paginas de blog que foram removidas ou renomeadas
      {
        source: '/blog/creatina-guia-completo-ganho-muscular',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true,
      },
      // Calculadoras sem trailing slash ou com URLs antigas
      {
        source: '/calculadora/calorias',
        destination: '/calculadoras/calorias',
        permanent: true,
      },
      {
        source: '/calculadora/imc',
        destination: '/calculadoras/imc',
        permanent: true,
      },
      {
        source: '/calculadora/macros',
        destination: '/calculadoras/macros',
        permanent: true,
      },
      {
        source: '/calculadora/agua',
        destination: '/calculadoras/agua',
        permanent: true,
      },
      {
        source: '/calculadora/creatina',
        destination: '/calculadoras/creatina',
        permanent: true,
      },
      {
        source: '/calculadora/proteina',
        destination: '/calculadoras/proteina',
        permanent: true,
      },
      // Resultados sem /local
      {
        source: '/resultados',
        destination: '/avaliacao/passo-1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
