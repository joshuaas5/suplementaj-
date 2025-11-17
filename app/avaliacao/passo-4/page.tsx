'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { useAvaliacao } from '@/context/AvaliacaoContext'
import { ProgressBar } from '@/components/avaliacao/ProgressBar'
import { Checkbox } from '@/components/ui/Checkbox'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { ArrowLeft } from 'lucide-react'

const medicamentos = [
  { id: 'metformina', label: 'Metformina (diabetes)' },
  { id: 'omeprazol', label: 'Omeprazol / Pantoprazol (IBP - estômago)' },
  { id: 'antiácidos', label: 'Antiácidos (azia)' },
  { id: 'varfarina', label: 'Varfarina (anticoagulante)' },
  { id: 'aspirina', label: 'AAS / Aspirina' },
  { id: 'estatinas', label: 'Estatinas (colesterol)' },
  { id: 'corticosteroides', label: 'Corticosteroides (anti-inflamatórios)' },
  { id: 'diureticos', label: 'Diuréticos (pressão alta)' },
  { id: 'levotiroxina', label: 'Levotiroxina (hormônio da tireoide)' },
  { id: 'antibioticos', label: 'Antibióticos (uso contínuo)' },
  { id: 'anticonvulsivantes', label: 'Anticonvulsivantes' },
]

const cirurgias = [
  { id: 'bariátrica', label: 'Cirurgia bariátrica (redução de estômago)' },
  { id: 'gastrectomia', label: 'Gastrectomia (retirada parcial/total do estômago)' },
]

export default function Passo4Page() {
  const router = useRouter()
  const { perfil, updatePerfil, setPassoAtual } = useAvaliacao()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      medicamentos: perfil.medicamentos || [],
      cirurgias: perfil.cirurgias || [],
    },
  })

  const onSubmit = (data: { medicamentos: string[]; cirurgias: string[] }) => {
    updatePerfil({
      medicamentos: data.medicamentos || [],
      cirurgias: data.cirurgias || [],
    })
    setPassoAtual(5)
    router.push('/avaliacao/passo-5')
  }

  const handleBack = () => {
    setPassoAtual(3)
    router.push('/avaliacao/passo-3')
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <ProgressBar currentStep={4} totalSteps={6} />

      <Card className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Medicamentos e Cirurgias</h1>
        <p className="text-gray-600 mb-6">
          Selecione os medicamentos que você usa regularmente e cirurgias que já fez
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Medicamentos de uso contínuo</h2>
            <div className="space-y-3">
              {medicamentos.map((medicamento) => (
                <Checkbox
                  key={medicamento.id}
                  label={medicamento.label}
                  value={medicamento.id}
                  {...register('medicamentos')}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Cirurgias realizadas</h2>
            <div className="space-y-3">
              {cirurgias.map((cirurgia) => (
                <Checkbox
                  key={cirurgia.id}
                  label={cirurgia.label}
                  value={cirurgia.id}
                  {...register('cirurgias')}
                />
              ))}
            </div>
          </div>

          <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
            <p className="text-sm text-warning-800">
              ⚠️ <strong>Importante:</strong> Alguns medicamentos podem interferir na absorção de nutrientes.
              Vamos considerar isso nas recomendações.
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
