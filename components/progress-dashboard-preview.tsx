"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Calendar, CheckCircle, Clock, Star, TrendingUp } from "lucide-react"

export default function ProgressDashboardPreview() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Track Your Homeschool Journey
          </h2>
          <p className="text-xl text-gray-600">
            Our easy-to-use dashboard helps you monitor progress, set goals, and celebrate achievements
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Background decoration */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-green-100 rounded-full opacity-50 blur-3xl"></div>

          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-green-400 opacity-20 blur rounded-xl"></div>
            <Card className="relative border-green-100 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Image
                        src="/placeholder.svg?key=family-avatar"
                        alt="Family avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">The Johnson Family</h3>
                      <p className="text-sm text-gray-500">2023-2024 School Year</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-green-700 text-green-700 hover:bg-green-50">
                      <Calendar className="w-4 h-4 mr-1" /> Schedule
                    </Button>
                    <Button size="sm" className="bg-green-700 hover:bg-green-800">
                      <TrendingUp className="w-4 h-4 mr-1" /> Progress Report
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="overview">
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="subjects">Subjects</TabsTrigger>
                    <TabsTrigger value="goals">Goals</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="border-green-100">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-green-100 p-3 rounded-full">
                            <CheckCircle className="w-6 h-6 text-green-700" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Completed This Week</p>
                            <h4 className="text-2xl font-bold">24 Lessons</h4>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-green-100">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-green-100 p-3 rounded-full">
                            <Clock className="w-6 h-6 text-green-700" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Study Time</p>
                            <h4 className="text-2xl font-bold">18.5 Hours</h4>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-green-100">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="bg-green-100 p-3 rounded-full">
                            <Star className="w-6 h-6 text-green-700" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Average Score</p>
                            <h4 className="text-2xl font-bold">92%</h4>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="border-green-100">
                      <CardContent className="p-6">
                        <h3 className="font-medium text-lg mb-4">Subject Progress</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Mathematics</span>
                              <span className="text-sm text-gray-500">68%</span>
                            </div>
                            <Progress value={68} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Language Arts</span>
                              <span className="text-sm text-gray-500">75%</span>
                            </div>
                            <Progress value={75} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Science</span>
                              <span className="text-sm text-gray-500">42%</span>
                            </div>
                            <Progress value={42} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">History</span>
                              <span className="text-sm text-gray-500">51%</span>
                            </div>
                            <Progress value={51} className="h-2" />
                          </div>
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm font-medium">Art</span>
                              <span className="text-sm text-gray-500">89%</span>
                            </div>
                            <Progress value={89} className="h-2" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-green-100">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium text-lg">Upcoming Lessons</h3>
                            <Button variant="ghost" size="sm" className="text-green-700">
                              View All
                            </Button>
                          </div>
                          <ul className="space-y-3">
                            <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                              <div>
                                <p className="font-medium">Fractions & Decimals</p>
                                <p className="text-sm text-gray-500">Mathematics</p>
                              </div>
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Today</span>
                            </li>
                            <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                              <div>
                                <p className="font-medium">Plant Life Cycles</p>
                                <p className="text-sm text-gray-500">Science</p>
                              </div>
                              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">Tomorrow</span>
                            </li>
                            <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                              <div>
                                <p className="font-medium">American Revolution</p>
                                <p className="text-sm text-gray-500">History</p>
                              </div>
                              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">May 18</span>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="border-green-100">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium text-lg">Recent Achievements</h3>
                            <Button variant="ghost" size="sm" className="text-green-700">
                              View All
                            </Button>
                          </div>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md">
                              <div className="bg-amber-100 p-2 rounded-full">
                                <Star className="w-4 h-4 text-amber-600" />
                              </div>
                              <div>
                                <p className="font-medium">Math Master</p>
                                <p className="text-sm text-gray-500">Completed multiplication tables</p>
                              </div>
                            </li>
                            <li className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md">
                              <div className="bg-blue-100 p-2 rounded-full">
                                <BarChart className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-medium">Science Explorer</p>
                                <p className="text-sm text-gray-500">Completed 10 experiments</p>
                              </div>
                            </li>
                            <li className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-md">
                              <div className="bg-purple-100 p-2 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-purple-600"
                                >
                                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
                                  <path d="M8 7h6"></path>
                                  <path d="M8 11h8"></path>
                                  <path d="M8 15h6"></path>
                                </svg>
                              </div>
                              <div>
                                <p className="font-medium">Bookworm</p>
                                <p className="text-sm text-gray-500">Read 5 books this month</p>
                              </div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="subjects">
                    <div className="text-center py-12">
                      <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
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
                          className="text-gray-400"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <line x1="9" x2="15" y1="15" y2="15"></line>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium mb-2">Preview Only</h3>
                      <p className="text-gray-600 mb-6">Sign up to access the full dashboard experience</p>
                      <Button className="bg-green-700 hover:bg-green-800">Create Free Account</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="goals">
                    <div className="text-center py-12">
                      <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
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
                          className="text-gray-400"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <line x1="9" x2="15" y1="15" y2="15"></line>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium mb-2">Preview Only</h3>
                      <p className="text-gray-600 mb-6">Sign up to access the full dashboard experience</p>
                      <Button className="bg-green-700 hover:bg-green-800">Create Free Account</Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="achievements">
                    <div className="text-center py-12">
                      <div className="bg-gray-100 inline-flex p-4 rounded-full mb-4">
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
                          className="text-gray-400"
                        >
                          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                          <line x1="9" x2="15" y1="15" y2="15"></line>
                        </svg>
                      </div>
                      <h3 className="text-lg font-medium mb-2">Preview Only</h3>
                      <p className="text-gray-600 mb-6">Sign up to access the full dashboard experience</p>
                      <Button className="bg-green-700 hover:bg-green-800">Create Free Account</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-green-700 hover:bg-green-800">Try Our Progress Tracking Tools</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
