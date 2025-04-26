"use client"

import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const successStories = [
  {
    id: "elementary",
    title: "Elementary Success",
    stories: [
      {
        name: "The Johnson Family",
        location: "Colorado",
        image: "/johnson-family.png",
        quote:
          "Our 8-year-old was struggling in traditional school. Since homeschooling, he's thriving academically and has discovered a love for science.",
        results: "Reading 2 grade levels ahead, completed science fair project that won regional recognition",
        approach: "Nature-based learning, literature-rich curriculum",
      },
      {
        name: "The Martinez Family",
        location: "Florida",
        image: "/placeholder.svg?key=martinez",
        quote:
          "We wanted our daughters to have a bilingual education. Homeschooling has allowed us to incorporate both English and Spanish into their daily learning.",
        results: "Fluent in two languages, strong cultural identity, advanced reading skills",
        approach: "Dual language immersion, cultural studies integration",
      },
    ],
  },
  {
    id: "middle",
    title: "Middle School Success",
    stories: [
      {
        name: "The Williams Family",
        location: "Georgia",
        image: "/placeholder.svg?key=williams",
        quote:
          "Our son was being bullied in middle school. Homeschooling gave him the safe space to rebuild his confidence while excelling academically.",
        results: "Increased confidence, advanced math placement, developed programming skills",
        approach: "Project-based learning, online courses, local co-op",
      },
      {
        name: "The Chen Family",
        location: "California",
        image: "/placeholder.svg?key=chen",
        quote:
          "Our daughter is a competitive gymnast. Homeschooling allows her to train during optimal hours while still receiving an excellent education.",
        results: "Qualified for national gymnastics competition while maintaining straight A's",
        approach: "Flexible scheduling, integrated physical education, condensed academic blocks",
      },
    ],
  },
  {
    id: "high",
    title: "High School Success",
    stories: [
      {
        name: "The Thompson Family",
        location: "Texas",
        image: "/placeholder.svg?key=thompson",
        quote:
          "We were concerned about college preparation, but our homeschooled son was accepted to his top-choice universities with scholarships.",
        results: "Accepted to 5 universities with merit scholarships, 32 ACT score",
        approach: "Dual enrollment at community college, rigorous curriculum, standardized test prep",
      },
      {
        name: "The Patel Family",
        location: "Illinois",
        image: "/placeholder.svg?key=patel",
        quote:
          "Our daughter wanted to start her own business. Homeschooling allowed her to incorporate entrepreneurship into her education.",
        results: "Launched successful Etsy shop while completing high school requirements",
        approach: "Business curriculum integration, mentorship program, flexible scheduling",
      },
    ],
  },
]

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState("elementary")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Real Homeschooling Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See how families like yours are thriving with homeschooling across different age groups.
          </p>
        </div>

        <Tabs defaultValue="elementary" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="elementary" className="text-base py-3">
                Elementary
              </TabsTrigger>
              <TabsTrigger value="middle" className="text-base py-3">
                Middle School
              </TabsTrigger>
              <TabsTrigger value="high" className="text-base py-3">
                High School
              </TabsTrigger>
            </TabsList>
          </div>

          {successStories.map((ageGroup) => (
            <TabsContent key={ageGroup.id} value={ageGroup.id} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ageGroup.stories.map((story, index) => (
                  <Card key={index} className="overflow-hidden border-green-100 hover:shadow-md transition-shadow">
                    <div className="aspect-[16/9] relative">
                      <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-medium text-xl">{story.name}</h3>
                          <p className="text-gray-500">{story.location}</p>
                        </div>
                        <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                          {ageGroup.title}
                        </div>
                      </div>

                      <blockquote className="border-l-4 border-green-200 pl-4 italic text-gray-700 mb-4">
                        "{story.quote}"
                      </blockquote>

                      <div className="space-y-3 mt-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Results:</h4>
                          <p className="text-sm text-gray-600">{story.results}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">Approach:</h4>
                          <p className="text-sm text-gray-600">{story.approach}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  View More {ageGroup.title} Stories
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
