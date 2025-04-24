"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { CurriculumItem } from "./types"

interface ComparisonContextType {
  comparedItems: CurriculumItem[]
  addToComparison: (item: CurriculumItem) => void
  removeFromComparison: (itemId: string) => void
  clearComparison: () => void
  isInComparison: (itemId: string) => boolean
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined)

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [comparedItems, setComparedItems] = useState<CurriculumItem[]>([])

  const addToComparison = (item: CurriculumItem) => {
    if (comparedItems.length < 4 && !comparedItems.some((i) => i.id === item.id)) {
      setComparedItems((prev) => [...prev, item])
    }
  }

  const removeFromComparison = (itemId: string) => {
    setComparedItems((prev) => prev.filter((item) => item.id !== itemId))
  }

  const clearComparison = () => {
    setComparedItems([])
  }

  const isInComparison = (itemId: string) => {
    return comparedItems.some((item) => item.id === itemId)
  }

  return (
    <ComparisonContext.Provider
      value={{
        comparedItems,
        addToComparison,
        removeFromComparison,
        clearComparison,
        isInComparison,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  )
}

export function useComparison() {
  const context = useContext(ComparisonContext)
  if (context === undefined) {
    throw new Error("useComparison must be used within a ComparisonProvider")
  }
  return context
}
