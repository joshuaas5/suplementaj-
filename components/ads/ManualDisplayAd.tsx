'use client'

import { useEffect, useRef } from 'react'

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
  const isLoaded = useRef(false)

  useEffect(() => {
    console.log('🎯 ManualDisplayAd mounted:', { adRef: !!adRef.current, isLoaded: isLoaded.current })
    if (adRef.current && !isLoaded.current) {
      try {
        isLoaded.current = true
        console.log('✅ Pushing ad to adsbygoogle:', { slot: '3400740255', element: adRef.current })
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
        console.log('✅ Ad pushed successfully')
      } catch (err) {
        console.error('❌ AdSense error:', err)
      }
    }
  }, [])

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
