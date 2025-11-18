import { MetadataRoute } from 'next'
import nutrientesData from '@/data/nutrientes.json'
import artigosData from '@/data/artigos.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suplementaja.vercel.app'

  // Páginas estáticas principais
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/avaliacao`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nutrientes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Páginas dinâmicas de nutrientes
  const nutrientePages: MetadataRoute.Sitemap = Object.values(nutrientesData).map((nutriente) => ({
    url: `${baseUrl}/nutrientes/${nutriente.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Páginas dinâmicas de artigos do blog
  const artigoPages: MetadataRoute.Sitemap = artigosData.map((artigo: any) => ({
    url: `${baseUrl}/blog/${artigo.slug}`,
    lastModified: new Date(artigo.data),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...nutrientePages, ...artigoPages]
}
