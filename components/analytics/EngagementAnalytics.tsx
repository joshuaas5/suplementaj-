'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

const SCROLL_MILESTONES = [25, 50, 75, 90]

/**
 * Mede leitura e interações de forma agregada. Não envia campos de
 * formulários, resultados de calculadoras, query strings ou identificadores
 * pessoais para o GA4.
 */
export function EngagementAnalytics() {
  useEffect(() => {
    const sent = new Set<number>()
    let engagedSent = false

    const sendScrollDepth = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      if (documentHeight <= 0) return

      const depth = Math.min(100, Math.round((window.scrollY / documentHeight) * 100))
      SCROLL_MILESTONES.forEach((milestone) => {
        if (depth >= milestone && !sent.has(milestone)) {
          sent.add(milestone)
          trackEvent('scroll_depth', {
            depth_percent: milestone,
            engagement_type: 'content_scroll',
          })
        }
      })
    }

    const sendEngaged = () => {
      if (engagedSent) return
      engagedSent = true
      trackEvent('engaged_session', {
        engagement_type: 'active_reading',
      })
    }

    const onInteraction = () => sendEngaged()
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') return
      sendEngaged()
    }

    window.addEventListener('scroll', sendScrollDepth, { passive: true })
    window.addEventListener('pointerdown', onInteraction, { passive: true })
    window.addEventListener('keydown', onInteraction, { passive: true })
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      window.removeEventListener('scroll', sendScrollDepth)
      window.removeEventListener('pointerdown', onInteraction)
      window.removeEventListener('keydown', onInteraction)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [])

  return null
}
