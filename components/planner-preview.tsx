"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, CheckCircle, Clock, Download, Plus } from "lucide-react"

type CalendarEvent = {
  id: string
  title: string
  subject?: string
  time?: string
  completed?: boolean
  type: "lesson" | "activity" | "field-trip" | "break" | "assessment"
}

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const sampleEvents: Record<string, CalendarEvent[]> = {
  Monday: [
    {
      id: "mon-1",
      title: "Math - Fractions",
      subject: "Mathematics",
      time: "9:00 AM - 10:00 AM",
      completed: true,
      type: "lesson",
    },
    {
      id: "mon-2",
      title: "Reading Comprehension",
      subject: "Language Arts",
      time: "10:15 AM - 11:15 AM",
      completed: true,
      type: "lesson",
    },
    {
      id: "mon-3",
      title: "Lunch & Free Time",
      time: "11:30 AM - 12:30 PM",
      type: "break",
    },
    {
      id: "mon-4",
      title: "Science Experiment: Plant Growth",
      subject: "Science",
      time: "1:00 PM - 2:00 PM",
      type: "activity",
    },
    {
      id: "mon-5",
      title: "Art - Watercolor Painting",
      subject: "Art",
      time: "2:30 PM - 3:30 PM",
      type: "activity",
    },
  ],
  Tuesday: [
    {
      id: "tue-1",
      title: "Grammar & Writing",
      subject: "Language Arts",
      time: "9:00 AM - 10:00 AM",
      type: "lesson",
    },
    {
      id: "tue-2",
      title: "Math - Decimals",
      subject: "Mathematics",
      time: "10:15 AM - 11:15 AM",
      type: "lesson",
    },
    {
      id: "tue-3",
      title: "Lunch & Free Time",
      time: "11:30 AM - 12:30 PM",
      type: "break",
    },
    {
      id: "tue-4",
      title: "History - Colonial America",
      subject: "History",
      time: "1:00 PM - 2:00 PM",
      type: "lesson",
    },
    {
      id: "tue-5",
      title: "Physical Education",
      subject: "PE",
      time: "2:30 PM - 3:30 PM",
      type: "activity",
    },
  ],
  Wednesday: [
    {
      id: "wed-1",
      title: "Field Trip: Natural History Museum",
      time: "9:00 AM - 1:00 PM",
      type: "field-trip",
    },
    {
      id: "wed-2",
      title: "Lunch at Park",
      time: "1:00 PM - 2:00 PM",
      type: "break",
    },
    {
      id: "wed-3",
      title: "Field Trip Reflection & Journaling",
      subject: "Writing",
      time: "2:30 PM - 3:30 PM",
      type: "activity",
    },
  ],
  Thursday: [
    {
      id: "thu-1",
      title: "Math - Problem Solving",
      subject: "Mathematics",
      time: "9:00 AM - 10:00 AM",
      type: "lesson",
    },
    {
      id: "thu-2",
      title: "Reading & Literature",
      subject: "Language Arts",
      time: "10:15 AM - 11:15 AM",
      type: "lesson",
    },
    {
      id: "thu-3",
      title: "Lunch & Free Time",
      time: "11:30 AM - 12:30 PM",
      type: "break",
    },
    {
      id: "thu-4",
      title: "Science - Earth Systems",
      subject: "Science",
      time: "1:00 PM - 2:00 PM",
      type: "lesson",
    },
    {
      id: "thu-5",
      title: "Music Practice",
      subject: "Music",
      time: "2:30 PM - 3:30 PM",
      type: "activity",
    },
  ],
  Friday: [
    {
      id: "fri-1",
      title: "Weekly Math Assessment",
      subject: "Mathematics",
      time: "9:00 AM - 10:00 AM",
      type: "assessment",
    },
    {
      id: "fri-2",
      title: "Spelling Test",
      subject: "Language Arts",
      time: "10:15 AM - 11:15 AM",
      type: "assessment",
    },
    {
      id: "fri-3",
      title: "Lunch & Free Time",
      time: "11:30 AM - 12:30 PM",
      type: "break",
    },
    {
      id: "fri-4",
      title: "Co-op Classes",
      time: "1:00 PM - 3:30 PM",
      type: "activity",
    },
  ],
}

