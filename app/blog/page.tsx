import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import artigosData from '@/data/artigos.json'
import type { Artigo } from '@/types/artigo'
import { HorizontalAd } from '@/components/ads/DisplayAd'
import { ManualDisplayAd } from '@/components/ads/ManualDisplayAd'
import { BlogContent } from '@/components/blog/BlogContent'

export const metadata = {
  title: 'Blog - Suplementa Já | Guias e Artigos Sobre Suplementação',
  description: 'Artigos completos e baseados em ciência sobre vitaminas, minerais e suplementos. Aprenda como melhorar sua saúde através da suplementação inteligente.',
}

const artigos = artigosData as Artigo[]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-6 py-3 sm:px-8 sm:py-4 mb-6 sm:rotate-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black uppercase">
               Central de Suplementos
            </h1>
          </div>
          <div className="bg-white border-4 border-black shadow-[6px_6px_0_0_#000] px-6 py-6 max-w-3xl mx-auto">
            <p className="text-lg text-black font-bold leading-relaxed">
              Guias completos e baseados em <span className="bg-yellow-400 px-2 py-1">evidências científicas</span> sobre
              suplementação, nutrição e saúde.
            </p>
          </div>
        </div>

        {/* Anúncio antes dos artigos */}
        <HorizontalAd className="mb-8" />
        <ManualDisplayAd className="mb-8" />

        {/* Blog Content with Filters */}
        <BlogContent artigos={artigos} />

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
