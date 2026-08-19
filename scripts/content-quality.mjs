import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const articlesPath = path.join(rootDir, 'data', 'artigos.json')
const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf8'))

function collectText(value) {
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.flatMap(collectText)
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectText)
  return []
}

function wordCount(article) {
  return collectText(article.conteudo ?? []).join(' ').trim().split(/\s+/).filter(Boolean).length
}

const errors = []
const seenSlugs = new Set()
const warnings = []

for (const article of articles) {
  if (!article.slug || !article.titulo || !article.descricao) {
    errors.push(`${article.slug || '(sem slug)'}: slug, título e descrição são obrigatórios`)
  }
  if (seenSlugs.has(article.slug)) errors.push(`${article.slug}: slug duplicado`)
  seenSlugs.add(article.slug)

  const words = wordCount(article)
  if (words < 800) warnings.push(`${article.slug}: ${words} palavras (abaixo da meta editorial de 800)`)
  if (!Array.isArray(article.fontes) || article.fontes.length === 0) warnings.push(`${article.slug}: sem fontes declaradas`)
  if (!article.revisor) warnings.push(`${article.slug}: sem revisor identificado`)

  for (const source of article.fontes ?? []) {
    try {
      const url = new URL(source.url)
      if (!['http:', 'https:'].includes(url.protocol)) throw new Error('protocolo inválido')
    } catch {
      errors.push(`${article.slug}: fonte com URL inválida (${source.url})`)
    }
  }
}

const report = [
  '# Controle de qualidade editorial',
  '',
  `Gerado em ${new Date().toISOString().slice(0, 10)}.`,
  '',
  `- Artigos avaliados: ${articles.length}`,
  `- Slugs únicos: ${seenSlugs.size}`,
  `- Erros bloqueantes: ${errors.length}`,
  `- Alertas para revisão: ${warnings.length}`,
  '',
  '## Como usar',
  '',
  'Este relatório não inventa autores, revisores ou referências. Alertas devem ser resolvidos no dado editorial antes de promover a página como conteúdo de saúde. O build só é bloqueado por estrutura inválida, slug duplicado ou fonte com URL inválida.',
  '',
  '## Erros bloqueantes',
  '',
  errors.length ? errors.map((item) => `- ${item}`).join('\n') : '- Nenhum.',
  '',
  '## Primeiros alertas',
  '',
  warnings.length ? warnings.slice(0, 120).map((item) => `- ${item}`).join('\n') : '- Nenhum.',
  '',
].join('\n')

const docsDir = path.join(rootDir, 'docs')
fs.mkdirSync(docsDir, { recursive: true })
fs.writeFileSync(path.join(docsDir, 'CONTENT_QUALITY_REPORT.md'), report, 'utf8')

console.log(`Controle editorial: ${articles.length} artigos; ${errors.length} erros; ${warnings.length} alertas.`)
if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
}
