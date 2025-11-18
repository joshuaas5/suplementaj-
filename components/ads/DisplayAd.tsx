'use client'

import { useEffect } from 'react'

interface DisplayAdProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  responsive?: boolean
  className?: string
}

export function DisplayAd({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}: DisplayAdProps) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    if (adsenseId) {
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [adsenseId])

  // Se não tiver AdSense configurado, mostra placeholder
  if (!adsenseId) {
    return (
      <div className={`bg-gray-200 border-4 border-black p-8 text-center ${className}`}>
        <p className="text-black font-bold text-sm">
          📢 Espaço Publicitário
        </p>
        <p className="text-xs text-gray-600 mt-2">
          (AdSense será ativado após aprovação)
        </p>
      </div>
    )
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsenseId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  )
}
