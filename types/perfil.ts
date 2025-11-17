/**
 * Tipos para o perfil do usuário (dados do questionário)
 */

export interface Perfil {
  // Demografia
  idade: number
  sexo: 'M' | 'F'
  peso?: number
  altura?: number

  // Condições especiais
  status_reprodutivo?: 'menstruacao_regular' | 'menstruacao_irregular' | 'menopausa' | 'pos_menopausa' | 'gravida' | 'lactante' | 'tentando_engravidar' | 'nao_aplicavel'
  dieta: 'onivora' | 'vegetariana' | 'vegana'
  exposicao_solar: 'minima' | 'moderada' | 'frequente'
  atividade_fisica: 'sedentario' | 'leve' | 'moderado' | 'intenso'
  alcool?: 'nao' | 'ocasional' | 'moderado' | 'frequente'
  tabagismo?: 'nao' | 'ex_fumante' | 'sim'

  // Arrays de condições
  condicoes_saude: string[]
  medicamentos: string[]
  cirurgias: string[]
  sintomas: string[]
}

export type StatusReprodutivo = Perfil['status_reprodutivo']
export type Dieta = Perfil['dieta']
export type ExposicaoSolar = Perfil['exposicao_solar']
export type AtividadeFisica = Perfil['atividade_fisica']
