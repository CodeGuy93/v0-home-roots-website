"use client"

import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { CurriculumFilters } from "@/lib/types"
import { Text } from "@/components/ui/typography"

interface ActiveFiltersProps {
  filters: Partial<CurriculumFilters>
  onRemoveFilter: (filterType: keyof CurriculumFilters, value: string) => void
  onClearAllFilters: () => void
}

export function ActiveFilters({ filters, onRemoveFilter, onClearAllFilters }: ActiveFiltersProps) {
  // Helper function to get all active filters as an array of objects
  const getActiveFilters = () => {
    const activeFilters: { type: keyof CurriculumFilters; value: string; label: string }[] = []

    // Map of filter types to human-readable labels
    const filterLabels: Record<keyof CurriculumFilters, string> = {
      subjects: "Subject",
      gradeLevels: "Grade",
      teachingStyles: "Style",
      formats: "Format",
      religiousAffiliation: "Religious",
      timeCommitment: "Time",
      costRange: "Cost",
    }

    Object.entries(filters).forEach(([filterType, values]) => {
      if (Array.isArray(values) && values.length > 0) {
        values.forEach((value) => {
          activeFilters.push({
            type: filterType as keyof CurriculumFilters,
            value,
            label: filterLabels[filterType as keyof CurriculumFilters] || filterType,
          })
        })
      }
    })

    return activeFilters
  }

  const activeFilters = getActiveFilters()

  if (activeFilters.length === 0) {
    return null
  }

  return (
    <div className="mb-4">
      <div className="flex flex-wrap items-center gap-2">
        <Text className="text-sm text-gray-600">Active filters:</Text>

        <AnimatePresence>
          {activeFilters.map((filter, index) => (
            <motion.div
              key={`${filter.type}-${filter.value}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center bg-blue-50 text-blue-800 rounded-full px-3 py-1 text-sm"
            >
              <span className="font-medium mr-1">{filter.label}:</span>
              <span>{filter.value}</span>
              <button
                onClick={() => onRemoveFilter(filter.type, filter.value)}
                className="ml-1 p-0.5 rounded-full hover:bg-blue-100"
                aria-label={`Remove ${filter.label} filter: ${filter.value}`}
              >
                <X className="w-3 h-3" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>

        {activeFilters.length > 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
            onClick={onClearAllFilters}
          >
            Clear all
          </motion.button>
        )}
      </div>
    </div>
  )
}
