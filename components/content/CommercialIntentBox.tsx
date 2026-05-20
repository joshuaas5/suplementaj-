import Link from 'next/link'
import { ArrowRight, ShoppingCart } from 'lucide-react'
import type { TopicHub } from '@/lib/topic-hubs'

interface CommercialIntentBoxProps {
  hub?: TopicHub
}

export function CommercialIntentBox({ hub }: CommercialIntentBoxProps) {
  const href = hub ? `/guias/${hub.slug}` : '/melhores-suplementos'
  const label = hub ? `Ver escolhas do guia ${hub.titulo.replace('Guia de ', '')}` : 'Ver melhores suplementos'

  return (
    <section className="my-10 bg-yellow-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-3 py-1 font-black text-black uppercase text-sm mb-3">
            <ShoppingCart className="h-4 w-4" />
            Compra com critério
          </div>
          <h2 className="text-2xl font-black text-black uppercase mb-2">Antes de comprar suplemento</h2>
          <p className="text-black font-bold leading-relaxed">
            Compare dose por porção, forma do ingrediente, laudo, custo mensal e necessidade real. Link de afiliado pode gerar comissão, mas a recomendação editorial deve continuar independente.
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 bg-black text-yellow-400 border-4 border-black px-5 py-3 font-black uppercase hover:bg-white hover:text-black transition-colors"
        >
          {label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
