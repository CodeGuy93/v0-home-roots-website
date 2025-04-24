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
