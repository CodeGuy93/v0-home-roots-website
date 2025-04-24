"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, Plus, Check, Award } from "lucide-react"
import type { CurriculumItem } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Text, Heading } from "@/components/ui/typography"

interface EnhancedCurriculumCardProps {
  curriculum: CurriculumItem
  isInComparison?: boolean
  onToggleComparison?: (curriculum: CurriculumItem) => void
  maxComparisonReached?: boolean
}

export function EnhancedCurriculumCard({
  curriculum,
  isInComparison = false,
  onToggleComparison,
  maxComparisonReached = false,
}: EnhancedCurriculumCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isTopRated = curriculum.rating >= 4.5

  // Generate stars for rating
  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const starFill = i <= rating ? "text-amber-400" : "text-gray-300"
      stars.push(<Star key={i} className={`w-4 h-4 ${starFill}`} fill={i <= rating ? "currentColor" : "none"} />)
    }
    return stars
  }

  // Limit subjects to display
  const displaySubjects = curriculum.subjects.slice(0, 3)
  const hasMoreSubjects = curriculum.subjects.length > 3

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative flex flex-col rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300",
        isHovered && "shadow-md scale-[1.01]",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Rated Badge */}
      {isTopRated && (
        <div className="absolute top-3 right-3 z-10">
          <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
            <Award className="w-3 h-3" />
            <span>Top Rated</span>
          </div>
        </div>
      )}

      {/* Curriculum Image */}
      <div className="relative h-48 bg-gray-100">
        {curriculum.imageUrl ? (
          <Image
            src={curriculum.imageUrl || "/placeholder.svg"}
            alt={curriculum.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <Text className="text-gray-400">No image available</Text>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col p-4 flex-grow">
        {/* Publisher Logo and Name */}
        <div className="flex items-center gap-2 mb-2">
          {curriculum.logoUrl ? (
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white border border-gray-200">
              <Image
                src={curriculum.logoUrl || "/placeholder.svg"}
                alt={`${curriculum.publisher} logo`}
                fill
                className="object-contain p-1"
                sizes="32px"
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Text className="text-gray-500 text-xs font-medium">
                {curriculum.publisher.substring(0, 2).toUpperCase()}
              </Text>
            </div>
          )}
          <Text className="text-sm text-gray-600">{curriculum.publisher}</Text>
        </div>

        {/* Curriculum Name */}
        <Heading as="h3" size="sm" className="mb-1 line-clamp-2">
          {curriculum.name}
        </Heading>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">{renderStars(curriculum.rating)}</div>
          <Text className="text-sm text-gray-600 ml-1">
            ({curriculum.rating.toFixed(1)}) {curriculum.reviewCount} reviews
          </Text>
        </div>

        {/* Subjects */}
        <div className="flex flex-wrap gap-1 mb-3">
          {displaySubjects.map((subject) => (
            <span key={subject} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
              {subject}
            </span>
          ))}
          {hasMoreSubjects && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              +{curriculum.subjects.length - 3} more
            </span>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div>
            <Text className="text-xs text-gray-500">Grade Level</Text>
            <Text className="text-sm font-medium">{curriculum.gradeLevel.join(", ")}</Text>
          </div>
          <div>
            <Text className="text-xs text-gray-500">Format</Text>
            <Text className="text-sm font-medium">{curriculum.format.join(", ")}</Text>
          </div>
          <div>
            <Text className="text-xs text-gray-500">Religious</Text>
            <Text className="text-sm font-medium">{curriculum.religiousAffiliation}</Text>
          </div>
          <div>
            <Text className="text-xs text-gray-500">Cost</Text>
            <Text className="text-sm font-medium">{curriculum.costRange}</Text>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-4 pt-0 mt-auto">
        {onToggleComparison && (
          <button
            onClick={() => onToggleComparison(curriculum)}
            disabled={!isInComparison && maxComparisonReached}
            className={cn(
              "w-full py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-colors",
              isInComparison
                ? "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100"
                : maxComparisonReached
                  ? "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                  : "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100",
            )}
          >
            {isInComparison ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Compare</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to Compare</span>
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  )
}
