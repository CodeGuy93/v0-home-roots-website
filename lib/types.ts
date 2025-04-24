export type StarterKit = {
  stateCode: string
  stateName: string
  regionName: string
  description: string
  requirements: {
    notification: string
    qualifications: string
    daysPerYear: number | string
    hoursPerDay: number | string
    subjects: string[]
    assessment: string
    recordKeeping: string
  }
  resources: Array<{ title: string; url: string; description: string }>
  localGroups: Array<{ name: string; location: string; description: string; contactInfo: string }>
  curriculum: Array<{ name: string; description: string; gradeLevel: string; url: string }>
  faqs: Array<{ question: string; answer: string }>
  gettingStartedSteps: string[]
}

export type CurriculumItem = {
  id: string
  name: string
  publisher: string
  description: string
  subjects: string[]
  gradeLevel: string[]
  teachingStyle: string[]
  format: string[]
  religiousAffiliation: string
  timeCommitment: string
  costRange: string
  imageUrl: string
  logoUrl: string // Added logoUrl field
  url: string
  features: string[]
  rating: number
  reviewCount: number
}

export type CurriculumFilters = {
  subjects: string[]
  gradeLevels: string[]
  teachingStyles: string[]
  formats: string[]
  religiousAffiliation: string[]
  timeCommitment: string[]
  costRange: string[]
}
