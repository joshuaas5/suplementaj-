import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'

const rootDir = process.cwd()
const desktopDir = path.join(os.homedir(), 'Desktop')
const downloadsDir = path.join(os.homedir(), 'Downloads')

function readText(filePath) {
  const buffer = fs.readFileSync(filePath)
  try {
    return new TextDecoder('utf-8', { fatal: true }).decode(buffer).replace(/^\uFEFF/, '')
  } catch {
    return new TextDecoder('windows-1252').decode(buffer).replace(/^\uFEFF/, '')
  }
}

function parseCsv(text) {
  const rows = []
  let row = []
  let cell = ''
  let quoted = false

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    const next = text[i + 1]

    if (quoted) {
      if (char === '"' && next === '"') {
        cell += '"'
        i += 1
      } else if (char === '"') {
        quoted = false
      } else {
        cell += char
      }
      continue
    }

    if (char === '"') {
      quoted = true
    } else if (char === ',') {
      row.push(cell)
      cell = ''
    } else if (char === '\n') {
      row.push(cell.replace(/\r$/, ''))
      rows.push(row)
      row = []
      cell = ''
    } else {
      cell += char
    }
  }

  if (cell.length || row.length) {
    row.push(cell.replace(/\r$/, ''))
    rows.push(row)
  }

  const [headers, ...data] = rows.filter((item) => item.some((value) => value !== ''))
  if (!headers) return []
  return data.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ''])))
}

function normalizeHeader(value) {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}

function getValue(row, wanted) {
  const target = normalizeHeader(wanted)
  const key = Object.keys(row).find((header) => normalizeHeader(header) === target)
  return key ? row[key] : ''
}

function toNumber(value) {
  if (typeof value !== 'string') return Number(value) || 0
  const clean = value.trim().replace('%', '').replace(',', '.')
  return Number(clean) || 0
}

function toPercent(value) {
  return toNumber(value) / 100
}

function findCsvByFirstHeader(baseDir, firstHeader) {
  if (!fs.existsSync(baseDir)) return null
  const target = normalizeHeader(firstHeader)
  const files = fs.readdirSync(baseDir)
    .filter((name) => name.toLowerCase().endsWith('.csv'))
    .map((name) => path.join(baseDir, name))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)

  for (const filePath of files) {
    const firstLine = readText(filePath).split(/\r?\n/, 1)[0] ?? ''
    const firstColumn = firstLine.split(',', 1)[0] ?? ''
    if (normalizeHeader(firstColumn) === target) return filePath
  }

  return null
}

function findCoverageDir() {
  if (!fs.existsSync(downloadsDir)) return null
  return fs.readdirSync(downloadsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.includes('suplementaja.com-Coverage'))
    .map((entry) => path.join(downloadsDir, entry.name))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs)[0] ?? null
}

function findCriticalCoverageCsv(coverageDir) {
  if (!coverageDir || !fs.existsSync(coverageDir)) return null
  const files = fs.readdirSync(coverageDir)
    .filter((name) => name.toLowerCase().endsWith('.csv'))
    .map((name) => path.join(coverageDir, name))

  return files
    .filter((filePath) => normalizeHeader(path.basename(filePath)).includes('problemas criticos'))
    .find((filePath) => parseCsv(readText(filePath)).length > 0) ?? null
}

function slugFromUrl(url) {
  try {
    const parsed = new URL(url)
    const parts = parsed.pathname.split('/').filter(Boolean)
    return parts.at(-1) ?? ''
  } catch {
    return ''
  }
}

function pathFromUrl(url) {
  try {
    const parsed = new URL(url)
    return parsed.pathname.replace(/\/$/, '') || '/'
  } catch {
    return url
  }
}

