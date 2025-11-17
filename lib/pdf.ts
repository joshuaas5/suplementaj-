import jsPDF from 'jspdf'
import { Perfil } from '@/types/perfil'
import { RecomendacaoEnriquecida } from '@/types'

// Função para remover acentos e caracteres especiais
function removerAcentos(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ç/g, 'c')
    .replace(/Ç/g, 'C')
    .replace(/ñ/g, 'n')
    .replace(/Ñ/g, 'N')
}

export function gerarPDFResultados(
  perfil: Perfil,
  recomendacoes: RecomendacaoEnriquecida[]
) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
    compress: true
  })

  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  let yPosition = 20

  // Header AMARELO VIBRANTE - NEOBRUTALISM
  doc.setFillColor(250, 204, 21) // yellow-400
  doc.rect(0, 0, pageWidth, 35, 'F')

  doc.setFillColor(0, 0, 0) // black box
  doc.rect(margin - 2, 10, 80, 15, 'F')

  doc.setFontSize(24)
  doc.setTextColor(250, 204, 21) // yellow-400 text on black
  doc.setFont('helvetica', 'bold')
  doc.text(removerAcentos('SUPLEMENTA JA'), margin, 19)

  yPosition = 40
  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.text(removerAcentos('RELATORIO DE RECOMENDACOES'), margin, yPosition)

  yPosition += 5
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  doc.text(removerAcentos(`Gerado em: ${new Date().toLocaleDateString('pt-BR')}`), margin, yPosition)

  // Linha grossa separadora - NEOBRUTALISM
  yPosition += 5
  doc.setLineWidth(1)
  doc.setDrawColor(0, 0, 0)
  doc.line(margin, yPosition, pageWidth - margin, yPosition)
  yPosition += 8

  // Seção: Resumo do Perfil com CAIXA CIANO
  doc.setFillColor(34, 211, 238) // cyan-400
  doc.rect(margin - 2, yPosition - 5, pageWidth - margin * 2 + 4, 10, 'F')

  doc.setFontSize(12)
  doc.setTextColor(0, 0, 0)
  doc.setFont('helvetica', 'bold')
  doc.text(removerAcentos('SEU PERFIL'), margin, yPosition)
  yPosition += 10

  doc.setFontSize(9)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(30, 30, 30)

  const perfilInfo = [
    `Idade: ${perfil.idade} anos`,
    `Sexo: ${perfil.sexo === 'M' ? 'Masculino' : 'Feminino'}`,
    perfil.peso ? `Peso: ${perfil.peso}kg` : null,
    perfil.altura ? `Altura: ${perfil.altura}cm` : null,
    `Dieta: ${getDietaLabel(perfil.dieta)}`,
    `Exposicao Solar: ${getExposicaoLabel(perfil.exposicao_solar)}`,
    `Atividade Fisica: ${getAtividadeLabel(perfil.atividade_fisica)}`,
  ].filter(Boolean)

  perfilInfo.forEach(info => {
    if (info) {
      doc.text(removerAcentos(info), margin + 3, yPosition)
      yPosition += 5
    }
  })

  yPosition += 3

  // Condições de Saúde com CAIXA LIME
  if (perfil.condicoes_saude && perfil.condicoes_saude.length > 0) {
    doc.setFillColor(163, 230, 53) // lime-400
    doc.rect(margin - 2, yPosition - 4, pageWidth - margin * 2 + 4, 8, 'F')

    doc.setFontSize(10)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('CONDICOES DE SAUDE'), margin, yPosition)
    yPosition += 6

    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    perfil.condicoes_saude.forEach(cond => {
      doc.text(removerAcentos(`• ${formatCondicao(cond)}`), margin + 3, yPosition)
      yPosition += 4
    })
    yPosition += 3
  }

  // Medicamentos com CAIXA ROSA
  if (perfil.medicamentos && perfil.medicamentos.length > 0) {
    doc.setFillColor(244, 114, 182) // pink-500
    doc.rect(margin - 2, yPosition - 4, pageWidth - margin * 2 + 4, 8, 'F')

    doc.setFontSize(10)
    doc.setTextColor(255, 255, 255) // white text on pink
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('MEDICAMENTOS'), margin, yPosition)
    yPosition += 6

    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'normal')
    perfil.medicamentos.forEach(med => {
      doc.text(removerAcentos(`• ${formatMedicamento(med)}`), margin + 3, yPosition)
      yPosition += 4
    })
    yPosition += 3
  }

  // Nova página para recomendações
  doc.addPage()
  yPosition = 20

  // Título de Recomendações com HEADER AMARELO
  doc.setFillColor(250, 204, 21) // yellow-400
  doc.rect(0, 10, pageWidth, 20, 'F')

  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.setFont('helvetica', 'bold')
  doc.text(removerAcentos('SUAS RECOMENDACOES PERSONALIZADAS'), margin, yPosition)
  yPosition += 15

  // Disclaimer com CAIXA ROSA
  doc.setFillColor(244, 114, 182) // pink-500
  doc.rect(margin - 2, yPosition - 4, pageWidth - margin * 2 + 4, 12, 'F')

  doc.setFontSize(8)
  doc.setTextColor(255, 255, 255) // white
  doc.setFont('helvetica', 'bold')
  const disclaimer = removerAcentos('IMPORTANTE: Este relatorio e informativo. O ideal e consultar um profissional de saude para orientacao personalizada.')
  const disclaimerLines = doc.splitTextToSize(disclaimer, pageWidth - margin * 2 - 4)
  doc.text(disclaimerLines, margin, yPosition)
  yPosition += disclaimerLines.length * 3.5 + 8
  doc.setFont('helvetica', 'normal')

  // Separar por prioridade
  const recsAlta = recomendacoes.filter(r => r.prioridade === 'alta')
  const recsMedia = recomendacoes.filter(r => r.prioridade === 'media')
  const recsBaixa = recomendacoes.filter(r => r.prioridade === 'baixa')
  const recsNao = recomendacoes.filter(r => r.prioridade === 'nao_recomendado')

  // Prioridade Alta com LIME
  if (recsAlta.length > 0) {
    doc.setFillColor(163, 230, 53) // lime-400
    doc.rect(margin - 2, yPosition - 5, pageWidth - margin * 2 + 4, 10, 'F')

    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('PRIORIDADE ALTA'), margin, yPosition)
    yPosition += 10

    recsAlta.forEach(rec => {
      yPosition = adicionarRecomendacao(doc, rec, yPosition, margin, pageWidth, 'alta')
    })
  }

  // Prioridade Média com AMARELO
  if (recsMedia.length > 0) {
    if (yPosition > 240) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFillColor(250, 204, 21) // yellow-400
    doc.rect(margin - 2, yPosition - 5, pageWidth - margin * 2 + 4, 10, 'F')

    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('PRIORIDADE MEDIA'), margin, yPosition)
    yPosition += 10

    recsMedia.forEach(rec => {
      yPosition = adicionarRecomendacao(doc, rec, yPosition, margin, pageWidth, 'media')
    })
  }

  // Prioridade Baixa com CIANO
  if (recsBaixa.length > 0) {
    if (yPosition > 240) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFillColor(34, 211, 238) // cyan-400
    doc.rect(margin - 2, yPosition - 5, pageWidth - margin * 2 + 4, 10, 'F')

    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('PRIORIDADE BAIXA'), margin, yPosition)
    yPosition += 10

    recsBaixa.forEach(rec => {
      yPosition = adicionarRecomendacao(doc, rec, yPosition, margin, pageWidth, 'baixa')
    })
  }

  // Não Recomendados com ROSA
  if (recsNao.length > 0) {
    if (yPosition > 240) {
      doc.addPage()
      yPosition = 20
    }

    doc.setFillColor(244, 114, 182) // pink-500
    doc.rect(margin - 2, yPosition - 5, pageWidth - margin * 2 + 4, 10, 'F')

    doc.setFontSize(12)
    doc.setTextColor(255, 255, 255) // white on pink
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('NAO RECOMENDADOS'), margin, yPosition)
    yPosition += 10

    recsNao.forEach(rec => {
      yPosition = adicionarContraindicacao(doc, rec, yPosition, margin, pageWidth)
    })
  }

  // Rodapé AMARELO em todas as páginas
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)

    // Barra amarela no rodapé
    doc.setFillColor(250, 204, 21) // yellow-400
    doc.rect(0, pageHeight - 15, pageWidth, 15, 'F')

    doc.setFontSize(8)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(
      removerAcentos(`SUPLEMENTA JA - Pagina ${i} de ${pageCount}`),
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    )
  }

  // Salvar PDF
  const fileName = `Suplementa-Ja-Recomendacoes-${new Date().toISOString().split('T')[0]}.pdf`
  doc.save(fileName)
}

