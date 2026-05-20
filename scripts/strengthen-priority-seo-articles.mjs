import fs from 'node:fs'
import path from 'node:path'

const articlesPath = path.join(process.cwd(), 'data', 'artigos.json')
const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))
const UPDATED_AT = '2026-05-20'
const REVIEWER = 'Equipe editorial Suplementa Já'
const MARKER = 'Plano prático para usar este guia'

const sources = {
  creatina: [
    {
      titulo: 'International Society of Sports Nutrition position stand: creatine supplementation',
      orgao: 'Journal of the International Society of Sports Nutrition / PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28615996/',
    },
    {
      titulo: 'Creatine supplementation in exercise, sport, and medicine',
      orgao: 'Journal of the International Society of Sports Nutrition',
      url: 'https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z',
    },
  ],
  whey: [
    {
      titulo: 'International Society of Sports Nutrition Position Stand: protein and exercise',
      orgao: 'Journal of the International Society of Sports Nutrition / PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28642676/',
    },
    {
      titulo: 'Protein and exercise position stand',
      orgao: 'Journal of the International Society of Sports Nutrition',
      url: 'https://link.springer.com/article/10.1186/s12970-017-0177-8',
    },
  ],
  calorias: [
    {
      titulo: 'A new predictive equation for resting energy expenditure in healthy individuals',
      orgao: 'American Journal of Clinical Nutrition / PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/2305711/',
    },
    {
      titulo: 'Dietary Guidelines for Americans',
      orgao: 'U.S. Department of Health and Human Services',
      url: 'https://www.dietaryguidelines.gov/',
    },
  ],
  micronutrientes: [
    {
      titulo: 'Vitamin and Mineral Supplement Fact Sheets',
      orgao: 'NIH Office of Dietary Supplements',
      url: 'https://ods.od.nih.gov/factsheets/list-VitaminsMinerals/',
    },
    {
      titulo: 'Vitamins and Minerals',
      orgao: 'National Center for Complementary and Integrative Health',
      url: 'https://www.nccih.nih.gov/health/vitamins-and-minerals',
    },
  ],
  compra: [
    {
      titulo: 'Dietary Supplements: What You Need to Know',
      orgao: 'NIH Office of Dietary Supplements',
      url: 'https://ods.od.nih.gov/factsheets/WYNTK-Consumer/',
    },
    {
      titulo: 'Dietary Supplement Label Database',
      orgao: 'NIH Office of Dietary Supplements',
      url: 'https://dsld.od.nih.gov/',
    },
  ],
}

