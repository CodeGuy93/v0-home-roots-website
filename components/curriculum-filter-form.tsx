"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { CurriculumFilters } from "@/lib/types"
import {
  subjectOptions,
  gradeLevelOptions,
  teachingStyleOptions,
  formatOptions,
  religiousAffiliationOptions,
  timeCommitmentOptions,
  costRangeOptions,
} from "@/lib/curriculum-data"

interface CurriculumFilterFormProps {
  onFilterChange: (filters: Partial<CurriculumFilters>) => void
  onSortChange: (sortBy: string) => void
}

export default function CurriculumFilterForm({ onFilterChange, onSortChange }: CurriculumFilterFormProps) {
  const [filters, setFilters] = useState<Partial<CurriculumFilters>>({
    subjects: [],
    gradeLevels: [],
    teachingStyles: [],
    formats: [],
    religiousAffiliation: [],
    timeCommitment: [],
    costRange: [],
  })
  const [sortBy, setSortBy] = useState<string>("rating")
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const handleFilterChange = (filterType: keyof CurriculumFilters, value: string) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[filterType] || []
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value]

      const updatedFilters = {
        ...prevFilters,
        [filterType]: newValues,
      }

      onFilterChange(updatedFilters)
      return updatedFilters
    })
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    onSortChange(value)
  }

  const handleClearFilters = () => {
    const emptyFilters = {
      subjects: [],
      gradeLevels: [],
      teachingStyles: [],
      formats: [],
      religiousAffiliation: [],
      timeCommitment: [],
      costRange: [],
    }
    setFilters(emptyFilters)
    onFilterChange(emptyFilters)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Find Your Perfect Curriculum</h2>
        <Button variant="outline" onClick={() => setIsFilterVisible(!isFilterVisible)} className="md:hidden">
          {isFilterVisible ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      <div className={`${isFilterVisible ? "block" : "hidden"} md:block`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Accordion type="single" collapsible defaultValue="subjects" className="mb-4">
              <AccordionItem value="subjects">
                <AccordionTrigger className="text-lg font-medium">Subjects</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {subjectOptions.map((subject) => (
                      <div key={subject} className="flex items-center space-x-2">
                        <Checkbox
                          id={`subject-${subject}`}
                          checked={filters.subjects?.includes(subject) || false}
                          onCheckedChange={() => handleFilterChange("subjects", subject)}
                        />
                        <Label htmlFor={`subject-${subject}`}>{subject}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible defaultValue="gradeLevels" className="mb-4">
              <AccordionItem value="gradeLevels">
                <AccordionTrigger className="text-lg font-medium">Grade Levels</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {gradeLevelOptions.map((grade) => (
                      <div key={grade} className="flex items-center space-x-2">
                        <Checkbox
                          id={`grade-${grade}`}
                          checked={filters.gradeLevels?.includes(grade) || false}
                          onCheckedChange={() => handleFilterChange("gradeLevels", grade)}
                        />
                        <Label htmlFor={`grade-${grade}`}>{grade}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem value="teachingStyles">
                <AccordionTrigger className="text-lg font-medium">Teaching Styles</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {teachingStyleOptions.map((style) => (
                      <div key={style} className="flex items-center space-x-2">
                        <Checkbox
                          id={`style-${style}`}
                          checked={filters.teachingStyles?.includes(style) || false}
                          onCheckedChange={() => handleFilterChange("teachingStyles", style)}
                        />
                        <Label htmlFor={`style-${style}`}>{style}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem value="formats">
                <AccordionTrigger className="text-lg font-medium">Formats</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {formatOptions.slice(0, 10).map((format) => (
                      <div key={format} className="flex items-center space-x-2">
                        <Checkbox
                          id={`format-${format}`}
                          checked={filters.formats?.includes(format) || false}
                          onCheckedChange={() => handleFilterChange("formats", format)}
                        />
                        <Label htmlFor={`format-${format}`}>{format}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem value="religiousAffiliation">
                <AccordionTrigger className="text-lg font-medium">Religious Affiliation</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-2">
                    {religiousAffiliationOptions.map((affiliation) => (
                      <div key={affiliation} className="flex items-center space-x-2">
                        <Checkbox
                          id={`affiliation-${affiliation}`}
                          checked={filters.religiousAffiliation?.includes(affiliation) || false}
                          onCheckedChange={() => handleFilterChange("religiousAffiliation", affiliation)}
                        />
                        <Label htmlFor={`affiliation-${affiliation}`}>{affiliation}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem value="timeCommitment">
                <AccordionTrigger className="text-lg font-medium">Time Commitment</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-2">
                    {timeCommitmentOptions.map((time) => (
                      <div key={time} className="flex items-center space-x-2">
                        <Checkbox
                          id={`time-${time}`}
                          checked={filters.timeCommitment?.includes(time) || false}
                          onCheckedChange={() => handleFilterChange("timeCommitment", time)}
                        />
                        <Label htmlFor={`time-${time}`}>{time}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible className="mb-4">
              <AccordionItem value="costRange">
                <AccordionTrigger className="text-lg font-medium">Cost Range</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-2">
                    {costRangeOptions.map((cost) => (
                      <div key={cost} className="flex items-center space-x-2">
                        <Checkbox
                          id={`cost-${cost}`}
                          checked={filters.costRange?.includes(cost) || false}
                          onCheckedChange={() => handleFilterChange("costRange", cost)}
                        />
                        <Label htmlFor={`cost-${cost}`}>{cost}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-medium mb-2">Sort By</h3>
          <RadioGroup value={sortBy} onValueChange={handleSortChange} className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rating" id="sort-rating" />
              <Label htmlFor="sort-rating">Highest Rated</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="reviews" id="sort-reviews" />
              <Label htmlFor="sort-reviews">Most Reviews</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="name-asc" id="sort-name-asc" />
              <Label htmlFor="sort-name-asc">Name (A-Z)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="name-desc" id="sort-name-desc" />
              <Label htmlFor="sort-name-desc">Name (Z-A)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cost-asc" id="sort-cost-asc" />
              <Label htmlFor="sort-cost-asc">Price (Low to High)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cost-desc" id="sort-cost-desc" />
              <Label htmlFor="sort-cost-desc">Price (High to Low)</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="mt-6 flex justify-end">
          <Button variant="outline" onClick={handleClearFilters} className="mr-2">
            Clear Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
