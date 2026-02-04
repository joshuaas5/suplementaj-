import re

# Ler o arquivo
with open('app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Substituir a secao de Outros Artigos para usar relacionados
old_section = '''{/* Mais artigos */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-black uppercase mb-6 border-b-4 border-black pb-3">
            Outros Artigos
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {artigos
              .filter((a) => a.slug !== artigo.slug)
              .slice(0, 2)
              .map((artigoRelacionado) => ('''

new_section = '''{/* Artigos Relacionados - baseado em categoria e relacionados */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-black uppercase mb-6 border-b-4 border-black pb-3">
            Leia Tambem
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {(() => {
              // Usar artigos relacionados se existirem, senao mesma categoria
              const relacionados = artigo.relacionados && artigo.relacionados.length > 0
                ? artigo.relacionados
                    .map((slug: string) => artigos.find((a) => a.slug === slug))
                    .filter((a): a is Artigo => a !== undefined)
                : artigos.filter((a) => a.slug !== artigo.slug && a.categoria === artigo.categoria);
              return relacionados.slice(0, 2).map((artigoRelacionado) => ('''

if old_section in content:
    content = content.replace(old_section, new_section)
    
    # Tambem precisamos fechar o IIFE
    old_close = '''              </Link>
              ))}
          </div>
        </div>

        {/* Anuncio final */}'''
    
    new_close = '''              </Link>
              ));
            })()}
          </div>
        </div>

        {/* Anuncio final */}'''
    
    content = content.replace(old_close, new_close)
    
    with open('app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Secao de artigos relacionados atualizada com sucesso!")
else:
    print("Secao nao encontrada, verificando...")
    # Imprimir as linhas em volta de "Outros Artigos"
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if 'Outros Artigos' in line:
            print(f"Encontrado na linha {i}")
            for j in range(max(0,i-3), min(len(lines), i+10)):
                print(f"{j}: {lines[j]}")
