'use client'

import { UTM_PARAMS } from '@/lib/attribution'
import { useEffect } from 'react'

const STORAGE_KEY = 'gh_attribution'

/**
 * First-touch landing_url/referrer_url for the browser session; UTM params are
 * refreshed whenever a URL carries them. Sent with the contact form to the CRM.
 */
export function readAttribution(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

export function AttributionCapture() {
  useEffect(() => {
    const stored = readAttribution()
    const params = new URLSearchParams(location.search)
    const next: Record<string, string> = stored.landing_url
      ? { ...stored }
      : { landing_url: location.href, referrer_url: document.referrer }

    for (const key of UTM_PARAMS) {
      const value = params.get(key)
      if (value) next[key] = value
    }

    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {}
  }, [])

  return null
}
