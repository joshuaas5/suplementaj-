import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/avaliacao/', '/resultados/'],
        },
        sitemap: 'https://www.suplementaja.com/sitemap.xml',
    }
}
