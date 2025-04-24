"use client"

import { useComparison } from "@/lib/comparison-context"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, X, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function CurriculumComparisonClient() {
  const { comparedItems, removeFromComparison } = useComparison()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (comparedItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h2 className="text-2xl font-bold mb-4">No curricula selected for comparison</h2>
        <p className="text-muted-foreground mb-8">Please select curricula to compare from the curriculum finder.</p>
        <Button onClick={() => router.push("/curriculum-finder")}>Back to Curriculum Finder</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8">
        <Button variant="outline" size="sm" onClick={() => router.push("/curriculum-finder")} className="mr-4">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Curriculum Finder
        </Button>
        <h1 className="text-3xl font-bold">Curriculum Comparison</h1>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-white z-10 p-4 border-b-2 min-w-[200px]"></th>
                  {comparedItems.map((item) => (
                    <th key={item.id} className="p-4 border-b-2 min-w-[250px] text-center relative">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                        onClick={() => removeFromComparison(item.id)}
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Remove {item.name}</span>
                      </Button>
                      <div className="h-16 flex items-center justify-center mb-2">
                        <img
                          src={item.logoUrl || "/placeholder.svg"}
                          alt={`${item.name} logo`}
                          className="max-h-16 max-w-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.publisher}</p>
                      <div className="flex items-center justify-center mt-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{item.rating}</span>
                        <span className="text-xs text-muted-foreground ml-1">({item.reviewCount})</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Description</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <p className="text-sm">{item.description}</p>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Subjects</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <div className="flex flex-wrap gap-1">
                        {item.subjects.map((subject) => (
                          <Badge key={subject} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Grade Levels</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <div className="flex flex-wrap gap-1">
                        {item.gradeLevel.map((grade) => (
                          <Badge key={grade} variant="outline" className="text-xs">
                            {grade}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Religious Affiliation</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <Badge variant={item.religiousAffiliation === "Secular" ? "secondary" : "outline"}>
                        {item.religiousAffiliation}
                      </Badge>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Cost</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <p className="font-medium">{item.costRange}</p>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Time Commitment</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <p>{item.timeCommitment}</p>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Website</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <Button variant="outline" size="sm" asChild>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          Visit Website
                        </a>
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="details">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-white z-10 p-4 border-b-2 min-w-[200px]"></th>
                  {comparedItems.map((item) => (
                    <th key={item.id} className="p-4 border-b-2 min-w-[250px] text-center">
                      <div className="h-12 flex items-center justify-center mb-2">
                        <img
                          src={item.logoUrl || "/placeholder.svg"}
                          alt={`${item.name} logo`}
                          className="max-h-12 max-w-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Teaching Style</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <div className="flex flex-wrap gap-1">
                        {item.teachingStyle.map((style) => (
                          <Badge key={style} variant="outline" className="text-xs">
                            {style}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Format</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <div className="flex flex-wrap gap-1">
                        {item.format.map((format) => (
                          <Badge key={format} variant="outline" className="text-xs">
                            {format}
                          </Badge>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-white z-10 p-4 border-b-2 min-w-[200px]"></th>
                  {comparedItems.map((item) => (
                    <th key={item.id} className="p-4 border-b-2 min-w-[250px] text-center">
                      <div className="h-12 flex items-center justify-center mb-2">
                        <img
                          src={item.logoUrl || "/placeholder.svg"}
                          alt={`${item.name} logo`}
                          className="max-h-12 max-w-full object-contain"
                        />
                      </div>
                      <h3 className="text-lg font-bold">{item.name}</h3>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="sticky left-0 bg-white z-10 p-4 border-b font-medium">Key Features</td>
                  {comparedItems.map((item) => (
                    <td key={item.id} className="p-4 border-b">
                      <ul className="list-disc pl-5 space-y-1">
                        {item.features.map((feature, index) => (
                          <li key={index} className="text-sm">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
