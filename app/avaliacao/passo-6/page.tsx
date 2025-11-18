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
import { trackQuizComplete } from '@/lib/analytics'

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

      // Rastrear conclusão do quiz no Google Analytics
      trackQuizComplete(perfil)

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

  const getCondicaoLabel = (condicao: string) => {
    const labels: Record<string, string> = {
      osteoporose: 'Osteoporose',
      osteopenia: 'Osteopenia',
      diabetes: 'Diabetes tipo 2',
      cardiovascular: 'Doença cardiovascular',
      hipertensao: 'Hipertensão (pressão alta)',
      depressao: 'Depressão',
      ansiedade: 'Ansiedade',
      anemia: 'Anemia',
      hipotireoidismo: 'Hipotireoidismo (tireoide)',
      hemocromatose: 'Hemocromatose (excesso de ferro)',
      doenca_celiaca: 'Doença celíaca',
      doenca_crohn: 'Doença de Crohn',
      gastrite: 'Gastrite',
    }
    return labels[condicao] || condicao
  }

  const getMedicamentoLabel = (medicamento: string) => {
    const labels: Record<string, string> = {
      metformina: 'Metformina (diabetes)',
      omeprazol: 'Omeprazol / Pantoprazol (IBP - estômago)',
      antiácidos: 'Antiácidos (azia)',
      varfarina: 'Varfarina (anticoagulante)',
      aspirina: 'AAS / Aspirina',
      estatinas: 'Estatinas (colesterol)',
      corticosteroides: 'Corticosteroides (anti-inflamatórios)',
      diureticos: 'Diuréticos (pressão alta)',
      levotiroxina: 'Levotiroxina (hormônio da tireoide)',
      antibioticos: 'Antibióticos (uso contínuo)',
      anticonvulsivantes: 'Anticonvulsivantes',
      bariátrica: 'Cirurgia bariátrica (redução de estômago)',
      gastrectomia: 'Gastrectomia (retirada parcial/total do estômago)',
    }
    return labels[medicamento] || medicamento
  }

  const getSintomaLabel = (sintoma: string) => {
    const labels: Record<string, string> = {
      fadiga: 'Fadiga / Cansaço excessivo',
      caimbras: 'Cãibras musculares frequentes',
      formigamento: 'Formigamento em mãos/pés',
      'imunidade baixa': 'Imunidade baixa (resfriados frequentes)',
      queda_cabelo: 'Queda de cabelo',
      unhas_fracas: 'Unhas fracas/quebradiças',
      pele_seca: 'Pele muito seca',
      dores_musculares: 'Dores musculares/ósseas',
      insonia: 'Insônia / Dificuldade para dormir',
      ansiedade_sintoma: 'Ansiedade',
      problemas_memoria: 'Problemas de memória/concentração',
      tontura: 'Tonturas frequentes',
      palpitacoes: 'Palpitações cardíacas',
      falta_ar: 'Falta de ar ao esforço',
    }
    return labels[sintoma] || sintoma
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <ProgressBar currentStep={6} totalSteps={6} />

      <Card className="p-4 sm:p-8 bg-yellow-400">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-black flex items-center justify-center border-2 border-black">
            <CheckCircle2 className="w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-xl sm:text-3xl font-black text-black uppercase">Resumo da Avaliação</h1>
        </div>
        <div className="bg-white border-4 border-black p-4 mb-6">
          <p className="text-black font-bold">
            Revise suas informações antes de gerar as recomendações
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {/* Informações Básicas */}
          <div>
            <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
              <h2 className="text-lg font-black text-yellow-400 uppercase">Informações Básicas</h2>
            </div>
            <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4 space-y-3">
              <div className="flex justify-between border-b-2 border-black pb-2">
                <span className="text-black font-bold uppercase text-sm">Idade:</span>
                <span className="font-black text-black text-lg">{perfil.idade} anos</span>
              </div>
              <div className="flex justify-between border-b-2 border-black pb-2">
                <span className="text-black font-bold uppercase text-sm">Sexo:</span>
                <span className="font-black text-black text-lg">{perfil.sexo === 'F' ? 'Feminino' : 'Masculino'}</span>
              </div>
              {perfil.peso && (
                <div className="flex justify-between border-b-2 border-black pb-2">
                  <span className="text-black font-bold uppercase text-sm">Peso:</span>
                  <span className="font-black text-black text-lg">{perfil.peso} kg</span>
                </div>
              )}
              {perfil.altura && (
                <div className="flex justify-between">
                  <span className="text-black font-bold uppercase text-sm">Altura:</span>
                  <span className="font-black text-black text-lg">{perfil.altura} cm</span>
                </div>
              )}
            </div>
          </div>

          {/* Estilo de Vida */}
          <div>
            <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
              <h2 className="text-lg font-black text-cyan-400 uppercase">Estilo de Vida</h2>
            </div>
            <div className="bg-white border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-4 space-y-3">
              <div className="flex justify-between border-b-2 border-black pb-2">
                <span className="text-black font-bold uppercase text-sm">Dieta:</span>
                <span className="font-black text-black text-lg">{getDietaLabel(perfil.dieta)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-black font-bold uppercase text-sm">Exposição solar:</span>
                <span className="font-black text-black text-lg">{getExposicaoLabel(perfil.exposicao_solar)}</span>
              </div>
            </div>
          </div>

          {/* Condições de Saúde */}
          {perfil.condicoes_saude && perfil.condicoes_saude.length > 0 && (
            <div>
              <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
                <h2 className="text-lg font-black text-lime-400 uppercase">Condições de Saúde</h2>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {perfil.condicoes_saude.map((condicao) => (
                  <Badge key={condicao} variant="success" size="lg">
                    {getCondicaoLabel(condicao)}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Medicamentos */}
          {perfil.medicamentos && perfil.medicamentos.length > 0 && (
            <div>
              <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
                <h2 className="text-lg font-black text-pink-500 uppercase">Medicamentos</h2>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {perfil.medicamentos.map((med) => (
                  <Badge key={med} variant="danger" size="lg">
                    {getMedicamentoLabel(med)}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Sintomas */}
          {perfil.sintomas && perfil.sintomas.length > 0 && (
            <div>
              <div className="bg-black px-4 py-2 mb-3 inline-block border-2 border-black">
                <h2 className="text-lg font-black text-cyan-400 uppercase">Sintomas</h2>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {perfil.sintomas.map((sintoma) => (
                  <Badge key={sintoma} variant="info" size="lg">
                    {getSintomaLabel(sintoma)}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] sm:shadow-[8px_8px_0_0_#000] p-3 sm:p-4">
          <p className="text-sm text-black font-bold">
            ✨ <span className="bg-black text-lime-400 px-2 py-1 font-black uppercase">Pronto!</span> Com base nas suas informações, vamos gerar recomendações
            personalizadas de suplementação com dosagens e referências científicas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6">
          <Button type="button" variant="outline" onClick={handleBack} className="w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <Button
            onClick={handleSubmit}
            size="md"
            variant="success"
            loading={loading}
            disabled={loading}
            className="w-full sm:w-auto !px-4 !py-3 sm:!px-8 sm:!py-4 text-sm sm:text-lg whitespace-nowrap"
          >
            {loading ? 'Gerando...' : 'Gerar Recomendações'}
          </Button>
        </div>
      </Card>
    </div>
  )
}
