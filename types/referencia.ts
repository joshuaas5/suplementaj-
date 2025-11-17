/**
 * Tipos para referências científicas
 */

export interface Referencia {
  id: string
  titulo: string
  autores?: string
  revista?: string
  ano: number
  tipo: 'Meta-análise' | 'Estudo clínico' | 'Estudo de coorte' | 'Revisão sistemática' | 'Estudo observacional' | 'Guideline'
  doi?: string
  pmid?: string
  url?: string
  citacao_chave?: string
  conclusao?: string
  relevancia?: string[]
}
