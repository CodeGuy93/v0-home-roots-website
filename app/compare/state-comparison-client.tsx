"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StateSelector } from "@/components/state-selector"
import StateComparisonTable from "@/components/state-comparison-table"
import { getComparisonData, type ComparisonData } from "@/lib/comparison-utils"
import { ArrowLeft, Plus, X } from "lucide-react"
import Link from "next/link"

export default function StateComparisonClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedStates, setSelectedStates] = useState<string[]>([])
  const [comparisonData, setComparisonData] = useState<ComparisonData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Initialize from URL params
  useEffect(() => {
    const states = searchParams.get("states")
    if (states) {
      const statesList = states.split(",").filter(Boolean).slice(0, 3)
      setSelectedStates(statesList)
    }
    setIsLoading(false)
  }, [searchParams])

  // Update comparison data when selected states change
  useEffect(() => {
    if (selectedStates.length > 0) {
      const data = getComparisonData(selectedStates)
      setComparisonData(data)

      // Update URL
      const newParams = new URLSearchParams()
      newParams.set("states", selectedStates.join(","))
      router.push(`/compare?${newParams.toString()}`, { scroll: false })
    } else {
      setComparisonData([])
      router.push("/compare", { scroll: false })
    }
  }, [selectedStates, router])

  const addState = (stateCode: string) => {
    if (selectedStates.length < 3 && !selectedStates.includes(stateCode)) {
      setSelectedStates([...selectedStates, stateCode])
    }
  }

  const removeState = (index: number) => {
    const newStates = [...selectedStates]
    newStates.splice(index, 1)
    setSelectedStates(newStates)
  }

  if (isLoading) {
    return <div className="container py-16 flex justify-center">Loading...</div>
  }

  return (
    <div className="container py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/states" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to States
        </Link>
      </Button>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Compare Homeschool Requirements</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select up to three states to compare homeschooling requirements side-by-side.
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Select States to Compare</CardTitle>
            <CardDescription>
              Choose up to three states to see a detailed comparison of homeschooling requirements.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[0, 1, 2].map((index) => (
                <div key={index} className="relative">
                  {selectedStates[index] ? (
                    <>
                      <StateSelector
                        selectedState={selectedStates[index]}
                        onStateChange={(value) => {
                          const newStates = [...selectedStates]
                          newStates[index] = value
                          setSelectedStates(newStates)
                        }}
                        placeholder={`Select state ${index + 1}...`}
                        excludeStates={selectedStates.filter((_, i) => i !== index)}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        onClick={() => removeState(index)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove state</span>
                      </Button>
                    </>
                  ) : selectedStates.length < 3 && index === selectedStates.length ? (
                    <StateSelector
                      selectedState={null}
                      onStateChange={(value) => addState(value)}
                      placeholder={`Select state ${index + 1}...`}
                      excludeStates={selectedStates}
                    />
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full h-10 justify-center"
                      disabled={selectedStates.length >= 3 || index > selectedStates.length}
                      onClick={() => {
                        // This is just a placeholder as the StateSelector will handle the actual selection
                      }}
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add State
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <StateComparisonTable states={comparisonData} />
        </div>

        <div className="text-center text-sm text-muted-foreground mt-8">
          <p>
            Note: This comparison provides a general overview of homeschooling requirements. For the most up-to-date and
            detailed information, please visit each state's official education department website or consult with a
            homeschool legal expert.
          </p>
        </div>
      </div>
    </div>
  )
}
