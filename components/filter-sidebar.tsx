"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, X, SlidersHorizontal, Check } from "lucide-react"
import type { CurriculumFilters } from "@/lib/types"
import { Text, Heading } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

// Filter options
const subjects = [
  "Math",
  "Science",
  "Language Arts",
  "History",
  "Social Studies",
  "Foreign Language",
  "Art",
  "Music",
  "Physical Education",
  "Computer Science",
]

const gradeLevels = [
  "Pre-K",
  "K",
  "1st",
  "2nd",
  "3rd",
  "4th",
  "5th",
  "6th",
  "7th",
  "8th",
  "9th",
  "10th",
  "11th",
  "12th",
]

const teachingStyles = [
  "Classical",
  "Charlotte Mason",
  "Montessori",
  "Waldorf",
  "Unschooling",
  "Eclectic",
  "Traditional",
  "Unit Studies",
]

const formats = ["Online", "Print", "Video", "Interactive", "Workbooks", "Live Classes", "Self-paced", "Hybrid"]

const religiousAffiliations = [
  "Secular",
  "Christian",
  "Catholic",
  "Protestant",
  "Jewish",
  "Islamic",
  "Non-denominational",
]

const timeCommitments = ["Low (0-3 hrs/week)", "Medium (4-6 hrs/week)", "High (7+ hrs/week)"]

const costRanges = ["Free", "$", "$$", "$$$"]

const sortOptions = [
  { value: "rating", label: "Highest Rated" },
  { value: "reviews", label: "Most Reviewed" },
  { value: "name-asc", label: "Name (A-Z)" },
  { value: "name-desc", label: "Name (Z-A)" },
  { value: "cost-asc", label: "Price (Low to High)" },
  { value: "cost-desc", label: "Price (High to Low)" },
]

interface FilterSidebarProps {
  filters: Partial<CurriculumFilters>
  onFilterChange: (filters: Partial<CurriculumFilters>) => void
  onSortChange: (sortBy: string) => void
  sortBy: string
  isMobile?: boolean
  onClose?: () => void
}

export function FilterSidebar({
  filters,
  onFilterChange,
  onSortChange,
  sortBy,
  isMobile = false,
  onClose,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    subjects: true,
    gradeLevels: false,
    teachingStyles: false,
    formats: false,
    religiousAffiliation: false,
    timeCommitment: false,
    costRange: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleFilterChange = (filterType: keyof CurriculumFilters, value: string) => {
    const currentValues = filters[filterType] || []
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]

    onFilterChange({
      ...filters,
      [filterType]: newValues,
    })
  }

  const clearAllFilters = () => {
    onFilterChange({})
  }

  const getActiveFilterCount = () => {
    let count = 0
    Object.values(filters).forEach((filterValues) => {
      if (Array.isArray(filterValues)) {
        count += filterValues.length
      }
    })
    return count
  }

  const activeFilterCount = getActiveFilterCount()

  // Quick filters
  const quickFilters = [
    { name: "Elementary", filter: { gradeLevels: ["K", "1st", "2nd", "3rd", "4th", "5th"] } },
    { name: "Middle School", filter: { gradeLevels: ["6th", "7th", "8th"] } },
    { name: "High School", filter: { gradeLevels: ["9th", "10th", "11th", "12th"] } },
    { name: "Free Resources", filter: { costRange: ["Free"] } },
    { name: "Online Learning", filter: { formats: ["Online"] } },
  ]

  const applyQuickFilter = (quickFilter: { name: string; filter: Partial<CurriculumFilters> }) => {
    onFilterChange({
      ...filters,
      ...quickFilter.filter,
    })
  }

  const FilterSection = ({
    title,
    options,
    filterType,
    expanded,
  }: {
    title: string
    options: string[]
    filterType: keyof CurriculumFilters
    expanded: boolean
  }) => {
    const selectedValues = filters[filterType] || []

    return (
      <div className="mb-4">
        <button
          onClick={() => toggleSection(filterType as keyof typeof expandedSections)}
          className="flex items-center justify-between w-full py-2 text-left"
        >
          <div className="flex items-center">
            <Heading as="h3" size="xs">
              {title}
            </Heading>
            {selectedValues.length > 0 && (
              <span className="ml-2 px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                {selectedValues.length}
              </span>
            )}
          </div>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-1 space-y-1">
                {options.map((option) => (
                  <label key={option} className="flex items-center py-1 px-1 rounded hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedValues.includes(option)}
                      onChange={() => handleFilterChange(filterType, option)}
                      className="sr-only"
                    />
                    <div
                      className={cn(
                        "w-4 h-4 mr-2 rounded border flex items-center justify-center",
                        selectedValues.includes(option) ? "bg-blue-600 border-blue-600" : "border-gray-300",
                      )}
                    >
                      {selectedValues.includes(option) && <Check className="w-3 h-3 text-white" />}
                    </div>
                    <Text className="text-sm">{option}</Text>
                  </label>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div
      className={cn(
        "bg-white border border-gray-200 rounded-lg shadow-sm",
        isMobile ? "fixed inset-0 z-50 overflow-y-auto" : "sticky top-24",
      )}
    >
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            <SlidersHorizontal className="w-5 h-5 mr-2" />
            <Heading as="h2" size="sm">
              Filters
            </Heading>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="p-4">
        {/* Header with filter count and clear button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {!isMobile && (
              <>
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                <Heading as="h2" size="sm">
                  Filters
                </Heading>
              </>
            )}
            {activeFilterCount > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          {activeFilterCount > 0 && (
            <button onClick={clearAllFilters} className="text-sm text-blue-600 hover:text-blue-800">
              Clear All
            </button>
          )}
        </div>

        {/* Quick filters */}
        <div className="mb-6">
          <Heading as="h3" size="xs" className="mb-2">
            Quick Filters
          </Heading>
          <div className="flex flex-wrap gap-2">
            {quickFilters.map((qf) => (
              <button
                key={qf.name}
                onClick={() => applyQuickFilter(qf)}
                className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full"
              >
                {qf.name}
              </button>
            ))}
          </div>
        </div>

        {/* Sort options */}
        <div className="mb-6">
          <Heading as="h3" size="xs" className="mb-2">
            Sort By
          </Heading>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Filter sections */}
        <FilterSection title="Subjects" options={subjects} filterType="subjects" expanded={expandedSections.subjects} />

        <FilterSection
          title="Grade Levels"
          options={gradeLevels}
          filterType="gradeLevels"
          expanded={expandedSections.gradeLevels}
        />

        <FilterSection
          title="Teaching Styles"
          options={teachingStyles}
          filterType="teachingStyles"
          expanded={expandedSections.teachingStyles}
        />

        <FilterSection title="Formats" options={formats} filterType="formats" expanded={expandedSections.formats} />

        <FilterSection
          title="Religious Affiliation"
          options={religiousAffiliations}
          filterType="religiousAffiliation"
          expanded={expandedSections.religiousAffiliation}
        />

        <FilterSection
          title="Time Commitment"
          options={timeCommitments}
          filterType="timeCommitment"
          expanded={expandedSections.timeCommitment}
        />

        <FilterSection
          title="Cost Range"
          options={costRanges}
          filterType="costRange"
          expanded={expandedSections.costRange}
        />
      </div>
    </div>
  )
}
