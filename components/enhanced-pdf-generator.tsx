"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Download, FileText, Printer, Share2 } from "lucide-react"

interface EnhancedPDFGeneratorProps {
  stateCode: string
  stateName: string
}

export default function EnhancedPDFGenerator({ stateCode, stateName }: EnhancedPDFGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSections, setSelectedSections] = useState({
    requirements: true,
    resources: true,
    gettingStarted: true,
    faqs: false,
    localGroups: false,
  })

  const handleSectionToggle = (section: keyof typeof selectedSections) => {
    setSelectedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleDownload = async () => {
    try {
      setIsLoading(true)

      // In a real implementation, you would pass the selected sections as query parameters
      const queryParams = new URLSearchParams()
      Object.entries(selectedSections).forEach(([key, value]) => {
        if (value) queryParams.append(key, "true")
      })

      // Create a link to download the PDF
      const link = document.createElement("a")
      link.href = `/api/pdf/${stateCode.toLowerCase()}?${queryParams.toString()}`
      link.download = `${stateCode.toUpperCase()}-homeschool-requirements.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading PDF:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <FileText className="h-4 w-4" />
          Create Printable Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create {stateName} Printable Guide</DialogTitle>
          <DialogDescription>
            Customize your printable guide by selecting the sections you want to include.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <h4 className="text-sm font-medium mb-3">Select sections to include:</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="requirements"
                checked={selectedSections.requirements}
                onCheckedChange={() => handleSectionToggle("requirements")}
              />
              <Label htmlFor="requirements">Legal Requirements</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="resources"
                checked={selectedSections.resources}
                onCheckedChange={() => handleSectionToggle("resources")}
              />
              <Label htmlFor="resources">Resources</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="gettingStarted"
                checked={selectedSections.gettingStarted}
                onCheckedChange={() => handleSectionToggle("gettingStarted")}
              />
              <Label htmlFor="gettingStarted">Getting Started Guide</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="faqs" checked={selectedSections.faqs} onCheckedChange={() => handleSectionToggle("faqs")} />
              <Label htmlFor="faqs">FAQs</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="localGroups"
                checked={selectedSections.localGroups}
                onCheckedChange={() => handleSectionToggle("localGroups")}
              />
              <Label htmlFor="localGroups">Local Groups</Label>
            </div>
          </div>
        </div>

        <Tabs defaultValue="download" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="download">Download</TabsTrigger>
            <TabsTrigger value="print">Print</TabsTrigger>
            <TabsTrigger value="share">Share</TabsTrigger>
          </TabsList>

          <TabsContent value="download" className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Download a PDF version of the {stateName} homeschool guide to save on your device.
            </p>
            <Button onClick={handleDownload} className="w-full gap-2" disabled={isLoading}>
              {isLoading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              Download PDF
            </Button>
          </TabsContent>

          <TabsContent value="print" className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Print the {stateName} homeschool guide directly from your browser.
            </p>
            <Button
              onClick={() => {
                handleDownload()
                setTimeout(() => {
                  window.print()
                }, 1000)
              }}
              className="w-full gap-2"
            >
              <Printer className="h-4 w-4" />
              Print Guide
            </Button>
          </TabsContent>

          <TabsContent value="share" className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Share this {stateName} homeschool guide with others via email or social media.
            </p>
            <Button
              onClick={() => {
                // In a real implementation, you would generate a shareable link
                navigator.clipboard.writeText(`https://homeroots.com/states/${stateCode.toLowerCase()}`)
                alert("Link copied to clipboard!")
              }}
              className="w-full gap-2"
            >
              <Share2 className="h-4 w-4" />
              Copy Shareable Link
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
