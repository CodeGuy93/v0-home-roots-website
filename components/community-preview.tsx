"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Users, Heart, Clock, ArrowRight } from "lucide-react"

type ForumPost = {
  id: string
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
  }
  category: string
  replies: number
  likes: number
  timeAgo: string
  isPopular?: boolean
  isNew?: boolean
}

const forumPosts: ForumPost[] = [
  {
    id: "p1",
    title: "How do you handle multiple grade levels at once?",
    excerpt:
      "I'm homeschooling three children in grades 2, 4, and 7. Looking for advice on managing different curricula and keeping everyone engaged.",
    author: {
      name: "JessicaM",
      avatar: "/placeholder.svg?key=jessica",
    },
    category: "General Discussion",
    replies: 24,
    likes: 18,
    timeAgo: "2 hours ago",
    isPopular: true,
  },
  {
    id: "p2",
    title: "Math curriculum recommendations for a struggling 5th grader?",
    excerpt:
      "My son is struggling with traditional math approaches. Looking for something more hands-on or visual that might click better.",
    author: {
      name: "DavidW",
      avatar: "/placeholder.svg?key=david",
    },
    category: "Curriculum Discussion",
    replies: 31,
    likes: 22,
    timeAgo: "5 hours ago",
    isPopular: true,
  },
  {
    id: "p3",
    title: "Weekly nature study ideas for spring",
    excerpt:
      "We're doing a 12-week spring nature study and I'm looking for creative ideas beyond the usual nature journals and walks.",
    author: {
      name: "NatureHomeschooler",
      avatar: "/placeholder.svg?key=nature",
    },
    category: "Activity Ideas",
    replies: 16,
    likes: 29,
    timeAgo: "1 day ago",
  },
  {
    id: "p4",
    title: "How to prepare for college applications as a homeschooler",
    excerpt:
      "My daughter is in 10th grade and we're starting to think about college. What should we be doing now to prepare?",
    author: {
      name: "FutureScholars",
      avatar: "/placeholder.svg?key=future",
    },
    category: "High School & Beyond",
    replies: 42,
    likes: 35,
    timeAgo: "2 days ago",
    isPopular: true,
  },
  {
    id: "p5",
    title: "Introducing our family from Colorado!",
    excerpt:
      "New to homeschooling this year with our 7 and 9 year olds. We're using an eclectic approach and would love to connect with others.",
    author: {
      name: "MountainMama",
      avatar: "/placeholder.svg?key=mountain",
    },
    category: "Introductions",
    replies: 12,
    likes: 15,
    timeAgo: "3 hours ago",
    isNew: true,
  },
  {
    id: "p6",
    title: "Organizing a virtual book club for middle schoolers",
    excerpt: "I'm putting together a virtual book club for ages 11-14. Looking for participants and book suggestions!",
    author: {
      name: "BookwormParent",
      avatar: "/placeholder.svg?key=bookworm",
    },
    category: "Community Events",
    replies: 8,
    likes: 11,
    timeAgo: "6 hours ago",
    isNew: true,
  },
]

export default function CommunityPreview() {
  const [activeTab, setActiveTab] = useState("popular")

  const popularPosts = forumPosts.filter((post) => post.isPopular)
  const recentPosts = forumPosts.filter((post) => post.isNew || post.timeAgo.includes("hours"))

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Join Our Homeschooling Community
          </h2>
          <p className="text-xl text-gray-600">
            Connect with other homeschooling families, share experiences, and get support on your journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-green-100">
            <CardContent className="p-6">
              <Tabs defaultValue="popular" value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="popular" className="text-base py-2 px-4">
                      Popular Discussions
                    </TabsTrigger>
                    <TabsTrigger value="recent" className="text-base py-2 px-4">
                      Recent Activity
                    </TabsTrigger>
                  </TabsList>
                  <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                    Browse All Topics
                  </Button>
                </div>

                <TabsContent value="popular" className="space-y-4">
                  {popularPosts.map((post) => (
                    <div
                      key={post.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-green-200 hover:bg-green-50/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={post.avatar || "/placeholder.svg"}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg text-gray-900 hover:text-green-700">{post.title}</h3>
                              <p className="text-sm text-gray-500">
                                Posted by {post.author.name} in {post.category}
                              </p>
                            </div>
                            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Popular</div>
                          </div>
                          <p className="text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                            <div className="flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {post.replies} replies
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {post.likes} likes
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.timeAgo}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="recent" className="space-y-4">
                  {recentPosts.map((post) => (
                    <div
                      key={post.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-green-200 hover:bg-green-50/30 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 relative rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={post.avatar || "/placeholder.svg"}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg text-gray-900 hover:text-green-700">{post.title}</h3>
                              <p className="text-sm text-gray-500">
                                Posted by {post.author.name} in {post.category}
                              </p>
                            </div>
                            {post.isNew && (
                              <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">New</div>
                            )}
                          </div>
                          <p className="text-gray-600 mt-2 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                            <div className="flex items-center">
                              <MessageSquare className="w-4 h-4 mr-1" />
                              {post.replies} replies
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {post.likes} likes
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.timeAgo}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>

              <div className="bg-green-50 border border-green-100 rounded-lg p-6 mt-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Join 10,000+ homeschooling families</h3>
                    <p className="text-gray-600">Get support, share resources, and connect with like-minded parents</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-green-700 hover:bg-green-800 flex-grow">
                    Join Our Community <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
