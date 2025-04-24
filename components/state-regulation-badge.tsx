import { Badge } from "@/components/ui/badge"

interface StateRegulationBadgeProps {
  level: "low" | "moderate" | "high"
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export default function StateRegulationBadge({ level, showText = true, size = "md" }: StateRegulationBadgeProps) {
  const levelColors = {
    low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    moderate: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  }

  const sizeClasses = {
    sm: "text-xs px-1.5 py-0.5",
    md: "text-sm px-2 py-1",
    lg: "px-2.5 py-1.5",
  }

  return (
    <Badge variant="outline" className={`${levelColors[level]} ${sizeClasses[size]} flex items-center gap-1`}>
      <span
        className={`h-2 w-2 rounded-full ${level === "low" ? "bg-green-500" : level === "moderate" ? "bg-yellow-500" : "bg-red-500"}`}
      ></span>
      {showText && (
        <span>
          {level === "low" && "Low Regulation"}
          {level === "moderate" && "Moderate Regulation"}
          {level === "high" && "High Regulation"}
        </span>
      )}
    </Badge>
  )
}
