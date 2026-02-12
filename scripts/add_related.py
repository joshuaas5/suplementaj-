# Script para adicionar secao de artigos relacionados na pagina do blog

import re

# Ler o arquivo
with open('app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Verificar se ja tem ArtigosRelacionados
if 'artigo.relacionados' in content:
    print("Artigos relacionados ja implementado!")
else:
    print("Adicionando secao de artigos relacionados...")
    
    # Encontrar a secao "Outros Artigos" e melhorar
    old_section = '''        {/* Mais artigos */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-black uppercase mb-6 border-b-4 border-black pb-3">
            Outros Artigos
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {artigos
              .filter((a) => a.slug !== artigo.slug)
              .slice(0, 2)'''
    
    new_section = '''        {/* Artigos Relacionados - baseado em categoria */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-black uppercase mb-6 border-b-4 border-black pb-3">
            Artigos Relacionados
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {(artigo.relacionados && artigo.relacionados.length > 0
              ? artigo.relacionados
                  .map((slug: string) => artigos.find((a) => a.slug === slug))
                  .filter((a): a is Artigo => a !== undefined)
              : artigos
                  .filter((a) => a.slug !== artigo.slug && a.categoria === artigo.categoria)
            ).slice(0, 2)'''
    
    if old_section in content:
        content = content.replace(old_section, new_section)
        
        # Tambem atualizar o emoji do titulo
        content = content.replace(
            '''<h3 className="text-2xl font-black text-black uppercase mb-6 border-b-4 border-black pb-3">
            Artigos Relacionados
          </h3>''',
            '''<h3 className="text-2xl font-black text-black uppercase mb-6 border-b-4 border-black pb-3">
            Leia Tambem
          </h3>'''
        )
        
        with open('app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
            f.write(content)
        print("Secao de artigos relacionados atualizada!")
    else:
        print("Secao antiga nao encontrada. Conteudo atual:")
        # Procurar padroes similares
        if 'Outros Artigos' in content:
            print("'Outros Artigos' encontrado no arquivo")
        else:
            print("'Outros Artigos' NAO encontrado")
