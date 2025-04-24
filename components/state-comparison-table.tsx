"use client"

import { Check, X, AlertCircle, HelpCircle } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import StateRegulationBadge from "@/components/state-regulation-badge"
import { type ComparisonData, comparisonFields } from "@/lib/comparison-utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface StateComparisonTableProps {
  states: ComparisonData[]
}

export default function StateComparisonTable({ states }: StateComparisonTableProps) {
  if (states.length === 0) {
    return (
      <div className="text-center p-8 border rounded-lg bg-muted/30">
        <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium mb-2">No States Selected</h3>
        <p className="text-muted-foreground mb-4">Please select at least one state to compare requirements.</p>
      </div>
    )
  }

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
