
'use client'

import { onCLS, onFID, onLCP, onINP, onTTFB } from 'web-vitals'

export function register() {
  onCLS(console.log)
  onFID(console.log)
  onLCP(console.log)
  onINP(console.log)
  onTTFB(console.log)
}