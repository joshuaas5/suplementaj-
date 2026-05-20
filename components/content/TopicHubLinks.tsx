import Link from 'next/link'
import { ArrowRight, Calculator, Layers3 } from 'lucide-react'
import type { TopicHub } from '@/lib/topic-hubs'

interface TopicHubLinksProps {
  hub: TopicHub
}

export function TopicHubLinks({ hub }: TopicHubLinksProps) {
  return (
    <section className="my-10 bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 bg-lime-400 border-2 border-black px-3 py-1 font-black text-black uppercase text-sm mb-3">
            <Layers3 className="h-4 w-4" />
            Guia central
          </div>
          <h2 className="text-2xl font-black text-black uppercase mb-2">{hub.titulo}</h2>
          <p className="text-black font-bold leading-relaxed">{hub.descricao}</p>
        </div>
        <Link
          href={`/guias/${hub.slug}`}
          className="inline-flex items-center justify-center gap-2 bg-black text-yellow-400 border-4 border-black px-5 py-3 font-black uppercase hover:bg-yellow-400 hover:text-black transition-colors"
        >
          Ver trilha
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {hub.pilares.map((pilar) => (
          <div key={pilar} className="bg-cyan-50 border-2 border-black p-3 text-sm font-bold text-black">
            {pilar}
          </div>
        ))}
      </div>

      {hub.calculatorHref && (
        <Link
          href={hub.calculatorHref}
          className="mt-5 inline-flex items-center gap-2 text-black font-black underline decoration-4 decoration-yellow-400 underline-offset-4"
        >
          <Calculator className="h-4 w-4" />
          Usar calculadora relacionada
        </Link>
      )}
    </section>
  )
}
