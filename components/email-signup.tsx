"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Download } from "lucide-react"
import StarterKitButton from "@/components/starter-kit-button"

export default function EmailSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        toast({
          title: "Success!",
          description: data.message,
        })
        setEmail("")
        setIsSubmitted(true)
      } else {
        toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="download" className="bg-primary text-primary-foreground">
      <div className="container py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Get Your Free HomeRoots Starter Kit</h2>
          <p className="text-lg opacity-90 mb-8">
            Sign up to get tools, templates, and encouragement delivered to your inbox.
          </p>

          {isSubmitted ? (
            <div className="space-y-6">
              <p className="text-lg">Thanks for signing up! Your starter kit is ready to download.</p>
              <StarterKitButton variant="secondary" text="Download Your Starter Kit" className="mx-auto" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/70"
                required
              />
              <Button type="submit" variant="secondary" disabled={isLoading} className="gap-2">
                {isLoading ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : (
                  <Download className="h-4 w-4" />
                )}
                Sign Up
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
