import { statesData } from "@/lib/states-data"
import type { Metadata } from "next"
import StatePageClient from "./StatePageClient"

// This function generates the static paths for all states
export function generateStaticParams() {
  return Object.keys(statesData).map((code) => ({
    code: code.toLowerCase(),
  }))
}

// This function generates the metadata for each state page
export async function generateMetadata({ params }: { params: { code: string } }): Promise<Metadata> {
  // Default metadata in case of any issues
  const defaultMetadata = {
    title: "State Homeschool Information | HomeRoots",
    description: "Find homeschooling information, requirements, and resources by state.",
  }

  // Safety check - if params or params.code is missing, return default metadata
  if (!params || !params.code) {
    return defaultMetadata
  }

  // Convert to uppercase safely - ensure we have a string first
  let stateCode: string
  try {
    stateCode = String(params.code).toUpperCase()
  } catch (error) {
    // If any error occurs during conversion, return default metadata
    console.error("Error converting state code to uppercase:", error)
    return defaultMetadata
  }

  // Check if state exists in our data
  const stateData = statesData[stateCode]
  if (!stateData) {
    return {
      title: "State Not Found | HomeRoots",
      description: "The requested state information could not be found.",
    }
  }

  // Return state-specific metadata
  return {
    title: `${stateData.name} Homeschool Laws and Requirements | HomeRoots`,
    description: `Complete guide to homeschooling in ${stateData.name}: legal requirements, resources, local groups, and getting started tips.`,
    keywords: [
      `${stateData.name} homeschool laws`,
      `homeschooling in ${stateData.name}`,
      `${stateData.name} homeschool requirements`,
      `how to homeschool in ${stateData.name}`,
    ],
  }
}

// The main page component
export default function StatePage({ params }: { params: { code: string } }) {
  // We'll handle all validation in the client component
  return <StatePageClient params={params} />
}
