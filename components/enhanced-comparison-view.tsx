"use client"

import { useState, useEffect } from "react"
import { useComparison } from "@/lib/comparison-context"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, X, ArrowLeft, Check, AlertCircle, Info } from "lucide-react"
import Image from "next/image"
import { Text, Heading } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function EnhancedComparisonView() {
  const { comparedItems, removeFromComparison } = useComparison()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (comparedItems.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-16 px-4"
      >
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 mb-6">
          <AlertCircle className="h-12 w-12 text-gray-500 dark:text-gray-400" />
        </div>
        <Heading as="h2" size="lg" className="mb-4 text-center">
          No curricula selected for comparison
        </Heading>
        <Text className="text-gray-600 dark:text-gray-400 mb-8 text-center max-w-md">
          Please select curricula to compare from the curriculum finder. You can add up to 4 curricula to compare side
          by side.
        </Text>
        <Button onClick={() => router.push("/curriculum-finder")} className="bg-primary-600 hover:bg-primary-700">
          Back to Curriculum Finder
        </Button>
      </motion.div>
    )
  }

  // Helper function to render feature comparison
  const renderFeatureComparison = (feature: string) => {
    return comparedItems.map((item) => (
      <td key={`${item.id}-${feature}`} className="p-4 border-b text-center">
        {item.features.includes(feature) ? (
          <Check className="h-5 w-5 text-green-500 mx-auto" />
        ) : (
          <X className="h-5 w-5 text-gray-300 dark:text-gray-700 mx-auto" />
        )}
      </td>
    ))
  }

  // Get all unique features across all compared items
  const allFeatures = Array.from(new Set(comparedItems.flatMap((item) => item.features))).sort()

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push("/curriculum-finder")}
          className="mr-4 border-gray-300 dark:border-gray-700"
        >
          <ArrowLeft className="mr-1.5 h-4 w-4" />
          Back to Curriculum Finder
        </Button>
        <Heading as="h1" size="xl">
          Curriculum Comparison
        </Heading>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-8 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
          <TabsTrigger value="overview" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900">
            Overview
          </TabsTrigger>
          <TabsTrigger value="details" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900">
            Details
          </TabsTrigger>
          <TabsTrigger value="features" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900">
            Features
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="sticky left-0 bg-gray-50 dark:bg-gray-800 z-10 p-4 border-b min-w-[200px] text-left">
                      <Text className="font-semibold text-gray-700 dark:text-gray-300">Curriculum</Text>
                    </th>
                    {comparedItems.map((item) => (
                      <th key={item.id} className="p-4 border-b min-w-[250px] text-center relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          onClick={() => removeFromComparison(item.id)}
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Remove {item.name}</span>
                        </Button>
                        <div className="h-16 flex items-center justify-center mb-2">
                          {item.logoUrl ? (
                            <Image
                              src={item.logoUrl || "/placeholder.svg"}
                              alt={`${item.name} logo`}
                              width={160}
                              height={64}
                              className="max-h-16 max-w-[160px] object-contain"
                            />
                          ) : (
                            <div className="h-16 w-40 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
                              <Text className="font-medium text-gray-500">{item.name}</Text>
                            </div>
                          )}
                        </div>
                        <Heading as="h3" size="sm" className="mb-1">
                          {item.name}
                        </Heading>
                        <Text className="text-sm text-gray-600 dark:text-gray-400">{item.publisher}</Text>
                        <div className="flex items-center justify-center mt-2">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= Math.round(item.rating)
                                    ? "fill-amber-400 text-amber-400"
                                    : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                                }`}
                              />
                            ))}
                          </div>
                          <Text className="font-medium text-sm ml-2">{item.rating.toFixed(1)}</Text>
                          <Text className="text-xs text-gray-500 dark:text-gray-400 ml-1">({item.reviewCount})</Text>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                      <Text className="font-medium text-gray-900 dark:text-gray-100">Description</Text>
                    </td>
                    {comparedItems.map((item) => (
                      <td key={item.id} className="p-4 border-b">
                        <Text className="text-sm text-gray-700 dark:text-gray-300">{item.description}</Text>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                      <Text className="font-medium text-gray-900 dark:text-gray-100">Subjects</Text>
                    </td>
                    {comparedItems.map((item) => (
                      <td key={item.id} className="p-4 border-b">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {item.subjects.map((subject) => (
                            <Badge
                              key={subject}
                              variant="outline"
                              className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                            >
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                      <Text className="font-medium text-gray-900 dark:text-gray-100">Grade Levels</Text>
                    </td>
                    {comparedItems.map((item) => (
                      <td key={item.id} className="p-4 border-b">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {item.gradeLevel.map((grade) => (
                            <Badge
                              key={grade}
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                            >
                              {grade}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                      <Text className="font-medium text-gray-900 dark:text-gray-100">Religious Affiliation</Text>
                    </td>
                    {comparedItems.map((item) => (
                      <td key={item.id} className="p-4 border-b text-center">
                        <Badge
                          variant={item.religiousAffiliation === "Secular" ? "secondary" : "outline"}
                          className={cn(
                            item.religiousAffiliation === "Christian"
                              ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                              : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
                          )}
                        >
                          {item.religiousAffiliation}
                        </Badge>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                      <Text className="font-medium text-gray-900 dark:text-gray-100">Cost</Text>
                    </td>
                    {comparedItems.map((item) => (
                      <td key={item.id} className="p-4 border-b text-center">
                        <Badge
                          variant="outline"
                          className={cn(
                            "font-medium",
                            item.costRange === "Free"
                              ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                              : item.costRange === "$"
                                ? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                                : item.costRange === "$$"
                                  ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800"
                                  : "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
                          )}
                        >
                          {item.costRange}
                        </Badge>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                      <Text className="font-medium text-gray-900 dark:text-gray-100">Time Commitment</Text>
                    </td>
                    {comparedItems.map((item) => (
                      <td key={item.id} className="p-4 border-b text-center">
                        <Text>{item.timeCommitment}</Text>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                      <Text className="font-medium text-gray-900 dark:text-gray-100">Website</Text>
                    </td>
                    {comparedItems.map((item) => (
                      <td key={item.id} className="p-4 border-b text-center">
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            Visit Website
                            <ArrowLeft className="ml-1.5 h-3.5 w-3.5 rotate-[135deg]" />
                          </a>
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="details" className="mt-0">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="sticky left-0 bg-gray-50 dark:bg-gray-800 z-10 p-4 border-b min-w-[200px] text-left">
                      <Text className="font-semibold text-gray-700 dark:text-gray-300">Curriculum</Text>
                    </th>
                    {comparedItems.map((item) => (
                      <th key={item.id} className="p-4 border-b min-w-[250px] text-center">
                        <div className="h-12 flex items-center justify-center mb-2">
                          {item.logoUrl ? (
                            <Image
                              src={item.logoUrl || "/placeholder.svg"}
                              alt={`${item.name} logo`}
                              width={120}
                              height={48}
                              className="max-h-12 max-w-[120px] object-contain"
                            />
                          ) : (
                            <div className="h-12 w-32 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
                              <Text className="font-medium text-gray-500">{item.name}</Text>
                            </div>
                          )}
                        </div>
                        <Heading as="h3" size="sm">
                          {item.name}
                        </Heading>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                      <div className="flex items-center">
                        <Text className="font-medium text-gray-900 dark:text-gray-100">Teaching Style</Text>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-1">
                                <Info className="h-4 w-4 text-gray-500" />
                                <span className="sr-only">Teaching style information</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <Text className="text-sm">The primary teaching approach used by this curriculum</Text>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    {comparedItems.map((item) => (
                      <td key={item.id} className="p-4 border-b">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {item.teachingStyle.map((style) => (
                            <Badge
                              key={style}
                              variant="outline"
                              className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800"
                            >
                              {style}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                      <div className="flex items-center">
                        <Text className="font-medium text-gray-900 dark:text-gray-100">Format</Text>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-1">
                                <Info className="h-4 w-4 text-gray-500" />
                                <span className="sr-only">Format information</span>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <Text className="text-sm">
                                The physical or digital format of the curriculum materials
                              </Text>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    {comparedItems.map((item) => (
                      <td key={item.id} className="p-4 border-b">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {item.format.map((format) => (
                            <Badge
                              key={format}
                              variant="outline"
                              className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800"
                            >
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
          </div>
        </TabsContent>

        <TabsContent value="features" className="mt-0">
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="sticky left-0 bg-gray-50 dark:bg-gray-800 z-10 p-4 border-b min-w-[200px] text-left">
                      <Text className="font-semibold text-gray-700 dark:text-gray-300">Feature</Text>
                    </th>
                    {comparedItems.map((item) => (
                      <th key={item.id} className="p-4 border-b min-w-[250px] text-center">
                        <div className="h-12 flex items-center justify-center mb-2">
                          {item.logoUrl ? (
                            <Image
                              src={item.logoUrl || "/placeholder.svg"}
                              alt={`${item.name} logo`}
                              width={120}
                              height={48}
                              className="max-h-12 max-w-[120px] object-contain"
                            />
                          ) : (
                            <div className="h-12 w-32 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded">
                              <Text className="font-medium text-gray-500">{item.name}</Text>
                            </div>
                          )}
                        </div>
                        <Heading as="h3" size="sm">
                          {item.name}
                        </Heading>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature) => (
                    <tr key={feature}>
                      <td className="sticky left-0 bg-white dark:bg-gray-900 z-10 p-4 border-b">
                        <Text className="font-medium text-gray-900 dark:text-gray-100">{feature}</Text>
                      </td>
                      {renderFeatureComparison(feature)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