const configs = {
  'calculadora-nutricional-calorias-macros': {
    hub: 'calorias-macros',
    source: 'calorias',
    title: 'Calculadora Nutricional ou de Calorias: Qual Usar Primeiro?',
    description: 'Entenda quando usar calculadora de calorias, TDEE, macros e proteína para emagrecer, ganhar massa ou ajustar a dieta com menos chute.',
    intent: 'escolher a ferramenta certa antes de mexer na dieta',
    decision: 'Se você ainda não sabe seu gasto diário, comece por calorias/TDEE. Se já sabe a meta calórica, avance para macros. Se o problema é bater proteína, use a calculadora de proteína por peso.',
    tableRows: [
      ['Não sei meu gasto diário', 'Calculadora de calorias/TDEE', 'Define o ponto de partida'],
      ['Já tenho calorias-alvo', 'Calculadora de macros', 'Distribui proteína, carboidrato e gordura'],
      ['Só falta proteína', 'Calculadora de proteína', 'Evita excesso de suplemento'],
      ['Quero dose de creatina', 'Calculadora de creatina', 'Usa peso corporal como referência'],
    ],
    mistakes: [
      'copiar calorias de outra pessoa sem considerar peso, altura, rotina e objetivo',
      'mudar calorias todos os dias antes de observar tendência por pelo menos duas semanas',
      'achar que macro perfeito compensa sono ruim, treino inconsistente e baixa adesão',
      'usar suplemento para corrigir uma dieta que ainda não tem estrutura mínima',
    ],
  },
  'mifflin-st-jeor-formula': {
    hub: 'calorias-macros',
    source: 'calorias',
    title: 'Fórmula Mifflin-St Jeor: Como Calcular TMB e TDEE',
    description: 'Veja como a fórmula Mifflin-St Jeor estima metabolismo basal, como transformar TMB em TDEE e quais erros evitar no cálculo.',
    intent: 'calcular metabolismo basal com uma fórmula melhor para adultos modernos',
    decision: 'Use Mifflin-St Jeor para estimar TMB, multiplique pelo fator de atividade para chegar no TDEE e trate o resultado como estimativa inicial, não como verdade absoluta.',
    tableRows: [
      ['TMB', 'Energia em repouso', 'Não inclui treino nem rotina'],
      ['TDEE', 'Gasto diário total', 'Inclui atividade e é melhor para dieta'],
      ['Déficit', 'TDEE menos calorias', 'Usado para emagrecer'],
      ['Superávit', 'TDEE mais calorias', 'Usado para ganhar massa'],
    ],
    mistakes: [
      'confundir TMB com calorias para emagrecer',
      'escolher fator de atividade alto só porque treina alguns dias por semana',
      'ignorar variações de peso, retenção e ciclo menstrual ao avaliar resultado',
      'recalcular todo dia em vez de acompanhar média semanal',
    ],
  },
  'macros-cutting-como-calcular': {
    hub: 'calorias-macros',
    source: 'calorias',
    title: 'Macros Para Cutting: Proteína, Carboidrato e Gordura Sem Loucura',
    description: 'Aprenda a distribuir macros no cutting preservando massa muscular, energia para treinar e adesão à dieta.',
    intent: 'perder gordura com déficit calórico sem destruir treino e saciedade',
    decision: 'No cutting, comece definindo calorias, mantenha proteína suficiente, preserve uma gordura mínima e ajuste carboidratos conforme treino, fome e evolução do peso.',
    tableRows: [
      ['Proteína', 'Preservar massa magra e saciedade', 'Prioridade alta'],
      ['Carboidrato', 'Sustentar treino e rotina', 'Ajustável'],
      ['Gordura', 'Hormônios e aderência', 'Não deve zerar'],
      ['Fibra', 'Saciedade e intestino', 'Acompanhar junto'],
    ],
    mistakes: [
      'baixar carboidrato demais logo no início e perder desempenho rapidamente',
      'usar proteína em excesso e deixar pouco espaço para comida de verdade',
      'não ajustar calorias quando o peso estabiliza por várias semanas',
      'avaliar o cutting por um único dia de balança',
    ],
  },
  'quantas-calorias-comer-por-dia': {
    hub: 'calorias-macros',
    source: 'calorias',
    title: 'Quantas Calorias Comer Por Dia? Método Simples Para Ajustar',
    description: 'Veja como estimar calorias por dia, criar déficit ou superávit e ajustar o plano usando peso, medidas e adesão.',
    intent: 'definir uma meta diária realista de calorias',
    decision: 'Calcule uma estimativa de TDEE, escolha um ajuste pequeno para o objetivo e acompanhe a média de peso por 14 dias antes de mudar a meta.',
    tableRows: [
      ['Manutenção', 'TDEE aproximado', 'Peso tende a estabilizar'],
      ['Emagrecimento', 'Déficit moderado', 'Perda gradual e sustentável'],
      ['Ganho de massa', 'Superávit moderado', 'Sobe peso com menos gordura'],
      ['Recomposição', 'Perto da manutenção', 'Mais lento, porém possível'],
    ],
    mistakes: [
      'começar com déficit agressivo sem necessidade',
      'não pesar alimentos básicos quando precisa de precisão',
      'mudar a meta antes de ter dados suficientes',
      'esquecer que fim de semana também entra na média semanal',
    ],
  },
  'calcular-proteina-por-peso': {
    hub: 'whey-proteina',
    source: 'whey',
    title: 'Como Calcular Proteína Por Peso: Fórmula Por Objetivo',
    description: 'Aprenda a estimar proteína diária por quilo de peso para emagrecer, ganhar massa ou manter saúde sem exagerar no whey.',
    intent: 'descobrir quanta proteína comer por dia antes de comprar suplemento',
    decision: 'Use o peso corporal como ponto de partida, ajuste por objetivo e complete primeiro com comida. Whey entra quando praticidade e rotina tornam difícil bater a meta.',
    tableRows: [
      ['Sedentário saudável', 'Meta menor', 'Foco em regularidade alimentar'],
      ['Treino de força', 'Meta moderada a alta', 'Distribuir em 3-5 refeições'],
      ['Cutting', 'Meta mais alta', 'Ajuda saciedade e preservação muscular'],
      ['Idosos', 'Atenção especial', 'Individualizar com profissional'],
    ],
    mistakes: [
      'achar que mais proteína sempre gera mais músculo',
      'contar apenas whey e esquecer proteínas das refeições',
      'usar scoop como medida universal sem olhar o rótulo',
      'ignorar histórico renal ou orientação médica quando existe doença',
    ],
  },
  'whey-com-leite-ou-agua': {
    hub: 'whey-proteina',
    source: 'whey',
    title: 'Whey Com Leite ou Água: Diferenças em Calorias, Sabor e Absorção',
    description: 'Compare whey com leite e whey com água para emagrecimento, ganho de massa, intolerância à lactose e praticidade.',
    intent: 'decidir a mistura do whey conforme objetivo e digestão',
    decision: 'Use água quando precisa controlar calorias e digestão. Use leite quando quer mais sabor, calorias, proteína e saciedade, desde que a lactose não atrapalhe.',
    tableRows: [
      ['Com água', 'Menos calorias e preparo rápido', 'Bom para cutting'],
      ['Com leite', 'Mais sabor e nutrientes', 'Bom para bulking ou lanche'],
      ['Com bebida vegetal', 'Alternativa sem lactose', 'Conferir proteína e açúcar'],
      ['Com fruta', 'Mais energia', 'Útil pré ou pós-treino'],
    ],
    mistakes: [
      'ignorar as calorias do leite quando o objetivo é déficit',
      'culpar o whey por desconforto causado pela lactose do leite',
      'misturar com açúcar sem perceber o impacto na meta diária',
      'comprar isolado caro quando o problema era só a mistura escolhida',
    ],
  },
  'macros-para-definicao-muscular': {
    hub: 'calorias-macros',
    source: 'calorias',
    title: 'Macros Para Definição Muscular: Distribuição Inicial e Ajustes',
    description: 'Veja como montar macros para definição muscular equilibrando déficit, proteína, carboidrato, gordura e performance.',
    intent: 'secar preservando treino e massa magra',
    decision: 'Definição muscular depende de déficit bem conduzido, proteína consistente e treino de força. Macros ajudam a organizar, mas o resultado vem do acompanhamento semanal.',
    tableRows: [
      ['Proteína', 'Base da preservação muscular', 'Manter constante'],
      ['Carboidrato', 'Energia para treino', 'Ajustar por performance'],
      ['Gordura', 'Saúde e adesão', 'Evitar cortar demais'],
      ['Calorias', 'Motor da perda de gordura', 'Ajustar por média de peso'],
    ],
    mistakes: [
      'transformar definição em dieta extrema',
      'tirar carboidrato mesmo quando o treino despenca',
      'medir progresso só por peso e não por fotos, cintura e força',
      'não planejar refeições com comida suficiente para segurar fome',
    ],
  },
  'formula-mifflin-st-jeor-homem': {
    hub: 'calorias-macros',
    source: 'calorias',
    title: 'Mifflin-St Jeor Para Homem: Fórmula, Exemplo e TDEE',
    description: 'Veja a fórmula Mifflin-St Jeor masculina, um exemplo de cálculo e como transformar TMB em meta diária de calorias.',
    intent: 'aplicar a fórmula masculina sem confundir TMB, TDEE e déficit',
    decision: 'Para homens, calcule TMB com peso, altura e idade; depois aplique atividade para chegar no TDEE. A meta de dieta vem depois desse número.',
    tableRows: [
      ['Peso', 'Entra em kg', 'Use peso atual'],
      ['Altura', 'Entra em cm', 'Não arredonde demais'],
      ['Idade', 'Entra em anos', 'Afeta a estimativa'],
      ['Atividade', 'Multiplica a TMB', 'Maior fonte de erro'],
    ],
    mistakes: [
      'usar a fórmula feminina por engano',
      'colocar altura em metros quando a fórmula pede centímetros',
      'confundir treino intenso com rotina diária ativa',
      'usar o número como sentença fixa mesmo após mudança de peso',
    ],
  },
  'contador-de-calorias-online-gratis': {
    hub: 'calorias-macros',
    source: 'calorias',
    title: 'Contador de Calorias Online Grátis: Como Usar Sem Neura',
    description: 'Aprenda a usar contador de calorias de forma prática, evitando obsessão e melhorando a precisão quando ela realmente importa.',
    intent: 'controlar calorias com praticidade e sem virar refém do aplicativo',
    decision: 'Use contador de calorias para criar consciência alimentar, não para buscar perfeição. Pese os alimentos mais calóricos e aceite margens em verduras, temperos e variações naturais.',
    tableRows: [
      ['Primeira semana', 'Registrar sem mudar tudo', 'Entender padrão atual'],
      ['Segunda semana', 'Ajustar calorias-alvo', 'Criar plano realista'],
      ['Após 14 dias', 'Comparar tendência', 'Mudar só se necessário'],
      ['Manutenção', 'Registrar menos', 'Manter hábitos principais'],
    ],
    mistakes: [
      'não registrar óleo, bebidas, molhos e beliscos',
      'querer precisão impossível em restaurante',
      'usar o contador para compensar exageros com restrição extrema',
      'abandonar tudo por errar um dia',
    ],
  },
  'creatina-para-idosos': {
    hub: 'creatina',
    source: 'creatina',
    title: 'Creatina Para Idosos: Quando Pode Ajudar e Cuidados',
    description: 'Entenda o papel da creatina em idosos, força, funcionalidade, treino de resistência e cuidados antes de suplementar.',
    intent: 'avaliar creatina como apoio à força e funcionalidade na terceira idade',
    decision: 'Creatina pode ser interessante para idosos principalmente quando acompanha treino de força e boa ingestão proteica. Doenças renais, medicamentos e fragilidade exigem avaliação profissional.',
    tableRows: [
      ['Com treino de força', 'Maior potencial', 'Acompanhar evolução funcional'],
      ['Sem treino', 'Efeito mais limitado', 'Priorizar movimento seguro'],
      ['Baixa proteína', 'Corrigir dieta junto', 'Whey pode ser mais útil'],
      ['Doença renal', 'Não iniciar sozinho', 'Exige orientação médica'],
    ],
    mistakes: [
      'prometer efeito milagroso em memória, dor ou força',
      'usar dose alta sem necessidade',
      'não combinar com treino progressivo e alimentação adequada',
      'ignorar exames, histórico renal e remédios de uso contínuo',
    ],
  },
  'creatina-monohidratada-o-que-e': {
    hub: 'creatina',
    source: 'creatina',
    title: 'Creatina Monohidratada: O Que É, Como Tomar e Como Escolher',
    description: 'Guia direto sobre creatina monohidratada, dose diária, saturação, segurança, resultados esperados e critérios de compra.',
    intent: 'entender a forma mais estudada de creatina antes de comprar',
    decision: 'A creatina monohidratada é a forma padrão para começar: simples, estudada, geralmente mais barata e suficiente para a maioria das pessoas.',
    tableRows: [
      ['Forma', 'Monohidratada', 'Padrão mais estudado'],
      ['Uso', 'Diário', 'Consistência importa mais que horário'],
      ['Resultado', 'Força e volume de treino', 'Vem com semanas de uso'],
      ['Compra', 'Pureza e custo por dose', 'Evitar promessa exagerada'],
    ],
    mistakes: [
      'trocar de forma cara achando que é obrigatoriamente superior',
      'tomar só nos dias de treino e esquecer a consistência',
      'confundir retenção intracelular com ganho de gordura',
      'esperar resultado sem treino progressivo',
    ],
  },
  'creatina-melhor-horario-para-tomar': {
    hub: 'creatina',
    source: 'creatina',
    title: 'Melhor Horário Para Tomar Creatina: O Que Realmente Importa',
    description: 'Entenda se creatina deve ser tomada antes ou depois do treino e por que a regularidade costuma importar mais que o horário.',
    intent: 'resolver a dúvida de horário sem complicar a suplementação',
    decision: 'O melhor horário é aquele que você consegue repetir todos os dias. Tomar com uma refeição pode melhorar adesão e reduzir esquecimento.',
    tableRows: [
      ['Manhã', 'Bom para rotina fixa', 'Deixe junto do café'],
      ['Pós-treino', 'Fácil de lembrar', 'Pode misturar com whey'],
      ['Almoço/jantar', 'Boa adesão', 'Tomar com refeição'],
      ['Antes do treino', 'Não é pré-treino agudo', 'Não espere efeito imediato'],
    ],
    mistakes: [
      'achar que perdeu o efeito porque tomou em outro horário',
      'usar creatina como estimulante pré-treino',
      'parar nos dias sem treino',
      'fazer fase de saturação sem entender se precisa',
    ],
  },
  'creatina-e-whey-juntos': {
    hub: 'creatina',
    source: 'creatina',
    title: 'Creatina e Whey Juntos: Pode Misturar? Quando Faz Sentido',
    description: 'Veja quando creatina e whey combinam, como misturar, diferenças de função e como evitar comprar suplemento desnecessário.',
    intent: 'entender se dois suplementos populares cumprem papéis diferentes',
    decision: 'Creatina e whey podem ser usados juntos porque têm funções diferentes: creatina apoia desempenho; whey ajuda a bater proteína. A mistura é prática, mas não obrigatória.',
    tableRows: [
      ['Creatina', 'Desempenho e força', 'Uso diário'],
      ['Whey', 'Proteína prática', 'Uso conforme meta diária'],
      ['Juntos', 'Praticidade', 'Bom pós-treino ou lanche'],
      ['Separados', 'Mesmo efeito', 'Escolha por rotina'],
    ],
    mistakes: [
      'comprar whey sem saber sua meta de proteína',
      'achar que creatina precisa de whey para funcionar',
      'usar combo para compensar treino ou dieta fracos',
      'não olhar lactose, calorias e adoçantes se há desconforto',
    ],
  },
  'whey-para-emagrecer-como-usar': {
    hub: 'whey-proteina',
    source: 'whey',
    title: 'Whey Para Emagrecer: Como Usar Sem Aumentar Calorias',
    description: 'Aprenda quando whey ajuda no emagrecimento, como encaixar nas calorias e quais erros fazem o suplemento atrapalhar.',
    intent: 'usar whey para bater proteína e saciedade dentro do déficit',
    decision: 'Whey pode ajudar no emagrecimento quando substitui uma opção menos proteica ou completa a meta sem estourar calorias. Ele não emagrece sozinho.',
    tableRows: [
      ['Como lanche', 'Aumenta proteína', 'Cuidado com acompanhamentos'],
      ['No café da manhã', 'Melhora saciedade', 'Somar calorias do preparo'],
      ['Pós-treino', 'Prático', 'Não precisa ser imediato'],
      ['Receitas', 'Pode ajudar adesão', 'Controlar extras'],
    ],
    mistakes: [
      'adicionar whey sem reduzir calorias de outro lugar',
      'misturar com muitos ingredientes calóricos sem perceber',
      'comprar isolado achando que isso emagrece mais',
      'usar shake para trocar refeições completas todos os dias sem orientação',
    ],
  },
  'whey-concentrado-para-que-serve': {
    hub: 'whey-proteina',
    source: 'whey',
    title: 'Whey Concentrado: Para Que Serve e Quando Vale a Pena',
    description: 'Entenda o whey concentrado, diferença para isolado, vantagens, limitações e quando é a melhor escolha custo-benefício.',
    intent: 'decidir se o whey concentrado resolve antes de pagar mais no isolado',
    decision: 'Whey concentrado costuma ser a melhor entrada para quem tolera lactose e quer custo-benefício. O isolado faz mais sentido com restrição calórica apertada ou desconforto digestivo.',
    tableRows: [
      ['Concentrado', 'Bom custo-benefício', 'Pode ter mais lactose'],
      ['Isolado', 'Mais proteína por dose', 'Normalmente mais caro'],
      ['Hidrolisado', 'Digestão específica', 'Nem sempre necessário'],
      ['Sem lactose', 'Para intolerantes', 'Conferir rótulo'],
    ],
    mistakes: [
      'comparar preço do pote em vez de custo por grama de proteína',
      'ignorar quantidade real de proteína por dose',
      'comprar isolado sem necessidade digestiva ou calórica',
      'não verificar açúcar, carboidrato e lista de ingredientes',
    ],
  },
  'tdee-o-que-e-como-usar': {
    hub: 'calorias-macros',
    source: 'calorias',
    title: 'TDEE: O Que É e Como Usar Para Emagrecer ou Ganhar Massa',
    description: 'Entenda o gasto calórico diário total, como calcular TDEE e como transformar o número em déficit, manutenção ou superávit.',
    intent: 'usar o gasto diário total como base da dieta',
    decision: 'TDEE é a estimativa de calorias que você gasta no dia. Use como ponto de partida e ajuste pela resposta real do peso, medidas e desempenho.',
    tableRows: [
      ['Emagrecer', 'TDEE menos déficit', 'Acompanhar média semanal'],
      ['Manter', 'Perto do TDEE', 'Útil em fases de estabilidade'],
      ['Ganhar massa', 'TDEE mais superávit', 'Subida gradual'],
      ['Recalcular', 'Quando peso muda bastante', 'Não precisa todo dia'],
    ],
    mistakes: [
      'escolher fator de atividade alto demais',
      'confundir calorias gastas no treino com gasto total do dia',
      'não contar bebidas e pequenas mordidas',
      'mudar a meta antes de observar tendência',
    ],
  },
  'calorias-para-emagrecer-como-calcular': {
    hub: 'calorias-macros',
    source: 'calorias',
    title: 'Calorias Para Emagrecer: Como Calcular Déficit Sem Exagero',
    description: 'Veja como calcular calorias para emagrecer usando TDEE, déficit moderado, proteína e ajustes semanais seguros.',
    intent: 'criar déficit calórico sustentável',
    decision: 'Para emagrecer, use déficit moderado e acompanhe a tendência. Se a fome, o sono e o treino piorarem muito, o plano pode estar agressivo demais.',
    tableRows: [
      ['Déficit leve', 'Mais sustentável', 'Perda mais lenta'],
      ['Déficit moderado', 'Bom equilíbrio', 'Maioria começa aqui'],
      ['Déficit agressivo', 'Maior risco de abandono', 'Usar com cautela'],
      ['Pausa dietética', 'Pode ajudar adesão', 'Planejar quando necessário'],
    ],
    mistakes: [
      'cortar calorias demais logo de cara',
      'deixar proteína baixa e sentir mais fome',
      'não planejar refeições antes de ficar sem opção',
      'ignorar sinais de compulsão, cansaço extremo e queda de desempenho',
    ],
  },
  'vitamina-d-baixa-sintomas': {
    hub: 'vitaminas-minerais',
    source: 'micronutrientes',
    title: 'Vitamina D Baixa: Sintomas, Exame e Quando Suplementar',
    description: 'Entenda sinais associados à vitamina D baixa, exame 25-OH vitamina D e cuidados antes de suplementar por conta própria.',
    intent: 'entender sintomas e confirmar deficiência com exame',
    decision: 'Sintomas podem levantar suspeita, mas vitamina D baixa deve ser confirmada com exame. Dose e duração dependem do resultado, histórico e orientação profissional.',
    tableRows: [
      ['Sintomas inespecíficos', 'Cansaço, dores, baixa imunidade', 'Não fecham diagnóstico'],
      ['Exame', '25-OH vitamina D', 'Base para decisão'],
      ['Suplementação', 'Depende do nível', 'Individualizar'],
      ['Acompanhamento', 'Repetir exame quando indicado', 'Evita excesso'],
    ],
    mistakes: [
      'tratar sintoma como diagnóstico',
      'usar dose alta por meses sem exame',
      'ignorar cálcio, rim, paratireoide e histórico médico',
      'achar que todo mundo precisa da mesma dose',
    ],
  },
  'vitamina-b12-baixa-sintomas': {
    hub: 'vitaminas-minerais',
    source: 'micronutrientes',
    title: 'Vitamina B12 Baixa: Sintomas, Risco e Como Confirmar',
    description: 'Veja sintomas possíveis de B12 baixa, grupos de risco, exames e por que vegetarianos, idosos e usuários de alguns remédios precisam atenção.',
    intent: 'identificar risco de deficiência de B12 sem autodiagnóstico',
    decision: 'B12 baixa precisa de avaliação por sintomas, dieta, uso de medicamentos e exames. Vegetarianos estritos e idosos merecem atenção especial.',
    tableRows: [
      ['Veganos/vegetarianos', 'Risco maior', 'B12 vem principalmente de origem animal'],
      ['Idosos', 'Absorção pode cair', 'Avaliar com profissional'],
      ['Medicamentos', 'Podem interferir', 'Exemplo: uso prolongado de alguns fármacos'],
      ['Sintomas neurológicos', 'Atenção rápida', 'Não adiar avaliação'],
    ],
    mistakes: [
      'esperar sintomas graves para investigar',
      'usar multivitamínico fraco achando que corrige deficiência',
      'não checar dieta e absorção',
      'ignorar formigamento, fraqueza e alterações neurológicas',
    ],
  },
  'magnesio-glicinato-ou-dimalato': {
    hub: 'vitaminas-minerais',
    source: 'micronutrientes',
    title: 'Magnésio Glicinato ou Dimalato: Qual Escolher Pelo Objetivo',
    description: 'Compare magnésio glicinato e dimalato considerando tolerância digestiva, sono, rotina, custo e objetivo de uso.',
    intent: 'escolher forma de magnésio sem cair em promessa genérica',
    decision: 'Glicinato costuma ser escolhido por tolerância e uso noturno; dimalato aparece mais em rotinas de energia e dores. A necessidade real depende de dieta, sintomas e contexto.',
    tableRows: [
      ['Glicinato', 'Boa tolerância', 'Muito usado à noite'],
      ['Dimalato', 'Ligado a energia/rotina', 'Pode ser usado de dia'],
      ['Óxido', 'Mais barato', 'Pode ter menor tolerância'],
      ['Citrato', 'Pode soltar intestino', 'Atenção à dose'],
    ],
    mistakes: [
      'achar que qualquer magnésio é igual',
      'ignorar dose elementar no rótulo',
      'usar para tratar sintoma persistente sem investigar causa',
      'não considerar remédios, rins e orientação médica',
    ],
  },
  'omega-3-epa-dha-como-escolher': {
    hub: 'vitaminas-minerais',
    source: 'micronutrientes',
    title: 'Ômega-3 EPA e DHA: Como Escolher Um Bom Suplemento',
    description: 'Aprenda a ler rótulo de ômega-3, somar EPA e DHA, comparar custo por dose e evitar produtos fracos.',
    intent: 'comprar ômega-3 olhando EPA e DHA, não só óleo de peixe total',
    decision: 'O rótulo precisa mostrar quanto há de EPA e DHA por porção. O óleo total importa menos do que a soma dos ácidos graxos ativos.',
    tableRows: [
      ['Óleo de peixe total', 'Número grande no rótulo', 'Não é o principal'],
      ['EPA', 'Ácido graxo ativo', 'Somar com DHA'],
      ['DHA', 'Ácido graxo ativo', 'Importante na dose real'],
      ['Custo por dose', 'Comparação justa', 'Evita pote barato e fraco'],
    ],
    mistakes: [
      'comprar pelo número de 1000 mg sem ver EPA e DHA',
      'não conferir quantidade por cápsula e por porção',
      'ignorar odor, conservação e qualidade do produto',
      'usar com anticoagulantes sem conversar com profissional',
    ],
  },
  'melhor-whey-custo-beneficio-2026': {
    hub: 'whey-proteina',
    source: 'compra',
    monetizable: true,
    title: 'Melhor Whey Custo-Benefício 2026: Como Comparar de Verdade',
    description: 'Aprenda a escolher whey custo-benefício comparando proteína por dose, custo por grama, ingredientes, lactose e objetivo.',
    intent: 'comprar whey sem pagar por marketing',
    decision: 'O melhor whey custo-benefício é o que entrega proteína suficiente, boa tolerância e custo por grama competitivo. Marca famosa não substitui rótulo bem lido.',
    tableRows: [
      ['Proteína por dose', 'Mostra concentração', 'Comparar entre produtos'],
      ['Custo por grama', 'Preço justo', 'Melhor que preço do pote'],
      ['Ingredientes', 'Qualidade e tolerância', 'Menos confusão no rótulo'],
      ['Objetivo', 'Cutting, bulking ou praticidade', 'Muda a escolha'],
    ],
    mistakes: [
      'comparar potes de tamanhos diferentes sem fazer conta',
      'comprar pelo sabor e ignorar proteína real',
      'pagar isolado sem precisar',
      'não considerar tolerância à lactose e digestão',
    ],
  },
  'melhor-creatina-custo-beneficio-2026': {
    hub: 'creatina',
    source: 'compra',
    monetizable: true,
    title: 'Melhor Creatina Custo-Benefício 2026: Critérios Antes de Comprar',
    description: 'Veja como escolher creatina por pureza, laudo, forma monohidratada, custo por dose e reputação sem cair em promessa exagerada.',
    intent: 'comprar creatina confiável pelo menor custo mensal possível',
    decision: 'Compare creatina por custo por dose de 3 a 5 g, pureza, laudo e reputação. Fórmulas com blends podem dificultar a comparação.',
    tableRows: [
      ['Forma', 'Monohidratada', 'Padrão para maioria'],
      ['Dose por porção', '3 a 5 g como referência comum', 'Ver rótulo'],
      ['Laudo', 'Mais confiança', 'Ajuda evitar adulteração'],
      ['Custo mensal', 'Conta real', 'Melhor que preço do pote'],
    ],
    mistakes: [
      'comprar blend que esconde quantidade real de creatina',
      'pagar caro por promessa de absorção sem necessidade',
      'não calcular quantas doses o pote entrega',
      'escolher só pelo menor preço sem avaliar procedência',
    ],
  },
  'suplementos-baratos-que-funcionam': {
    hub: 'vitaminas-minerais',
    source: 'compra',
    monetizable: true,
    title: 'Suplementos Baratos Que Funcionam: O Básico Com Melhor Retorno',
    description: 'Veja suplementos baratos que podem fazer sentido, quando comprar e quando o dinheiro rende mais em comida, sono e treino.',
    intent: 'priorizar suplementos de alto retorno antes de gastar com modinha',
    decision: 'Suplemento barato só funciona quando resolve uma necessidade real. Creatina, proteína prática e correção de deficiências costumam ser mais racionais que fórmulas cheias de promessa.',
    tableRows: [
      ['Creatina', 'Bom custo mensal', 'Útil com treino'],
      ['Whey/albumina', 'Proteína prática', 'Só se falta proteína'],
      ['Vitamina D/B12/ferro', 'Quando há risco ou exame', 'Não usar no escuro'],
      ['Cafeína', 'Performance pontual', 'Cuidado com sono'],
    ],
    mistakes: [
      'comprar muitos suplementos baratos que somam caro no mês',
      'trocar comida básica por cápsulas',
      'usar vitamina sem saber se existe deficiência',
      'não medir se o suplemento realmente melhorou algo',
    ],
  },
  'kit-suplementos-para-iniciantes': {
    hub: 'vitaminas-minerais',
    source: 'compra',
    monetizable: true,
    title: 'Kit de Suplementos Para Iniciantes: O Que Comprar Primeiro',
    description: 'Monte um kit inicial enxuto com suplementos úteis, ordem de prioridade e critérios para não gastar antes da hora.',
    intent: 'montar uma primeira compra simples e útil',
    decision: 'Iniciante deve começar pelo básico: dieta organizada, treino consistente e poucos suplementos com função clara. O melhor kit é pequeno, mensurável e fácil de manter.',
    tableRows: [
      ['Primeiro passo', 'Proteína diária', 'Whey só se faltar praticidade'],
      ['Segundo passo', 'Creatina', 'Boa relação custo-benefício'],
      ['Terceiro passo', 'Deficiências', 'Usar exames e orientação'],
      ['Opcional', 'Cafeína ou ômega-3', 'Depende de rotina e objetivo'],
    ],
    mistakes: [
      'começar com pré-treino caro antes de ajustar sono',
      'comprar multivitamínico sem necessidade clara',
      'não saber qual problema cada item resolve',
      'não calcular custo mensal antes de montar o carrinho',
    ],
  },
}

