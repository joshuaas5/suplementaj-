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
}

export type BlocoConteudo =
  | { tipo: 'paragrafo'; texto: string }
  | { tipo: 'heading'; nivel: 2 | 3; texto: string }
  | { tipo: 'lista'; itens: string[] }
  | { tipo: 'tabela'; colunas: string[]; linhas: string[][] }
  | { tipo: 'alerta'; variante: 'info' | 'warning' | 'danger'; texto: string }
  | { tipo: 'cta'; texto: string; botao?: string; textoBotao?: string; descricao?: string; link: string }
