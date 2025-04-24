import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { statesData } from "@/lib/states-data"
import { enhancedStatesData } from "@/lib/enhanced-state-data"
import { MapPin, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Homeschool Laws by State | HomeRoots",
  description:
    "Explore homeschooling requirements, regulations, and resources for all 50 states. Find detailed information about your state's homeschool laws.",
  keywords: ["homeschool laws", "state homeschool requirements", "homeschooling regulations", "homeschool by state"],
}

export default function StatesPage() {
  // Convert the object to an array and sort alphabetically by state name
  const states = Object.entries(statesData)
    .map(([code, data]) => {
      // Check if we have enhanced data for this state
      const hasEnhancedData = code in enhancedStatesData

      // Determine regulation level
      let regulationLevel = "moderate"
      if (hasEnhancedData) {
        regulationLevel = enhancedStatesData[code].regulationLevel
      }

      return {
        code,
        ...data,
        hasEnhancedData,
        regulationLevel,
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Homeschool Laws by State</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Select your state to learn about homeschooling requirements, regulations, and resources specific to your
          location.
        </p>

        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search for your state..." className="pl-10" />
        </div>
        <div className="flex justify-center mt-4">
          <Button asChild>
            <Link href="/compare" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
                <path d="M10 19v-3.96 3.15" />
                <path d="M7 19h5" />
                <rect width="7" height="5" x="16" y="14" rx="1" />
                <path d="M21 12V8h-7" />
                <path d="m18 5-3 3 3 3" />
              </svg>
              Compare States
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
          Low Regulation
        </Badge>
        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
          Moderate Regulation
        </Badge>
        <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
          High Regulation
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {states.map((state) => {
          const regulationLevelColor = {
            low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
            moderate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
            high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
          }

          return (
            <Card key={state.code} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    {state.name}
                    <Badge variant="outline" className={regulationLevelColor[state.regulationLevel]}>
                      {state.regulationLevel === "low" && "Low"}
                      {state.regulationLevel === "moderate" && "Moderate"}
                      {state.regulationLevel === "high" && "High"}
                    </Badge>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="h-3 w-3 mr-1" /> {state.code}
                  </div>
                </div>
                <CardDescription className="line-clamp-2 mt-1">{state.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/states/${state.code.toLowerCase()}`} className="text-primary hover:underline font-medium">
                  View requirements →
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