function adicionarRecomendacao(
  doc: jsPDF,
  rec: RecomendacaoEnriquecida,
  yPosition: number,
  margin: number,
  pageWidth: number,
  prioridade: string
): number {
  const maxWidth = pageWidth - margin * 2

  // Verificar se precisa de nova página
  if (yPosition > 230) {
    doc.addPage()
    yPosition = 20
  }

  // Caixa BRANCA com borda PRETA grossa
  doc.setFillColor(255, 255, 255) // white
  doc.setLineWidth(1)
  doc.setDrawColor(0, 0, 0) // black border
  doc.rect(margin, yPosition - 3, pageWidth - margin * 2, 10, 'FD') // F=fill, D=draw

  // Nome do nutriente em NEGRITO
  doc.setFontSize(11)
  doc.setTextColor(0, 0, 0)
  doc.setFont('helvetica', 'bold')
  doc.text(removerAcentos(`${rec.nutriente_nome.toUpperCase()}`), margin + 3, yPosition + 3)
  yPosition += 12

  // Dosagem com fundo colorido por prioridade
  const bgColor = prioridade === 'alta' ? [163, 230, 53] :
                  prioridade === 'media' ? [250, 204, 21] : [34, 211, 238]

  doc.setFillColor(bgColor[0], bgColor[1], bgColor[2])
  doc.rect(margin + 2, yPosition - 4, 80, 7, 'F')

  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.setFont('helvetica', 'bold')
  doc.text(
    removerAcentos(`DOSE: ${rec.dose_min}${rec.dose_max !== rec.dose_min ? `-${rec.dose_max}` : ''} ${rec.unidade}/dia`),
    margin + 4,
    yPosition
  )
  yPosition += 9

  // Motivos personalizados
  if (rec.motivos && rec.motivos.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('POR QUE PARA VOCE:'), margin + 3, yPosition)
    doc.setFont('helvetica', 'normal')
    yPosition += 4

    rec.motivos.slice(0, 3).forEach(motivo => {
      const lines = doc.splitTextToSize(removerAcentos(`• ${motivo}`), maxWidth - 10)
      doc.text(lines, margin + 5, yPosition)
      yPosition += lines.length * 4
    })
    yPosition += 2
  }

  // Benefícios principais
  if (rec.nutriente_completo?.funcoes_corporais && rec.nutriente_completo.funcoes_corporais.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('BENEFICIOS:'), margin + 3, yPosition)
    doc.setFont('helvetica', 'normal')
    yPosition += 4

    rec.nutriente_completo.funcoes_corporais.slice(0, 2).forEach(funcao => {
      const lines = doc.splitTextToSize(removerAcentos(`• ${funcao}`), maxWidth - 10)
      doc.text(lines, margin + 5, yPosition)
      yPosition += lines.length * 4
    })
    yPosition += 2
  }

  // Fontes alimentares
  if (rec.nutriente_completo?.fontes_alimentares && rec.nutriente_completo.fontes_alimentares.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('FONTES ALIMENTARES:'), margin + 3, yPosition)
    doc.setFont('helvetica', 'normal')
    yPosition += 4

    const fontes = rec.nutriente_completo.fontes_alimentares.slice(0, 4)
    const fontesTexto = fontes.map(f => `${f.alimento} (${f.quantidade}${f.unidade})`).join(', ')
    const lines = doc.splitTextToSize(removerAcentos(fontesTexto), maxWidth - 10)
    doc.text(lines, margin + 5, yPosition)
    yPosition += lines.length * 4 + 2
  }

  // Observações importantes com FUNDO ROSA
  if (rec.nota_especial) {
    doc.setFillColor(244, 114, 182) // pink-500
    doc.rect(margin + 2, yPosition - 3, pageWidth - margin * 2 - 4, 8, 'F')

    doc.setFontSize(8)
    doc.setTextColor(255, 255, 255) // white text
    doc.setFont('helvetica', 'bold')
    const obsLines = doc.splitTextToSize(removerAcentos(`IMPORTANTE: ${rec.nota_especial}`), maxWidth - 10)
    doc.text(obsLines, margin + 4, yPosition)
    yPosition += obsLines.length * 3.5 + 5
  }

  // Linha separadora PRETA GROSSA
  doc.setLineWidth(0.5)
  doc.setDrawColor(0, 0, 0)
  doc.line(margin, yPosition + 2, pageWidth - margin, yPosition + 2)
  yPosition += 8

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

  if (yPosition > 240) {
    doc.addPage()
    yPosition = 20
  }

  // Caixa ROSA VIBRANTE
  doc.setFillColor(244, 114, 182) // pink-500
  doc.setLineWidth(1)
  doc.setDrawColor(0, 0, 0)
  doc.rect(margin, yPosition - 3, pageWidth - margin * 2, 10, 'FD')

  doc.setFontSize(11)
  doc.setTextColor(255, 255, 255) // white text
  doc.setFont('helvetica', 'bold')
  doc.text(removerAcentos(`${rec.nutriente_nome.toUpperCase()} - NAO RECOMENDADO`), margin + 3, yPosition + 3)
  yPosition += 12

  if (rec.motivos && rec.motivos.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    rec.motivos.forEach(motivo => {
      const lines = doc.splitTextToSize(removerAcentos(`ALERTA: ${motivo}`), maxWidth - 10)
      doc.text(lines, margin + 4, yPosition)
      yPosition += lines.length * 4
    })
  }

  // Linha separadora
  doc.setLineWidth(0.5)
  doc.setDrawColor(0, 0, 0)
  doc.line(margin, yPosition + 2, pageWidth - margin, yPosition + 2)
  yPosition += 8

  return yPosition
}

