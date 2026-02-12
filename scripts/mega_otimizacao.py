import json
import re
from datetime import datetime

# ==========================================
# MEGA SCRIPT DE OTIMIZACAO SEO + CTR + AFILIADOS
# ==========================================

print("="*60)
print(" INICIANDO MEGA OTIMIZACAO")
print("="*60)

# Carregar artigos
with open('data/artigos.json', 'r', encoding='utf-8') as f:
    artigos = json.load(f)

# ==========================================
# 1. MELHORAR TITULOS PARA AUMENTAR CTR
# ==========================================
print("\n[1/4] MELHORANDO TITULOS PARA CTR...")

# Mapeamento de titulos antigos para novos (mais clicaveis)
melhoria_titulos = {
    # Adicionar ano 2025/2026 e palavras de poder
    "Vitamina D: Por Que 90% dos Brasileiros Estão em Deficiência": 
        "Vitamina D: 90% dos Brasileiros Têm DEFICIÊNCIA (Como Corrigir em 2025)",
    
    "Melatonina: O Guia Definitivo Para Dormir Melhor": 
        "Melatonina: Guia COMPLETO 2025 - Dose Certa Para Dormir em 15 Min",
    
    "Creatina: O Suplemento Mais Estudado do Mundo":
        "Creatina 2025: O Suplemento Mais PODEROSO (Guia Científico Completo)",
    
    "Ômega-3: Por Que Você Precisa Deste Suplemento":
        "Ômega-3: 7 Benefícios COMPROVADOS Que Você Precisa Conhecer (2025)",
    
    "Vitamina B12: O Nutriente Que Falta Em Metade dos Brasileiros":
        "Vitamina B12: METADE dos Brasileiros Têm Deficiência (Sintomas + Solução)",
    
    "Magnésio: O Mineral Esquecido Que Resolve 300 Funções no Corpo":
        "Magnésio: O Mineral MILAGROSO Que 80% Das Pessoas Precisam (2025)",
    
    "Zinco: O Mineral Essencial Para Imunidade e Testosterona":
        "Zinco: AUMENTE Imunidade e Testosterona Naturalmente (Guia 2025)",
    
    "Proteína Whey: O Guia Completo Para Escolher e Usar":
        "Whey Protein 2025: Guia DEFINITIVO - Qual Tipo Comprar? (Isolado vs Concentrado)",
    
    "Probióticos: Como as Bactérias Boas Transformam Sua Saúde":
        "Probióticos 2025: 5 Benefícios INCRÍVEIS Para Intestino e Imunidade",
    
    "Colágeno: Além da Beleza - Benefícios Para Articulações e Músculos":
        "Colágeno 2025: Funciona MESMO? Guia Científico (Pele, Cabelo, Articulações)",
    
    "Cafeína: O Suplemento Mais Usado do Mundo":
        "Cafeína: Guia CIENTÍFICO 2025 - Dose Ideal Para Performance MÁXIMA",
    
    "Ashwagandha: O Adaptógeno Indiano Que Combate Estresse e Ansiedade":
        "Ashwagandha 2025: Reduza Estresse e ANSIEDADE em 30 Dias (Funciona?)",
    
    "Cúrcuma: O Poder Anti-inflamatório Natural":
        "Cúrcuma 2025: Anti-inflamatório NATURAL Mais Potente (Como Usar)",
    
    "Ferro: O Mineral Que Dá Energia ao Seu Corpo":
        "Ferro: ACABE Com Cansaço e Anemia (Guia Completo 2025)",
    
    "Cálcio: Muito Além dos Ossos - O Mineral Multifuncional":
        "Cálcio 2025: NÃO É Só Ossos! 5 Funções ESSENCIAIS Que Você Ignora",
}

titulos_atualizados = 0
for artigo in artigos:
    titulo_antigo = artigo['titulo']
    if titulo_antigo in melhoria_titulos:
        artigo['titulo'] = melhoria_titulos[titulo_antigo]
        titulos_atualizados += 1
        print(f"  + {titulo_antigo[:40]}... -> ATUALIZADO")

print(f"  >> {titulos_atualizados} titulos melhorados")

# ==========================================
# 2. ADICIONAR LINKS DE AFILIADOS AOS CTAs
# ==========================================
print("\n[2/4] ADICIONANDO LINKS DE AFILIADOS...")

