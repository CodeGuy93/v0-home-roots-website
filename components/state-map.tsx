"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { statesData } from "@/lib/states-data"
import { usStatesMap } from "@/lib/us-states-map"

type StateTooltip = {
  id: string
  name: string
  summary: string
  x: number
  y: number
} | null

export default function StateMap() {
  const [tooltip, setTooltip] = useState<StateTooltip>(null)
  const [highlightedState, setHighlightedState] = useState<string | null>(null)

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

  return (
    <section id="laws" className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Explore Homeschool Laws by State</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Hover over a state to view a summary. Click to visit its legal page.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="aspect-[959/593] bg-muted/30 rounded-lg overflow-hidden">
          <svg viewBox="0 0 959 593" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <g>
              {Object.entries(usStatesMap).map(([stateCode, path]) => (
                <Link key={stateCode} href={`/states/${stateCode.toLowerCase()}`} prefetch={false}>
                  <path
                    d={path}
                    fill={highlightedState === stateCode ? "hsl(var(--primary))" : "hsl(var(--muted))"}
                    stroke="hsl(var(--background))"
                    strokeWidth="1"
                    onMouseEnter={(e) => handleMouseEnter(e, stateCode)}
                    onMouseLeave={handleMouseLeave}
                    className="transition-colors duration-200 hover:fill-primary cursor-pointer"
                  />
                </Link>
              ))}
            </g>
          </svg>

          {tooltip && (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {Object.entries(statesData)
            .filter((_, index) => index < 3) // Just show a few examples
            .map(([stateCode, state]) => (
              <Card key={stateCode} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{state.name}</h3>
                  <p className="text-muted-foreground mb-4">{state.summary}</p>
                  <Link
                    href={`/states/${stateCode.toLowerCase()}`}
                    className="text-primary hover:underline font-medium"
                  >
                    View full requirements →
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
