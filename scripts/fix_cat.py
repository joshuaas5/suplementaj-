import json
with open('data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# Corrigir ultima categoria
for a in artigos:
    if a['categoria'] == 'Proteina':
        a['categoria'] = 'Proteinas'
        print('Corrigido:', a['titulo'])

with open('data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print('Pronto!')
