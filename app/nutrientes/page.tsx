import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import nutrientesData from '@/data/nutrientes.json'
import type { Nutriente } from '@/types/nutriente'

const nutrientes = Object.values(nutrientesData) as Nutriente[]

export default function NutrientesPage() {
  // Categorizar nutrientes
  const vitaminas = nutrientes.filter(n => n.categoria === 'vitamina')
  const minerais = nutrientes.filter(n => n.categoria === 'mineral')
  const outros = nutrientes.filter(n => n.categoria === 'outro')

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - NEOBRUTALISM */}
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-4 py-2 sm:px-8 sm:py-4 mb-6 sm:rotate-1">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-black uppercase">
              Biblioteca de Nutrientes
            </h1>
          </div>
          <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] px-4 sm:px-6 py-6 max-w-3xl mx-auto">
            <p className="text-lg text-black font-bold leading-relaxed">
              Explore informações detalhadas sobre <span className="bg-yellow-400 px-2 py-1">vitaminas</span>,{' '}
              <span className="bg-lime-400 px-2 py-1">minerais</span> e{' '}
              <span className="bg-pink-500 text-white px-2 py-1">outros nutrientes</span> essenciais.
              Descubra funções, fontes alimentares, dosagens recomendadas e evidências científicas.
            </p>
          </div>
        </div>

        {/* Nutrientes Mais Acessados */}
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
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a 
            href="#vitaminas"
            className="bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-4 font-black text-black uppercase hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
             Vitaminas ({vitaminas.length})
          </a>
          <a 
            href="#minerais"
            className="bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-4 font-black text-black uppercase hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
             Minerais ({minerais.length})
          </a>
          <a 
            href="#outros"
            className="bg-pink-500 border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-4 font-black text-white uppercase hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
             Outros ({outros.length})
          </a>
        </div>

        {/* Vitaminas - NEOBRUTALISM */}
        {vitaminas.length > 0 && (
          <section id="vitaminas" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-cyan-400 border-4 border-black shadow-[2px_2px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 sm:-rotate-1">
                <h2 className="text-xl sm:text-3xl font-black text-black uppercase"> Vitaminas</h2>
              </div>
              <Badge variant="info" size="lg">{vitaminas.length}</Badge>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {vitaminas.map((nutriente) => (
                <NutrienteCard key={nutriente.slug} nutriente={nutriente} color="cyan" />
              ))}
            </div>
          </section>
        )}

        {/* Minerais - NEOBRUTALISM */}
        {minerais.length > 0 && (
          <section id="minerais" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-lime-400 border-4 border-black shadow-[2px_2px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 sm:rotate-1">
                <h2 className="text-xl sm:text-3xl font-black text-black uppercase"> Minerais</h2>
              </div>
              <Badge variant="success" size="lg">{minerais.length}</Badge>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {minerais.map((nutriente) => (
                <NutrienteCard key={nutriente.slug} nutriente={nutriente} color="lime" />
              ))}
            </div>
          </section>
        )}

        {/* Outros Nutrientes - NEOBRUTALISM */}
        {outros.length > 0 && (
          <section id="outros" className="mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-pink-500 border-4 border-black shadow-[2px_2px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 sm:-rotate-1">
                <h2 className="text-xl sm:text-3xl font-black text-white uppercase"> Outros Nutrientes</h2>
              </div>
              <Badge variant="danger" size="lg">{outros.length}</Badge>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {outros.map((nutriente) => (
                <NutrienteCard key={nutriente.slug} nutriente={nutriente} color="pink" />
              ))}
            </div>
          </section>
        )}

        {/* CTA - NEOBRUTALISM */}
        <div className="bg-yellow-400 border-4 sm:border-8 border-black shadow-[6px_6px_0_0_#000] sm:shadow-[12px_12px_0_0_#000] p-6 sm:p-12 text-center">
          <div className="inline-block bg-black px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 sm:-rotate-1">
            <h3 className="text-xl sm:text-3xl font-black text-yellow-400 uppercase">
              Descubra Quais Nutrientes Você Precisa
            </h3>
          </div>
          <div className="bg-white border-4 border-black p-4 sm:p-6 mb-6 sm:mb-8 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
              Faça nossa avaliação personalizada e receba recomendações específicas para seu perfil.
            </p>
          </div>
          <Link href="/avaliacao" className="inline-block w-full sm:w-auto">
            <Button variant="primary" size="lg" className="text-lg sm:text-xl px-8 py-5 sm:px-10 sm:py-6 w-full sm:w-auto">
              Fazer Avaliação Gratuita
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

interface NutrienteCardProps {
  nutriente: Nutriente
  color: 'cyan' | 'lime' | 'pink'
}

function NutrienteCard({ nutriente, color }: NutrienteCardProps) {
  const colorClasses = {
    cyan: 'bg-cyan-400',
    lime: 'bg-lime-400',
    pink: 'bg-pink-500'
  }

  const textColorClasses = {
    cyan: 'text-black',
    lime: 'text-black',
    pink: 'text-white'
  }

  return (
    <Link href={`/nutrientes/${nutriente.slug}`}>
      <Card className={`h-full ${colorClasses[color]} hover:-rotate-1 transition-all`}>
        <CardHeader>
          <div className="flex items-start justify-between mb-3">
            <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center text-4xl">
              {nutriente.emoji}
            </div>
            <Badge variant={
              nutriente.categoria === 'vitamina' ? 'info' :
              nutriente.categoria === 'mineral' ? 'success' : 'danger'
            } size="sm">
              {nutriente.subcategoria}
            </Badge>
          </div>
          <CardTitle className={`text-2xl ${textColorClasses[color]}`}>
            {nutriente.nome}
          </CardTitle>
          {nutriente.nome_cientifico && (
            <p className={`text-sm font-bold italic mt-1 ${textColorClasses[color]}`}>
              {nutriente.nome_cientifico}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <p className={`${textColorClasses[color]} text-sm mb-4 line-clamp-3 font-bold leading-relaxed`}>
            {nutriente.descricao_curta}
          </p>

          {/* Principais funções */}
          {nutriente.funcoes_corporais && nutriente.funcoes_corporais.length > 0 && (
            <div className="mb-4">
              <div className={`bg-white border-2 border-black p-3`}>
                <p className="text-xs font-black text-black mb-2 uppercase">Principais funções:</p>
                <ul className="text-xs text-black space-y-1">
                  {nutriente.funcoes_corporais.slice(0, 3).map((funcao, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-black font-bold"></span>
                      <span className="line-clamp-1 font-bold">{funcao}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-4 pt-4 border-t-4 border-black">
            <span className={`text-sm font-black uppercase ${textColorClasses[color]}`}>
              Ver detalhes completos
            </span>
            <ArrowRight className={`w-5 h-5 ${textColorClasses[color]}`} />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
