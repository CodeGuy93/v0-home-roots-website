"use client"

import { useState, useEffect } from "react"
import type { CurriculumItem, CurriculumFilters } from "@/lib/types"
import { filterCurriculum, sortCurriculum } from "@/lib/curriculum-utils"
import CurriculumCard from "./curriculum-card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface CurriculumResultsProps {
  curriculumItems: CurriculumItem[]
  filters: Partial<CurriculumFilters>
  sortBy: string
}

export default function CurriculumResults({ curriculumItems, filters, sortBy }: CurriculumResultsProps) {
  const [filteredItems, setFilteredItems] = useState<CurriculumItem[]>([])
  const [visibleCount, setVisibleCount] = useState(9)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      const filtered = filterCurriculum(curriculumItems, filters)
      const sorted = sortCurriculum(filtered, sortBy)
      setFilteredItems(sorted)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [curriculumItems, filters, sortBy])

  const loadMore = () => {
    setVisibleCount((prev) => prev + 9)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <span className="ml-2">Finding the perfect curriculum...</span>
      </div>
    )
  }

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-bold mb-2">No matching curriculum found</h3>
        <p className="text-muted-foreground mb-4">Try adjusting your filters to see more options.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-4">
        <p className="text-muted-foreground">Found {filteredItems.length} curriculum options</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.slice(0, visibleCount).map((item) => (
          <CurriculumCard key={item.id} curriculum={item} />
        ))}
      </div>
      {visibleCount < filteredItems.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMore} variant="outline" size="lg">
            Load More Results
          </Button>
        </div>
      )}
    </div>
  )
}
