import { ExternalLink, Pill, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { MultivitaminicoRecomendado, getNutrienteNome } from '@/lib/recomendar-multivitaminicos'

interface CardMultivitaminicoProps {
  multi: MultivitaminicoRecomendado
  ranking: number
}

export function CardMultivitaminico({ multi, ranking }: CardMultivitaminicoProps) {
  const getCardBg = () => {
    if (ranking === 1) return 'bg-yellow-400'
    if (ranking === 2) return 'bg-lime-400'
    return 'bg-cyan-400'
  }

  return (
    <div
      className={`${getCardBg()} border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-6 relative`}
    >
      {/* Ranking Badge */}
      {ranking === 1 && (
        <div className="absolute -top-3 -right-3 bg-black px-4 py-2 border-4 border-black rotate-12">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-black uppercase text-sm">Melhor Match</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black border-2 border-black flex items-center justify-center flex-shrink-0">
          <Pill className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3 className="text-xl sm:text-2xl font-black text-black uppercase">{multi.nome}</h3>
            <Badge variant="neutral" size="sm">
              {multi.marca}
            </Badge>
          </div>
          <p className="text-sm text-black font-bold">{multi.descricao}</p>
        </div>
      </div>

      {/* Match Score */}
      <div className="bg-white border-4 border-black p-4 mb-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <p className="text-xs font-black text-black uppercase mb-1">Cobertura</p>
            <p className="text-3xl font-black text-black">
              {multi.porcentagem_cobertura}%
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-black text-black uppercase mb-1">Nutrientes Cobertos</p>
            <p className="text-3xl font-black text-black">
              {multi.nutrientes_cobertos.length}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 bg-gray-200 border-2 border-black h-4">
          <div
            className="bg-lime-400 h-full border-r-2 border-black transition-all"
            style={{ width: `${multi.porcentagem_cobertura}%` }}
          />
        </div>
      </div>

      {/* Nutrientes Inclusos */}
      <div className="mb-4">
        <div className="bg-black px-3 py-1 sm:px-4 sm:py-2 mb-3 inline-block border-2 border-black">
          <h4 className="text-sm font-black text-yellow-400 uppercase">
            ✅ Nutrientes que você precisa (inclusos)
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {multi.nutrientes_cobertos.map((slug) => (
            <span
              key={slug}
              className="bg-white border-2 border-black px-3 py-1 font-bold text-black text-sm"
            >
              {getNutrienteNome(slug)}
            </span>
          ))}
        </div>
      </div>

      {/* Vantagens */}
      <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4 mb-4">
        <p className="font-black text-black uppercase text-sm mb-3">💡 Vantagens:</p>
        <ul className="space-y-2">
          {multi.vantagens.map((vantagem, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-black font-black mt-1">•</span>
              <span className="text-black font-bold text-sm">{vantagem}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Preço e Economia */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <div className="bg-white border-2 border-black p-3">
          <p className="text-xs font-black text-black uppercase mb-1">Preço Aproximado</p>
          <p className="text-2xl font-black text-black">R$ {multi.preco_aprox}</p>
          <p className="text-xs text-black font-bold mt-1">{multi.doses_por_frasco} doses</p>
        </div>
        {multi.economia_estimada > 0 && (
          <div className="bg-lime-400 border-2 border-black p-3">
            <p className="text-xs font-black text-black uppercase mb-1">Economia Estimada</p>
            <p className="text-2xl font-black text-black">~R$ {multi.economia_estimada}</p>
            <p className="text-xs text-black font-bold mt-1">vs. suplementos individuais</p>
          </div>
        )}
      </div>

      {/* Ideal Para */}
      <div className="mb-4">
        <p className="text-xs font-black text-black uppercase mb-2">👤 Ideal para:</p>
        <div className="flex flex-wrap gap-2">
          {multi.ideal_para.map((perfil, i) => (
            <Badge key={i} variant="info" size="sm">
              {perfil}
            </Badge>
          ))}
        </div>
      </div>

      {/* CTA */}
      <a
        href={multi.link_amazon}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className="block"
      >
        <Button
          variant="primary"
          size="lg"
          className="w-full text-lg sm:text-xl px-8 py-5 sm:py-6"
        >
          <ExternalLink className="w-5 h-5 mr-2" />
          Ver na Amazon →
        </Button>
      </a>

      <p className="text-xs text-black font-bold text-center mt-3">
        💡 Compre tudo de uma vez e simplifique sua rotina
      </p>
    </div>
  )
}
