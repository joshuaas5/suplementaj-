'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAvaliacao } from '@/context/AvaliacaoContext'
import { ProgressBar } from '@/components/avaliacao/ProgressBar'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { gerarRecomendacoes, enriquecerRecomendacoes } from '@/lib/recomendacoes'
import { Perfil } from '@/types'

export default function Passo6Page() {
  const router = useRouter()
  const { perfil, setPassoAtual } = useAvaliacao()
  const [loading, setLoading] = useState(false)

  const handleBack = () => {
    setPassoAtual(5)
    router.push('/avaliacao/passo-5')
  }

  const handleSubmit = async () => {
    setLoading(true)

    try {
      // Gerar recomendações localmente (sem API por enquanto)
      const recomendacoes = gerarRecomendacoes(perfil as Perfil)
      const recomendacoesEnriquecidas = enriquecerRecomendacoes(recomendacoes)

      // Salvar recomendações no localStorage para exibir na página de resultados
      localStorage.setItem('ultima_avaliacao', JSON.stringify({
        perfil,
        recomendacoes: recomendacoesEnriquecidas,
        data: new Date().toISOString(),
      }))

      // Redirecionar para resultados
      router.push('/resultados/local')
    } catch (error) {
      console.error('Erro ao gerar recomendações:', error)
      alert('Ocorreu um erro ao gerar as recomendações. Por favor, tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const getDietaLabel = (dieta?: string) => {
    const labels: Record<string, string> = {
      onivora: 'Onívora',
      vegetariana: 'Vegetariana',
      vegana: 'Vegana',
    }
    return dieta ? labels[dieta] : '-'
  }

  const getExposicaoLabel = (exposicao?: string) => {
    const labels: Record<string, string> = {
      minima: 'Mínima',
      moderada: 'Moderada',
      frequente: 'Frequente',
    }
    return exposicao ? labels[exposicao] : '-'
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <ProgressBar currentStep={6} totalSteps={6} />

      <Card className="p-8">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-8 h-8 text-success-600" />
          <h1 className="text-2xl font-bold text-gray-900">Resumo da Avaliação</h1>
        </div>
        <p className="text-gray-600 mb-6">
          Revise suas informações antes de gerar as recomendações
        </p>

        <div className="space-y-6">
          {/* Informações Básicas */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Informações Básicas</h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Idade:</span>
                <span className="font-medium">{perfil.idade} anos</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sexo:</span>
                <span className="font-medium">{perfil.sexo === 'F' ? 'Feminino' : 'Masculino'}</span>
              </div>
              {perfil.peso && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Peso:</span>
                  <span className="font-medium">{perfil.peso} kg</span>
                </div>
              )}
              {perfil.altura && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Altura:</span>
                  <span className="font-medium">{perfil.altura} cm</span>
                </div>
              )}
            </div>
          </div>

          {/* Estilo de Vida */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Estilo de Vida</h2>
            <div className="bg-gray-50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Dieta:</span>
                <span className="font-medium">{getDietaLabel(perfil.dieta)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Exposição solar:</span>
                <span className="font-medium">{getExposicaoLabel(perfil.exposicao_solar)}</span>
              </div>
            </div>
          </div>

          {/* Condições de Saúde */}
          {perfil.condicoes_saude && perfil.condicoes_saude.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Condições de Saúde</h2>
              <div className="flex flex-wrap gap-2">
                {perfil.condicoes_saude.map((condicao) => (
                  <Badge key={condicao} variant="info">
                    {condicao}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Medicamentos */}
          {perfil.medicamentos && perfil.medicamentos.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Medicamentos</h2>
              <div className="flex flex-wrap gap-2">
                {perfil.medicamentos.map((med) => (
                  <Badge key={med} variant="warning">
                    {med}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Sintomas */}
          {perfil.sintomas && perfil.sintomas.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Sintomas</h2>
              <div className="flex flex-wrap gap-2">
                {perfil.sintomas.map((sintoma) => (
                  <Badge key={sintoma} variant="neutral">
                    {sintoma}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-4">
          <p className="text-sm text-primary-800">
            ✨ <strong>Pronto!</strong> Com base nas suas informações, vamos gerar recomendações
            personalizadas de suplementação com dosagens e referências científicas.
          </p>
        </div>

        <div className="flex justify-between pt-6">
          <Button type="button" variant="outline" onClick={handleBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Button
            onClick={handleSubmit}
            size="lg"
            variant="success"
            loading={loading}
            disabled={loading}
          >
            {loading ? 'Gerando recomendações...' : 'Gerar Recomendações'}
          </Button>
        </div>
      </Card>
    </div>
  )
}
