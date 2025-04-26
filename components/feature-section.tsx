"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tab } from "@headlessui/react"
import { cn } from "@/lib/utils"

const features = [
  {
    name: "Curriculum Selection",
    description: "Find the perfect learning materials tailored to your child's unique needs and learning style.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-700"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
        <path d="M8 7h6"></path>
        <path d="M8 11h8"></path>
        <path d="M8 15h6"></path>
      </svg>
    ),
    image: "/placeholder.svg?key=x1vkx",
  },
  {
    name: "Legal Compliance",
    description: "Navigate state requirements with confidence using our state-by-state guides and checklists.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    ),
    image: "/homeschool-legal-review.png",
  },
  {
    name: "Community Connection",
    description: "Connect with local homeschool groups, co-ops, and like-minded families in your area.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-700"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    image: "/placeholder.svg?key=niznj",
  },
]

export default function FeatureSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Everything you need to homeschool with confidence
          </h2>
          <p className="text-xl text-gray-600">
            We've simplified the homeschooling journey so you can focus on what matters most—your child's education.
          </p>
        </div>

        <Tab.Group>
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/3">
              <Tab.List className="flex flex-col space-y-1">
                {features.map((feature, index) => (
                  <Tab
                    key={feature.name}
                    className={({ selected }) =>
                      cn(
                        "w-full rounded-lg py-5 px-4 text-left transition-all duration-200 outline-none",
                        selected ? "bg-green-50 shadow-sm border-l-4 border-green-700" : "hover:bg-gray-50",
                      )
                    }
                  >
                    {({ selected }) => (
                      <div className="flex items-start gap-4">
                        <div className={cn("p-2 rounded-lg", selected ? "bg-green-100" : "bg-gray-100")}>
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className={cn("font-medium text-lg", selected ? "text-green-800" : "text-gray-900")}>
                            {feature.name}
                          </h3>
                          <p className={cn("text-sm mt-1", selected ? "text-green-700" : "text-gray-500")}>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <div className="w-full md:w-2/3">
              <Tab.Panels className="mt-2">
                {features.map((feature, idx) => (
                  <Tab.Panel key={idx} className="rounded-xl bg-white p-3 focus:outline-none">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative rounded-2xl overflow-hidden"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-earth-500 opacity-20 blur"></div>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </div>
          </div>
        </Tab.Group>
      </div>
    </section>
  )
}
