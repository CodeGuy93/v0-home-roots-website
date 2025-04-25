"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, RefreshCw } from "lucide-react"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <Card className="w-full max-w-md mx-auto my-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-500" />
              Something went wrong
            </CardTitle>
            <CardDescription>
              An error occurred while rendering this component. Please try refreshing the page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-3 rounded-md overflow-auto max-h-[200px] text-sm">
              <pre>{this.state.error?.message || "Unknown error"}</pre>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                window.location.reload()
              }}
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh Page
            </Button>
          </CardFooter>
        </Card>
      )
    }

    return this.props.children
  }
}