function normalizeContent(article) {
  const markerIndex = article.conteudo.findIndex((block) => block.tipo === 'heading' && block.texto === MARKER)
  if (markerIndex !== -1) {
    const nextFaqIndex = article.conteudo.findIndex((block, index) => index > markerIndex && block.tipo === 'faq')
    const deleteCount = nextFaqIndex === -1 ? article.conteudo.length - markerIndex : nextFaqIndex - markerIndex
    article.conteudo.splice(markerIndex, deleteCount)
  }
}

function buildBlocks(config) {
  return [
    { tipo: 'heading', nivel: 2, texto: MARKER },
    {
      tipo: 'paragrafo',
      texto: `A forma mais segura de aproveitar este conteúdo é transformar a dúvida em uma decisão pequena e mensurável. Aqui o objetivo é ${config.intent}. Em vez de trocar tudo de uma vez, escolha um ponto de partida, aplique por tempo suficiente e observe sinais concretos: peso, medidas, força no treino, fome, digestão, sono e adesão.`,
    },
    {
      tipo: 'paragrafo',
      texto: `Resposta curta: ${config.decision} Esse cuidado ajuda o Google e o leitor pelo mesmo motivo: a página deixa de ser apenas uma definição e passa a resolver a próxima pergunta prática que aparece depois da busca inicial.`,
    },
    {
      tipo: 'tabela',
      cabecalho: ['Situação', 'O que fazer', 'Por que importa'],
      linhas: config.tableRows,
    },
    {
      tipo: 'heading',
      nivel: 2,
      texto: 'Passo a passo recomendado',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Defina o objetivo principal antes de escolher suplemento, dose, cálculo ou produto.',
        'Anote o ponto de partida: peso, rotina de treino, alimentação, sintomas ou dificuldade que quer resolver.',
        'Aplique uma mudança por vez durante pelo menos 10 a 14 dias, quando o assunto permitir acompanhamento por tendência.',
        'Compare o resultado com dados simples: média de peso, medidas, energia, fome, digestão, sono ou desempenho.',
        'Se houver sintoma persistente, doença, medicação, gestação ou exame alterado, leve a dúvida para um profissional de saúde.',
      ],
    },
    {
      tipo: 'heading',
      nivel: 2,
      texto: 'Erros comuns que atrapalham o resultado',
    },
    {
      tipo: 'lista',
      itens: config.mistakes,
    },
    {
      tipo: 'heading',
      nivel: 2,
      texto: 'Como saber se valeu a pena',
    },
    {
      tipo: 'paragrafo',
      texto: 'Uma decisão boa precisa melhorar alguma coisa concreta. Para suplementos, isso pode ser praticidade, constância, tolerância digestiva, custo mensal menor ou desempenho melhor no treino. Para calculadoras, o sinal é sair do chute e criar um número inicial que possa ser ajustado com a realidade.',
    },
    {
      tipo: 'paragrafo',
      texto: 'Se nada mudou depois de algumas semanas, não aumente dose nem compre mais produtos automaticamente. Reavalie o básico: alimentação, treino, sono, consistência e se o problema que você queria resolver era realmente o problema certo.',
    },
    {
      tipo: 'paragrafo',
      texto: 'Também vale conectar esta página com os outros guias do mesmo tema. Quem chega por uma dúvida específica normalmente precisa de uma sequência: entender o conceito, calcular a necessidade, comparar opções e só então comprar ou ajustar a rotina. Esse caminho reduz decisão impulsiva e ajuda cada artigo a cumprir uma intenção de busca mais clara.',
    },
    {
      tipo: 'heading',
      nivel: 2,
      texto: 'Quando ter mais cautela',
    },
    {
      tipo: 'paragrafo',
      texto: 'Existe uma diferença grande entre conteúdo educativo e conduta individual. Qualquer decisão envolvendo sintomas frequentes, exames fora da referência, doença diagnosticada, uso contínuo de medicamentos, gestação, lactação, histórico renal, cirurgia bariátrica ou transtorno alimentar precisa ser personalizada. Nesses casos, o melhor uso deste guia é organizar perguntas para a consulta, não substituir avaliação.',
    },
    {
      tipo: 'lista',
      itens: [
        'Se o assunto envolve dor, fraqueza, tontura, formigamento, perda de peso sem explicação ou alteração importante de humor, investigue antes de suplementar.',
        'Se você já usa remédios, confirme possíveis interações antes de adicionar cápsulas, estimulantes ou doses altas de micronutrientes.',
        'Se o orçamento está curto, priorize o que resolve o problema central; comprar cinco produtos medianos costuma ser pior que comprar um item realmente necessário.',
        'Se a decisão depende de rótulo, compare dose real por porção, custo mensal, ingrediente ativo e tolerância digestiva, não apenas o nome comercial.',
      ],
    },
    {
      tipo: 'heading',
      nivel: 2,
      texto: 'Checklist rápido antes de agir',
    },
    {
      tipo: 'lista',
      ordenada: true,
      itens: [
        'Consigo explicar em uma frase qual problema quero resolver?',
        'Tenho um número inicial para comparar depois, como peso médio, ingestão de proteína, calorias, sintomas ou desempenho?',
        'A decisão cabe no meu orçamento mensal sem sacrificar alimentação básica?',
        'O rótulo mostra claramente dose, ingrediente ativo e quantidade por porção?',
        'Se eu parar este suplemento ou cálculo por uma semana, o restante do plano continua fazendo sentido?',
      ],
    },
  ]
}

