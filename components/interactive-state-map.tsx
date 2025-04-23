"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usStatesMap } from "@/lib/us-states-map"
import { statesData } from "@/lib/states-data"
import { Card } from "@/components/ui/card"
import { useMediaQuery } from "@/hooks/use-media-query"

type StateTooltip = {
  id: string
  name: string
  summary: string
  x: number
  y: number
} | null

export default function InteractiveStateMap() {
  const [tooltip, setTooltip] = useState<StateTooltip>(null)
  const [highlightedState, setHighlightedState] = useState<string | null>(null)
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleMouseEnter = (e: React.MouseEvent<SVGPathElement>, stateCode: string) => {
    if (statesData[stateCode]) {
      const rect = e.currentTarget.getBoundingClientRect()
      const svgRect = e.currentTarget.ownerSVGElement?.getBoundingClientRect() || { left: 0, top: 0 }

      setTooltip({
        id: stateCode,
        name: statesData[stateCode].name,
        summary: statesData[stateCode].summary,
        x: rect.left + rect.width / 2 - svgRect.left,
        y: rect.top - svgRect.top,
      })
      setHighlightedState(stateCode)
    }
  }

  const handleMouseLeave = () => {
    setTooltip(null)
    setHighlightedState(null)
  }

  const handleStateClick = (stateCode: string) => {
    setSelectedState(stateCode)
  }

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="aspect-[959/593] bg-muted/30 rounded-lg overflow-hidden">
        <svg viewBox="0 0 959 593" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g>
            {Object.entries(usStatesMap).map(([stateCode, path]) => (
              <Link key={stateCode} href={`/states/${stateCode.toLowerCase()}`} prefetch={false}>
                <path
                  d={path}
                  fill={
                    highlightedState === stateCode || selectedState === stateCode
                      ? "hsl(var(--primary))"
                      : "hsl(var(--muted))"
                  }
                  stroke="hsl(var(--background))"
                  strokeWidth="1"
                  onMouseEnter={(e) => handleMouseEnter(e, stateCode)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick(stateCode)}
                  className="transition-colors duration-200 hover:fill-primary cursor-pointer"
                />
              </Link>
            ))}
          </g>
        </svg>

        {tooltip && !isMobile && (
          <div
            className="absolute bg-popover text-popover-foreground p-3 rounded-md shadow-md z-10 max-w-xs pointer-events-none"
            style={{
              left: `${tooltip.x}px`,
              top: `${tooltip.y}px`,
              transform: "translate(-50%, -100%) translateY(-10px)",
            }}
          >
            <h3 className="font-bold">{tooltip.name}</h3>
            <p className="text-sm">{tooltip.summary}</p>
            <div className="text-xs text-primary mt-1">Click for details</div>
          </div>
        )}
      </div>

      {/* Mobile state info display */}
      {isMobile && highlightedState && statesData[highlightedState] && (
        <Card className="mt-4 p-4">
          <h3 className="font-bold">{statesData[highlightedState].name}</h3>
          <p className="text-sm mt-1">{statesData[highlightedState].summary}</p>
          <Link
            href={`/states/${highlightedState.toLowerCase()}`}
            className="text-primary text-sm hover:underline mt-2 inline-block"
          >
            View details →
          </Link>
        </Card>
      )}

      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Hover over a state to see a summary. Click on a state to view detailed requirements.</p>
      </div>
    </div>
  )
}