# Links de afiliados Amazon por categoria
links_afiliados = {
    'vitamina-d': 'https://www.amazon.com.br/s?k=vitamina+d3&tag=105c91-20',
    'vitamina-b12': 'https://www.amazon.com.br/s?k=vitamina+b12&tag=105c91-20',
    'vitamina-c': 'https://www.amazon.com.br/s?k=vitamina+c+1000mg&tag=105c91-20',
    'melatonina': 'https://www.amazon.com.br/s?k=melatonina&tag=105c91-20',
    'creatina': 'https://www.amazon.com.br/s?k=creatina+monohidratada&tag=105c91-20',
    'omega': 'https://www.amazon.com.br/s?k=omega+3+capsulas&tag=105c91-20',
    'magnesio': 'https://www.amazon.com.br/s?k=magnesio+quelato&tag=105c91-20',
    'zinco': 'https://www.amazon.com.br/s?k=zinco+quelato&tag=105c91-20',
    'whey': 'https://www.amazon.com.br/s?k=whey+protein+isolado&tag=105c91-20',
    'colageno': 'https://www.amazon.com.br/s?k=colageno+hidrolisado&tag=105c91-20',
    'probiotico': 'https://www.amazon.com.br/s?k=probioticos+capsulas&tag=105c91-20',
    'cafeina': 'https://www.amazon.com.br/s?k=cafeina+200mg&tag=105c91-20',
    'ashwagandha': 'https://www.amazon.com.br/s?k=ashwagandha&tag=105c91-20',
    'curcuma': 'https://www.amazon.com.br/s?k=curcuma+capsulas&tag=105c91-20',
    'ferro': 'https://www.amazon.com.br/s?k=ferro+quelato&tag=105c91-20',
    'calcio': 'https://www.amazon.com.br/s?k=calcio+vitamina+d&tag=105c91-20',
    'multivitaminico': 'https://www.amazon.com.br/s?k=multivitaminico&tag=105c91-20',
    'default': 'https://www.amazon.com.br/s?k=suplementos&tag=105c91-20'
}

def get_affiliate_link(slug, titulo):
    slug_lower = slug.lower()
    titulo_lower = titulo.lower()
    
    for key, link in links_afiliados.items():
        if key in slug_lower or key in titulo_lower:
            return link
    return links_afiliados['default']

ctas_atualizados = 0
for artigo in artigos:
    for bloco in artigo.get('conteudo', []):
        if bloco.get('tipo') == 'cta':
            # Se nao tem link de afiliado, adicionar
            if 'link' in bloco and 'amazon' not in bloco['link'].lower():
                link_afiliado = get_affiliate_link(artigo['slug'], artigo['titulo'])
                bloco['linkAfiliado'] = link_afiliado
                ctas_atualizados += 1
            elif 'link' not in bloco:
                link_afiliado = get_affiliate_link(artigo['slug'], artigo['titulo'])
                bloco['linkAfiliado'] = link_afiliado
                ctas_atualizados += 1

print(f"  >> {ctas_atualizados} CTAs com links de afiliados")

# ==========================================
# 3. MELHORAR META DESCRIPTIONS
# ==========================================
print("\n[3/4] MELHORANDO META DESCRIPTIONS...")

descricoes_melhoradas = 0
for artigo in artigos:
    desc = artigo.get('descricao', '')
    
    # Adicionar urgencia se nao tiver
    if len(desc) < 150:
        # Descrição muito curta, melhorar
        novo_desc = desc
        
        # Adicionar call to action
        if 'descubra' not in desc.lower() and 'aprenda' not in desc.lower():
            if 'guia' in desc.lower():
                novo_desc = desc + " Leia agora e transforme sua saúde!"
            else:
                novo_desc = desc + " Guia completo com dosagem e dicas."
        
        if novo_desc != desc:
            artigo['descricao'] = novo_desc[:160]  # Max 160 chars
            descricoes_melhoradas += 1

print(f"  >> {descricoes_melhoradas} descriptions melhoradas")

# ==========================================
# 4. ADICIONAR INTERNAL LINKS (relacionados)
# ==========================================
print("\n[4/4] ADICIONANDO ARTIGOS RELACIONADOS...")

# Criar mapa de slugs por categoria
categoria_map = {}
for artigo in artigos:
    cat = artigo.get('categoria', 'Geral')
    if cat not in categoria_map:
        categoria_map[cat] = []
    categoria_map[cat].append(artigo['slug'])

# Adicionar campo de relacionados
relacionados_adicionados = 0
for artigo in artigos:
    if 'relacionados' not in artigo or len(artigo.get('relacionados', [])) == 0:
        cat = artigo.get('categoria', 'Geral')
        mesma_cat = [s for s in categoria_map.get(cat, []) if s != artigo['slug']]
        
        # Pegar ate 3 relacionados da mesma categoria
        artigo['relacionados'] = mesma_cat[:3]
        if len(artigo['relacionados']) > 0:
            relacionados_adicionados += 1

print(f"  >> {relacionados_adicionados} artigos com relacionados")

# ==========================================
# SALVAR
# ==========================================
print("\n" + "="*60)
print(" SALVANDO ALTERACOES...")
print("="*60)

with open('data/artigos.json', 'w', encoding='utf-8') as f:
    json.dump(artigos, f, ensure_ascii=False, indent=2)

print("\n SUCESSO! Todas as otimizacoes aplicadas!")
print(f"  - {titulos_atualizados} titulos melhorados para CTR")
print(f"  - {ctas_atualizados} CTAs com links de afiliados")
print(f"  - {descricoes_melhoradas} meta descriptions otimizadas")
print(f"  - {relacionados_adicionados} artigos com internal links")
