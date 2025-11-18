/**
 * Amazon product mappings for supplement recommendations
 * All links include the affiliate tag: 105c91-20
 */

export interface AmazonProduct {
  name: string
  url: string
  description: string
}

/**
 * Maps supplement slugs to Amazon product URLs with affiliate tag
 */
export const AMAZON_PRODUCTS: Record<string, AmazonProduct> = {
  'proteina': {
    name: 'Whey Protein Concentrado',
    url: 'https://www.amazon.com.br/dp/B07FNJZQN9?tag=105c91-20',
    description: 'Whey protein concentrado de alta qualidade'
  },
  'creatina': {
    name: 'Creatina Monohidratada',
    url: 'https://www.amazon.com.br/dp/B00PNYW6MU?tag=105c91-20',
    description: 'Creatina pura para ganho de força e massa'
  },
  'omega-3': {
    name: 'Ômega 3 1000mg',
    url: 'https://www.amazon.com.br/dp/B07MDHJ8LB?tag=105c91-20',
    description: 'Óleo de peixe rico em EPA e DHA'
  },
  'vitamina-d': {
    name: 'Vitamina D3 2000UI',
    url: 'https://www.amazon.com.br/dp/B07MBHD9VQ?tag=105c91-20',
    description: 'Vitamina D3 (colecalciferol) para imunidade e ossos'
  },
  'multivitaminico': {
    name: 'Multivitamínico Completo',
    url: 'https://www.amazon.com.br/dp/B07MS89BTR?tag=105c91-20',
    description: 'Complexo multivitamínico com 17 vitaminas e minerais'
  },
  'magnesio': {
    name: 'Magnésio Dimalato 500mg',
    url: 'https://www.amazon.com.br/dp/B07MBHF4KY?tag=105c91-20',
    description: 'Magnésio quelado para melhor absorção'
  },
  'vitamina-b12': {
    name: 'Vitamina B12 Metilcobalamina',
    url: 'https://www.amazon.com.br/dp/B07MBHCG3X?tag=105c91-20',
    description: 'B12 na forma ativa (metilcobalamina)'
  },
  'bcaa': {
    name: 'BCAA 2:1:1',
    url: 'https://www.amazon.com.br/dp/B07FNJT6N8?tag=105c91-20',
    description: 'Aminoácidos de cadeia ramificada para recuperação muscular'
  },
  'glutamina': {
    name: 'Glutamina Pura',
    url: 'https://www.amazon.com.br/dp/B07FNJW9M2?tag=105c91-20',
    description: 'L-Glutamina para recuperação e saúde intestinal'
  },
  'probioticos': {
    name: 'Probióticos 10 Bilhões UFC',
    url: 'https://www.amazon.com.br/dp/B07MBHD2QP?tag=105c91-20',
    description: 'Probióticos para saúde intestinal'
  },
  'cromo': {
    name: 'Picolinato de Cromo',
    url: 'https://www.amazon.com.br/dp/B07MBHCX5T?tag=105c91-20',
    description: 'Cromo para controle glicêmico'
  },
  'eletrolitos': {
    name: 'Eletrólitos em Pó',
    url: 'https://www.amazon.com.br/dp/B08CXQM9YZ?tag=105c91-20',
    description: 'Reposição de eletrólitos para hidratação'
  },
  'potassio': {
    name: 'Citrato de Potássio',
    url: 'https://www.amazon.com.br/dp/B07MBHD6LP?tag=105c91-20',
    description: 'Potássio para equilíbrio hídrico'
  },
  'sodio': {
    name: 'Sal Rosa do Himalaia',
    url: 'https://www.amazon.com.br/dp/B07MDHK3PL?tag=105c91-20',
    description: 'Sal mineral rico em sódio e outros minerais'
  }
}

/**
 * Get Amazon product URL by supplement slug
 * @param slug - Supplement slug (e.g., 'proteina', 'omega-3')
 * @returns Amazon product with affiliate link or null if not found
 */
export function getAmazonProduct(slug: string): AmazonProduct | null {
  return AMAZON_PRODUCTS[slug] || null
}

/**
 * Get Amazon product URL by supplement slug, returns default multivitamin if not found
 * @param slug - Supplement slug
 * @returns Amazon product URL with affiliate tag
 */
export function getAmazonProductUrl(slug: string): string {
  const product = AMAZON_PRODUCTS[slug]
  return product ? product.url : AMAZON_PRODUCTS['multivitaminico'].url
}
