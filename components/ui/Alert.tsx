import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'

interface AlertProps {
  variant?: 'success' | 'warning' | 'danger' | 'info'
  children: ReactNode
  className?: string
  title?: string
}

export function Alert({ variant = 'info', children, className, title }: AlertProps) {
  const variants = {
    success: {
      bg: 'bg-success-50',
      border: 'border-success-200',
      text: 'text-success-800',
      icon: CheckCircle2,
      iconColor: 'text-success-600',
    },
    warning: {
      bg: 'bg-warning-50',
      border: 'border-warning-200',
      text: 'text-warning-800',
      icon: AlertTriangle,
      iconColor: 'text-warning-600',
    },
    danger: {
      bg: 'bg-danger-50',
      border: 'border-danger-200',
      text: 'text-danger-800',
      icon: XCircle,
      iconColor: 'text-danger-600',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: Info,
      iconColor: 'text-blue-600',
    },
  }

  const config = variants[variant]
  const Icon = config.icon

  return (
    <div
      className={cn(
        'rounded-lg border p-4',
        config.bg,
        config.border,
        className
      )}
    >
      <div className="flex gap-3">
        <Icon className={cn('w-5 h-5 mt-0.5 flex-shrink-0', config.iconColor)} />
        <div className="flex-1">
          {title && (
            <h4 className={cn('font-semibold mb-1', config.text)}>
              {title}
            </h4>
          )}
          <div className={cn('text-sm', config.text)}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
