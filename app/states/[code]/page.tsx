import { statesData } from "@/lib/states-data"
import type { Metadata } from "next"
import StatePageClient from "./StatePageClient"

export function generateStaticParams() {
  return Object.keys(statesData).map((code) => ({
    code: code.toLowerCase(),
  }))
}

export async function generateMetadata({ params }: { params: { code?: string } }): Promise<Metadata> {
  // Add a safety check for undefined params.code
  if (!params.code) {
    return {
      title: "State Not Found | HomeRoots",
      description: "The requested state information could not be found.",
    }
  }

  const stateCode = params.code.toUpperCase()
  const stateData = statesData[stateCode]

  if (!stateData) {
    return {
      title: "State Not Found | HomeRoots",
      description: "The requested state information could not be found.",
    }
  }

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

export default function StatePage({ params }: { params: { code?: string } }) {
  // Add a safety check for the client component as well
  if (!params.code) {
    return <div>State code is required</div>
  }

  return <StatePageClient params={params} />
}
