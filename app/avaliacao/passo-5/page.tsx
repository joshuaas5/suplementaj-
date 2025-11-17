'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useAvaliacao } from '@/context/AvaliacaoContext'
import { ProgressBar } from '@/components/avaliacao/ProgressBar'
import { Checkbox } from '@/components/ui/Checkbox'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'

const sintomas = [
  { id: 'fadiga', label: 'Fadiga / Cansaço excessivo' },
  { id: 'caimbras', label: 'Cãibras musculares frequentes' },
  { id: 'formigamento', label: 'Formigamento em mãos/pés' },
  { id: 'imunidade baixa', label: 'Imunidade baixa (resfriados frequentes)' },
  { id: 'queda_cabelo', label: 'Queda de cabelo' },
  { id: 'unhas_fracas', label: 'Unhas fracas/quebradiças' },
  { id: 'pele_seca', label: 'Pele muito seca' },
  { id: 'dores_musculares', label: 'Dores musculares/ósseas' },
  { id: 'insonia', label: 'Insônia / Dificuldade para dormir' },
  { id: 'ansiedade_sintoma', label: 'Ansiedade' },
  { id: 'problemas_memoria', label: 'Problemas de memória/concentração' },
  { id: 'tontura', label: 'Tonturas frequentes' },
  { id: 'palpitacoes', label: 'Palpitações cardíacas' },
  { id: 'falta_ar', label: 'Falta de ar ao esforço' },
]

export default function Passo5Page() {
  const router = useRouter()
  const { perfil, updatePerfil, setPassoAtual } = useAvaliacao()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      sintomas: perfil.sintomas || [],
    },
  })

  const onSubmit = (data: { sintomas: string[] }) => {
    updatePerfil({
      sintomas: data.sintomas || [],
    })
    setPassoAtual(6)
    router.push('/avaliacao/passo-6')
  }

  const handleBack = () => {
    setPassoAtual(4)
    router.push('/avaliacao/passo-4')
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <ProgressBar currentStep={5} totalSteps={6} />

      <Card className="p-4 sm:p-8 bg-cyan-400">
        <div className="bg-black px-4 sm:px-6 py-2 sm:py-3 mb-4 inline-block border-2 border-black sm:-rotate-1">
          <h1 className="text-xl sm:text-3xl font-black text-cyan-400 uppercase">Sintomas</h1>
        </div>
        <div className="bg-white border-4 border-black p-4 mb-6">
          <p className="text-black font-bold">
            Selecione os sintomas que você tem sentido nos últimos meses
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-3">
            {sintomas.map((sintoma) => (
              <Checkbox
                key={sintoma.id}
                label={sintoma.label}
                value={sintoma.id}
                {...register('sintomas')}
              />
            ))}
          </div>

          <div className="bg-lime-400 border-4 border-black shadow-[4px_4px_0_0_#000] p-4">
            <p className="text-sm text-black font-bold">
              💡 <span className="bg-black text-lime-400 px-2 py-1 font-black">Dica:</span> Alguns sintomas podem indicar deficiências específicas de nutrientes.
              Vamos analisar isso nas recomendações.
            </p>
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <Button type="submit" size="lg" variant="success">
              Próximo →
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
