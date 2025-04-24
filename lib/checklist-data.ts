export interface ChecklistItem {
  id: string
  title: string
  description: string
  category: "legal" | "planning" | "resources" | "community" | "recordkeeping"
  isRequired: boolean
  estimatedTime?: string
  helpLink?: string
  helpText?: string
}

export interface StateChecklist {
  stateCode: string
  items: ChecklistItem[]
}

// Example checklist for Texas
export const texasChecklist: StateChecklist = {
  stateCode: "TX",
  items: [
    {
      id: "tx-understand-law",
      title: "Understand Texas homeschool laws",
      description: "Familiarize yourself with Texas homeschool laws and requirements.",
      category: "legal",
      isRequired: true,
      estimatedTime: "30 minutes",
      helpLink: "/states/tx",
      helpText: "Read our Texas homeschool law guide",
    },
    {
      id: "tx-withdrawal-letter",
      title: "Submit withdrawal letter (if applicable)",
      description: "If your child is currently enrolled in public school, submit a withdrawal letter to the school.",
      category: "legal",
      isRequired: true,
      estimatedTime: "1 hour",
      helpLink: "https://thsc.org/wp-content/uploads/2020/05/Withdrawal_Letter_2020.pdf",
      helpText: "Download a sample withdrawal letter",
    },
    {
      id: "tx-curriculum",
      title: "Choose curriculum for required subjects",
      description: "Select curriculum materials for reading, spelling, grammar, mathematics, and good citizenship.",
      category: "planning",
      isRequired: true,
      estimatedTime: "2-4 hours",
      helpLink: "/resources/curriculum",
      helpText: "Browse curriculum options",
    },
    {
      id: "tx-schedule",
      title: "Create a learning schedule",
      description: "Develop a weekly schedule that works for your family.",
      category: "planning",
      isRequired: false,
      estimatedTime: "1-2 hours",
      helpLink: "/blog/homeschool-scheduling-methods",
      helpText: "Read about scheduling methods",
    },
    {
      id: "tx-learning-space",
      title: "Set up a learning space",
      description: "Designate and organize a space in your home for learning activities.",
      category: "planning",
      isRequired: false,
      estimatedTime: "2-3 hours",
    },
    {
      id: "tx-join-group",
      title: "Join a local homeschool group",
      description: "Connect with other homeschooling families in your area for support and socialization.",
      category: "community",
      isRequired: false,
      estimatedTime: "1 hour",
      helpLink: "/states/tx#local-groups",
      helpText: "Find local groups in Texas",
    },
    {
      id: "tx-record-system",
      title: "Set up a record-keeping system",
      description: "Create a system for tracking attendance, curriculum, and learning progress.",
      category: "recordkeeping",
      isRequired: false,
      estimatedTime: "1-2 hours",
      helpLink: "/resources/record-keeping",
      helpText: "Download record-keeping templates",
    },
    {
      id: "tx-resources",
      title: "Gather learning resources",
      description: "Collect books, supplies, and online resources for your homeschool.",
      category: "resources",
      isRequired: false,
      estimatedTime: "Ongoing",
    },
    {
      id: "tx-goals",
      title: "Set learning goals",
      description: "Establish goals for your child's education for the coming year.",
      category: "planning",
      isRequired: false,
      estimatedTime: "1-2 hours",
    },
    {
      id: "tx-legal-defense",
      title: "Consider joining a homeschool legal defense organization",
      description: "Organizations like HSLDA provide legal protection and advice for homeschooling families.",
      category: "legal",
      isRequired: false,
      estimatedTime: "30 minutes",
      helpLink: "https://hslda.org/",
      helpText: "Learn about legal defense options",
    },
  ],
}

