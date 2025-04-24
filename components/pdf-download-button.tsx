"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"

interface PDFDownloadButtonProps {
  stateCode: string
  stateName: string
}

export default function PDFDownloadButton({ stateCode, stateName }: PDFDownloadButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = async () => {
    try {
      setIsLoading(true)

      // Create a link to download the PDF
      const link = document.createElement("a")
      link.href = `/api/pdf/${stateCode.toLowerCase()}`
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
    <Button onClick={handleDownload} variant="outline" className="gap-2" disabled={isLoading}>
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
      Download {stateName} Requirements PDF
    </Button>
  )
}
