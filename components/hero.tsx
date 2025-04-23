import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-secondary to-background py-20 md:py-32">
      <div className="container flex flex-col items-center text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Rooted in values. Built for learning.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Helping families homeschool with confidence. Understand your state laws, explore community-led resources, and
          join a movement of support.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="#download">Download Free Starter Kit</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#laws">Explore State Laws</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
