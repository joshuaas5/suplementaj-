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

        {/* Resumo Executivo */}
        {(recomendacoesAlta.length > 0 || recomendacoesMedia.length > 0) && (
          <div className="bg-gradient-to-r from-red-500 to-orange-500 border-4 border-black shadow-[8px_8px_0_0_#000] p-6 mb-12">
            <div className="bg-white border-4 border-black p-6">
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-4 uppercase">
                ⚠️ Resumo da Sua Avaliação
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {recomendacoesAlta.length > 0 && (
                  <div className="bg-red-100 border-2 border-black p-4">
                    <div className="text-4xl font-black text-red-600 mb-1">{recomendacoesAlta.length}</div>
                    <div className="text-sm font-bold text-black uppercase">Deficiências Graves</div>
                  </div>
                )}
                {recomendacoesMedia.length > 0 && (
                  <div className="bg-yellow-100 border-2 border-black p-4">
                    <div className="text-4xl font-black text-orange-600 mb-1">{recomendacoesMedia.length}</div>
                    <div className="text-sm font-bold text-black uppercase">Deficiências Moderadas</div>
                  </div>
                )}
                <div className="bg-lime-100 border-2 border-black p-4">
                  <div className="text-4xl font-black text-green-600 mb-1">
                    {recomendacoesAlta.length + recomendacoesMedia.length}
                  </div>
                  <div className="text-sm font-bold text-black uppercase">Total de Nutrientes Necessários</div>
                </div>
              </div>
              <p className="text-black font-bold mt-4 text-center">
                📋 Veja abaixo cada deficiência identificada e como corrigir
              </p>
            </div>
          </div>
        )}

        {/* Ações - NEOBRUTALISM */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
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
        <div className="mb-12 max-w-3xl mx-auto">
          <SocialShareButtons
            title="Suplementa Já - Minhas Recomendações Personalizadas"
            text="Acabei de descobrir minhas deficiências nutricionais com o Suplementa Já! Faça você também, é grátis! 💊"
          />
        </div>

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

        {/* SOLUÇÃO: MULTIVITAMÍNICOS - Aparece DEPOIS de mostrar o problema */}
        {multivitaminicosRecomendados.length > 0 && (recomendacoesAlta.length > 0 || recomendacoesMedia.length > 0) && (
          <section className="mb-16">
            {/* Banner de Destaque */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 border-8 border-black shadow-[12px_12px_0_0_#000] p-8 mb-8 text-center">
              <div className="inline-block bg-black px-6 py-3 mb-4 border-4 border-black shadow-[6px_6px_0_0_rgba(255,255,255,0.3)] rotate-2">
                <h2 className="text-3xl sm:text-5xl font-black text-yellow-400 uppercase">
                  💡 Solução Inteligente
                </h2>
              </div>
              <div className="bg-white border-4 border-black p-6 max-w-4xl mx-auto">
                <p className="text-xl sm:text-2xl font-black text-black mb-3 leading-tight">
                  Você viu que precisa de <span className="bg-red-400 px-2 py-1">{recomendacoesAlta.length + recomendacoesMedia.length} nutrientes diferentes</span>...
                </p>
                <p className="text-lg sm:text-xl text-black font-bold mb-4">
                  Ao invés de comprar {recomendacoesAlta.length + recomendacoesMedia.length} frascos separados e tomar <span className="bg-yellow-400 px-2 py-1">10+ cápsulas por dia</span>:
                </p>
                <div className="bg-lime-400 border-4 border-black p-6 mb-4">
                  <p className="text-2xl sm:text-3xl font-black text-black uppercase">
                    ✅ Use 1 Multivitamínico Completo
                  </p>
                  <p className="text-lg font-bold text-black mt-2">
                    Que já contém <span className="bg-black text-lime-400 px-2 py-1">{Math.round((multivitaminicosRecomendados[0]?.porcentagem_cobertura || 0))}%</span> do que você precisa!
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                  <div className="bg-cyan-400 border-4 border-black p-4">
                    <div className="text-4xl mb-2">⚡</div>
                    <p className="font-black text-black uppercase text-sm">Apenas 1-2 Cápsulas</p>
                    <p className="text-xs text-black font-bold mt-1">Por dia, sem complicação</p>
                  </div>
                  <div className="bg-pink-400 border-4 border-black p-4">
                    <div className="text-4xl mb-2">💰</div>
                    <p className="font-black text-black uppercase text-sm">Economize Muito</p>
                    <p className="text-xs text-black font-bold mt-1">
                      Até R${multivitaminicosRecomendados[0]?.economia_estimada || 200}/mês
                    </p>
                  </div>
                  <div className="bg-lime-400 border-4 border-black p-4">
                    <div className="text-4xl mb-2">🎯</div>
                    <p className="font-black text-black uppercase text-sm">Super Prático</p>
                    <p className="text-xs text-black font-bold mt-1">1 produto ao invés de {recomendacoesAlta.length + recomendacoesMedia.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards de Multivitamínicos */}
            <div className="grid gap-8 lg:grid-cols-1 xl:grid-cols-2 mb-8">
              {multivitaminicosRecomendados.map((multi, index) => (
                <CardMultivitaminico key={multi.id} multi={multi} ranking={index + 1} />
              ))}
            </div>

            {/* Info adicional */}
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 border-4 border-black shadow-[6px_6px_0_0_#000] p-6 text-center">
              <p className="text-black font-black text-lg sm:text-xl mb-2 uppercase">
                💡 Estratégia Recomendada
              </p>
              <p className="text-black font-bold text-sm sm:text-base">
                Comece com o multivitamínico acima como sua <span className="bg-black text-cyan-400 px-2 py-1">BASE DIÁRIA</span>.
                Se precisar de doses mais altas de algum nutriente específico, complemente com suplementos individuais (veja na seção &quot;Prioridade Baixa&quot; abaixo).
              </p>
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
