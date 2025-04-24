"use client"

import { useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export function TabQueryHandler() {
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab) {
      router.push(`?tab=${tab}`, { scroll: false })
    }
  }, [searchParams, router])

  return null
}
