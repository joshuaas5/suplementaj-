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
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Correção de canibalização: artigos duplicados
      {
        source: '/blog/creatina-guia-completo-ganho-muscular',
        destination: '/blog/guia-completo-creatina-2026',
        permanent: true, // 301
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
    ];
  },
};

export default nextConfig;
