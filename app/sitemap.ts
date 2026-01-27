import { MetadataRoute } from 'next'
import nutrientesData from '@/data/nutrientes.json'
import artigosData from '@/data/artigos.json'
import objetivosData from '@/data/objetivos.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.suplementaja.com'

  // Data de referência do site (última atualização estrutural importante)
  const siteLastUpdate = new Date('2026-01-27')
  const today = new Date()

  // 1. Páginas Estáticas (Hubs e Institucionais)
  // Usamos data fixa - só atualizar quando realmente mudar o conteúdo
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: siteLastUpdate },
    { url: `${baseUrl}/blog`, lastModified: siteLastUpdate },
    { url: `${baseUrl}/nutrientes`, lastModified: siteLastUpdate },
    { url: `${baseUrl}/calculadoras`, lastModified: siteLastUpdate },
    { url: `${baseUrl}/avaliacao`, lastModified: siteLastUpdate },
    { url: `${baseUrl}/sobre`, lastModified: siteLastUpdate },
    { url: `${baseUrl}/faq`, lastModified: siteLastUpdate },
    { url: `${baseUrl}/editorial`, lastModified: siteLastUpdate },
    { url: `${baseUrl}/termos`, lastModified: new Date('2024-01-01') },
    { url: `${baseUrl}/privacidade`, lastModified: new Date('2024-01-01') },
  ]

  // 2. Calculadoras (Motor de Tráfego)
  const calculadorasSlugs = ['calorias', 'macros', 'proteina', 'creatina', 'imc', 'agua']
  const calculadoraPages: MetadataRoute.Sitemap = calculadorasSlugs.map((slug) => ({
    url: `${baseUrl}/calculadoras/${slug}`,
    lastModified: siteLastUpdate,
  }))

  // 3. Hubs de Objetivos
  const objetivoPages: MetadataRoute.Sitemap = objetivosData.map((objetivo) => ({
    url: `${baseUrl}/objetivos/${objetivo.slug}`,
    lastModified: siteLastUpdate,
  }))

  // 4. Nutrientes (sem lastmod - não temos data real de criação no JSON)
  const nutrientePages: MetadataRoute.Sitemap = Object.values(nutrientesData).map((nutriente) => ({
    url: `${baseUrl}/nutrientes/${nutriente.slug}`,
    // Omitimos lastModified pois não temos data real de update
  }))

  // 5. Blog - AQUI usamos a data REAL do artigo
  const artigoPages: MetadataRoute.Sitemap = artigosData.map((artigo) => {
    let date = new Date(artigo.data)

    // Proteção: Se data inválida ou no futuro, usa hoje
    if (isNaN(date.getTime()) || date > today) {
      date = today
    }

    return {
      url: `${baseUrl}/blog/${artigo.slug}`,
      lastModified: date,
    }
  })

  return [
    ...staticPages,
    ...calculadoraPages,
    ...objetivoPages,
    ...nutrientePages,
    ...artigoPages,
  ]
}
