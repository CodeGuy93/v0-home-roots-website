"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, FileText, BookOpen, Users, HelpCircle, Calendar, ListChecks } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { enhancedStatesData } from "@/lib/enhanced-state-data"
import { statesData } from "@/lib/states-data"
import StateRequirementsSummary from "@/components/state-requirements-summary"
import StateResourcesList from "@/components/state-resources-list"
import StateFAQs from "@/components/state-faqs"
import StateLocalGroups from "@/components/state-local-groups"
import StateGettingStarted from "@/components/state-getting-started"
import EnhancedPDFGenerator from "@/components/enhanced-pdf-generator"
import StateChecklist from "@/components/state-checklist"
import { useEffect } from "react"
import StarterKitButton from "@/components/starter-kit-button"

// Separate component for tab query handling to avoid useSearchParams issues
const TabQueryHandler = () => {
  useEffect(() => {
    try {
      // Get tab from URL if present
      const searchParams = new URLSearchParams(window.location.search)
      const tabParam = searchParams.get("tab")

      if (tabParam) {
        const tabElement = document.querySelector(`[data-value="${tabParam}"]`) as HTMLButtonElement
        if (tabElement) {
          tabElement.click()
        }
      }
    } catch (error) {
      console.error("Error handling tab query:", error)
    }
  }, [])

  return null
}

export default function StatePageClient({ params }: { params: { code: string } }) {
  // Safety check for params
  if (!params || typeof params.code !== "string" || !params.code) {
    return notFound()
  }

  // Convert to uppercase safely
  let stateCode: string
  try {
    stateCode = String(params.code).toUpperCase()
  } catch (error) {
    console.error("Error converting state code to uppercase:", error)
    return notFound()
  }

  // Check if this is a valid state
  if (!Object.keys(statesData).includes(stateCode)) {
    return notFound()
  }

  // First check the enhanced data
  const enhancedStateData = enhancedStatesData[stateCode]

  // Fall back to basic data if enhanced isn't available yet
  const basicStateData = statesData[stateCode]

  // Safety check for basic state data
  if (!basicStateData) {
    return notFound()
  }

  // Use enhanced data if available, otherwise use basic data
  const stateData = enhancedStateData || {
    ...basicStateData,
    code: stateCode,
    regulationLevel: "moderate" as const, // Default if not specified
  }

  const regulationLevelColor = {
    low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    moderate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  return (
    <div className="container py-16">
      <TabQueryHandler />
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/states" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to all states
        </Link>
      </Button>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{stateData.name} Homeschool Laws</h1>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={regulationLevelColor[stateData.regulationLevel]}>
                {stateData.regulationLevel === "low" && "Low Regulation"}
                {stateData.regulationLevel === "moderate" && "Moderate Regulation"}
                {stateData.regulationLevel === "high" && "High Regulation"}
              </Badge>
              <p className="text-lg text-muted-foreground">{stateData.summary}</p>
            </div>
          </div>
          <StarterKitButton stateCode={stateCode} />
        </div>

        <Tabs defaultValue="requirements" className="mb-12">
          <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="requirements" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden md:inline">Requirements</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden md:inline">Resources</span>
            </TabsTrigger>
            <TabsTrigger value="local-groups" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="hidden md:inline">Local Groups</span>
            </TabsTrigger>
            <TabsTrigger value="faqs" className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              <span className="hidden md:inline">FAQs</span>
            </TabsTrigger>
            <TabsTrigger value="getting-started" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden md:inline">Getting Started</span>
            </TabsTrigger>
            <TabsTrigger value="checklist" className="flex items-center gap-2">
              <ListChecks className="h-4 w-4" />
              <span className="hidden md:inline">Checklist</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="requirements">
            <StateRequirementsSummary stateData={stateData} />
          </TabsContent>

          <TabsContent value="resources">
            <StateResourcesList stateData={stateData} />
          </TabsContent>

          <TabsContent value="local-groups">
            <StateLocalGroups stateData={stateData} />
          </TabsContent>

          <TabsContent value="faqs">
            <StateFAQs stateData={stateData} />
          </TabsContent>

          <TabsContent value="getting-started" id="getting-started">
            <StateGettingStarted stateData={stateData} />
          </TabsContent>

          <TabsContent value="checklist">
            <StateChecklist stateCode={stateCode} stateName={stateData.name} />
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start homeschooling in {stateData.name}?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StarterKitButton stateCode={stateCode} size="lg" />
            <EnhancedPDFGenerator stateCode={stateCode} stateName={stateData.name} />
            <Button variant="outline" asChild size="lg">
              <Link href="/community">Find Local Co-ops</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