const eventTypeColors: Record<string, string> = {
  lesson: "bg-blue-100 text-blue-800",
  activity: "bg-green-100 text-green-800",
  "field-trip": "bg-purple-100 text-purple-800",
  break: "bg-gray-100 text-gray-800",
  assessment: "bg-amber-100 text-amber-800",
}

export default function PlannerPreview() {
  const [activeTab, setActiveTab] = useState("weekly")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Plan Your Homeschool Schedule
          </h2>
          <p className="text-xl text-gray-600">
            Our easy-to-use planner helps you organize lessons, activities, and field trips
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="border-green-100 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-xl font-bold">May 13-17, 2024</h3>
                  <p className="text-gray-500">Week 32 of 36</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-green-700 text-green-700 hover:bg-green-50">
                    <Download className="w-4 h-4 mr-1" /> Export
                  </Button>
                  <Button size="sm" className="bg-green-700 hover:bg-green-800">
                    <Plus className="w-4 h-4 mr-1" /> Add Event
                  </Button>
                </div>
              </div>

              <Tabs defaultValue="weekly" value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList>
                  <TabsTrigger value="weekly">Weekly View</TabsTrigger>
                  <TabsTrigger value="daily">Daily View</TabsTrigger>
                  <TabsTrigger value="subjects">By Subject</TabsTrigger>
                </TabsList>
              </Tabs>

              <TabsContent value="weekly" className="border rounded-md">
                <div className="grid grid-cols-5 gap-px bg-gray-200">
                  {weekdays.map((day) => (
                    <div key={day} className="bg-white">
                      <div className="bg-gray-50 p-3 border-b">
                        <h4 className="font-medium">{day}</h4>
                      </div>
                      <div className="p-2 space-y-2 min-h-[400px]">
                        {sampleEvents[day].map((event) => (
                          <div
                            key={event.id}
                            className={`p-2 rounded-md border ${
                              event.completed ? "border-green-200 bg-green-50" : "border-gray-200"
                            }`}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <p className="font-medium text-sm">{event.title}</p>
                                {event.subject && <p className="text-xs text-gray-500">{event.subject}</p>}
                              </div>
                              <Badge
                                variant="secondary"
                                className={`text-xs ${eventTypeColors[event.type]} border-none`}
                              >
                                {event.type.replace("-", " ")}
                              </Badge>
                            </div>
                            {event.time && (
                              <div className="flex items-center mt-1 text-xs text-gray-500">
                                <Clock className="w-3 h-3 mr-1" />
                                {event.time}
                              </div>
                            )}
                            {event.completed && (
                              <div className="flex items-center mt-1 text-xs text-green-700">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Completed
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="daily">
                <div className="text-center py-12">
                  <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
                    <Calendar className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Preview Only</h3>
                  <p className="text-gray-600 mb-6">Sign up to access the full planner experience</p>
                  <Button className="bg-green-700 hover:bg-green-800">Create Free Account</Button>
                </div>
              </TabsContent>

              <TabsContent value="subjects">
                <div className="text-center py-12">
                  <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
                    <Calendar className="w-6 h-6 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Preview Only</h3>
                  <p className="text-gray-600 mb-6">Sign up to access the full planner experience</p>
                  <Button className="bg-green-700 hover:bg-green-800">Create Free Account</Button>
                </div>
              </TabsContent>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Calendar className="w-5 h-5 text-green-700" />
                  </div>
                  <h3 className="font-medium text-lg">Flexible Templates</h3>
                </div>
                <p className="text-gray-600">
                  Choose from multiple schedule templates designed for different homeschooling approaches, from
                  structured to relaxed.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
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
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M3 9h18"></path>
                      <path d="M9 21V9"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium text-lg">Multi-View Options</h3>
                </div>
                <p className="text-gray-600">
                  Switch between daily, weekly, monthly, and subject-based views to plan and track your homeschool
                  schedule effectively.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
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
                  <h3 className="font-medium text-lg">Progress Tracking</h3>
                </div>
                <p className="text-gray-600">
                  Mark lessons as completed, track attendance, and generate progress reports for your records and state
                  requirements.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-700 hover:bg-green-800">Try Our Planner</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
