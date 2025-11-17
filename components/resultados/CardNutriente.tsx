import Link from 'next/link'
import { CheckCircle2, XCircle, AlertTriangle, ExternalLink } from 'lucide-react'
import { BadgePrioridade } from './BadgePrioridade'
import { Button } from '@/components/ui/Button'
import { RecomendacaoEnriquecida } from '@/types'
import { addAmazonAffiliateTag } from '@/lib/affiliate'

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

  // Nutriente NÃO recomendado - NEOBRUTALISM
  if (prioridade === 'nao_recomendado') {
    return (
      <div className="bg-pink-500 border-4 border-black shadow-[8px_8px_0_0_#000] p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center text-4xl flex-shrink-0">
            {nutriente_completo.emoji}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h3 className="text-2xl font-black text-white uppercase">{nutriente_completo.nome}</h3>
              <div className="bg-black px-3 py-1 border-2 border-black">
                <XCircle className="w-5 h-5 text-pink-500" />
              </div>
            </div>

            <div className="mb-3">
              <BadgePrioridade prioridade={prioridade} />
            </div>

            <div className="bg-white border-4 border-black p-4">
              <p className="text-sm text-black font-bold">
                {contraindicacao || nota_especial}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Nutriente RECOMENDADO - NEOBRUTALISM
  const bgColor = prioridade === 'alta' ? 'bg-lime-400' : prioridade === 'media' ? 'bg-yellow-400' : 'bg-cyan-400'

  return (
    <div className={`${bgColor} border-4 border-black shadow-[8px_8px_0_0_#000] p-6`}>
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center text-4xl flex-shrink-0">
          {nutriente_completo.emoji}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3 className="text-2xl font-black text-black uppercase">{nutriente_completo.nome}</h3>
            <BadgePrioridade prioridade={prioridade} />
          </div>
          <p className="text-sm text-black font-bold italic">{nutriente_completo.nome_cientifico}</p>
        </div>
      </div>

      {/* Por que para você */}
      {motivos.length > 0 && (
        <div className="mb-4">
          <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
            <h4 className="text-sm font-black text-yellow-400 uppercase">📌 Por que para você?</h4>
          </div>
          <ul className="space-y-2">
            {motivos.map((motivo, i) => (
              <li key={i} className="flex items-start gap-3 bg-white border-2 border-black p-3">
                <CheckCircle2 className="w-5 h-5 text-black mt-0.5 flex-shrink-0 font-black" />
                <span className="text-sm text-black font-bold">{motivo}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Dosagem */}
      <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-4 mb-4">
        <div className="bg-black px-3 py-1 mb-2 inline-block border-2 border-black">
          <h4 className="text-sm font-black text-lime-400 uppercase">💊 Dose recomendada</h4>
        </div>
        <p className="text-2xl font-black text-black">
          {dose_min === dose_max ? (
            `${dose_min} ${unidade}/dia`
          ) : (
            `${dose_min}-${dose_max} ${unidade}/dia`
          )}
        </p>
        {nutriente_completo.dosagem?.limite_superior && (
          <p className="text-xs text-black font-bold mt-2 bg-pink-500 text-white border-2 border-black p-2 inline-block">
            ⚠️ Limite seguro: {nutriente_completo.dosagem.limite_superior.valor}{' '}
            {nutriente_completo.dosagem.limite_superior.unidade}/dia
          </p>
        )}
      </div>

      {/* Nota especial */}
      {nota_especial && (
        <div className="bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 mb-4">
          <div className="flex gap-3">
            <div className="bg-black p-2 border-2 border-black flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-sm text-black font-bold">{nota_especial}</p>
          </div>
        </div>
      )}

      {/* Link para evidência científica */}
      {nutriente_completo.evidencias && nutriente_completo.evidencias.length > 0 && (
        <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-6 mb-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black">
                <ExternalLink className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-black px-3 py-1 mb-2 inline-block border-2 border-black">
                <h4 className="text-sm font-black text-lime-400 uppercase">📚 Evidência Científica</h4>
              </div>
              <p className="text-sm text-black font-bold mb-2">{nutriente_completo.evidencias[0].titulo}</p>
              {nutriente_completo.evidencias[0].citacao_chave && (
                <p className="text-xs text-black italic mb-3 bg-cyan-400 border-2 border-black p-3 font-bold">
                  &ldquo;{nutriente_completo.evidencias[0].citacao_chave}&rdquo;
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {nutriente_completo.evidencias[0].doi && (
                  <a
                    href={`https://doi.org/${nutriente_completo.evidencias[0].doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" size="sm">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Ver estudo (DOI)
                    </Button>
                  </a>
                )}
                {nutriente_completo.evidencias[0].pmid && (
                  <a
                    href={`https://pubmed.ncbi.nlm.nih.gov/${nutriente_completo.evidencias[0].pmid}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="success" size="sm">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      PubMed
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Links de produtos */}
      {nutriente_completo.afiliados?.amazon && nutriente_completo.afiliados.amazon.length > 0 && (
        <div className="border-t-4 border-black pt-4 mt-4">
          <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
            <h4 className="text-sm font-black text-yellow-400 uppercase">🛒 Onde comprar</h4>
          </div>
          <div className="space-y-3">
            {nutriente_completo.afiliados.amazon.slice(0, 2).map((produto, i) => (
              <a
                key={i}
                href={addAmazonAffiliateTag(produto.link)}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="flex items-center justify-between p-4 bg-white border-4 border-black shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] transition-all"
              >
                <div className="flex-1">
                  <p className="text-sm font-black text-black uppercase">{produto.nome}</p>
                  {produto.preco_aprox && (
                    <p className="text-xs text-black font-bold">~R$ {produto.preco_aprox.toFixed(2)}</p>
                  )}
                </div>
                <div className="bg-black p-2 border-2 border-black ml-3">
                  <ExternalLink className="w-4 h-4 text-yellow-400" />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Botão para página completa */}
      <Link
        href={`/nutrientes/${nutriente_completo.slug}`}
        className="block mt-4"
      >
        <Button variant="outline" size="sm" className="w-full">
          Ver detalhes completos sobre {nutriente_completo.nome} →
        </Button>
      </Link>
    </div>
  )
}
