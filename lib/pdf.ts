import jsPDF from 'jspdf'
import { Perfil } from '@/types/perfil'
import { RecomendacaoEnriquecida } from '@/types'

export function gerarPDFResultados(
  perfil: Perfil,
  recomendacoes: RecomendacaoEnriquecida[]
) {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  let yPosition = 20

  // Header
  doc.setFontSize(24)
  doc.setTextColor(79, 70, 229) // primary-600
  doc.text('VitaGuia', margin, yPosition)

  yPosition += 8
  doc.setFontSize(16)
  doc.setTextColor(50, 50, 50)
  doc.text('Relatório de Recomendações Personalizadas', margin, yPosition)

  yPosition += 5
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text(`Gerado em: ${new Date().toLocaleDateString('pt-BR')}`, margin, yPosition)

  // Linha divisória
  yPosition += 8
  doc.setDrawColor(200, 200, 200)
  doc.line(margin, yPosition, pageWidth - margin, yPosition)
  yPosition += 10

  // Seção: Resumo do Perfil
  doc.setFontSize(14)
  doc.setTextColor(50, 50, 50)
  doc.text('📋 Seu Perfil', margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setTextColor(70, 70, 70)

  const perfilInfo = [
    `Idade: ${perfil.idade} anos`,
    `Sexo: ${perfil.sexo === 'M' ? 'Masculino' : 'Feminino'}`,
    perfil.peso ? `Peso: ${perfil.peso}kg` : null,
    perfil.altura ? `Altura: ${perfil.altura}cm` : null,
    `Dieta: ${getDietaLabel(perfil.dieta)}`,
    `Exposição Solar: ${getExposicaoLabel(perfil.exposicao_solar)}`,
    `Atividade Física: ${getAtividadeLabel(perfil.atividade_fisica)}`,
  ].filter(Boolean)

  perfilInfo.forEach(info => {
    if (info) {
      doc.text(info, margin + 5, yPosition)
      yPosition += 5
    }
  })

  yPosition += 5

  // Condições de Saúde
  if (perfil.condicoes_saude && perfil.condicoes_saude.length > 0) {
    doc.setFontSize(11)
    doc.setTextColor(50, 50, 50)
    doc.text('Condições de Saúde:', margin, yPosition)
    yPosition += 6
    doc.setFontSize(10)
    doc.setTextColor(70, 70, 70)
    perfil.condicoes_saude.forEach(cond => {
      doc.text(`• ${formatCondicao(cond)}`, margin + 5, yPosition)
      yPosition += 5
    })
    yPosition += 3
  }

  // Medicamentos
  if (perfil.medicamentos && perfil.medicamentos.length > 0) {
    doc.setFontSize(11)
    doc.setTextColor(50, 50, 50)
    doc.text('Medicamentos:', margin, yPosition)
    yPosition += 6
    doc.setFontSize(10)
    doc.setTextColor(70, 70, 70)
    perfil.medicamentos.forEach(med => {
      doc.text(`• ${formatMedicamento(med)}`, margin + 5, yPosition)
      yPosition += 5
    })
    yPosition += 3
  }

  // Nova página para recomendações
  doc.addPage()
  yPosition = 20

  // Título de Recomendações
  doc.setFontSize(16)
  doc.setTextColor(50, 50, 50)
  doc.text('💊 Suas Recomendações Personalizadas', margin, yPosition)
  yPosition += 10

  // Disclaimer
  doc.setFontSize(8)
  doc.setTextColor(200, 60, 60)
  const disclaimer = 'IMPORTANTE: Este relatório não substitui consulta médica. Consulte um profissional de saúde antes de iniciar qualquer suplementação.'
  const disclaimerLines = doc.splitTextToSize(disclaimer, pageWidth - margin * 2)
  doc.text(disclaimerLines, margin, yPosition)
  yPosition += disclaimerLines.length * 4 + 5

  // Separar por prioridade
  const recsAlta = recomendacoes.filter(r => r.prioridade === 'alta')
  const recsMedia = recomendacoes.filter(r => r.prioridade === 'media')
  const recsBaixa = recomendacoes.filter(r => r.prioridade === 'baixa')
  const recsNao = recomendacoes.filter(r => r.prioridade === 'nao_recomendado')

  // Prioridade Alta
  if (recsAlta.length > 0) {
    doc.setFontSize(12)
    doc.setTextColor(22, 163, 74) // green
    doc.text('🔴 PRIORIDADE ALTA', margin, yPosition)
    yPosition += 8

    recsAlta.forEach(rec => {
      yPosition = adicionarRecomendacao(doc, rec, yPosition, margin, pageWidth)
    })
  }

  // Prioridade Média
  if (recsMedia.length > 0) {
    if (yPosition > 240) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFontSize(12)
    doc.setTextColor(245, 158, 11) // orange
    doc.text('🟡 PRIORIDADE MÉDIA', margin, yPosition)
    yPosition += 8

    recsMedia.forEach(rec => {
      yPosition = adicionarRecomendacao(doc, rec, yPosition, margin, pageWidth)
    })
  }

  // Prioridade Baixa
  if (recsBaixa.length > 0) {
    if (yPosition > 240) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFontSize(12)
    doc.setTextColor(59, 130, 246) // blue
    doc.text('🔵 PRIORIDADE BAIXA', margin, yPosition)
    yPosition += 8

    recsBaixa.forEach(rec => {
      yPosition = adicionarRecomendacao(doc, rec, yPosition, margin, pageWidth)
    })
  }

  // Não Recomendados
  if (recsNao.length > 0) {
    if (yPosition > 240) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFontSize(12)
    doc.setTextColor(220, 38, 38) // red
    doc.text('❌ NÃO RECOMENDADOS', margin, yPosition)
    yPosition += 8

    recsNao.forEach(rec => {
      yPosition = adicionarContraindicacao(doc, rec, yPosition, margin, pageWidth)
    })
  }

  // Rodapé em todas as páginas
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text(
      `VitaGuia - Página ${i} de ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    )
  }

  // Salvar PDF
  const fileName = `VitaGuia-Recomendacoes-${new Date().toISOString().split('T')[0]}.pdf`
  doc.save(fileName)
}

function adicionarRecomendacao(
  doc: jsPDF,
  rec: RecomendacaoEnriquecida,
  yPosition: number,
  margin: number,
  pageWidth: number
): number {
  const maxWidth = pageWidth - margin * 2

  // Verificar se precisa de nova página
  if (yPosition > 250) {
    doc.addPage()
    yPosition = 20
  }

  // Nome do nutriente
  doc.setFontSize(11)
  doc.setTextColor(50, 50, 50)
  doc.text(`${rec.nutriente_emoji} ${rec.nutriente_nome}`, margin + 3, yPosition)
  yPosition += 7

  // Dosagem recomendada
  doc.setFontSize(10)
  doc.setTextColor(79, 70, 229) // primary
  doc.text(
    `Dosagem: ${rec.dose_min}${rec.dose_max !== rec.dose_min ? `-${rec.dose_max}` : ''} ${rec.unidade}/dia`,
    margin + 3,
    yPosition
  )
  yPosition += 6

  // Motivos
  if (rec.motivos && rec.motivos.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(70, 70, 70)
    doc.text('Por que para você:', margin + 3, yPosition)
    yPosition += 5

    rec.motivos.slice(0, 3).forEach(motivo => {
      const lines = doc.splitTextToSize(`• ${motivo}`, maxWidth - 10)
      doc.text(lines, margin + 6, yPosition)
      yPosition += lines.length * 4
    })
  }

  // Observações
  if (rec.nota_especial) {
    yPosition += 2
    doc.setFontSize(8)
    doc.setTextColor(100, 100, 100)
    const obsLines = doc.splitTextToSize(`ℹ️ ${rec.nota_especial}`, maxWidth - 6)
    doc.text(obsLines, margin + 3, yPosition)
    yPosition += obsLines.length * 3.5
  }

  yPosition += 6
  return yPosition
}

function adicionarContraindicacao(
  doc: jsPDF,
  rec: RecomendacaoEnriquecida,
  yPosition: number,
  margin: number,
  pageWidth: number
): number {
  const maxWidth = pageWidth - margin * 2

  if (yPosition > 250) {
    doc.addPage()
    yPosition = 20
  }

  doc.setFontSize(11)
  doc.setTextColor(220, 38, 38) // danger
  doc.text(`${rec.nutriente_emoji} ${rec.nutriente_nome} - NÃO RECOMENDADO`, margin + 3, yPosition)
  yPosition += 7

  if (rec.motivos && rec.motivos.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(70, 70, 70)
    rec.motivos.forEach(motivo => {
      const lines = doc.splitTextToSize(`⚠️ ${motivo}`, maxWidth - 6)
      doc.text(lines, margin + 6, yPosition)
      yPosition += lines.length * 4
    })
  }

  yPosition += 6
  return yPosition
}

// Helper functions
function getDietaLabel(dieta: string): string {
  const labels: Record<string, string> = {
    onivora: 'Onívora',
    vegetariana: 'Vegetariana',
    vegana: 'Vegana',
  }
  return labels[dieta] || dieta
}

function getExposicaoLabel(exposicao: string): string {
  const labels: Record<string, string> = {
    minima: 'Mínima (< 15 min/dia)',
    moderada: 'Moderada (15-30 min/dia)',
    frequente: 'Frequente (> 30 min/dia)',
  }
  return labels[exposicao] || exposicao
}

function getAtividadeLabel(atividade: string): string {
  const labels: Record<string, string> = {
    sedentario: 'Sedentário',
    leve: 'Leve (1-2x/semana)',
    moderado: 'Moderado (3-4x/semana)',
    intenso: 'Intenso (5+x/semana)',
  }
  return labels[atividade] || atividade
}

function formatCondicao(cond: string): string {
  const labels: Record<string, string> = {
    osteoporose: 'Osteoporose',
    osteopenia: 'Osteopenia',
    diabetes: 'Diabetes',
    cardiovascular: 'Doença Cardiovascular',
    hipertensao: 'Hipertensão',
    depressao: 'Depressão',
    ansiedade: 'Ansiedade',
    anemia: 'Anemia',
    hipotireoidismo: 'Hipotireoidismo',
    hemocromatose: 'Hemocromatose',
    doenca_celiaca: 'Doença Celíaca',
    doenca_crohn: 'Doença de Crohn',
    gastrite: 'Gastrite',
  }
  return labels[cond] || cond
}

function formatMedicamento(med: string): string {
  const labels: Record<string, string> = {
    anticoncepcional: 'Anticoncepcional',
    metformina: 'Metformina',
    ibp: 'Inibidor de Bomba de Prótons (IBP)',
    estatina: 'Estatina',
    warfarin: 'Warfarin',
    corticoide: 'Corticoide',
    diuretico: 'Diurético',
    antiacido: 'Antiácido',
    antidepressivo: 'Antidepressivo',
    anticonvulsivante: 'Anticonvulsivante',
    bifosfonato: 'Bifosfonato',
  }
  return labels[med] || med
}
