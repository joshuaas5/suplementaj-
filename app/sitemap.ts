import { MetadataRoute } from 'next'
import nutrientesData from '@/data/nutrientes.json'
import artigosData from '@/data/artigos.json'
import objetivosData from '@/data/objetivos.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.suplementaja.com' // Domínio canônico único (com www)

  // 1. Hubs e Institucionais (Porta de Entrada)
  const hubsPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/nutrientes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculadoras`, // Hub de Calculadoras
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/avaliacao`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/editorial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/termos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidade`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // 2. Calculadoras (Motor de Tráfego)
  const calculadorasSlugs = [
    'calorias',
    'macros',
    'proteina',
    'creatina',
    'imc',
    'agua',
  ]

  const calculadoraPages: MetadataRoute.Sitemap = calculadorasSlugs.map((slug) => ({
    url: `${baseUrl}/calculadoras/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  // 3. Hubs de Objetivos
  const objetivoPages: MetadataRoute.Sitemap = objetivosData.map((objetivo) => ({
    url: `${baseUrl}/objetivos/${objetivo.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // 4. Nutrientes (URLs Canônicas)
  const nutrientePages: MetadataRoute.Sitemap = Object.values(nutrientesData).map((nutriente) => ({
    url: `${baseUrl}/nutrientes/${nutriente.slug}`,
    lastModified: new Date(), // Idealmente, ter data de update no JSON
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // 5. Blog (URLs Canônicas e Validação de Data)
  const artigoPages: MetadataRoute.Sitemap = artigosData.map((artigo) => {
    // Garante que a data não está no futuro
    let date = new Date(artigo.data)
    if (isNaN(date.getTime()) || date > new Date()) {
      date = new Date() // Fallback para data atual se inválida ou futura
    }

    return {
      url: `${baseUrl}/blog/${artigo.slug}`,
      lastModified: date,
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  })

  return [
    ...hubsPages,
    ...calculadoraPages,
    ...objetivoPages,
    ...nutrientePages,
    ...artigoPages,
  ]
}
