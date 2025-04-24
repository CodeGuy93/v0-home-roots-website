"use client"

import { useState } from "react"
import { curriculumData } from "@/lib/curriculum-data"
import type { CurriculumFilters } from "@/lib/types"
import { ComparisonProvider } from "@/lib/comparison-context"
import { FilterSidebar } from "@/components/filter-sidebar"
import { ActiveFilters } from "@/components/active-filters"
import { EnhancedCurriculumResults } from "@/components/enhanced-curriculum-results"
import { EnhancedComparisonBar } from "@/components/enhanced-comparison-bar"
import { Text, Heading } from "@/components/ui/typography"

export default function CurriculumFinderClient() {
  const [filters, setFilters] = useState<CurriculumFilters>({
    subjects: [],
    gradeLevels: [],
    teachingStyles: [],
    formats: [],
    religiousAffiliation: [],
    timeCommitment: [],
    costRange: [],
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<string>("rating")

  const handleFilterChange = (newFilters: CurriculumFilters) => {
    setFilters(newFilters)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
  }

  const handleSortChange = (newSortBy: string) => {
    setSortBy(newSortBy)
  }

  return (
    <ComparisonProvider>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Heading className="mb-2">Curriculum Finder</Heading>
          <Text className="text-muted-foreground">
            Find the perfect curriculum for your homeschooling needs. Filter by subject, grade level, teaching style,
            and more.
          </Text>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onSortChange={handleSortChange}
              sortBy={sortBy}
              onSearchChange={handleSearchChange}
              searchQuery={searchQuery}
            />
          </div>

          <div className="w-full md:w-3/4">
            <ActiveFilters
              filters={filters}
              onFilterChange={handleFilterChange}
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
            />

            <EnhancedCurriculumResults
              curriculumItems={curriculumData}
              filters={filters}
              sortBy={sortBy}
              searchQuery={searchQuery}
            />
          </div>
        </div>

        <EnhancedComparisonBar />
      </div>
    </ComparisonProvider>
  )
}
