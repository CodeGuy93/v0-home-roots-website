"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Video, Bookmark, BookOpen, Search } from "lucide-react"

type Resource = {
  id: string
  title: string
  description: string
  type: "pdf" | "video" | "article" | "printable" | "worksheet"
  category: "curriculum" | "planning" | "legal" | "activities" | "special-needs"
  tags: string[]
  premium: boolean
}

const resources: Resource[] = [
  {
    id: "r1",
    title: "Homeschool Planning Calendar Template",
    description: "A customizable 12-month planning calendar for organizing your homeschool year.",
    type: "pdf",
    category: "planning",
    tags: ["planning", "organization", "templates"],
    premium: false,
  },
  {
    id: "r2",
    title: "50 States Study Guide",
    description: "Comprehensive guide to learning about all 50 states with activities and worksheets.",
    type: "pdf",
    category: "curriculum",
    tags: ["geography", "elementary", "middle-school"],
    premium: false,
  },
  {
    id: "r3",
    title: "How to Choose the Right Curriculum",
    description: "Video guide to selecting curriculum based on learning styles and educational goals.",
    type: "video",
    category: "curriculum",
    tags: ["curriculum", "getting-started"],
    premium: false,
  },
  {
    id: "r4",
    title: "Homeschool Record Keeping Systems",
    description: "Comparison of different record keeping methods to satisfy state requirements.",
    type: "article",
    category: "legal",
    tags: ["record-keeping", "compliance", "organization"],
    premium: false,
  },
  {
    id: "r5",
    title: "100 Nature Study Activities",
    description: "Printable guide with 100 nature study activities for all seasons.",
    type: "printable",
    category: "activities",
    tags: ["nature-study", "science", "outdoor"],
    premium: true,
  },
  {
    id: "r6",
    title: "Math Fact Mastery Worksheets",
    description:
      "Progressive worksheets for building math fact fluency in addition, subtraction, multiplication, and division.",
    type: "worksheet",
    category: "curriculum",
    tags: ["math", "elementary"],
    premium: true,
  },
  {
    id: "r7",
    title: "Accommodations for Learning Differences",
    description: "Guide to adapting curriculum and teaching methods for children with learning differences.",
    type: "pdf",
    category: "special-needs",
    tags: ["special-needs", "accommodations", "learning-differences"],
    premium: true,
  },
  {
    id: "r8",
    title: "Homeschool Co-op Starter Guide",
    description: "Step-by-step guide to starting or joining a homeschool co-op in your area.",
    type: "pdf",
    category: "planning",
    tags: ["co-op", "community", "socialization"],
    premium: false,
  },
]

const typeIcons = {
  pdf: <FileText className="w-5 h-5" />,
  video: <Video className="w-5 h-5" />,
  article: <BookOpen className="w-5 h-5" />,
  printable: <Download className="w-5 h-5" />,
  worksheet: <FileText className="w-5 h-5" />,
}

export default function ResourceLibrary() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeType, setActiveType] = useState<string | null>(null)
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleTypeFilter = (type: string) => {
    setActiveType(activeType === type ? null : type)
  }

  const handleTagFilter = (tag: string) => {
    setActiveTag(activeTag === tag ? null : tag)
  }

  const filteredResources = resources.filter((resource) => {
    // Search filter
    const matchesSearch =
      searchTerm === "" ||
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())

    // Category filter
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory

    // Type filter
    const matchesType = activeType === null || resource.type === activeType

    // Tag filter
    const matchesTag = activeTag === null || resource.tags.includes(activeTag)

    return matchesSearch && matchesCategory && matchesType && matchesTag
  })

  // Get all unique tags
  const allTags = Array.from(new Set(resources.flatMap((resource) => resource.tags)))

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Homeschool Resource Library
          </h2>
          <p className="text-xl text-gray-600">
            Browse our collection of free and premium resources to support your homeschooling journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10 h-12"
            />
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="all" className="text-base py-2 px-4">
                All Resources
              </TabsTrigger>
              <TabsTrigger value="curriculum" className="text-base py-2 px-4">
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="planning" className="text-base py-2 px-4">
                Planning
              </TabsTrigger>
              <TabsTrigger value="legal" className="text-base py-2 px-4">
                Legal
              </TabsTrigger>
              <TabsTrigger value="activities" className="text-base py-2 px-4">
                Activities
              </TabsTrigger>
              <TabsTrigger value="special-needs" className="text-base py-2 px-4">
                Special Needs
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <div className="mr-2 text-sm font-medium text-gray-700">Filter by type:</div>
            <Button
              variant={activeType === "pdf" ? "default" : "outline"}
              size="sm"
              onClick={() => handleTypeFilter("pdf")}
              className={activeType === "pdf" ? "bg-green-700 hover:bg-green-800" : ""}
            >
              <FileText className="w-4 h-4 mr-1" /> PDFs
            </Button>
            <Button
              variant={activeType === "video" ? "default" : "outline"}
              size="sm"
              onClick={() => handleTypeFilter("video")}
              className={activeType === "video" ? "bg-green-700 hover:bg-green-800" : ""}
            >
              <Video className="w-4 h-4 mr-1" /> Videos
            </Button>
            <Button
              variant={activeType === "printable" ? "default" : "outline"}
              size="sm"
              onClick={() => handleTypeFilter("printable")}
              className={activeType === "printable" ? "bg-green-700 hover:bg-green-800" : ""}
            >
              <Download className="w-4 h-4 mr-1" /> Printables
            </Button>
            <Button
              variant={activeType === "worksheet" ? "default" : "outline"}
              size="sm"
              onClick={() => handleTypeFilter("worksheet")}
              className={activeType === "worksheet" ? "bg-green-700 hover:bg-green-800" : ""}
            >
              <FileText className="w-4 h-4 mr-1" /> Worksheets
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <div className="mr-2 text-sm font-medium text-gray-700">Popular tags:</div>
            {allTags.slice(0, 8).map((tag) => (
              <Badge
                key={tag}
                variant={activeTag === tag ? "default" : "outline"}
                className={`cursor-pointer ${
                  activeTag === tag ? "bg-green-700 hover:bg-green-800" : "hover:bg-green-50"
                }`}
                onClick={() => handleTagFilter(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <Card key={resource.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center">
                          <div className="bg-green-100 p-2 rounded-full mr-3">{typeIcons[resource.type]}</div>
                          <div>
                            <h3 className="font-medium text-lg line-clamp-1">{resource.title}</h3>
                            <div className="flex items-center text-sm text-gray-500">
                              <span className="capitalize">{resource.type}</span>
                              {resource.premium && (
                                <Badge className="ml-2 bg-amber-500 hover:bg-amber-600">Premium</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-green-700">
                          <Bookmark className="w-5 h-5" />
                        </Button>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="bg-gray-50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        className={
                          resource.premium
                            ? "bg-amber-500 hover:bg-amber-600 w-full"
                            : "bg-green-700 hover:bg-green-800 w-full"
                        }
                      >
                        {resource.premium ? "Unlock Resource" : "Download Now"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <div className="text-gray-400 mb-2">
                  <Search className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-xl font-medium mb-2">No resources found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </div>

          {filteredResources.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                Load More Resources
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
