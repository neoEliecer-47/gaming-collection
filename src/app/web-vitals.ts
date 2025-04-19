// web-vitals.ts
export function reportWebVitals(metric: any) {
    if (metric.name === 'LCP') {
      console.log('🔥 LCP (Largest Contentful Paint):', metric.value)
    } else if (metric.name === 'CLS') {
      console.log('💫 CLS (Cumulative Layout Shift):', metric.value)
    } else if (metric.name === 'FID') {
      console.log('⚡️ FID (First Input Delay):', metric.value)
    }
    // ...you can track all metrics: TTFB, INP, etc.
  }
  