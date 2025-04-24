"use client"

import { useState } from "react"
import CurriculumFilterForm from "@/components/curriculum-filter-form"
import CurriculumResults from "@/components/curriculum-results"
import ComparisonBar from "@/components/comparison-bar"
import { curriculumOptions } from "@/lib/curriculum-data"
import type { CurriculumFilters } from "@/lib/types"
import { ComparisonProvider } from "@/lib/comparison-context"

export default function CurriculumFinderClient() {
  const [filters, setFilters] = useState<Partial<CurriculumFilters>>({})
  const [sortBy, setSortBy] = useState<string>("rating")

  const handleFilterChange = (newFilters: Partial<CurriculumFilters>) => {
    setFilters(newFilters)
  }

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy)
  }

  return (
    <ComparisonProvider>
      <div>
        <CurriculumFilterForm onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
        <CurriculumResults curriculumItems={curriculumOptions} filters={filters} sortBy={sortBy} />
        <ComparisonBar />
      </div>
    </ComparisonProvider>
  )
}