function buildFaq(config) {
  return {
    tipo: 'faq',
    perguntas: [
      {
        pergunta: 'Posso usar este guia sem acompanhamento profissional?',
        resposta:
          'Pode usar como conteúdo educativo e ponto de partida. Para sintomas, exames alterados, doenças, medicamentos, gestação ou doses terapêuticas, procure um profissional de saúde.',
      },
      {
        pergunta: 'Em quanto tempo dá para saber se funcionou?',
        resposta:
          'Depende do tema. Para dieta e calorias, acompanhe pelo menos 10 a 14 dias de tendência. Para suplementos, observe adesão, digestão, treino e sinais objetivos por algumas semanas.',
      },
      {
        pergunta: 'Devo comprar suplemento antes de ajustar a alimentação?',
        resposta:
          'Na maioria dos casos, não. Suplemento ajuda quando resolve uma lacuna prática ou nutricional específica. Ele não substitui o básico bem feito.',
      },
      {
        pergunta: 'Qual é o maior erro de quem pesquisa esse assunto?',
        resposta:
          'Buscar uma resposta única para todo mundo. Peso, rotina, objetivo, exames, tolerância e orçamento mudam a melhor decisão.',
      },
    ],
  }
}

function wordCount(article) {
  return article.conteudo
    .map((block) => {
      if (block.texto) return block.texto
      if (block.itens) return block.itens.join(' ')
      if (block.linhas) return block.linhas.flat().join(' ')
      if (block.perguntas) return block.perguntas.map((faq) => `${faq.pergunta} ${faq.resposta}`).join(' ')
      return ''
    })
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
}

