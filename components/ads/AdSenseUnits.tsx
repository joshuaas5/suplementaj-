'use client'

import { useEffect, useRef } from 'react'
import { ADSENSE_CLIENT_ID } from '@/lib/adsense'

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

interface AdSlotProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
  className?: string
}

/**
 * Componente de anúncio AdSense reutilizável
 * Use este componente passando o slot ID específico
 */
export function AdSenseUnit({ slot, format = 'auto', className = '' }: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    if (adRef.current && !isLoaded.current) {
      try {
        isLoaded.current = true
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch {
        // Silently fail - AdSense will retry
      }
    }
  }, [])

  return (
    <div className={`my-8 ${className}`} style={{ minHeight: '280px' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}

/**
 * Anúncio Display Principal (Banner largo)
 * Slot: 3400740255
 */
export function DisplayBanner({ className = '' }: { className?: string }) {
  return <AdSenseUnit slot="3400740255" format="auto" className={className} />
}

/**
 * Wrapper com min-height fixo para evitar CLS (Cumulative Layout Shift)
 * Use este wrapper ao redor de qualquer componente de anúncio
 */
export function AdContainer({ children, minHeight = 280, className = '' }: { children: React.ReactNode; minHeight?: number; className?: string }) {
  return (
    <div className={`my-8 ${className}`} style={{ minHeight: `${minHeight}px` }}>
      {children}
    </div>
  )
}

/**
 * Anúncio In-Feed (No meio de listas)
 * Slot: 2615832690
 */
export function InFeedAd({ className = '' }: { className?: string }) {
  const adRef = useRef<HTMLModElement>(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    if (adRef.current && !isLoaded.current) {
      try {
        isLoaded.current = true
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [])

  return (
    <div className={`my-8 ${className}`} style={{ minHeight: '320px' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="fluid"
        data-ad-layout-key="-ef+6q-36-dw+111"
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot="2615832690"
      />
    </div>
  )
}

/**
 * Anúncio In-Article (Para meio do conteúdo)
 * Slot: 3939796306
 */
export function ArticleAd({ className = '' }: { className?: string }) {
  const adRef = useRef<HTMLModElement>(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    if (adRef.current && !isLoaded.current) {
      try {
        isLoaded.current = true
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [])

  return (
    <div className={`my-8 text-center ${className}`} style={{ minHeight: '280px' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot="3939796306"
      />
    </div>
  )
}

/**
 * Anúncio Multiplex (Múltiplos anúncios pequenos)
 * Slot: 2826025183
 */
export function MultiplexAd({ className = '' }: { className?: string }) {
  const adRef = useRef<HTMLModElement>(null)
  const isLoaded = useRef(false)

  useEffect(() => {
    if (adRef.current && !isLoaded.current) {
      try {
        isLoaded.current = true
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (err) {
        console.error('AdSense error:', err)
      }
    }
  }, [])

  return (
    <div className={`my-8 ${className}`} style={{ minHeight: '320px' }}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-format="autorelaxed"
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot="2826025183"
      />
    </div>
  )
}
