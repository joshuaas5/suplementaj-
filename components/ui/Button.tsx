import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  fullWidth?: boolean
  loading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  fullWidth = false,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-yellow-400 hover:bg-yellow-300 text-black border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000]',
    secondary: 'bg-cyan-400 hover:bg-cyan-300 text-black border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000]',
    outline: 'bg-white hover:bg-gray-50 text-black border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000]',
    danger: 'bg-pink-500 hover:bg-pink-400 text-white border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000]',
    success: 'bg-lime-400 hover:bg-lime-300 text-black border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-black uppercase tracking-wide border-4 shadow-[6px_6px_0_0_#000] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed active:translate-x-1 active:translate-y-1 active:shadow-[4px_4px_0_0_#000]',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  )
}
