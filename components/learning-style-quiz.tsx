"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

type Question = {
  id: number
  text: string
  options: {
    id: string
    text: string
    type: "visual" | "auditory" | "kinesthetic" | "reading"
  }[]
}

type Result = {
  type: "visual" | "auditory" | "kinesthetic" | "reading"
  title: string
  description: string
  recommendations: string[]
}

const questions: Question[] = [
  {
    id: 1,
    text: "When learning something new, your child prefers to:",
    options: [
      { id: "1a", text: "See diagrams or demonstrations", type: "visual" },
      { id: "1b", text: "Listen to explanations", type: "auditory" },
      { id: "1c", text: "Try it hands-on", type: "kinesthetic" },
      { id: "1d", text: "Read about it first", type: "reading" },
    ],
  },
  {
    id: 2,
    text: "When recalling information, your child most easily remembers:",
    options: [
      { id: "2a", text: "What they saw or pictures/images", type: "visual" },
      { id: "2b", text: "What was said or discussed", type: "auditory" },
      { id: "2c", text: "What they did or experienced", type: "kinesthetic" },
      { id: "2d", text: "What they read or wrote down", type: "reading" },
    ],
  },
  {
    id: 3,
    text: "When excited about something, your child typically:",
    options: [
      { id: "3a", text: "Talks about how it looks", type: "visual" },
      { id: "3b", text: "Expresses excitement verbally", type: "auditory" },
      { id: "3c", text: "Shows physical excitement (jumps, moves)", type: "kinesthetic" },
      { id: "3d", text: "Wants to read more about it", type: "reading" },
    ],
  },
  {
    id: 4,
    text: "During free time, your child often chooses to:",
    options: [
      { id: "4a", text: "Draw, watch videos, or look at pictures", type: "visual" },
      { id: "4b", text: "Talk with others or listen to music", type: "auditory" },
      { id: "4c", text: "Play sports or build things", type: "kinesthetic" },
      { id: "4d", text: "Read books or write stories", type: "reading" },
    ],
  },
  {
    id: 5,
    text: "When solving a problem, your child tends to:",
    options: [
      { id: "5a", text: "Visualize solutions or draw diagrams", type: "visual" },
      { id: "5b", text: "Talk through possible solutions", type: "auditory" },
      { id: "5c", text: "Use physical objects or act it out", type: "kinesthetic" },
      { id: "5d", text: "Make lists or follow written instructions", type: "reading" },
    ],
  },
]

const results: Record<string, Result> = {
  visual: {
    type: "visual",
    title: "Visual Learner",
    description:
      "Your child learns best through seeing and observing. They benefit from visual aids, diagrams, charts, and demonstrations.",
    recommendations: [
      "Use colorful visual materials and diagrams",
      "Incorporate educational videos and documentaries",
      "Create mind maps for organizing information",
      "Use color-coding for notes and materials",
      "Provide illustrated books and graphic organizers",
    ],
  },
  auditory: {
    type: "auditory",
    title: "Auditory Learner",
    description:
      "Your child learns best through listening and discussing. They benefit from verbal instructions, discussions, and audio materials.",
    recommendations: [
      "Use audiobooks and recorded lessons",
      "Incorporate discussion-based learning",
      "Try educational podcasts and music",
      "Read aloud and encourage verbal explanations",
      "Consider group learning opportunities",
    ],
  },
  kinesthetic: {
    type: "kinesthetic",
    title: "Kinesthetic Learner",
    description:
      "Your child learns best through doing and experiencing. They benefit from hands-on activities, movement, and physical engagement.",
    recommendations: [
      "Incorporate hands-on experiments and activities",
      "Use manipulatives for math and science",
      "Take frequent movement breaks during lessons",
      "Try project-based learning approaches",
      "Consider field trips and real-world applications",
    ],
  },
  reading: {
    type: "reading",
    title: "Reading/Writing Learner",
    description:
      "Your child learns best through reading and writing. They benefit from text-based materials, note-taking, and written exercises.",
    recommendations: [
      "Provide plenty of books and written materials",
      "Encourage journal writing and note-taking",
      "Use workbooks and written exercises",
      "Create writing prompts related to lessons",
      "Incorporate research projects and essays",
    ],
  },
}

export default function LearningStyleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [result, setResult] = useState<Result | null>(null)

  const handleAnswer = (questionId: number, answerType: "visual" | "auditory" | "kinesthetic" | "reading") => {
    setAnswers({ ...answers, [questionId]: answerType })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateResult()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateResult = () => {
    const counts: Record<string, number> = {
      visual: 0,
      auditory: 0,
      kinesthetic: 0,
      reading: 0,
    }

    Object.values(answers).forEach((type) => {
      if (type in counts) {
        counts[type]++
      }
    })

    let maxType = "visual"
    let maxCount = 0

    Object.entries(counts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count
        maxType = type
      }
    })

    setResult(results[maxType as keyof typeof results])
    setShowResults(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setResult(null)
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Discover Your Child's Learning Style
          </h2>
          <p className="text-xl text-gray-600">
            Take this quick assessment to understand how your child learns best and get personalized curriculum
            recommendations.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-6 md:p-8">
            {!showResults ? (
              <>
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span>{Math.round(progress)}% Complete</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-medium mb-4">{questions[currentQuestion].text}</h3>
                  <RadioGroup
                    value={answers[questions[currentQuestion].id] || ""}
                    onValueChange={(value) =>
                      handleAnswer(
                        questions[currentQuestion].id,
                        value as "visual" | "auditory" | "kinesthetic" | "reading",
                      )
                    }
                  >
                    <div className="space-y-4">
                      {questions[currentQuestion].options.map((option) => (
                        <div key={option.id} className="flex items-center">
                          <RadioGroupItem
                            value={option.type}
                            id={option.id}
                            className="border-green-700 text-green-700"
                          />
                          <Label htmlFor={option.id} className="ml-2 text-gray-700">
                            {option.text}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="border-green-700 text-green-700 hover:bg-green-50"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!answers[questions[currentQuestion].id]}
                    className="bg-green-700 hover:bg-green-800"
                  >
                    {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <div className="inline-block p-3 rounded-full bg-green-100 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-700"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{result?.title}</h3>
                <p className="text-gray-600 mb-6">{result?.description}</p>

                <div className="bg-green-50 rounded-lg p-4 text-left mb-6">
                  <h4 className="font-medium text-green-800 mb-2">Recommended Approaches:</h4>
                  <ul className="space-y-2">
                    {result?.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-700 mr-2 mt-1"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Get Personalized Curriculum Recommendations
                  </Button>
                  <Button variant="outline" onClick={resetQuiz} className="w-full border-green-700 text-green-700">
                    Take Quiz Again
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
