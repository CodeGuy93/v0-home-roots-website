import type { Metadata } from "next"
import StateComparisonClient from "./state-comparison-client"

export const metadata: Metadata = {
  title: "Compare Homeschool Requirements | HomeRoots",
  description:
    "Compare homeschooling requirements across different states side-by-side to understand the differences in regulations, testing, and recordkeeping.",
  keywords: ["homeschool comparison", "compare state requirements", "homeschool regulations", "state comparison"],
}

export default function CompareStatesPage() {
  return <StateComparisonClient />
}
