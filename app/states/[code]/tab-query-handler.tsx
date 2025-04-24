"use client"

import { useEffect } from "react"

export function TabQueryHandler() {
  useEffect(() => {
    // Get tab from URL if present
    const searchParams = new URLSearchParams(window.location.search)
    const tabParam = searchParams.get("tab")

    if (tabParam) {
      const tabElement = document.querySelector(`[data-value="${tabParam}"]`) as HTMLButtonElement
      if (tabElement) {
        tabElement.click()
      }
    }
  }, [])

  return null
}
