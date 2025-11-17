import { Badge } from '@/components/ui/Badge'
import { Prioridade } from '@/types'

interface BadgePrioridadeProps {
  prioridade: Prioridade
}

export function BadgePrioridade({ prioridade }: BadgePrioridadeProps) {
  const config: Record<Prioridade, { variant: 'success' | 'warning' | 'info' | 'danger', label: string }> = {
    alta: { variant: 'success', label: 'Prioridade Alta' },
    media: { variant: 'warning', label: 'Prioridade Média' },
    baixa: { variant: 'info', label: 'Prioridade Baixa' },
    nao_recomendado: { variant: 'danger', label: 'Não Recomendado' },
  }

  const { variant, label } = config[prioridade]

  return <Badge variant={variant}>{label}</Badge>
}
