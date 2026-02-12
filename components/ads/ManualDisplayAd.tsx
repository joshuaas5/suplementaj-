'use client'

import { useEffect, useRef, useState } from 'react'

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

    console.log('🎯 ManualDisplayAd initializing ad:', { slot: '3400740255' })
    
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      console.log('✅ Ad pushed to adsbygoogle')
    } catch (err) {
      console.error('❌ AdSense error:', err)
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
        data-ad-client="ca-pub-4642150915962893"
        data-ad-slot="3400740255"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
