'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAvaliacao } from '@/context/AvaliacaoContext'
import { ProgressBar } from '@/components/avaliacao/ProgressBar'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const schema = z.object({
  idade: z.number().min(18, 'Idade mínima: 18 anos').max(120, 'Idade inválida'),
  sexo: z.enum(['M', 'F'], { message: 'Selecione o sexo' }),
  peso: z.number().min(30, 'Peso mínimo: 30kg').max(300, 'Peso máximo: 300kg').optional().or(z.literal(0)),
  altura: z.number().min(100, 'Altura mínima: 100cm').max(250, 'Altura máxima: 250cm').optional().or(z.literal(0)),
})

type FormData = z.infer<typeof schema>

export default function Passo1Page() {
  const router = useRouter()
  const { perfil, updatePerfil, setPassoAtual } = useAvaliacao()

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      idade: perfil.idade || undefined,
      sexo: perfil.sexo || undefined,
      peso: perfil.peso || undefined,
      altura: perfil.altura || undefined,
    },
  })

  const onSubmit = (data: FormData) => {
    updatePerfil({
      idade: data.idade,
      sexo: data.sexo,
      peso: data.peso && data.peso > 0 ? data.peso : undefined,
      altura: data.altura && data.altura > 0 ? data.altura : undefined,
    })
    setPassoAtual(2)
    router.push('/avaliacao/passo-2')
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <ProgressBar currentStep={1} totalSteps={6} />

      <Card className="p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Informações Básicas</h1>
        <p className="text-gray-600 mb-6">Vamos começar com algumas informações sobre você</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Idade *"
            type="number"
            {...register('idade', { valueAsNumber: true })}
            error={errors.idade?.message}
            placeholder="Ex: 45"
          />

          <Select
            label="Sexo biológico *"
            {...register('sexo')}
            error={errors.sexo?.message}
            options={[
              { value: '', label: 'Selecione...' },
              { value: 'F', label: 'Feminino' },
              { value: 'M', label: 'Masculino' },
            ]}
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Peso (kg)"
              type="number"
              step="0.1"
              {...register('peso', { valueAsNumber: true })}
              error={errors.peso?.message}
              placeholder="Ex: 70"
              helpText="Opcional"
            />

            <Input
              label="Altura (cm)"
              type="number"
              {...register('altura', { valueAsNumber: true })}
              error={errors.altura?.message}
              placeholder="Ex: 165"
              helpText="Opcional"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" size="lg">
              Próximo →
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
