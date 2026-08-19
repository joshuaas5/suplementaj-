import fs from 'node:fs'
import path from 'node:path'

const articlesPath = path.join(process.cwd(), 'data', 'artigos.json')
const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))
const UPDATED_AT = '2026-08-19'
const MARKER = 'Resposta direta e critérios atualizados'

const sources = {
  protein: [
    {
      titulo: 'International Society of Sports Nutrition Position Stand: protein and exercise',
      orgao: 'Journal of the International Society of Sports Nutrition / PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28642676/',
    },
    {
      titulo: 'Como ler as informações obrigatórias no rótulo de suplementos',
      orgao: 'Agência Nacional de Vigilância Sanitária (Anvisa)',
      url: 'https://www.gov.br/anvisa/pt-br/assuntos/alimentos/suplementos-alimentares/perguntas-frequentes/7-quais-informacoes-precisam-estar',
    },
  ],
  calories: [
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
  caffeine: [
    {
      titulo: 'International Society of Sports Nutrition position stand: caffeine and exercise performance',
      orgao: 'Journal of the International Society of Sports Nutrition',
      url: 'https://jissn.biomedcentral.com/articles/10.1186/s12970-020-00383-4',
    },
    {
      titulo: 'Caffeine fact sheet',
      orgao: 'National Institutes of Health - Office of Dietary Supplements',
      url: 'https://ods.od.nih.gov/factsheets/ExerciseAndAthleticPerformance-HealthProfessional/',
    },
  ],
  zma: [
    {
      titulo: 'Effects of ZMA supplementation on training adaptations and markers of anabolism',
      orgao: 'Journal of the International Society of Sports Nutrition / PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/18500945/',
    },
    {
      titulo: 'ZMA, sleep and cognitive performance after sleep restriction',
      orgao: 'PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/39062445/',
    },
    {
      titulo: 'Magnesium fact sheet for health professionals',
      orgao: 'National Institutes of Health - Office of Dietary Supplements',
      url: 'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/',
    },
  ],
  refeed: [
    {
      titulo: 'Intermittent energy restriction in resistance-trained individuals: randomized trial',
      orgao: 'PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33467235/',
    },
    {
      titulo: 'Diet breaks during energy restriction in resistance-trained females: randomized trial',
      orgao: 'PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/37181269/',
    },
  ],
  creatine: [
    {
      titulo: 'ISSN position stand: safety and efficacy of creatine supplementation',
      orgao: 'Journal of the International Society of Sports Nutrition / PubMed',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28615996/',
    },
    {
      titulo: 'Como saber se um suplemento alimentar é autorizado',
      orgao: 'Agência Nacional de Vigilância Sanitária (Anvisa)',
      url: 'https://www.gov.br/anvisa/pt-br/assuntos/alimentos/suplementos-alimentares/como-saber-se-um-suplemento-alimentar-e-autorizado/',
    },
  ],
  mounjaro: [
    {
      titulo: 'Mounjaro (tirzepatida): indicação aprovada para controle crônico do peso',
      orgao: 'Agência Nacional de Vigilância Sanitária (Anvisa)',
      url: 'https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/novos-medicamentos-e-indicacoes/mounjaro-r-tirzepatida-nova-indicacao',
    },
    {
      titulo: 'Listas oficiais de preços máximos de medicamentos',
      orgao: 'Câmara de Regulação do Mercado de Medicamentos / Anvisa',
      url: 'https://www.gov.br/anvisa/pt-br/assuntos/medicamentos/cmed/precos',
    },
    {
      titulo: 'Anvisa determina apreensão de lotes falsificados de Mounjaro',
      orgao: 'Agência Nacional de Vigilância Sanitária (Anvisa)',
      url: 'https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-determina-apreensao-de-lotes-falsificados-de-mounjaro-1',
    },
  ],
}

const configs = {
  'zma-zinco-magnesio-b6-sono-testosterona': {
    title: 'ZMA Funciona? O Que Estudos Dizem Sobre Sono e Testosterona',
    description: 'Entenda o que é ZMA, se a combinação de zinco, magnésio e B6 melhora sono ou testosterona e quando corrigir uma deficiência pode fazer sentido.',
    hub: 'sono-imunidade-performance',
    source: 'zma',
    answer: 'ZMA não demonstrou aumentar testosterona, força ou massa muscular de forma consistente em pessoas com ingestão adequada de zinco e magnésio. A combinação pode ser útil quando existe deficiência de algum nutriente, mas não substitui sono, alimentação nem investigação clínica.',
    evidence: 'Ensaios controlados em praticantes de musculação não encontraram melhora significativa nos marcadores hormonais ou nas adaptações ao treino. Estudos recentes sobre sono também não sustentam a promessa de que uma dose isolada de ZMA compense privação de sono. O benefício plausível está em corrigir baixa ingestão, especialmente de magnésio ou zinco, e não em criar um efeito anabólico acima do normal.',
    steps: [
      ['Antes de comprar', 'Revise dieta, sono e sinais de deficiência', 'Evita atribuir ao suplemento um problema que ele não resolve'],
      ['No rótulo', 'Some o zinco e o magnésio de todos os produtos', 'Reduz o risco de excesso acumulado'],
      ['Após o uso', 'Avalie sono e tolerância por algumas semanas', 'Sem melhora objetiva, não há motivo para aumentar a dose'],
    ],
    mistakes: ['esperar aumento de testosterona sem deficiência', 'combinar ZMA com outros multivitamínicos sem somar as doses', 'usar o produto para compensar noites curtas', 'tomar doses altas mesmo com desconforto intestinal'],
    caution: 'Zinco e magnésio também vêm da alimentação. Doses elevadas de zinco por longos períodos podem prejudicar o equilíbrio de cobre, e algumas formas de magnésio causam diarreia. Pessoas com doença renal, uso contínuo de medicamentos ou sintomas persistentes devem conversar com um profissional antes de suplementar.',
    faqs: [
      ['ZMA aumenta testosterona?', 'Não há evidência consistente de aumento em pessoas sem deficiência de zinco ou magnésio.'],
      ['ZMA melhora o sono?', 'Pode ajudar indiretamente se houver deficiência, mas não substitui rotina e duração adequadas de sono.'],
      ['Qual é o melhor horário?', 'O horário é menos importante que a dose total e a tolerância. Siga o rótulo e evite somar produtos semelhantes.'],
      ['Quem deve ter mais cuidado?', 'Pessoas com doença renal, uso de medicamentos ou que já consomem altas doses de minerais.'],
    ],
  },
  'cafeina-performance-dose-pre-treino': {
    title: 'Cafeína Pré-Treino: Dose, Horário, Benefícios e Riscos',
    description: 'Veja como a cafeína pode afetar a performance, quanto tempo antes do treino costuma ser usada e como reduzir insônia, ansiedade e tolerância.',
    hub: 'sono-imunidade-performance',
    source: 'caffeine',
    answer: 'A cafeína pode melhorar atenção e alguns aspectos do desempenho esportivo, mas a resposta varia muito. Doses menores já podem funcionar; aumentar a quantidade eleva o risco de tremor, palpitação, ansiedade, desconforto gastrointestinal e piora do sono.',
    evidence: 'A posição da ISSN descreve benefício agudo em diferentes modalidades, com uso frequente cerca de 60 minutos antes do exercício. Isso não significa que todo praticante precise de uma dose alta. Sensibilidade individual, consumo habitual, horário do treino, massa corporal e qualidade do sono mudam a relação entre benefício e efeito colateral.',
    steps: [
      ['Primeiro teste', 'Comece com a menor dose do rótulo', 'Avalia tolerância sem transformar o treino em teste de limite'],
      ['Horário', 'Considere a hora de dormir, não apenas a hora do treino', 'A meia-vida pode manter efeito por várias horas'],
      ['Comparação', 'Registre desempenho e sono', 'Só vale manter se o ganho no treino superar o custo no descanso'],
    ],
    mistakes: ['somar café, energético e pré-treino sem contar a cafeína total', 'aumentar a dose quando a tolerância aparece', 'usar à noite e ignorar a piora do sono', 'confundir sensação de estímulo com melhora real de desempenho'],
    caution: 'Gestantes, adolescentes, pessoas com ansiedade importante, arritmias, pressão descontrolada ou uso de determinados medicamentos precisam de orientação individual. Se houver dor no peito, desmaio ou palpitação intensa, interrompa o uso e procure atendimento.',
    faqs: [
      ['Quanto tempo antes do treino?', 'Muitos protocolos usam cerca de 60 minutos, mas o produto, a refeição e a resposta individual alteram o tempo.'],
      ['Mais cafeína dá mais resultado?', 'Não necessariamente. Acima da dose útil, os efeitos adversos crescem sem ganho proporcional.'],
      ['Posso tomar todos os dias?', 'O uso frequente pode aumentar tolerância e afetar o sono. Reavalie necessidade e dose.'],
      ['Café e pré-treino somam?', 'Sim. Conte a cafeína de café, chá, energéticos, cápsulas e pré-treinos no total diário.'],
    ],
  },
  'proteina-por-dia-quanto-consumir-guia-completo': {
    title: 'Proteína por Dia: Quantos Gramas por Kg para Cada Objetivo',
    description: 'Calcule uma faixa prática de proteína por peso para manutenção, treino, ganho de massa ou déficit calórico e aprenda a distribuir ao longo do dia.',
    hub: 'whey-proteina',
    source: 'protein',
    answer: 'Para adultos que treinam, a posição da ISSN cita uma faixa diária de 1,4 a 2,0 g de proteína por kg como suficiente para a maioria. A necessidade individual depende do objetivo, do total de calorias, do tipo de treino, da idade e do acompanhamento clínico.',
    evidence: 'Proteína e treino de força atuam juntos na síntese proteica muscular. O total do dia costuma ser mais importante que perseguir um horário perfeito. Em déficit calórico, alguns atletas podem precisar de uma faixa maior para preservar massa magra, mas isso não deve ser extrapolado automaticamente para toda pessoa.',
    steps: [
      ['Sem treino intenso', 'Comece pela alimentação e pela recomendação individual', 'Evita transformar uma faixa esportiva em regra universal'],
      ['Treino de força', 'Distribua fontes proteicas em refeições', 'Facilita bater a meta sem depender de uma dose enorme'],
      ['Whey', 'Use apenas para completar o que faltou', 'É alimento prático, não requisito para hipertrofia'],
    ],
    mistakes: ['calcular a meta e ignorar a proteína já presente nas refeições', 'concentrar quase tudo em um único shake', 'substituir frutas, legumes e refeições por suplemento', 'usar faixas de atleta sem considerar doença renal ou orientação clínica'],
    caution: 'A faixa esportiva é referência para adultos saudáveis e ativos. Crianças, gestantes, idosos frágeis e pessoas com doença renal, hepática ou outras condições clínicas precisam de avaliação individual. O cálculo do site não diagnostica deficiência nem prescreve dieta.',
    faqs: [
      ['Preciso de whey para bater proteína?', 'Não. Whey é uma opção prática; carnes, ovos, laticínios, leguminosas e soja também contam.'],
      ['Devo usar o peso atual?', 'Em muitos casos sim, mas obesidade importante e situações clínicas pedem cálculo individualizado.'],
      ['Proteína demais vira músculo?', 'Não. Ganho muscular também depende de treino, energia, recuperação e consistência.'],
      ['Posso dividir a meta em refeições?', 'Sim. Distribuir ao longo do dia costuma ser mais prático e confortável.'],
    ],
  },
  'como-calcular-gasto-calorico-tmb-tdee': {
    title: 'Como Calcular Gasto Calórico: TMB, TDEE e Ajuste Prático',
    description: 'Aprenda a estimar TMB e TDEE com a fórmula de Mifflin-St Jeor, escolher um fator de atividade e ajustar o resultado pela tendência do peso.',
    hub: 'calorias-macros',
    source: 'calories',
    answer: 'Calcule a TMB com uma equação validada, aplique um fator de atividade para estimar o TDEE e trate o resultado como ponto de partida. O gasto real deve ser conferido pela tendência de peso e pela ingestão registrada durante algumas semanas.',
    evidence: 'A equação de Mifflin-St Jeor foi desenvolvida para estimar gasto de repouso em adultos. O TDEE acrescenta atividade e, por isso, acumula mais incerteza. Relógios, aplicativos e calculadoras não medem perfeitamente o metabolismo individual; eles organizam uma hipótese inicial que precisa ser ajustada com dados reais.',
    steps: [
      ['1. TMB', 'Use peso, altura, idade e sexo da equação', 'Estima apenas o repouso'],
      ['2. TDEE', 'Aplique um fator de atividade conservador', 'Evita superestimar treino e rotina'],
      ['3. Ajuste', 'Observe média de peso por 2 a 3 semanas', 'Transforma estimativa em plano pessoal'],
    ],
    mistakes: ['confundir TMB com a meta final de calorias', 'usar fator de atleta porque treina poucos dias', 'mudar calorias por causa de uma pesagem isolada', 'tratar o número da calculadora como resultado exato'],
    caution: 'Mudanças bruscas de peso, histórico de transtorno alimentar, gestação, adolescência ou doença metabólica pedem acompanhamento. Para uso geral, ajustes pequenos e baseados em média semanal são mais informativos do que cortes agressivos.',
    faqs: [
      ['TMB e TDEE são a mesma coisa?', 'Não. TMB estima o repouso; TDEE tenta incluir atividade e rotina.'],
      ['Qual fator de atividade usar?', 'Escolha de forma conservadora e ajuste depois pela tendência do peso.'],
      ['A calculadora pode errar?', 'Sim. Equações estimam médias populacionais e não medem seu metabolismo diretamente.'],
      ['Quando recalcular?', 'Após mudança relevante de peso, rotina ou objetivo, não a cada oscilação diária.'],
    ],
  },
  'como-dividir-macros-cutting-bulking-manutencao': {
    title: 'Como Dividir Macros para Cutting, Bulking e Manutenção',
    description: 'Defina calorias, proteína, gordura e carboidratos para cutting, bulking ou manutenção com uma ordem simples e ajustes baseados na evolução.',
    hub: 'calorias-macros',
    source: 'protein',
    answer: 'Comece pelas calorias, defina uma faixa de proteína compatível com o objetivo, preserve uma quantidade adequada de gordura e use carboidratos para completar o total. A melhor divisão é a que sustenta treino, saciedade e adesão.',
    evidence: 'Não existe uma porcentagem universal de macros. Pessoas com o mesmo objetivo podem responder bem a distribuições diferentes porque preferência alimentar, volume de treino, digestão e rotina mudam. A evidência apoia proteína suficiente e balanço energético coerente; o restante precisa ser testado com método.',
    steps: [
      ['Cutting', 'Déficit moderado e proteína suficiente', 'Prioriza perda de gordura com preservação de massa'],
      ['Bulking', 'Superávit pequeno e treino progressivo', 'Reduz ganho de gordura desnecessário'],
      ['Manutenção', 'Calorias próximas ao gasto e macros flexíveis', 'Facilita aderência de longo prazo'],
    ],
    mistakes: ['definir porcentagens antes das calorias', 'zerar gordura ou carboidrato', 'usar proteína excessiva e reduzir demais outros alimentos', 'ajustar tudo ao mesmo tempo sem saber o que funcionou'],
    caution: 'Macros são uma ferramenta de planejamento, não um diagnóstico. Qualidade dos alimentos, fibras, micronutrientes, sono e treino continuam importantes. Pessoas com condições clínicas ou histórico de transtorno alimentar devem evitar controle rígido sem acompanhamento.',
    faqs: [
      ['Qual macro devo calcular primeiro?', 'Depois das calorias, normalmente a proteína é o primeiro macro a ser definido.'],
      ['Carboidrato atrapalha o cutting?', 'Não por si só. O déficit calórico e a adesão ao plano têm papel central.'],
      ['Bulking exige comer muito?', 'Não. Um superávit pequeno e ajustável costuma ser mais racional que excesso de calorias.'],
      ['Posso mudar os macros entre dias?', 'Sim, desde que a média e a adesão continuem coerentes com o objetivo.'],
    ],
  },
  'refeed-day-como-fazer': {
    title: 'Refeed Day Funciona? Como Fazer e Quando Faz Sentido',
    description: 'Veja o que estudos sobre refeeds e diet breaks realmente mostram, como diferenciar refeed de dia livre e quando a estratégia pode ajudar na adesão.',
    hub: 'calorias-macros',
    source: 'refeed',
    answer: 'Refeed é um período planejado de maior ingestão, geralmente próximo da manutenção e com aumento de carboidratos. Ele pode ajudar treino, fome ou adesão em algumas pessoas, mas não “reinicia” o metabolismo nem compensa uma semana inteira fora do plano.',
    evidence: 'Ensaios em pessoas treinadas produziram resultados mistos. Um estudo encontrou melhor preservação de massa livre de gordura com dois dias de refeed; outro não encontrou vantagem em composição corporal ou gasto de repouso com diet breaks. Isso indica que a estratégia pode ser útil, mas não é obrigatória nem superior em todos os contextos.',
    steps: [
      ['Planejamento', 'Aproxime calorias da manutenção', 'Evita transformar refeed em excesso sem limite'],
      ['Macros', 'Aumente principalmente carboidratos e mantenha proteína', 'Conecta a estratégia ao treino e à recuperação'],
      ['Avaliação', 'Compare fome, treino e média semanal', 'Mostra se houve benefício prático'],
    ],
    mistakes: ['tratar refeed como cheat day sem limite', 'usar a balança do dia seguinte como ganho de gordura', 'reduzir proteína para caber comida altamente palatável', 'fazer refeed sem estar em déficit ou sem dificuldade de adesão'],
    caution: 'O peso pode subir temporariamente por glicogênio, água e conteúdo intestinal. Isso não comprova ganho imediato de gordura. Pessoas com compulsão alimentar ou relação difícil com dias livres devem preferir uma estratégia menos rígida e buscar acompanhamento.',
    extra: [{
      heading: 'Um exemplo de planejamento sem transformar em dia livre',
      texts: [
        'Suponha que a pessoa esteja seguindo um déficit planejado e perceba queda de rendimento, fome elevada e dificuldade de adesão. Um refeed pode aproximar a ingestão da manutenção por um ou dois dias, mantendo proteína e concentrando o aumento em carboidratos de refeições comuns. A meta não é comer o máximo possível, mas reduzir temporariamente a restrição dentro de uma semana ainda coerente.',
        'Depois, compare o que realmente mudou: qualidade do treino, fome, sono e facilidade de retornar ao plano. Se o refeed sempre termina em perda de controle ou culpa, ele não está cumprindo a função. Uma distribuição diária menos restritiva pode ser melhor que alternar rigidez e excesso.',
        'A média semanal continua mandando no resultado. Um dia próximo da manutenção pode caber no plano, mas precisa ser considerado junto dos outros dias, sem punição ou corte extremo depois.',
      ],
    }],
    faqs: [
      ['Refeed acelera o metabolismo?', 'Não há garantia de aumento relevante ou duradouro. O principal benefício pode ser adesão e treino.'],
      ['Refeed é igual a cheat day?', 'Não. Refeed é planejado; cheat day costuma ser um dia sem estrutura.'],
      ['Quantos dias fazer?', 'Depende do contexto. Estudos testaram protocolos diferentes, e não existe frequência universal.'],
      ['O peso aumenta depois?', 'Pode aumentar por água e glicogênio, sem representar a mesma quantidade de gordura.'],
    ],
  },
  'macros-para-ganho-massa': {
    title: 'Macros para Ganhar Massa: Proteína, Carboidrato e Gordura',
    description: 'Monte uma divisão de macros para hipertrofia com superávit ajustável, proteína suficiente e carboidratos para sustentar o treino.',
    hub: 'calorias-macros',
    source: 'protein',
    answer: 'Para ganhar massa, combine treino progressivo, proteína suficiente e energia adequada. Não existe divisão perfeita: um superávit pequeno, monitorado pela evolução do peso e da força, costuma ser mais útil do que elevar calorias sem controle.',
    evidence: 'A literatura sustenta o papel de proteína e treino de força, mas não define um “superávit ideal” universal. Pessoas iniciantes e avançadas ganham músculo em ritmos diferentes. Por isso, calorias e macros devem ser ajustados pela resposta ao longo de semanas, não por uma promessa fixa de ganho mensal.',
    steps: [
      ['Proteína', 'Defina uma faixa diária e distribua nas refeições', 'Dá suporte à síntese proteica'],
      ['Gordura', 'Mantenha quantidade compatível com saúde e preferência', 'Evita dietas desnecessariamente restritas'],
      ['Carboidrato', 'Complete calorias e sustente o treino', 'Ajuda volume e recuperação'],
    ],
    mistakes: ['confundir bulking com comer sem limite', 'usar shake hipercalórico antes de organizar refeições', 'aumentar calorias por uma semana sem ganho na balança', 'ignorar cintura, desempenho e digestão'],
    caution: 'Acompanhe média de peso, medidas e força. Se a cintura sobe rápido e o desempenho não melhora, o superávit pode estar alto. Condições metabólicas, gastrointestinais ou histórico de transtorno alimentar pedem estratégia individual.',
    extra: [{
      heading: 'Como ajustar sem refazer a dieta inteira',
      texts: [
        'Mantenha o plano por tempo suficiente para enxergar tendência. Se peso, medidas e desempenho não mudarem após algumas semanas de boa adesão, aumente uma pequena quantidade de calorias, de preferência em alimentos fáceis de repetir. Se o peso sobe rápido e a cintura acompanha sem melhora clara de força, reduza o excedente.',
        'O objetivo é encontrar o menor ajuste que permita progresso. Trocar simultaneamente calorias, treino, suplementos e horários impede saber o que funcionou. Registre poucas métricas consistentes e faça uma mudança de cada vez.',
        'Use a calculadora como ponto inicial e transforme a dieta em refeições repetíveis. Uma boa divisão de macros precisa caber no apetite, no orçamento e nos horários. Se o plano só funciona em dias perfeitos, ele ainda não está pronto para sustentar meses de treino.',
      ],
    }],
    faqs: [
      ['Quanto de proteína usar?', 'Para muitos adultos que treinam, referências esportivas citam 1,4 a 2,0 g/kg/dia.'],
      ['Preciso de hipercalórico?', 'Não. Ele só é uma forma prática de calorias quando refeições não bastam.'],
      ['Carboidrato vira gordura?', 'Excesso energético pode aumentar gordura, independentemente do macro isolado.'],
      ['Quando ajustar calorias?', 'Depois de observar tendência de peso e treino por algumas semanas.'],
    ],
  },
  'melhor-marca-creatina-brasil': {
    title: 'Melhor Creatina em 2026: Como Escolher sem Ranking Falso',
    description: 'Compare creatinas por ingrediente, regularização, laudo, dose e custo por porção. Entenda por que marca famosa não substitui verificação do produto.',
    hub: 'creatina',
    source: 'creatine',
    replace: true,
    monetizable: true,
    answer: 'A melhor creatina é um produto regularizado, com creatina monohidratada claramente declarada, dose transparente, lote e fabricante identificados e custo coerente por porção. Sem teste laboratorial independente do lote, não é honesto afirmar que uma marca foi “testada” pelo site.',
    evidence: 'A creatina monohidratada é a forma com maior volume de evidência. Selos e matérias-primas conhecidas podem ajudar na rastreabilidade, mas não transformam automaticamente um produto em melhor para todos. O consumidor deve conferir a situação regulatória, o rótulo, a quantidade real de creatina e a reputação do canal de venda.',
    steps: [
      ['Ingrediente', 'Procure creatina monohidratada sem mistura desnecessária', 'Facilita comparar dose e evidência'],
      ['Regularização', 'Confira número e situação na Anvisa quando aplicável', 'Reduz risco de produto irregular'],
      ['Preço', 'Divida o valor pelo número de porções úteis', 'Evita escolher apenas pelo tamanho do pote'],
    ],
    mistakes: ['comprar em marketplace sem verificar vendedor e nota fiscal', 'comparar preço do pote em vez de custo por dose', 'achar que sabor, cor ou marketing provam pureza', 'confiar em ranking sem metodologia e data'],
    caution: 'Lotes, preços e disponibilidade mudam. Este guia não certifica marcas nem substitui laudo do lote. Desconfie de preço muito abaixo do mercado, lacre violado, rótulo incompleto ou promessa de efeito terapêutico.',
    extra: [{
      heading: 'Método transparente para comparar opções',
      texts: [
        'Primeiro, descarte produtos cuja composição não esteja clara. Depois, anote peso líquido, quantidade de creatina por porção, número de porções e preço final com frete. Divida o preço pela quantidade total de creatina, não pelo tamanho visual da embalagem. Esse cálculo simples evita que scoop menor ou pote grande distorça a comparação.',
        'Em seguida, confira fabricante, lote, validade, canal de atendimento e situação regulatória. Um laudo só é útil quando identifica produto, lote, laboratório, método e data; uma imagem solta nas redes sociais não oferece a mesma rastreabilidade. Se a marca mudou fórmula ou fornecedor, uma análise antiga pode não representar o pote atual.',
        'Por fim, considere a experiência prática: dissolução, tolerância, facilidade de repetir a dose e confiança no vendedor. Nenhum desses itens prova pureza isoladamente, mas todos ajudam a reduzir risco de compra ruim quando combinados com rótulo e regularização.',
        'Termos como “micronizada”, “premium” e “importada” descrevem posicionamento ou características do produto, mas não garantem benefício adicional. A pergunta central é se a porção entrega creatina monohidratada regular, em embalagem rastreável e por um custo que você consegue manter.',
        'Não use gosto, textura ou quantidade de espuma como teste caseiro de pureza. Essas características mudam com granulometria, temperatura e mistura, e não substituem análise laboratorial. Quando houver dúvida sobre autenticidade, procure o fabricante com lote e nota fiscal antes de consumir.',
      ],
      items: [
        'Creatina monohidratada declarada como ingrediente principal.',
        'Dose e porção legíveis, sem mistura proprietária.',
        'Fabricante, lote, validade e atendimento identificados.',
        'Situação regulatória conferida na fonte oficial quando aplicável.',
        'Preço calculado por quantidade real de creatina.',
      ],
    }],
    faqs: [
      ['Creapure é obrigatória?', 'Não. É uma matéria-prima rastreável, mas outros produtos regulares de creatina monohidratada podem ser adequados.'],
      ['Como comparar o preço?', 'Use custo por porção com a quantidade de creatina que você pretende consumir.'],
      ['O site testou essas marcas?', 'Não. Sem análise laboratorial documentada, o site não apresenta marca como testada.'],
      ['Onde conferir regularização?', 'Use a consulta oficial de alimentos e suplementos da Anvisa e os dados do rótulo.'],
    ],
  },
  'whey-isolado-vs-concentrado': {
    title: 'Whey Isolado ou Concentrado: Diferenças, Lactose e Custo',
    description: 'Compare whey isolado e concentrado por proteína, lactose, carboidratos, tolerância e custo por grama para decidir qual faz sentido.',
    hub: 'whey-proteina',
    source: 'protein',
    monetizable: true,
    answer: 'Whey concentrado costuma ter melhor custo-benefício para quem tolera lactose e só precisa de praticidade. O isolado pode ser útil quando a prioridade é reduzir lactose, carboidratos ou gordura, mas o rótulo e a tolerância individual importam mais que o nome da categoria.',
    evidence: 'Ambos fornecem proteína de alta qualidade. Para hipertrofia, o total diário de proteína e o treino têm mais peso que escolher isolado automaticamente. Produtos variam muito na concentração, porção, adoçantes e presença de outros ingredientes; compare números do rótulo, não apenas a frente da embalagem.',
    steps: [
      ['Tolerância', 'Observe lactose e sintomas digestivos', 'Ajuda a decidir se o isolado vale a diferença'],
      ['Concentração', 'Calcule proteína por 100 g e por dose', 'Evita comparar porções de tamanhos diferentes'],
      ['Custo', 'Divida o preço pelos gramas totais de proteína', 'Mostra o custo real do nutriente'],
    ],
    mistakes: ['achar que isolado sempre gera mais músculo', 'confundir sem lactose com sem proteína do leite', 'comparar scoop sem comparar gramas', 'ignorar adoçantes e tolerância individual'],
    caution: 'Alergia à proteína do leite não é a mesma coisa que intolerância à lactose. Quem tem alergia deve evitar derivados do leite conforme orientação profissional; o whey isolado não é automaticamente seguro nesse caso.',
    faqs: [
      ['Whey isolado dá mais resultado?', 'Não necessariamente. Total diário de proteína, treino e adesão são mais importantes.'],
      ['Concentrado tem lactose?', 'Geralmente contém mais lactose que o isolado, mas a quantidade varia por produto.'],
      ['Como calcular custo por proteína?', 'Divida o preço pelos gramas totais de proteína disponíveis no pacote.'],
      ['Alergia ao leite pode usar isolado?', 'Não presuma que sim. Alergia envolve proteínas do leite e requer orientação.'],
    ],
  },
  'guia-whey-protein-2026': {
    title: 'Whey Protein: Tipos, Quantidade e Como Escolher',
    description: 'Guia de whey concentrado, isolado e hidrolisado com critérios de rótulo, quantidade de proteína, lactose, custo e uso na rotina.',
    hub: 'whey-proteina',
    source: 'protein',
    monetizable: true,
    answer: 'Whey é uma fonte prática de proteína do leite. Escolha pelo que falta na dieta, tolerância, concentração proteica e custo por grama; ele não é obrigatório para ganhar massa e não compensa um treino ou alimentação inconsistentes.',
    evidence: 'A evidência sobre proteína e exercício apoia uma ingestão diária adequada e bem distribuída. Concentrado, isolado e hidrolisado podem contribuir para essa meta, mas diferenças de marketing nem sempre representam benefício mensurável. Leia a lista de ingredientes e a tabela nutricional.',
    steps: [
      ['Objetivo', 'Defina quantos gramas faltam na alimentação', 'Evita comprar dose maior que a necessidade'],
      ['Rótulo', 'Compare proteína, ingredientes e alergênicos', 'Mostra o que realmente existe na porção'],
      ['Custo', 'Calcule preço por grama de proteína', 'Permite comparar embalagens e tipos'],
    ],
    mistakes: ['comprar pelo número de ingredientes', 'tratar hidrolisado como superior para qualquer pessoa', 'usar várias doses sem somar proteína do dia', 'ignorar procedência e regularização'],
    caution: 'Whey contém proteínas do leite. Pessoas com alergia precisam de orientação e alternativa adequada. Intolerância à lactose varia em intensidade; teste tolerância e leia o rótulo específico.',
    faqs: [
      ['Whey é obrigatório para hipertrofia?', 'Não. Ele apenas facilita atingir a meta de proteína.'],
      ['Qual tipo tem menos lactose?', 'Em geral o isolado, mas confira o rótulo porque produtos variam.'],
      ['Quando tomar?', 'No horário que melhor ajuda a completar a proteína diária e manter consistência.'],
      ['Como fugir de produto ruim?', 'Verifique regularização, vendedor, rótulo completo, concentração e custo por proteína.'],
    ],
  },
  'melhores-marcas-whey-protein-2026': {
    title: 'Melhores Whey Proteins de 2026: Como Comparar Rótulo e Custo',
    description: 'Use critérios verificáveis para comparar whey: concentração proteica, ingredientes, lactose, regularização e custo por grama de proteína.',
    hub: 'whey-proteina',
    source: 'protein',
    replace: true,
    monetizable: true,
    answer: 'Não existe uma única melhor marca para todos. A escolha muda conforme tolerância à lactose, orçamento, sabor, quantidade de proteína e confiança no fabricante. Este guia usa critérios de comparação e não afirma ter testado produtos em laboratório.',
    evidence: 'O rótulo deve informar porção, quantidade de nutrientes, ingredientes, alergênicos e restrições. A concentração de proteína e o custo por grama são comparações mais úteis que tamanho do scoop ou frases da embalagem. A regularização e a procedência do vendedor também fazem parte da decisão.',
    steps: [
      ['Proteína real', 'Compare gramas de proteína por 100 g', 'Neutraliza diferenças no tamanho da porção'],
      ['Ingredientes', 'Veja a ordem e a presença de misturas', 'Ajuda a entender concentração e tolerância'],
      ['Compra', 'Confira vendedor, lote, nota fiscal e regularização', 'Reduz risco de falsificação ou produto irregular'],
    ],
    mistakes: ['chamar produto de testado sem laudo publicado', 'usar sabor como prova de qualidade', 'ignorar frete no custo final', 'comprar embalagem suspeita por preço muito baixo'],
    caution: 'Fórmulas e preços mudam. Refaça a conta com o rótulo atual antes de comprar. Rankings sem data, metodologia, lote ou conflito de interesse declarado não devem ser tratados como teste independente.',
    extra: [{
      heading: 'A conta que permite comparar qualquer whey',
      texts: [
        'Comece pela concentração: divida os gramas de proteína da porção pelo peso total da porção e multiplique por 100. Um produto com 24 g de proteína em 30 g de pó tem concentração diferente de outro com 24 g em 40 g. Depois, multiplique a proteína por porção pelo número de porções para estimar a proteína total da embalagem.',
        'Para calcular custo por grama de proteína, divida o preço final pela proteína total do pacote. Inclua frete e desconto realmente disponível. Essa conta não decide sabor ou tolerância, mas separa valor nutricional de embalagem e publicidade.',
        'Leia também a lista de ingredientes. Ela é apresentada em ordem decrescente de quantidade. Misturas com carboidratos, espessantes e outros componentes podem fazer sentido para sabor ou textura, mas precisam entrar na comparação. Alergênicos e presença de lactose merecem atenção específica.',
        'A reputação da marca ajuda, mas não dispensa conferir o produto atual. Empresas mudam fornecedores, sabores e fórmulas; marketplaces misturam vendedores diferentes. Prefira loja identificada, nota fiscal, lacre íntegro e canal oficial para confirmar lote quando algo parecer fora do padrão.',
        'Sabor e solubilidade influenciam adesão, porém não são sinônimos de concentração. Uma opção um pouco mais cara pode valer a pena se for melhor tolerada e evitar desperdício. Registre a conta e o rótulo usados na comparação para que o guia continue verificável quando os preços mudarem.',
      ],
      items: [
        'Compare concentração proteica usando a mesma base de 100 g.',
        'Calcule proteína total no pacote e custo por grama.',
        'Cheque ingredientes, alergênicos, lactose e adoçantes.',
        'Confirme regularização, lote, validade e vendedor.',
        'Reavalie o rótulo sempre que a fórmula ou embalagem mudar.',
      ],
    }],
    faqs: [
      ['Qual marca o site recomenda?', 'O site apresenta critérios. A melhor escolha depende do rótulo atual, procedência, tolerância e preço.'],
      ['Como comparar porções diferentes?', 'Converta para proteína por 100 g e custo por grama de proteína.'],
      ['Mais ingredientes significa melhor?', 'Não. Uma fórmula simples pode ser mais fácil de comparar e tolerar.'],
      ['O ranking é teste laboratorial?', 'Não. Sem laudo próprio publicado, este conteúdo não se apresenta como teste de laboratório.'],
    ],
  },
  'monjaro-preco-quanto-custa-como-economizar-2026': {
    title: 'Mounjaro: Preço no Brasil, Doses e Como Consultar o Valor Máximo',
    description: 'Saiba como consultar o preço máximo de Mounjaro na CMED, por que o valor varia por dose e estado e quais cuidados tomar com ofertas irregulares.',
    source: 'mounjaro',
    replace: true,
    answer: 'O preço de Mounjaro varia por apresentação, alíquota de ICMS, farmácia e descontos. Em vez de publicar um valor que envelhece rápido, consulte a lista mensal da CMED para ver o Preço Máximo ao Consumidor e compare o preço final em estabelecimentos autorizados.',
    evidence: 'A Anvisa aprovou a tirzepatida para diabetes tipo 2 e, posteriormente, para controle crônico do peso em adultos que atendem aos critérios da bula. É medicamento sujeito a prescrição, não suplemento. A decisão de iniciar, ajustar ou interromper o tratamento deve ser feita com profissional habilitado.',
    steps: [
      ['Apresentação', 'Confirme dose e quantidade da embalagem', 'Preços de apresentações diferentes não são comparáveis'],
      ['Teto oficial', 'Pesquise o PMC na lista atual da CMED', 'Evita usar tabela antiga ou preço promocional como referência'],
      ['Procedência', 'Compre em farmácia autorizada e guarde a nota', 'Reduz risco de falsificação e produto irregular'],
    ],
    mistakes: ['pesquisar pela grafia incorreta “Monjaro” e cair em oferta suspeita', 'comparar preços de doses diferentes', 'comprar produto importado ou manipulado sem verificar regularidade', 'ajustar dose para economizar sem orientação médica'],
    caution: 'Ofertas muito abaixo do mercado, venda sem receita, embalagem sem rastreabilidade e promessas de resultado garantido são sinais de risco. A Anvisa publicou apreensões de produtos irregulares e lotes falsificados. Nunca compartilhe caneta nem compre medicamento por canal informal.',
    extra: [{
      heading: 'Como consultar a CMED sem comparar valores errados',
      texts: [
        'Abra a lista mais recente de preços de medicamentos publicada pela Anvisa e pesquise pelo nome Mounjaro ou pelo princípio ativo tirzepatida. Confira a apresentação completa, porque concentração, volume e quantidade de unidades precisam coincidir com a receita. O PMC é um teto, não uma promessa de preço praticado por toda farmácia.',
        'Escolha a coluna de ICMS correspondente ao seu estado quando a planilha exigir essa distinção. Em seguida, compare o preço final em farmácias autorizadas, incluindo entrega e regras do desconto. Não compare uma caneta, frasco ou dose diferente apenas porque o nome comercial é igual.',
      ],
    }, {
      heading: 'Economia segura não é reduzir ou fracionar dose por conta própria',
      texts: [
        'A titulação existe para equilibrar resposta e tolerância. Alterar intervalo, reutilizar dispositivo, transferir conteúdo ou comprar apresentação diferente sem orientação pode causar erro de dose e perda de segurança. Se o custo inviabiliza o tratamento, a conversa correta é com o prescritor sobre alternativas aprovadas e continuidade do cuidado.',
        'Também vale confirmar se um programa de desconto é realmente operado pelo fabricante ou por rede autorizada. Nunca envie receita, documento ou pagamento por link recebido de perfil não verificado. Golpes exploram procura alta e falta temporária de estoque.',
        'Antes de sair da farmácia, confira nome, concentração, quantidade, validade, lote e condições de conservação. O preço mais baixo perde qualquer vantagem se a apresentação não corresponde à receita ou se a procedência não pode ser demonstrada. Em caso de suspeita de falsificação, não utilize o produto e comunique a farmácia, o fabricante e a vigilância sanitária.',
      ],
      items: [
        'Receita e apresentação conferidas antes da compra.',
        'Preço máximo consultado na lista mensal da CMED.',
        'Farmácia autorizada, nota fiscal e embalagem íntegra.',
        'Lote verificado contra alertas recentes da Anvisa.',
        'Nenhuma alteração de dose motivada apenas por preço.',
      ],
    }],
    faqs: [
      ['Onde vejo o preço oficial?', 'Na lista mensal da CMED/Anvisa, procurando a apresentação e o PMC aplicável ao seu estado.'],
      ['Por que o preço muda?', 'Dose, apresentação, impostos estaduais, estoque e descontos da farmácia alteram o valor final.'],
      ['Mounjaro é suplemento?', 'Não. É medicamento à base de tirzepatida e exige prescrição e acompanhamento.'],
      ['Como evitar falsificação?', 'Compre em farmácia autorizada, confira embalagem e lote, guarde a nota e acompanhe alertas da Anvisa.'],
    ],
  },
}

function buildBlocks(config) {
  return [
    { tipo: 'heading', nivel: 2, texto: MARKER },
    { tipo: 'alerta', variante: 'info', texto: `**Resposta curta:** ${config.answer}` },
    { tipo: 'heading', nivel: 2, texto: 'O que a evidência permite afirmar' },
    { tipo: 'paragrafo', texto: config.evidence },
    { tipo: 'paragrafo', texto: 'A leitura correta é separar três coisas: o que foi observado em estudos, o que aparece no rótulo do produto e o que acontece com você na prática. Quando essas três camadas não apontam na mesma direção, vale ser conservador e evitar aumentar dose, custo ou expectativa.' },
    { tipo: 'heading', nivel: 2, texto: 'Como decidir na prática' },
    { tipo: 'tabela', colunas: ['Etapa', 'O que fazer', 'Por que importa'], linhas: config.steps },
    { tipo: 'heading', nivel: 2, texto: 'Erros que distorcem a decisão' },
    { tipo: 'lista', itens: config.mistakes },
    ...(config.extra || []).flatMap((section) => [
      { tipo: 'heading', nivel: 2, texto: section.heading },
      ...section.texts.map((texto) => ({ tipo: 'paragrafo', texto })),
      ...(section.items ? [{ tipo: 'lista', itens: section.items }] : []),
    ]),
    ...(config.extra ? [
      { tipo: 'heading', nivel: 2, texto: 'Como registrar e revisar sua decisão' },
      { tipo: 'paragrafo', texto: 'Anote a fonte consultada, a data, o rótulo ou apresentação, o preço final e o motivo da escolha. Guarde uma captura ou foto quando a comparação depender de informação que pode mudar. Depois de usar o produto ou a estratégia por um período adequado, registre tolerância, adesão, custo e qualquer resultado observável. Esse histórico permite revisar a decisão sem depender de memória ou de uma propaganda nova.' },
      { tipo: 'paragrafo', texto: 'Reavalie quando houver mudança de fórmula, dose, preço, objetivo, condição de saúde ou orientação profissional. Se a conclusão não puder ser explicada com dados simples e fonte verificável, trate-a como hipótese. O melhor conteúdo de compra ou planejamento não encerra a decisão para sempre: ele deixa claro o que conferir novamente.' },
      { tipo: 'lista', itens: ['fonte e data da consulta', 'produto, dose ou estratégia comparada', 'custo total e frequência de uso', 'resultado esperado e forma de acompanhar', 'data definida para reavaliação'] },
    ] : []),
    { tipo: 'heading', nivel: 2, texto: 'Limites e segurança' },
    { tipo: 'paragrafo', texto: config.caution },
    { tipo: 'paragrafo', texto: 'Use as referências ao final para conferir a fonte original e a data. Conteúdo educativo não substitui diagnóstico, prescrição, leitura da bula nem avaliação individual. Se houver sintoma persistente, reação adversa, doença, gestação ou uso contínuo de medicamentos, procure orientação profissional.' },
  ]
}

function buildFaq(config) {
  return {
    tipo: 'faq',
    perguntas: config.faqs.map(([pergunta, resposta]) => ({ pergunta, resposta })),
  }
}

function collectText(value) {
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.flatMap(collectText)
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectText)
  return []
}

