"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, AlertCircle, Loader2 } from "lucide-react"
import type { CurriculumItem, CurriculumFilters } from "@/lib/types"
import { filterCurriculum, sortCurriculum } from "@/lib/curriculum-utils"
import { EnhancedCurriculumCard } from "./enhanced-curriculum-card"
import { Text, Heading } from "@/components/ui/typography"
import { useMediaQuery } from "@/hooks/use-media-query"
import { FilterSidebar } from "./filter-sidebar"
import { ActiveFilters } from "./active-filters"

interface EnhancedCurriculumResultsProps {
  curriculumItems: CurriculumItem[]
  initialFilters?: Partial<CurriculumFilters>
  onComparisonChange?: (items: CurriculumItem[]) => void
  maxComparisonItems?: number
}

export function EnhancedCurriculumResults({
  curriculumItems,
  initialFilters = {},
  onComparisonChange,
  maxComparisonItems = 3,
}: EnhancedCurriculumResultsProps) {
  const [filters, setFilters] = useState<Partial<CurriculumFilters>>(initialFilters)
  const [sortBy, setSortBy] = useState<string>("rating")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [comparisonItems, setComparisonItems] = useState<CurriculumItem[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [visibleItems, setVisibleItems] = useState<number>(9)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState<boolean>(false)

  const isMobile = useMediaQuery("(max-width: 768px)")

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Filter and sort curriculum items
  const filteredItems = filterCurriculum(curriculumItems, filters).filter(
    (item) =>
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subjects.some((subject) => subject.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  const sortedItems = sortCurriculum(filteredItems, sortBy)
  const displayedItems = sortedItems.slice(0, visibleItems)
  const hasMoreItems = visibleItems < sortedItems.length

  // Handle filter changes
  const handleFilterChange = (newFilters: Partial<CurriculumFilters>) => {
    setFilters(newFilters)
    setVisibleItems(9) // Reset pagination when filters change
  }

  // Handle removing a single filter
  const handleRemoveFilter = (filterType: keyof CurriculumFilters, value: string) => {
    const currentValues = filters[filterType] || []
    const newValues = currentValues.filter((v) => v !== value)

    setFilters({
      ...filters,
      [filterType]: newValues.length > 0 ? newValues : undefined,
    })
  }

  // Handle clearing all filters
  const handleClearAllFilters = () => {
    setFilters({})
    setSearchQuery("")
  }

  // Handle toggling comparison
  const handleToggleComparison = (item: CurriculumItem) => {
    let newComparisonItems: CurriculumItem[]

    if (comparisonItems.some((i) => i.id === item.id)) {
      // Remove from comparison
      newComparisonItems = comparisonItems.filter((i) => i.id !== item.id)
    } else {
      // Add to comparison if not at max
      if (comparisonItems.length < maxComparisonItems) {
        newComparisonItems = [...comparisonItems, item]
      } else {
        // At max comparison items
        return
      }
    }

    setComparisonItems(newComparisonItems)
    if (onComparisonChange) {
      onComparisonChange(newComparisonItems)
    }
  }

  // Load more items
  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 9)
  }

  // Skeleton loader for cards
  const SkeletonCard = () => (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 bg-gray-200 animate-pulse" />
      <div className="p-4">
        <div className="h-4 bg-gray-200 rounded animate-pulse mb-2 w-1/4" />
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-4 w-3/4" />
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>
        <div className="flex gap-1 mb-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-6 bg-gray-200 rounded-full animate-pulse w-16" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <div className="h-3 bg-gray-200 rounded animate-pulse mb-1 w-1/2" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
            </div>
          ))}
        </div>
        <div className="h-10 bg-gray-200 rounded animate-pulse mt-4" />
      </div>
    </div>
  )

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Mobile filter toggle */}
      {isMobile && (
        <div className="mb-4">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white border border-gray-300 rounded-md shadow-sm"
          >
            <Search className="w-4 h-4" />
            <span>Filter & Search</span>
          </button>
        </div>
      )}

      {/* Filter sidebar - desktop always visible, mobile in modal */}
      {isMobile ? (
        <AnimatePresence>
          {mobileFiltersOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setMobileFiltersOpen(false)}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="absolute inset-y-0 left-0 w-full max-w-xs"
                onClick={(e) => e.stopPropagation()}
              >
                <FilterSidebar
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onSortChange={setSortBy}
                  sortBy={sortBy}
                  isMobile={true}
                  onClose={() => setMobileFiltersOpen(false)}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="w-full md:w-64 flex-shrink-0">
          <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onSortChange={setSortBy}
            sortBy={sortBy}
          />
        </div>
      )}

      {/* Main content area */}
      <div className="flex-grow">
        {/* Search bar */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search curricula by name, publisher, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Active filters */}
        <ActiveFilters
          filters={filters}
          onRemoveFilter={handleRemoveFilter}
          onClearAllFilters={handleClearAllFilters}
        />

        {/* Results count */}
        <div className="mb-4">
          <Text className="text-gray-600">
            {isLoading
              ? "Loading results..."
              : `Showing ${Math.min(visibleItems, sortedItems.length)} of ${sortedItems.length} results`}
          </Text>
        </div>

        {/* Results grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Skeleton loaders
            Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
          ) : sortedItems.length > 0 ? (
            // Actual results
            displayedItems.map((item) => (
              <EnhancedCurriculumCard
                key={item.id}
                curriculum={item}
                isInComparison={comparisonItems.some((i) => i.id === item.id)}
                onToggleComparison={handleToggleComparison}
                maxComparisonReached={
                  comparisonItems.length >= maxComparisonItems && !comparisonItems.some((i) => i.id === item.id)
                }
              />
            ))
          ) : (
            // No results
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <div className="bg-gray-100 p-3 rounded-full mb-4">
                <AlertCircle className="w-8 h-8 text-gray-500" />
              </div>
              <Heading as="h3" size="sm" className="mb-2">
                No results found
              </Heading>
              <Text className="text-gray-600 mb-4">
                Try adjusting your filters or search query to find what you're looking for.
              </Text>
              <button
                onClick={handleClearAllFilters}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Load more button */}
        {!isLoading && hasMoreItems && (
          <div className="mt-8 text-center">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
            >
              Load More
            </button>
          </div>
        )}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center mt-8">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        )}
      </div>
    </div>
  )
}
