import fs from 'node:fs'
import path from 'node:path'

const filePath = path.join(process.cwd(), 'data', 'artigos.json')
const artigos = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const today = '2026-05-20'
const autor = 'Equipe Suplementa Já'

const articles = [
  {
    slug: 'creatina-guia-completo-ganho-muscular',
    titulo: 'Creatina Para Ganho Muscular: Como Usar, Dose e Resultados Reais',
    descricao: 'Guia direto sobre creatina para ganho muscular: dose, tempo para fazer efeito, fase de carga, retenção de líquido e erros que atrapalham resultado.',
    autor,
    data: today,
    categoria: 'Performance',
    tags: ['creatina ganho muscular', 'creatina', 'hipertrofia', 'dose creatina'],
    tempo_leitura: '8 min',
    imagem: '/images/blog/creatina-ganho-muscular.jpg',
    objetivos: ['performance'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Resposta curta:** creatina ajuda ganho muscular indiretamente: melhora força, volume de treino e recuperação entre esforços. Ela não constrói músculo sozinha; treino progressivo e proteína continuam mandando.' },
      { tipo: 'paragrafo', texto: 'A creatina é um dos suplementos mais úteis para quem treina força porque aumenta a disponibilidade de fosfocreatina no músculo. Na prática, isso pode ajudar você a fazer mais repetições, sustentar cargas e acumular melhor estímulo de treino.' },
      { tipo: 'heading', nivel: 2, texto: 'Como tomar creatina para hipertrofia' },
      { tipo: 'lista', itens: ['Dose simples: 3 a 5 g por dia para a maioria dos adultos.', 'Horário: qualquer horário funciona; consistência importa mais.', 'Com comida: pode facilitar hábito e reduzir desconforto gastrointestinal.', 'Fase de carga: opcional, não obrigatória.', 'Água: mantenha hidratação normal, sem exageros.'] },
      { tipo: 'cta', texto: 'Quer uma dose ajustada ao seu peso?', botao: 'Calcular dose de creatina', link: '/calculadoras/creatina' },
      { tipo: 'heading', nivel: 2, texto: 'Quando aparecem resultados' },
      { tipo: 'tabela', colunas: ['Período', 'O que esperar', 'Observação'], linhas: [['Primeira semana', 'Pouca mudança visual', 'Pode haver leve aumento de peso por água muscular'], ['2-4 semanas', 'Melhor consistência em força e volume', 'Depende do treino'], ['8-12 semanas', 'Melhor chance de notar ganho de massa', 'Se dieta e progressão estão corretas'], ['Sem treino', 'Resultado mínimo', 'Creatina não substitui estímulo']] },
      { tipo: 'heading', nivel: 2, texto: 'Erros que cortam resultado' },
      { tipo: 'lista', itens: ['Tomar só em dia de treino.', 'Esperar ganho muscular sem proteína suficiente.', 'Trocar treino progressivo por suplemento.', 'Parar porque a balança subiu 1 kg de água.', 'Comprar fórmula cara quando monohidratada simples resolve.'] },
      { tipo: 'heading', nivel: 2, texto: 'Fontes usadas' },
      { tipo: 'paragrafo', texto: 'Baseado na posição da International Society of Sports Nutrition sobre creatina e em referências de nutrição esportiva. Para doença renal, gestação ou uso de medicamentos, converse com profissional.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Creatina dá músculo?', resposta: 'Ela ajuda o ambiente de treino, mas músculo vem de treino, alimentação e recuperação. A creatina pode melhorar força e volume de treino.' },
        { pergunta: 'Precisa fazer fase de carga?', resposta: 'Não. A fase de carga acelera saturação, mas 3 a 5 g por dia também funcionam com o tempo.' },
        { pergunta: 'Creatina engorda?', resposta: 'Pode aumentar peso por água dentro do músculo, mas isso não é gordura.' },
        { pergunta: 'Qual creatina comprar?', resposta: 'Creatina monohidratada simples costuma ser a escolha com melhor evidência e custo-benefício.' }
      ] }
    ],
    relacionados: ['guia-completo-creatina-2026', 'creatina-como-tomar', 'creatina-fase-carga-necessaria']
  },
  {
    slug: 'creatina-beneficios-efeitos-colaterais-dosagem-2026',
    titulo: 'Creatina: Benefícios, Efeitos Colaterais e Dosagem em 2026',
    descricao: 'Resumo completo e direto sobre creatina: benefícios comprovados, segurança, dose diária, efeitos colaterais reais e quem deve ter cuidado.',
    autor,
    data: today,
    categoria: 'Performance',
    tags: ['creatina beneficios', 'creatina efeitos colaterais', 'dosagem creatina', 'creatina 2026'],
    tempo_leitura: '8 min',
    imagem: '/images/blog/creatina-beneficios-efeitos-colaterais.jpg',
    objetivos: ['performance'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Em uma frase:** creatina é útil, barata e bem estudada para força e performance. Os principais efeitos colaterais costumam ser desconforto gastrointestinal em algumas pessoas e aumento de peso por água muscular.' },
      { tipo: 'heading', nivel: 2, texto: 'Benefícios mais consistentes' },
      { tipo: 'lista', itens: ['Melhora de força em exercícios de alta intensidade.', 'Aumento de volume total de treino.', 'Apoio ao ganho de massa magra quando há treino e dieta.', 'Possível benefício em idosos junto com treino de força.', 'Praticidade e custo-benefício alto comparado a fórmulas complexas.'] },
      { tipo: 'heading', nivel: 2, texto: 'Dosagem prática' },
      { tipo: 'tabela', colunas: ['Perfil', 'Dose comum', 'Observação'], linhas: [['Adulto médio', '3-5 g/dia', 'Uso diário'], ['Pessoa maior/pesada', '5 g/dia', 'Pode ser mais prático'], ['Fase de carga', '20 g/dia divididos por 5-7 dias', 'Opcional'], ['Manutenção', '3-5 g/dia', 'Após carga ou direto']] },
      { tipo: 'cta', texto: 'Prefere calcular por peso e objetivo?', botao: 'Usar calculadora de creatina', link: '/calculadoras/creatina' },
      { tipo: 'heading', nivel: 2, texto: 'Efeitos colaterais reais' },
      { tipo: 'lista', itens: ['Aumento de peso por maior água intramuscular.', 'Desconforto intestinal se dose alta de uma vez.', 'Náusea em pessoas sensíveis.', 'Cãibra não é um efeito esperado quando hidratação e treino estão adequados.', 'Pessoas com doença renal devem buscar orientação antes de usar.'] },
      { tipo: 'alerta', variante: 'warning', texto: 'Se você tem doença renal, está grávida, amamentando ou usa medicamentos de uso contínuo, não trate creatina como detalhe: confirme com profissional.' },
      { tipo: 'heading', nivel: 2, texto: 'Fontes usadas' },
      { tipo: 'paragrafo', texto: 'Baseado em posicionamentos da International Society of Sports Nutrition sobre creatina e em literatura de nutrição esportiva.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Creatina faz mal aos rins?', resposta: 'Em pessoas saudáveis, a creatina é considerada segura nas doses usuais. Quem já tem doença renal precisa de orientação individual.' },
        { pergunta: 'Qual a melhor dose de creatina?', resposta: 'Para a maioria, 3 a 5 g por dia é suficiente. A consistência é mais importante que o horário.' },
        { pergunta: 'Creatina dá retenção?', resposta: 'Pode aumentar água dentro do músculo, o que é diferente de inchaço ruim ou gordura.' },
        { pergunta: 'Creatina precisa ciclar?', resposta: 'Não há necessidade prática de ciclar para a maioria das pessoas saudáveis.' }
      ] }
    ],
    relacionados: ['guia-completo-creatina-2026', 'creatina-faz-mal', 'creatina-engorda']
  },
  {
    slug: 'whey-isolado-para-que-serve',
    titulo: 'Whey Isolado: Para Que Serve, Quando Tomar e Quem Precisa',
    descricao: 'Entenda para que serve whey isolado, diferença para concentrado, quando vale pagar mais e como usar para bater proteína diária.',
    autor,
    data: today,
    categoria: 'Proteínas',
    tags: ['whey isolado', 'whey protein', 'proteina', 'hipertrofia'],
    tempo_leitura: '7 min',
    imagem: '/images/blog/whey-isolado-para-que-serve.jpg',
    objetivos: ['performance'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Resposta direta:** whey isolado serve para facilitar ingestão de proteína com menos lactose, carboidrato e gordura. Ele não é obrigatório para ganhar massa, mas pode ser útil.' },
      { tipo: 'heading', nivel: 2, texto: 'Quando whey isolado vale a pena' },
      { tipo: 'lista', itens: ['Você tem desconforto com whey concentrado.', 'Você quer mais proteína por dose com menos calorias extras.', 'Você está em cutting e precisa controlar calorias.', 'Você tem rotina corrida e não bate proteína com comida.', 'Você prefere textura mais leve.'] },
      { tipo: 'heading', nivel: 2, texto: 'Isolado vs concentrado' },
      { tipo: 'tabela', colunas: ['Tipo', 'Vantagem', 'Para quem'], linhas: [['Concentrado', 'Mais barato', 'Quem tolera lactose e quer custo-benefício'], ['Isolado', 'Mais proteína e menos lactose', 'Quem quer digestão leve ou cutting'], ['Hidrolisado', 'Digestão mais rápida', 'Casos específicos, geralmente caro'], ['Proteína vegetal', 'Sem leite', 'Veganos/intolerantes']] },
      { tipo: 'cta', texto: 'Antes de comprar, calcule quanta proteína você realmente precisa.', botao: 'Calcular proteína diária', link: '/calculadoras/proteina' },
      { tipo: 'heading', nivel: 2, texto: 'Como usar' },
      { tipo: 'lista', itens: ['Use para completar a meta diária, não como regra fixa pós-treino.', 'Uma dose costuma ter 20-30 g de proteína.', 'Misture com água para menos calorias ou leite para mais saciedade.', 'Se a dieta já bate proteína, whey é opcional.', 'Compare preço por grama de proteína, não só preço do pote.'] },
      { tipo: 'heading', nivel: 2, texto: 'Fontes usadas' },
      { tipo: 'paragrafo', texto: 'Baseado em posição da International Society of Sports Nutrition sobre proteína e exercício, além de princípios de composição corporal.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Whey isolado é melhor que concentrado?', resposta: 'Melhor para quem quer menos lactose e menos calorias extras. Para muita gente, concentrado já resolve.' },
        { pergunta: 'Whey isolado emagrece?', resposta: 'Não diretamente. Pode ajudar saciedade e proteína dentro de uma dieta com déficit calórico.' },
        { pergunta: 'Precisa tomar whey depois do treino?', resposta: 'Não obrigatoriamente. O total de proteína do dia é mais importante que o minuto exato.' },
        { pergunta: 'Whey isolado tem lactose?', resposta: 'Geralmente tem bem menos lactose que o concentrado, mas pode não ser zero. Confira o rótulo.' }
      ] }
    ],
    relacionados: ['whey-isolado-vs-concentrado', 'proteina-por-dia-quanto-consumir-guia-completo', 'guia-whey-protein-2026']
  },
  {
    slug: 'contador-de-calorias-online-gratis',
    titulo: 'Contador de Calorias Online Grátis: Como Calcular Sem Complicar',
    descricao: 'Aprenda a usar um contador de calorias online grátis, calcular TDEE e ajustar a dieta para emagrecer, manter ou ganhar massa.',
    autor,
    data: today,
    categoria: 'Calculadoras',
    tags: ['contador de calorias online gratis', 'calorias', 'tdee', 'dieta'],
    tempo_leitura: '7 min',
    imagem: '/images/blog/contador-calorias-online-gratis.jpg',
    objetivos: ['emagrecimento'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Comece aqui:** contador de calorias não precisa ser perfeito. Ele precisa dar um ponto de partida para você testar por 2 semanas e ajustar.' },
      { tipo: 'cta', texto: 'Use a calculadora gratuita antes de ler o passo a passo.', botao: 'Abrir contador de calorias', link: '/calculadoras/calorias' },
      { tipo: 'heading', nivel: 2, texto: 'Como calcular suas calorias' },
      { tipo: 'lista', ordenada: true, itens: ['Calcule sua TMB.', 'Multiplique pelo fator de atividade para chegar ao TDEE.', 'Defina objetivo: perder, manter ou ganhar peso.', 'Ajuste 300-500 kcal para baixo ou para cima.', 'Acompanhe peso médio por 14 dias.'] },
      { tipo: 'heading', nivel: 2, texto: 'Tabela simples por objetivo' },
      { tipo: 'tabela', colunas: ['Objetivo', 'Ajuste inicial', 'Como avaliar'], linhas: [['Emagrecer', '-300 a -500 kcal/dia', 'Peso médio deve cair'], ['Manter', 'TDEE aproximado', 'Peso médio estável'], ['Ganhar massa', '+200 a +400 kcal/dia', 'Peso sobe devagar'], ['Recomposição', 'TDEE ou leve déficit', 'Medidas e força importam']] },
      { tipo: 'heading', nivel: 2, texto: 'Erros comuns' },
      { tipo: 'lista', itens: ['Usar o número como verdade absoluta.', 'Não contar óleo, bebidas e beliscos.', 'Mudar calorias todo dia.', 'Esquecer proteína.', 'Desistir antes de 14 dias de dados.'] },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Contador de calorias online é confiável?', resposta: 'É uma estimativa. Use como ponto de partida e ajuste com seu peso médio ao longo das semanas.' },
        { pergunta: 'Quantas calorias cortar para emagrecer?', resposta: 'Geralmente 300 a 500 kcal abaixo do TDEE é um começo sustentável.' },
        { pergunta: 'Preciso pesar comida?', resposta: 'Ajuda bastante no começo, mas você pode evoluir para estimativas depois de aprender porções.' },
        { pergunta: 'Caloria ou macro: o que importa mais?', resposta: 'Calorias controlam direção do peso; macros ajudam composição corporal, saciedade e performance.' }
      ] }
    ],
    relacionados: ['como-calcular-gasto-calorico-tmb-tdee', 'quantas-calorias-comer-por-dia', 'deficit-calorico-quanto-cortar']
  },
  {
    slug: 'formula-mifflin-st-jeor-homem',
    titulo: 'Fórmula Mifflin-St Jeor Para Homem: Como Calcular TMB e TDEE',
    descricao: 'Veja a fórmula Mifflin-St Jeor para homens, exemplo prático de cálculo e como transformar TMB em calorias diárias.',
    autor,
    data: today,
    categoria: 'Calculadoras',
    tags: ['formula mifflin st jeor homem', 'tmb homem', 'tdee', 'calorias'],
    tempo_leitura: '6 min',
    imagem: '/images/blog/mifflin-st-jeor-homem.jpg',
    objetivos: ['emagrecimento'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Fórmula para homens:** TMB = (10 x peso em kg) + (6,25 x altura em cm) - (5 x idade) + 5.' },
      { tipo: 'paragrafo', texto: 'A fórmula Mifflin-St Jeor estima sua taxa metabólica basal: a energia que seu corpo gasta em repouso. Para saber calorias do dia, você ainda precisa multiplicar pelo fator de atividade.' },
      { tipo: 'cta', texto: 'Quer evitar conta manual?', botao: 'Usar calculadora de calorias', link: '/calculadoras/calorias' },
      { tipo: 'heading', nivel: 2, texto: 'Exemplo prático' },
      { tipo: 'tabela', colunas: ['Dado', 'Valor'], linhas: [['Peso', '80 kg'], ['Altura', '180 cm'], ['Idade', '30 anos'], ['Cálculo', '(10x80) + (6,25x180) - (5x30) + 5'], ['TMB', '1.780 kcal/dia']] },
      { tipo: 'heading', nivel: 2, texto: 'Transformando TMB em TDEE' },
      { tipo: 'tabela', colunas: ['Atividade', 'Fator', 'TDEE no exemplo'], linhas: [['Sedentário', '1,2', '2.136 kcal'], ['Leve', '1,375', '2.448 kcal'], ['Moderado', '1,55', '2.759 kcal'], ['Intenso', '1,725', '3.071 kcal']] },
      { tipo: 'heading', nivel: 2, texto: 'Como usar para dieta' },
      { tipo: 'lista', itens: ['Para emagrecer: comece 300-500 kcal abaixo do TDEE.', 'Para ganhar massa: comece 200-400 kcal acima.', 'Para manter: fique próximo do TDEE e acompanhe peso médio.', 'Ajuste após 14 dias, não após 1 dia ruim.'] },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Mifflin-St Jeor é a melhor fórmula?', resposta: 'É uma das fórmulas mais usadas para estimar gasto em adultos. Ainda assim, é estimativa.' },
        { pergunta: 'TMB é igual a calorias do dia?', resposta: 'Não. TMB é repouso; TDEE inclui atividade e rotina.' },
        { pergunta: 'Homem usa +5 na fórmula?', resposta: 'Sim. Na versão mais comum, homens usam +5 e mulheres usam -161.' },
        { pergunta: 'Como saber se a fórmula errou?', resposta: 'Acompanhe peso médio por 2 semanas. Se não muda como esperado, ajuste 100-200 kcal.' }
      ] }
    ],
    relacionados: ['mifflin-st-jeor-formula', 'como-calcular-gasto-calorico-tmb-tdee', 'contador-de-calorias-online-gratis']
  },
  {
    slug: 'macros-cutting-como-calcular',
    titulo: 'Macros Para Cutting: Como Calcular Proteína, Carbo e Gordura',
    descricao: 'Aprenda a calcular macros para cutting sem perder músculo: proteína, gordura mínima, carboidratos e exemplos práticos.',
    autor,
    data: today,
    categoria: 'Calculadoras',
    tags: ['macros cutting', 'cutting', 'proteina', 'deficit calorico'],
    tempo_leitura: '7 min',
    imagem: '/images/blog/macros-cutting-como-calcular.jpg',
    objetivos: ['emagrecimento'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Regra simples:** no cutting, primeiro defina calorias, depois proteína, depois gordura mínima, e só então carboidratos.' },
      { tipo: 'cta', texto: 'Quer calcular automaticamente?', botao: 'Abrir calculadora de macros', link: '/calculadoras/macros' },
      { tipo: 'heading', nivel: 2, texto: 'Passo a passo' },
      { tipo: 'lista', ordenada: true, itens: ['Calcule seu TDEE.', 'Crie déficit de 300-500 kcal.', 'Defina proteína entre 1,6 e 2,2 g/kg.', 'Defina gordura em faixa moderada.', 'Use o restante das calorias em carboidratos.'] },
      { tipo: 'heading', nivel: 2, texto: 'Exemplo para 80 kg' },
      { tipo: 'tabela', colunas: ['Macro', 'Quantidade', 'Calorias'], linhas: [['Proteína', '160 g', '640 kcal'], ['Gordura', '60 g', '540 kcal'], ['Carboidrato', '205 g', '820 kcal'], ['Total', '-', '2.000 kcal']] },
      { tipo: 'heading', nivel: 2, texto: 'Erros no cutting' },
      { tipo: 'lista', itens: ['Cortar carboidrato demais e piorar treino.', 'Baixar proteína e perder saciedade.', 'Fazer déficit agressivo demais.', 'Mudar macros toda semana sem dados.', 'Ignorar sono e passos.'] },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Qual macro é mais importante no cutting?', resposta: 'Calorias definem perda de peso; proteína ajuda preservar massa magra e saciedade.' },
        { pergunta: 'Preciso zerar carboidrato?', resposta: 'Não. Carboidratos podem ajudar treino e adesão. O déficit calórico é mais importante.' },
        { pergunta: 'Quanto de proteína no cutting?', resposta: 'Uma faixa comum é 1,6 a 2,2 g/kg, ajustando por objetivo e contexto.' },
        { pergunta: 'Macros ou calorias?', resposta: 'Os dois ajudam. Comece por calorias e proteína; refine carboidrato e gordura depois.' }
      ] }
    ],
    relacionados: ['como-dividir-macros-cutting-bulking-manutencao', 'cutting-modelo-calorias-macros', 'deficit-calorico-quanto-cortar']
  },
  {
    slug: 'calcular-proteina-por-peso',
    titulo: 'Como Calcular Proteína Por Peso: Fórmula Simples Por Objetivo',
    descricao: 'Veja como calcular proteína diária por peso corporal para emagrecer, ganhar massa ou manter saúde, com exemplos práticos.',
    autor,
    data: today,
    categoria: 'Proteínas',
    tags: ['calcular proteina por peso', 'proteina por kg', 'proteina diaria'],
    tempo_leitura: '7 min',
    imagem: '/images/blog/calcular-proteina-por-peso.jpg',
    objetivos: ['performance', 'emagrecimento'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Fórmula simples:** peso corporal x meta em gramas por kg. Exemplo: 70 kg x 1,8 g = 126 g de proteína por dia.' },
      { tipo: 'cta', texto: 'Faça a conta automática por objetivo.', botao: 'Calcular proteína diária', link: '/calculadoras/proteina' },
      { tipo: 'heading', nivel: 2, texto: 'Faixas práticas' },
      { tipo: 'tabela', colunas: ['Objetivo', 'Proteína por kg', 'Exemplo 70 kg'], linhas: [['Saúde geral', '1,0-1,4 g/kg', '70-98 g/dia'], ['Emagrecimento', '1,6-2,2 g/kg', '112-154 g/dia'], ['Hipertrofia', '1,6-2,2 g/kg', '112-154 g/dia'], ['Idosos ativos', '1,2-1,8 g/kg', '84-126 g/dia']] },
      { tipo: 'heading', nivel: 2, texto: 'Como bater a meta' },
      { tipo: 'lista', itens: ['Distribua proteína em 3-5 refeições.', 'Use ovos, carnes, leite, iogurte, leguminosas e whey se precisar.', 'No cutting, priorize proteína em todas as refeições.', 'Compare alimentos pelo total de proteína e calorias.', 'Ajuste se houver doença renal ou orientação médica específica.'] },
      { tipo: 'heading', nivel: 2, texto: 'Whey é obrigatório?' },
      { tipo: 'paragrafo', texto: 'Não. Whey é comida em pó: prático, mas opcional. Ele vale quando ajuda você a bater a meta com facilidade.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Como calcular proteína por peso?', resposta: 'Multiplique seu peso pela faixa do objetivo. Exemplo: 80 kg x 2 g/kg = 160 g por dia.' },
        { pergunta: 'Proteína demais faz mal?', resposta: 'Em pessoas saudáveis, faixas usuais são bem toleradas. Quem tem doença renal precisa de orientação.' },
        { pergunta: 'Preciso comer proteína em toda refeição?', resposta: 'Ajuda saciedade e distribuição diária, mas o total do dia é o principal.' },
        { pergunta: 'Whey conta como proteína?', resposta: 'Sim. A proteína do whey entra na meta diária como qualquer outra fonte.' }
      ] }
    ],
    relacionados: ['proteina-por-dia-quanto-consumir-guia-completo', 'whey-isolado-para-que-serve', 'whey-isolado-vs-concentrado']
  }
]

const existing = new Set(artigos.map((artigo) => artigo.slug))
let added = 0

for (const article of articles) {
  if (existing.has(article.slug)) continue
  artigos.push(article)
  added += 1
}

fs.writeFileSync(filePath, `${JSON.stringify(artigos, null, 2)}\n`)
console.log(`Artigos adicionados: ${added}`)
