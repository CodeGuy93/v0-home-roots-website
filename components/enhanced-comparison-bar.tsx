"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { useComparison } from "@/lib/comparison-context"
import { Button } from "@/components/ui/button"
import { X, ArrowRight, BarChart2 } from "lucide-react"
import Image from "next/image"
import { Text, Heading } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

export function EnhancedComparisonBar() {
  const { comparedItems, removeFromComparison, clearComparison } = useComparison()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      setIsVisible(comparedItems.length > 0)
    }
  }, [comparedItems.length, mounted])

  if (!mounted) return null

  if (comparedItems.length === 0) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg py-3 px-4">
            <div className="container mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <BarChart2 className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                    <Heading as="h3" size="xs" className="text-gray-900 dark:text-gray-100">
                      Comparing {comparedItems.length} {comparedItems.length === 1 ? "curriculum" : "curricula"}
                    </Heading>
                  </div>

                  <div className="hidden md:flex space-x-2 overflow-x-auto max-w-[50vw] pb-1">
                    {comparedItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center bg-gray-50 dark:bg-gray-800 rounded-md p-1.5 pr-2 border border-gray-200 dark:border-gray-700"
                      >
                        <div className="h-8 w-8 mr-2 flex-shrink-0 bg-white dark:bg-gray-900 rounded overflow-hidden border border-gray-200 dark:border-gray-700">
                          {item.logoUrl ? (
                            <Image
                              src={item.logoUrl || "/placeholder.svg"}
                              alt={`${item.name} logo`}
                              width={32}
                              height={32}
                              className="h-full w-full object-contain p-1"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                              <Text className="text-xs font-medium text-gray-500">
                                {item.name.substring(0, 2).toUpperCase()}
                              </Text>
                            </div>
                          )}
                        </div>
                        <Text className="text-sm font-medium mr-1 truncate max-w-[100px]">{item.name}</Text>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-5 w-5 p-0 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                          onClick={() => removeFromComparison(item.id)}
                        >
                          <X className="h-3 w-3" />
                          <span className="sr-only">Remove {item.name}</span>
                        </Button>
                      </div>
                    ))}
                  </div>

                  <div className="md:hidden">
                    <Text className="text-sm text-gray-600 dark:text-gray-400">
                      {comparedItems.map((item) => item.name).join(", ")}
                    </Text>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearComparison}
                    className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700"
                  >
                    Clear All
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => router.push("/curriculum-finder/compare")}
                    className={cn(
                      "bg-primary-600 hover:bg-primary-700 text-white",
                      "flex items-center transition-all duration-300",
                    )}
                  >
                    Compare Now <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
