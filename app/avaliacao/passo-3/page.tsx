'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useAvaliacao } from '@/context/AvaliacaoContext'
import { ProgressBar } from '@/components/avaliacao/ProgressBar'
import { Checkbox } from '@/components/ui/Checkbox'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'

const condicoes = [
  { id: 'osteoporose', label: 'Osteoporose' },
  { id: 'osteopenia', label: 'Osteopenia' },
  { id: 'diabetes', label: 'Diabetes tipo 2' },
  { id: 'cardiovascular', label: 'Doença cardiovascular' },
  { id: 'hipertensao', label: 'Hipertensão (pressão alta)' },
  { id: 'depressao', label: 'Depressão' },
  { id: 'ansiedade', label: 'Ansiedade' },
  { id: 'anemia', label: 'Anemia' },
  { id: 'hipotireoidismo', label: 'Hipotireoidismo (tireoide)' },
  { id: 'hemocromatose', label: 'Hemocromatose (excesso de ferro)' },
  { id: 'doenca_celiaca', label: 'Doença celíaca' },
  { id: 'doenca_crohn', label: 'Doença de Crohn' },
  { id: 'gastrite', label: 'Gastrite' },
]

export default function Passo3Page() {
  const router = useRouter()
  const { perfil, updatePerfil, setPassoAtual } = useAvaliacao()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      condicoes: perfil.condicoes_saude || [],
    },
  })

  const onSubmit = (data: { condicoes: string[] }) => {
    updatePerfil({
      condicoes_saude: data.condicoes || [],
    })
    setPassoAtual(4)
    router.push('/avaliacao/passo-4')
  }

  const handleBack = () => {
    setPassoAtual(2)
    router.push('/avaliacao/passo-2')
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <ProgressBar currentStep={3} totalSteps={6} />

      <Card className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Condições de Saúde</h1>
        <p className="text-gray-600 mb-6">
          Selecione as condições de saúde que você tem (se houver). Deixe em branco se não tiver nenhuma.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-3">
            {condicoes.map((condicao) => (
              <Checkbox
                key={condicao.id}
                label={condicao.label}
                value={condicao.id}
                {...register('condicoes')}
              />
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              💡 <strong>Dica:</strong> Essas informações são importantes para identificar necessidades específicas
              e evitar contraindicações.
            </p>
          </div>

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={handleBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <Button type="submit" size="lg">
              Próximo →
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
