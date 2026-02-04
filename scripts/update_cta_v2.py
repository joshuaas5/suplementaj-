import re

# Ler o arquivo
with open('app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Vamos usar regex para encontrar e substituir o case 'cta'
# Primeiro, vamos ver se conseguimos encontrar o padrao

pattern = r"case 'cta':\s*return \(\s*<Card"

if re.search(pattern, content):
    print("Padrao encontrado! Atualizando...")
    
    # Substituir o case cta inteiro
    # Encontrar de "case 'cta':" ate o proximo "case '" ou "default:"
    
    new_cta_code = '''case 'cta':
      return (
        <div className="my-8 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 border-4 border-black shadow-[8px_8px_0_0_#000] p-1">
          <div className="bg-white border-2 border-black p-6 sm:p-8">
            <div className="text-center mb-4">
              <p
                className="text-xl font-black text-black"
                dangerouslySetInnerHTML={{ __html: formatMarkdown(bloco.texto) }}
              />
            </div>

            {bloco.descricao && (
              <p className="text-black font-bold mb-6 text-center">{bloco.descricao}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={bloco.link}>
                <Button variant="primary" size="lg">
                  {bloco.botao || bloco.textoBotao || 'Saiba Mais'}
                </Button>
              </Link>

              {bloco.linkAfiliado && (
                <a 
                  href={bloco.linkAfiliado} 
                  target="_blank" 
                  rel="noopener noreferrer sponsored"
                  className="bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all px-6 py-4 font-black text-black uppercase text-center flex items-center justify-center gap-2"
                >
                  Ver Preco na Amazon
                </a>
              )}
            </div>

            {bloco.linkAfiliado && (
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Link de afiliado. Voce nao paga nada a mais.
              </p>
            )}
          </div>
        </div>
      )

    '''
    
    # Substituir usando regex
    pattern_full = r"case 'cta':.*?return \(.*?\)\s*\)\s*(?=case 'faq')"
    content = re.sub(pattern_full, new_cta_code, content, flags=re.DOTALL)
    
    with open('app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Arquivo atualizado com sucesso!")
else:
    print("Padrao nao encontrado")
    # Mostrar estrutura atual
    lines = content.split('\n')
    for i, line in enumerate(lines):
        if "case 'cta'" in line:
            print(f"Linha {i}: {line}")
            for j in range(i, min(i+20, len(lines))):
                print(f"  {j}: {lines[j]}")
            break
