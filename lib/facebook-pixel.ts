/**
 * Facebook Pixel Integration
 * Tracking de eventos para remarketing e otimização de conversão
 */

declare global {
  interface Window {
    fbq: ((action: string, eventName: string, data?: Record<string, unknown>) => void) | undefined;
    _fbq: ((action: string, eventName: string, data?: Record<string, unknown>) => void) | undefined;
  }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

// Inicializar o pixel
export const initFacebookPixel = () => {
  if (typeof window === 'undefined' || !FB_PIXEL_ID) return;

  // Injetar script do Facebook Pixel
  if (!window.fbq) {
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FB_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Adicionar noscript fallback
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.body.appendChild(noscript);
  }
};

// Eventos personalizados
export const trackEvent = (eventName: string, data?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, data);
  }
};

// Event: Visualizou calculadora
export const trackCalculatorView = (calculatorType: string) => {
  trackEvent('ViewContent', {
    content_name: `Calculadora ${calculatorType}`,
    content_category: 'Calculator',
    content_type: 'tool',
  });
};

// Event: Completou cálculo
export const trackCalculatorComplete = (calculatorType: string, result?: string | number) => {
  trackEvent('CompleteRegistration', {
    content_name: `Cálculo ${calculatorType} Completado`,
    status: 'completed',
    value: result || 'calculated',
  });
};

// Event: Visualizou artigo de blog
export const trackArticleView = (articleTitle: string, category: string) => {
  trackEvent('ViewContent', {
    content_name: articleTitle,
    content_category: category,
    content_type: 'article',
  });
};

// Event: Clicou em CTA
export const trackCTAClick = (ctaName: string, ctaLocation: string) => {
  trackEvent('Lead', {
    content_name: ctaName,
    content_category: ctaLocation,
  });
};

// Event: Iniciou avaliação
export const trackEvaluationStart = () => {
  trackEvent('InitiateCheckout', {
    content_name: 'Avaliação Personalizada',
    content_category: 'Evaluation',
  });
};

// Event: Completou avaliação
export const trackEvaluationComplete = () => {
  trackEvent('Purchase', {
    content_name: 'Avaliação Completada',
    value: 0, // Valor zero pois é grátis, mas conta como conversão
    currency: 'BRL',
    content_type: 'product',
  });
};

// Event: Download de lead magnet (PDF)
export const trackLeadMagnetDownload = (leadMagnetName: string) => {
  trackEvent('Lead', {
    content_name: leadMagnetName,
    content_category: 'Lead Magnet',
    lead_type: 'pdf_download',
  });
};

// Event: Abriu exit intent popup
export const trackExitIntentShow = () => {
  trackEvent('ViewContent', {
    content_name: 'Exit Intent Popup',
    content_category: 'Lead Capture',
  });
};

// Event: Conversão de exit intent
export const trackExitIntentConversion = () => {
  trackEvent('Lead', {
    content_name: 'Exit Intent Conversion',
    content_category: 'Lead Capture',
    lead_source: 'exit_popup',
  });
};

// Event: Produto afiliado clicado
export const trackAffiliateClick = (productName: string, affiliateLink: string) => {
  trackEvent('InitiateCheckout', {
    content_name: productName,
    content_category: 'Affiliate Product',
    external_link: affiliateLink,
  });
};
