export interface Artigo {
  slug: string
  titulo: string
  descricao: string
  autor: string
  data: string
  categoria: string
  tags: string[]
  tempo_leitura: string
  imagem: string
  objetivos?: string[]
  conteudo: BlocoConteudo[]
  relacionados?: string[]  // Slugs de artigos relacionados
}

export type BlocoConteudo =
  | { tipo: 'paragrafo'; texto: string }
  | { tipo: 'heading'; nivel: 2 | 3; texto: string }
  | { tipo: 'lista'; itens: string[]; ordenada?: boolean }
  | { tipo: 'tabela'; colunas?: string[]; cabecalho?: string[]; linhas: string[][] }
  | { tipo: 'alerta'; variante: 'info' | 'warning' | 'danger'; texto: string }
  | { tipo: 'cta'; texto: string; botao?: string; textoBotao?: string; descricao?: string; link: string; linkAfiliado?: string }
  | { tipo: 'faq'; perguntas: Array<{ pergunta: string; resposta: string }> }
