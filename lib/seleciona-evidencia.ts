import { Evidencia } from '@/types/nutriente'
import { Perfil } from '@/types'

/**
 * Seleciona a evidência científica mais relevante baseada no perfil do usuário
 * Prioriza evidências gerais (sem campo relevancia) quando não há match específico
 */
export function selecionaEvidencia(evidencias: Evidencia[], perfil?: Perfil): Evidencia | null {
  if (!evidencias || evidencias.length === 0) {
    return null
  }

  // Se não há perfil, retorna a primeira evidência geral ou a primeira disponível
  if (!perfil) {
    return evidencias.find(e => !e.relevancia || e.relevancia.length === 0) || evidencias[0]
  }

  // Construir lista de características do perfil para matching
  const caracteristicasPerfil: string[] = []

  // Sexo
  if (perfil.sexo) {
    caracteristicasPerfil.push(perfil.sexo)
  }

  // Idade/Fase da vida
  if (perfil.idade) {
    if (perfil.idade >= 60) caracteristicasPerfil.push('idoso')
    if (perfil.idade < 18) caracteristicasPerfil.push('adolescente')
  }

  // Gestação
  if (perfil.gestante) {
    caracteristicasPerfil.push('gestante', 'gravidez', 'gestacao')
  }

  // Lactação
  if (perfil.amamentando) {
    caracteristicasPerfil.push('amamentando', 'lactante', 'lactacao')
  }

  // Menopausa
  if (perfil.menopausa) {
    caracteristicasPerfil.push('menopausa', 'pos-menopausa', 'pós-menopausa')
  }

  // Dieta
  if (perfil.dieta) {
    caracteristicasPerfil.push(perfil.dieta)
    if (perfil.dieta === 'vegana') caracteristicasPerfil.push('vegetariana')
  }

  // Condições de saúde
  if (perfil.condicoes_saude) {
    caracteristicasPerfil.push(...perfil.condicoes_saude)
  }

  // Objetivos de saúde
  if (perfil.objetivos_saude) {
    caracteristicasPerfil.push(...perfil.objetivos_saude)
  }

  // Sintomas
  if (perfil.sintomas) {
    caracteristicasPerfil.push(...perfil.sintomas)
  }

  // Normalizar para lowercase para comparação
  const caracteristicasNormalizadas = caracteristicasPerfil.map(c =>
    c.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  )

  // Separar evidências em específicas e gerais
  const evidenciasEspecificas = evidencias.filter(e => e.relevancia && e.relevancia.length > 0)
  const evidenciasGerais = evidencias.filter(e => !e.relevancia || e.relevancia.length === 0)

  // Tentar encontrar evidência específica que match com o perfil
  for (const evidencia of evidenciasEspecificas) {
    const relevanciaNormalizada = evidencia.relevancia!.map(r =>
      r.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    )

    // Verifica se alguma relevância da evidência está nas características do perfil
    const temMatch = relevanciaNormalizada.some(r =>
      caracteristicasNormalizadas.some(c => c.includes(r) || r.includes(c))
    )

    if (temMatch) {
      return evidencia
    }
  }

  // Se não encontrou evidência específica, retorna evidência geral
  if (evidenciasGerais.length > 0) {
    return evidenciasGerais[0]
  }

  // Se não há evidências gerais, retorna a primeira evidência disponível
  return evidencias[0]
}