// Example checklist for California (more regulated state)
export const californiaChecklist: StateChecklist = {
  stateCode: "CA",
  items: [
    {
      id: "ca-understand-law",
      title: "Understand California homeschool laws",
      description: "Familiarize yourself with California homeschool laws and options.",
      category: "legal",
      isRequired: true,
      estimatedTime: "1 hour",
      helpLink: "/states/ca",
      helpText: "Read our California homeschool law guide",
    },
    {
      id: "ca-choose-option",
      title: "Choose your legal homeschool option",
      description:
        "Decide between filing a private school affidavit, enrolling in a charter school, or joining a private school satellite program (PSP).",
      category: "legal",
      isRequired: true,
      estimatedTime: "2-3 hours",
      helpLink: "/states/ca#options",
      helpText: "Compare California homeschool options",
    },
    {
      id: "ca-file-affidavit",
      title: "File a private school affidavit (if applicable)",
      description:
        "If you're establishing your own private school, file the affidavit with the California Department of Education between October 1 and 15.",
      category: "legal",
      isRequired: true,
      estimatedTime: "1 hour",
      helpLink: "https://www.cde.ca.gov/sp/ps/psaffidavit.asp",
      helpText: "Access the affidavit filing system",
    },
    {
      id: "ca-curriculum",
      title: "Choose curriculum for required subjects",
      description: "Select curriculum materials for all required subjects in California.",
      category: "planning",
      isRequired: true,
      estimatedTime: "3-5 hours",
      helpLink: "/resources/curriculum",
      helpText: "Browse curriculum options",
    },
    {
      id: "ca-attendance",
      title: "Set up attendance records",
      description: "Create a system for tracking the 175 days of instruction required in California.",
      category: "recordkeeping",
      isRequired: true,
      estimatedTime: "1 hour",
      helpLink: "/resources/record-keeping",
      helpText: "Download attendance templates",
    },
    {
      id: "ca-course-of-study",
      title: "Create a course of study",
      description: "Document your planned course of study for each student.",
      category: "recordkeeping",
      isRequired: true,
      estimatedTime: "2-3 hours",
    },
    {
      id: "ca-teacher-qualifications",
      title: "Document teacher qualifications",
      description: "Keep records of your qualifications to teach (capability of teaching).",
      category: "recordkeeping",
      isRequired: true,
      estimatedTime: "1 hour",
    },
    {
      id: "ca-join-group",
      title: "Join a local homeschool group",
      description: "Connect with other homeschooling families in your area for support and socialization.",
      category: "community",
      isRequired: false,
      estimatedTime: "1 hour",
      helpLink: "/states/ca#local-groups",
      helpText: "Find local groups in California",
    },
    {
      id: "ca-learning-space",
      title: "Set up a learning space",
      description: "Designate and organize a space in your home for learning activities.",
      category: "planning",
      isRequired: false,
      estimatedTime: "2-3 hours",
    },
    {
      id: "ca-legal-defense",
      title: "Join a homeschool legal defense organization",
      description: "Organizations like HSLDA provide legal protection and advice for homeschooling families.",
      category: "legal",
      isRequired: false,
      estimatedTime: "30 minutes",
      helpLink: "https://hslda.org/",
      helpText: "Learn about legal defense options",
    },
  ],
}

// Map of all state checklists
export const stateChecklists: Record<string, StateChecklist> = {
  TX: texasChecklist,
  CA: californiaChecklist,
  // Add other states as they're created
}

// Default checklist for states that don't have a specific one yet
export const defaultChecklist: ChecklistItem[] = [
  {
    id: "default-understand-law",
    title: "Understand your state's homeschool laws",
    description: "Familiarize yourself with your state's homeschool laws and requirements.",
    category: "legal",
    isRequired: true,
    estimatedTime: "1 hour",
  },
  {
    id: "default-notification",
    title: "Submit required notification (if applicable)",
    description:
      "If your state requires notification, submit the necessary forms to your school district or state education department.",
    category: "legal",
    isRequired: true,
    estimatedTime: "1-2 hours",
  },
  {
    id: "default-withdrawal",
    title: "Withdraw from public school (if applicable)",
    description: "If your child is currently enrolled in public school, follow your state's process for withdrawal.",
    category: "legal",
    isRequired: true,
    estimatedTime: "1 hour",
  },
  {
    id: "default-curriculum",
    title: "Choose curriculum for required subjects",
    description: "Select curriculum materials for all subjects required by your state.",
    category: "planning",
    isRequired: true,
    estimatedTime: "2-4 hours",
  },
  {
    id: "default-schedule",
    title: "Create a learning schedule",
    description: "Develop a weekly schedule that works for your family.",
    category: "planning",
    isRequired: false,
    estimatedTime: "1-2 hours",
  },
  {
    id: "default-record-system",
    title: "Set up a record-keeping system",
    description: "Create a system for tracking attendance, curriculum, and learning progress.",
    category: "recordkeeping",
    isRequired: false,
    estimatedTime: "1-2 hours",
  },
  {
    id: "default-join-group",
    title: "Join a local homeschool group",
    description: "Connect with other homeschooling families in your area for support and socialization.",
    category: "community",
    isRequired: false,
    estimatedTime: "1 hour",
  },
  {
    id: "default-learning-space",
    title: "Set up a learning space",
    description: "Designate and organize a space in your home for learning activities.",
    category: "planning",
    isRequired: false,
    estimatedTime: "2-3 hours",
  },
  {
    id: "default-resources",
    title: "Gather learning resources",
    description: "Collect books, supplies, and online resources for your homeschool.",
    category: "resources",
    isRequired: false,
    estimatedTime: "Ongoing",
  },
]
