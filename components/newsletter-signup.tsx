"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="max-w-xl mx-auto border-green-200">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-center">Join Our Newsletter</h3>
        <p className="text-center text-muted-foreground mb-4">
          Get weekly homeschooling tips, resources, and encouragement delivered to your inbox.
        </p>

        {isSubmitted ? (
          <div className="text-center p-4 bg-green-50 rounded-md">
            <p className="font-medium text-green-800">Thank you for subscribing!</p>
            <p className="text-sm text-green-700 mt-1">Check your inbox for a confirmation email.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
              aria-label="Email address"
            />
            <Button type="submit" className="bg-green-700 hover:bg-green-800" disabled={isLoading}>
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}

        <p className="text-xs text-center text-muted-foreground mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </CardContent>
    </Card>
  )
}
