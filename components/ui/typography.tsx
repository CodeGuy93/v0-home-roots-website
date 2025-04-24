import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

export function DisplayLarge({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn("font-display text-display-lg", className)} {...props}>
      {children}
    </h1>
  )
}

export function Display({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn("font-display text-display", className)} {...props}>
      {children}
    </h1>
  )
}

export function Heading1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn("text-heading-1", className)} {...props}>
      {children}
    </h1>
  )
}

export function Heading2({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn("text-heading-2", className)} {...props}>
      {children}
    </h2>
  )
}

export function Heading3({ children, className, ...props }: TypographyProps) {
  return (
    <h3 className={cn("text-heading-3", className)} {...props}>
      {children}
    </h3>
  )
}

export function Title({ children, className, ...props }: TypographyProps) {
  return (
    <h4 className={cn("text-title", className)} {...props}>
      {children}
    </h4>
  )
}

export function BodyLarge({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-body-lg", className)} {...props}>
      {children}
    </p>
  )
}

export function Body({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-body", className)} {...props}>
      {children}
    </p>
  )
}

export function Small({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-small", className)} {...props}>
      {children}
    </p>
  )
}

export function Tiny({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-xs", className)} {...props}>
      {children}
    </p>
  )
}

// Add a generic Heading component that defaults to Heading2
export function Heading({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn("text-heading-2", className)} {...props}>
      {children}
    </h2>
  )
}

// Add a generic Text component that defaults to Body
export function Text({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("text-body", className)} {...props}>
      {children}
    </p>
  )
}
