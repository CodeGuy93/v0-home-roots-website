import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface TypographyProps {
  children: ReactNode
  className?: string
}

export function Heading1({ children, className }: TypographyProps) {
  return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>
}

export function Heading2({ children, className }: TypographyProps) {
  return <h2 className={cn("scroll-m-20 text-3xl font-semibold tracking-tight", className)}>{children}</h2>
}

export function Heading3({ children, className }: TypographyProps) {
  return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{children}</h3>
}

export function Heading4({ children, className }: TypographyProps) {
  return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>{children}</h4>
}

export function Heading5({ children, className }: TypographyProps) {
  return <h5 className={cn("scroll-m-20 text-lg font-semibold tracking-tight", className)}>{children}</h5>
}

export function Heading6({ children, className }: TypographyProps) {
  return <h6 className={cn("scroll-m-20 text-base font-semibold tracking-tight", className)}>{children}</h6>
}

export function Body({ children, className }: TypographyProps) {
  return <p className={cn("leading-7", className)}>{children}</p>
}

export function Large({ children, className }: TypographyProps) {
  return <div className={cn("text-lg font-semibold", className)}>{children}</div>
}

export function Small({ children, className }: TypographyProps) {
  return <small className={cn("text-sm font-medium leading-none", className)}>{children}</small>
}

export function Tiny({ children, className }: TypographyProps) {
  return <small className={cn("text-xs text-muted-foreground", className)}>{children}</small>
}

export function Muted({ children, className }: TypographyProps) {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
}

export function DisplayLarge({ children, className }: TypographyProps) {
  return <h1 className={cn("scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl", className)}>{children}</h1>
}

export function Display({ children, className }: TypographyProps) {
  return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>
}

export function Title({ children, className }: TypographyProps) {
  return <div className={cn("text-lg font-semibold", className)}>{children}</div>
}

export function BodyLarge({ children, className }: TypographyProps) {
  return <p className={cn("text-lg leading-7", className)}>{children}</p>
}

// Add the missing exports
export function Heading({ children, className }: TypographyProps) {
  return <Heading2 className={className}>{children}</Heading2>
}

export function Text({ children, className }: TypographyProps) {
  return <Body className={className}>{children}</Body>
}
