import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container py-16">
      <Button variant="ghost" asChild className="mb-8">
        <Link href="/blog" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to all posts
        </Link>
      </Button>

      <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
        <h1>{post.title}</h1>
        <div className="text-muted-foreground mb-8">{post.date}</div>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 pt-8 border-t">
          <h3>Ready to start your homeschool journey?</h3>
          <ul>
            <li>
              <Link href="/states" className="text-primary hover:underline">
                Explore homeschool laws in your state
              </Link>
            </li>
            <li>
              <Link href="#download" className="text-primary hover:underline">
                Download our free starter kit
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-primary hover:underline">
                Connect with other homeschooling families
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </div>
  )
}
