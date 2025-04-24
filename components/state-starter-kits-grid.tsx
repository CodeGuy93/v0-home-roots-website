"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { statesData } from "@/lib/states-data"
import { stateStarterKitContent } from "@/lib/starter-kit-data"
import { Search } from "lucide-react"
import StarterKitButton from "@/components/starter-kit-button"
import StateRegulationBadge from "@/components/state-regulation-badge"
import { enhancedStatesData } from "@/lib/enhanced-state-data"

export default function StateStarterKitsGrid() {
  const [searchTerm, setSearchTerm] = useState("")

  // Get all states that have starter kits
  const statesWithKits = Object.keys(stateStarterKitContent).map((code) => {
    // Determine regulation level
    let regulationLevel = "moderate" as "low" | "moderate" | "high"
    if (code in enhancedStatesData) {
      regulationLevel = enhancedStatesData[code].regulationLevel
    }

    return {
      code,
      name: statesData[code]?.name || code,
      regulationLevel,
    }
  })

  // Filter states based on search term
  const filteredStates = statesWithKits.filter(
    (state) =>
      state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.code.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search for your state..."
          className="pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStates.map((state) => (
          <Card key={state.code} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{state.name} Starter Kit</CardTitle>
                <StateRegulationBadge level={state.regulationLevel} size="sm" />
              </div>
              <CardDescription>Everything you need to start homeschooling in {state.name}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>State-specific legal requirements</li>
                <li>Sample withdrawal letter</li>
                <li>Record-keeping templates</li>
                <li>Local resources and groups</li>
                <li>Getting started checklist</li>
              </ul>
            </CardContent>
            <CardFooter>
              <StarterKitButton stateCode={state.code} className="w-full" variant="outline" />
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredStates.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No starter kits found</h3>
          <p className="text-muted-foreground">
            We're still building our library of state-specific starter kits.
            <br />
            Try our general homeschool starter kit instead:
          </p>
          <div className="mt-4">
            <StarterKitButton />
          </div>
        </div>
      )}
    </div>
  )
}
