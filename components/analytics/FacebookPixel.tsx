'use client';

import { useEffect } from 'react';
import { initFacebookPixel } from '@/lib/facebook-pixel';

export function FacebookPixel() {
  useEffect(() => {
    // Carregar Facebook Pixel com delay de 3s para não bloquear FCP/LCP
    const timer = setTimeout(() => {
      initFacebookPixel();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