function classifyPage(row, slugs, redirects) {
  const url = getValue(row, 'Páginas principais')
  const clicks = toNumber(getValue(row, 'Cliques'))
  const impressions = toNumber(getValue(row, 'Impressões'))
  const ctr = toPercent(getValue(row, 'CTR'))
  const position = toNumber(getValue(row, 'Posição'))
  const pathname = pathFromUrl(url)
  const slug = slugFromUrl(url)
  const isBlog = pathname.startsWith('/blog/')
  const exists = isBlog ? slugs.has(slug) : true
  const redirected = redirects.has(pathname)

  let score = 0
  const reasons = []

  if (impressions >= 1000) score += 35
  else if (impressions >= 300) score += 25
  else if (impressions >= 100) score += 15

  if (position > 0 && position <= 8) score += 30
  else if (position <= 15) score += 20
  else if (position <= 30) score += 10

  if (impressions >= 100 && ctr < 0.005) {
    score += 25
    reasons.push('CTR muito baixo para o volume de impressões')
  }

  if (isBlog && !exists) {
    score += 40
    reasons.push('URL de artigo aparece no GSC mas não existe no JSON')
  }

  if (redirected) {
    score += 20
    reasons.push('URL de artigo aparece no GSC e também está em redirect')
  }

  if (!reasons.length) {
    if (position <= 15 && impressions >= 100) reasons.push('Otimizar título/meta e links internos')
    else if (impressions >= 100) reasons.push('Melhorar conteúdo e intenção de busca')
    else reasons.push('Monitorar')
  }

  return { url, pathname, slug, clicks, impressions, ctr, position, score, reasons, exists, redirected }
}

function readRedirectSources() {
  const configPath = path.join(rootDir, 'next.config.mjs')
  if (!fs.existsSync(configPath)) return new Set()
  const config = readText(configPath)
  const sources = [...config.matchAll(/source:\s*'([^']+)'/g)].map((match) => match[1])
  return new Set(sources)
}

function markdownTable(rows, columns) {
  const header = `| ${columns.map((column) => column.label).join(' | ')} |`
  const sep = `| ${columns.map(() => '---').join(' | ')} |`
  const body = rows.map((row) => `| ${columns.map((column) => String(column.value(row)).replace(/\|/g, '\\|')).join(' | ')} |`)
  return [header, sep, ...body].join('\n')
}

