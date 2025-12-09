'use client';

import { useEffect } from 'react';
import { initFacebookPixel } from '@/lib/facebook-pixel';

export function FacebookPixel() {
  useEffect(() => {
    initFacebookPixel();
  }, []);

  return null;
}
