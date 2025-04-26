"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    content:
      "HomeRoots gave me the confidence to start homeschooling my children. Their state law guides saved me hours of research, and the curriculum finder helped me choose materials that perfectly match my kids' learning styles.",
    author: "Sarah Johnson",
    role: "Mother of 3, Homeschooling for 2 years",
    avatar: "/smiling-brunette.png",
  },
  {
    content:
      "As a working parent, I was worried about balancing my job with homeschooling. The HomeRoots resources and community have been invaluable in helping me create a flexible schedule that works for our family.",
    author: "Michael Chen",
    role: "Father of 2, Homeschooling for 1 year",
    avatar: "/cheerful-asian-man.png",
  },
  {
    content:
      "The HomeRoots community has been a lifeline for our family. We've connected with local co-ops, found amazing field trip opportunities, and made friendships that will last a lifetime.",
    author: "Aisha Williams",
    role: "Mother of 4, Homeschooling for 5 years",
    avatar: "/radiant-joy.png",
  },
]

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Hear from our homeschooling families
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of parents who have transformed their homeschooling journey with HomeRoots.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none"
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-green-700 transition-colors pointer-events-auto"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-green-700 transition-colors pointer-events-auto"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonials[current].avatar || "/placeholder.svg"}
                          alt={testimonials[current].author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h3 className="font-medium text-lg text-gray-900">{testimonials[current].author}</h3>
                        <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                      </div>
                    </div>

                    <div className="w-full md:w-2/3 relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-green-200" />
                      <p className="text-xl md:text-2xl text-gray-700 italic relative z-10 pl-6">
                        {testimonials[current].content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === current ? "bg-green-700" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