function main() {
  const pagesPath = findCsvByFirstHeader(desktopDir, 'Páginas principais')
  const queriesPath = findCsvByFirstHeader(desktopDir, 'Top consultas')
  const graphPath = findCsvByFirstHeader(desktopDir, 'Data')
  const coverageDir = findCoverageDir()
  const criticalPath = findCriticalCoverageCsv(coverageDir)

  if (!pagesPath || !queriesPath || !graphPath) {
    throw new Error('CSV do Search Console não encontrado no Desktop. Exporte Páginas, Consultas e Gráfico antes de rodar.')
  }

  const articlesPath = path.join(rootDir, 'data', 'artigos.json')
  const articles = JSON.parse(readText(articlesPath))
  const slugs = new Set(articles.map((article) => article.slug))
  const redirects = readRedirectSources()

  const pages = parseCsv(readText(pagesPath))
  const queries = parseCsv(readText(queriesPath))
  const graph = parseCsv(readText(graphPath))
  const critical = criticalPath ? parseCsv(readText(criticalPath)) : []

  const monthly = new Map()
  for (const row of graph) {
    const date = getValue(row, 'Data')
    if (!date) continue
    const month = date.slice(0, 7)
    const item = monthly.get(month) ?? { month, clicks: 0, impressions: 0, days: 0 }
    item.clicks += toNumber(getValue(row, 'Cliques'))
    item.impressions += toNumber(getValue(row, 'Impressões'))
    item.days += 1
    monthly.set(month, item)
  }

  const pageActions = pages
    .map((row) => classifyPage(row, slugs, redirects))
    .sort((a, b) => b.score - a.score || b.impressions - a.impressions)

  const queryActions = queries
    .map((row) => ({
      query: getValue(row, 'Top consultas'),
      clicks: toNumber(getValue(row, 'Cliques')),
      impressions: toNumber(getValue(row, 'Impressões')),
      ctr: toPercent(getValue(row, 'CTR')),
      position: toNumber(getValue(row, 'Posição')),
    }))
    .filter((row) => row.impressions >= 10 && row.clicks <= 1 && row.position > 0 && row.position <= 20)
    .sort((a, b) => a.position - b.position || b.impressions - a.impressions)

  const missingArticleUrls = pageActions.filter((row) => row.pathname.startsWith('/blog/') && !row.exists)
  const redirectedArticleUrls = pageActions.filter((row) => row.redirected)
  const ctrOpportunities = pageActions.filter((row) => row.impressions >= 100 && row.position <= 15 && row.ctr < 0.01)

  const report = [
    '# Plano SEO Automatizado - Suplementa Já',
    '',
    `Gerado em ${new Date().toISOString().slice(0, 10)}.`,
    '',
    '## Leitura executiva',
    '',
    `- Artigos no JSON: ${articles.length}`,
    `- Slugs únicos: ${slugs.size}`,
    `- URLs de artigo vistas no GSC mas ausentes no JSON: ${missingArticleUrls.length}`,
    `- URLs do GSC que ainda estão em redirect: ${redirectedArticleUrls.length}`,
    `- Oportunidades fortes de CTR/posição: ${ctrOpportunities.length}`,
    '',
    '## Tendência mensal',
    '',
    markdownTable([...monthly.values()], [
      { label: 'Mês', value: (row) => row.month },
      { label: 'Cliques', value: (row) => row.clicks },
      { label: 'Impressões', value: (row) => row.impressions },
      { label: 'CTR', value: (row) => row.impressions ? `${((row.clicks / row.impressions) * 100).toFixed(2)}%` : '0%' },
    ]),
    '',
    '## Problemas de indexação do export',
    '',
    critical.length ? markdownTable(critical, [
      { label: 'Motivo', value: (row) => getValue(row, 'Motivo') },
      { label: 'Fonte', value: (row) => getValue(row, 'Fonte') },
      { label: 'Validação', value: (row) => getValue(row, 'Validação') },
      { label: 'Páginas', value: (row) => getValue(row, 'Páginas') },
    ]) : 'Sem CSV de cobertura crítica encontrado.',
    '',
    '## Prioridade por página',
    '',
    markdownTable(pageActions.slice(0, 25), [
      { label: 'Prioridade', value: (row) => row.score },
      { label: 'URL', value: (row) => row.url },
      { label: 'Cliques', value: (row) => row.clicks },
      { label: 'Imp.', value: (row) => row.impressions },
      { label: 'CTR', value: (row) => `${(row.ctr * 100).toFixed(2)}%` },
      { label: 'Pos.', value: (row) => row.position.toFixed(2) },
      { label: 'Ação', value: (row) => row.reasons.join('; ') },
    ]),
    '',
    '## Consultas fáceis de atacar',
    '',
    markdownTable(queryActions.slice(0, 30), [
      { label: 'Consulta', value: (row) => row.query },
      { label: 'Cliques', value: (row) => row.clicks },
      { label: 'Imp.', value: (row) => row.impressions },
      { label: 'CTR', value: (row) => `${(row.ctr * 100).toFixed(2)}%` },
      { label: 'Pos.', value: (row) => row.position.toFixed(2) },
    ]),
    '',
    '## Rotina sem trabalho manual pesado',
    '',
    '1. Exportar do Search Console apenas os CSVs de Performance e Indexação.',
    '2. Rodar `npm run seo:audit`.',
    '3. Trabalhar só nas 5 primeiras URLs da tabela de prioridade.',
    '4. Repetir semanalmente; se a quantidade de URLs ausentes/redirectadas subir, corrigir técnica antes de escrever conteúdo novo.',
    '',
  ].join('\n')

  const docsDir = path.join(rootDir, 'docs')
  fs.mkdirSync(docsDir, { recursive: true })
  fs.writeFileSync(path.join(docsDir, 'SEO_ACTION_PLAN.md'), report, 'utf8')
  fs.writeFileSync(path.join(docsDir, 'seo-actions.json'), JSON.stringify({ pageActions, queryActions, critical }, null, 2), 'utf8')

  console.log(`Relatório gerado: ${path.join(docsDir, 'SEO_ACTION_PLAN.md')}`)
  console.log(`Dados gerados: ${path.join(docsDir, 'seo-actions.json')}`)
  console.log(`Top prioridade: ${pageActions[0]?.url ?? 'nenhuma URL encontrada'}`)
}

main()
