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
 * Usa sistema de PESOS para calcular cobertura real:
 * - Alta prioridade = 10 pontos
 * - Média prioridade = 3 pontos
 * - Baixa prioridade = 1 ponto
 */
export function recomendarMultivitaminicos(
  recomendacoes: RecomendacaoEnriquecida[],
  perfil: Perfil
): MultivitaminicoRecomendado[] {
  // Separar nutrientes por prioridade
  const nutrientesAlta = recomendacoes.filter((r) => r.prioridade === 'alta').map((r) => r.nutriente_slug)
  const nutrientesMedia = recomendacoes.filter((r) => r.prioridade === 'media').map((r) => r.nutriente_slug)
  const nutrientesBaixa = recomendacoes.filter((r) => r.prioridade === 'baixa').map((r) => r.nutriente_slug)

  // Calcular pontuação máxima possível (sistema de pesos)
  const pontuacaoMaxima = (nutrientesAlta.length * 10) + (nutrientesMedia.length * 3) + (nutrientesBaixa.length * 1)

  if (pontuacaoMaxima === 0) {
    return []
  }

  // Calcular score para cada multivitamínico
  const multisComScore = multivitaminicosData.map((multi) => {
    const nutrientesIncluidos = multi.nutrientes_incluidos.map((n) => n.nutriente)

    // Contar quantos nutrientes de cada prioridade são cobertos
    const altasCobertas = nutrientesIncluidos.filter((slug) => nutrientesAlta.includes(slug))
    const mediasCobertas = nutrientesIncluidos.filter((slug) => nutrientesMedia.includes(slug))
    const baixasCobertas = nutrientesIncluidos.filter((slug) => nutrientesBaixa.includes(slug))

    // Calcular pontuação obtida (com pesos)
    const pontuacaoObtida = (altasCobertas.length * 10) + (mediasCobertas.length * 3) + (baixasCobertas.length * 1)

    // Porcentagem de cobertura REAL baseada em pesos
    const porcentagemCobertura = (pontuacaoObtida / pontuacaoMaxima) * 100

    // Lista de todos os nutrientes cobertos
    const nutrientesCobertos = [...altasCobertas, ...mediasCobertas, ...baixasCobertas]

    // Score base: priorizar multis que cobrem nutrientes de ALTA prioridade
    let score = (altasCobertas.length * 50) + (mediasCobertas.length * 10) + (baixasCobertas.length * 2)

    // Bônus GRANDE por alta cobertura ponderada
    if (porcentagemCobertura >= 70) {
      score += 100
    } else if (porcentagemCobertura >= 50) {
      score += 50
    } else if (porcentagemCobertura >= 30) {
      score += 20
    }

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

  // Filtrar multivitamínicos com cobertura mínima de 40%
  // Isso garante que só mostramos multis que realmente fazem sentido
  const multisFiltrados = multisComScore
    .filter((m) => m.porcentagem_cobertura >= 40)
    .sort((a, b) => b.score - a.score)

  // Priorizar multis específicos para o perfil
  const multisEspecificos: MultivitaminicoRecomendado[] = []
  const multisGenericos: MultivitaminicoRecomendado[] = []

  for (const multi of multisFiltrados) {
    let isEspecifico = false

    // Verifica se é específico para o perfil
    if (perfil.idade && perfil.idade >= 50 && multi.id.includes('50-plus')) {
      isEspecifico = true
    }
    if (perfil.sexo === 'F' && multi.id.includes('mulher')) {
      isEspecifico = true
    }
    if (perfil.sexo === 'M' && multi.id.includes('homem')) {
      isEspecifico = true
    }
    if (perfil.dieta === 'vegana' && multi.id.includes('vegano')) {
      isEspecifico = true
    }
    if (
      (perfil.status_reprodutivo === 'gravida' || perfil.status_reprodutivo === 'lactante') &&
      multi.id.includes('prenatal')
    ) {
      isEspecifico = true
    }

    if (isEspecifico) {
      multisEspecificos.push(multi)
    } else {
      multisGenericos.push(multi)
    }
  }

  // Retorna: até 2 específicos + completa com genéricos se necessário (max 3 total)
  const especificos = multisEspecificos.slice(0, 2)
  const faltam = Math.max(0, 3 - especificos.length)
  const genericos = multisGenericos.slice(0, faltam)

  const resultado = [...especificos, ...genericos]

  // GARANTIR que sempre retorne pelo menos 1-2 multivitamínicos
  // Mesmo que a cobertura seja menor que 40%, mostrar os melhores disponíveis
  if (resultado.length === 0 && multisComScore.length > 0) {
    // Pega os top 2 por score, independente de cobertura
    return multisComScore.sort((a, b) => b.score - a.score).slice(0, 2)
  }

  return resultado
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
