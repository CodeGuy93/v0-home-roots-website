"use client"

import type { CurriculumItem } from "@/lib/types"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ExternalLink, Plus, Check } from "lucide-react"
import { useComparison } from "@/lib/comparison-context"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"

interface CurriculumCardProps {
  curriculum: CurriculumItem
}

export default function CurriculumCard({ curriculum }: CurriculumCardProps) {
  const { addToComparison, isInComparison, comparedItems } = useComparison()
  const [isHovered, setIsHovered] = useState(false)

  const handleAddToComparison = () => {
    if (comparedItems.length >= 4) {
      toast({
        title: "Comparison limit reached",
        description: "You can compare up to 4 curricula at once. Please remove an item to add another.",
        variant: "destructive",
      })
      return
    }

    addToComparison(curriculum)
    toast({
      title: "Added to comparison",
      description: `${curriculum.name} has been added to your comparison list.`,
    })
  }

  const alreadyInComparison = isInComparison(curriculum.id)

  return (
    <Card
      className="h-full flex flex-col relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(isHovered || alreadyInComparison) && (
        <div className="absolute top-2 right-2 z-10">
          <Button
            variant={alreadyInComparison ? "secondary" : "outline"}
            size="sm"
            className="h-8 px-2"
            onClick={handleAddToComparison}
            disabled={alreadyInComparison}
          >
            {alreadyInComparison ? (
              <>
                <Check className="h-3.5 w-3.5 mr-1" />
                Added
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5 mr-1" />
                Compare
              </>
            )}
          </Button>
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="h-12 flex items-center mb-2">
              <img
                src={curriculum.logoUrl || "/placeholder.svg"}
                alt={`${curriculum.name} logo`}
                className="max-h-12 max-w-full object-contain"
              />
            </div>
            <CardTitle className="text-xl mt-2">{curriculum.name}</CardTitle>
            <CardDescription className="text-sm">{curriculum.publisher}</CardDescription>
          </div>
          <div className="flex items-center ml-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium">{curriculum.rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({curriculum.reviewCount})</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-2">
        <div className="aspect-video bg-gray-100 rounded-md mb-4 overflow-hidden">
          <img
            src={curriculum.imageUrl || "/placeholder.svg"}
            alt={curriculum.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm mb-4 line-clamp-3">{curriculum.description}</p>
        <div className="space-y-3">
          <div>
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Subjects</h4>
            <div className="flex flex-wrap gap-1">
              {curriculum.subjects.slice(0, 3).map((subject) => (
                <Badge key={subject} variant="outline" className="text-xs">
                  {subject}
                </Badge>
              ))}
              {curriculum.subjects.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{curriculum.subjects.length - 3} more
                </Badge>
              )}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Grade Levels</h4>
            <div className="flex flex-wrap gap-1">
              {curriculum.gradeLevel.map((grade) => (
                <Badge key={grade} variant="outline" className="text-xs">
                  {grade}
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Format</h4>
              <p className="text-sm">
                {curriculum.format.slice(0, 2).join(", ")}
                {curriculum.format.length > 2 ? "..." : ""}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1">Cost</h4>
              <p className="text-sm">{curriculum.costRange}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="w-full flex justify-between items-center">
          <div>
            <Badge variant={curriculum.religiousAffiliation === "Secular" ? "secondary" : "outline"}>
              {curriculum.religiousAffiliation}
            </Badge>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={curriculum.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
              Visit Website <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
