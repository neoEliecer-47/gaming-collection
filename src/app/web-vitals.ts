// web-vitals.ts

import type { NextWebVitalsMetric } from 'next/app'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (typeof window === 'undefined') return // ignore server-side

  switch (metric.name) {
    case 'LCP':
      console.log('🔥 LCP:', metric.value)
      break
    case 'CLS':
      console.log('💫 CLS:', metric.value)
      break
    case 'FID':
      console.log('⚡️ FID:', metric.value)
      break
    case 'INP':
      console.log('🎯 INP:', metric.value)
      break
    case 'TTFB':
      console.log('🚀 TTFB:', metric.value)
      break
    default:
      console.log('📊 Web Vital:', metric.name, metric.value)
  }
}
