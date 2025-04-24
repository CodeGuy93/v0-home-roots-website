"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { ChecklistItem } from "@/lib/checklist-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, ExternalLink, Share2, Trash2 } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/hooks/use-toast"

interface InteractiveChecklistProps {
  stateCode: string
  stateName: string
  items: ChecklistItem[]
}

export default function InteractiveChecklist({ stateCode, stateName, items }: InteractiveChecklistProps) {
  // State for completed items
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState<string>("all")
  const [showOnlyRequired, setShowOnlyRequired] = useState(false)
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false)
  const [email, setEmail] = useState("")

  // Load saved progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(`homeroots-checklist-${stateCode.toLowerCase()}`)
    if (savedProgress) {
      try {
        setCompletedItems(JSON.parse(savedProgress))
      } catch (error) {
        console.error("Error loading saved progress:", error)
      }
    }
  }, [stateCode])

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(completedItems).length > 0) {
      localStorage.setItem(`homeroots-checklist-${stateCode.toLowerCase()}`, JSON.stringify(completedItems))
    }
  }, [completedItems, stateCode])

  // Toggle item completion
  const toggleItem = (id: string) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Reset progress
  const resetProgress = () => {
    if (confirm("Are you sure you want to reset your progress? This cannot be undone.")) {
      setCompletedItems({})
      localStorage.removeItem(`homeroots-checklist-${stateCode.toLowerCase()}`)
      toast({
        title: "Progress reset",
        description: "Your checklist progress has been reset.",
      })
    }
  }

  // Email progress
  const emailProgress = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the email
    toast({
      title: "Progress saved",
      description: `Your checklist progress has been emailed to ${email}.`,
    })
    setIsEmailDialogOpen(false)
  }

  // Filter items by category
  const filteredItems = items.filter((item) => {
    if (activeTab !== "all" && item.category !== activeTab) return false
    if (showOnlyRequired && !item.isRequired) return false
    return true
  })

  // Calculate progress
  const totalItems = items.length
  const completedCount = Object.values(completedItems).filter(Boolean).length
  const progress = totalItems > 0 ? (completedCount / totalItems) * 100 : 0

  // Group items by category for the summary
  const categoryCounts: Record<string, { total: number; completed: number }> = {}
  items.forEach((item) => {
    if (!categoryCounts[item.category]) {
      categoryCounts[item.category] = { total: 0, completed: 0 }
    }
    categoryCounts[item.category].total += 1
    if (completedItems[item.id]) {
      categoryCounts[item.category].completed += 1
    }
  })

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">Getting Started in {stateName}</CardTitle>
              <CardDescription>Track your progress as you begin homeschooling</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Share Your Progress</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setIsEmailDialogOpen(true)}>Email my checklist</DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href)
                      toast({
                        title: "Link copied",
                        description: "Link to this page has been copied to your clipboard.",
                      })
                    }}
                  >
                    Copy link
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="destructive" size="sm" onClick={resetProgress}>
                <Trash2 className="h-4 w-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>
                  {completedCount} of {totalItems} tasks completed
                </span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(categoryCounts).map(([category, { total, completed }]) => (
                <Card key={category} className="bg-muted/50">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium capitalize">{category}</span>
                      <span className="text-sm text-muted-foreground">
                        {completed}/{total}
                      </span>
                    </div>
                    <Progress value={(completed / total) * 100} className="h-1" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="legal">Legal</TabsTrigger>
            <TabsTrigger value="planning">Planning</TabsTrigger>
            <TabsTrigger value="recordkeeping">Records</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center space-x-2">
          <Switch id="required-only" checked={showOnlyRequired} onCheckedChange={setShowOnlyRequired} />
          <Label htmlFor="required-only">Show required items only</Label>
        </div>
      </div>

      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Card
              key={item.id}
              className={`transition-colors ${completedItems[item.id] ? "bg-muted/50 border-muted" : ""}`}
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <Checkbox
                    id={item.id}
                    checked={completedItems[item.id] || false}
                    onCheckedChange={() => toggleItem(item.id)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <Label
                        htmlFor={item.id}
                        className={`font-medium text-base ${
                          completedItems[item.id] ? "line-through text-muted-foreground" : ""
                        }`}
                      >
                        {item.title}
                      </Label>
                      <div className="flex flex-wrap gap-2">
                        {item.isRequired && (
                          <Badge
                            variant="outline"
                            className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                          >
                            Required
                          </Badge>
                        )}
                        {item.estimatedTime && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {item.estimatedTime}
                          </Badge>
                        )}
                        <Badge variant="outline" className="capitalize">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    {item.helpLink && (
                      <a
                        href={item.helpLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                      >
                        {item.helpText || "Learn more"} <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No items match your current filters.</p>
            <Button
              variant="link"
              onClick={() => {
                setActiveTab("all")
                setShowOnlyRequired(false)
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>

      <Dialog open={isEmailDialogOpen} onOpenChange={setIsEmailDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Email Your Checklist</DialogTitle>
            <DialogDescription>
              We'll send your current progress and a copy of the checklist to your email.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={emailProgress}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-md"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsEmailDialogOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Send Email</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
