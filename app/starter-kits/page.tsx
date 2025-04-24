import StateStarterKitsGrid from "@/components/state-starter-kits-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import StateRegulationComparison from "@/components/state-regulation-comparison"

export const metadata = {
  title: "Homeschool Starter Kits | HomeRoots",
  description:
    "Download free state-specific homeschool starter kits with everything you need to begin homeschooling with confidence.",
}

export default function StarterKitsPage() {
  return (
    <div className="container py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
      </Button>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">State-Specific Homeschool Starter Kits</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Download our free starter kits customized for each state's homeschool laws and requirements. Each kit
            includes sample forms, record-keeping templates, and state-specific resources.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              New! Florida Kit
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              New! Pennsylvania Kit
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              New! Alaska Kit
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              New! Illinois Kit
            </Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
              New! Georgia Kit
            </Badge>
          </div>
        </div>

        <StateStarterKitsGrid />

        <div className="mt-16">
          <StateRegulationComparison />
        </div>
      </div>
    </div>
  )
}
