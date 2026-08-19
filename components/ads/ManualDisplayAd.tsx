'use client'

import { useEffect, useRef, useState } from 'react'
import { ADSENSE_CLIENT_ID } from '@/lib/adsense'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

interface ManualDisplayAdProps {
  className?: string
}

/**
 * Componente de anúncio display manual do AdSense
 * Slot ID: 3400740255
 */
export function ManualDisplayAd({ className = '' }: ManualDisplayAdProps) {
  const adRef = useRef<HTMLModElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !adRef.current) return

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {
      // Silently fail - AdSense will retry
    }
  }, [mounted])

  if (!mounted) {
    return (
      <div className={`my-8 ${className}`}>
        <div style={{ minHeight: '280px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          Carregando anúncio...
        </div>
      </div>
    )
  }

  return (
    <div className={`my-8 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot="3400740255"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