function updateReadingTime(article) {
  const minutes = Math.max(3, Math.ceil(wordCount(article) / 180))
  article.tempo_leitura = `${minutes} min`
}

for (const article of articles) {
  const config = configs[article.slug]
  if (!config) continue

  normalizeContent(article)
  article.titulo = config.title
  article.descricao = config.description
  article.revisor = REVIEWER
  article.atualizado_em = UPDATED_AT
  article.hub_slug = config.hub
  article.prioridade_seo = true
  article.monetizavel = Boolean(config.monetizable)
  article.fontes = sources[config.source]

  const firstFaqIndex = article.conteudo.findIndex((block) => block.tipo === 'faq')
  const insertIndex = firstFaqIndex === -1 ? article.conteudo.length : firstFaqIndex
  article.conteudo.splice(insertIndex, 0, ...buildBlocks(config))

  if (!article.conteudo.some((block) => block.tipo === 'faq')) {
    article.conteudo.push(buildFaq(config))
  }

  updateReadingTime(article)
}

fs.writeFileSync(articlesPath, `${JSON.stringify(articles, null, 2)}\n`, 'utf8')

const updated = articles.filter((article) => configs[article.slug]).map((article) => ({
  slug: article.slug,
  words: wordCount(article),
  readingTime: article.tempo_leitura,
}))

console.log(`Artigos fortalecidos: ${updated.length}`)
console.table(updated)
