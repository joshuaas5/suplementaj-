import json
import unicodedata

def normalizar_categoria(cat):
    # Mapeamento direto
    mapa = {
        'sono': 'Sono',
        'emagrecimento': 'Emagrecimento',
        'suplementos': 'Suplementos',
        'imunidade': 'Saude',
        'articulacoes': 'Articulacoes',
        'Articulacoes': 'Articulacoes',
        'Articulações': 'Articulacoes',
        'Beleza e Articulacoes': 'Beleza',
        'Beleza e Articulações': 'Beleza',
        'Proteina': 'Proteinas',
        'Proteínas': 'Proteinas',
        'Saude Intestinal': 'Saude',
        'Saúde Intestinal': 'Saude',
        'Anti-inflamatorios': 'Suplementos',
        'Anti-inflamatórios': 'Suplementos',
        'Superalimentos': 'Nutricao',
        'Analise': 'Suplementos',
        'Análise': 'Suplementos',
        'Ciencia': 'Nutricao',
        'Ciência': 'Nutricao',
        'Review': 'Suplementos',
        'Calorias': 'Nutricao',
        'Economia': 'Suplementos',
        'Nutricao': 'Nutricao',
        'Nutrição': 'Nutricao',
        'Saúde': 'Saude',
        'Saude': 'Saude',
        'Testosterona': 'Suplementos',
        'Energia': 'Suplementos',
        'Vegano': 'Nutricao',
        'Receitas': 'Nutricao',
        'Iniciantes': 'Suplementos',
        'Adaptógenos': 'Suplementos',
    }
    
    return mapa.get(cat, cat)

# Carregar artigos
with open('data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# Normalizar todas as categorias
for artigo in artigos:
    cat_original = artigo.get('categoria', 'Geral')
    artigo['categoria'] = normalizar_categoria(cat_original)

# Salvar
with open('data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

# Mostrar resultado final
categorias = {}
for a in artigos:
    cat = a.get('categoria', 'Geral')
    if cat not in categorias:
        categorias[cat] = 0
    categorias[cat] += 1

print('CATEGORIAS FINAIS (normalizadas):')
for cat, count in sorted(categorias.items(), key=lambda x: -x[1]):
    print(f'  {cat}: {count} artigos')
