import type { CurriculumItem, CurriculumFilters } from "./types"

export function filterCurriculum(
  curriculumItems: CurriculumItem[],
  filters: Partial<CurriculumFilters>,
): CurriculumItem[] {
  return curriculumItems.filter((item) => {
    // Filter by subjects
    if (filters.subjects && filters.subjects.length > 0) {
      if (!item.subjects.some((subject) => filters.subjects!.includes(subject))) {
        return false
      }
    }

    // Filter by grade levels
    if (filters.gradeLevels && filters.gradeLevels.length > 0) {
      if (!item.gradeLevel.some((grade) => filters.gradeLevels!.includes(grade))) {
        return false
      }
    }

    // Filter by teaching styles
    if (filters.teachingStyles && filters.teachingStyles.length > 0) {
      if (!item.teachingStyle.some((style) => filters.teachingStyles!.includes(style))) {
        return false
      }
    }

    // Filter by formats
    if (filters.formats && filters.formats.length > 0) {
      if (!item.format.some((format) => filters.formats!.includes(format))) {
        return false
      }
    }

    // Filter by religious affiliation
    if (filters.religiousAffiliation && filters.religiousAffiliation.length > 0) {
      if (!filters.religiousAffiliation.includes(item.religiousAffiliation)) {
        return false
      }
    }

    // Filter by time commitment
    if (filters.timeCommitment && filters.timeCommitment.length > 0) {
      if (!filters.timeCommitment.includes(item.timeCommitment)) {
        return false
      }
    }

    // Filter by cost range
    if (filters.costRange && filters.costRange.length > 0) {
      if (!filters.costRange.includes(item.costRange)) {
        return false
      }
    }

    return true
  })
}

export function sortCurriculum(curriculumItems: CurriculumItem[], sortBy: string): CurriculumItem[] {
  const sortedItems = [...curriculumItems]

  switch (sortBy) {
    case "rating":
      return sortedItems.sort((a, b) => b.rating - a.rating)
    case "reviews":
      return sortedItems.sort((a, b) => b.reviewCount - a.reviewCount)
    case "name-asc":
      return sortedItems.sort((a, b) => a.name.localeCompare(b.name))
    case "name-desc":
      return sortedItems.sort((a, b) => b.name.localeCompare(a.name))
    case "cost-asc":
      return sortedItems.sort((a, b) => {
        const costOrder = { Free: 0, $: 1, $$: 2, $$$: 3 }
        const aCost = a.costRange.startsWith("$") ? a.costRange : "Free"
        const bCost = b.costRange.startsWith("$") ? b.costRange : "Free"
        return costOrder[aCost as keyof typeof costOrder] - costOrder[bCost as keyof typeof costOrder]
      })
    case "cost-desc":
      return sortedItems.sort((a, b) => {
        const costOrder = { Free: 0, $: 1, $$: 2, $$$: 3 }
        const aCost = a.costRange.startsWith("$") ? a.costRange : "Free"
        const bCost = b.costRange.startsWith("$") ? b.costRange : "Free"
        return costOrder[bCost as keyof typeof costOrder] - costOrder[aCost as keyof typeof costOrder]
      })
    default:
      return sortedItems
  }
}
