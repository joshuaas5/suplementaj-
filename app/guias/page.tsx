import Link from 'next/link'
import { ArrowRight, Layers3 } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import artigosData from '@/data/artigos.json'
import type { Artigo } from '@/types/artigo'
import { TOPIC_HUBS, getArticlesForHub } from '@/lib/topic-hubs'

export const metadata = {
  title: 'Guias de Suplementos por Objetivo',
  description:
    'Trilhas organizadas por tema para estudar creatina, whey, calorias, vitaminas, minerais, sono, imunidade e performance sem se perder.',
  alternates: {
    canonical: '/guias',
  },
}

const artigos = artigosData as Artigo[]

export default function GuiasPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-3 bg-lime-400 border-4 border-black shadow-[6px_6px_0_0_#000] px-6 py-4 mb-6">
            <Layers3 className="h-8 w-8 text-black" />
            <h1 className="text-3xl sm:text-5xl font-black text-black uppercase">Guias por Tema</h1>
          </div>
          <p className="max-w-3xl mx-auto text-lg text-black font-bold leading-relaxed">
            Em vez de artigos soltos, siga uma trilha. Cada guia reúne os conteúdos centrais, calculadoras e páginas de compra com mais intenção.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {TOPIC_HUBS.map((hub) => {
            const hubArticles = getArticlesForHub(artigos, hub)

            return (
              <article key={hub.slug} className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6">
                <Badge variant="success" size="sm" className="mb-4">
                  {hubArticles.all.length} conteúdos
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-black text-black uppercase mb-3">{hub.titulo}</h2>
                <p className="text-black font-bold mb-5 leading-relaxed">{hub.descricao}</p>

                <div className="grid gap-3 mb-6">
                  {hub.pilares.map((pilar) => (
                    <div key={pilar} className="bg-cyan-50 border-2 border-black p-3 text-sm text-black font-bold">
                      {pilar}
                    </div>
                  ))}
                </div>

                <Link href={`/guias/${hub.slug}`}>
                  <Button variant="primary" size="lg" className="w-full justify-center">
                    Abrir guia
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </main>
  )
}
