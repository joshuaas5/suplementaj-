import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Clock, ArrowRight } from 'lucide-react'
import artigosData from '@/data/artigos.json'
import type { Artigo } from '@/types/artigo'
import { HorizontalAd } from '@/components/ads/DisplayAd'
import { ManualDisplayAd } from '@/components/ads/ManualDisplayAd'

export const metadata = {
  title: 'Blog - Suplementa Já | Guias e Artigos Sobre Suplementação',
  description: 'Artigos completos e baseados em ciência sobre vitaminas, minerais e suplementos. Aprenda como melhorar sua saúde através da suplementação inteligente.',
}

const artigos = artigosData as Artigo[]

export default function BlogPage() {
  // Ordenar por data (mais recente primeiro)
  const artigosOrdenados = [...artigos].sort((a, b) =>
    new Date(b.data).getTime() - new Date(a.data).getTime()
  )

  const categorias = Array.from(new Set(artigos.map(a => a.categoria)))

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-6 py-3 sm:px-8 sm:py-4 mb-6 sm:rotate-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase">
              📚 Blog
            </h1>
          </div>
          <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] px-6 py-6 max-w-3xl mx-auto">
            <p className="text-lg text-black font-bold leading-relaxed">
              Guias completos e baseados em <span className="bg-yellow-400 px-2 py-1">evidências científicas</span> sobre
              suplementação, nutrição e saúde.
            </p>
          </div>
        </div>

        {/* Categorias */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categorias.map(cat => (
            <Badge key={cat} variant="info" size="lg">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Anúncio antes dos artigos */}
        <HorizontalAd className="mb-8" />
        <ManualDisplayAd className="mb-8" />

        {/* Grid de Artigos */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artigosOrdenados.map((artigo, index) => (
            <ArtigoCard key={artigo.slug} artigo={artigo} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-yellow-400 border-4 sm:border-8 border-black shadow-[6px_6px_0_0_#000] sm:shadow-[12px_12px_0_0_#000] p-8 sm:p-12 text-center">
          <div className="inline-block bg-black px-6 py-3 mb-6 sm:-rotate-1">
            <h3 className="text-2xl sm:text-3xl font-black text-yellow-400 uppercase">
              Descubra Seus Nutrientes
            </h3>
          </div>
          <div className="bg-white border-4 border-black p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg text-black font-bold leading-relaxed">
              Faça nossa avaliação personalizada e receba recomendações específicas para seu perfil.
            </p>
          </div>
          <Link href="/avaliacao" className="inline-block">
            <Button variant="primary" size="lg" className="text-xl px-10 py-6">
              Fazer Avaliação Gratuita
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

interface ArtigoCardProps {
  artigo: Artigo
  index: number
}

function ArtigoCard({ artigo, index }: ArtigoCardProps) {
  // Cores vibrantes alternadas para os cards
  const cores = [
    'bg-cyan-400',
    'bg-yellow-400',
    'bg-pink-400',
    'bg-lime-400',
    'bg-purple-400',
    'bg-orange-400',
  ]

  const corCard = cores[index % cores.length]

  return (
    <Link href={`/blog/${artigo.slug}`}>
      <Card className={`h-full ${corCard} hover:-rotate-1 transition-all cursor-pointer`}>
        <CardHeader>
          <div className="flex items-center justify-between mb-3">
            <Badge variant="success" size="sm">
              {artigo.categoria}
            </Badge>
            <div className="flex items-center gap-2 text-xs text-black font-bold">
              <Clock className="w-4 h-4" />
              {artigo.tempo_leitura}
            </div>
          </div>
          <CardTitle className="text-2xl text-black line-clamp-3">
            {artigo.titulo}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-black text-sm mb-4 line-clamp-3 font-bold leading-relaxed">
            {artigo.descricao}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {artigo.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white border-2 border-black px-2 py-1 font-bold"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t-4 border-black">
            <span className="text-sm font-black uppercase text-black">
              Ler artigo completo
            </span>
            <ArrowRight className="w-5 h-5 text-black" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
