import { MetadataRoute } from 'next'
import nutrientesData from '@/data/nutrientes.json'
import artigosData from '@/data/artigos.json'
import objetivosData from '@/data/objetivos.json'

// Helper: Normaliza data para 00:00:00Z (consistência)
function normalizeDate(dateInput: Date | string): Date {
  const date = new Date(dateInput)
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
}

// Helper: Retorna a data mais recente de um array de artigos
function getMostRecentArticleDate(): Date {
  const today = normalizeDate(new Date())
  let mostRecent = new Date('2024-01-01')

  for (const artigo of artigosData) {
    const artigoDate = new Date(artigo.data)
    if (!isNaN(artigoDate.getTime()) && artigoDate <= today && artigoDate > mostRecent) {
      mostRecent = artigoDate
    }
  }

  return normalizeDate(mostRecent)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.suplementaja.com'
  const today = normalizeDate(new Date())

  // Data fixa para conteúdo que raramente muda
  const nutrientesCreationDate = normalizeDate('2024-06-01')
  const objetivosCreationDate = normalizeDate('2026-01-27')
  const calculadorasCreationDate = normalizeDate('2024-12-01')
  const legalPagesDate = normalizeDate('2024-01-01')

  // Data dinâmica baseada no conteúdo mais recente
  const mostRecentBlogDate = getMostRecentArticleDate()

  // 1. Páginas Estáticas (Hubs e Institucionais)
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: mostRecentBlogDate }, // Home reflete última atualização geral
    { url: `${baseUrl}/blog`, lastModified: mostRecentBlogDate }, // Hub = post mais recente
    { url: `${baseUrl}/nutrientes`, lastModified: nutrientesCreationDate },
    { url: `${baseUrl}/calculadoras`, lastModified: calculadorasCreationDate },
    { url: `${baseUrl}/avaliacao`, lastModified: calculadorasCreationDate },
    { url: `${baseUrl}/sobre`, lastModified: legalPagesDate },
    { url: `${baseUrl}/faq`, lastModified: legalPagesDate },
    { url: `${baseUrl}/editorial`, lastModified: legalPagesDate },
    { url: `${baseUrl}/termos`, lastModified: legalPagesDate },
    { url: `${baseUrl}/privacidade`, lastModified: legalPagesDate },
  ]

  // 2. Calculadoras
  const calculadorasSlugs = ['calorias', 'macros', 'proteina', 'creatina', 'imc', 'agua']
  const calculadoraPages: MetadataRoute.Sitemap = calculadorasSlugs.map((slug) => ({
    url: `${baseUrl}/calculadoras/${slug}`,
    lastModified: calculadorasCreationDate,
  }))

  // 3. Hubs de Objetivos
  const objetivoPages: MetadataRoute.Sitemap = objetivosData.map((objetivo) => ({
    url: `${baseUrl}/objetivos/${objetivo.slug}`,
    lastModified: objetivosCreationDate,
  }))

  // 4. Nutrientes (todos com data fixa consistente)
  const nutrientePages: MetadataRoute.Sitemap = Object.values(nutrientesData).map((nutriente) => ({
    url: `${baseUrl}/nutrientes/${nutriente.slug}`,
    lastModified: nutrientesCreationDate,
  }))

  // 5. Blog - DATA REAL do artigo (normalizada para 00:00:00Z)
  const artigoPages: MetadataRoute.Sitemap = artigosData.map((artigo) => {
    let date = new Date(artigo.data)

    // Proteção: Se data inválida ou no futuro, usa hoje
    if (isNaN(date.getTime()) || date > today) {
      date = today
    }

    return {
      url: `${baseUrl}/blog/${artigo.slug}`,
      lastModified: normalizeDate(date),
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
