import json
import re

# ==========================================
# MEGA MELHORIA DE TITULOS PARA CTR
# ==========================================

print("="*60)
print(" MELHORANDO MAIS TITULOS PARA CTR")
print("="*60)

with open('data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# Funcao para tornar titulo mais atraente
def melhorar_titulo(titulo):
    titulo_lower = titulo.lower()
    
    # Ja tem numero ou ano? Pular
    if '2025' in titulo or '2026' in titulo:
        return titulo
    if any(c.isdigit() for c in titulo[:10]):
        return titulo
    
    # Regras de melhoria
    melhorias = {
        'guia completo': 'Guia DEFINITIVO 2025',
        'guia definitivo': 'Guia DEFINITIVO 2025',
        'beneficios': 'Beneficios COMPROVADOS',
        'como tomar': 'Como Tomar CORRETAMENTE',
        'qual o melhor': 'Qual o MELHOR',
        'funciona': 'FUNCIONA MESMO?',
        'vale a pena': 'VALE A PENA?',
        'melhores': 'TOP',
    }
    
    novo = titulo
    for old, new in melhorias.items():
        if old in titulo_lower:
            novo = re.sub(old, new, titulo, flags=re.IGNORECASE)
            break
    
    return novo

# Melhorar titulos que nao tem numeros ou palavras de poder
titulos_melhorados = 0
for artigo in artigos:
    titulo_original = artigo['titulo']
    titulo_novo = melhorar_titulo(titulo_original)
    
    if titulo_novo != titulo_original:
        artigo['titulo'] = titulo_novo
        titulos_melhorados += 1
        print(f"  + {titulo_original[:40]}... -> {titulo_novo[:40]}...")

print(f"\n>> {titulos_melhorados} titulos adicionais melhorados")

# ==========================================
# ADICIONAR FAQ SCHEMA NOS ARTIGOS
# ==========================================
print("\n" + "="*60)
print(" VERIFICANDO FAQs PARA SCHEMA")
print("="*60)

artigos_com_faq = 0
for artigo in artigos:
    for bloco in artigo.get('conteudo', []):
        if bloco.get('tipo') == 'faq':
            artigos_com_faq += 1
            break

print(f"  >> {artigos_com_faq} artigos ja tem secao FAQ")

# ==========================================
# ADICIONAR MAIS TAGS PARA SEO
# ==========================================
print("\n" + "="*60)
print(" MELHORANDO TAGS PARA SEO")
print("="*60)

tags_adicionadas = 0
for artigo in artigos:
    tags_atuais = [t.lower() for t in artigo.get('tags', [])]
    novas_tags = list(artigo.get('tags', []))
    
    titulo_lower = artigo['titulo'].lower()
    slug_lower = artigo['slug'].lower()
    
    # Adicionar tags baseadas no conteudo
    if 'creatina' in titulo_lower and 'suplemento' not in tags_atuais:
        novas_tags.append('suplemento')
    if 'whey' in titulo_lower and 'proteina' not in tags_atuais:
        novas_tags.append('proteina')
    if 'vitamina' in titulo_lower and 'saude' not in tags_atuais:
        novas_tags.append('saude')
    if 'omega' in titulo_lower and 'coracao' not in tags_atuais:
        novas_tags.append('coracao')
    if 'sono' in titulo_lower and 'qualidade de vida' not in tags_atuais:
        novas_tags.append('qualidade de vida')
    if 'imunidade' in titulo_lower and 'defesa' not in tags_atuais:
        novas_tags.append('defesa')
    if 'energia' in titulo_lower and 'disposicao' not in tags_atuais:
        novas_tags.append('disposicao')
    if 'emagrecimento' in titulo_lower or 'emagrecer' in titulo_lower:
        if 'perda de peso' not in tags_atuais:
            novas_tags.append('perda de peso')
    if 'musculo' in titulo_lower or 'hipertrofia' in titulo_lower:
        if 'ganho de massa' not in tags_atuais:
            novas_tags.append('ganho de massa')
    
    if len(novas_tags) > len(artigo.get('tags', [])):
        artigo['tags'] = novas_tags
        tags_adicionadas += 1

print(f"  >> {tags_adicionadas} artigos com tags adicionais")

# ==========================================
# SALVAR
# ==========================================
with open('data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print("\n" + "="*60)
print(" MELHORIAS APLICADAS COM SUCESSO!")
print("="*60)
