import json
import unicodedata

def remover_acentos(texto):
    nfkd = unicodedata.normalize('NFD', texto)
    return ''.join(c for c in nfkd if not unicodedata.combining(c))

# Carregar nutrientes
with open('data/nutrientes.json', 'r', encoding='utf-8') as f:
    nutrientes = json.load(f)

# Criar novo dicionario com slugs corrigidos
nutrientes_corrigidos = {}
duplicados_removidos = []

for slug, dados in nutrientes.items():
    slug_limpo = remover_acentos(slug)
    
    if slug_limpo != slug:
        print(f'Corrigindo: {slug} -> {slug_limpo}')
        
        # Verificar se ja existe a versao sem acento
        if slug_limpo in nutrientes:
            print(f'  DUPLICADO! {slug_limpo} ja existe, removendo {slug}')
            duplicados_removidos.append(slug)
            continue
    
    nutrientes_corrigidos[slug_limpo] = dados

# Salvar
with open('data/nutrientes.json', 'w', encoding='utf-8') as f:
    json.dump(nutrientes_corrigidos, f, ensure_ascii=False, indent=2)

print(f'\nNutrientes corrigidos!')
print(f'Antes: {len(nutrientes)} nutrientes')
print(f'Depois: {len(nutrientes_corrigidos)} nutrientes')
print(f'Duplicados removidos: {len(duplicados_removidos)}')
