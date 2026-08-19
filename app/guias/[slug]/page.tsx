import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calculator, ShoppingCart } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import artigosData from '@/data/artigos.json'
import type { Artigo } from '@/types/artigo'
import { TOPIC_HUBS, getArticlesForHub, getTopicHub } from '@/lib/topic-hubs'

const artigos = artigosData as Artigo[]

export async function generateStaticParams() {
  return TOPIC_HUBS.map((hub) => ({ slug: hub.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const hub = getTopicHub(params.slug)

  if (!hub) {
    return {
      title: 'Guia não encontrado',
    }
  }

  return {
    title: `${hub.titulo}: ${hub.subtitulo}`,
    description: hub.descricao,
    alternates: {
      canonical: `/guias/${hub.slug}`,
    },
  }
}

export default function GuiaPage({ params }: { params: { slug: string } }) {
  const hub = getTopicHub(params.slug)
  if (!hub) notFound()

  const hubArticles = getArticlesForHub(artigos, hub)

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: hub.titulo,
    description: hub.descricao,
    itemListElement: hubArticles.all.slice(0, 20).map((artigo, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: artigo.titulo,
      url: `https://www.suplementaja.com/blog/${artigo.slug}`,
    })),
  }

  return (
    <main className="min-h-screen bg-white py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/guias" className="inline-flex items-center gap-2 mb-8 text-black font-bold hover:underline">
          <ArrowLeft className="h-4 w-4" />
          Voltar para guias
        </Link>

        <header className="mb-10">
          <div className="inline-block bg-yellow-400 border-4 border-black shadow-[6px_6px_0_0_#000] px-6 py-4 mb-6">
            <h1 className="text-3xl sm:text-5xl font-black text-black uppercase">{hub.titulo}</h1>
          </div>
          <p className="max-w-3xl text-lg text-black font-bold leading-relaxed">{hub.descricao}</p>
        </header>

        <section className="grid gap-4 md:grid-cols-3 mb-10">
          {hub.pilares.map((pilar) => (
            <div key={pilar} className="bg-lime-400 border-4 border-black p-5 text-black font-black">
              {pilar}
            </div>
          ))}
        </section>

        {hub.calculatorHref && (
          <section className="mb-10 bg-cyan-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 font-black uppercase mb-2">
                  <Calculator className="h-5 w-5" />
                  Ferramenta prática
                </div>
                <p className="text-black font-bold">Use a calculadora relacionada antes de decidir dose, meta ou compra.</p>
              </div>
              <Link href={hub.calculatorHref}>
                <Button variant="primary" size="lg">
                  Abrir calculadora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </section>
        )}

        <ArticleSection title="Comece por aqui" artigos={hubArticles.primary} />

        {hubArticles.commercial.length > 0 && (
          <section className="mt-12 bg-yellow-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6">
            <div className="flex items-center gap-2 mb-5">
              <ShoppingCart className="h-6 w-6" />
              <h2 className="text-2xl font-black text-black uppercase">Páginas de compra</h2>
            </div>
            <ArticleGrid artigos={hubArticles.commercial} />
          </section>
        )}

        {hubArticles.discovered.length > 0 && (
          <section className="mt-12">
            <ArticleSection title="Aprofunde o tema" artigos={hubArticles.discovered.slice(0, 12)} />
          </section>
        )}
      </div>
    </main>
  )
}

function ArticleSection({ title, artigos }: { title: string; artigos: Artigo[] }) {
  if (artigos.length === 0) return null

  return (
    <section>
      <h2 className="text-2xl font-black text-black uppercase mb-5 border-b-4 border-black pb-3">{title}</h2>
      <ArticleGrid artigos={artigos} />
    </section>
  )
}

function ArticleGrid({ artigos }: { artigos: Artigo[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {artigos.map((artigo) => (
        <Link
          key={artigo.slug}
          href={`/blog/${artigo.slug}`}
          className="bg-white border-4 border-black p-5 hover:translate-x-1 hover:translate-y-1 transition-transform"
        >
          <Badge variant="success" size="sm" className="mb-3">
            {artigo.categoria}
          </Badge>
          <h3 className="text-xl font-black text-black mb-2 line-clamp-2">{artigo.titulo}</h3>
          <p className="text-black font-bold text-sm line-clamp-3">{artigo.descricao}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-black font-black uppercase text-sm">
            Ler artigo
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      ))}
    </div>
  )
}
