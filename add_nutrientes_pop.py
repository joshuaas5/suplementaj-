with open('app/nutrientes/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Adicionar secao de Nutrientes Mais Acessados ANTES da navegacao rapida
old_nav = '''        {/* Navegação Rápida */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">'''

new_section = '''        {/* Nutrientes Mais Acessados */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-3 -rotate-1">
              <h2 className="text-2xl sm:text-3xl font-black text-black uppercase flex items-center gap-2">
                 Mais Acessados
              </h2>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
            {(() => {
              const SLUGS_POPULARES = ['calcio', 'vitamina-b12', 'vitamina-d', 'vitamina-k2', 'ferro', 'omega-3']
              return SLUGS_POPULARES.map(slug => {
                const n = nutrientes.find(nut => nut.slug === slug)
                if (!n) return null
                return (
                  <Link key={n.slug} href={`/nutrientes/${n.slug}`}>
                    <div className="bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center">
                      <div className="text-3xl mb-2">{n.emoji}</div>
                      <div className="font-black text-black text-sm uppercase">{n.nome}</div>
                    </div>
                  </Link>
                )
              })
            })()}
          </div>
        </div>

        {/* Navegação Rápida */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">'''

content = content.replace(old_nav, new_section)

with open('app/nutrientes/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Nutrientes mais acessados adicionados!')
