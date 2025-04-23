import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"

export default function Community() {
  return (
    <section id="community" className="container py-16 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Find Local Co-Ops and Events</h2>
        <p className="text-lg text-muted-foreground mb-8">
          HomeRoots helps you connect with homeschoolers near you. Coming soon: searchable co-op and event listings.
        </p>
        <Button size="lg" className="gap-2">
          <Users className="h-5 w-5" />
          Join Our Beta
        </Button>
      </div>
    </section>
  )
}
