/**
 * Tipos para nutrientes e suas informações completas
 */

export interface FonteAlimentar {
  alimento: string
  quantidade: number
  unidade: string
  percentual_vd: number
}

export interface Dosagem {
  rda: {
    [key: string]: {
      valor: number
      unidade: string
      nota?: string
    }
  }
  suplementacao_preventiva?: {
    min: number
    max: number
    unidade: string
    nota?: string
  }
  suplementacao_terapeutica?: {
    min: number
    max: number
    unidade: string
    nota?: string
  }
  limite_superior?: {
    valor: number
    unidade: string
  } | null
  nota_limite?: string
}

export interface Deficiencia {
  prevalencia?: string
  sintomas: string[]
  causas?: string[]
  niveis_sanguineos?: {
    [key: string]: string
  }
}

export interface Excesso {
  toxicidade: string
  sintomas?: string[]
  sintomas_raros?: string[]
  nota?: string
}

export interface InteracaoMedicamento {
  nome: string
  efeito: string
  recomendacao?: string
}

export interface Interacoes {
  medicamentos_reduzem_absorcao?: InteracaoMedicamento[]
  medicamentos?: InteracaoMedicamento[]
  nutrientes_sinergicos?: string[]
  nutrientes_antagonistas?: string[]
  interfere_absorcao_de?: string[]
  nutrientes_necessarios?: string[]
  nota_alcool?: string
}

export interface GrupoRisco {
  grupo: string
  motivo: string
  prevalencia?: string
  nota?: string
}

export interface FormaSuplemento {
  forma: string
  descricao?: string
  absorcao?: string
  vantagens?: string[]
  desvantagens?: string[]
  nota?: string
}

export interface Evidencia {
  id: string
  titulo: string
  autores?: string
  revista?: string
  ano: number
  tipo: string
  doi?: string
  pmid?: string
  citacao_chave?: string
  conclusao?: string
  relevancia?: string[]
}

export interface SEO {
  meta_title: string
  meta_description: string
  keywords: string[]
}

export interface ProdutoAfiliado {
  nome: string
  link: string
  badge?: string | null
  preco_aprox?: number
}

export interface Afiliados {
  amazon?: ProdutoAfiliado[]
  iherb?: ProdutoAfiliado[]
}

export interface Nutriente {
  slug: string
  nome: string
  nome_cientifico: string
  categoria: 'vitamina' | 'mineral' | 'outro'
  subcategoria?: string
  emoji: string

  descricao_curta: string
  descricao_longa: string

  funcoes_corporais: string[]
  fontes_alimentares: FonteAlimentar[]
  nota_fontes?: string

  dosagem: Dosagem

  deficiencia: Deficiencia
  excesso: Excesso

  interacoes: Interacoes

  grupos_risco?: GrupoRisco[]

  formas_suplemento: FormaSuplemento[]

  evidencias: Evidencia[]

  seo: SEO
  objetivos?: string[]
  afiliados: Afiliados

  nota_importante?: string
}

export type NutrienteSlug = string
