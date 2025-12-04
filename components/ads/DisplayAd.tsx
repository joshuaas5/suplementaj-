'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

interface DisplayAdProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  responsive?: boolean
  className?: string
  style?: React.CSSProperties
}

export function DisplayAd({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
  style,
}: DisplayAdProps) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID
  const adRef = useRef<HTMLModElement>(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    if (adsenseId && adRef.current && !isLoaded.current) {
      try {
        isLoaded.current = true
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [adsenseId])

  // Se não tiver AdSense configurado, não mostra nada em produção
  if (!adsenseId) {
    if (process.env.NODE_ENV === 'development') {
      return (
        <div className={`bg-gray-200 border-4 border-black p-8 text-center ${className}`}>
          <p className="text-black font-bold text-sm">
            📢 Espaço Publicitário (Slot: {slot})
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Configure NEXT_PUBLIC_ADSENSE_ID para ativar
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={adsenseId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  )
}

// Componente para anúncio horizontal (banner)
export function HorizontalAd({ className = '' }: { className?: string }) {
  return (
    <DisplayAd
      slot="auto"
      format="horizontal"
      className={`my-8 ${className}`}
    />
  )
}

// Componente para anúncio in-article (dentro do conteúdo)
export function InArticleAd({ className = '' }: { className?: string }) {
  return (
    <DisplayAd
      slot="auto"
      format="auto"
      className={`my-6 ${className}`}
    />
  )
}

// Componente para anúncio retangular (sidebar ou meio)
export function RectangleAd({ className = '' }: { className?: string }) {
  return (
    <DisplayAd
      slot="auto"
      format="rectangle"
      className={`my-4 ${className}`}
    />
  )
}
