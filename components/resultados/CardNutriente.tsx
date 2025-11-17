import Link from 'next/link'
import { CheckCircle2, XCircle, AlertTriangle, ExternalLink } from 'lucide-react'
import { BadgePrioridade } from './BadgePrioridade'
import { RecomendacaoEnriquecida } from '@/types'

interface CardNutrienteProps {
  recomendacao: RecomendacaoEnriquecida
}

export function CardNutriente({ recomendacao }: CardNutrienteProps) {
  const {
    nutriente_completo,
    prioridade,
    dose_min,
    dose_max,
    unidade,
    motivos,
    nota_especial,
    contraindicacao,
  } = recomendacao

  // Nutriente NÃO recomendado
  if (prioridade === 'nao_recomendado') {
    return (
      <div className="bg-white border-2 border-danger-200 rounded-lg p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{nutriente_completo.emoji}</div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900">{nutriente_completo.nome}</h3>
              <XCircle className="w-5 h-5 text-danger-600" />
            </div>

            <BadgePrioridade prioridade={prioridade} />

            <div className="mt-4 bg-danger-50 border border-danger-200 rounded-lg p-4">
              <p className="text-sm text-danger-800 font-medium">
                {contraindicacao || nota_especial}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Nutriente RECOMENDADO
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="text-4xl">{nutriente_completo.emoji}</div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-xl font-bold text-gray-900">{nutriente_completo.nome}</h3>
            <BadgePrioridade prioridade={prioridade} />
          </div>
          <p className="text-sm text-gray-600">{nutriente_completo.nome_cientifico}</p>
        </div>
      </div>

      {/* Por que para você */}
      {motivos.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">📌 Por que para você?</h4>
          <ul className="space-y-1">
            {motivos.map((motivo, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-success-600 mt-0.5 flex-shrink-0" />
                <span>{motivo}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Dosagem */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">💊 Dose recomendada</h4>
        <p className="text-lg font-bold text-primary-600">
          {dose_min === dose_max ? (
            `${dose_min} ${unidade}/dia`
          ) : (
            `${dose_min}-${dose_max} ${unidade}/dia`
          )}
        </p>
        {nutriente_completo.dosagem?.limite_superior && (
          <p className="text-xs text-gray-500 mt-1">
            ⚠️ Limite seguro: {nutriente_completo.dosagem.limite_superior.valor}{' '}
            {nutriente_completo.dosagem.limite_superior.unidade}/dia
          </p>
        )}
      </div>

      {/* Nota especial */}
      {nota_especial && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
          <div className="flex gap-2">
            <AlertTriangle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-blue-800">{nota_especial}</p>
          </div>
        </div>
      )}

      {/* Links de produtos (placeholders) */}
      {nutriente_completo.afiliados?.amazon && nutriente_completo.afiliados.amazon.length > 0 && (
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-3">🛒 Onde comprar</h4>
          <div className="space-y-2">
            {nutriente_completo.afiliados.amazon.slice(0, 2).map((produto, i) => (
              <a
                key={i}
                href={produto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{produto.nome}</p>
                  {produto.preco_aprox && (
                    <p className="text-xs text-gray-500">~R$ {produto.preco_aprox}</p>
                  )}
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Botão para página completa */}
      <Link
        href={`/nutrientes/${nutriente_completo.slug}`}
        className="block mt-4 text-center text-sm text-primary-600 hover:text-primary-700 font-medium"
      >
        Ver detalhes completos sobre {nutriente_completo.nome} →
      </Link>
    </div>
  )
}
