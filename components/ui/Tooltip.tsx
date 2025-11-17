'use client'

import { ReactNode, useState } from 'react'
import { HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TooltipProps {
  content: string | ReactNode
  children?: ReactNode
  className?: string
}

export function Tooltip({ content, children, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className={cn(
          'inline-flex items-center justify-center',
          'text-primary-600 hover:text-primary-700',
          'transition-colors',
          className
        )}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        onClick={(e) => {
          e.preventDefault()
          setIsVisible(!isVisible)
        }}
      >
        {children || <HelpCircle className="w-4 h-4" />}
      </button>

      {isVisible && (
        <div
          className={cn(
            'absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2',
            'w-64 p-3 rounded-lg shadow-xl',
            'bg-gray-900 text-white text-sm leading-relaxed',
            'before:content-[""] before:absolute before:top-full before:left-1/2',
            'before:transform before:-translate-x-1/2 before:border-8',
            'before:border-transparent before:border-t-gray-900',
            'animate-fade-in'
          )}
        >
          {content}
        </div>
      )}
    </div>
  )
}
