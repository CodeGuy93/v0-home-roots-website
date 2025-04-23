import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">HomeRoots Blog</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
        Practical advice, encouragement, and resources for homeschooling families.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col h-full">
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex justify-between items-center w-full">
                <div className="text-sm text-muted-foreground">{post.date}</div>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline font-medium">
                  Read more →
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
