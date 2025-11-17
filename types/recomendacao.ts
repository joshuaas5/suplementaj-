/**
 * Tipos para recomendações geradas pelo algoritmo
 */

import { Nutriente } from './nutriente'

export type Prioridade = 'alta' | 'media' | 'baixa' | 'nao_recomendado'

export interface Recomendacao {
  nutriente_slug: string
  prioridade: Prioridade
  dose_min: number
  dose_max: number
  unidade: string
  motivos: string[]
  referencias: string[]
  nota_especial?: string
  contraindicacao?: string
  interacao_alerta?: string
}

export interface RecomendacaoEnriquecida extends Recomendacao {
  nutriente_nome: string
  nutriente_emoji: string
  nutriente_completo: Nutriente
}

export interface RecomendacaoSalva extends Recomendacao {
  id: string
  avaliacao_id: string
  created_at: string
}
