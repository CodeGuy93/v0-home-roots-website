"use client"

import { useComparison } from "@/lib/comparison-context"
import { Button } from "@/components/ui/button"
import { X, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function ComparisonBar() {
  const { comparedItems, removeFromComparison, clearComparison } = useComparison()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (comparedItems.length === 0) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50 p-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-medium text-sm mr-4">Comparing {comparedItems.length} curricula</span>
            <div className="flex space-x-2 overflow-x-auto max-w-[50vw] pb-1">
              {comparedItems.map((item) => (
                <div key={item.id} className="flex items-center bg-gray-100 rounded-md p-1 pr-2">
                  <div className="h-8 w-8 mr-2 flex-shrink-0 bg-white rounded overflow-hidden">
                    <img
                      src={item.logoUrl || "/placeholder.svg"}
                      alt={`${item.name} logo`}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>
                  <span className="text-sm font-medium mr-1 truncate max-w-[100px]">{item.name}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-5 w-5 p-0 rounded-full"
                    onClick={() => removeFromComparison(item.id)}
                  >
                    <X className="h-3 w-3" />
                    <span className="sr-only">Remove {item.name}</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={clearComparison}>
              Clear All
            </Button>
            <Button size="sm" onClick={() => router.push("/curriculum-finder/compare")} className="flex items-center">
              Compare Now <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
