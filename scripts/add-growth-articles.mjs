import fs from 'node:fs'
import path from 'node:path'

const filePath = path.join(process.cwd(), 'data', 'artigos.json')
const artigos = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const today = '2026-05-20'
const autor = 'Equipe Suplementa Já'

const newArticles = [
  {
    slug: 'suplementos-para-emagrecer-funcionam',
    titulo: 'Suplementos Para Emagrecer Funcionam? O Que Vale e O Que Evitar',
    descricao: 'Veja quais suplementos podem ajudar no emagrecimento, quais são desperdício de dinheiro e o que realmente move a perda de gordura.',
    autor,
    data: today,
    categoria: 'Emagrecimento',
    tags: ['suplementos para emagrecer', 'emagrecimento', 'queima gordura', 'deficit calorico'],
    tempo_leitura: '8 min',
    imagem: '/images/blog/suplementos-emagrecer-funcionam.jpg',
    objetivos: ['emagrecimento'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Resposta rápida:** suplementos não emagrecem sozinhos. Eles podem ajudar pouco quando já existe déficit calórico, proteína adequada, treino e sono. Se a dieta está fora do lugar, nenhum termogênico resolve.' },
      { tipo: 'paragrafo', texto: 'A pergunta certa não é "qual suplemento seca?", e sim: **qual suplemento melhora adesão, treino, saciedade ou saúde enquanto você mantém déficit calórico?** Esse filtro evita gastar dinheiro com promessa bonita e resultado fraco.' },
      { tipo: 'heading', nivel: 2, texto: 'O que realmente faz emagrecer' },
      { tipo: 'lista', itens: ['Déficit calórico consistente por semanas, não por dois dias.', 'Proteína suficiente para preservar massa magra e reduzir fome.', 'Treino de força para manter músculo durante a perda de peso.', 'Sono adequado, porque privação de sono aumenta fome e piora adesão.', 'Passos e rotina ativa, o famoso gasto diário fora da academia.'] },
      { tipo: 'cta', texto: 'Comece pelo número que manda no emagrecimento: seu gasto calórico diário.', botao: 'Calcular minhas calorias', link: '/calculadoras/calorias' },
      { tipo: 'heading', nivel: 2, texto: 'Suplementos com melhor custo-benefício' },
      { tipo: 'tabela', colunas: ['Suplemento', 'Quando faz sentido', 'Expectativa real'], linhas: [['Proteína/Whey', 'Quando você não bate proteína com comida', 'Ajuda saciedade e preservação muscular'], ['Creatina', 'Quem treina força e quer manter performance', 'Não queima gordura, mas ajuda treino'], ['Cafeína', 'Quem tolera bem estimulantes', 'Pode melhorar energia e desempenho'], ['Ômega-3', 'Dieta pobre em peixes', 'Mais saúde metabólica que emagrecimento direto'], ['Fibras', 'Pouca saciedade ou intestino ruim', 'Pode ajudar fome e regularidade']] },
      { tipo: 'heading', nivel: 2, texto: 'O que costuma ser dinheiro jogado fora' },
      { tipo: 'lista', itens: ['Termogênico cheio de ingredientes em dose escondida.', 'Chás detox prometendo "desinchar" como se fosse gordura.', 'Bloqueador de carboidrato usado para compensar excesso alimentar.', 'Produtos que prometem perder muitos quilos sem mudar rotina.', 'Combinações caras com nomes bonitos e pouca dose efetiva.'] },
      { tipo: 'alerta', variante: 'warning', texto: '**Cuidado:** se você usa remédio para pressão, ansiedade, diabetes, tireoide ou coração, converse com profissional antes de usar estimulantes ou fórmulas para emagrecimento.' },
      { tipo: 'heading', nivel: 2, texto: 'Plano simples para não se perder' },
      { tipo: 'lista', ordenada: true, itens: ['Calcule suas calorias e coma 300-500 kcal abaixo do gasto.', 'Bata proteína diária antes de pensar em termogênico.', 'Use creatina se treina força.', 'Use cafeína só se ela melhora treino sem atrapalhar sono.', 'Revise peso e medidas por 14 dias antes de trocar tudo.'] },
      { tipo: 'heading', nivel: 2, texto: 'Fontes usadas' },
      { tipo: 'paragrafo', texto: 'Baseado em orientações gerais do NIH Office of Dietary Supplements sobre suplementos para perda de peso, além de materiais de referência sobre proteína, cafeína e composição corporal. Suplementos ajudam contexto; não substituem dieta, treino ou acompanhamento.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Qual suplemento emagrece mais rápido?', resposta: 'Nenhum suplemento confiável emagrece rápido sozinho. Cafeína pode ajudar desempenho e gasto agudo, proteína ajuda saciedade, mas a perda de gordura depende do déficit calórico.' },
        { pergunta: 'Whey emagrece?', resposta: 'Whey não queima gordura. Ele pode ajudar se facilita bater proteína com menos calorias e mais saciedade.' },
        { pergunta: 'Creatina atrapalha emagrecimento?', resposta: 'Não. Creatina pode aumentar peso na balança por água intramuscular, mas isso não é gordura. Para quem treina, pode ajudar a manter força.' },
        { pergunta: 'Termogênico vale a pena?', resposta: 'Na maioria dos casos, só vale se for simples, com dose clara e se não atrapalhar sono ou ansiedade. Fórmulas caras raramente são prioridade.' }
      ] }
    ],
    relacionados: ['deficit-calorico-quanto-cortar', 'como-calcular-gasto-calorico-tmb-tdee', 'whey-engorda-ou-emagrece']
  },
  {
    slug: 'pre-treino-vale-a-pena',
    titulo: 'Pré-Treino Vale a Pena? Quando Ajuda, Quando É Dinheiro Jogado Fora',
    descricao: 'Entenda se pré-treino funciona, quais ingredientes realmente importam e quando cafeína, creatina ou comida simples resolvem melhor.',
    autor,
    data: today,
    categoria: 'Performance',
    tags: ['pre treino', 'cafeina', 'creatina', 'performance', 'treino'],
    tempo_leitura: '7 min',
    imagem: '/images/blog/pre-treino-vale-a-pena.jpg',
    objetivos: ['performance'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Resposta curta:** pré-treino vale a pena se ele melhora seu treino sem piorar sono, ansiedade ou pressão. O problema é pagar caro por fórmula com doses baixas e promessa alta.' },
      { tipo: 'paragrafo', texto: 'O pré-treino bom não é o que faz você "sentir formigamento". É o que entrega energia, foco e desempenho com ingredientes em doses claras. Muitas vezes, café + creatina diária + refeição pré-treino já resolvem.' },
      { tipo: 'heading', nivel: 2, texto: 'Ingredientes que mais importam' },
      { tipo: 'tabela', colunas: ['Ingrediente', 'Para que serve', 'Como avaliar'], linhas: [['Cafeína', 'Energia, foco e desempenho', 'Evite tarde se atrapalha sono'], ['Creatina', 'Força e volume de treino ao longo do tempo', 'Funciona por uso diário, não precisa ser pré-treino'], ['Beta-alanina', 'Pode ajudar esforços intensos e repetidos', 'Formigamento não significa mais resultado'], ['Citrulina', 'Pump e fluxo sanguíneo', 'Precisa dose adequada'], ['Carboidrato', 'Energia para treino longo ou pesado', 'Pode vir da comida']] },
      { tipo: 'cta', texto: 'Se seu objetivo é força e ganho de massa, comece pelo básico que mais aparece nos estudos.', botao: 'Ver guia de creatina', link: '/blog/guia-completo-creatina-2026' },
      { tipo: 'heading', nivel: 2, texto: 'Quando pré-treino faz sentido' },
      { tipo: 'lista', itens: ['Você treina cedo ou depois de um dia cansativo.', 'Seu treino cai muito sem estimulante.', 'Você tolera cafeína sem ansiedade, palpitação ou insônia.', 'A fórmula tem doses transparentes, sem mistura proprietária escondida.', 'Você já cuida de sono, alimentação e hidratação.'] },
      { tipo: 'heading', nivel: 2, texto: 'Quando não vale a pena' },
      { tipo: 'lista', itens: ['Você treina tarde e perde sono depois.', 'Você compra pelo "efeito" e não pelo desempenho.', 'A fórmula tem 15 ingredientes e pouca dose de cada.', 'Você ainda não bate proteína, calorias e hidratação.', 'Você tem pressão alta, arritmia, ansiedade forte ou usa estimulantes/remédios sem orientação.'] },
      { tipo: 'alerta', variante: 'warning', texto: 'Pré-treino com estimulante pode ser ruim para quem tem sensibilidade à cafeína, pressão alta, histórico cardíaco ou ansiedade. Segurança vem antes de performance.' },
      { tipo: 'heading', nivel: 2, texto: 'Alternativa barata' },
      { tipo: 'lista', itens: ['Café 30-60 minutos antes do treino, se você tolera.', 'Creatina todos os dias, em qualquer horário.', 'Água e sal suficientes, especialmente em treino com muito suor.', 'Banana, pão, arroz ou outra fonte de carboidrato se o treino é intenso.'] },
      { tipo: 'heading', nivel: 2, texto: 'Fontes usadas' },
      { tipo: 'paragrafo', texto: 'Conteúdo baseado em revisões e posições da International Society of Sports Nutrition sobre cafeína e creatina, além de princípios gerais de nutrição esportiva.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Pré-treino dá resultado?', resposta: 'Pode melhorar energia e desempenho no treino, principalmente por cafeína. Mas não substitui sono, alimentação e progressão de treino.' },
        { pergunta: 'Creatina é pré-treino?', resposta: 'Não exatamente. Creatina funciona por saturação muscular ao longo dos dias. O horário é menos importante que tomar com consistência.' },
        { pergunta: 'Formigamento significa que o pré-treino é bom?', resposta: 'Não. O formigamento costuma vir da beta-alanina e não prova que a fórmula é superior.' },
        { pergunta: 'Posso tomar pré-treino todo dia?', resposta: 'Depende da dose de cafeína, sono, pressão e tolerância. Se você precisa de doses cada vez maiores, é sinal de alerta.' }
      ] }
    ],
    relacionados: ['cafeina-performance-dose-pre-treino', 'creatina-antes-ou-depois-treino', 'guia-completo-creatina-2026']
  },
  {
    slug: 'como-fortalecer-imunidade-suplementos',
    titulo: 'Como Fortalecer a Imunidade: Suplementos Que Fazem Sentido',
    descricao: 'Veja quais suplementos podem ajudar a imunidade, quando vale investigar deficiência e por que megadoses não são a solução.',
    autor,
    data: today,
    categoria: 'Imunidade',
    tags: ['imunidade', 'vitamina c', 'vitamina d', 'zinco', 'suplementos imunidade'],
    tempo_leitura: '8 min',
    imagem: '/images/blog/como-fortalecer-imunidade-suplementos.jpg',
    objetivos: ['imunidade'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Resposta honesta:** imunidade forte não vem de megadose. Vem de sono, dieta, vacinação, atividade física e correção de deficiências. Suplemento ajuda mais quando existe falta ou risco de falta.' },
      { tipo: 'paragrafo', texto: 'O erro comum é tentar "turbo carregar" o sistema imune. O melhor caminho é remover gargalos: pouca vitamina D, pouca proteína, baixa ingestão de frutas/vegetais, sono ruim e estresse crônico.' },
      { tipo: 'heading', nivel: 2, texto: 'Suplementos com melhor lógica para imunidade' },
      { tipo: 'tabela', colunas: ['Nutriente', 'Quando considerar', 'Observação'], linhas: [['Vitamina D', 'Pouco sol, exames baixos, grupos de risco', 'Dose ideal depende de exame'], ['Vitamina C', 'Baixa ingestão de frutas e vegetais', 'Não compensa dieta ruim'], ['Zinco', 'Dieta restrita ou sinais de baixa ingestão', 'Excesso pode atrapalhar cobre'], ['Ômega-3', 'Pouco peixe na dieta', 'Mais modulação inflamatória que "blindagem"'], ['Proteína', 'Baixa ingestão diária', 'Defesa imune também depende de aminoácidos']] },
      { tipo: 'cta', texto: 'Quer revisar os nutrientes mais ligados a imunidade?', botao: 'Ver nutrientes para imunidade', link: '/objetivos/imunidade' },
      { tipo: 'heading', nivel: 2, texto: 'O que não fazer' },
      { tipo: 'lista', itens: ['Tomar megadose de vitamina C achando que isso evita qualquer gripe.', 'Usar zinco por meses em dose alta sem necessidade.', 'Misturar muitos suplementos e ignorar sono.', 'Comprar "combo imunidade" sem ver doses e necessidades reais.', 'Achar que suplemento substitui vacina ou acompanhamento médico.'] },
      { tipo: 'heading', nivel: 2, texto: 'Checklist prático' },
      { tipo: 'lista', ordenada: true, itens: ['Durma em horário minimamente regular.', 'Bata proteína diária.', 'Coma frutas e vegetais todos os dias.', 'Verifique vitamina D se você pega pouco sol.', 'Use suplemento para corrigir brecha, não para compensar rotina inteira.'] },
      { tipo: 'alerta', variante: 'warning', texto: 'Infecções frequentes, febre recorrente, perda de peso inexplicada ou cansaço extremo precisam de avaliação médica. Não tente resolver só com suplemento.' },
      { tipo: 'heading', nivel: 2, texto: 'Fontes usadas' },
      { tipo: 'paragrafo', texto: 'Baseado em fichas técnicas do NIH Office of Dietary Supplements sobre vitamina C, vitamina D e zinco, além de recomendações gerais de saúde pública.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Qual é o melhor suplemento para imunidade?', resposta: 'Depende do que falta. Vitamina D, vitamina C e zinco podem fazer sentido em contextos específicos, mas não existe um suplemento universal.' },
        { pergunta: 'Vitamina C evita gripe?', resposta: 'Ela participa da função imune, mas não é garantia de prevenção. O benefício é maior quando a ingestão está baixa ou em situações específicas.' },
        { pergunta: 'Posso tomar zinco todo dia?', resposta: 'Só faz sentido com dose adequada e necessidade real. Excesso de zinco pode prejudicar absorção de cobre.' },
        { pergunta: 'Imunidade baixa é sempre falta de vitamina?', resposta: 'Não. Sono, estresse, doenças, remédios e alimentação geral também pesam muito.' }
      ] }
    ],
    relacionados: ['vitamina-c-imunidade-gripes-resfriados', 'vitamina-d-deficiencia-brasileiros', 'zinco-imunidade-testosterona-pele']
  },
  {
    slug: 'suplementos-para-dor-articulacao-joelho',
    titulo: 'Suplementos Para Dor no Joelho e Articulação: O Que Pode Ajudar',
    descricao: 'Glucosamina, condroitina, colágeno, ômega-3 e cúrcuma: veja o que pode fazer sentido para dor articular e o que não substituir.',
    autor,
    data: today,
    categoria: 'Articulações',
    tags: ['dor no joelho', 'articulação', 'glucosamina', 'colageno', 'condroitina'],
    tempo_leitura: '8 min',
    imagem: '/images/blog/suplementos-dor-articulacao-joelho.jpg',
    objetivos: ['saude'],
    conteudo: [
      { tipo: 'alerta', variante: 'warning', texto: '**Importante:** dor no joelho pode ter causas diferentes: sobrecarga, lesão, artrose, inflamação, tendinite ou problema biomecânico. Suplemento pode apoiar, mas não substitui diagnóstico.' },
      { tipo: 'paragrafo', texto: 'O suplemento certo depende do tipo de dor. Dor aguda depois de torção, inchaço importante, travamento ou incapacidade de apoiar o pé precisa de avaliação. Para desconforto crônico leve/moderado, alguns suplementos podem ser considerados junto com fortalecimento e controle de carga.' },
      { tipo: 'heading', nivel: 2, texto: 'Suplementos mais usados para articulações' },
      { tipo: 'tabela', colunas: ['Suplemento', 'Quando pode fazer sentido', 'Expectativa real'], linhas: [['Glucosamina/Condroitina', 'Artrose e dor crônica em algumas pessoas', 'Resposta varia bastante'], ['Colágeno', 'Tendões, pele e suporte estrutural', 'Melhor como estratégia de longo prazo'], ['Ômega-3', 'Dieta pobre em peixes e perfil inflamatório', 'Apoio geral, não analgésico imediato'], ['Cúrcuma/Curcumina', 'Inflamação leve e desconforto', 'Atenção a interações medicamentosas'], ['Vitamina D', 'Deficiência ou pouca exposição solar', 'Corrigir deficiência pode ajudar saúde musculoesquelética']] },
      { tipo: 'cta', texto: 'Veja o guia específico de glucosamina e condroitina antes de comprar.', botao: 'Ler guia de glucosamina', link: '/blog/glucosamina-condroitina-articulacoes-artrite' },
      { tipo: 'heading', nivel: 2, texto: 'O que mais ajuda além de suplemento' },
      { tipo: 'lista', itens: ['Fortalecimento de quadríceps, glúteos e panturrilha.', 'Controle de peso quando há sobrecarga articular.', 'Ajuste de volume de corrida, agachamento ou impacto.', 'Sono e recuperação adequados.', 'Avaliação profissional se a dor persiste.'] },
      { tipo: 'heading', nivel: 2, texto: 'Sinais de alerta' },
      { tipo: 'lista', itens: ['Dor após queda ou torção forte.', 'Joelho inchado, quente ou vermelho.', 'Travamento, falseio ou incapacidade de apoiar.', 'Febre junto com dor articular.', 'Dor que piora progressivamente por semanas.'] },
      { tipo: 'heading', nivel: 2, texto: 'Fontes usadas' },
      { tipo: 'paragrafo', texto: 'Baseado em materiais do NCCIH sobre glucosamina/condroitina e em referências de nutrição sobre ômega-3, vitamina D e saúde musculoesquelética.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Glucosamina funciona para dor no joelho?', resposta: 'Pode ajudar algumas pessoas com dor crônica/artrose, mas a resposta varia. Não é solução imediata nem substitui fortalecimento e diagnóstico.' },
        { pergunta: 'Colágeno tira dor articular?', resposta: 'Não deve ser visto como analgésico. Pode ser parte de estratégia de longo prazo para tecido conjuntivo, especialmente com treino adequado.' },
        { pergunta: 'Qual suplemento é melhor para articulação?', resposta: 'Depende do caso. Glucosamina/condroitina, colágeno, ômega-3 e vitamina D podem fazer sentido em contextos diferentes.' },
        { pergunta: 'Dor no joelho precisa de médico?', resposta: 'Se há inchaço, trauma, travamento, instabilidade ou dor persistente, sim. Suplemento não diagnostica lesão.' }
      ] }
    ],
    relacionados: ['glucosamina-condroitina-articulacoes-artrite', 'colageno-hidrolisado-funciona-pele-articulacoes', 'curcuma-curcumina-inflamacao-articulacoes']
  },
  {
    slug: 'como-dormir-melhor-suplementos',
    titulo: 'Como Dormir Melhor: Suplementos, Hábitos e O Que Evitar',
    descricao: 'Magnésio, melatonina, rotina de sono e cafeína: veja o que realmente ajuda a dormir melhor sem depender de soluções mágicas.',
    autor,
    data: today,
    categoria: 'Sono',
    tags: ['dormir melhor', 'sono', 'melatonina', 'magnesio', 'insônia'],
    tempo_leitura: '8 min',
    imagem: '/images/blog/como-dormir-melhor-suplementos.jpg',
    objetivos: ['sono'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Resposta direta:** suplemento pode ajudar, mas sono melhora mesmo quando rotina, luz, cafeína, horário e estresse entram no lugar. Melatonina não é sedativo universal.' },
      { tipo: 'paragrafo', texto: 'Se você dorme mal, comece procurando o ladrão do sono: cafeína tarde, tela até a hora de deitar, horário irregular, treino tarde demais, ansiedade ou quarto claro/quente. O suplemento entra depois, como apoio.' },
      { tipo: 'heading', nivel: 2, texto: 'Suplementos mais comuns para sono' },
      { tipo: 'tabela', colunas: ['Suplemento', 'Quando pode ajudar', 'Cuidado'], linhas: [['Magnésio', 'Baixa ingestão, tensão muscular, rotina estressante', 'Doses altas podem soltar intestino'], ['Melatonina', 'Ajuste de horário, jet lag, dificuldade de iniciar sono', 'Dose alta nem sempre é melhor'], ['Glicina', 'Algumas pessoas relatam melhora de relaxamento', 'Efeito individual'], ['L-teanina', 'Relaxamento sem muita sedação', 'Pode não resolver insônia real'], ['Vitamina D', 'Deficiência associada a pior saúde geral', 'Ideal avaliar exame']] },
      { tipo: 'cta', texto: 'Se o problema principal é dose e segurança da melatonina, veja o guia completo.', botao: 'Ver guia de melatonina', link: '/blog/melatonina-sono-insonia-dose-ideal' },
      { tipo: 'heading', nivel: 2, texto: 'Ajustes que valem mais que suplemento' },
      { tipo: 'lista', itens: ['Cortar cafeína 8-10 horas antes de dormir se você é sensível.', 'Pegar luz natural pela manhã.', 'Diminuir luz forte e tela no fim da noite.', 'Dormir e acordar em horários parecidos.', 'Manter quarto escuro, silencioso e fresco.'] },
      { tipo: 'heading', nivel: 2, texto: 'Quando procurar ajuda' },
      { tipo: 'lista', itens: ['Insônia por mais de 3 meses.', 'Ronco alto e pausas na respiração.', 'Sonolência intensa durante o dia.', 'Uso frequente de remédios para dormir sem acompanhamento.', 'Ansiedade ou depressão junto com piora do sono.'] },
      { tipo: 'heading', nivel: 2, texto: 'Fontes usadas' },
      { tipo: 'paragrafo', texto: 'Baseado em referências sobre higiene do sono e nos conteúdos do Suplementa Já sobre magnésio e melatonina. Para insônia persistente, avaliação profissional é prioridade.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Qual suplemento é melhor para dormir?', resposta: 'Depende do problema. Magnésio pode ajudar em rotina estressante ou baixa ingestão; melatonina ajuda mais no horário do sono do que em sedação forte.' },
        { pergunta: 'Melatonina pode tomar todo dia?', resposta: 'Não é ideal usar sem entender a causa do sono ruim. Dose, horário e contexto importam.' },
        { pergunta: 'Cafeína atrapalha sono mesmo de manhã?', resposta: 'Para a maioria, manhã é mais seguro. Pessoas sensíveis podem sentir efeito por muitas horas, principalmente se tomam à tarde.' },
        { pergunta: 'Dormir mal atrapalha emagrecimento?', resposta: 'Sim. Sono ruim tende a piorar fome, energia, treino e adesão ao déficit calórico.' }
      ] }
    ],
    relacionados: ['melatonina-sono-insonia-dose-ideal', 'magnesio-ansiedade-sono-tipos', 'zma-zinco-magnesio-b6-sono-testosterona']
  },
  {
    slug: 'vitamina-d3-k2-juntas-beneficios',
    titulo: 'Vitamina D3 + K2 Juntas: Benefícios, Quando Tomar e Cuidados',
    descricao: 'Entenda por que D3 e K2 aparecem juntas, quando a combinação faz sentido e quais cuidados tomar antes de suplementar.',
    autor,
    data: today,
    categoria: 'Vitaminas',
    tags: ['vitamina d3 k2', 'vitamina d', 'vitamina k2', 'ossos', 'calcio'],
    tempo_leitura: '7 min',
    imagem: '/images/blog/vitamina-d3-k2-juntas.jpg',
    objetivos: ['saude'],
    conteudo: [
      { tipo: 'alerta', variante: 'info', texto: '**Resposta rápida:** D3 e K2 fazem sentido juntas principalmente quando o foco é metabolismo do cálcio, ossos e estratégia de longo prazo. Mas a necessidade real de D3 deve ser guiada por contexto e, idealmente, exame.' },
      { tipo: 'paragrafo', texto: 'A vitamina D ajuda o corpo a lidar com cálcio e saúde óssea. A vitamina K participa de proteínas ligadas ao direcionamento do cálcio nos tecidos. Por isso, muitos suplementos combinam D3 + K2.' },
      { tipo: 'heading', nivel: 2, texto: 'Quando D3 + K2 pode fazer sentido' },
      { tipo: 'lista', itens: ['Pouca exposição solar e risco de vitamina D baixa.', 'Rotina com baixa ingestão de alimentos ricos em vitamina K.', 'Foco em saúde óssea junto com cálcio, magnésio e treino de força.', 'Pessoas que já foram orientadas a suplementar vitamina D.', 'Quem busca uma fórmula prática para manutenção.'] },
      { tipo: 'cta', texto: 'Antes de comprar, entenda primeiro vitamina D isolada e sinais de deficiência.', botao: 'Ver guia de vitamina D', link: '/blog/vitamina-d-deficiencia-brasileiros' },
      { tipo: 'heading', nivel: 2, texto: 'Cuidados importantes' },
      { tipo: 'lista', itens: ['Quem usa anticoagulante precisa conversar com médico antes de vitamina K.', 'Megadose de vitamina D sem exame pode ser perigosa.', 'Cálcio alto no sangue, doença renal e algumas condições exigem orientação.', 'K2 não "protege" contra qualquer excesso de vitamina D.', 'Suplemento não substitui alimentação, sol adequado e acompanhamento.'] },
      { tipo: 'heading', nivel: 2, texto: 'D3 + K2 vs D3 sozinha' },
      { tipo: 'tabela', colunas: ['Opção', 'Quando escolher', 'Observação'], linhas: [['D3 sozinha', 'Deficiência confirmada ou orientação simples', 'Mais fácil ajustar dose'], ['D3 + K2', 'Estratégia de manutenção e saúde óssea', 'Atenção a anticoagulantes'], ['D3 + K2 + Magnésio', 'Rotina pobre em magnésio ou foco musculoesquelético', 'Mais variáveis, exige bom senso'], ['Sem suplemento', 'Boa exposição solar e exames adequados', 'Pode ser suficiente']] },
      { tipo: 'heading', nivel: 2, texto: 'Fontes usadas' },
      { tipo: 'paragrafo', texto: 'Baseado nas fichas do NIH Office of Dietary Supplements sobre vitamina D e vitamina K, e no conteúdo interno do Suplementa Já sobre cálcio e saúde óssea.' },
      { tipo: 'faq', perguntas: [
        { pergunta: 'Vitamina D3 precisa sempre de K2?', resposta: 'Não sempre. A combinação pode fazer sentido para saúde óssea e metabolismo do cálcio, mas D3 isolada pode ser suficiente em muitos casos.' },
        { pergunta: 'Quem não deve tomar K2?', resposta: 'Pessoas que usam anticoagulantes, especialmente varfarina, precisam conversar com médico antes de suplementar vitamina K.' },
        { pergunta: 'D3 + K2 ajuda nos ossos?', resposta: 'Pode apoiar uma estratégia de saúde óssea, mas depende de vitamina D adequada, cálcio, magnésio, treino de força e contexto clínico.' },
        { pergunta: 'Posso tomar D3 + K2 sem exame?', resposta: 'Doses baixas de manutenção são comuns, mas o ideal é avaliar vitamina D no sangue antes de doses maiores.' }
      ] }
    ],
    relacionados: ['vitamina-k2-d3-calcio-ossos-coracao', 'vitamina-d-deficiencia-brasileiros', 'calcio-ossos-osteoporose-qual-tomar']
  }
]

const existing = new Set(artigos.map((artigo) => artigo.slug))
let added = 0

for (const article of newArticles) {
  if (existing.has(article.slug)) continue
  artigos.push(article)
  added += 1
}

fs.writeFileSync(filePath, `${JSON.stringify(artigos, null, 2)}\n`)
console.log(`Artigos adicionados: ${added}`)
