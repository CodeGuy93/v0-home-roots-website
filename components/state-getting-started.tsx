import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { EnhancedStateData } from "@/lib/enhanced-state-data"
import { CheckCircle, Download } from "lucide-react"
import Link from "next/link"

export default function StateGettingStarted({
  stateData,
}: {
  stateData: EnhancedStateData | any
}) {
  // Default steps if none are provided in the state data
  const defaultSteps = [
    `Research ${stateData.name}'s homeschool laws and requirements`,
    "If withdrawing from public school, submit a withdrawal letter",
    "Choose curriculum materials that meet state requirements",
    "Create a learning plan and schedule",
    "Connect with local homeschool groups for support",
  ]

  // Default tips if none are provided in the state data
  const defaultTips = [
    "Start slowly and give yourself time to adjust",
    "Focus on core subjects first, then expand",
    "Join a local support group or co-op",
    "Take advantage of free educational resources",
    "Remember that your homeschool doesn't need to look like traditional school",
  ]

  const steps = stateData.gettingStarted?.steps || defaultSteps
  const tips = stateData.gettingStarted?.tips || defaultTips

  return (
    <div className="space-y-8">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
        <p>
          Ready to start homeschooling in {stateData.name}? Follow these steps to begin your homeschool journey with
          confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Step-by-Step Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {steps.map((step: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Helpful Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {tips.map((tip: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-2">Get Your Free {stateData.name} Starter Kit</h3>
        <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
          Download our free starter kit with {stateData.name}-specific information, including a sample withdrawal
          letter, record-keeping templates, and curriculum planning guides.
        </p>
        <Button variant="secondary" size="lg" className="gap-2">
          <Download className="h-4 w-4" />
          Download Free Starter Kit
        </Button>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold mb-2">Need more personalized help?</h3>
        <p className="text-muted-foreground mb-4">
          Join our community to connect with experienced homeschoolers in {stateData.name}.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/community">Join Our Community</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Read Success Stories</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
