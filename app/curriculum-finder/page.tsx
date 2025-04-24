import type { Metadata } from "next"
import CurriculumFinderClient from "./curriculum-finder-client"

export const metadata: Metadata = {
  title: "Curriculum Finder | HomeRoots",
  description: "Find the perfect homeschool curriculum based on your preferences and needs.",
}

export default function CurriculumFinderPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Homeschool Curriculum Finder</h1>
          <p className="text-lg text-muted-foreground">
            Find the perfect curriculum that matches your teaching style, student needs, and family values.
          </p>
        </div>

        <CurriculumFinderClient />
      </div>
    </div>
  )
}
