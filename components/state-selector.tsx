"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { getAllStateOptions } from "@/lib/comparison-utils"

interface StateOption {
  value: string
  label: string
}

interface StateSelectorProps {
  selectedState: string | null
  onStateChange: (value: string) => void
  placeholder?: string
  excludeStates?: string[]
}

export function StateSelector({
  selectedState,
  onStateChange,
  placeholder = "Select a state...",
  excludeStates = [],
}: StateSelectorProps) {
  const [open, setOpen] = useState(false)

  const stateOptions = getAllStateOptions().filter((option) => !excludeStates.includes(option.value))

  const selectedStateOption = stateOptions.find((state) => state.value === selectedState)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {selectedState ? selectedStateOption?.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search states..." />
          <CommandList>
            <CommandEmpty>No state found.</CommandEmpty>
            <CommandGroup className="max-h-[300px] overflow-y-auto">
              {stateOptions.map((state) => (
                <CommandItem
                  key={state.value}
                  value={state.value}
                  onSelect={() => {
                    onStateChange(state.value)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", selectedState === state.value ? "opacity-100" : "opacity-0")} />
                  {state.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
