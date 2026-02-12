with open('components/blog/BlogContent.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Corrigir o filtro para garantir tipo correto
content = content.replace(
    '.filter(Boolean)',
    '.filter((a): a is Artigo => a !== undefined)'
)

# Mover SLUGS_MAIS_ACESSADOS para fora do componente (constante global)
old_inside = '''    // Artigos mais acessados (baseado em dados do Google Search Console)
    const SLUGS_MAIS_ACESSADOS = ['''

new_outside = '''    // Artigos mais acessados (baseado em dados do Google Search Console)
    // SLUGS_MAIS_ACESSADOS definido como constante global no topo do arquivo
    const slugsMaisAcessados = ['''

content = content.replace(old_inside, new_outside)

# Atualizar a referencia
content = content.replace('SLUGS_MAIS_ACESSADOS', 'slugsMaisAcessados')

with open('components/blog/BlogContent.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Corrigido tipo TypeScript!')
