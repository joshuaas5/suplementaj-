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
  const margin = 20
  let yPosition = 20

  // Header com melhor contraste
  doc.setFontSize(28)
  doc.setTextColor(79, 70, 229) // primary-600
  doc.text(removerAcentos('Suplementa Ja'), margin, yPosition)

  yPosition += 8
  doc.setFontSize(16)
  doc.setTextColor(50, 50, 50)
  doc.text(removerAcentos('Relatorio de Recomendacoes Personalizadas'), margin, yPosition)

  yPosition += 5
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text(removerAcentos(`Gerado em: ${new Date().toLocaleDateString('pt-BR')}`), margin, yPosition)

  // Linha divisória
  yPosition += 8
  doc.setDrawColor(200, 200, 200)
  doc.line(margin, yPosition, pageWidth - margin, yPosition)
  yPosition += 10

  // Seção: Resumo do Perfil
  doc.setFontSize(14)
  doc.setTextColor(50, 50, 50)
  doc.text(removerAcentos('Seu Perfil'), margin, yPosition)
  yPosition += 8

  doc.setFontSize(10)
  doc.setTextColor(70, 70, 70)

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
      doc.text(removerAcentos(info), margin + 5, yPosition)
      yPosition += 5
    }
  })

  yPosition += 5

  // Condições de Saúde
  if (perfil.condicoes_saude && perfil.condicoes_saude.length > 0) {
    doc.setFontSize(11)
    doc.setTextColor(50, 50, 50)
    doc.text(removerAcentos('Condicoes de Saude:'), margin, yPosition)
    yPosition += 6
    doc.setFontSize(10)
    doc.setTextColor(70, 70, 70)
    perfil.condicoes_saude.forEach(cond => {
      doc.text(removerAcentos(`• ${formatCondicao(cond)}`), margin + 5, yPosition)
      yPosition += 5
    })
    yPosition += 3
  }

  // Medicamentos
  if (perfil.medicamentos && perfil.medicamentos.length > 0) {
    doc.setFontSize(11)
    doc.setTextColor(50, 50, 50)
    doc.text(removerAcentos('Medicamentos:'), margin, yPosition)
    yPosition += 6
    doc.setFontSize(10)
    doc.setTextColor(70, 70, 70)
    perfil.medicamentos.forEach(med => {
      doc.text(removerAcentos(`• ${formatMedicamento(med)}`), margin + 5, yPosition)
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
  doc.text(removerAcentos('Suas Recomendacoes Personalizadas'), margin, yPosition)
  yPosition += 10

  // Disclaimer
  doc.setFontSize(8)
  doc.setTextColor(200, 60, 60)
  const disclaimer = removerAcentos('IMPORTANTE: Este relatorio e informativo. O ideal e consultar um profissional de saude para orientacao personalizada.')
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
    doc.text(removerAcentos('PRIORIDADE ALTA'), margin, yPosition)
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
    doc.text(removerAcentos('PRIORIDADE MEDIA'), margin, yPosition)
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
    doc.text(removerAcentos('PRIORIDADE BAIXA'), margin, yPosition)
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
    doc.text(removerAcentos('NAO RECOMENDADOS'), margin, yPosition)
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
      removerAcentos(`Suplementa Ja - Pagina ${i} de ${pageCount}`),
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
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
  pageWidth: number
): number {
  const maxWidth = pageWidth - margin * 2

  // Verificar se precisa de nova página
  if (yPosition > 230) {
    doc.addPage()
    yPosition = 20
  }

  // Caixa de destaque para o nutriente
  doc.setFillColor(249, 250, 251) // gray-50
  doc.rect(margin, yPosition - 3, pageWidth - margin * 2, 8, 'F')

  // Nome do nutriente
  doc.setFontSize(12)
  doc.setTextColor(30, 30, 30)
  doc.setFont('helvetica', 'bold')
  doc.text(removerAcentos(`${rec.nutriente_nome}`), margin + 3, yPosition + 3)
  doc.setFont('helvetica', 'normal')
  yPosition += 10

  // Dosagem recomendada em destaque
  doc.setFontSize(10)
  doc.setTextColor(79, 70, 229) // primary
  doc.setFont('helvetica', 'bold')
  doc.text(
    removerAcentos(`Dosagem recomendada: ${rec.dose_min}${rec.dose_max !== rec.dose_min ? `-${rec.dose_max}` : ''} ${rec.unidade}/dia`),
    margin + 3,
    yPosition
  )
  doc.setFont('helvetica', 'normal')
  yPosition += 7

  // Motivos personalizados
  if (rec.motivos && rec.motivos.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(50, 50, 50)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('Por que para voce:'), margin + 3, yPosition)
    doc.setFont('helvetica', 'normal')
    yPosition += 5

    doc.setTextColor(70, 70, 70)
    rec.motivos.slice(0, 3).forEach(motivo => {
      const lines = doc.splitTextToSize(removerAcentos(`• ${motivo}`), maxWidth - 10)
      doc.text(lines, margin + 6, yPosition)
      yPosition += lines.length * 4
    })
    yPosition += 2
  }

  // Benefícios principais
  if (rec.nutriente_completo?.funcoes_corporais && rec.nutriente_completo.funcoes_corporais.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(50, 50, 50)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('Beneficios principais:'), margin + 3, yPosition)
    doc.setFont('helvetica', 'normal')
    yPosition += 5

    doc.setTextColor(70, 70, 70)
    rec.nutriente_completo.funcoes_corporais.slice(0, 3).forEach(funcao => {
      const lines = doc.splitTextToSize(removerAcentos(`• ${funcao}`), maxWidth - 10)
      doc.text(lines, margin + 6, yPosition)
      yPosition += lines.length * 4
    })
    yPosition += 2
  }

  // Fontes alimentares
  if (rec.nutriente_completo?.fontes_alimentares && rec.nutriente_completo.fontes_alimentares.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(50, 50, 50)
    doc.setFont('helvetica', 'bold')
    doc.text(removerAcentos('Fontes alimentares:'), margin + 3, yPosition)
    doc.setFont('helvetica', 'normal')
    yPosition += 5

    doc.setTextColor(70, 70, 70)
    const fontes = rec.nutriente_completo.fontes_alimentares.slice(0, 4)
    const fontesTexto = fontes.map(f => `${f.alimento} (${f.quantidade}${f.unidade})`).join(', ')
    const lines = doc.splitTextToSize(removerAcentos(fontesTexto), maxWidth - 10)
    doc.text(lines, margin + 6, yPosition)
    yPosition += lines.length * 4 + 2
  }

  // Observações importantes
  if (rec.nota_especial) {
    doc.setFillColor(254, 252, 232) // yellow-50
    doc.rect(margin + 2, yPosition - 2, pageWidth - margin * 2 - 4, 1, 'F')
    yPosition += 1
    doc.setFontSize(8)
    doc.setTextColor(120, 53, 15) // yellow-900
    const obsLines = doc.splitTextToSize(removerAcentos(`IMPORTANTE: ${rec.nota_especial}`), maxWidth - 10)
    doc.text(obsLines, margin + 5, yPosition)
    yPosition += obsLines.length * 3.5 + 2
  }

  // Linha separadora
  doc.setDrawColor(220, 220, 220)
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

  // Caixa de alerta vermelha
  doc.setFillColor(254, 242, 242) // red-50
  doc.rect(margin, yPosition - 3, pageWidth - margin * 2, 8, 'F')

  doc.setFontSize(11)
  doc.setTextColor(220, 38, 38) // danger
  doc.setFont('helvetica', 'bold')
  doc.text(removerAcentos(`${rec.nutriente_nome} - NAO RECOMENDADO`), margin + 3, yPosition + 2)
  doc.setFont('helvetica', 'normal')
  yPosition += 10

  if (rec.motivos && rec.motivos.length > 0) {
    doc.setFontSize(9)
    doc.setTextColor(70, 70, 70)
    rec.motivos.forEach(motivo => {
      const lines = doc.splitTextToSize(removerAcentos(`ALERTA: ${motivo}`), maxWidth - 10)
      doc.text(lines, margin + 6, yPosition)
      yPosition += lines.length * 4
    })
  }

  // Linha separadora
  doc.setDrawColor(220, 220, 220)
  doc.line(margin, yPosition + 2, pageWidth - margin, yPosition + 2)
  yPosition += 8

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
