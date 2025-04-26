"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Testimonial {
  id: number
  quote: string
  name: string
  location: string
  role: string
  avatarUrl?: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
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
    {
      id: 4,
      quote:
        "HomeRoots doesn't just provide resources - they've built a supportive community. The connections we've made with other homeschooling families have enriched our experience beyond measure.",
      name: "David Wilson",
      location: "Georgia",
      role: "Homeschooling parent of 4",
      avatarUrl: "/thoughtful-gaze.png",
    },
    {
      id: 5,
      quote:
        "The state-specific legal guidance gave us peace of mind that we're meeting all requirements. HomeRoots made the transition to homeschooling smooth and stress-free.",
      name: "Jennifer Martinez",
      location: "New York",
      role: "Homeschooling parent of 2",
      avatarUrl: "/thoughtful-gaze.png",
    },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)
  const autoPlayRef = useRef(null)
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Setup auto-play with useRef to avoid dependency issues
  useEffect(() => {
    const play = () => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }

    autoPlayRef.current = play
  }, [totalPages])

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoPlayRef.current) {
        autoPlayRef.current()
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  // Get current testimonials to display
  const getCurrentTestimonials = () => {
    const startIndex = currentPage * itemsPerPage
    return testimonials.slice(startIndex, startIndex + itemsPerPage)
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

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

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getCurrentTestimonials().map((testimonial) => (
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

          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="bg-white shadow-md border-blue-100 hover:bg-blue-50"
              onClick={prevPage}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="bg-white shadow-md border-blue-100 hover:bg-blue-50"
              onClick={nextPage}
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-1">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === currentPage ? "bg-blue-600 w-4" : "bg-blue-200"
              }`}
              aria-label={`Go to testimonial page ${index + 1}`}
            />
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
