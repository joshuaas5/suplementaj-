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
  // VITAMINA B6
  // ==============================================
  const precisaB6 =
    perfil.sexo === 'F' ||
    perfil.medicamentos.includes('anticoncepcional') ||
    perfil.condicoes_saude.includes('depressao') ||
    (perfil.status_reprodutivo === 'gravida' && perfil.sintomas.includes('nausea'))

  if (precisaB6) {
    const motivos: string[] = []

    if (perfil.sexo === 'F' && !perfil.status_reprodutivo?.includes('menopausa')) {
      motivos.push('B6 ajuda na TPM e regulação hormonal feminina')
    }
    if (perfil.medicamentos.includes('anticoncepcional')) {
      motivos.push('Anticoncepcionais reduzem níveis de vitamina B6')
    }
    if (perfil.condicoes_saude.includes('depressao')) {
      motivos.push('B6 é essencial para produção de serotonina e dopamina')
    }
    if (perfil.status_reprodutivo === 'gravida' && perfil.sintomas.includes('nausea')) {
      motivos.push('B6 ajuda a reduzir náuseas na gravidez')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-b6',
      prioridade: 'media',
      dose_min: 10,
      dose_max: 50,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Não exceder 100mg/dia. Doses altas crônicas podem causar neuropatia periférica.',
    })
  }

  // ==============================================
  // BIOTINA (B7)
  // ==============================================
  if (
    perfil.status_reprodutivo === 'gravida' ||
    perfil.sintomas.includes('queda de cabelo') ||
    perfil.sintomas.includes('unhas fracas')
  ) {
    const motivos: string[] = []

    if (perfil.status_reprodutivo === 'gravida') {
      motivos.push('Necessidade aumentada durante gravidez')
    }
    if (perfil.sintomas.includes('queda de cabelo')) {
      motivos.push('Biotina fortalece cabelos e reduz queda')
    }
    if (perfil.sintomas.includes('unhas fracas')) {
      motivos.push('Biotina fortalece unhas quebradiças')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-b7',
      prioridade: 'media',
      dose_min: 2500,
      dose_max: 10000,
      unidade: 'mcg',
      motivos,
      referencias: [],
      nota_especial: 'Doses para cabelo e unhas são bem acima da RDA. Extremamente segura.',
    })
  }

  // ==============================================
  // COENZIMA Q10
  // ==============================================
  const precisaCoQ10 =
    perfil.medicamentos.includes('estatina') ||
    perfil.idade >= 40 ||
    perfil.condicoes_saude.includes('cardiovascular') ||
    perfil.sintomas.includes('fadiga')

  if (precisaCoQ10) {
    const motivos: string[] = []

    if (perfil.medicamentos.includes('estatina')) {
      motivos.push('ESSENCIAL: Estatinas REDUZEM drasticamente os níveis de CoQ10')
    }
    if (perfil.condicoes_saude.includes('cardiovascular')) {
      motivos.push('CoQ10 melhora função cardíaca e energia mitocondrial')
    }
    if (perfil.idade >= 40) {
      motivos.push('Produção natural de CoQ10 diminui após os 40 anos')
    }
    if (perfil.sintomas.includes('fadiga')) {
      motivos.push('CoQ10 é essencial para produção de energia celular (ATP)')
    }

    recomendacoes.push({
      nutriente_slug: 'coenzima-q10',
      prioridade: perfil.medicamentos.includes('estatina') ? 'alta' : 'media',
      dose_min: 100,
      dose_max: 200,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Preferir forma Ubiquinol (reduzida) se >40 anos. Tomar com gordura para melhor absorção.',
    })
  }

  // ==============================================
  // PROBIÓTICOS
  // ==============================================
  const precisaProbioticos =
    perfil.medicamentos.includes('antibiotico') ||
    perfil.condicoes_saude.includes('sindrome_intestino_irritavel') ||
    perfil.sintomas.includes('digestao irregular') ||
    perfil.sintomas.includes('imunidade baixa')

  if (precisaProbioticos) {
    const motivos: string[] = []

    if (perfil.medicamentos.includes('antibiotico')) {
      motivos.push('ESSENCIAL: Antibióticos destroem microbiota intestinal. Restauração é crucial.')
    }
    if (perfil.condicoes_saude.includes('sindrome_intestino_irritavel')) {
      motivos.push('Probióticos melhoram sintomas de SII')
    }
    if (perfil.sintomas.includes('digestao irregular')) {
      motivos.push('Restauram equilíbrio intestinal e melhoram digestão')
    }
    if (perfil.sintomas.includes('imunidade baixa')) {
      motivos.push('70% do sistema imune está no intestino - probióticos fortalecem imunidade')
    }

    recomendacoes.push({
      nutriente_slug: 'probioticos',
      prioridade: perfil.medicamentos.includes('antibiotico') ? 'alta' : 'media',
      dose_min: 5000000000,
      dose_max: 10000000000,
      unidade: 'UFC',
      motivos,
      referencias: [],
      nota_especial: perfil.medicamentos.includes('antibiotico')
        ? 'Tomar 2-3h após antibiótico. Continuar por 2 semanas após término do antibiótico.'
        : 'Buscar multi-cepas com Lactobacillus e Bifidobacterium',
    })
  }

  // ==============================================
  // COLÁGENO
  // ==============================================
  if (
    perfil.idade >= 30 ||
    perfil.sintomas.includes('dor articular') ||
    perfil.condicoes_saude.includes('osteoartrite')
  ) {
    const motivos: string[] = []

    if (perfil.idade >= 30) {
      motivos.push('Produção de colágeno diminui ~1%/ano após 25 anos')
    }
    if (perfil.sintomas.includes('dor articular')) {
      motivos.push('Colágeno tipo II melhora saúde das cartilagens e reduz dor articular')
    }
    if (perfil.condicoes_saude.includes('osteoartrite')) {
      motivos.push('Evidências sólidas de benefício para osteoartrite')
    }

    const doseMin = perfil.sintomas.includes('dor articular') || perfil.condicoes_saude.includes('osteoartrite') ? 10000 : 2500
    const doseMax = perfil.sintomas.includes('dor articular') || perfil.condicoes_saude.includes('osteoartrite') ? 15000 : 5000

    recomendacoes.push({
      nutriente_slug: 'colageno',
      prioridade: perfil.condicoes_saude.includes('osteoartrite') ? 'alta' : 'media',
      dose_min: doseMin,
      dose_max: doseMax,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: perfil.sintomas.includes('dor articular')
        ? 'Para articulações: Colágeno tipo II (40mg UC-II) ou hidrolisado 10-15g/dia'
        : 'Para pele: peptídeos de colágeno hidrolisado 2,5-5g/dia',
    })
  }

  // ==============================================
  // CROMO
  // ==============================================
  if (perfil.condicoes_saude.includes('diabetes') || perfil.condicoes_saude.includes('sindrome_metabolica')) {
    const motivos: string[] = []

    if (perfil.condicoes_saude.includes('diabetes')) {
      motivos.push('Cromo potencializa ação da insulina e melhora controle glicêmico')
    }
    if (perfil.condicoes_saude.includes('sindrome_metabolica')) {
      motivos.push('Melhora sensibilidade à insulina e metabolismo de carboidratos')
    }

    recomendacoes.push({
      nutriente_slug: 'cromo',
      prioridade: 'media',
      dose_min: 200,
      dose_max: 400,
      unidade: 'mcg',
      motivos,
      referencias: [],
      nota_especial: 'Monitorar glicemia se diabético - pode potencializar medicamentos antidiabéticos.',
    })
  }

  // ==============================================
  // VITAMINAS B1, B2, B3 (COMPLEXO B)
  // ==============================================
  if (
    perfil.alcool === 'frequente' ||
    perfil.idade >= 60 ||
    perfil.sintomas.includes('fadiga') ||
    perfil.dieta === 'vegana'
  ) {
    const motivos: string[] = []

    if (perfil.alcool === 'frequente') {
      motivos.push('Consumo de álcool depleta vitaminas do complexo B, especialmente B1')
    }
    if (perfil.idade >= 60) {
      motivos.push('Absorção reduzida de vitaminas B com envelhecimento')
    }
    if (perfil.sintomas.includes('fadiga')) {
      motivos.push('Vitaminas B são essenciais para metabolismo energético')
    }

    // Recomendar complexo B completo
    recomendacoes.push({
      nutriente_slug: 'vitamina-b1',
      prioridade: perfil.alcool === 'frequente' ? 'alta' : 'media',
      dose_min: 10,
      dose_max: 50,
      unidade: 'mg',
      motivos: ['Parte do complexo B - essencial para metabolismo energético', ...motivos],
      referencias: [],
      nota_especial: 'Considerar suplemento de Complexo B para cobertura completa.',
    })
  }

  // ==============================================
  // GLUCOSAMINA + MSM (Para articulações)
  // ==============================================
  if (perfil.sintomas.includes('dor articular') || perfil.condicoes_saude.includes('osteoartrite')) {
    const motivos = [
      'Glucosamina ajuda na regeneração de cartilagens',
      'MSM possui efeito anti-inflamatório natural',
      'Combinação potencializa efeitos para saúde articular',
    ]

    recomendacoes.push({
      nutriente_slug: 'glucosamina',
      prioridade: 'alta',
      dose_min: 1500,
      dose_max: 2000,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Preferir sulfato de glucosamina. Combinar com MSM e Colágeno tipo II para melhores resultados.',
    })

    recomendacoes.push({
      nutriente_slug: 'msm',
      prioridade: 'media',
      dose_min: 3000,
      dose_max: 6000,
      unidade: 'mg',
      motivos: ['Anti-inflamatório natural para articulações', 'Trabalha em sinergia com glucosamina'],
      referencias: [],
    })
  }

  // ==============================================
  // L-CARNITINA
  // ==============================================
  if (
    perfil.dieta === 'vegetariana' ||
    perfil.dieta === 'vegana' ||
    perfil.sintomas.includes('fadiga') ||
    perfil.atividade_fisica === 'intenso'
  ) {
    const motivos: string[] = []

    if (perfil.dieta === 'vegetariana' || perfil.dieta === 'vegana') {
      motivos.push('Dietas vegetais são pobres em carnitina (presente principalmente em carnes)')
    }
    if (perfil.sintomas.includes('fadiga')) {
      motivos.push('Carnitina transporta gorduras para produção de energia')
    }
    if (perfil.atividade_fisica === 'intenso') {
      motivos.push('Melhora performance e recuperação muscular')
    }

    recomendacoes.push({
      nutriente_slug: 'l-carnitina',
      prioridade: 'media',
      dose_min: 500,
      dose_max: 2000,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Para função cognitiva, preferir Acetil-L-Carnitina (ALCAR).',
    })
  }

  // ==============================================
  // GLUTAMINA
  // ==============================================
  if (
    perfil.condicoes_saude.includes('sindrome_intestino_irritavel') ||
    perfil.condicoes_saude.includes('doenca_celiaca') ||
    perfil.condicoes_saude.includes('doenca_crohn') ||
    perfil.atividade_fisica === 'intenso'
  ) {
    const motivos: string[] = []

    if (
      perfil.condicoes_saude.includes('sindrome_intestino_irritavel') ||
      perfil.condicoes_saude.includes('doenca_celiaca') ||
      perfil.condicoes_saude.includes('doenca_crohn')
    ) {
      motivos.push('Glutamina é combustível primário para células intestinais')
      motivos.push('Ajuda a restaurar integridade da barreira intestinal (leaky gut)')
    }
    if (perfil.atividade_fisica === 'intenso') {
      motivos.push('Melhora recuperação muscular e função imunológica')
    }

    recomendacoes.push({
      nutriente_slug: 'glutamina',
      prioridade: 'media',
      dose_min: 5,
      dose_max: 10,
      unidade: 'g',
      motivos,
      referencias: [],
      nota_especial: 'Tomar em jejum ou entre refeições para melhor absorção.',
    })
  }

  // ==============================================
  // NAC (N-Acetilcisteína)
  // ==============================================
  if (
    perfil.tabagismo === 'sim' ||
    perfil.condicoes_saude.includes('doenca_hepatica') ||
    perfil.sintomas.includes('problemas respiratorios')
  ) {
    const motivos: string[] = []

    if (perfil.tabagismo === 'sim') {
      motivos.push('NAC é mucolítico e protege pulmões de fumantes')
    }
    if (perfil.condicoes_saude.includes('doenca_hepatica')) {
      motivos.push('NAC é precursor de glutationa - essencial para desintoxicação hepática')
    }
    if (perfil.sintomas.includes('problemas respiratorios')) {
      motivos.push('NAC fluidifica muco e facilita expectoração')
    }

    recomendacoes.push({
      nutriente_slug: 'nac',
      prioridade: 'media',
      dose_min: 600,
      dose_max: 1200,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'NAC aumenta níveis de glutationa - o antioxidante mais importante do corpo.',
    })
  }

  // ==============================================
  // TAURINA
  // ==============================================
  if (perfil.dieta === 'vegana' || perfil.condicoes_saude.includes('cardiovascular')) {
    const motivos: string[] = []

    if (perfil.dieta === 'vegana') {
      motivos.push('Taurina não está presente em alimentos vegetais')
    }
    if (perfil.condicoes_saude.includes('cardiovascular')) {
      motivos.push('Taurina melhora função cardíaca e regula pressão arterial')
    }

    recomendacoes.push({
      nutriente_slug: 'taurina',
      prioridade: 'media',
      dose_min: 500,
      dose_max: 2000,
      unidade: 'mg',
      motivos,
      referencias: [],
    })
  }

  // ==============================================
  // VITAMINA A
  // ==============================================
  const precisaVitaminaA =
    perfil.sintomas.includes('visao_problemas') ||
    perfil.condicoes_saude.includes('visao_problemas') ||
    perfil.idade < 18 ||
    perfil.status_reprodutivo === 'gravida'

  if (precisaVitaminaA) {
    const motivos: string[] = []

    if (perfil.sintomas.includes('visao_problemas')) {
      motivos.push('Vitamina A é essencial para saúde ocular e visão noturna')
    }
    if (perfil.status_reprodutivo === 'gravida') {
      motivos.push('Importante para desenvolvimento fetal')
    }
    if (perfil.idade < 18) {
      motivos.push('Essencial para crescimento e desenvolvimento')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-a',
      prioridade: 'media',
      dose_min: 700,
      dose_max: 900,
      unidade: 'mcg',
      motivos,
      referencias: [],
      nota_especial:
        perfil.status_reprodutivo === 'gravida'
          ? 'Não exceder 3.000 mcg/dia durante gestação (risco de malformações)'
          : undefined,
    })
  }

  // ==============================================
  // VITAMINA E
  // ==============================================
  if (
    perfil.idade >= 50 ||
    perfil.condicoes_saude.includes('cardiovascular') ||
    perfil.sintomas.includes('pele_seca')
  ) {
    const motivos: string[] = []

    if (perfil.idade >= 50) {
      motivos.push('Antioxidante importante para proteção celular')
    }
    if (perfil.condicoes_saude.includes('cardiovascular')) {
      motivos.push('Protege contra oxidação do colesterol LDL')
    }
    if (perfil.sintomas.includes('pele_seca')) {
      motivos.push('Melhora saúde da pele')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-e',
      prioridade: 'baixa',
      dose_min: 15,
      dose_max: 30,
      unidade: 'mg',
      motivos,
      referencias: [],
    })
  }

  // ==============================================
  // VITAMINA B2 (RIBOFLAVINA)
  // ==============================================
  if (
    perfil.sintomas.includes('fadiga') ||
    perfil.sintomas.includes('enxaqueca') ||
    perfil.atividade_fisica === 'intenso'
  ) {
    const motivos: string[] = []

    if (perfil.sintomas.includes('enxaqueca')) {
      motivos.push('Riboflavina (400mg/dia) reduz frequência de enxaquecas')
    }
    if (perfil.atividade_fisica === 'intenso') {
      motivos.push('Atletas têm necessidades aumentadas de vitaminas B')
    }
    if (perfil.sintomas.includes('fadiga')) {
      motivos.push('Importante para produção de energia celular')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-b2',
      prioridade: perfil.sintomas.includes('enxaqueca') ? 'media' : 'baixa',
      dose_min: 1.3,
      dose_max: 400,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: perfil.sintomas.includes('enxaqueca')
        ? 'Para enxaqueca, usar dose de 400mg/dia por 3-4 meses'
        : undefined,
    })
  }

  // ==============================================
  // VITAMINA B3 (NIACINA)
  // ==============================================
  if (perfil.condicoes_saude.includes('colesterol_alto') || perfil.condicoes_saude.includes('cardiovascular')) {
    const motivos: string[] = []

    if (perfil.condicoes_saude.includes('colesterol_alto')) {
      motivos.push('Niacina aumenta HDL (colesterol bom) e reduz LDL')
    }
    if (perfil.condicoes_saude.includes('cardiovascular')) {
      motivos.push('Melhora perfil lipídico e saúde cardiovascular')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-b3',
      prioridade: 'baixa',
      dose_min: 16,
      dose_max: 35,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Doses altas (>100mg) devem ser supervisionadas por médico (flush de niacina)',
    })
  }

  // ==============================================
  // VITAMINA B5 (ÁCIDO PANTOTÊNICO)
  // ==============================================
  if (perfil.sintomas.includes('fadiga') || perfil.atividade_fisica === 'intenso') {
    const motivos: string[] = []

    if (perfil.sintomas.includes('fadiga')) {
      motivos.push('Essencial para metabolismo energético')
    }
    if (perfil.atividade_fisica === 'intenso') {
      motivos.push('Necessário para síntese de coenzima A e energia')
    }

    recomendacoes.push({
      nutriente_slug: 'vitamina-b5',
      prioridade: 'baixa',
      dose_min: 5,
      dose_max: 10,
      unidade: 'mg',
      motivos,
      referencias: [],
    })
  }

  // ==============================================
  // SELÊNIO
  // ==============================================
  if (
    perfil.condicoes_saude.includes('tireoide') ||
    perfil.condicoes_saude.includes('hashimoto') ||
    perfil.sintomas.includes('fadiga') ||
    perfil.idade >= 50
  ) {
    const motivos: string[] = []

    if (perfil.condicoes_saude.includes('tireoide') || perfil.condicoes_saude.includes('hashimoto')) {
      motivos.push('Essencial para conversão de T4 em T3 (hormônios tireoidianos)')
    }
    if (perfil.idade >= 50) {
      motivos.push('Antioxidante importante para proteção celular')
    }
    if (perfil.sintomas.includes('fadiga')) {
      motivos.push('Deficiência pode causar fadiga e fraqueza')
    }

    recomendacoes.push({
      nutriente_slug: 'selenio',
      prioridade: perfil.condicoes_saude.includes('tireoide') || perfil.condicoes_saude.includes('hashimoto') ? 'alta' : 'media',
      dose_min: 55,
      dose_max: 200,
      unidade: 'mcg',
      motivos,
      referencias: [],
      nota_especial: 'Não exceder 400 mcg/dia (risco de toxicidade)',
    })
  }

  // ==============================================
  // ASTAXANTINA
  // ==============================================
  if (
    perfil.idade >= 40 ||
    perfil.atividade_fisica === 'intenso' ||
    perfil.sintomas.includes('dor_articular')
  ) {
    const motivos: string[] = []

    if (perfil.idade >= 40) {
      motivos.push('Potente antioxidante para proteção contra envelhecimento')
    }
    if (perfil.atividade_fisica === 'intenso') {
      motivos.push('Reduz dano muscular e melhora recuperação')
    }
    if (perfil.sintomas.includes('dor_articular')) {
      motivos.push('Propriedades anti-inflamatórias')
    }

    recomendacoes.push({
      nutriente_slug: 'astaxantina',
      prioridade: 'baixa',
      dose_min: 4,
      dose_max: 12,
      unidade: 'mg',
      motivos,
      referencias: [],
    })
  }

  // ==============================================
  // COBRE
  // ==============================================
  if (perfil.sintomas.includes('anemia') || perfil.condicoes_saude.includes('osteoporose')) {
    const motivos: string[] = []

    if (perfil.sintomas.includes('anemia')) {
      motivos.push('Necessário para absorção e utilização de ferro')
    }
    if (perfil.condicoes_saude.includes('osteoporose')) {
      motivos.push('Importante para formação óssea e colágeno')
    }

    recomendacoes.push({
      nutriente_slug: 'cobre',
      prioridade: 'baixa',
      dose_min: 0.9,
      dose_max: 2,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Geralmente obtido suficientemente pela dieta',
    })
  }

  // ==============================================
  // CREATINA
  // ==============================================
  if (
    perfil.atividade_fisica === 'intenso' ||
    perfil.atividade_fisica === 'moderado' ||
    perfil.idade >= 50 ||
    perfil.dieta === 'vegetariana' ||
    perfil.dieta === 'vegana'
  ) {
    const motivos: string[] = []

    if (perfil.atividade_fisica === 'intenso') {
      motivos.push('Melhora força, potência e ganho de massa muscular')
    }
    if (perfil.idade >= 50) {
      motivos.push('Previne perda de massa muscular relacionada à idade')
    }
    if (perfil.dieta === 'vegetariana' || perfil.dieta === 'vegana') {
      motivos.push('Vegetarianos têm estoques reduzidos (creatina vem de carne)')
    }

    recomendacoes.push({
      nutriente_slug: 'creatina',
      prioridade: perfil.atividade_fisica === 'intenso' ? 'media' : 'baixa',
      dose_min: 3,
      dose_max: 5,
      unidade: 'g',
      motivos,
      referencias: [],
      nota_especial: 'Tomar com refeição para melhor absorção. Beber água abundante.',
    })
  }

  // ==============================================
  // FÓSFORO
  // ==============================================
  // Raramente deficiente - geralmente obtido pela dieta
  // Não adicionar rotineiramente a menos que indicação específica

  // ==============================================
  // LUTEÍNA E ZEAXANTINA
  // ==============================================
  if (
    perfil.idade >= 50 ||
    perfil.sintomas.includes('visao_problemas') ||
    perfil.condicoes_saude.includes('visao_problemas')
  ) {
    const motivos: string[] = []

    if (perfil.idade >= 50) {
      motivos.push('Protege contra degeneração macular relacionada à idade')
    }
    if (perfil.sintomas.includes('visao_problemas')) {
      motivos.push('Melhora saúde da mácula e filtro de luz azul')
    }

    recomendacoes.push({
      nutriente_slug: 'luteina-zeaxantina',
      prioridade: 'media',
      dose_min: 10,
      dose_max: 20,
      unidade: 'mg',
      motivos,
      referencias: [],
    })
  }

  // ==============================================
  // MANGANÊS
  // ==============================================
  if (perfil.condicoes_saude.includes('osteoporose') || perfil.condicoes_saude.includes('diabetes')) {
    const motivos: string[] = []

    if (perfil.condicoes_saude.includes('osteoporose')) {
      motivos.push('Importante para formação óssea')
    }
    if (perfil.condicoes_saude.includes('diabetes')) {
      motivos.push('Auxilia metabolismo de carboidratos')
    }

    recomendacoes.push({
      nutriente_slug: 'manganes',
      prioridade: 'baixa',
      dose_min: 2.3,
      dose_max: 5,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Geralmente obtido suficientemente pela dieta',
    })
  }

  // ==============================================
  // MOLIBDÊNIO
  // ==============================================
  // Raramente deficiente - geralmente obtido pela dieta
  // Não adicionar rotineiramente

  // ==============================================
  // POTÁSSIO
  // ==============================================
  if (
    perfil.condicoes_saude.includes('hipertensao') ||
    perfil.sintomas.includes('caimbras') ||
    perfil.atividade_fisica === 'intenso'
  ) {
    const motivos: string[] = []

    if (perfil.condicoes_saude.includes('hipertensao')) {
      motivos.push('Ajuda a regular pressão arterial')
    }
    if (perfil.sintomas.includes('caimbras')) {
      motivos.push('Deficiência pode causar cãibras musculares')
    }
    if (perfil.atividade_fisica === 'intenso') {
      motivos.push('Perdido pelo suor durante exercício intenso')
    }

    recomendacoes.push({
      nutriente_slug: 'potassio',
      prioridade: 'baixa',
      dose_min: 2000,
      dose_max: 3500,
      unidade: 'mg',
      motivos,
      referencias: [],
      nota_especial: 'Priorize alimentos ricos em potássio (banana, batata, feijão). Suplementos podem ser perigosos.',
    })
  }

  // ==============================================
  // QUERCETINA
  // ==============================================
  if (
    perfil.sintomas.includes('alergias') ||
    perfil.condicoes_saude.includes('cardiovascular') ||
    perfil.idade >= 50
  ) {
    const motivos: string[] = []

    if (perfil.sintomas.includes('alergias')) {
      motivos.push('Propriedades anti-histamínicas naturais')
    }
    if (perfil.condicoes_saude.includes('cardiovascular')) {
      motivos.push('Antioxidante com efeitos cardioprotetores')
    }
    if (perfil.idade >= 50) {
      motivos.push('Propriedades anti-inflamatórias e antioxidantes')
    }

    recomendacoes.push({
      nutriente_slug: 'quercetina',
      prioridade: 'baixa',
      dose_min: 500,
      dose_max: 1000,
      unidade: 'mg',
      motivos,
      referencias: [],
    })
  }

  // ==============================================
  // RESVERATROL
  // ==============================================
  if (
    perfil.idade >= 40 ||
    perfil.condicoes_saude.includes('cardiovascular') ||
    perfil.condicoes_saude.includes('diabetes')
  ) {
    const motivos: string[] = []

    if (perfil.idade >= 40) {
      motivos.push('Ativa sirtuínas (proteínas da longevidade)')
    }
    if (perfil.condicoes_saude.includes('cardiovascular')) {
      motivos.push('Protege sistema cardiovascular e melhora função endotelial')
    }
    if (perfil.condicoes_saude.includes('diabetes')) {
      motivos.push('Melhora sensibilidade à insulina')
    }

    recomendacoes.push({
      nutriente_slug: 'resveratrol',
      prioridade: 'baixa',
      dose_min: 150,
      dose_max: 500,
      unidade: 'mg',
      motivos,
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
