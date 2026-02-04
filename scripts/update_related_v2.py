import re

# Ler o arquivo
with open('app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Substituir a secao de Outros Artigos para usar relacionados (com emoji)
old_section = '''{/* Mais artigos */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-black uppercase mb-6 border-b-4 border-black pb-3">
            \U0001F4D6 Outros Artigos
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {artigos
              .filter((a) => a.slug !== artigo.slug)
              .slice(0, 2)
              .map((artigoRelacionado) => ('''

new_section = '''{/* Artigos Relacionados - baseado em categoria e relacionados */}
        <div className="mt-12">
          <h3 className="text-2xl font-black text-black uppercase mb-6 border-b-4 border-black pb-3">
            \U0001F517 Leia Tambem
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {(() => {
              const relacionados = artigo.relacionados && artigo.relacionados.length > 0
                ? artigo.relacionados
                    .map((slug: string) => artigos.find((a) => a.slug === slug))
                    .filter((a): a is Artigo => a !== undefined)
                : artigos.filter((a) => a.slug !== artigo.slug && a.categoria === artigo.categoria);
              return relacionados.slice(0, 2).map((artigoRelacionado) => ('''

if old_section in content:
    content = content.replace(old_section, new_section)
    
    # Tambem precisamos fechar o IIFE - procurar o fechamento correto
    old_close = '''                  {artigoRelacionado.descricao}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Anuncio final */}'''
    
    new_close = '''                  {artigoRelacionado.descricao}
                </p>
              </Link>
            ));
            })()}
          </div>
        </div>

        {/* Anuncio final */}'''
    
    if old_close in content:
        content = content.replace(old_close, new_close)
        print("Fechamento tambem atualizado!")
    else:
        print("Fechamento nao encontrado, procurando alternativa...")
    
    with open('app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Secao de artigos relacionados atualizada com sucesso!")
else:
    print("Secao nao encontrada exatamente. Buscando...")
    if 'Outros Artigos' in content:
        print("'Outros Artigos' esta no arquivo")
        # Tentar com regex
        pattern = r'\{/\* Mais artigos \*/\}'
        if re.search(pattern, content):
            print("Comentario 'Mais artigos' encontrado")
