import fs from 'node:fs'
import path from 'node:path'

const artigosPath = path.join(process.cwd(), 'data', 'artigos.json')
const artigos = JSON.parse(fs.readFileSync(artigosPath, 'utf8'))

const faqsBySlug = {
  'guia-completo-creatina-2026': [
    {
      pergunta: 'Qual é a dose ideal de creatina por dia?',
      resposta: 'Para a maioria dos adultos, 3 a 5 gramas de creatina monohidratada por dia é a dose mais usada em estudos e na prática. Pessoas mais pesadas podem usar a referência de cerca de 0,03 g por kg de peso corporal.',
    },
    {
      pergunta: 'Precisa fazer fase de carga de creatina?',
      resposta: 'Não é obrigatório. A fase de carga pode saturar os estoques mais rápido, mas tomar 3 a 5 g por dia continuamente também funciona; apenas demora algumas semanas a mais para atingir saturação.',
    },
    {
      pergunta: 'Creatina antes ou depois do treino faz diferença?',
      resposta: 'O mais importante é tomar todos os dias. O horário tem menos impacto do que a consistência, porque a creatina funciona por saturação muscular ao longo do tempo.',
    },
  ],
  'whey-isolado-vs-concentrado': [
    {
      pergunta: 'Whey isolado é melhor que concentrado?',
      resposta: 'Whey isolado tem mais proteína por dose e menos lactose, mas costuma ser mais caro. Para quem tolera lactose e quer custo-benefício, o concentrado geralmente atende bem.',
    },
    {
      pergunta: 'Quem deve escolher whey isolado?',
      resposta: 'O isolado faz mais sentido para pessoas com desconforto com lactose, dieta muito restrita em calorias ou necessidade de maior teor proteico com menos carboidrato e gordura.',
    },
    {
      pergunta: 'Whey concentrado engorda?',
      resposta: 'Whey não engorda sozinho. O ganho de gordura acontece quando o total de calorias do dia fica acima do gasto, independentemente de a proteína vir de whey, carnes, ovos ou outros alimentos.',
    },
  ],
  'como-dividir-macros-cutting-bulking-manutencao': [
    {
      pergunta: 'Qual macro é mais importante para emagrecer?',
      resposta: 'O déficit calórico vem primeiro, mas manter proteína alta ajuda a preservar massa muscular e controlar fome. Depois entram carboidratos e gorduras conforme treino, preferência e aderência.',
    },
    {
      pergunta: 'Quanto de proteína usar em cutting?',
      resposta: 'Uma faixa comum é 1,6 a 2,4 g de proteína por kg de peso corporal por dia, ajustando conforme percentual de gordura, treino e tolerância alimentar.',
    },
    {
      pergunta: 'Preciso mudar macros em bulking?',
      resposta: 'Sim. Em bulking normalmente há superávit calórico, carboidratos mais altos para treino e proteína suficiente, evitando exagerar no superávit para reduzir ganho de gordura.',
    },
  ],
  'como-calcular-gasto-calorico-tmb-tdee': [
    {
      pergunta: 'Qual a diferença entre TMB e TDEE?',
      resposta: 'TMB é o gasto em repouso. TDEE é o gasto total diário, incluindo atividade física, rotina, treino e digestão. Para ajustar dieta, o TDEE costuma ser mais útil.',
    },
    {
      pergunta: 'Calculadora de calorias é exata?',
      resposta: 'Não. Ela entrega uma estimativa inicial. O ideal é acompanhar peso, medidas e energia por duas a três semanas e ajustar calorias conforme a resposta real do corpo.',
    },
    {
      pergunta: 'Quanto cortar para emagrecer?',
      resposta: 'Um déficit de 300 a 500 kcal por dia é um ponto de partida comum. Déficits agressivos podem piorar fome, treino e preservação de massa muscular.',
    },
  ],
  'monjaro-preco-quanto-custa-como-economizar-2026': [
    {
      pergunta: 'Monjaro precisa de receita médica?',
      resposta: 'Sim. Medicamentos como tirzepatida devem ser usados somente com prescrição e acompanhamento médico, especialmente por envolverem metabolismo, glicemia e possíveis efeitos adversos.',
    },
    {
      pergunta: 'Por que o preço do Monjaro varia tanto?',
      resposta: 'O preço pode variar por dose, disponibilidade, farmácia, região, descontos e programas comerciais. Sempre confirme em fontes oficiais e farmácias confiáveis.',
    },
    {
      pergunta: 'Dá para economizar com Monjaro com segurança?',
      resposta: 'A forma segura é comparar farmácias confiáveis, verificar programas oficiais e evitar produtos sem procedência. Não compre medicamento de origem duvidosa.',
    },
  ],
  'biotina-cabelo-unhas-dose-funciona': [
    {
      pergunta: 'Biotina faz cabelo crescer?',
      resposta: 'Biotina pode ajudar quando existe deficiência, mas não é garantia de crescimento capilar em pessoas com níveis adequados. Queda de cabelo pode ter várias causas.',
    },
    {
      pergunta: 'Qual dose de biotina é comum?',
      resposta: 'Suplementos costumam variar bastante, mas doses altas não significam melhor resultado. O ideal é avaliar necessidade real, especialmente se houver queda persistente.',
    },
    {
      pergunta: 'Biotina interfere em exames?',
      resposta: 'Sim. Biotina pode interferir em alguns exames laboratoriais, incluindo marcadores hormonais e cardíacos. Avise o laboratório e seu médico se estiver usando.',
    },
  ],
  'diferenca-proteinas-whey-caseina-albumina': [
    {
      pergunta: 'Caseína é melhor que whey?',
      resposta: 'Não necessariamente. Whey tem digestão mais rápida e caseína mais lenta. A melhor escolha depende do objetivo, rotina, tolerância e quantidade total de proteína no dia.',
    },
    {
      pergunta: 'Albumina ainda vale a pena?',
      resposta: 'Albumina pode ser uma opção de proteína, mas sabor, digestibilidade e praticidade variam. Muitas pessoas preferem whey pela conveniência e tolerância.',
    },
    {
      pergunta: 'Proteína de soja é boa para veganos?',
      resposta: 'Sim, proteína isolada de soja pode ser uma opção útil para veganos, desde que encaixe na meta diária de proteína e seja bem tolerada.',
    },
  ],
  'magnesio-ansiedade-sono-tipos': [
    {
      pergunta: 'Qual magnésio é melhor para sono?',
      resposta: 'Magnésio glicinato é uma forma comum para quem busca tolerância digestiva e relaxamento. A resposta individual varia e sono ruim pode ter várias causas.',
    },
    {
      pergunta: 'Magnésio ajuda ansiedade?',
      resposta: 'Pode ajudar algumas pessoas, principalmente quando há ingestão baixa ou deficiência. Ansiedade persistente precisa de avaliação profissional.',
    },
    {
      pergunta: 'Magnésio dá diarreia?',
      resposta: 'Algumas formas, como citrato ou óxido, podem soltar o intestino em doses maiores. Reduzir dose ou trocar a forma pode melhorar a tolerância.',
    },
  ],
  'melatonina-sono-insonia-dose-ideal': [
    {
      pergunta: 'Qual dose de melatonina para dormir?',
      resposta: 'Muitas pessoas começam com doses baixas, como 0,5 a 1 mg, e ajustam conforme orientação. Doses maiores nem sempre funcionam melhor e podem aumentar sonolência residual.',
    },
    {
      pergunta: 'Melatonina pode ser usada todos os dias?',
      resposta: 'Depende do caso. Uso contínuo deve ser discutido com profissional de saúde, especialmente em crianças, gestantes, pessoas com doenças crônicas ou uso de medicamentos.',
    },
    {
      pergunta: 'Melatonina trata insônia?',
      resposta: 'Melatonina pode ajudar em ritmo circadiano e início do sono, mas não resolve todas as causas de insônia. Higiene do sono e avaliação das causas são importantes.',
    },
  ],
}

let changed = 0

for (const artigo of artigos) {
  const perguntas = faqsBySlug[artigo.slug]
  if (!perguntas) continue

  const existing = artigo.conteudo.find((bloco) => bloco.tipo === 'faq')
  if (existing) {
    existing.perguntas = perguntas
  } else {
    artigo.conteudo.push({ tipo: 'faq', perguntas })
  }
  changed += 1
}

fs.writeFileSync(artigosPath, `${JSON.stringify(artigos, null, 2)}\n`, 'utf8')
console.log(`FAQ atualizado em ${changed} artigos prioritários.`)
