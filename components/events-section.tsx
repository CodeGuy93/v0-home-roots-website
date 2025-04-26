"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Getting Started with Homeschooling",
    type: "Webinar",
    date: "May 15, 2025",
    time: "1:00 PM EST",
    image: "/webinar-homeschool-basics.png",
    presenter: "Sarah Williams",
    presenterRole: "Founder, HomeRoots",
    attendees: 156,
    description: "Learn the essential steps to begin your homeschooling journey with confidence.",
  },
  {
    id: 2,
    title: "Curriculum Selection Workshop",
    type: "Online Workshop",
    date: "May 22, 2025",
    time: "2:00 PM EST",
    image: "/placeholder.svg?key=curriculum-workshop",
    presenter: "Dr. Michael Chen",
    presenterRole: "Education Specialist",
    attendees: 89,
    description: "Discover how to choose the right curriculum for your child's unique learning style.",
  },
  {
    id: 3,
    title: "Homeschool Convention",
    type: "In-Person Event",
    date: "June 10-12, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Atlanta, GA",
    image: "/placeholder.svg?key=homeschool-convention",
    attendees: 1200,
    description: "Join thousands of homeschooling families for workshops, curriculum exhibits, and networking.",
  },
]

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(events[0])
  const [email, setEmail] = useState("")
  const [registered, setRegistered] = useState(false)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setRegistered(true)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Upcoming Events & Webinars
          </h2>
          <p className="text-xl text-gray-600">
            Join our community events to learn, connect, and grow your homeschooling skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {events.map((event) => (
                <Card
                  key={event.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    selectedEvent.id === event.id ? "border-green-500 shadow-md" : "hover:border-green-200"
                  }`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-16 h-16 relative rounded-md overflow-hidden flex-shrink-0">
                      <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-green-700 mb-1">{event.type}</div>
                      <h3 className="font-medium text-gray-900 line-clamp-1">{event.title}</h3>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {selectedEvent.type}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
                <p className="text-gray-600 mb-4">{selectedEvent.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-700" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-700" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  {selectedEvent.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-green-700" />
                      <span>{selectedEvent.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-700" />
                    <span>{selectedEvent.attendees} registered</span>
                  </div>
                </div>

                {selectedEvent.presenter && (
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 relative rounded-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?key=presenter"
                        alt={selectedEvent.presenter}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{selectedEvent.presenter}</h4>
                      <p className="text-sm text-gray-600">{selectedEvent.presenterRole}</p>
                    </div>
                  </div>
                )}

                {registered ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <h4 className="font-medium text-green-800 mb-1">You're registered!</h4>
                    <p className="text-sm text-green-700">Check your email for confirmation and access details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <h4 className="font-medium">Register for this event</h4>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      />
                      <Button type="submit" className="bg-green-700 hover:bg-green-800">
                        Register Now
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
            View All Upcoming Events
          </Button>
        </div>
      </div>
    </section>
  )
}
