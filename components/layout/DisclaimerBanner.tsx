import { AlertTriangle } from 'lucide-react'

interface DisclaimerBannerProps {
  variant?: 'warning' | 'danger'
  message?: string
}

export function DisclaimerBanner({ variant = 'warning', message }: DisclaimerBannerProps) {
  const defaultMessage =
    "AVISO: Estas recomendações são baseadas em evidências científicas gerais e no perfil que você forneceu. " +
    "Para orientação personalizada, o ideal é consultar um profissional de saúde."

  const variants = {
    warning: {
      bg: 'bg-warning-50',
      border: 'border-warning-300',
      text: 'text-warning-900',
      icon: 'text-warning-600',
    },
    danger: {
      bg: 'bg-danger-50',
      border: 'border-danger-300',
      text: 'text-danger-900',
      icon: 'text-danger-600',
    },
  }

  const config = variants[variant]

  return (
    <div className={`${config.bg} border ${config.border} rounded-lg p-4 mb-6`}>
      <div className="flex gap-3">
        <AlertTriangle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${config.icon}`} />
        <div className="flex-1">
          <p className={`text-sm font-medium ${config.text}`}>
            {message || defaultMessage}
          </p>
        </div>
      </div>
    </div>
  )
}
