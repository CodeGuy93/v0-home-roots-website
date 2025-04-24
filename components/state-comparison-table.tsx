"use client"

import { Check, X, AlertCircle, HelpCircle, ChevronRight } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import StateRegulationBadge from "@/components/state-regulation-badge"
import { type ComparisonData, comparisonFields } from "@/lib/comparison-utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useMediaQuery } from "@/hooks/use-media-query"

interface StateComparisonTableProps {
  states: ComparisonData[]
}

export default function StateComparisonTable({ states }: StateComparisonTableProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [expandedField, setExpandedField] = useState<string | null>(null)

  if (states.length === 0) {
    return (
      <div className="text-center p-8 border rounded-lg bg-muted/30">
        <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">No States Selected</h3>
        <p className="text-muted-foreground mb-4">Please select at least one state to compare requirements.</p>
      </div>
    )
  }

  // Mobile view - accordion style
  if (isMobile) {
    return (
      <div className="space-y-6">
        {comparisonFields.map((field) => (
          <Card key={field.key} className="border">
            <CardHeader
              className="cursor-pointer"
              onClick={() => setExpandedField(expandedField === field.key ? null : field.key)}
            >
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-1">
                  {field.label}
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">{field.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
                <ChevronRight
                  className={`h-5 w-5 transition-transform ${expandedField === field.key ? "rotate-90" : ""}`}
                />
              </div>
            </CardHeader>
            {expandedField === field.key && (
              <CardContent>
                <div className="space-y-4">
                  {states.map((state) => {
                    const fieldData = state.fields[field.key]
                    return (
                      <div key={`${state.code}-${field.key}`} className="border-b pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{state.name}</div>
                          <StateRegulationBadge level={state.regulationLevel} />
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-1">
                            {fieldData.required ? (
                              <Check className="h-5 w-5 text-green-500" />
                            ) : (
                              <X className="h-5 w-5 text-red-500" />
                            )}
                          </div>
                          <div className="text-sm">{fieldData.details}</div>
                        </div>
                        <div className="mt-2">
                          <Button size="sm" variant="outline" asChild className="w-full">
                            <Link href={`/states/${state.code.toLowerCase()}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    )
  }

  // Desktop view - table
  return (
    <div className="overflow-x-auto">
      <TooltipProvider>
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Requirement</TableHead>
              {states.map((state) => (
                <TableHead key={state.code} className="min-w-[250px]">
                  <div className="flex flex-col items-center gap-2 py-2">
                    <div className="font-bold text-lg">{state.name}</div>
                    <StateRegulationBadge level={state.regulationLevel} />
                    <div className="text-xs text-muted-foreground mt-1">{state.summary}</div>
                    <Button size="sm" variant="outline" asChild className="mt-2">
                      <Link href={`/states/${state.code.toLowerCase()}`}>View Details</Link>
                    </Button>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonFields.map((field) => (
              <TableRow key={field.key}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-1">
                    {field.label}
                    <Tooltip>
                      <TooltipTrigger>
                        <HelpCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{field.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TableCell>
                {states.map((state) => {
                  const fieldData = state.fields[field.key]
                  return (
                    <TableCell key={`${state.code}-${field.key}`}>
                      <div className="flex items-start gap-2">
                        <div className="mt-1">
                          {fieldData.required ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                        <div className="text-sm">{fieldData.details}</div>
                      </div>
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TooltipProvider>
    </div>
  )
}
