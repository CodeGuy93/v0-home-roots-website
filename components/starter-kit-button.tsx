"use client"

import { useState } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"

interface StarterKitButtonProps extends ButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  showIcon?: boolean
  text?: string
  stateCode?: string
}

export default function StarterKitButton({
  variant = "default",
  size = "default",
  className = "",
  showIcon = true,
  text,
  stateCode,
  ...props
}: StarterKitButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  // Set default text based on whether we have a state code
  const defaultText = stateCode ? `Download ${stateCode.toUpperCase()} Starter Kit` : "Download Free Starter Kit"

  const buttonText = text || defaultText

  const handleDownload = async () => {
    try {
      setIsLoading(true)

      // Create a link to download the PDF
      const link = document.createElement("a")

      // Use state-specific endpoint if provided
      if (stateCode) {
        link.href = `/api/starter-kit/${stateCode.toLowerCase()}`
      } else {
        link.href = "/api/starter-kit"
      }

      link.download = stateCode ? `${stateCode.toLowerCase()}-starter-kit.pdf` : "homeroots-starter-kit.pdf"

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error("Error downloading starter kit:", error)
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`${className} ${showIcon ? "gap-2" : ""}`}
      onClick={handleDownload}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : showIcon ? <Download className="h-4 w-4" /> : null}
      {buttonText}
    </Button>
  )
}
