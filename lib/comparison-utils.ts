import { statesData } from "./states-data"
import { enhancedStatesData } from "./enhanced-state-data"

export type ComparisonCategory =
  | "notification"
  | "testing"
  | "recordkeeping"
  | "parentQualifications"
  | "subjects"
  | "hours"

export type ComparisonField = {
  label: string
  key: ComparisonCategory
  description: string
}

export const comparisonFields: ComparisonField[] = [
  {
    label: "Notification",
    key: "notification",
    description: "Whether parents must notify authorities of their intent to homeschool",
  },
  {
    label: "Testing Requirements",
    key: "testing",
    description: "Standardized testing or evaluation requirements",
  },
  {
    label: "Recordkeeping",
    key: "recordkeeping",
    description: "Records that must be maintained by homeschooling families",
  },
  {
    label: "Parent Qualifications",
    key: "parentQualifications",
    description: "Required qualifications for parents who homeschool",
  },
  {
    label: "Required Subjects",
    key: "subjects",
    description: "Subjects that must be taught in homeschool programs",
  },
  {
    label: "Hours of Instruction",
    key: "hours",
    description: "Required hours or days of instruction",
  },
]

export type ComparisonData = {
  code: string
  name: string
  regulationLevel: "low" | "moderate" | "high"
  summary: string
  fields: Record<
    ComparisonCategory,
    {
      required: boolean
      details: string
    }
  >
}

export function getComparisonData(stateCodes: string[]): ComparisonData[] {
  return stateCodes.map((code) => {
    const stateCode = code.toUpperCase()
    const stateData = statesData[stateCode]
    const enhancedData = enhancedStatesData[stateCode]

    // Default values if enhanced data isn't available
    const defaultField = {
      required: false,
      details: "Information not available",
    }

    // Use enhanced data if available, otherwise create simplified data from basic state data
    const fields = {
      notification: enhancedData?.notification || {
        required: stateData.requirements.some(
          (req) =>
            req.toLowerCase().includes("notify") ||
            req.toLowerCase().includes("file") ||
            req.toLowerCase().includes("register") ||
            req.toLowerCase().includes("submit"),
        ),
        details:
          stateData.requirements.find(
            (req) =>
              req.toLowerCase().includes("notify") ||
              req.toLowerCase().includes("file") ||
              req.toLowerCase().includes("register") ||
              req.toLowerCase().includes("submit"),
          ) || defaultField.details,
      },
      testing: enhancedData?.testing || {
        required: stateData.requirements.some(
          (req) =>
            req.toLowerCase().includes("test") ||
            req.toLowerCase().includes("assessment") ||
            req.toLowerCase().includes("evaluation"),
        ),
        details:
          stateData.requirements.find(
            (req) =>
              req.toLowerCase().includes("test") ||
              req.toLowerCase().includes("assessment") ||
              req.toLowerCase().includes("evaluation"),
          ) || defaultField.details,
      },
      recordkeeping: enhancedData?.recordkeeping || {
        required: stateData.requirements.some(
          (req) =>
            req.toLowerCase().includes("record") ||
            req.toLowerCase().includes("portfolio") ||
            req.toLowerCase().includes("document"),
        ),
        details:
          stateData.requirements.find(
            (req) =>
              req.toLowerCase().includes("record") ||
              req.toLowerCase().includes("portfolio") ||
              req.toLowerCase().includes("document"),
          ) || defaultField.details,
      },
      parentQualifications: enhancedData?.parentQualifications || {
        required: stateData.requirements.some(
          (req) =>
            req.toLowerCase().includes("parent") &&
            (req.toLowerCase().includes("qualification") ||
              req.toLowerCase().includes("degree") ||
              req.toLowerCase().includes("diploma")),
        ),
        details:
          stateData.requirements.find(
            (req) =>
              req.toLowerCase().includes("parent") &&
              (req.toLowerCase().includes("qualification") ||
                req.toLowerCase().includes("degree") ||
                req.toLowerCase().includes("diploma")),
          ) || defaultField.details,
      },
      subjects: enhancedData?.subjects || {
        required: stateData.requirements.some(
          (req) =>
            req.toLowerCase().includes("subject") ||
            req.toLowerCase().includes("curriculum") ||
            req.toLowerCase().includes("teach"),
        ),
        details:
          stateData.requirements.find(
            (req) =>
              req.toLowerCase().includes("subject") ||
              req.toLowerCase().includes("curriculum") ||
              req.toLowerCase().includes("teach"),
          ) || defaultField.details,
      },
      hours: enhancedData?.hours || {
        required: stateData.requirements.some(
          (req) =>
            req.toLowerCase().includes("hour") ||
            req.toLowerCase().includes("day") ||
            req.toLowerCase().includes("time"),
        ),
        details:
          stateData.requirements.find(
            (req) =>
              req.toLowerCase().includes("hour") ||
              req.toLowerCase().includes("day") ||
              req.toLowerCase().includes("time"),
          ) || defaultField.details,
      },
    }

    // Determine regulation level
    let regulationLevel: "low" | "moderate" | "high" = enhancedData?.regulationLevel || "moderate"
    if (!enhancedData) {
      // Simple algorithm to determine regulation level if enhanced data isn't available
      const requiredCount = Object.values(fields).filter((f) => f.required).length
      if (requiredCount <= 2) regulationLevel = "low"
      else if (requiredCount >= 5) regulationLevel = "high"
      else regulationLevel = "moderate"
    }

    return {
      code: stateCode,
      name: stateData.name,
      regulationLevel,
      summary: stateData.summary,
      fields,
    }
  })
}

export function getAllStateOptions() {
  return Object.entries(statesData)
    .map(([code, data]) => ({
      value: code,
      label: data.name,
    }))
    .sort((a, b) => a.label.localeCompare(b.label))
}
