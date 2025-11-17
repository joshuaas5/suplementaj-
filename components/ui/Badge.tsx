import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral'
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Badge({ variant = 'neutral', size = 'md', children, className }: BadgeProps) {
  const variants = {
    success: 'bg-lime-400 text-black border-black',
    warning: 'bg-yellow-400 text-black border-black',
    danger: 'bg-pink-500 text-white border-black',
    info: 'bg-cyan-400 text-black border-black',
    neutral: 'bg-white text-black border-black',
  }

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center font-bold uppercase tracking-wide border-2 shadow-[2px_2px_0_0_#000]',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  )
}
