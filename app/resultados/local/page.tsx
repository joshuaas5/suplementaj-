'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { CardNutriente } from '@/components/resultados/CardNutriente'
import { CardMultivitaminico } from '@/components/resultados/CardMultivitaminico'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'
import { Button } from '@/components/ui/Button'
import { RewardedAdModal } from '@/components/ads/RewardedAdModal'
import { Download } from 'lucide-react'
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

        {/* Resumo de Recomendações - NEOBRUTALISM */}
        <div className="bg-gradient-to-r from-lime-400 via-yellow-400 to-cyan-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 mb-8">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {recomendacoesAlta.length > 0 && (
              <div className="bg-white border-4 border-black px-6 py-3 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">🔥</span>
                  <div>
                    <div className="text-2xl font-black text-black">{recomendacoesAlta.length}</div>
                    <div className="text-xs font-bold text-black uppercase">Alta</div>
                  </div>
                </div>
              </div>
            )}
            {recomendacoesMedia.length > 0 && (
              <div className="bg-white border-4 border-black px-6 py-3 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <div className="text-2xl font-black text-black">{recomendacoesMedia.length}</div>
                    <div className="text-xs font-bold text-black uppercase">Média</div>
                  </div>
                </div>
              </div>
            )}
            {recomendacoesBaixa.length > 0 && (
              <div className="bg-white border-4 border-black px-6 py-3 shadow-[4px_4px_0_0_#000]">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">💡</span>
                  <div>
                    <div className="text-2xl font-black text-black">{recomendacoesBaixa.length}</div>
                    <div className="text-xs font-bold text-black uppercase">Baixa</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Multivitamínicos Recomendados - SEÇÃO ESPECIAL */}
        {multivitaminicosRecomendados.length > 0 && (
          <section className="mb-16">
            <div className="bg-pink-500 border-8 border-black shadow-[8px_8px_0_0_#000] sm:shadow-[12px_12px_0_0_#000] p-6 sm:p-8 mb-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-3 mb-4 sm:-rotate-2">
                  <h2 className="text-2xl sm:text-4xl font-black text-black uppercase">
                    💊 Opção Prática: Complexos Multivitamínicos
                  </h2>
                </div>
                <div className="bg-white border-4 border-black p-4 sm:p-6 max-w-3xl mx-auto">
                  <p className="text-black font-bold text-base sm:text-lg leading-relaxed">
                    <span className="bg-lime-400 px-2 py-1">Simplifique sua vida!</span> Ao invés de comprar{' '}
                    {recomendacoesAlta.length + recomendacoesMedia.length} suplementos individuais,
                    considere um <span className="bg-cyan-400 px-2 py-1">complexo multivitamínico</span> que já
                    contém vários dos nutrientes que você precisa.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    <div className="bg-lime-400 border-2 border-black px-4 py-2">
                      <p className="font-black text-black text-sm">✅ Menos cápsulas por dia</p>
                    </div>
                    <div className="bg-cyan-400 border-2 border-black px-4 py-2">
                      <p className="font-black text-black text-sm">💰 Mais econômico</p>
                    </div>
                    <div className="bg-yellow-400 border-2 border-black px-4 py-2">
                      <p className="font-black text-black text-sm">🎯 Mais prático</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards de Multivitamínicos */}
            <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2">
              {multivitaminicosRecomendados.map((multi, index) => (
                <CardMultivitaminico key={multi.id} multi={multi} ranking={index + 1} />
              ))}
            </div>

            {/* Info adicional */}
            <div className="mt-8 bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-6 text-center">
              <p className="text-black font-bold text-sm sm:text-base">
                💡 <strong>Dica:</strong> Você pode usar um multivitamínico como <span className="bg-black text-cyan-400 px-2 py-1">base</span> e
                complementar apenas com os nutrientes específicos que precisa em <span className="bg-black text-cyan-400 px-2 py-1">doses mais altas</span> (veja abaixo).
              </p>
            </div>
          </section>
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

        {/* Recomendações de Prioridade Média - NEOBRUTALISM */}
        {recomendacoesMedia.length > 0 && (
          <section className="mb-12">
            <div className="bg-yellow-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 mb-6 inline-block sm:rotate-1">
              <h2 className="text-xl sm:text-3xl font-black text-black uppercase">⚡ Prioridade Média</h2>
            </div>
            <div className="grid gap-4 sm:gap-6">
              {recomendacoesMedia.map(rec => (
                <CardNutriente key={rec.nutriente_slug} recomendacao={rec} perfil={avaliacao.perfil} />
              ))}
            </div>
          </section>
        )}

        {/* Recomendações de Prioridade Baixa - NEOBRUTALISM */}
        {recomendacoesBaixa.length > 0 && (
          <section className="mb-12">
            <div className="bg-cyan-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 mb-6 inline-block sm:-rotate-1">
              <h2 className="text-xl sm:text-3xl font-black text-black uppercase">💡 Prioridade Baixa</h2>
            </div>
            <div className="grid gap-4 sm:gap-6">
              {recomendacoesBaixa.map(rec => (
                <CardNutriente key={rec.nutriente_slug} recomendacao={rec} perfil={avaliacao.perfil} />
              ))}
            </div>
          </section>
        )}

        {/* Não Recomendados - NEOBRUTALISM */}
        {naoRecomendados.length > 0 && (
          <section className="mb-12">
            <div className="bg-pink-500 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] px-4 py-2 sm:px-6 sm:py-3 mb-6 inline-block sm:rotate-1">
              <h2 className="text-xl sm:text-3xl font-black text-white uppercase">⛔ Não Recomendados</h2>
            </div>
            <div className="grid gap-4 sm:gap-6">
              {naoRecomendados.map(rec => (
                <CardNutriente key={rec.nutriente_slug} recomendacao={rec} perfil={avaliacao.perfil} />
              ))}
            </div>
          </section>
        )}

        {/* Ações - Baixar PDF e Compartilhar */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center mb-6">
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

          {/* Compartilhar nas Redes Sociais */}
          <div className="max-w-3xl mx-auto">
            <SocialShareButtons
              title="Suplementa Já - Minhas Recomendações Personalizadas"
              text="Acabei de descobrir minhas deficiências nutricionais com o Suplementa Já! Faça você também, é grátis! 💊"
            />
          </div>
        </div>

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
