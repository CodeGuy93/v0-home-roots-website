import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { statesData } from "@/lib/states-data"
import { enhancedStatesData } from "@/lib/enhanced-state-data"
import { stateStarterKitContent } from "@/lib/starter-kit-data"
import Link from "next/link"

export default function StateRegulationComparison() {
  // Group states by regulation level
  const statesByRegulation = {
    low: [] as { code: string; name: string }[],
    moderate: [] as { code: string; name: string }[],
    high: [] as { code: string; name: string }[],
  }

  // First, add states with starter kits
  Object.keys(stateStarterKitContent).forEach((code) => {
    const name = statesData[code]?.name || code
    let regulationLevel = "moderate" as "low" | "moderate" | "high"

    if (code in enhancedStatesData) {
      regulationLevel = enhancedStatesData[code].regulationLevel
    }

    statesByRegulation[regulationLevel].push({ code, name })
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>State Regulation Comparison</CardTitle>
        <CardDescription>
          Compare homeschool regulations across different states to understand requirements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="low">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="low" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Low Regulation
            </TabsTrigger>
            <TabsTrigger value="moderate" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              Moderate Regulation
            </TabsTrigger>
            <TabsTrigger value="high" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              High Regulation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="low" className="space-y-4">
            <p className="text-muted-foreground">
              States with low regulation typically have minimal requirements for homeschooling families. These states
              often don't require notification, specific subjects, testing, or parent qualifications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {statesByRegulation.low.map((state) => (
                <Link
                  key={state.code}
                  href={`/states/${state.code.toLowerCase()}`}
                  className="p-2 border rounded hover:bg-secondary transition-colors"
                >
                  {state.name}
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="moderate" className="space-y-4">
            <p className="text-muted-foreground">
              States with moderate regulation typically require notification and some form of assessment or
              record-keeping. These states often specify required subjects but have reasonable flexibility in
              implementation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {statesByRegulation.moderate.map((state) => (
                <Link
                  key={state.code}
                  href={`/states/${state.code.toLowerCase()}`}
                  className="p-2 border rounded hover:bg-secondary transition-colors"
                >
                  {state.name}
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="high" className="space-y-4">
            <p className="text-muted-foreground">
              States with high regulation have comprehensive requirements for homeschooling families. These states often
              require curriculum approval, regular assessment, parent qualifications, and detailed record-keeping.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {statesByRegulation.high.map((state) => (
                <Link
                  key={state.code}
                  href={`/states/${state.code.toLowerCase()}`}
                  className="p-2 border rounded hover:bg-secondary transition-colors"
                >
                  {state.name}
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
