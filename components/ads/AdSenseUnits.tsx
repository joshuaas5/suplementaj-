'use client'

import { useEffect, useRef } from 'react'

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
      } catch (err) {
        console.error('AdSense error:', err)
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
 * Anúncio In-Feed (No meio de listas)
 * VOCÊ PRECISA CRIAR ESTE SLOT NO ADSENSE
 */
export function InFeedAd({ className = '' }: { className?: string }) {
  return <AdSenseUnit slot="CRIAR_SLOT_INFEED" format="auto" className={className} />
}

/**
 * Anúncio Multiplex (Múltiplos anúncios pequenos)
 * VOCÊ PRECISA CRIAR ESTE SLOT NO ADSENSE
 */
export function MultiplexAd({ className = '' }: { className?: string }) {
  return <AdSenseUnit slot="CRIAR_SLOT_MULTIPLEX" format="auto" className={className} />
}

/**
 * Anúncio de Artigo (Para meio do conteúdo)
 * VOCÊ PRECISA CRIAR ESTE SLOT NO ADSENSE
 */
export function ArticleAd({ className = '' }: { className?: string }) {
  return <AdSenseUnit slot="CRIAR_SLOT_ARTICLE" format="auto" className={className} />
}
