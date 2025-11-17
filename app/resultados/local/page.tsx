'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { CardNutriente } from '@/components/resultados/CardNutriente'
import { DisclaimerBanner } from '@/components/layout/DisclaimerBanner'
import { Button } from '@/components/ui/Button'
import { Alert } from '@/components/ui/Alert'
import { Download, Share2 } from 'lucide-react'
import { RecomendacaoEnriquecida } from '@/types'

interface AvaliacaoLocal {
  perfil: unknown
  recomendacoes: RecomendacaoEnriquecida[]
  data: string
}

export default function ResultadosPage() {
  const router = useRouter()
  const [avaliacao, setAvaliacao] = useState<AvaliacaoLocal | null>(null)
  const [loading, setLoading] = useState(true)

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando resultados...</p>
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Suas Recomendações Personalizadas
          </h1>
          <p className="text-gray-600">
            Baseado no perfil fornecido • {new Date(avaliacao.data).toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Disclaimer */}
        <DisclaimerBanner
          variant="warning"
          message="⚠️ IMPORTANTE: Estas recomendações são baseadas em evidências científicas gerais e no perfil que você forneceu. NÃO substituem avaliação médica individualizada. Consulte um nutricionista, nutrólogo ou médico antes de iniciar qualquer suplementação."
        />

        {/* Ações */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Baixar PDF (em breve)
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Compartilhar
          </Button>
          <Link href="/avaliacao">
            <Button variant="outline" size="sm">
              Fazer Nova Avaliação
            </Button>
          </Link>
        </div>

        {/* Recomendações de Prioridade Alta */}
        {recomendacoesAlta.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-success-600 rounded"></div>
              <h2 className="text-2xl font-bold text-gray-900">Prioridade Alta</h2>
            </div>
            <div className="grid gap-6">
              {recomendacoesAlta.map(rec => (
                <CardNutriente key={rec.nutriente_slug} recomendacao={rec} />
              ))}
            </div>
          </section>
        )}

        {/* Recomendações de Prioridade Média */}
        {recomendacoesMedia.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-warning-600 rounded"></div>
              <h2 className="text-2xl font-bold text-gray-900">Prioridade Média</h2>
            </div>
            <div className="grid gap-6">
              {recomendacoesMedia.map(rec => (
                <CardNutriente key={rec.nutriente_slug} recomendacao={rec} />
              ))}
            </div>
          </section>
        )}

        {/* Recomendações de Prioridade Baixa */}
        {recomendacoesBaixa.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-blue-600 rounded"></div>
              <h2 className="text-2xl font-bold text-gray-900">Prioridade Baixa</h2>
            </div>
            <div className="grid gap-6">
              {recomendacoesBaixa.map(rec => (
                <CardNutriente key={rec.nutriente_slug} recomendacao={rec} />
              ))}
            </div>
          </section>
        )}

        {/* Não Recomendados */}
        {naoRecomendados.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-danger-600 rounded"></div>
              <h2 className="text-2xl font-bold text-gray-900">Não Recomendados para Você</h2>
            </div>
            <div className="grid gap-6">
              {naoRecomendados.map(rec => (
                <CardNutriente key={rec.nutriente_slug} recomendacao={rec} />
              ))}
            </div>
          </section>
        )}

        {/* Footer da página de resultados */}
        <Alert variant="info" className="mt-12">
          <div>
            <strong className="block mb-2">Próximos passos:</strong>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Leve essas recomendações para discussão com seu médico ou nutricionista</li>
              <li>Explore cada nutriente para entender melhor suas funções</li>
              <li>Considere fazer exames laboratoriais para confirmar deficiências</li>
              <li>Não inicie suplementação sem orientação profissional</li>
            </ul>
          </div>
        </Alert>

        <div className="text-center mt-8">
          <Link href="/">
            <Button variant="outline">
              Voltar para Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
