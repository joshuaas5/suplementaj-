import json

# Atualizar o renderizador de CTA na página do blog
# para mostrar botão de afiliado quando disponível

cta_code = '''
    case 'cta':
      return (
        <div className="my-8 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 border-4 border-black shadow-[8px_8px_0_0_#000] p-1">
          <div className="bg-white border-2 border-black p-6 sm:p-8">
            {/* Header */}
            <div className="text-center mb-4">
              <p
                className="text-xl font-black text-black"
                dangerouslySetInnerHTML={{ __html: formatMarkdown(bloco.texto) }}
              />
            </div>

            {bloco.descricao && (
              <p className="text-black font-bold mb-6 text-center">{bloco.descricao}</p>
            )}

            {/* Botoes */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Botao principal */}
              <Link href={bloco.link}>
                <Button variant="primary" size="lg">
                  {bloco.botao || bloco.textoBotao || 'Saiba Mais'}
                </Button>
              </Link>

              {/* Botao de afiliado */}
              {bloco.linkAfiliado && (
                <a 
                  href={bloco.linkAfiliado} 
                  target="_blank" 
                  rel="noopener noreferrer sponsored"
                  className="bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all px-6 py-4 font-black text-black uppercase text-center flex items-center justify-center gap-2"
                >
                   Ver na Amazon
                </a>
              )}
            </div>

            {/* Disclaimer */}
            {bloco.linkAfiliado && (
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Link de afiliado. Voce nao paga nada a mais.
              </p>
            )}
          </div>
        </div>
      )
'''

print("Codigo CTA atualizado gerado!")
print("Precisa ser inserido manualmente na pagina do blog")
