import type { Metadata } from "next"
import CurriculumComparisonClient from "./curriculum-comparison-client"

export const metadata: Metadata = {
  title: "Compare Curricula | HomeRoots",
  description: "Compare different homeschool curricula side-by-side to find the best fit for your family.",
}

export default function CurriculumComparisonPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Curriculum Comparison</h1>
        <p className="text-lg text-muted-foreground">
          Compare curricula side-by-side to find the perfect match for your homeschooling needs.
        </p>
      </div>

      <CurriculumComparisonClient />
    </div>
  )
}
