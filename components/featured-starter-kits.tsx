import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { stateStarterKitContent } from "@/lib/starter-kit-data"
import { statesData } from "@/lib/states-data"
import { enhancedStatesData } from "@/lib/enhanced-state-data"
import Link from "next/link"
import StarterKitButton from "@/components/starter-kit-button"
import { Button } from "@/components/ui/button"
import StateRegulationBadge from "@/components/state-regulation-badge"

export default function FeaturedStarterKits() {
  // Get a few featured states
  const featuredStateCodes = ["TX", "CA", "FL", "NY", "PA"]

  const featuredStates = featuredStateCodes
    .filter((code) => code in stateStarterKitContent)
    .map((code) => {
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

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">State-Specific Starter Kits</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Download free resources customized for your state's homeschool laws and requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {featuredStates.map((state) => (
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

      <div className="text-center">
        <Button asChild>
          <Link href="/starter-kits">View All State Starter Kits</Link>
        </Button>
      </div>
    </section>
  )
}
