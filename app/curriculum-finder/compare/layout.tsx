"use client"

import type React from "react"

import { ComparisonProvider } from "@/lib/comparison-context"

export default function ComparisonLayout({ children }: { children: React.ReactNode }) {
  return <ComparisonProvider>{children}</ComparisonProvider>
}
