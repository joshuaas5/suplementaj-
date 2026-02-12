import json

# Carregar artigos e nutrientes
with open('data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

with open('data/nutrientes.json', 'r', encoding='utf-8') as f:
    nutrientes = json.load(f)

# Gerar todas as URLs do site
todas_urls = []

# Paginas estaticas
estaticas = [
    '/',
    '/blog',
    '/nutrientes', 
    '/calculadoras',
    '/calculadoras/calorias',
    '/calculadoras/proteina',
    '/calculadoras/imc',
    '/calculadoras/macros',
    '/calculadoras/agua',
    '/calculadoras/creatina',
    '/avaliacao',
    '/sobre',
    '/termos',
    '/privacidade',
    '/faq',
    '/editorial',
    '/objetivos/sono',
    '/objetivos/imunidade',
    '/objetivos/emagrecimento',
    '/objetivos/ganho-de-massa',
    '/objetivos/performance',
    '/melhores-suplementos',
]

for url in estaticas:
    todas_urls.append(url)

# Artigos do blog
for a in artigos:
    todas_urls.append('/blog/' + a['slug'])

# Nutrientes
for slug in nutrientes.keys():
    todas_urls.append('/nutrientes/' + slug)

print('Total de paginas no site:', len(todas_urls))
print('Artigos:', len(artigos))
print('Nutrientes:', len(nutrientes))

# Salvar para comparacao
with open('todas_urls.txt', 'w', encoding='utf-8') as f:
    for url in sorted(todas_urls):
        f.write('https://www.suplementaja.com' + url + '\n')

print('Lista salva em todas_urls.txt')
