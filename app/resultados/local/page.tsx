'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { CardNutriente } from '@/components/resultados/CardNutriente'
import { CardMultivitaminico } from '@/components/resultados/CardMultivitaminico'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'
import { Button } from '@/components/ui/Button'
import { RewardedAdModal } from '@/components/ads/RewardedAdModal'
import { Download, ChevronDown, ChevronUp } from 'lucide-react'
import { RecomendacaoEnriquecida } from '@/types'
import { Perfil } from '@/types/perfil'
import { gerarPDFResultados } from '@/lib/pdf'
import { recomendarMultivitaminicos } from '@/lib/recomendar-multivitaminicos'
import { SocialShareButtons } from '@/components/marketing/SocialShareButtons'
import { trackPDFDownload, trackResultsView } from '@/lib/analytics'

interface AvaliacaoLocal {
  perfil: Perfil
  recomendacoes: RecomendacaoEnriquecida[]
  data: string
}

export default function ResultadosPage() {
  const router = useRouter()
  const [avaliacao, setAvaliacao] = useState<AvaliacaoLocal | null>(null)
  const [loading, setLoading] = useState(true)
  const [downloadingPDF, setDownloadingPDF] = useState(false)
  const [showRewardedAd, setShowRewardedAd] = useState(true)
  const [adWatched, setAdWatched] = useState(false)
  const [showMedia, setShowMedia] = useState(false)
  const [showBaixa, setShowBaixa] = useState(false)
  const [showNaoRecomendados, setShowNaoRecomendados] = useState(false)

  const handleAdComplete = () => {
    setAdWatched(true)
    setShowRewardedAd(false)
  }

  const handleDownloadPDF = () => {
    if (!avaliacao) return

    try {
      setDownloadingPDF(true)
      gerarPDFResultados(avaliacao.perfil, avaliacao.recomendacoes)

      // Rastrear download no Google Analytics
      trackPDFDownload()
    } catch (error) {
      console.error('Erro ao gerar PDF:', error)
      alert('Erro ao gerar PDF. Por favor, tente novamente.')
    } finally {
      setDownloadingPDF(false)
    }
  }

  useEffect(() => {
    // Carregar do localStorage
    const data = localStorage.getItem('ultima_avaliacao')
    if (!data) {
      router.push('/avaliacao')
      return
    }

    try {
      const parsed = JSON.parse(data)
      setAvaliacao(parsed)
    } catch (error) {
      console.error('Erro ao carregar avaliação:', error)
      router.push('/avaliacao')
    } finally {
      setLoading(false)
    }
  }, [router])

  // Rastrear visualização dos resultados
  useEffect(() => {
    if (avaliacao && !showRewardedAd) {
      trackResultsView(avaliacao.recomendacoes.length)
    }
  }, [avaliacao, showRewardedAd])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-yellow-400">
        <div className="text-center">
          <div className="w-16 h-16 border-8 border-black border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="bg-black px-6 py-3 border-4 border-black">
            <p className="text-yellow-400 font-black uppercase">Carregando resultados...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!avaliacao) {
    return null
  }

  const recomendacoesAlta = avaliacao.recomendacoes.filter(r => r.prioridade === 'alta')
  const recomendacoesMedia = avaliacao.recomendacoes.filter(r => r.prioridade === 'media')
  const recomendacoesBaixa = avaliacao.recomendacoes.filter(r => r.prioridade === 'baixa')
  const naoRecomendados = avaliacao.recomendacoes.filter(r => r.prioridade === 'nao_recomendado')

  // Recomendar multivitamínicos baseado nas necessidades
  const multivitaminicosRecomendados = recomendarMultivitaminicos(avaliacao.recomendacoes, avaliacao.perfil)

  // Mostrar Rewarded Ad antes de exibir resultados
  if (showRewardedAd && !adWatched) {
    return <RewardedAdModal onComplete={handleAdComplete} waitTime={8} />
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - NEOBRUTALISM */}
        <div className="text-center mb-8">
          <div className="inline-block bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] px-4 py-2 sm:px-8 sm:py-4 mb-4 sm:rotate-1">
            <h1 className="text-2xl sm:text-4xl font-black text-black uppercase">
              Suas Recomendações
            </h1>
          </div>
          <div className="bg-white border-4 border-black p-3 sm:p-4 inline-block">
            <p className="text-black font-bold">
              Baseado no perfil fornecido • {new Date(avaliacao.data).toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <DisclaimerBanner
          variant="warning"
          message="⚠️ IMPORTANTE: Estas recomendações são baseadas em evidências científicas gerais e no perfil que você forneceu. Para orientação personalizada, o ideal é consultar um nutricionista, nutrólogo ou médico."
        />

        {/* Resumo Informativo - Clean */}
        {(recomendacoesAlta.length > 0 || recomendacoesMedia.length > 0) && (
          <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-400 border-4 border-black flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl">📋</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black text-black mb-2">
                  Sua Análise Nutricional
                </h3>
                <p className="text-black font-bold mb-3 text-sm sm:text-base">
                  Com base no seu perfil, identificamos{' '}
                  <span className="bg-yellow-400 px-2 py-1">{recomendacoesAlta.length + recomendacoesMedia.length} nutrientes</span>{' '}
                  que você pode precisar suplementar para otimizar sua saúde.
                </p>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                  {recomendacoesAlta.length > 0 && (
                    <div className="bg-lime-100 border-2 border-black px-3 py-1">
                      <span className="font-black">{recomendacoesAlta.length}</span> de alta prioridade
                    </div>
                  )}
                  {recomendacoesMedia.length > 0 && (
                    <div className="bg-cyan-100 border-2 border-black px-3 py-1">
                      <span className="font-black">{recomendacoesMedia.length}</span> de média prioridade
                    </div>
                  )}
                  {recomendacoesBaixa.length > 0 && (
                    <div className="bg-gray-100 border-2 border-black px-3 py-1">
                      <span className="font-black">{recomendacoesBaixa.length}</span> de baixa prioridade
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recomendações de Prioridade Alta - NEOBRUTALISM */}
        {recomendacoesAlta.length > 0 && (
          <section className="mb-12">
            <div className="bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 mb-6 inline-block sm:-rotate-1">
              <h2 className="text-xl sm:text-3xl font-black text-black uppercase">🔥 Prioridade Alta</h2>
            </div>
            <div className="grid gap-4 sm:gap-6">
              {recomendacoesAlta.map(rec => (
                <CardNutriente key={rec.nutriente_slug} recomendacao={rec} perfil={avaliacao.perfil} />
              ))}
            </div>
          </section>
        )}

        {/* Recomendações de Prioridade Média - COLAPSÁVEL */}
        {recomendacoesMedia.length > 0 && (
          <section className="mb-12">
            <div
              className="bg-yellow-100 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 cursor-pointer hover:shadow-[6px_6px_0_0_#000] transition-all"
              onClick={() => setShowMedia(!showMedia)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-black text-black uppercase">Prioridade Média</h2>
                    <p className="text-sm text-black font-bold">
                      {recomendacoesMedia.length} nutriente{recomendacoesMedia.length > 1 ? 's' : ''} recomendado{recomendacoesMedia.length > 1 ? 's' : ''}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="text-xs font-bold text-black hidden sm:inline">
                    {showMedia ? 'recolher' : 'ver mais'}
                  </span>
                  {showMedia ? (
                    <ChevronUp className="w-8 h-8 text-black" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-black" />
                  )}
                </div>
              </div>
            </div>

            {showMedia && (
              <div className="grid gap-4 sm:gap-6 mt-4">
                {recomendacoesMedia.map(rec => (
                  <CardNutriente key={rec.nutriente_slug} recomendacao={rec} perfil={avaliacao.perfil} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* SOLUÇÃO: MULTIVITAMÍNICOS - Aparece DEPOIS de mostrar o problema */}
        {multivitaminicosRecomendados.length > 0 && (recomendacoesAlta.length > 0 || recomendacoesMedia.length > 0) && (
          <section className="mb-16">
            {/* Banner de Destaque - MAIS CLEAN */}
            <div className="bg-yellow-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mb-8">
              <div className="text-center mb-4">
                <h2 className="text-2xl sm:text-4xl font-black text-black uppercase mb-3">
                  💡 Simplifique: Use 1 Multivitamínico
                </h2>
                <p className="text-base sm:text-lg text-black font-bold max-w-3xl mx-auto">
                  Ao invés de {recomendacoesAlta.length + recomendacoesMedia.length} suplementos separados,
                  um multivitamínico cobre <span className="bg-black text-yellow-400 px-2 py-1">{Math.round((multivitaminicosRecomendados[0]?.porcentagem_cobertura || 0))}%</span> das suas necessidades
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto">
                <div className="bg-white border-2 border-black p-3 text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <p className="font-black text-black text-xs sm:text-sm">1-2 Cápsulas/dia</p>
                </div>
                <div className="bg-white border-2 border-black p-3 text-center">
                  <div className="text-2xl mb-1">💰</div>
                  <p className="font-black text-black text-xs sm:text-sm">Economize R${multivitaminicosRecomendados[0]?.economia_estimada || 200}</p>
                </div>
                <div className="bg-white border-2 border-black p-3 text-center">
                  <div className="text-2xl mb-1">🎯</div>
                  <p className="font-black text-black text-xs sm:text-sm">Mais Prático</p>
                </div>
              </div>
            </div>

            {/* Cards de Multivitamínicos */}
            <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2 mb-6">
              {multivitaminicosRecomendados.map((multi, index) => (
                <CardMultivitaminico key={multi.id} multi={multi} ranking={index + 1} />
              ))}
            </div>

            {/* Dica simplificada */}
            <div className="bg-cyan-100 border-2 border-black p-4 text-center">
              <p className="text-black font-bold text-sm">
                💡 Use o multivitamínico como base e complemente apenas se precisar de doses mais altas de nutrientes específicos
              </p>
            </div>
          </section>
        )}

        {/* Recomendações de Prioridade Baixa - COLAPSÁVEL */}
        {recomendacoesBaixa.length > 0 && (
          <section className="mb-12">
            <div
              className="bg-cyan-100 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 cursor-pointer hover:shadow-[6px_6px_0_0_#000] transition-all"
              onClick={() => setShowBaixa(!showBaixa)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-black text-black uppercase">Prioridade Baixa</h2>
                    <p className="text-sm text-black font-bold">
                      {recomendacoesBaixa.length} nutriente{recomendacoesBaixa.length > 1 ? 's' : ''} opcional{recomendacoesBaixa.length > 1 ? 'ais' : ''}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="text-xs font-bold text-black hidden sm:inline">
                    {showBaixa ? 'recolher' : 'ver mais'}
                  </span>
                  {showBaixa ? (
                    <ChevronUp className="w-8 h-8 text-black" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-black" />
                  )}
                </div>
              </div>
            </div>

            {showBaixa && (
              <div className="grid gap-4 sm:gap-6 mt-4">
                {recomendacoesBaixa.map(rec => (
                  <CardNutriente key={rec.nutriente_slug} recomendacao={rec} perfil={avaliacao.perfil} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Não Recomendados - COLAPSÁVEL */}
        {naoRecomendados.length > 0 && (
          <section className="mb-12">
            <div
              className="bg-pink-100 border-4 border-black shadow-[4px_4px_0_0_#000] p-4 cursor-pointer hover:shadow-[6px_6px_0_0_#000] transition-all"
              onClick={() => setShowNaoRecomendados(!showNaoRecomendados)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⛔</span>
                  <div>
                    <h2 className="text-lg sm:text-2xl font-black text-black uppercase">Não Recomendados</h2>
                    <p className="text-sm text-black font-bold">
                      {naoRecomendados.length} nutriente{naoRecomendados.length > 1 ? 's' : ''} que você não precisa
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="text-xs font-bold text-black hidden sm:inline">
                    {showNaoRecomendados ? 'recolher' : 'ver mais'}
                  </span>
                  {showNaoRecomendados ? (
                    <ChevronUp className="w-8 h-8 text-black" />
                  ) : (
                    <ChevronDown className="w-8 h-8 text-black" />
                  )}
                </div>
              </div>
            </div>

            {showNaoRecomendados && (
              <div className="grid gap-4 sm:gap-6 mt-4">
                {naoRecomendados.map(rec => (
                  <CardNutriente key={rec.nutriente_slug} recomendacao={rec} perfil={avaliacao.perfil} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Footer da página de resultados - NEOBRUTALISM */}
        <div className="bg-yellow-400 border-4 sm:border-8 border-black shadow-[6px_6px_0_0_#000] sm:shadow-[12px_12px_0_0_#000] p-4 sm:p-8 mt-12">
          <div className="bg-black px-4 py-2 mb-4 inline-block border-2 border-black">
            <strong className="text-yellow-400 font-black uppercase">Próximos passos:</strong>
          </div>
          <ul className="text-sm space-y-3">
            <li className="flex items-start gap-3 bg-white border-2 border-black p-2 sm:p-3">
              <span className="text-black font-black">1.</span>
              <span className="text-black font-bold">Leve essas recomendações para discussão com seu médico ou nutricionista</span>
            </li>
            <li className="flex items-start gap-3 bg-white border-2 border-black p-2 sm:p-3">
              <span className="text-black font-black">2.</span>
              <span className="text-black font-bold">Explore cada nutriente para entender melhor suas funções</span>
            </li>
            <li className="flex items-start gap-3 bg-white border-2 border-black p-2 sm:p-3">
              <span className="text-black font-black">3.</span>
              <span className="text-black font-bold">Considere fazer exames laboratoriais para confirmar deficiências</span>
            </li>
            <li className="flex items-start gap-3 bg-white border-2 border-black p-2 sm:p-3">
              <span className="text-black font-black">4.</span>
              <span className="text-black font-bold">Não inicie suplementação sem orientação profissional</span>
            </li>
          </ul>
        </div>

        {/* Ações no final - Compartilhar e PDF */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleDownloadPDF}
              loading={downloadingPDF}
              disabled={downloadingPDF}
            >
              <Download className="w-5 h-5 mr-2" />
              {downloadingPDF ? 'Gerando PDF...' : 'Baixar PDF'}
            </Button>
            <Link href="/avaliacao">
              <Button variant="outline" size="lg">
                Fazer Nova Avaliação
              </Button>
            </Link>
          </div>

          {/* Compartilhar nas Redes Sociais - FINAL DA PÁGINA */}
          <div className="max-w-3xl mx-auto">
            <SocialShareButtons
              title="Suplementa Já - Minhas Recomendações Personalizadas"
              text="Acabei de descobrir minhas deficiências nutricionais com o Suplementa Já! Faça você também, é grátis! 💊"
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/">
            <Button variant="outline" size="lg">
              Voltar para Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
