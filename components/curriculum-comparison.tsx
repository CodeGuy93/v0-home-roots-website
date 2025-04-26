"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

const curriculumTypes = [
  {
    id: "classical",
    name: "Classical",
    description:
      "Emphasizes language, literature, and history through the trivium stages of grammar, logic, and rhetoric.",
    bestFor: [
      "Families who value traditional education",
      "Literature and history enthusiasts",
      "Strong academic focus",
    ],
    features: {
      structure: "High",
      flexibility: "Medium",
      parentInvolvement: "High",
      cost: "Medium to High",
      timeCommitment: "High",
    },
  },
  {
    id: "charlotte-mason",
    name: "Charlotte Mason",
    description:
      "Focuses on living books, nature study, and short lessons with an emphasis on habits and character development.",
    bestFor: ["Nature lovers", "Literature-focused families", "Those who want a gentle approach"],
    features: {
      structure: "Medium",
      flexibility: "Medium",
      parentInvolvement: "Medium to High",
      cost: "Low to Medium",
      timeCommitment: "Medium",
    },
  },
  {
    id: "montessori",
    name: "Montessori",
    description: "Child-led learning with specialized materials in a prepared environment that fosters independence.",
    bestFor: ["Self-directed learners", "Families who value independence", "Multi-age learning environments"],
    features: {
      structure: "Low to Medium",
      flexibility: "High",
      parentInvolvement: "Low to Medium",
      cost: "Medium to High (for materials)",
      timeCommitment: "Medium",
    },
  },
  {
    id: "unschooling",
    name: "Unschooling",
    description: "Interest-led learning without formal curriculum, following the child's natural curiosity.",
    bestFor: ["Self-motivated learners", "Families seeking maximum flexibility", "Those who value natural learning"],
    features: {
      structure: "Very Low",
      flexibility: "Very High",
      parentInvolvement: "Medium (as facilitator)",
      cost: "Low",
      timeCommitment: "Varies",
    },
  },
]

export default function CurriculumComparison() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  const toggleSelection = (id: string) => {
    if (selectedTypes.includes(id)) {
      setSelectedTypes(selectedTypes.filter((type) => type !== id))
    } else {
      if (selectedTypes.length < 3) {
        setSelectedTypes([...selectedTypes, id])
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Find Your Homeschooling Approach
          </h2>
          <p className="text-xl text-gray-600">
            Compare different homeschooling methods to find what works best for your family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {curriculumTypes.map((type) => (
            <Card
              key={type.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedTypes.includes(type.id)
                  ? "border-green-500 shadow-md ring-2 ring-green-200"
                  : "border-gray-200 hover:border-green-200"
              }`}
              onClick={() => toggleSelection(type.id)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-lg">{type.name}</h3>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      selectedTypes.includes(type.id) ? "bg-green-500" : "bg-gray-200"
                    }`}
                  >
                    {selectedTypes.includes(type.id) && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{type.description}</p>
                <div className="text-xs text-gray-500">
                  {selectedTypes.includes(type.id) ? "Click to remove" : "Click to compare"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedTypes.length > 0 && (
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="p-4 text-left font-medium text-gray-700 border-b border-gray-200">Features</th>
                  {selectedTypes.map((id) => {
                    const type = curriculumTypes.find((t) => t.id === id)
                    return (
                      <th key={id} className="p-4 text-left font-medium text-gray-700 border-b border-gray-200">
                        {type?.name}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium">Structure Level</td>
                  {selectedTypes.map((id) => {
                    const type = curriculumTypes.find((t) => t.id === id)
                    return (
                      <td key={id} className="p-4 border-b border-gray-200">
                        {type?.features.structure}
                      </td>
                    )
                  })}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium">Flexibility</td>
                  {selectedTypes.map((id) => {
                    const type = curriculumTypes.find((t) => t.id === id)
                    return (
                      <td key={id} className="p-4 border-b border-gray-200">
                        {type?.features.flexibility}
                      </td>
                    )
                  })}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium">Parent Involvement</td>
                  {selectedTypes.map((id) => {
                    const type = curriculumTypes.find((t) => t.id === id)
                    return (
                      <td key={id} className="p-4 border-b border-gray-200">
                        {type?.features.parentInvolvement}
                      </td>
                    )
                  })}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium">Typical Cost</td>
                  {selectedTypes.map((id) => {
                    const type = curriculumTypes.find((t) => t.id === id)
                    return (
                      <td key={id} className="p-4 border-b border-gray-200">
                        {type?.features.cost}
                      </td>
                    )
                  })}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium">Time Commitment</td>
                  {selectedTypes.map((id) => {
                    const type = curriculumTypes.find((t) => t.id === id)
                    return (
                      <td key={id} className="p-4 border-b border-gray-200">
                        {type?.features.timeCommitment}
                      </td>
                    )
                  })}
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium">Best For</td>
                  {selectedTypes.map((id) => {
                    const type = curriculumTypes.find((t) => t.id === id)
                    return (
                      <td key={id} className="p-4 border-b border-gray-200">
                        <ul className="list-disc list-inside space-y-1">
                          {type?.bestFor.map((item, i) => (
                            <li key={i} className="text-sm">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </td>
                    )
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="mb-6 text-gray-700">
            Want personalized curriculum recommendations based on your child's learning style?
          </p>
          <Button className="bg-green-700 hover:bg-green-800">Take Our Curriculum Quiz</Button>
        </div>
      </div>
    </section>
  )
}
