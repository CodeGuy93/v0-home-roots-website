"use client"

import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// This is a simplified static version that doesn't require client-side JavaScript
export default function TestimonialsStatic() {
  const testimonials = [
    {
      id: 1,
      quote:
        "HomeRoots gave us the confidence to start our homeschooling journey. The state-specific resources saved us countless hours of research and helped us navigate the legal requirements with ease.",
      name: "Sarah Johnson",
      location: "Texas",
      role: "Homeschooling parent of 3",
      avatarUrl: "/thoughtful-gaze.png",
    },
    {
      id: 2,
      quote:
        "As a first-time homeschooling parent, I was overwhelmed until I found HomeRoots. Their starter kit provided everything I needed to get started, and the community support has been invaluable.",
      name: "Michael Rodriguez",
      location: "California",
      role: "Homeschooling parent of 2",
      avatarUrl: "/thoughtful-gaze.png",
    },
    {
      id: 3,
      quote:
        "The curriculum finder tool saved our family so much time and frustration. We found resources that perfectly match our children's learning styles and our family's values.",
      name: "Emily Chen",
      location: "Florida",
      role: "Homeschooling parent of 1",
      avatarUrl: "/thoughtful-gaze.png",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Homeschooling Families</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of families who have found confidence and support on their homeschooling journey with
            HomeRoots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="text-blue-500 mb-4 h-8 w-8" />
                <p className="text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-10 w-10 mr-3 border-2 border-blue-100">
                    <AvatarImage src={testimonial.avatarUrl || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-600 text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => (window.location.href = "/community")}
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  )
}
