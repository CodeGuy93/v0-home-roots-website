import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

export default function Marketplace() {
  return (
    <section id="marketplace" className="bg-secondary">
      <div className="container py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Marketplace <span className="text-muted-foreground">(Coming Soon)</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover homeschool lessons, printables, and templates created by other parents. Support the community.
            Share what works.
          </p>
          <Button size="lg" className="gap-2">
            <ShoppingBag className="h-5 w-5" />
            Become a Seller
          </Button>
        </div>
      </div>
    </section>
  )
}