// Helper functions
function getDietaLabel(dieta: string): string {
  const labels: Record<string, string> = {
    onivora: 'Onivora',
    vegetariana: 'Vegetariana',
    vegana: 'Vegana',
  }
  return labels[dieta] || dieta
}

function getExposicaoLabel(exposicao: string): string {
  const labels: Record<string, string> = {
    minima: 'Minima (< 15 min/dia)',
    moderada: 'Moderada (15-30 min/dia)',
    frequente: 'Frequente (> 30 min/dia)',
  }
  return labels[exposicao] || exposicao
}

function getAtividadeLabel(atividade: string): string {
  const labels: Record<string, string> = {
    sedentario: 'Sedentario',
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
    cardiovascular: 'Doenca Cardiovascular',
    hipertensao: 'Hipertensao',
    depressao: 'Depressao',
    ansiedade: 'Ansiedade',
    anemia: 'Anemia',
    hipotireoidismo: 'Hipotireoidismo',
    hemocromatose: 'Hemocromatose',
    doenca_celiaca: 'Doenca Celiaca',
    doenca_crohn: 'Doenca de Crohn',
    gastrite: 'Gastrite',
  }
  return labels[cond] || cond
}

function formatMedicamento(med: string): string {
  const labels: Record<string, string> = {
    anticoncepcional: 'Anticoncepcional',
    metformina: 'Metformina',
    ibp: 'Inibidor de Bomba de Protons (IBP)',
    estatina: 'Estatina',
    warfarin: 'Warfarin',
    corticoide: 'Corticoide',
    diuretico: 'Diuretico',
    antiacido: 'Antiacido',
    antidepressivo: 'Antidepressivo',
    anticonvulsivante: 'Anticonvulsivante',
    bifosfonato: 'Bifosfonato',
  }
  return labels[med] || med
}
