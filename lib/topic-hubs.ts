import type { Artigo } from '@/types/artigo'

export interface TopicHub {
  slug: string
  titulo: string
  subtitulo: string
  descricao: string
  keywords: string[]
  pilares: string[]
  calculatorHref?: string
  primarySlugs: string[]
  commercialSlugs: string[]
}

export const TOPIC_HUBS: TopicHub[] = [
  {
    slug: 'creatina',
    titulo: 'Guia de Creatina',
    subtitulo: 'Dose, horário, segurança e compra sem erro',
    descricao:
      'Comece pelos artigos centrais sobre creatina monohidratada, dose diária, uso com whey e critérios de compra custo-benefício.',
    keywords: ['creatina', 'creapure'],
    pilares: [
      'O que é creatina monohidratada e para quem faz sentido',
      'Como tomar todos os dias sem depender do treino',
      'Quando comparar preço, pureza, laudo e custo por dose',
    ],
    calculatorHref: '/calculadoras/creatina',
    primarySlugs: [
      'creatina-monohidratada-o-que-e',
      'creatina-beneficios-efeitos-colaterais-dosagem-2026',
      'creatina-melhor-horario-para-tomar',
      'creatina-e-whey-juntos',
      'creatina-guia-completo-ganho-muscular',
      'creatina-para-idosos',
    ],
    commercialSlugs: ['melhor-creatina-custo-beneficio-2026', 'melhor-marca-creatina-brasil'],
  },
  {
    slug: 'whey-proteina',
    titulo: 'Guia de Whey e Proteínas',
    subtitulo: 'Isolado, concentrado, albumina e proteína por peso',
    descricao:
      'Organize a escolha entre whey concentrado, isolado, sem lactose, albumina e metas de proteína diária.',
    keywords: ['whey', 'proteína', 'proteina', 'albumina'],
    pilares: [
      'Quando o whey concentrado resolve e quando o isolado vale pagar mais',
      'Como bater proteína diária usando comida e suplemento',
      'Como escolher produto sem cair só em marketing de rótulo',
    ],
    calculatorHref: '/calculadoras/proteina',
    primarySlugs: [
      'whey-isolado-para-que-serve',
      'whey-concentrado-para-que-serve',
      'whey-isolado-ou-hidrolisado',
      'whey-para-emagrecer-como-usar',
      'whey-para-ganhar-massa-como-usar',
      'calcular-proteina-por-peso',
    ],
    commercialSlugs: [
      'melhor-whey-custo-beneficio-2026',
      'guia-whey-protein-2026',
      'melhores-marcas-whey-protein-2026',
    ],
  },
  {
    slug: 'calorias-macros',
    titulo: 'Guia de Calorias, TDEE e Macros',
    subtitulo: 'Calcule déficit, superávit, proteína, carboidrato e gordura',
    descricao:
      'Use este caminho para entender gasto calórico, déficit, bulking, cutting e divisão de macros sem depender de chute.',
    keywords: ['caloria', 'calorias', 'macro', 'macros', 'tdee', 'mifflin', 'cutting', 'bulking'],
    pilares: [
      'Calcular TMB e TDEE antes de mexer nos macros',
      'Ajustar calorias por objetivo e resposta do peso',
      'Distribuir proteína, carboidrato e gordura com margem prática',
    ],
    calculatorHref: '/calculadoras/calorias',
    primarySlugs: [
      'tdee-o-que-e-como-usar',
      'mifflin-st-jeor-formula',
      'formula-mifflin-st-jeor-homem',
      'contador-de-calorias-online-gratis',
      'calorias-para-emagrecer-como-calcular',
      'macros-cutting-como-calcular',
    ],
    commercialSlugs: ['calculadora-nutricional-calorias-macros', 'macros-para-definicao-muscular'],
  },
  {
    slug: 'vitaminas-minerais',
    titulo: 'Guia de Vitaminas e Minerais',
    subtitulo: 'Deficiências, exames, horários e combinações',
    descricao:
      'Conteúdos para reconhecer sinais de deficiência, entender exames e evitar suplementação no escuro.',
    keywords: ['vitamina', 'vitaminas', 'mineral', 'minerais', 'magnésio', 'magnesio', 'zinco', 'ferro', 'b12'],
    pilares: [
      'Sintomas não fecham diagnóstico: exame e contexto importam',
      'Dose e forma química mudam absorção e tolerância',
      'Alguns nutrientes competem entre si e pedem cuidado no horário',
    ],
    primarySlugs: [
      'vitamina-d-baixa-sintomas',
      'vitamina-b12-baixa-sintomas',
      'magnesio-glicinato-ou-dimalato',
      'zinco-melhor-horario-para-tomar',
      'ferro-baixo-sintomas-e-suplementacao',
      'omega-3-epa-dha-como-escolher',
    ],
    commercialSlugs: ['suplementos-baratos-que-funcionam', 'kit-suplementos-para-iniciantes'],
  },
  {
    slug: 'sono-imunidade-performance',
    titulo: 'Guia de Sono, Imunidade e Performance',
    subtitulo: 'Suplementos úteis quando o básico já está encaminhado',
    descricao:
      'Uma trilha para usar suplementos com mais critério em sono, energia, imunidade, pré-treino e recuperação.',
    keywords: ['sono', 'imunidade', 'performance', 'pré-treino', 'pre-treino', 'cafeína', 'cafeina', 'melatonina'],
    pilares: [
      'Sono, treino e alimentação vêm antes da pilha de suplementos',
      'Cafeína e melatonina dependem muito de dose e horário',
      'Imunidade melhora mais com consistência do que com megadoses',
    ],
    primarySlugs: [
      'como-dormir-melhor-suplementos',
      'pre-treino-vale-a-pena',
      'como-fortalecer-imunidade-suplementos',
      'vitamina-c-imunidade-gripes-resfriados',
      'melatonina-sono-insonia-dose-ideal',
      'cafeina-performance-dose-pre-treino',
    ],
    commercialSlugs: ['suplementos-baratos-que-funcionam', 'kit-suplementos-para-iniciantes'],
  },
]

export function getTopicHub(slug: string) {
  return TOPIC_HUBS.find((hub) => hub.slug === slug)
}

export function getHubForArticle(artigo: Artigo) {
  if (artigo.hub_slug) return getTopicHub(artigo.hub_slug)

  const searchable = `${artigo.slug} ${artigo.titulo} ${artigo.descricao} ${artigo.tags.join(' ')} ${artigo.categoria}`.toLowerCase()
  return TOPIC_HUBS.find((hub) => hub.keywords.some((keyword) => searchable.includes(keyword.toLowerCase())))
}

export function getArticlesForHub(artigos: Artigo[], hub: TopicHub) {
  const primary = hub.primarySlugs
    .map((slug) => artigos.find((artigo) => artigo.slug === slug))
    .filter((artigo): artigo is Artigo => artigo !== undefined)

  const commercial = hub.commercialSlugs
    .map((slug) => artigos.find((artigo) => artigo.slug === slug))
    .filter((artigo): artigo is Artigo => artigo !== undefined)

  const discovered = artigos.filter((artigo) => {
    if (primary.some((item) => item.slug === artigo.slug)) return false
    if (commercial.some((item) => item.slug === artigo.slug)) return false
    return getHubForArticle(artigo)?.slug === hub.slug
  })

  return {
    primary,
    commercial,
    discovered,
    all: [...primary, ...commercial, ...discovered],
  }
}
