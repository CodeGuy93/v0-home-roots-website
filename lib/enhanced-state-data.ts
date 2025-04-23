export type Resource = {
  name: string
  url: string
  description: string
  category: "official" | "community" | "curriculum" | "legal" | "support"
}

export type FAQ = {
  question: string
  answer: string
}

export type LocalGroup = {
  name: string
  location: string
  description: string
  website?: string
  contactEmail?: string
}

export type EnhancedStateData = {
  code: string
  name: string
  summary: string
  regulationLevel: "low" | "moderate" | "high"
  content: string
  requirements: string[]
  recordkeeping: {
    required: boolean
    details: string
  }
  testing: {
    required: boolean
    grades: string[]
    details: string
  }
  notification: {
    required: boolean
    frequency: "none" | "one-time" | "annual" | "other"
    details: string
  }
  parentQualifications: {
    required: boolean
    details: string
  }
  subjects: {
    required: boolean
    list: string[]
    details: string
  }
  hours: {
    required: boolean
    amount: string
    details: string
  }
  resources: Resource[]
  faqs: FAQ[]
  localGroups: LocalGroup[]
  officialLinks: {
    lawText: string
    educationDept: string
    forms: string[]
  }
  gettingStarted: {
    steps: string[]
    tips: string[]
  }
}

// Example data for Texas
export const enhancedTexasData: EnhancedStateData = {
  code: "TX",
  name: "Texas",
  summary:
    "Homeschooling is legal with minimal requirements: teach in a bona fide manner, use a curriculum, and cover 5 core subjects.",
  regulationLevel: "low",
  content:
    "Texas considers homeschools to be private schools, which are not regulated by the state. To legally homeschool in Texas, you must conduct your homeschool in a bona fide (genuine) manner, use a written curriculum, and teach the required subjects.",
  requirements: [
    "Teach in a bona fide manner",
    "Use a written curriculum",
    "Cover reading, spelling, grammar, mathematics, and good citizenship",
    "No registration, testing, or teacher qualification requirements",
  ],
  recordkeeping: {
    required: false,
    details:
      "Texas does not require homeschooling families to maintain specific records. However, it's recommended to keep attendance records, curriculum plans, and samples of student work for your own documentation.",
  },
  testing: {
    required: false,
    grades: [],
    details:
      "Texas does not require standardized testing for homeschooled students. However, if you plan for your child to return to public school or attend college, you may want to consider voluntary testing.",
  },
  notification: {
    required: false,
    frequency: "none",
    details:
      "Texas does not require families to notify any government agency of their intent to homeschool. However, if withdrawing a child from public school, you should submit a withdrawal letter to avoid truancy concerns.",
  },
  parentQualifications: {
    required: false,
    details:
      "Texas does not require parents to have specific qualifications to homeschool their children. You do not need a teaching certificate or college degree.",
  },
  subjects: {
    required: true,
    list: ["Reading", "Spelling", "Grammar", "Mathematics", "Good citizenship"],
    details:
      "Texas law requires homeschools to teach five subjects: reading, spelling, grammar, mathematics, and good citizenship (civics). Many families choose to teach additional subjects like science, history, art, and foreign languages.",
  },
  hours: {
    required: false,
    amount: "None specified",
    details: "Texas does not specify a required number of days or hours of instruction for homeschooling families.",
  },
  resources: [
    {
      name: "Texas Homeschool Coalition",
      url: "https://thsc.org/",
      description:
        "The largest statewide homeschool organization providing support, resources, and advocacy for Texas homeschooling families.",
      category: "support",
    },
    {
      name: "Texas Education Agency - Homeschooling",
      url: "https://tea.texas.gov/texas-schools/general-information/finding-a-school-for-your-child/homeschooling",
      description: "Official information about homeschooling from the Texas Education Agency.",
      category: "official",
    },
    {
      name: "Texas Home Educators",
      url: "https://www.texashomeeducators.com/",
      description:
        "A community organization providing support, resources, and events for homeschooling families across Texas.",
      category: "community",
    },
    {
      name: "HSLDA Texas",
      url: "https://hslda.org/legal/texas",
      description:
        "Legal information and support for homeschooling families in Texas from the Home School Legal Defense Association.",
      category: "legal",
    },
    {
      name: "Time4Learning Texas Homeschool",
      url: "https://www.time4learning.com/homeschooling/texas/",
      description: "Curriculum resources and information specific to homeschooling in Texas.",
      category: "curriculum",
    },
  ],
  faqs: [
    {
      question: "Do I need to register with the state to homeschool in Texas?",
      answer: "No. Texas does not require homeschooling families to register with the state or local school district.",
    },
    {
      question: "How do I withdraw my child from public school in Texas?",
      answer:
        "Submit a written letter of withdrawal to your child's school. The Texas Homeschool Coalition offers templates on their website. It's recommended to send this via certified mail with return receipt requested.",
    },
    {
      question: "Can my homeschooled child participate in public school activities?",
      answer:
        "Texas does not have a law requiring public schools to allow homeschooled students to participate in classes or extracurricular activities (no 'Tim Tebow law'). However, some districts may allow participation at their discretion.",
    },
    {
      question: "Are homeschooled students eligible for college scholarships in Texas?",
      answer:
        "Yes. Homeschooled students are eligible for the same scholarships as other students, including state scholarships. Many colleges actively recruit homeschooled students.",
    },
    {
      question: "Do homeschooled students need to take the STAAR test?",
      answer:
        "No. Homeschooled students are not required to take the STAAR (State of Texas Assessments of Academic Readiness) tests.",
    },
  ],
  localGroups: [
    {
      name: "Houston Area Homeschool Association",
      location: "Houston",
      description:
        "A support group for homeschooling families in the greater Houston area, offering co-op classes, field trips, and social events.",
      website: "https://www.houstonhomeschool.org",
    },
    {
      name: "Dallas-Fort Worth Homeschool Resource",
      location: "Dallas-Fort Worth",
      description:
        "Serving homeschooling families in the DFW metroplex with resources, support meetings, and educational activities.",
      website: "https://www.dfwhomeschool.com",
    },
    {
      name: "Austin Area Homeschoolers",
      location: "Austin",
      description:
        "A community of homeschooling families in the Austin area offering support, resources, and group activities.",
      website: "https://www.austinhomeschoolers.com",
    },
  ],
  officialLinks: {
    lawText: "https://statutes.capitol.texas.gov/Docs/ED/htm/ED.25.htm",
    educationDept: "https://tea.texas.gov/",
    forms: ["https://thsc.org/wp-content/uploads/2020/05/Withdrawal_Letter_2020.pdf"],
  },
  gettingStarted: {
    steps: [
      "If withdrawing from public school, submit a withdrawal letter to your child's school",
      "Research and select curriculum materials that cover the five required subjects",
      "Connect with local homeschool groups for support and socialization opportunities",
      "Create a simple learning plan and schedule that works for your family",
      "Set up a designated learning space in your home",
    ],
    tips: [
      "Start slowly and give yourself and your children time to adjust",
      "Focus on the required subjects first, then add others as you become comfortable",
      "Join a local co-op for support and shared teaching responsibilities",
      "Take advantage of Texas' many museums, parks, and historical sites for field trips",
      "Remember that homeschooling is legal in Texas, and you have the right to educate your children at home",
    ],
  },
}

// This would be expanded to include data for all states
export const enhancedStatesData: Record<string, EnhancedStateData> = {
  TX: enhancedTexasData,
  // Add other states here
}
