import json

# Normalizar categorias
with open('data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# Mapeamento de normalizacao
normalizacao = {
    'sono': 'Sono',
    'emagrecimento': 'Emagrecimento', 
    'suplementos': 'Suplementos',
    'imunidade': 'Saude',
    'articulacoes': 'Articulacoes',
    'Beleza e Articulacoes': 'Beleza',
    'Proteina': 'Proteinas',
    'Saude Intestinal': 'Saude',
    'Anti-inflamatorios': 'Suplementos',
    'Superalimentos': 'Nutricao',
    'Analise': 'Suplementos',
    'Ciencia': 'Nutricao',
    'Review': 'Suplementos',
    'Calorias': 'Nutricao',
    'Economia': 'Suplementos',
}

alteracoes = 0
for artigo in artigos:
    cat = artigo.get('categoria', 'Geral')
    if cat in normalizacao:
        artigo['categoria'] = normalizacao[cat]
        alteracoes += 1

# Salvar
with open('data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print(f'Categorias normalizadas: {alteracoes} artigos atualizados')

# Mostrar categorias finais
categorias = {}
for a in artigos:
    cat = a.get('categoria', 'Geral')
    if cat not in categorias:
        categorias[cat] = 0
    categorias[cat] += 1

print('\nCATEGORIAS FINAIS:')
for cat, count in sorted(categorias.items(), key=lambda x: -x[1]):
    print(f'  {cat}: {count} artigos')
