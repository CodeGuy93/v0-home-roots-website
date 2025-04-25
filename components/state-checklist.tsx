"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { stateChecklists, defaultChecklist } from "@/lib/checklist-data"
import Link from "next/link"
import StarterKitButton from "@/components/starter-kit-button"
import { CheckCircle } from "lucide-react"

interface StateChecklistProps {
  stateCode: string
  stateName: string
}

export default function StateChecklist({ stateCode, stateName }: StateChecklistProps) {
  // Safety check for stateCode and stateName
  if (!stateCode || !stateName) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Homeschool Checklist</CardTitle>
          <CardDescription>Invalid state information provided.</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  // Convert stateCode to uppercase safely
  const safeStateCode = String(stateCode).toUpperCase()

  // Get the state-specific checklist or use the default
  const stateChecklist = stateChecklists[safeStateCode]
  const checklistItems = stateChecklist ? stateChecklist.items : defaultChecklist

  return (
    <div className="space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>
          Use this interactive checklist to track your progress as you begin homeschooling in {stateName}. We've
          customized this list based on {stateName}'s specific requirements and best practices.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Homeschool Checklist for {stateName}</CardTitle>
          <CardDescription>Track your progress as you prepare to homeschool in {stateName}.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {checklistItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Checkbox id={`item-${index}`} />
                <Label htmlFor={`item-${index}`}>{item}</Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5" />
            Need more help getting started?
          </CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Our comprehensive starter kit includes everything you need to begin homeschooling with confidence.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <StarterKitButton variant="secondary" stateCode={safeStateCode} />
            <Button
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/community">Join Our Community</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
