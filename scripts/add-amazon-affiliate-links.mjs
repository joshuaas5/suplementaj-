import fs from 'node:fs'
import path from 'node:path'

const filePath = path.join(process.cwd(), 'data', 'nutrientes.json')
const nutrientes = JSON.parse(fs.readFileSync(filePath, 'utf8'))

const TAG = '105c91-20'

const affiliateLinks = {
  'vitamina-k2': [
    ['Vitamina K2 MK-7', 'vitamina k2 mk7 suplemento', 'Busca Amazon'],
    ['Vitamina D3 + K2', 'vitamina d3 k2 suplemento', 'Com D3'],
  ],
  cromo: [
    ['Picolinato de Cromo', 'picolinato de cromo suplemento', 'Busca Amazon'],
    ['Cromo Quelato', 'cromo quelato suplemento', 'Quelato'],
  ],
  'coenzima-q10': [
    ['Coenzima Q10', 'coenzima q10 suplemento', 'Busca Amazon'],
    ['Ubiquinol CoQ10', 'ubiquinol coenzima q10', 'Forma ativa'],
  ],
  'l-carnitina': [
    ['L-Carnitina', 'l carnitina suplemento', 'Busca Amazon'],
    ['Acetil L-Carnitina', 'acetil l carnitina suplemento', 'ALCAR'],
  ],
  taurina: [
    ['Taurina', 'taurina suplemento', 'Busca Amazon'],
    ['Taurina em Po', 'taurina em po suplemento', 'Em po'],
  ],
  msm: [
    ['MSM', 'msm suplemento', 'Busca Amazon'],
    ['MSM Articulacoes', 'msm articulacoes suplemento', 'Articulacoes'],
  ],
  glucosamina: [
    ['Glucosamina', 'glucosamina suplemento', 'Busca Amazon'],
    ['Glucosamina Condroitina', 'glucosamina condroitina suplemento', 'Com condroitina'],
  ],
  resveratrol: [
    ['Resveratrol', 'resveratrol suplemento', 'Busca Amazon'],
    ['Trans-Resveratrol', 'trans resveratrol suplemento', 'Trans-resveratrol'],
  ],
  quercetina: [
    ['Quercetina', 'quercetina suplemento', 'Busca Amazon'],
    ['Quercetina com Vitamina C', 'quercetina vitamina c suplemento', 'Com vitamina C'],
  ],
  nac: [
    ['NAC N-Acetilcisteina', 'nac n acetilcisteina suplemento', 'Busca Amazon'],
    ['N-Acetilcisteina', 'n acetilcisteina suplemento', 'NAC'],
  ],
  astaxantina: [
    ['Astaxantina', 'astaxantina suplemento', 'Busca Amazon'],
    ['Astaxantina Natural', 'astaxantina natural suplemento', 'Natural'],
  ],
  'luteina-zeaxantina': [
    ['Luteina e Zeaxantina', 'luteina zeaxantina suplemento', 'Busca Amazon'],
    ['Formula para Visao', 'luteina zeaxantina visao suplemento', 'Visao'],
  ],
  molibdenio: [
    ['Molibdenio', 'molibdenio suplemento', 'Busca Amazon'],
    ['Molibdenio Quelato', 'molibdenio quelato suplemento', 'Quelato'],
  ],
  manganes: [
    ['Manganes', 'manganes suplemento', 'Busca Amazon'],
    ['Manganes Quelato', 'manganes quelato suplemento', 'Quelato'],
  ],
  cobre: [
    ['Cobre', 'cobre suplemento', 'Busca Amazon'],
    ['Cobre Quelato', 'cobre quelato suplemento', 'Quelato'],
  ],
  fosforo: [
    ['Fosforo', 'fosforo suplemento', 'Busca Amazon'],
    ['Complexo Mineral com Fosforo', 'fosforo suplemento mineral', 'Mineral'],
  ],
  potassio: [
    ['Potassio', 'potassio suplemento', 'Busca Amazon'],
    ['Citrato de Potassio', 'citrato de potassio suplemento', 'Citrato'],
  ],
}

function amazonSearchUrl(query) {
  return `https://www.amazon.com.br/s?k=${encodeURIComponent(query).replace(/%20/g, '+')}&tag=${TAG}`
}

let updated = 0

for (const [slug, products] of Object.entries(affiliateLinks)) {
  const nutrient = nutrientes[slug]
  if (!nutrient) {
    console.warn(`Slug nao encontrado: ${slug}`)
    continue
  }

  if (!nutrient.afiliados) nutrient.afiliados = {}
  const current = nutrient.afiliados.amazon || []
  if (current.length > 0) continue

  nutrient.afiliados.amazon = products.map(([nome, query, badge]) => ({
    nome,
    link: amazonSearchUrl(query),
    badge,
  }))
  updated += 1
}

fs.writeFileSync(filePath, `${JSON.stringify(nutrientes, null, 2)}\n`)
console.log(`Afiliados Amazon adicionados em ${updated} nutrientes.`)
