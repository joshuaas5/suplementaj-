import { Perfil, Recomendacao } from '@/types'
import nutrientesData from '@/data/nutrientes.json'

/**
 * Algoritmo principal que gera recomendações personalizadas
 * baseadas no perfil do usuário
 */
export function gerarRecomendacoes(perfil: Perfil): Recomendacao[] {
  const recomendacoes: Recomendacao[] = []

  // ==============================================
  // VITAMINA D
  // ==============================================
  const precisaVitaminaD =
    perfil.exposicao_solar === 'minima' ||
    perfil.idade >= 50 ||
    perfil.condicoes_saude.includes('osteoporose') ||
    perfil.condicoes_saude.includes('osteopenia') ||
    perfil.status_reprodutivo === 'menopausa' ||
    perfil.status_reprodutivo === 'pos_menopausa'

  if (precisaVitaminaD) {
    const motivos: string[] = []

    if (perfil.exposicao_solar === 'minima') {
      motivos.push('Exposição solar limitada (principal fonte de vitamina D)')
    }
    if (perfil.idade >= 50) {
      motivos.push('Risco aumentado de osteoporose após os 50 anos')
    }
    if (perfil.status_reprodutivo === 'menopausa' || perfil.status_reprodutivo === 'pos_menopausa') {
      motivos.push('Menopausa aumenta perda de densidade óssea')
    }
    if (perfil.condicoes_saude.includes('osteoporose') || perfil.condicoes_saude.includes('osteopenia')) {
      motivos.push('Diagnóstico de problema ósseo')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-d',
      prioridade: 'alta',
      dose_min: 1000,
      dose_max: 2000,
      unidade: 'UI',
      motivos,
      referencias: ['ref-d-001', 'ref-d-002'],
      nota_especial: perfil.condicoes_saude.includes('osteoporose')
        ? 'Considere doses maiores (até 4.000 UI) sob supervisão médica'
        : undefined,
    })
  }

  // ==============================================
  // VITAMINA B12
  // ==============================================
  const precisaB12 =
    perfil.idade >= 50 ||
    perfil.dieta === 'vegetariana' ||
    perfil.dieta === 'vegana' ||
    perfil.medicamentos.includes('metformina') ||
    perfil.medicamentos.includes('omeprazol') ||
    perfil.medicamentos.includes('pantoprazol') ||
    perfil.medicamentos.includes('antiácidos') ||
    perfil.cirurgias.includes('bariátrica') ||
    perfil.cirurgias.includes('gastrectomia') ||
    perfil.sintomas.includes('fadiga') ||
    perfil.sintomas.includes('formigamento')

  if (precisaB12) {
    const motivos: string[] = []

    if (perfil.idade >= 50) {
      motivos.push('Absorção reduzida após os 50 anos devido à menor produção de ácido gástrico')
    }
    if (perfil.dieta === 'vegetariana' || perfil.dieta === 'vegana') {
      motivos.push('Dieta sem produtos animais (única fonte natural de B12)')
    }
    if (perfil.medicamentos.some((m) => ['metformina', 'omeprazol', 'pantoprazol', 'antiácidos'].includes(m))) {
      motivos.push('Medicamentos reduzem absorção intestinal de B12')
    }
    if (perfil.cirurgias.includes('bariátrica') || perfil.cirurgias.includes('gastrectomia')) {
      motivos.push('Cirurgia reduziu área de absorção de B12')
    }
    if (perfil.sintomas.includes('fadiga')) {
      motivos.push('Fadiga pode indicar deficiência de B12')
    }
    if (perfil.sintomas.includes('formigamento')) {
      motivos.push('Formigamento pode indicar deficiência de B12 (neuropatia)')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-b12',
      prioridade: 'alta',
      dose_min: 100,
      dose_max: 500,
      unidade: 'mcg',
      motivos,
      referencias: ['ref-b12-001', 'ref-b12-002'],
      nota_especial: 'Doses até 1.000 mcg/dia são seguras. Excesso é excretado pela urina.',
    })
  }

  // ==============================================
  // CÁLCIO
  // ==============================================
  const precisaCalcio =
    perfil.status_reprodutivo === 'menopausa' ||
    perfil.status_reprodutivo === 'pos_menopausa' ||
    perfil.condicoes_saude.includes('osteoporose') ||
    perfil.condicoes_saude.includes('osteopenia') ||
    perfil.dieta === 'vegana'

  if (precisaCalcio) {
    const motivos: string[] = []

    if (perfil.status_reprodutivo === 'menopausa' || perfil.status_reprodutivo === 'pos_menopausa') {
      motivos.push('Perda acelerada de massa óssea na menopausa')
    }
    if (perfil.condicoes_saude.includes('osteoporose') || perfil.condicoes_saude.includes('osteopenia')) {
      motivos.push('Diagnóstico de densidade óssea reduzida')
    }
    if (perfil.dieta === 'vegana') {
      motivos.push('Dieta sem laticínios (principal fonte de cálcio)')
    }

    recomendacoes.push({
      nutriente_slug: 'calcio',
      prioridade: 'alta',
      dose_min: 500,
      dose_max: 1000,
      unidade: 'mg',
      motivos,
      referencias: ['ref-ca-001'],
      nota_especial: 'Total (dieta + suplemento) deve ser 1.200-1.500 mg/dia. Dividir em 2 doses para melhor absorção.',
      interacao_alerta: 'Tomar junto com Vitamina D para melhor absorção',
    })
  }

  // ==============================================
  // MAGNÉSIO
  // ==============================================
  const precisaMagnesio =
    perfil.sintomas.includes('caimbras') ||
    perfil.condicoes_saude.includes('diabetes') ||
    perfil.status_reprodutivo === 'menopausa' ||
    precisaCalcio // Sinergia com cálcio

  if (precisaMagnesio) {
    const motivos: string[] = []

    if (perfil.sintomas.includes('caimbras')) {
      motivos.push('Cãibras frequentes podem indicar deficiência de magnésio')
    }
    if (precisaCalcio) {
      motivos.push('Magnésio trabalha em sinergia com cálcio para saúde óssea')
    }
    if (perfil.condicoes_saude.includes('diabetes')) {
      motivos.push('Diabetes aumenta perda urinária de magnésio')
    }

    recomendacoes.push({
      nutriente_slug: 'magnesio',
      prioridade: 'media',
      dose_min: 300,
      dose_max: 400,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Preferir formas queladas (citrato, glicinato) para melhor absorção e menos efeito laxativo',
    })
  }

  // ==============================================
  // FERRO - CUIDADO ESPECIAL
  // ==============================================
  const temMenstruacao =
    perfil.sexo === 'F' && perfil.idade < 50 && perfil.status_reprodutivo === 'menstruacao_regular'

  const precisaFerro =
    temMenstruacao || perfil.condicoes_saude.includes('anemia') || perfil.dieta === 'vegana'

  if (precisaFerro) {
    const motivos: string[] = []

    if (temMenstruacao) {
      motivos.push('Perda menstrual mensal de ferro')
    }
    if (perfil.condicoes_saude.includes('anemia')) {
      motivos.push('Diagnóstico de anemia')
    }
    if (perfil.dieta === 'vegana') {
      motivos.push('Dieta vegana (ferro vegetal tem menor absorção)')
    }

    recomendacoes.push({
      nutriente_slug: 'ferro',
      prioridade: perfil.condicoes_saude.includes('anemia') ? 'alta' : 'media',
      dose_min: 14,
      dose_max: 18,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Tomar com vitamina C para aumentar absorção. Evitar junto com cálcio ou chá.',
      contraindicacao: perfil.condicoes_saude.includes('hemocromatose')
        ? 'CONTRAINDICADO: Você tem hemocromatose (excesso de ferro)'
        : undefined,
    })
  } else if (
    perfil.sexo === 'F' &&
    (perfil.status_reprodutivo === 'menopausa' || perfil.status_reprodutivo === 'pos_menopausa')
  ) {
    // NÃO recomendar para pós-menopausa SEM anemia
    recomendacoes.push({
      nutriente_slug: 'ferro',
      prioridade: 'nao_recomendado',
      dose_min: 0,
      dose_max: 0,
      unidade: 'mg',
      motivos: [],
      referencias: [],
      nota_especial:
        'Ferro NÃO é recomendado após a menopausa (sem menstruação) a menos que você tenha anemia diagnosticada por exame.',
      contraindicacao:
        'Excesso de ferro pode ser prejudicial. Suplementar apenas se houver deficiência confirmada por exame.',
    })
  }

  // ==============================================
  // ÔMEGA-3
  // ==============================================
  const precisaOmega3 =
    perfil.idade >= 40 ||
    perfil.condicoes_saude.includes('cardiovascular') ||
    perfil.status_reprodutivo === 'menopausa' ||
    perfil.condicoes_saude.includes('depressao')

  if (precisaOmega3) {
    const motivos: string[] = []

    if (perfil.idade >= 40 || perfil.condicoes_saude.includes('cardiovascular')) {
      motivos.push('Saúde cardiovascular (anti-inflamatório, reduz triglicerídeos)')
    }
    if (perfil.status_reprodutivo === 'menopausa') {
      motivos.push('Pode ajudar com sintomas da menopausa e saúde cardiovascular')
    }
    if (perfil.condicoes_saude.includes('depressao')) {
      motivos.push('Evidências sugerem benefícios para humor e depressão')
    }

    recomendacoes.push({
      nutriente_slug: 'omega-3',
      prioridade: 'media',
      dose_min: 1000,
      dose_max: 2000,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Buscar EPA + DHA combinados. Preferir óleo de peixe purificado ou algas (veganos).',
    })
  }

  // ==============================================
  // ÁCIDO FÓLICO (B9)
  // ==============================================
  if (perfil.status_reprodutivo === 'gravida' || perfil.status_reprodutivo === 'tentando_engravidar') {
    recomendacoes.push({
      nutriente_slug: 'acido-folico',
      prioridade: 'alta',
      dose_min: 400,
      dose_max: 800,
      unidade: 'mcg',
      motivos: ['ESSENCIAL para prevenção de defeitos do tubo neural no feto'],
      referencias: [],
      nota_especial: 'Iniciar ANTES da gravidez se possível. Dose pode ser maior sob orientação médica.',
    })
  }

  // ==============================================
  // VITAMINA C
  // ==============================================
  if (perfil.tabagismo === 'sim' || perfil.sintomas.includes('imunidade baixa')) {
    const motivos: string[] = []

    if (perfil.tabagismo === 'sim') {
      motivos.push('Fumantes têm necessidade aumentada de vitamina C')
    }
    if (perfil.sintomas.includes('imunidade baixa')) {
      motivos.push('Vitamina C auxilia na função imunológica')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-c',
      prioridade: 'media',
      dose_min: 500,
      dose_max: 1000,
      unidade: 'mg',
      motivos,
      referencias: [],
    })
  }

  // ==============================================
  // ZINCO
  // ==============================================
  if (perfil.sintomas.includes('imunidade baixa') || perfil.dieta === 'vegetariana' || perfil.dieta === 'vegana') {
    const motivos: string[] = []

    if (perfil.sintomas.includes('imunidade baixa')) {
      motivos.push('Zinco é essencial para função imunológica')
    }
    if (perfil.dieta === 'vegetariana' || perfil.dieta === 'vegana') {
      motivos.push('Zinco vegetal tem menor biodisponibilidade')
    }

    recomendacoes.push({
      nutriente_slug: 'zinco',
      prioridade: 'media',
      dose_min: 15,
      dose_max: 30,
      unidade: 'mg',
      motivos,
      referencias: [],
    })
  }

  // ==============================================
  // VITAMINA K2
  // ==============================================
  if (precisaCalcio && precisaVitaminaD) {
    recomendacoes.push({
      nutriente_slug: 'vitamina-k2',
      prioridade: 'media',
      dose_min: 100,
      dose_max: 200,
      unidade: 'mcg',
      motivos: ['Direciona cálcio para os ossos, evitando calcificação arterial (trabalha com vitaminas D e cálcio)'],
      referencias: [],
      contraindicacao: perfil.medicamentos.includes('varfarina')
        ? 'CONTRAINDICADO: Você toma anticoagulante (varfarina) - vitamina K2 antagoniza o efeito'
        : undefined,
    })
  }

  // ==============================================
  // IODO
  // ==============================================
  if (perfil.status_reprodutivo === 'gravida') {
    recomendacoes.push({
      nutriente_slug: 'iodo',
      prioridade: 'alta',
      dose_min: 150,
      dose_max: 220,
      unidade: 'mcg',
      motivos: ['Essencial para desenvolvimento fetal e função tireoidiana'],
      referencias: [],
    })
  }

  // ==============================================
  // ORDENAR POR PRIORIDADE
  // ==============================================
  const ordem: Record<string, number> = { alta: 0, media: 1, baixa: 2, nao_recomendado: 3 }
  return recomendacoes.sort((a, b) => ordem[a.prioridade] - ordem[b.prioridade])
}

/**
 * Função auxiliar para enriquecer recomendações com dados completos dos nutrientes
 */
export function enriquecerRecomendacoes(recomendacoes: Recomendacao[]) {
  return recomendacoes.map((rec) => {
    const nutrienteCompleto = nutrientesData[rec.nutriente_slug as keyof typeof nutrientesData]
    if (!nutrienteCompleto) {
      throw new Error(`Nutriente não encontrado: ${rec.nutriente_slug}`)
    }
    return {
      ...rec,
      nutriente_nome: nutrienteCompleto.nome,
      nutriente_emoji: nutrienteCompleto.emoji,
      nutriente_completo: nutrienteCompleto,
    }
  })
}
