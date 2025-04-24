"use client"

import { useState } from "react"
import { curriculumData } from "@/lib/curriculum-data"
import { EnhancedCurriculumResults } from "@/components/enhanced-curriculum-results"
import type { CurriculumItem } from "@/lib/types"
import { Heading, Text } from "@/components/ui/typography"

export default function ComponentTestPage() {
  const [comparisonItems, setComparisonItems] = useState<CurriculumItem[]>([])

  const handleComparisonChange = (items: CurriculumItem[]) => {
    setComparisonItems(items)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Heading as="h1" size="xl" className="mb-2">
          Component Test Page
        </Heading>
        <Text className="text-gray-600">This page demonstrates the enhanced curriculum finder components.</Text>
      </div>

      {comparisonItems.length > 0 && (
        <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <Heading as="h2" size="md" className="mb-2">
            Comparison Items
          </Heading>
          <div className="flex flex-wrap gap-2">
            {comparisonItems.map((item) => (
              <div key={item.id} className="bg-white px-3 py-1 rounded-full border border-blue-200">
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}

      <EnhancedCurriculumResults curriculumItems={curriculumData} onComparisonChange={handleComparisonChange} />
    </div>
  )
}