function updateReadingTime(article) {
  const words = collectText(article.conteudo).join(' ').trim().split(/\s+/).filter(Boolean).length
  article.tempo_leitura = `${Math.max(3, Math.ceil(words / 180))} min`
  return words
}

for (const article of articles) {
  if (typeof article.revisor === 'string' && /equipe editorial|suplementa j[áa]/i.test(article.revisor)) {
    delete article.revisor
  }

  const config = configs[article.slug]
  if (!config) continue

  article.titulo = config.title
  article.descricao = config.description
  article.atualizado_em = UPDATED_AT
  article.prioridade_seo = true
  article.hub_slug = config.hub || article.hub_slug
  article.monetizavel = Boolean(config.monetizable)
  article.fontes = sources[config.source]

  if (config.replace) {
    article.conteudo = [...buildBlocks(config), buildFaq(config)]
  } else {
    const previousMarkerIndex = article.conteudo.findIndex(
      (block) => block.tipo === 'heading' && block.texto === MARKER,
    )

    if (previousMarkerIndex !== -1) {
      const nextBoundaryIndex = article.conteudo.findIndex(
        (block, index) => index > previousMarkerIndex && (block.tipo === 'cta' || block.tipo === 'faq'),
      )
      article.conteudo.splice(
        previousMarkerIndex,
        (nextBoundaryIndex === -1 ? article.conteudo.length : nextBoundaryIndex) - previousMarkerIndex,
      )
    }

    const insertIndex = article.conteudo.findIndex((block) => block.tipo === 'cta' || block.tipo === 'faq')
    article.conteudo.splice(insertIndex === -1 ? article.conteudo.length : insertIndex, 0, ...buildBlocks(config))

    const existingFaq = article.conteudo.find((block) => block.tipo === 'faq')
    if (existingFaq) {
      const known = new Set(existingFaq.perguntas.map((item) => item.pergunta))
      existingFaq.perguntas.push(...buildFaq(config).perguntas.filter((item) => !known.has(item.pergunta)))
    } else {
      article.conteudo.push(buildFaq(config))
    }
  }

  updateReadingTime(article)
}

fs.writeFileSync(articlesPath, `${JSON.stringify(articles, null, 2)}\n`, 'utf8')

const updated = articles
  .filter((article) => configs[article.slug])
  .map((article) => ({
    slug: article.slug,
    words: updateReadingTime(article),
    sources: article.fontes.length,
  }))

console.log(`Páginas prioritárias atualizadas: ${updated.length}`)
console.table(updated)
