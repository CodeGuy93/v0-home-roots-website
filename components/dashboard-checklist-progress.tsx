"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { stateChecklists, defaultChecklist } from "@/lib/checklist-data"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface DashboardChecklistProgressProps {
  stateCode: string
  stateName: string
}

export default function DashboardChecklistProgress({ stateCode, stateName }: DashboardChecklistProgressProps) {
  const [progress, setProgress] = useState(0)
  const [completedCount, setCompletedCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    // Get the checklist items for this state
    const stateChecklist = stateChecklists[stateCode]
    const items = stateChecklist ? stateChecklist.items : defaultChecklist
    setTotalCount(items.length)

    // Load saved progress from localStorage
    const savedProgress = localStorage.getItem(`homeroots-checklist-${stateCode.toLowerCase()}`)
    if (savedProgress) {
      try {
        const completedItems = JSON.parse(savedProgress)
        const completed = Object.values(completedItems).filter(Boolean).length
        setCompletedCount(completed)
        setProgress((completed / items.length) * 100)
      } catch (error) {
        console.error("Error loading saved progress:", error)
      }
    }
  }, [stateCode])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Getting Started Checklist</CardTitle>
        <CardDescription>{stateName} Homeschool Setup</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>
              {completedCount} of {totalCount} tasks completed
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {progress === 100 ? (
          <div className="mt-4 flex items-center gap-2 text-green-600 dark:text-green-400">
            <CheckCircle2 className="h-5 w-5" />
            <span className="text-sm font-medium">All tasks completed!</span>
          </div>
        ) : (
          <p className="mt-4 text-sm text-muted-foreground">Continue setting up your homeschool in {stateName}.</p>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <Link
            href={`/states/${stateCode.toLowerCase()}?tab=checklist`}
            className="flex items-center justify-center gap-1"
          >
            {progress === 100 ? "Review Checklist" : "Continue Setup"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
