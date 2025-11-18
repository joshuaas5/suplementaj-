/**
 * Helpers para rastreamento de eventos no Google Analytics
 */

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void
  }
}

interface EventParams {
  [key: string]: string | number | boolean | undefined
}

/**
 * Envia evento customizado para o Google Analytics
 */
export function trackEvent(
  eventName: string,
  eventParams?: EventParams
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams)
  }
}

/**
 * Rastreia início do quiz
 */
export function trackQuizStart() {
  trackEvent('quiz_start', {
    event_category: 'engagement',
    event_label: 'avaliacao_iniciada',
  })
}

/**
 * Rastreia conclusão do quiz
 */
export function trackQuizComplete(perfil: {
  sexo?: string | number
  idade?: string | number
  dieta?: string
}) {
  trackEvent('quiz_complete', {
    event_category: 'engagement',
    event_label: 'avaliacao_concluida',
    sexo: perfil.sexo?.toString(),
    idade: perfil.idade?.toString(),
    dieta: perfil.dieta,
  })
}

/**
 * Rastreia clique em produto (Amazon afiliado)
 */
export function trackProductClick(
  productName: string,
  productPrice: number,
  productCategory: 'suplemento_individual' | 'multivitaminico'
) {
  trackEvent('select_content', {
    content_type: productCategory,
    item_id: productName,
    value: productPrice,
  })

  // Também enviar como evento de conversão
  trackEvent('click_affiliate_link', {
    event_category: 'ecommerce',
    event_label: productName,
    value: productPrice,
  })
}

/**
 * Rastreia download de PDF
 */
export function trackPDFDownload() {
  trackEvent('download_pdf', {
    event_category: 'engagement',
    event_label: 'relatorio_resultados',
  })
}

/**
 * Rastreia captura de lead (email)
 */
export function trackLeadCapture(origem: string) {
  trackEvent('generate_lead', {
    event_category: 'engagement',
    event_label: origem,
  })
}

/**
 * Rastreia compartilhamento social
 */
export function trackSocialShare(platform: string) {
  trackEvent('share', {
    method: platform,
    content_type: 'resultados',
  })
}

/**
 * Rastreia visualização de página de resultado
 */
export function trackResultsView(numRecomendacoes: number) {
  trackEvent('view_results', {
    event_category: 'engagement',
    event_label: 'resultados_visualizados',
    value: numRecomendacoes,
  })
}

/**
 * Rastreia leitura de artigo do blog
 */
export function trackArticleView(articleSlug: string, category: string) {
  trackEvent('view_article', {
    event_category: 'engagement',
    event_label: articleSlug,
    article_category: category,
  })
}

/**
 * Rastreia tempo gasto em uma página (chamar ao desmontar componente)
 */
export function trackTimeOnPage(pageId: string, timeInSeconds: number) {
  trackEvent('time_on_page', {
    event_category: 'engagement',
    event_label: pageId,
    value: Math.round(timeInSeconds),
  })
}
