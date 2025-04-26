"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return

      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      backgroundRef.current.style.transform = `translate(${x * -20}px, ${y * -20}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div ref={backgroundRef} className="absolute inset-0 -z-10 opacity-20 transition-transform duration-500 ease-out">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-green-300 blur-3xl" />
        <div className="absolute bottom-20 right-40 w-72 h-72 rounded-full bg-earth-200 blur-3xl" />
        <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-terracotta-200 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-white px-4 py-1.5 text-sm font-medium text-green-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
              Trusted by 10,000+ homeschooling families
            </div>

            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Your homeschool journey, <span className="text-green-700">simplified</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-lg">
              Get the guidance, resources, and community you need to create a thriving homeschool experience—without the
              overwhelm.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Download Free Starter Kit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-200 text-green-700 hover:bg-green-50 rounded-full px-8"
              >
                See How It Works
              </Button>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src={`/thoughtful-artist.png?height=32&width=32&query=person ${i}`}
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-medium">4.9/5</span> from over 2,400 families
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-green-600 to-earth-500 opacity-20 blur"></div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
              <Image
                src="/placeholder.svg?key=hbtx8"
                alt="Happy homeschooling family"
                fill
                className="rounded-xl object-cover"
                priority
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -right-6 -top-6 bg-white rounded-lg shadow-lg p-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-700"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Flexible Schedule</p>
                    <p className="text-xs text-gray-500">Learn at your own pace</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-12 bg-white rounded-lg shadow-lg p-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="bg-earth-100 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-earth-700"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                      <path d="M8 7h6"></path>
                      <path d="M8 11h8"></path>
                      <path d="M8 15h6"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Personalized Learning</p>
                    <p className="text-xs text-gray-500">Tailored to your child</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
