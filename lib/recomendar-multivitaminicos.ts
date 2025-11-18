import { RecomendacaoEnriquecida } from '@/types'
import { Perfil } from '@/types/perfil'
import multivitaminicosData from '@/data/multivitaminicos.json'
import { addAmazonAffiliateTag } from './affiliate'

export interface Multivitaminico {
  id: string
  nome: string
  marca: string
  descricao: string
  preco_aprox: number
  doses_por_frasco: number
  link_amazon: string
  nutrientes_incluidos: Array<{
    nutriente: string
    dose: number
    unidade: string
  }>
  ideal_para: string[]
  vantagens: string[]
}

export interface MultivitaminicoRecomendado extends Multivitaminico {
  score: number
  nutrientes_cobertos: string[]
  porcentagem_cobertura: number
  economia_estimada: number
}

/**
 * Recomenda multivitamínicos baseado nas necessidades do usuário
 */
export function recomendarMultivitaminicos(
  recomendacoes: RecomendacaoEnriquecida[],
  perfil: Perfil
): MultivitaminicoRecomendado[] {
  // Filtrar apenas nutrientes de prioridade alta e média
  const nutrientesNecessarios = recomendacoes
    .filter((r) => r.prioridade === 'alta' || r.prioridade === 'media')
    .map((r) => r.nutriente_slug)

  if (nutrientesNecessarios.length === 0) {
    return []
  }

  // Calcular score para cada multivitamínico
  const multisComScore = multivitaminicosData.map((multi) => {
    const nutrientesCobertos = multi.nutrientes_incluidos
      .map((n) => n.nutriente)
      .filter((slug) => nutrientesNecessarios.includes(slug))

    const porcentagemCobertura = (nutrientesCobertos.length / nutrientesNecessarios.length) * 100

    // Score base: quantidade de nutrientes cobertos
    let score = nutrientesCobertos.length * 10

    // Bônus por características do perfil
    if (perfil.idade && perfil.idade >= 50 && multi.id.includes('50-plus')) {
      score += 20
    }

    if (perfil.sexo === 'F' && multi.id.includes('mulher')) {
      score += 15
    }

    if (perfil.sexo === 'M' && multi.id.includes('homem')) {
      score += 15
    }

    if (perfil.dieta === 'vegana' && multi.id.includes('vegano')) {
      score += 25
    }

    if (
      (perfil.status_reprodutivo === 'gravida' || perfil.status_reprodutivo === 'lactante') &&
      multi.id.includes('prenatal')
    ) {
      score += 30
    }

    // Bônus por alta cobertura
    if (porcentagemCobertura >= 70) {
      score += 15
    } else if (porcentagemCobertura >= 50) {
      score += 10
    }

    // Economia estimada (economiza comprar vários suplementos individuais)
    // Estimativa: cada suplemento individual custa R$30-50
    const economiaEstimada = Math.max(0, (nutrientesCobertos.length - 1) * 35 - multi.preco_aprox)

    return {
      ...multi,
      score,
      nutrientes_cobertos: nutrientesCobertos,
      porcentagem_cobertura: Math.round(porcentagemCobertura),
      economia_estimada: Math.round(economiaEstimada),
      link_amazon: addAmazonAffiliateTag(multi.link_amazon),
    }
  })

  // Ordenar por score e retornar top 3
  return multisComScore
    .filter((m) => m.nutrientes_cobertos.length >= 3) // Mínimo 3 nutrientes cobertos
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
}

/**
 * Mapeia slug do nutriente para nome legível
 */
export function getNutrienteNome(slug: string): string {
  const nomes: Record<string, string> = {
    'vitamina-a': 'Vitamina A',
    'vitamina-d': 'Vitamina D',
    'vitamina-e': 'Vitamina E',
    'vitamina-c': 'Vitamina C',
    'vitamina-b1': 'Vitamina B1',
    'vitamina-b2': 'Vitamina B2',
    'vitamina-b3': 'Vitamina B3',
    'vitamina-b5': 'Vitamina B5',
    'vitamina-b6': 'Vitamina B6',
    'vitamina-b12': 'Vitamina B12',
    'acido-folico': 'Ácido Fólico',
    'biotina': 'Biotina',
    'vitamina-k2': 'Vitamina K2',
    calcio: 'Cálcio',
    magnesio: 'Magnésio',
    ferro: 'Ferro',
    zinco: 'Zinco',
    iodo: 'Iodo',
    selenio: 'Selênio',
    cobre: 'Cobre',
    manganes: 'Manganês',
    'omega-3': 'Ômega-3',
  }
  return nomes[slug] || slug
}
